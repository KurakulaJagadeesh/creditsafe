// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';
// eslint-disable-next-line import/extensions
import pick from 'lodash/pick.js';
import { executeQuery, executeMsearchQuery, generateIndexName } from '@usp-monorepo/usp-core/dataAccess/opensearchDAO.mjs';
import { coreQueryBuilder } from './coreQueryBuilderService.mjs';
import { exactTermQueryBuilder } from './exactTermQueryBuilderService.mjs';
import functionScoreTemplate from '../queryTemplates/functionScore.mjs';
import { apiRequestFilterFields } from '../mappings/apiRequestFilterMappings.mjs';
import { apiRequestPartialFilterFields, apiRequestPartialFilterFieldMappings } from '../mappings/apiRequestPartialFilterMappings.mjs';
import { textFieldQueries, textFieldFallbackQuery } from './textFieldQueryBuilderService.mjs';
import { coreFilterBuilder } from './coreFilterBuilderService.mjs';
import filterResults from '../mappings/groupResultsCA.mjs';
import constants from '../constants.mjs';
import { isUSsortEnabled, applyUSSortLogic } from './usSortService.mjs';

export const extractQuotedAndUnquotedText = (text) => {
	const regex = /"([^"]*)"/g;
	const quotedResults = [];
	let match = regex.exec(text);
	while (match !== null) {
		quotedResults.push(match[1]);
		match = regex.exec(text);
	}
	const result = { quoted: quotedResults, unquoted: text.replace(regex, '').trim() };
	return result;
};

export const generateExactTermsFromName = (inputObj) => {
	const { exact, countryCode, name } = inputObj;
	const blackListedCountryCodes = ['FR'];

	// extact match terms is only for name field and whitelisted countryCodes
	if (!exact && !blackListedCountryCodes.includes(countryCode) && name) {
		const { quoted, unquoted } = extractQuotedAndUnquotedText(name);
		return {
			...inputObj,
			exactTerms: quoted,
			name: unquoted,
			exact: !unquoted,
		};
	}
	return inputObj;
};

export const applyPagination = (inputObj) => {
	// Set default page and size
	const { page, pageSize, groupResults } = inputObj;
	// groupResults groups companies by groupId, marking others with the same groupId as alternatives.(CA feature)
	// Set groupResults size to be 2000(same as v3 API logic)
	return {
		from: groupResults === true ? 0 : (page - 1) * pageSize,
		size: groupResults === true ? 2000 : pageSize,
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

export const extractTextFields = (inputObj) => {
	const {
		activityCodeDescription, countryCode, pageSize, page, exact, exactTerms, ...inputObjectExCountryCode
	} = inputObj;
	// If any text fields are present then
	const textFields = omit(inputObjectExCountryCode, apiRequestFilterFields[countryCode], apiRequestPartialFilterFields[countryCode]);
	return textFields;
};

export const fetchRelevantQueries = (inputObj, isFallback) => {
	const {
		activityCodeDescription, countryCode, pageSize, page, exact, exactTerms, searchMode, ...inputObjectExCountryCode
	} = inputObj;

	// Separate params into categories, text fields and non unique ids
	const nonUniqueIds = pick(inputObj, apiRequestPartialFilterFields[countryCode]);
	const nonUniqueIdQueries = Object.entries(nonUniqueIds).map(([key, value]) => apiRequestPartialFilterFieldMappings[countryCode][key]
		.generateQueries(value).map((filter) => ({ ...filter, keys: [key] })));

	// If any text fields are present then
	const textFields = omit(inputObjectExCountryCode, apiRequestFilterFields[countryCode] ?? apiRequestFilterFields.default, apiRequestPartialFilterFields[countryCode]);
	const textFieldDict = isFallback ? [textFieldFallbackQuery] : textFieldQueries;
	const textQueries = Object.keys(textFields).length > 0 ? textFieldDict.map((query) => ({ ...query, type: 'text', keys: Object.keys(textFields) })) : [];

	return { filterQueryArrays: nonUniqueIdQueries, textQueryArray: textQueries };
};

export const generateMultiSearchUSQueries = (inputObj, sortedQueries) => sortedQueries.map((queriesArray) => {
	const { countryCode, searchMode } = inputObj;

	const filterQueriesByType = (type) => queriesArray.queries
		.filter((queryPart) => queryPart.type === type)
		.map((filterQuery) => filterQuery.generateQueryPartial(inputObj))
		.flat();

	const textQueries = filterQueriesByType('text');
	const filterMustQueries = filterQueriesByType('filter.must');
	const filterShouldQueries = filterQueriesByType('filter.should');

	return {
		...applyPagination(inputObj),
		query: {
			bool: {
				must: [...textQueries],
				filter: {
					bool: {
						must: [...coreFilterBuilder(inputObj), ...filterMustQueries],
						should: [...filterShouldQueries],
						minimum_should_match: filterShouldQueries.length > 0 ? 1 : 0,
					},
				},
			},
		},
		...applyUSSortLogic(countryCode, searchMode),
	};
}).flatMap((query) => [{}, query]);

export const generateMultiSearchQueries = (inputObj, sortedQueries) => {
	const {
		countryCode, name, exactTerms, searchMode,
	} = inputObj;
	const input = !name ? omit(inputObj, ['exactTerms', 'name']) : omit(inputObj, 'exactTerms');

	if (isUSsortEnabled(countryCode, searchMode)) {
		// Handle US-specific sorting logic and skip `function_score`.
		return generateMultiSearchUSQueries(input, sortedQueries);
	}

	const queryBoilerPlate = {
		...applyPagination(inputObj),
		query: {
			function_score: {
				query: {
					bool: {
						must: exactTerms && exactTerms.length > 0 ? [coreQueryBuilder(input), exactTermQueryBuilder(exactTerms)] : [coreQueryBuilder(input)],
						filter: {
							bool: {
								must: [
									...coreFilterBuilder(input),
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
		const filterQueriesByType = (type) => queriesArray.queries.filter((queryPart) => queryPart.type === type).map((filterQuery) => filterQuery.generateQueryPartial(input)).flat();

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

export const generateQueryCombinations = (inputObj, isFallback = false) => {
	const { filterQueryArrays, textQueryArray } = fetchRelevantQueries(inputObj, isFallback);
	const queryCombinations = cartesianProduct([...filterQueryArrays, textQueryArray].filter((array) => array.length > 0));
	return queryCombinations;
};

export const mapMultisearchQueryResponse = (responses, sortedQueries, increaseRecall, groupResults, pageSize, countryCode, searchMode) => {
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
	const filteredResults = increaseRecall || nonZeroResults.filter((x) => x.avgScore > 50).length === 0 ? nonZeroResults : nonZeroResults.filter((x) => x.avgScore > 50);

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

	// At this point, set the total size to the max total across all responses
	// If there are unique results to every matchScore then max total will return incorrect totalSize.
	// This is an attempt to ensure consistent pagination across
	const totalSize = Math.max(...filteredResults.map((x) => x.total)) < pageSize ? uniqueResults.length : Math.max(...filteredResults.map((x) => x.total));

	const sortedUniqueResults = isUSsortEnabled(countryCode, searchMode)
		? uniqueResults.sort((a, b) => (b.result[constants.SOURCE]?.[constants.COEFFICIENT_LINEAR] ?? 0) - (a.result[constants.SOURCE]?.[constants.COEFFICIENT_LINEAR] ?? 0))
		: uniqueResults;
	// groupResults groups companies by groupId, marking others with the same groupId as alternatives.(CA feature)
	const groupFilterResults = groupResults === true ? filterResults(sortedUniqueResults) : sortedUniqueResults;
	const groupResultsSize = groupResults === true ? groupFilterResults.length : totalSize;

	return { results: groupFilterResults, total: groupResultsSize };
};

export const generateQueries = (inputObj, isFallback = false) => {
	const { exact = false, ...modifiedInputObj } = generateExactTermsFromName(inputObj);

	const queryCombinations = generateQueryCombinations(modifiedInputObj, isFallback);
	const scoredAndSortedQueryCombinations = sortAndScoreQueryCombinations(queryCombinations, exact);
	const multisearchQueryArray = generateMultiSearchQueries(modifiedInputObj, scoredAndSortedQueryCombinations);

	return { scoredAndSortedQueryCombinations, multisearchQueryArray };
};

export const runQueries = async (inputObj, isFallback = false) => {
	const {
		increaseRecall, countryCode, groupResults, pageSize, searchMode,
	} = inputObj;

	const { scoredAndSortedQueryCombinations, multisearchQueryArray } = generateQueries(inputObj, isFallback);

	const searchIndex = generateIndexName(constants.SERVICE_NAME, countryCode);
	const responses = await executeMsearchQuery(multisearchQueryArray, searchIndex);
	const mappedResponse = mapMultisearchQueryResponse(responses, scoredAndSortedQueryCombinations, increaseRecall, groupResults, pageSize, countryCode, searchMode);
	return mappedResponse;
};

// Determine if the search is name only
// By checking if the input object has a name field and more than one other text field
export const doesSearchContainNameAndOtherParams = (inputObj) => Object.keys(inputObj).some((x) => x === 'name') && Object.keys(extractTextFields(inputObj)).length > 1;

export const runFallbackSearch = async (inputObj) => {
	const fallbackResponses = await runQueries(inputObj, true);
	return fallbackResponses;
};

export const shouldRunFallbackSearch = (inputObj, searchResults) => {
	const { increaseRecall } = inputObj;
	const { exact = false } = generateExactTermsFromName(inputObj);

	const result = !exact && (searchResults.total === 0 || increaseRecall);
	return result;
};

export const handleNameSearchLogic = async (inputObj) => {
	// Get all the full text query name fields
	const textFields = extractTextFields(inputObj);
	const textFieldsExcName = Object.keys(textFields).filter((x) => x !== 'name');
	const inputObjExlusiveName = omit(inputObj, [...textFieldsExcName]);

	// Run a search with name only
	const nameSearchResults = await runQueries(inputObjExlusiveName);

	// If the name only search has ZERO results or increase recall flag is true,
	// then run again with other text fields included but fallback INCLUDED
	if (shouldRunFallbackSearch(inputObj, nameSearchResults)) return runFallbackSearch(inputObj);

	// If the name only search has results WITHOUT using a fallback, then run again with other text fields included but fallback EXCLUDED
	const nameSearchWithAllParams = await runQueries(inputObj);

	return nameSearchWithAllParams;
};

export const handleSearchLogic = async (inputObj) => {
	const searchResults = await runQueries(inputObj);

	return shouldRunFallbackSearch(inputObj, searchResults)
		? runFallbackSearch(inputObj)
		: searchResults;
};

export const isGenericCountrySearchWithNoParams = (inputObj) => generateQueryCombinations(inputObj).length === 0;

export const generateAndExecuteQueries = async (inputObj) => {
	const { countryCode, searchMode } = inputObj;

	const searchIndex = generateIndexName(constants.SERVICE_NAME, countryCode);

	if (isGenericCountrySearchWithNoParams(inputObj) === true) {
		const queryRequest = {
			...applyPagination(inputObj),
			query: {
				bool: {
					filter: [...coreFilterBuilder(inputObj)],
				},
			},
			...applyUSSortLogic(countryCode, searchMode),
		};
		return executeQuery(queryRequest, 100, searchIndex);
	}

	const shouldRunBespokeNameSearchLogic = doesSearchContainNameAndOtherParams(inputObj);
	const mappedResponse = await shouldRunBespokeNameSearchLogic
		? handleNameSearchLogic(inputObj)
		: handleSearchLogic(inputObj);
	return mappedResponse;
};
