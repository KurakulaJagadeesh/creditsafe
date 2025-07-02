import { INFO_TEXT } from '../responseMessages.mjs';

const createNoResultsResponse = (messageTypes, messageCodes, endPointName) => {
	const response = {
		messages: [{
			type: messageTypes.Information,
			code: messageCodes.NoResults,
			text: INFO_TEXT(endPointName).NORESULTS,
		}],
		totalSize: 0,
	};

	if (endPointName === 'directors') {
		response.directors = [];
	} else {
		response.companies = [];
	}
	return response;
};

export default createNoResultsResponse;
