// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';
// eslint-disable-next-line import/extensions
import get from 'lodash/get.js';
// eslint-disable-next-line import/extensions
import has from 'lodash/has.js';
import { coreQueryBuilder } from './coreQueryBuilderService.mjs';
import multiMatchTemplate from '../queryTemplates/multiMatch.mjs';
import functionScoreTemplate from '../queryTemplates/functionScore.mjs';
import queryFieldMappings from '../mappings/queryFieldMappings.mjs';
import apiRequestMappings from '../mappings/apiRequestMappings.mjs';
import { apiRequestFilterFields } from '../mappings/apiRequestFilterMappings.mjs';
import { apiRequestPartialFilterFields } from '../mappings/apiRequestPartialFilterMappings.mjs';

/**
 * Retrieves a specific field (e.g., synonym, plain, substr, etc.) for a given countryCode and key.
 * If the key does not exist under the specified countryCode, it falls back to 'default'.
 * @param {object} parsedInputObj - The object containing the country mappings.
 * @param {string} countryCode - The country code (e.g., 'CA', 'US').
 * @param {string} key - The key to look up (can be nested, e.g., 'address.line1').
 * @param {string} field - The specific field to retrieve (e.g., 'synonym', 'plain', 'substr').
 * @returns {*} - Returns the value of the specified field for the given countryCode and key.
 */
export const getFieldForCountry = (parsedInputObj, countryCode, key, field) => {
	const mappingObj = queryFieldMappings(parsedInputObj);
	const selectedCountry = has(mappingObj, [countryCode, ...key.split('.')]) ? countryCode : 'default';
	return get(mappingObj, [selectedCountry, ...key.split('.')])[field];
};

/**
 * Map api parameters to the elastic equivalent and generate relevant query
 * @param {object} inputObj - The input object containing the parameters to map
 * @param {Function} mappingFunc - The function to use for mapping the parameters
 * @param {Function} preprocessingFunc - Optional preprocessing function to apply to the input object
 * @returns {object} - The generated query terms
 */
export const generateMappedQueryTerms = (inputObj, mappingFunc, preprocessingFunc = undefined) => {
	const {
		countryCode, pageSize, page, exact, includePreviousName, increaseRecall, ...inputObjectExCountryCode
	} = inputObj;

	// Filter out params you don't want to be parsed into dynamic query generator (such as filters)
	// Use default route if countryCode is not explicitly defined in apiRequestFilterFields
	const relevantApiParams = omit(
		inputObjectExCountryCode,
		[...new Set([...apiRequestFilterFields[countryCode] ?? [], ...apiRequestFilterFields.default ?? []])],
		apiRequestPartialFilterFields[countryCode] || apiRequestPartialFilterFields.default,
		exact,
	);

	// Gives 2D array of mapped values e.g.
	// [[{name: nameValue}], [{address.line1: streetValue}, {address.line2: streetValue}]]
	// Which is then flattened into a single array
	const queryTerms = Object.entries(relevantApiParams).map(([key, value]) => {
		// A single API param can have multiple relevant fields in elastic for querying
		// e.g. street can be address.line1, address.line2 etc
		// Use default route if countryCode is not explicitly defined
		const mappings = apiRequestMappings[countryCode]?.[key] || apiRequestMappings.default[key];
		const values = typeof preprocessingFunc === 'undefined' ? [value] : preprocessingFunc(mappings, value);
		const result = mappingFunc(mappings, values, inputObj);

		// Need to ensure result is returned as an array, not an object
		return result;
	}).flat();

	return queryTerms;
};

// Run multi field match phrase against keyword fields
export const runExactMatchForAllSearch = (inputObj, isStrictOrder = true) => {
	const { countryCode } = inputObj;
	const mappingFunc = ((mappedKeys, values, parsedInputObj) => mappedKeys.map((key) => values.map((value) => {
		const queryFields = getFieldForCountry(parsedInputObj, countryCode, key, 'raw');
		const queries = queryFields.map((queryField) => ({
			match_phrase: {
				[queryField]: {
					query: value,
					slop: isStrictOrder ? 0 : 2,
				},
			},
		}));
		const query = {
			bool: {
				should: [
					...queries,
				],
				minimum_should_match: queries.length > 0 ? 1 : 0,
			},
		};

		return query;
	})).flat());

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc);

	return queryTerms;
};

/**
 * Run exact and ordered match phrase against keyword fields
 * @param {object} inputObj - The input object containing the parameters to match against
 * @returns {object} - The generated query terms
 */
export const runExactAndOrderedMatchForAllSearch = (inputObj) => runExactMatchForAllSearch(inputObj);

/**
 * Run exact and unordered match phrase against keyword fields
 * @param {object} inputObj - The input object containing the parameters to match against
 * @returns {object} - The generated query terms
 */
export const runExactAndUnorderedMatchForAllSearch = (inputObj) => runExactMatchForAllSearch(inputObj, false);

/**
 * Run match phrase query for company name variations
 * @param {object} inputObj - The input object containing the parameters to match against
 * @returns {object} - The generated query terms
 */
export const runCompanyNameMatchPhraseVariationsSearch = (inputObj) => {
	const { countryCode } = inputObj;
	// Preprocessing function returns an array of company name values,
	// which are the permutations of the company name with one of the tokens missing each time.
	// For example 'Bear Hugs Day Nursery Ltd' would produce the following:
	// 1. Bear Hugs Day Nursery Ltd
	// 2. Hugs Day Nursery Ltd
	// 3. Bear Day Nursery Ltd
	// 4. Bear Hugs Nursery Ltd
	// 5. Bear Hugs Day Ltd
	// 6. Bear Hugs Day Nursery
	const preprocessingFunc = (mappedKeys, value) => {
		const companyName = Object.hasOwn(inputObj, 'companyName') ? inputObj.companyName.split(/\s/) : undefined;
		if (typeof companyName === 'undefined') {
			return [value];
		}
		const values = [];
		values.push(companyName.join(' '));
		for (let i = 0; i < companyName.length; i += 1) {
			const temp = companyName.slice();
			temp.splice(i, 1);
			values.push(temp.join(' '));
		}
		return values;
	};

	const mappingFunc = ((mappedKeys, values, parsedInputObj) => mappedKeys.map((key) => values.map((value) => {
		const queryFields = getFieldForCountry(parsedInputObj, countryCode, key, 'plain');
		const queries = queryFields.map((queryField) => ({
			match_phrase: {
				[queryField]: {
					query: value,
					slop: 1,
				},
			},
		}));

		const query = {
			function_score: {
				query: {
					bool: {
						must: [
							{
								bool: {
									should: [
										...queries,
									],
									minimum_should_match: queries.length > 0 ? 1 : 0,
								},
							},
							coreQueryBuilder(inputObj),
						],
					},
				},
				...functionScoreTemplate[countryCode],
			},
		};

		return query;
	})).flat());

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc, preprocessingFunc);

	return queryTerms;
};

/**
 * Run match phrase query that utilises synonyms
 * e.g. Creditsafe Services Ltd would match Creditsafe Services Limited
 * @param {object} inputObj - The input object containing the parameters to match against
 * @param {boolean} isStrictOrder - Whether to match the fields in strict order or not
 * @returns {object} - The generated query terms
 */
export const runExactMatchForAllWithSynonymsSearch = (inputObj, isStrictOrder = true) => {
	const { countryCode } = inputObj;

	const mappingFunc = ((mappedKeys, values, parsedInputObj) => mappedKeys.map((key) => values.map((value) => {
		// Use default route if countryCode.key is not explicitly defined in queryFieldMappings
		const queryFields = getFieldForCountry(parsedInputObj, countryCode, key, 'synonym');
		const queries = queryFields.map((queryField) => ({
			match_phrase: {
				[queryField]: {
					query: value,
					slop: isStrictOrder ? 0 : 2,
				},
			},
		}));
		const query = {
			bool: {
				should: [
					...queries,
				],
				minimum_should_match: queries.length > 0 ? 1 : 0,
			},
		};

		return query;
	})).flat());

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc);
	return queryTerms;
};

export const runExactAndOrderedtMatchForAllWithSynonymsSearch = (inputObj) => runExactMatchForAllWithSynonymsSearch(inputObj);
export const runExactAndUnorderedMatchForAllWithSynonymsSearch = (inputObj) => runExactMatchForAllWithSynonymsSearch(inputObj, false);

/**
 * Run match phrase query that utilises synonyms, stopwords and stemmers
 * @param {object} inputObj - The input object containing the parameters to match against
 * @param {boolean} isStrictOrder - Whether to match the fields in strict order or not
 * @returns {object} - The generated query terms
 */
export const runMatchForAllWithSynonymsStopwordsStemmers = (inputObj, isStrictOrder = true) => {
	const { countryCode } = inputObj;
	const mappingObj = queryFieldMappings(inputObj);

	const mappingFunc = ((mappedKeys, values) => values.map((value) => ({
		multi_match: {
			...multiMatchTemplate,
			query: value,
			type: 'phrase',
			slop: isStrictOrder ? 0 : 2,
			// Get all of the synonym, stopwords & stem subfields for a given input
			// e.g. mapped input param = companyName
			// relevant subfields for that field: ["synonyms", "stopwords", "stemmers"]
			// output = fields: ["companyName.synonyms". "companyName.stopwords", "companyName.stemmers"]
			// fields: mappedKeys.map((mappedKey) => queryFieldMappings[mappedKey].synStopStem.map((subfield) => `${mappedKey}.${subfield}`)),
			// fields: mappedKeys.map((mappedKey) => `${mappedKey}.plain`),
			// Use default route if countryCode.key is not explicitly defined in queryFieldMappings
			fields: mappedKeys.map((mappedKey) => getFieldForCountry(mappingObj, countryCode, mappedKey, 'default')).flat(),
		},
	})).flat());

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc);
	return queryTerms;
};

export const runMatchAndOrderedForAllWithSynonymsStopwordsStemmers = (inputObj) => runMatchForAllWithSynonymsStopwordsStemmers(inputObj);
export const runMatchAndUnorderedForAllWithSynonymsStopwordsStemmers = (inputObj) => runMatchForAllWithSynonymsStopwordsStemmers(inputObj, false);

/**
 * Generates a bool must query for each whitespace separated term.
 * Uses the default analysed field for inputs
 * e.g. User input =  address: 'Dissen Bahnhofstraße''
 * Generates the following query:
 * {"bool":{"must":[{"match":{"address.simpleValue":"Dissen"}},{"match":{"address.simpleValue":"Bahnhofstraße"}}]
 * @param {object} inputObj - The input object containing the country code and other parameters.
 * @param {string} inputObj.countryCode - The country code to use for mapping fields.
 * @returns {Array} An array of query terms for token matching with AND clauses.
 */
export const runMatchingWithAndClausesForEachWhitespaceSeparatedToken = (inputObj) => {
	const { countryCode } = inputObj;

	const preprocessingFunc = (_, value) => value.split(' ');

	const mappingFunc = ((mappedKeys, values, parsedInputObj) => {
		const queries = mappedKeys.flatMap((key) => values.flatMap((value) => {
			const queryFields = getFieldForCountry(parsedInputObj, countryCode, key, 'default');
			return queryFields.map((queryField) => ({
				match: {
					[queryField]: value,
				},
			}));
		}));

		return [
			{
				bool: {
					must: queries,
				},
			},
		];
	});

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc, preprocessingFunc);
	return queryTerms;
};

/**
 * Run substring match query for non-core input parameters
 * @param {object} inputObj - The input object containing the parameters to match against
 * @returns {object} - The generated query terms
 */
export const runSubstringMatchForNonCoreInputParams = (inputObj) => {
	const { countryCode } = inputObj;

	const mappingFunc = ((mappedKeys, values, parsedInputObj) => mappedKeys.map((key) => values.map((value) => {
		const queryFields = getFieldForCountry(parsedInputObj, countryCode, key, 'substr');
		const queries = queryFields.map((queryField) => ({
			match_phrase: {
				[queryField]: {
					query: value,
					slop: 2,
				},
			},
		}));
		const query = {
			bool: {
				should: [
					...queries,
				],
				minimum_should_match: queries.length > 0 ? 1 : 0,
			},
		};

		return query;
	})).flat());

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc);
	return queryTerms;
};

/**
 * Run fallback match query
 * Use default route if countryCode is not explicitly defined in queryFieldMappings
 * @param {object} inputObj - The input object containing the parameters to match against
 * @returns {object} - The generated query terms
 */
export const runFallbackMatch = (inputObj) => {
	const { countryCode } = inputObj;
	const mappingObj = queryFieldMappings(inputObj);

	const mappingFunc = ((mappedKeys, values) => {
		const queries = values.map((value) => ({
			multi_match: {
				...multiMatchTemplate,
				operator: mappedKeys.some((key) => key === 'company.name') ? 'OR' : 'AND',
				query: value,
				fields: mappedKeys.map((mappedKey) => getFieldForCountry(mappingObj, countryCode, mappedKey, 'fallback')).flat(),
			},
		})).flat();

		return queries;
	});

	const queryTerms = generateMappedQueryTerms(inputObj, mappingFunc);
	return queryTerms;
};

export const textFieldQueries = [
	{ generateQueryPartial: runExactAndOrderedMatchForAllSearch, matchScore: 100 },
	{ generateQueryPartial: runExactAndUnorderedMatchForAllSearch, matchScore: 95 },
	{ generateQueryPartial: runExactAndOrderedtMatchForAllWithSynonymsSearch, matchScore: 99 },
	{ generateQueryPartial: runExactAndUnorderedMatchForAllWithSynonymsSearch, matchScore: 90 },
	{ generateQueryPartial: runMatchAndOrderedForAllWithSynonymsStopwordsStemmers, matchScore: 80 },
	{ generateQueryPartial: runMatchAndUnorderedForAllWithSynonymsStopwordsStemmers, matchScore: 70 },
	{ generateQueryPartial: runMatchingWithAndClausesForEachWhitespaceSeparatedToken, matchScore: 65 },
	{ generateQueryPartial: runSubstringMatchForNonCoreInputParams, matchScore: 60 },
	{ generateQueryPartial: runCompanyNameMatchPhraseVariationsSearch, matchScore: 55 },
	// { generateQueryPartial: runFallbackMatch, matchScore: 50 },
];
