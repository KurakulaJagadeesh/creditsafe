import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import inputOutputLogger from '@middy/input-output-logger';
import validator from '@middy/validator';
import createError from 'http-errors';
import { transpileSchema } from '@middy/validator/transpile';
import httpResponseSerializerMiddleware from '@middy/http-response-serializer';
import httpEventNormalizer from '@middy/http-event-normalizer';
import companyCriteriaObject from '@usp-monorepo/usp-core/config/companyExternalCriterias.mjs';
import directorCriteriaObject from '@usp-monorepo/usp-core/config/directorExternalCriterias.mjs';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import inputSchema from './inputSchema.mjs';
import outputSchema from './outputSchema.mjs';
import { mergeCriterias } from './mergeService.mjs';
import httpResponseHeaderHandler from './httpResponseHandlerMiddleware.mjs';

// Transpile during cold start to avoid time delay
const transpiledInputSchema = transpileSchema(inputSchema);
const transpiledOutputSchema = transpileSchema(outputSchema);

// Create a logger instance for this service
const logger = createLogger('cs-search-criterias');

const lambdaHandler = async (event) => {
	const { queryStringParameters: { countries }, path } = event;

	let criterias = {};
	logger.info(criterias);
	// switch statement for path - assign const reference to let variable
	switch (path) {
		case '/searchcriteria':
		case '/searchcriteria/company':
			criterias = companyCriteriaObject;
			logger.info('returning company criteria');
			break;
		case '/peopleSearchCriteria':
			criterias = directorCriteriaObject;
			logger.info('returning director criteria');
			break;
		default:
			logger.error('Path not found');
			throw new createError.NotFound(`Path ${path} not found`);
	}

	logger.info(criterias);
	const countryCodes = countries.split(',');

	if (!countryCodes.every((countryCode) => countryCode in criterias.searchCriteria)) {
		throw new createError.BadRequest(`Search criterias not found for one or more countries from: ${countries}`);
	}

	// Use JSON.parse(JSON.stringify(criterias)) to avoid mutating the original object
	// This is a workaround to avoid issues with nested objects in JavaScript
	// as the original object is used in the mergeCriterias function
	// and we want to keep the original object intact for other countries.
	// This is a common practice to avoid side effects in functional programming.
	// This is not the most efficient way to deep clone an object, but it works
	// and is simple to understand.
	if (countryCodes.length > 1) return mergeCriterias(countryCodes, JSON.parse(JSON.stringify(criterias)));

	const { languages = [], criteriaSets = [] } = criterias.searchCriteria[countryCodes[0]];

	logger.info(criteriaSets);
	const result = {
		countries: countryCodes,
		languages,
		criteriaSets,
	};

	return result;
};

// aws lambda must use named export for entry point of handler
// eslint-disable-next-line import/prefer-default-export
export const handler = middy()
	.use(httpEventNormalizer())
	.use(httpResponseHeaderHandler())
	.use(httpErrorHandler())
	.use(inputOutputLogger())
	.use(
		httpResponseSerializerMiddleware({
			serializers: [
				{
					regex: /^application\/json$/,
					serializer: ({ body }) => JSON.stringify(body),
				},
			],
			defaultContentType: 'application/json',
		}),
	)
	.use(
		validator({
			eventSchema: transpiledInputSchema,
			responseSchema: transpiledOutputSchema,
		}),
	)
	.handler(lambdaHandler);
