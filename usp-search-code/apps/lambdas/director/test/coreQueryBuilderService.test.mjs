import assert from 'node:assert';
import { describe, it } from 'node:test';
import { coreQueryBuilder } from '../src/services/coreQueryBuilderService.mjs';

describe('coreQueryBuilderService', () => {
	it('should return the defaultCore query template if countryCode does not exist', () => {
		const input = { countryCode: 'GB' }; // 'GB' is not in coreQueryTemplates
		const actualOutput = coreQueryBuilder(input);
		const expectedOutput = { bool: { must: [], should: [] } };
		// Replace with actual shape of coreQueryTemplates.defaultCore
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should return the specific query template for given countryCode', () => {
		const input = { countryCode: 'BE' }; // assuming NL exists in coreQueryTemplates
		const actualOutput = coreQueryBuilder(input);
		const expectedOutput = {
			bool: {
				must: [],
				should: [{
					term: {
						'companies.status': {
							value: 'Current',
							boost: 2,
						},
					},
				},
				{
					term: {
						'companies.status': {
							value: 'Former',
						},
					},
				}],
			},
		};
		// Replace with actual shape of coreQueryTemplates.defaultCore
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});
