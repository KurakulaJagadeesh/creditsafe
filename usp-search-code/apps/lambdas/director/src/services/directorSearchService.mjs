import { mergeMultiCountrySearchResults } from '@usp-monorepo/usp-core/services/coreServices.mjs';
import { identifiers } from '../mappings/identifiers.mjs';
import { generateAndExecuteQueries } from './multisearchQueryLogicService.mjs';
import runIdentifierSearch from './idSearchQueryLogicService.mjs';

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

export const runSearch = async (inputObj) => {
	const { countries = '', ...queryParamsExCountryCode } = inputObj;
	const { page, pageSize } = inputObj;
	const countryCodesArray = countries.split(',');

	const searchAggregateResultsArray = await Promise.all(countryCodesArray.map((countryCode) => runSingleCountrySearch({ ...queryParamsExCountryCode, countryCode })));
	const mergedResults = mergeMultiCountrySearchResults(inputObj, searchAggregateResultsArray);
	return {
		...mergedResults,
		page,
		pageSize,
	};
};
