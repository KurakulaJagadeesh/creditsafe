import { executeQuery, generateIndexName } from '@usp-monorepo/usp-core/dataAccess/opensearchDAO.mjs';
import { generateMatchQueryJson } from '@usp-monorepo/usp-core/services/coreServices.mjs';
import { identifiers } from '../mappings/identifiers.mjs';
import apiRequestMappings from '../mappings/apiRequestMappings.mjs';
import { apiRequestPartialIdentifierFields, apiRequestPartialIdentifierFieldMappings } from '../mappings/apiRequestPartialIdentifierMappings.mjs';
import { coreFilterBuilder } from './coreFilterBuilderService.mjs';
import constants from '../constants.mjs';

/**
 * Generates a search query JSON object for a given array of queries and input object.
 * @param {Array} queries - The array of queries containing key-value pairs.
 * @param {object} inputObj - The input object to use in the filter query.
 * @returns {object} The generated search query JSON object.
 */
export const generateIdSearchQueryJson = (queries, inputObj) => {
	const query = queries.map(({ key, value }) => generateMatchQueryJson(key, value));

	const queryJson = {
		query: {
			bool: {
				should: query,
				minimum_should_match: 1,
				filter:	{
					bool: {
						must: [
							...coreFilterBuilder(inputObj),
						],
					},
				},
			},
		},
	};

	return queryJson;
};

/**
 * Runs an identifier search based on the provided input object.
 * @param {object} inputObj - The input object containing the search parameters.
 * @returns {Promise<object>} A promise that resolves to the result of the search query.
 * @property {object} result - The result of the search query.
 * @property {number} result.total - The total number of hits for the search query.
 * @property {object[]} result.results - The results of the search query.
 * @async
 */
const runIdentifierSearch = async (inputObj) => {
	// if any id's are present, check for any hits
	// only one id can be present in a search request (dictated by Connect search criteria endpoint)
	// there are country nuances here e.g. USA: safe no - UK: safe no, reg no
	// IT: safe no, vat no, tax code, CCIAA, NREA

	const { countryCode } = inputObj;

	// Determine which id fields are relevant given the country
	// and see if one has been provided as a param
	const identifier = identifiers[countryCode]?.find((id) => Object.hasOwn(inputObj, id)) ?? identifiers.defaultIdentifiers.find((id) => Object.hasOwn(inputObj, id));

	// If no identifiers have been provided then skip this step
	if (typeof identifier === 'undefined') {
		return {
			total: 0,
		};
	}

	// Map api input param to corresponding field in Elastic
	const mappedParam = apiRequestMappings[countryCode]?.[identifier]?.[0] || apiRequestMappings.default[identifier][0];

	// Check if any identifiers require partial matching
	const partialId = Object.keys(apiRequestPartialIdentifierFields).includes(countryCode) ? apiRequestPartialIdentifierFields[countryCode].find((id) => Object.hasOwn(inputObj, id)) : undefined;

	// Check if any partial identifiers have been provided as a param, if so, run the partial query search,
	// If not, return a basic term query as normal
	let idQuery;
	if (partialId) {
		const queryArray = apiRequestPartialIdentifierFieldMappings[countryCode][partialId].generateQueries(inputObj[identifier]);
		idQuery = generateIdSearchQueryJson(queryArray, inputObj);
	} else {
		idQuery = generateIdSearchQueryJson([{ key: mappedParam, value: inputObj[identifier] }], inputObj);
	}

	// Run the query
	const result = await executeQuery(idQuery, 100, generateIndexName(constants.SERVICE_NAME, countryCode));

	return result;
};

export default runIdentifierSearch;
