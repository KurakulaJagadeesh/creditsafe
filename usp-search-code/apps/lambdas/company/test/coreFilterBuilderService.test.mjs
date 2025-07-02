import assert from 'node:assert';
import { describe, it } from 'node:test';
import { generateFilterQueries } from '../src/services/coreFilterBuilderService.mjs';
import { apiRequestFilterFieldMappings } from '../src/mappings/apiRequestFilterMappings.mjs';

describe('coreFilterBuilderServiceTest', () => {
	describe('generateFilterQueries', () => {
		it('should generate filter queries correctly if CSV status is supplied', () => {
			// Test input
			const filters = {
				countryCode: 'SE',
				status: 'Active',
			};

			// Expected output
			const expectedQueries = [
				{
					term: {
						countryCode: {
							value: 'SE',
						},
					},
				},
				{
					term: {
						status: {
							value: 'Active',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'DE', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});

		it('should generate filter queries correctly if status field has only one value', () => {
			// Test input
			const filters = {
				status: 'Inactive',
			};

			// Expected output
			const expectedQueries = [
				{
					term: {
						status: {
							value: 'Inactive',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'DE', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});
	});
});
