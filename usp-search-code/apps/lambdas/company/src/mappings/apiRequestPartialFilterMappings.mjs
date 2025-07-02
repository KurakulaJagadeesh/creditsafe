import ASCIIFolder from 'fold-to-ascii';
import constants from '../constants.mjs';

/**
 * This constant contains an object with partial filter fields for each country.
 * @type {object}
 */
export const apiRequestPartialFilterFields = {
	AT: [
		constants.PHONE_NO,
		constants.POSTCODE,
	],
	BE: [
		constants.POSTCODE,
		constants.REG_NO,
		constants.VAT_NO,
	],
	CA: [
		constants.POSTCODE,
	],
	DE: [
		constants.REG_NO,
		constants.PHONE_NO,
		constants.VAT_NO,
		constants.POSTCODE,
	],
	FR: [
		constants.VAT_NO,
		constants.POSTCODE,
		constants.REG_NO,
	],
	GB: [
		constants.VAT_NO,
		constants.POSTCODE,
		constants.PHONE_NO,
	],
	IE: [
		constants.POSTCODE,
		constants.PHONE_NO,
		constants.WEBSITE,
	],
	IT: [
		constants.POSTCODE,
		constants.VAT_NO,
	],
	NL: [
		constants.VAT_NO,
		constants.POSTCODE,
		constants.REG_NO,
	],
	SE: [
		constants.PHONE_NO,
		constants.VAT_NO,
		constants.POSTCODE,
	],
	US: [
		constants.POSTCODE,
		constants.WEBSITE,
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
	AT: {
		phoneNo: {
			generateQueries: (phoneNo) => {
				// Analyze the input to be consistent with ingest transforms
				// Normalize input by removing all '(0)' occurances along with normalisation analyzer (must be done first to isolate bracketed 0)
				const normalizedPhoneNo = normalizationAnalyzer(phoneNo.replaceAll(/\(0\)|\D/g, ''));
				const prefixAnalyzedPhoneNo = normalizedPhoneNo.replace(/^(0043|430|43|00|0)/, '');
				const areaCodeAnalyzedPhoneNo = prefixAnalyzedPhoneNo.replace(/^(662)/, '');

				return [
					generateQueryObj(100, 'address.telephone.raw', phoneNo),
					generateQueryObj(100, 'address.telephone.full', normalizedPhoneNo),
					generateQueryObj(99, 'address.telephone.exPrefix', prefixAnalyzedPhoneNo),
					generateQueryObj(80, 'address.telephone.exAreaCode', areaCodeAnalyzedPhoneNo),
				];
			},
		},
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(60, 'address.postCode.outCode', analyzedPostCode),
					generateQueryObj(60, 'address.postCode.inCode', analyzedPostCode),
				];
			},
		},
	},
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
				const prefixRegNo = normalizationAnalyzer(regNo).substring(1, 10);

				return [
					generateQueryObj(100, 'regNo.full', analyzedRegNo),
					generateQueryObj(90, 'regNo.exPrefix', analyzedRegNo),
					generateQueryObj(90, 'regNo.raw', prefixRegNo),
					// Handle the scenario of someone passing in a vatNo instead of a regNo (this only applies to Data services when using isGGS flag = true)
					// by checking if the regNo starts with 'be' and if so, remove it
					// we can use the .full analyzed field since that will have the country code removed
					/^be/.exec(analyzedRegNo) && generateQueryObj(80, 'regNo.full', analyzedRegNo.replace(/^be/, '')),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);
				// If the input is of format is 14 of alpha numeric value BE042231909301
				const prefixVatNo = normalizationAnalyzer(vatNo).substring(2, 12);
				// If the input is of format has 10/12 digits 0206566052/020656605201
				const numbervatNo = normalizationAnalyzer(vatNo).substring(0, 10);
				return [
					generateQueryObj(100, 'vatNo.raw', vatNo),
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
					generateQueryObj(90, 'vatNo.exPrefix', prefixVatNo),
					generateQueryObj(90, 'vatNo.exPrefix', numbervatNo),
					// Also search in regNo field for vatNo since nearly 2 thirds of all records have a null vatNo
					// and the regNo is largely similar to the vatNo
					generateQueryObj(80, 'regNo.full', analyzedVatNo),
					generateQueryObj(70, 'regNo.exPrefix', analyzedVatNo),
				];
			},
		},
	},
	CA: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.outCode', analyzedPostCode),
				];
			},
		},
	},
	DE: {
		phoneNo: {
			/**
			 * Generates an array of query objects for filtering phone numbers.
			 * @param {string} phoneNo - The phone number to filter by.
			 * @returns {object[]} - An array of query objects with specified properties.
			 */
			generateQueries: (phoneNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPhoneNo = normalizationAnalyzer(phoneNo).replaceAll(/^0+/g, '');

				return [
					generateQueryObj(100, 'phoneNumbers.full', analyzedPhoneNo),
					generateQueryObj(100, 'phoneNumbers.raw', phoneNo),
					generateQueryObj(99, 'phoneNumbers.exPrefix', analyzedPhoneNo),
				];
			},
		},
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				const test = [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw.keyword', postCode),
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
					generateQueryObj(100, 'regNo.full', analyzedRegNo),
					generateQueryObj(100, 'regNo.raw.keyword', regNo),
					generateQueryObj(90, 'regNo.exPrefix', analyzedRegNo),
					generateQueryObj(80, 'regNo.exSuffix', analyzedRegNo),
					generateQueryObj(70, 'regNo.numeric', analyzedRegNo),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);

				return [
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
					generateQueryObj(100, 'vatNo.raw.keyword', vatNo),
					generateQueryObj(99, 'vatNo.exPrefix', analyzedVatNo),
				];
			},
		},
	},
	FR: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.inCode', analyzedPostCode),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);

				return [
					generateQueryObj(100, 'vatNo.raw', vatNo),
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
					generateQueryObj(99, 'vatNo.exPrefix', analyzedVatNo),
				];
			},
		},
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normalizationAnalyzer(regNo);

				return [
					generateQueryObj(100, 'regNo.full', analyzedRegNo),
					generateQueryObj(100, 'regNo.raw', regNo),
					generateQueryObj(90, 'regNo.partial', analyzedRegNo),
				];
			},
		},
	},
	GB: {
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);

				return [
					generateQueryObj(100, 'vatNo.raw', vatNo),
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
					generateQueryObj(99, 'vatNo.exPrefix', analyzedVatNo),
				];
			},
		},
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
		phoneNo: {
			generateQueries: (phoneNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPhoneNo = normalizationAnalyzer(phoneNo);
				return [
					generateQueryObj(100, 'phoneNumbers.full', analyzedPhoneNo),
					generateQueryObj(100, 'phoneNumbers.raw', phoneNo),
				];
			},
		},
	},
	IE: {
		postCode: {
			generateQueries: (postCode) => {
				const analyzedPostCode = normalizationAnalyzer(postCode);
				// Preprocess the postCode to normalize variations like dublin 08 => dublin8
				const fullanalyzedPostCode = normalizationAnalyzer(postCode).replaceAll(/\s+/g, '').replaceAll(/0+/g, '');
				// dublin 2 => d02, dublin12 => d12 adding this part to have same result count for dublin 2, d02 search
				const partialfullanalyzedPostCode = fullanalyzedPostCode.replace(/^dublin0?(\d{1,2})$/i, (_, digits) => `d${digits.padStart(2, '0')}`);
				// Return the query objects in the desired format
				return [
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.full', fullanalyzedPostCode),
					generateQueryObj(80, 'address.postCode.areaCode', partialfullanalyzedPostCode),
					generateQueryObj(80, 'address.postCode.areaCode', analyzedPostCode),
					generateQueryObj(60, 'address.postCode.areaCode', fullanalyzedPostCode),
				];
			},
		},
		phoneNo: {
			generateQueries: (phoneNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPhoneNo = normalizationAnalyzer(phoneNo);
				const prefixAnalyzedPhoneNo = analyzedPhoneNo.replace(/^(00|353|\+353|0)/, '');
				return [
					generateQueryObj(100, 'phoneNumbers.full', analyzedPhoneNo),
					generateQueryObj(100, 'phoneNumbers.raw', phoneNo),
					generateQueryObj(80, 'phoneNumbers.exPrefix', prefixAnalyzedPhoneNo),
				];
			},
		},
		website: {
			generateQueries: (website) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedWebsite = normalizationAnalyzer(website);
				const prefixAnalyzedWebsite = website.replace(/^(https?:\/{0,2})?(www\.)?|[\\/]+$/g, '');
				return [
					generateQueryObj(100, 'urls.raw', website),
					generateQueryObj(90, 'urls.domain', analyzedWebsite),
					generateQueryObj(90, 'urls.name', analyzedWebsite),
					generateQueryObj(90, 'urls.domain', prefixAnalyzedWebsite),
				];
			},
		},
	},
	IT: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.raw.keyword', postCode),
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.two', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.three', analyzedPostCode),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);
				return [
					generateQueryObj(100, 'vatNo.raw', vatNo),
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
				];
			},
		},
	},
	NL: {
		postCode: {
			generateQueries: (postCode) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPostCode = normalizationAnalyzer(postCode);

				return [
					generateQueryObj(100, 'address.postCode.full', analyzedPostCode),
					generateQueryObj(100, 'address.postCode.raw', postCode),
					generateQueryObj(80, 'address.postCode.prefix', analyzedPostCode),
					generateQueryObj(80, 'address.postCode.areaCode', analyzedPostCode),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);
				// If the input is of format
				const suffixVatNo = normalizationAnalyzer(vatNo).slice(0, -3);
				const prefixVatNo = normalizationAnalyzer(vatNo).substring(2, 11);
				return [
					generateQueryObj(100, 'vatNo.raw', vatNo),
					generateQueryObj(100, 'vatNo.partial', analyzedVatNo),
					generateQueryObj(100, 'vatNo.rsin', prefixVatNo),
					generateQueryObj(99, 'vatNo.rsin', suffixVatNo),
				];
			},
		},
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normalizationAnalyzer(regNo);

				return [
					generateQueryObj(100, 'regNo.full', analyzedRegNo),
					generateQueryObj(100, 'regNo.raw', regNo),
					generateQueryObj(99, 'regNo.partial', analyzedRegNo),
				];
			},
		},
	},
	SE: {
		phoneNo: {
			generateQueries: (phoneNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedPhoneNo = normalizationAnalyzer(phoneNo).replaceAll(/^\+?/g, '').replaceAll(/-/g, '');
				const prefixAnalyzedPhoneNo = analyzedPhoneNo.replace(/^(0046|046|460|46|00|0)/, '');

				// phoneNos.full - Remove dash, plus sign, and spaces
				// phoneNos.exAreaCode - Split raw number by the dash, taking the last part, and normalize
				// phoneNos.exPrefix - Remove leading 0, 00, 46, or 0046
				return [
					generateQueryObj(100, 'address.telephone.full', analyzedPhoneNo),
					generateQueryObj(99, 'address.telephone.exPrefix', prefixAnalyzedPhoneNo),
					generateQueryObj(80, 'address.telephone.exAreaCode', analyzedPhoneNo),
				];
			},
		},
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
					generateQueryObj(70, 'address.postCode.city', analyzedPostCode),
				];
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normalizationAnalyzer(vatNo);

				return [
					generateQueryObj(100, 'vatNo.full', analyzedVatNo),
					generateQueryObj(99, 'vatNo.exPrefix', analyzedVatNo),
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
		website: {
			generateQueries: (website) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedWebsite = normalizationAnalyzer(website);
				const prefixAnalyzedWebsite = website.replace(/(https?:\/\/|www\.|\/\/)/g, '');
				const caseInsensitiveprefixAnalyzedWebsite = prefixAnalyzedWebsite.toLowerCase();
				return [
					generateQueryObj(100, 'urls.domain', website),
					generateQueryObj(90, 'urls.domain', analyzedWebsite),
					generateQueryObj(90, 'urls.raw', caseInsensitiveprefixAnalyzedWebsite),
					generateQueryObj(90, 'urls.domain', prefixAnalyzedWebsite),
				];
			},
		},
	},
};
