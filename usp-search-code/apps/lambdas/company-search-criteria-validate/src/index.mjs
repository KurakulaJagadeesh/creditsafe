import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import inputOutputLogger from '@middy/input-output-logger';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile';
import httpResponseSerializerMiddleware from '@middy/http-response-serializer';
import inputSchema from './inputSchema.mjs';
import outputSchema from './outputSchema.mjs';
import validateSearchCriteria from './validator.mjs';
import httpResponseHeaderHandler from './httpResponseHandlerMiddleware.mjs';

const transpiledInputSchema = transpileSchema(inputSchema);
const transpiledOutputSchema = transpileSchema(outputSchema);

const lambdaHandler = async (event) => {
	const { body } = event;
	const result = validateSearchCriteria(body.query, body.criteriaSets);
	return result.length === 0 ? { isQueryValid: true } : { isQueryValid: false, error: result.map((x) => x).join(',') };
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy()
	.use(inputOutputLogger())
	.use(jsonBodyParser())
	.use(httpResponseHeaderHandler())
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
	.use(httpErrorHandler())
	.handler(lambdaHandler);
