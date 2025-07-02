import assert from 'node:assert';
import { describe, it } from 'node:test';
import deref from 'json-schema-deref-sync';
import parseAndModifyQueryStringParameters from '@usp-monorepo/usp-core/middlewares/parseAndModifyQueryStringParametersMiddleware.mjs';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import swagger from '@usp-monorepo/usp-core/config/usp-swagger.json' with { type: 'json' };
import constants from '../src/constants.mjs';

// Set up logger for tests
global.logger = createLogger(constants.SERVICE_NAME);

const swaggerSchema = deref(swagger);
const schemaPath = swaggerSchema.components.schemas;
const INPUT_VALIDATION_SCHEMA = schemaPath['CompanySearch.InputParameters'];

const { before } = parseAndModifyQueryStringParameters(INPUT_VALIDATION_SCHEMA);

describe('parseAndModifyQueryStringParameters', () => {
	it('should convert input strings to their correct types', async () => {
		const request = {
			event: {
				queryStringParameters: {
					pageSize: '10',
					page: '1',
					exact: 'true',
					name: 'test',
				},
			},
		};

		const expectedOutput = {
			event: {
				queryStringParameters: {
					pageSize: 10,
					page: 1,
					name: 'test',
					exact: true,
				},
			},
		};

		before(request);

		assert.deepStrictEqual(request, expectedOutput);
	});

	it('should add default paging values if missing', async () => {
		const request = {
			event: {
				queryStringParameters: {
					name: 'test',
				},
			},
		};

		const expectedOutput = {
			event: {
				queryStringParameters: {
					pageSize: 10,
					page: 1,
					name: 'test',
				},
			},
		};

		before(request);

		assert.deepStrictEqual(request, expectedOutput);
	});

	it('should return an empty object if no query string parameters are provided', async () => {
		const request = {
			event: {
				queryStringParameters: {},
			},
		};

		const expectedOutput = {
			event: {
				queryStringParameters: {
					page: 1,
					pageSize: 10,
				},
			},
		};

		before(request);

		assert.deepStrictEqual(request, expectedOutput);
	});

	it('should move the address property to address.simpleValue', async () => {
		const request = {
			event: {
				queryStringParameters: {
					pageSize: '10',
					page: '1',
					address: '123 Main St',
				},
			},
		};

		const expectedOutput = {
			event: {
				queryStringParameters: {
					pageSize: 10,
					page: 1,
					simpleValue: '123 Main St',
				},
			},
		};

		before(request);

		assert.deepStrictEqual(request, expectedOutput);
	});
});
