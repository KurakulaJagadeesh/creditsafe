import ASCIIFolder from 'fold-to-ascii';

/**
 * This constant contains an object with partial identifier fields for each country.
 * @type {object}
 */
export const apiRequestPartialIdentifierFields = {
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
 * This object contains mappings for partial identifier fields for each country.
 */
export const apiRequestPartialIdentifierFieldMappings = {
};
