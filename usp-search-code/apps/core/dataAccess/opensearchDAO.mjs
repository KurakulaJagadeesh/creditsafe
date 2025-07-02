import createOpensearchResponse from '../models/opensearchResponseMapper.mjs';
import createOpensearchMultiQueryResponse from '../models/opensearchMultiQueryResponseMapper.mjs';

export const generateIndexName = (serviceName, countryCode) => `${serviceName}-${countryCode.toLowerCase()}`;

export const executeMsearchQuery = async (queryArray, index) => {
	global.logger.info(index);
	queryArray.map((query) => global.logger.info(query));

	const response = await global.client.msearch({
		index,
		body: queryArray,
	});

	global.logger.info(response.body);
	return createOpensearchMultiQueryResponse(response);
};

export const executeQuery = async (query, matchScore, index) => {
	const queryObj = {
		index,
		body: query,
	};

	global.logger.info(queryObj);

	const response = await global.client.search(queryObj);
	global.logger.info(response.body);

	return createOpensearchResponse(response, matchScore);
};
