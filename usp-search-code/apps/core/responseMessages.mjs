export const INFO_TEXT = (endPointName) => Object.freeze({
	NORESULTS: `No ${endPointName} matching specified search criteria found.`,
});

export const ERROR_MESSAGE = Object.freeze({
	BAD_REQUEST: 'Bad Request',
	BAD_RESPONSE: 'Bad Response',
	DATA_ERROR: 'Data Error',
	QUERY_ERROR: 'Query Error',
	UNKNOWN_ERROR: 'Unknown Error',
	QUERY_ERROR_DETAILS: 'An error occurred while processing the query',
});
