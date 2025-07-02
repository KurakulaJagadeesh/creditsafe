// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';
// eslint-disable-next-line import/extensions
import pick from 'lodash/pick.js';
import { executeQuery, executeMsearchQuery, generateIndexName } from '@usp-monorepo/usp-core/dataAccess/opensearchDAO.mjs';
import { coreQueryBuilder } from './coreQueryBuilderService.mjs';
import functionScoreTemplate from '../queryTemplates/functionScore.mjs';
import { apiRequestFilterFields } from '../mappings/apiRequestFilterMappings.mjs';
import { apiRequestPartialFilterFields, apiRequestPartialFilterFieldMappings } from '../mappings/apiRequestPartialFilterMappings.mjs';
import { textFieldQueries } from './textFieldQueryBuilderService.mjs';
import { coreFilterBuilder } from './coreFilterBuilderService.mjs';
import constants from '../constants.mjs';

export const applyPagination = (inputObj) => {
	// Set default page and size
	const { page, pageSize } = inputObj;

	return {
		from: (page - 1) * pageSize,
		size: pageSize,
	};
};

export const cartesianProduct = (a) => {
	if (a.length === 0) return a;
	const result = a.reduce((previous, current) => previous.flatMap((d) => current.map((e) => [d, e].flat())));

	// If result is 1D array then convert to 2D
	// e.g. [1,2,3] => [[1,2,3]]
	return result[0] instanceof Array ? result : result.map((x) => [x]);
};
export const average = (arr) => arr.reduce((previous, current) => previous + current, 0) / arr.length;

export const fetchRelevantQueries = (inputObj) => {
	const {
		countryCode, pageSize, page, ...inputObjectExCountryCode
	} = inputObj;
	// Separate params into categories, text fields and non unique ids
	const nonUniqueIds = pick(inputObj, apiRequestPartialFilterFields[countryCode]);
	const nonUniqueIdQueries = Object.entries(nonUniqueIds).map(([key, value]) => apiRequestPartialFilterFieldMappings[countryCode][key]
		.generateQueries(value).map((filter) => ({ ...filter, keys: [key] })));

	// If any text fields are present then
	const textFields = omit(
		inputObjectExCountryCode,
		[...new Set([...apiRequestFilterFields[countryCode] ?? [], ...apiRequestFilterFields.default ?? []])],
		apiRequestPartialFilterFields[countryCode],
	);
	const textQueries = Object.keys(textFields).length > 0 ? textFieldQueries.map((query) => ({ ...query, type: 'text', keys: Object.keys(textFields) })) : [];

	return { filterQueryArrays: nonUniqueIdQueries, textQueryArray: textQueries };
};

export const generateMultiSearchQueries = (inputObj, sortedQueries) => {
	const { countryCode } = inputObj;
	const queryBoilerPlate = {
		...applyPagination(inputObj),
		query: {
			function_score: {
				query: {
					bool: {
						must: [coreQueryBuilder(inputObj)],
						filter: {
							bool: {
								must: [
									...coreFilterBuilder(inputObj),
								],
								should: [],
							},
						},
					},
				},
				...functionScoreTemplate[countryCode],
			},
		},
	};

	// Generate an aggregate query for each array of query partials
	const constructedQueryArray = sortedQueries.map((queriesArray) => {
		/**
		 * Filters an array of query objects by type and generates query partials for each query object.
		 * @param {string} type - The type of query to filter by.
		 * @returns {Array} An array of query partials.
		 */
		const filterQueriesByType = (type) => queriesArray.queries.filter((queryPart) => queryPart.type === type).map((filterQuery) => filterQuery.generateQueryPartial(inputObj)).flat();

		const textQueries = filterQueriesByType('text');
		const filterMustQueries = filterQueriesByType('filter.must');
		const filterShouldQueries = filterQueriesByType('filter.should');

		const result = {
			...queryBoilerPlate,
			query: {
				function_score: {
					...queryBoilerPlate.query.function_score,
					query: {
						...queryBoilerPlate.query.function_score.query,
						bool: {
							must: [
								...queryBoilerPlate.query.function_score.query.bool.must,
								...textQueries,
							],
							filter: {
								bool: {
									...queryBoilerPlate.query.function_score.query.bool.filter.bool,
									must: [
										...queryBoilerPlate.query.function_score.query.bool.filter.bool.must,
										...filterMustQueries,
									],
									should: [
										...queryBoilerPlate.query.function_score.query.bool.filter.bool.should,
										...filterShouldQueries,
									],
									minimum_should_match: filterShouldQueries.length > 0 ? 1 : 0,
								},
							},
						},
					},
				},
			},
		};

		return result;
	});

	const multiSearchQueryArray = constructedQueryArray.flatMap((query) => [{}, query]);
	return multiSearchQueryArray;
};

export const sortAndScoreQueryCombinations = (queryCombinations, exact = false) => {
	// Apply an average score to each combination
	const avgScoreResults = queryCombinations.map((resultRow) => ({
		avgScore: average(resultRow.map((x) => x.matchScore)),
		queries: [...resultRow],
	}));

	// Sort queries by average score
	const sortedQueries = exact ? avgScoreResults.filter((x) => x.avgScore === 100) : avgScoreResults.sort((a, b) => {
		if (a.avgScore === b.avgScore) return 0;
		return a.avgScore > b.avgScore ? -1 : 1;
	});
	global.logger.info(sortedQueries);

	return sortedQueries;
};

export const generateQueryCombinations = (inputObj) => {
	const { filterQueryArrays, textQueryArray } = fetchRelevantQueries(inputObj);
	const queryCombinations = cartesianProduct([...filterQueryArrays, textQueryArray].filter((array) => array.length > 0));
	return queryCombinations;
};

export const mapMultisearchQueryResponse = (responses, sortedQueries, increaseRecall) => {
	// Associate the responses to the sorted queries so we can see how many responses per avg score bracket
	// e.g.
	// 0:{avgScore: 100, queries: Array(1), total: 0, resultsArray: Array(0)}
	// 1:{avgScore: 99, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 2:{avgScore: 95, queries: Array(1), total: 0, resultsArray: Array(0)}
	// 3:{avgScore: 90, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 4:{avgScore: 80, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 5:{avgScore: 70, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 6:{avgScore: 65, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 7:{avgScore: 60, queries: Array(1), total: 10, resultsArray: Array(10)}
	// 8:{avgScore: 55, queries: Array(1), total: 0, resultsArray: Array(0)}
	// 9:{avgScore: 50, queries: Array(1), total: 10000, resultsArray: Array(15)}

	const associatedQueryResponses = responses.map((response, i) => {
		const { total, resultsArray } = response;
		const { avgScore, queries } = sortedQueries[i];

		const results = {
			avgScore,
			queries,
			total,
			resultsArray,
		};

		return results;
	});

	// Remove any results with a total of 0
	const nonZeroResults = associatedQueryResponses.filter((x) => x.total > 0);

	// Now filter the results to remove any results with an average score 50 (aka fallback) if we have more relevant results from other queries
	const filteredResults = increaseRecall === true || nonZeroResults.filter((x) => x.avgScore > 50).length === 0 ? nonZeroResults : nonZeroResults.filter((x) => x.avgScore > 50);

	// At this point, set the total size to the max total across all responses
	// This is an attempt to ensure consistent pagination across
	const totalSize = filteredResults.length > 0 ? Math.max(...filteredResults.map((x) => x.total)) : 0;

	// Finally we merge the results into a single array
	const mergedResults = filteredResults.reduce((acc, curr) => {
		const { avgScore, queries } = curr;

		// Concatenate the query info array into a csv string
		const queryInfo = queries.map((query) => {
			const { keys, type, matchScore } = query;
			return { keys: keys.join(','), type, matchScore };
		});

		const results = curr.resultsArray.map((y) => ({
			avgScore,
			queryInfo,
			result: y,
		}));

		return results.length > 0 ? { results: [...acc.results, ...results] } : acc;
	}, { results: [], total: 0 });

	// Finally remove any duplicate results based on the _id field
	// eslint-disable-next-line no-underscore-dangle
	const uniqueResults = mergedResults.results.filter((value, index, self) => self.findIndex((x) => x.result._id === value.result._id) === index);

	return { results: uniqueResults, total: totalSize };
};

export const generateAndExecuteQueries = async (inputObj) => {
	const { exact, increaseRecall, countryCode } = inputObj;

	const searchIndex = generateIndexName(constants.SERVICE_NAME, countryCode);
	const queryCombinations = generateQueryCombinations(inputObj);

	if (queryCombinations.length === 0) {
		return executeQuery({
			...applyPagination(inputObj),
			query: {
				function_score: {
					query: {
						bool: {
							must: [coreQueryBuilder(inputObj)],
							filter: [...coreFilterBuilder(inputObj)],
						},
					},
					...functionScoreTemplate[countryCode],
				},
			},
		}, 100, searchIndex);
	}

	const scoredAndSortedQueryCombinations = sortAndScoreQueryCombinations(queryCombinations, exact);
	const multisearchQueryArray = generateMultiSearchQueries(inputObj, scoredAndSortedQueryCombinations);
	const responses = await executeMsearchQuery(multisearchQueryArray, searchIndex);
	const mappedResponse = mapMultisearchQueryResponse(responses, scoredAndSortedQueryCombinations, increaseRecall);

	return mappedResponse;
};
