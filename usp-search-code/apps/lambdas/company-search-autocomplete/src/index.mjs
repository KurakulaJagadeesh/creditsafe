import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import inputOutputLogger from '@middy/input-output-logger';
import validator from '@middy/validator';
import createError from 'http-errors';
import { transpileSchema } from '@middy/validator/transpile';
import httpResponseSerializerMiddleware from '@middy/http-response-serializer';
import httpEventNormalizer from '@middy/http-event-normalizer';
// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';
import inputSchema from './inputSchema.mjs';
import outputSchema from './outputSchema.mjs';
import { getSuggestions } from './suggestions.mjs';
import httpResponseHeaderHandler from './httpResponseHandlerMiddleware.mjs';
import apiRequestMappings from './mappings/apiRequestMapping.mjs';
import apiContextMappings from './mappings/apiContextMapping.mjs';
import mapToResponseModel from './mappings/responseMapper.mjs';
import createClient from './client.mjs';
import { buildContexts } from './mappings/buildContexts.mjs';

// Transpile during cold start to avoid time delay
const transpiledInputSchema = transpileSchema(inputSchema);
const transpiledOutputSchema = transpileSchema(outputSchema);

// Using global vars as they are safe for aws lambda
// Replicates dependency injection and avoids "prop drilling"
global.client = createClient();

export const lambdaHandler = async (event) => {
	const DEFAULT_MAP_COUNTRIES = ['AF', 'AU', 'BE', 'CH', 'ES', 'FI', 'ID', 'KH', 'KR', 'LI', 'LU', 'MM', 'MX', 'MY', 'TH', 'VN'];
	const { queryStringParameters, path } = event;
	const {
		countryCode, size = 10, contextField, contextValue, ...inputObj
	} = queryStringParameters;
	const input = omit(inputObj, countryCode, size, contextField, contextValue);
	const inputKeys = Object.keys(input);

	if (inputKeys.length === 0) throw new createError.BadRequest('No Input Specified');
	else if (inputKeys.length > 1) throw new createError.BadRequest('Invalid Input, does not support multiple input parameters');
	else if (
		!Object.keys(apiRequestMappings[countryCode] ?? {}).includes(inputKeys[0])
		&& !Object.keys(apiRequestMappings.default).includes(inputKeys[0])
	) throw new createError.BadRequest('Invalid Input Parameter');

	// Check if countryCode is either in DEFAULT_MAP_COUNTRIES or defined in apiContextMappings
	if (!DEFAULT_MAP_COUNTRIES.includes(countryCode) && !apiContextMappings[countryCode]) {
		throw new createError.BadRequest(`Invalid country code: ${countryCode}`);
	} else if (
		contextField
		&& (
			(apiContextMappings[countryCode]?.[inputKeys[0]]
				&& !apiContextMappings[countryCode][inputKeys[0]].includes(contextField))
			|| (DEFAULT_MAP_COUNTRIES.includes(countryCode) && apiContextMappings.default?.[inputKeys[0]]
				&& !apiContextMappings.default[inputKeys[0]].includes(contextField))
		)
	) throw new createError.BadRequest('Invalid context');

	const contexts = buildContexts(countryCode, contextField, contextValue);
	const suggestions = await getSuggestions(path, countryCode, input, contexts, size);
	const response = mapToResponseModel(suggestions, countryCode);

	return {
		totalSize: response.length,
		companies: response,
	};
};

// aws lambda must use named export for entry point of handler

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
