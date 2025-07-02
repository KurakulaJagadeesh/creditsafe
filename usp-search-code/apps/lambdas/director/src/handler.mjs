import deref from 'json-schema-deref-sync';
import createError from 'http-errors';
import createNoResultsResponse from '@usp-monorepo/usp-core/models/noResultsResponseMapper.mjs';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import {
	loadSwaggerDefaults, lambdaHandler,
} from '@usp-monorepo/usp-core/middlewares/index.mjs';
import createClient from '@usp-monorepo/usp-core/repositories/opensearchClient.mjs';
import swagger from '@usp-monorepo/usp-core/config/usp-swagger.json' with { type: 'json' };
import criteriaObject from '@usp-monorepo/usp-core/config/directorInternalCriterias.mjs';
import mapToResponseModel from './models/responseMapper.mjs';
import { runSearch } from './services/directorSearchService.mjs';
import constants from './constants.mjs';

// Using global vars as they are safe for aws lambda
// Replicates singleton pattern and avoids "prop drilling"
global.client = createClient();
global.logger = createLogger(constants.SERVICE_NAME);

global.logger.info(`Logger initialised with log level ${global.logger.getLevelName()}`);

const {
	INPUT_VALIDATION_SCHEMA, OUTPUT_VALIDATION_SCHEMA, MESSAGE_TYPES, MESSAGE_CODES,
} = loadSwaggerDefaults(
	deref(swagger),
	constants.SWAGGER_INPUT_VALIDATION_PATH,
	constants.SWAGGER_OUTPUT_VALIDATION_PATH,
);

export const directorSearch = async (event) => {
	const { queryStringParameters } = event;

	global.logger.info('Director search handler invoked', { queryStringParameters });

	const results = await runSearch(queryStringParameters);

	const response = results.results.length === 0
		? createNoResultsResponse(MESSAGE_TYPES, MESSAGE_CODES, constants.ENDPOINT_NAME)
		: mapToResponseModel(results);

	return response;
};

// aws lambda must use named export for entry point of handler

export const handler = async (event) => {
	try {
		const criteriaValidationParams = { INPUT_VALIDATION_SCHEMA, OUTPUT_VALIDATION_SCHEMA, criteriaObject };
		return lambdaHandler(directorSearch, constants.SERVICE_NAME, criteriaValidationParams)(event);
	} catch (error) {
		throw new createError.InternalServerError(error.message);
	}
};
