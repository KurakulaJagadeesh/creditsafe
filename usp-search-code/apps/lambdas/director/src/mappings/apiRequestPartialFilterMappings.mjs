import ASCIIFolder from 'fold-to-ascii';
import constants from '../constants.mjs';

/**
 * This constant contains an object with partial filter fields for each country.
 * @type {object}
 */
export const apiRequestPartialFilterFields = {
	BE: [
		constants.POSTCODE,
		constants.REG_NO,
	],
	DE: [
		constants.POSTCODE,
		constants.REG_NO,
	],
	FR: [
		constants.REG_NO,
	],
	GB: [
		constants.POSTCODE,
	],
	IE: [
		constants.POSTCODE,
	],
	US: [
		constants.POSTCODE,
	],
};

/**
 * This function normalizes the given input string by performing a series of transformations:
 * 1. ASCII folding: Replaces non-ASCII characters with their ASCII counterparts.
 * 2. Lowercasing: Converts all characters in the string to lowercase.
 * 3. Whitespace and non-word character removal: Eliminates tabs, newlines, spaces, and other non-word characters.
 * @param {string} input - The input string to be normalized.
 * @returns {string} - The normalized version of the input string.
 */
export const normalizationAnalyzer = (input) => ASCIIFolder.foldReplacing(input)
	.toLowerCase()
	.replaceAll(/(\r\n|\n|\r|\t|\s|\W)/g, '');

/**
 * Generates a term query object for the specified key-value pair.
 * @param {string} key - The key to be queried.
 * @param {string|number} value - The value to be searched for in the specified key.
 * @returns {object} - A term query object with specified properties.
 */
export const generateTermQueryJson = (key, value) => ({
	term: {
		[key]: {
			value,
		},
	},
});

const filterMustString = 'filter.must';

/**
 * Helper function to create a query object. This function reduces redundancy
 * and improves readability whenever a query object needs to be created.
 * @param {number} score - The match score for the query.
 * @param {string} indexField - The field in the index to be queried.
 * @param {string|number} value - The value to be searched for in the specified index field.
 * @param {string} [filterType] - The type of filter to be applied. Defaults to 'filterShouldString'.
 * @returns {object} - A query object with specified properties.
 */
const generateQueryObj = (score, indexField, value, filterType = filterMustString) => ({
	matchScore: score,
	type: filterType,
	generateQueryPartial: () => generateTermQueryJson(indexField, value),
});

/**
 * This object contains mappings for partial filter fields for each country.
 */
export const apiRequestPartialFilterFieldMappings = {
	BE: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.code', analyzedPostCode),
				];
			},
		},
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normalizationAnalyzer(regNo);
				const prefixRegNo = analyzedRegNo.substring(1, 10);

				return [
					generateQueryObj(100, 'companies.regNo.full', analyzedRegNo),
					generateQueryObj(90, 'companies.regNo.exPrefix', analyzedRegNo),
					generateQueryObj(90, 'companies.regNo.raw', prefixRegNo),
				];
			},
		},
	},
	DE: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				const test = [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.prefix', analyzedPostCode),
				];

				return test;
			},
		},
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normalizationAnalyzer(regNo);

				return [
					generateQueryObj(100, 'companies.regNo.full', analyzedRegNo),
					generateQueryObj(100, 'companies.regNo.raw', regNo),
					generateQueryObj(90, 'companies.regNo.exPrefix', analyzedRegNo),
					generateQueryObj(80, 'companies.regNo.exSuffix', analyzedRegNo),
					generateQueryObj(70, 'companies.regNo.numeric', analyzedRegNo),
				];
			},
		},
	},
	FR: {
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normalizationAnalyzer(regNo);

				return [
					generateQueryObj(100, 'companies.regNo.full', analyzedRegNo),
					generateQueryObj(100, 'companies.regNo.raw', regNo),
					generateQueryObj(90, 'companies.regNo.partial', analyzedRegNo),
				];
			},
		},
	},
	GB: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.outCode', analyzedPostCode),
				];
			},
		},
	},
	IE: {
		postCode: {
			generateQueries: (postCode) => {
				const analyzedPostCode = normalizationAnalyzer(postCode);
				// Preprocess the postCode to normalize variations like dublin 08 => dublin8
				const fullAnalyzedPostCode = analyzedPostCode.replaceAll(/\s+/g, '').replaceAll(/0+/g, '');
				// dublin 2 => d02, dublin12 => d12 adding this part to have same result count for dublin 2, d02 search
				const partialFullAnalyzedPostCode = fullAnalyzedPostCode.replace(/^dublin0?(\d{1,2})$/i, (_, digits) => `d${digits.padStart(2, '0')}`);
				// Return the query objects in the desired format
				return [
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.full', fullAnalyzedPostCode),
					generateQueryObj(80, 'address.postCode.areaCode', partialFullAnalyzedPostCode),
					generateQueryObj(80, 'address.postCode.areaCode', analyzedPostCode),
					generateQueryObj(60, 'address.postCode.areaCode', fullAnalyzedPostCode),
				];
			},
		},
	},
	US: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				// address.postCode.city = first 2 digits
				// address.postCode.prefix = first 3 digits
				return [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.prefix', analyzedPostCode),
				];
			},
		},
	},
};
