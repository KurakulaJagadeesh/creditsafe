import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import inputOutputLogger from '@middy/input-output-logger';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile';
import httpResponseSerializerMiddleware from '@middy/http-response-serializer';
import mergeCriterias from './mergeService.mjs';
import inputSchema from './inputSchema.mjs';
import outputSchema from './outputSchema.mjs';
import httpResponseHeaderHandler from './httpResponseHandlerMiddleware.mjs';

// Transpile during cold start to avoid time delay
const transpiledInputSchema = transpileSchema(inputSchema);
const transpiledOutputSchema = transpileSchema(outputSchema);

const lambdaHandler = async (event) => {
	const { body } = event;
	return mergeCriterias(body);
};

// aws lambda must use named export for entry point of handler
// eslint-disable-next-line import/prefer-default-export
export const handler = middy()
	.use(httpErrorHandler())
	.use(httpResponseHeaderHandler())
	.use(inputOutputLogger())
	.use(jsonBodyParser())
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
