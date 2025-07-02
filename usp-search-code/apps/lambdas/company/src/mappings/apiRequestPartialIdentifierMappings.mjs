import ASCIIFolder from 'fold-to-ascii';
import constants from '../constants.mjs';

/**
 * This constant contains an object with partial identifier fields for each country.
 * @type {object}
 */
export const apiRequestPartialIdentifierFields = {
	AT: [
		constants.REG_NO,
		constants.VAT_NO,
	],
	CA: [
		constants.SAFE_NO,
	],
	IE: [
		constants.VAT_NO,
	],
	SE: [
		constants.REG_NO,
	],
	CH: [
		constants.REG_NO,
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
export const normilizationAnalyzer = (input) => ASCIIFolder.foldReplacing(input)
	.toLowerCase()
	.replaceAll(/(\r\n|\n|\r|\t|\s|\W)/g, '');

/**
 * This object contains mappings for partial identifier fields for each country.
 */
export const apiRequestPartialIdentifierFieldMappings = {
	AT: {
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedRegNo = normilizationAnalyzer(regNo);

				const queries = [
					{ key: 'regNo.full', value: analyzedRegNo },
					{ key: 'regNo.raw', value: analyzedRegNo },
					{ key: 'regNo.exPrefix', value: analyzedRegNo },
					{ key: 'regNo.exSuffix', value: analyzedRegNo },
					{ key: 'regNo.numeric', value: analyzedRegNo },
				];

				return queries;
			},
		},
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normilizationAnalyzer(vatNo);

				const queries = [
					{ key: 'vatNo.full', value: analyzedVatNo },
					{ key: 'vatNo.exPrefix', value: analyzedVatNo },
				];

				return queries;
			},
		},
	},
	CA: {
		safeNo: {
			generateQueries: (safeNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedSafeNo = normilizationAnalyzer(safeNo);

				const queries = [
					{ key: 'companyId.full', value: analyzedSafeNo },
					{ key: 'companyId.raw', value: analyzedSafeNo },
					{ key: 'companyId.exPrefix', value: analyzedSafeNo },
				];

				return queries;
			},
		},
	},
	IE: {
		vatNo: {
			generateQueries: (vatNo) => {
				// Analyze the input to be consistent with ingest transforms
				const analyzedVatNo = normilizationAnalyzer(vatNo);

				const queries = [
					{ key: 'vatNo.raw', value: analyzedVatNo },
					{ key: 'vatNo.full', value: analyzedVatNo },
				];

				return queries;
			},
		},
	},
	SE: {
		regNo: {
			generateQueries: (regNo) => {
				// Analyze the input to be consistent with ingest transforms
				// Remove all preceding 0s from beginning of search string - use this as our new normalised input, and from that apply the following INDIVIDUALLY:
				const analyzedRegNo = normilizationAnalyzer(regNo).replace(/^0+/, '');

				// 1. Search on this input only (to match direct searches eg 1261098 -> 1261098 or 0001261098 -> 1261098) - analyzedRegNo

				const queries = [{ key: 'regNo', value: analyzedRegNo }];
				if (analyzedRegNo.length >= 9) {
					// 2. Remove last two digits from end of search string IF length of search string is >= 9 (to cover 01-99 businesses)
					queries.push({ key: 'regNo', value: analyzedRegNo.slice(0, -2) });
					// 3. Remove preceding 20/200/2000/20000 from search string IF length of search string is >= 9
					queries.push({ key: 'regNo', value: analyzedRegNo.replace(/^(20000|2000|200|20)/, '') });
					// 4. Remove preceding 19 from search string IF length of search string is >= 9
					queries.push({ key: 'regNo', value: analyzedRegNo.replace(/^19/, '') });
					// 5. Remove preceding 20/200/2000/20000 from search string AND remove last two digits from end of search string (to cover 01-99 businesses) IF length of search string is >= 9
					queries.push({ key: 'regNo', value: analyzedRegNo.replace(/^(20000|2000|200|20)/, '').slice(0, -2) });
					// 6. Remove preceding 19 from search string AND remove last two digits from end of search string (to cover 01-99 businesses) IF length of search string is >= 9
					queries.push({ key: 'regNo', value: analyzedRegNo.replace(/^19/, '').slice(0, -2) });
				}
				return queries;
			},
		},
	},
	CH: {
		regNo: {
			generateQueries: (regNo) => {
				// Normalize the input with the existing analyzer
				const normalized = normilizationAnalyzer(regNo);

				// Use regex to match optional "CHE" or "CH" prefixes and 9 digits, allowing for separators
				const match = normalized.match(/(?:CHE|CH)?[-.\s/]*\d{3}[-.\s/]*\d{3}[-.\s/]*\d{3}/i);

				// Standardize to "CHE" prefix if a match is found
				let normalizedRegNo;
				if (match) {
					// Clean the matched result by removing separators (hyphens, periods, spaces, slashes)
					const cleanedMatch = match[0].replace(/[-.\s/]/g, '');

					// Ensure the result starts with "CHE" if it doesn't already
					normalizedRegNo = cleanedMatch.toUpperCase().startsWith('CHE')
						? cleanedMatch.toUpperCase()
						: `CHE${cleanedMatch.toUpperCase().replace(/^CH/, '')}`; // Remove CH if it's there and replace for CHE - all data is CHE
				} else {
					// If no valid match, use the normalized input as-is
					normalizedRegNo = normalized;
				}

				const queries = [
					{ key: 'regNo.raw', value: normalizedRegNo },
				];

				return queries;
			},
		},
	},
};
