export const mergeMultiCountrySearchResults = (inputObj, multiCountryResults) => {
	const { pageSize } = inputObj;
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
		results: mergedResults.results.sort((a, b) => b.avgScore - a.avgScore || b.result._score - a.result._score).slice(0, pageSize),
	};
};

/**
 * Generates a match query JSON object for a given key-value pair.
 * @param {string} key - The key to use in the match query.
 * @param {string} value - The value to use in the match query.
 * @returns {object} The generated match query JSON object.
 */
export const generateMatchQueryJson = (key, value) => ({
	match: {
		[key]: {
			query: value,
		},
	},
});
