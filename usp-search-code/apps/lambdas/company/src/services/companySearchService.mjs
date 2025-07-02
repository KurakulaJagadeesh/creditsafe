import getUserById from '@usp-monorepo/usp-core/dataAccess/userIdSearch.mjs';
import { identifiers } from '../mappings/identifiers.mjs';
import { generateAndExecuteQueries } from './multisearchQueryLogicService.mjs';
import runIdentifierSearch from './idSearchQueryLogicService.mjs';
import { isUSsortEnabled } from './usSortService.mjs';

export const runSingleCountrySearch = async (inputObj) => {
	const {
		pageSize, countryCode = '', page, groupResults,
	} = inputObj;
	// No need to check cache in first instance, will rely on API gateway cache for this
	// if the id search gives any hits then return
	const identifier = (identifiers[countryCode] ?? identifiers.defaultIdentifiers).find((id) => Object.hasOwn(inputObj, id));

	if (identifier) {
		return runIdentifierSearch(inputObj);
	}

	const resultsObj = await generateAndExecuteQueries(inputObj);

	// Take page size of results
	// groupResults groups companies by groupId, marking others with the same groupId as alternatives.(CA feature)
	return {
		...resultsObj,
		results: groupResults === true ? resultsObj.results.slice((page - 1) * pageSize, page * pageSize) : resultsObj.results.slice(0, pageSize),
	};
};

export const mergeMultiCountrySearchResults = (inputObj, multiCountryResults) => {
	const { pageSize, searchMode } = inputObj;
	const mergedResults = multiCountryResults.reduce(
		(prev, curr) => (
			{
				results: [...prev.results.concat(curr.results)],
				total: prev.total + curr.total,
			}),
		{ results: [], total: 0 },
	);

	return {
		...mergedResults,
		// eslint-disable-next-line no-underscore-dangle
		results: isUSsortEnabled('US', searchMode)
			? mergedResults.results.slice(0, pageSize)
			: mergedResults.results
				// eslint-disable-next-line no-underscore-dangle
				.sort((a, b) => b.avgScore - a.avgScore || b.result._score - a.result._score)
				.slice(0, pageSize),
	};
};

export const runSearch = async (inputObj, userId = '') => {
	const { countries = '', ...queryParamsExCountryCode } = inputObj;
	const { page, pageSize } = inputObj;
	const countryCodesArray = countries.split(',');
	let activityCodeDescription = '';
	if (userId) {
		activityCodeDescription = await getUserById(userId);
	}
	const searchAggregateResultsArray = await Promise.all(countryCodesArray.map((countryCode) => runSingleCountrySearch({ ...queryParamsExCountryCode, countryCode, activityCodeDescription })));
	const mergedResults = mergeMultiCountrySearchResults(inputObj, searchAggregateResultsArray);
	return {
		...mergedResults,
		page,
		pageSize,
	};
};
