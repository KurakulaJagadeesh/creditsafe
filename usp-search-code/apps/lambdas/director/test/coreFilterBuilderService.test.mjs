import assert from 'node:assert';
import { describe, it } from 'node:test';
import { generateFilterQueries } from '../src/services/coreFilterBuilderService.mjs';
import { apiRequestFilterFieldMappings } from '../src/mappings/apiRequestFilterMappings.mjs';

describe('coreFilterBuilderServiceTest', () => {
	describe('generateFilterQueries', () => {
		it('should generate filter queries correctly if CSV status is supplied', () => {
			// Test input
			const filters = {
				countryCode: 'GB',
				status: 'Active',
			};

			// Expected output
			const expectedQueries = [
				{
					term: {
						countryCode: {
							value: 'GB',
						},
					},
				},
				{
					term: {
						'companies.status': {
							value: 'Active',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'GB', apiRequestFilterFieldMappings);

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
						'companies.status': {
							value: 'Inactive',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'GB', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});

		it('should generate filter queries correctly if status field has only one value', () => {
			// Test input
			const filters = {
				status: 'Active,Inactive',
			};

			// Expected output
			const expectedQueries = [
				{
					terms: {
						'companies.status': [
							'Active',
							'Inactive',
						],
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'GB', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});

		it('should generate filter range queries correctly for dateOfBirth field', () => {
			// Test input
			const filters = {
				dateOfBirth: '1965-12',
			};

			// Expected output
			const expectedQueries = [
				{
					range: {
						dateOfBirth: {
							lt: '1965-12||/M+1M',
							gte: '1965-12||/M',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'DE', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});

		it('should generate filter range queries correctly for ageMax, ageMin, dateOfBirth fields', () => {
			// Test input
			const filters = {
				ageMax: '60',
				ageMin: '40',
				dateOfBirth: '1965-12-28',
			};

			// Expected output
			const expectedQueries = [
				{
					range: {
						dateOfBirth: {
							gte: 'now-60y/d',
						},
					},
				},
				{
					range: {
						dateOfBirth: {
							lte: 'now-40y/d',
						},
					},
				},
				{
					range: {
						dateOfBirth: {
							lt: '1965-12-28||/M+1M',
							gte: '1965-12-28||/M',
						},
					},
				},
			];

			// Generate filter queries
			const generatedQueries = generateFilterQueries(filters, 'GB', apiRequestFilterFieldMappings);

			// Assert the generated queries match the expected queries
			assert.deepStrictEqual(generatedQueries, expectedQueries);
		});
	});
});
