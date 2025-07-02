import { convertToPropertyType } from '../services/validationService.mjs';

const parseAndModifyQueryStringParameters = (INPUT_VALIDATION_SCHEMA) => ({
	before: (request) => {
		const { queryStringParameters } = request.event;

		global.logger.info('Company search handler invoked', { queryStringParameters });

		// Convert input strings to their correct types
		const parsedQueryStringParams = convertToPropertyType(queryStringParameters, INPUT_VALIDATION_SCHEMA.properties);

		// Another hack to get around criteriaSets not aligning with reality.
		// This time we have to map the query parameter address to simpleValue in order to pass validation whilst honouring the swagger file
		if (parsedQueryStringParams.address) {
			parsedQueryStringParams.simpleValue = parsedQueryStringParams.address;
			delete parsedQueryStringParams.address;
		}

		// If there is no page or pageSize in the querystringParamet, set them to default values
		const { page = INPUT_VALIDATION_SCHEMA.properties.page.default, pageSize = INPUT_VALIDATION_SCHEMA.properties.pageSize.default } = parsedQueryStringParams;

		request.event.queryStringParameters = { ...parsedQueryStringParams, page, pageSize };
	},
});

export default parseAndModifyQueryStringParameters;
