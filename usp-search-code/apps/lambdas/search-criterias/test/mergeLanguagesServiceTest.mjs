import { describe, it } from 'node:test';
import assert from 'node:assert';
import { mergeLanguages } from '../src/mergeService.mjs';

describe('Merge Language Service', () => {
	it('should return native language if one country is provided', () => {
		const testInput = {
			countriesCriteria: [
				{
					languages: [
						'PT',
					],
					country: 'BR',
				},
			],
		};

		const expectedOutput = ['PT'];
		const result = mergeLanguages(testInput, testInput.countriesCriteria.map((x) => x.country));
		assert.equal(JSON.stringify(result), JSON.stringify(expectedOutput));
	});
	it('should return EN language if > 1 country is provided', () => {
		const testInput = {
			countriesCriteria: [
				{
					languages: [
						'PT',
					],
					country: 'BR',
				},
				{
					languages: [
						'JP',
					],
					country: 'JP',
				},
			],
		};

		const expectedOutput = ['EN'];
		const result = mergeLanguages(testInput, testInput.countriesCriteria.map((x) => x.country));
		assert.equal(JSON.stringify(result), JSON.stringify(expectedOutput));
	});
});
