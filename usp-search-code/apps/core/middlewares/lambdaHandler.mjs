import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { captureLambdaHandler } from '@aws-lambda-powertools/tracer/middleware';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import inputOutputLogger from '@middy/input-output-logger';
import httpResponseSerializerMiddleware from '@middy/http-response-serializer';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpResponseHeaderHandler from './httpResponseHandlerMiddleware.mjs';
import inputOutputValidator from './inputOutputValidatorMiddleware.mjs';
import parseAndModifyQueryStringParameters from './parseAndModifyQueryStringParametersMiddleware.mjs';
import customErrorHandler from './customErrorHandlerMiddleware.mjs';

const lambdaHandler = (handlerName, serviceName, criteriaValidationParams) => middy()
	.use(captureLambdaHandler(new Tracer(serviceName)))
	.use(injectLambdaContext(global.logger))
	.use(httpEventNormalizer())
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
	.use(httpErrorHandler())
	.use(inputOutputLogger({
		logger: (request) => {
			global.logger.info(request.event ?? request.response);
		},
		awsContext: true,
	}))
	.use(customErrorHandler())
	.use(parseAndModifyQueryStringParameters(criteriaValidationParams.INPUT_VALIDATION_SCHEMA))
	.use(inputOutputValidator(criteriaValidationParams.INPUT_VALIDATION_SCHEMA, criteriaValidationParams.OUTPUT_VALIDATION_SCHEMA, criteriaValidationParams.criteriaObject))
	.handler(handlerName);

export default lambdaHandler;
