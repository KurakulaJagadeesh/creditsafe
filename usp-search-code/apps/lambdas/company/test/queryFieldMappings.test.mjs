import assert from 'node:assert';
import { describe, it } from 'node:test';
import queryFieldMappings from '../src/mappings/queryFieldMappings.mjs';

describe('queryFieldMappings Test', () => {
	[true, undefined, false].forEach((includePreviousName) => {
		const shouldIncludePreviousNames = includePreviousName;

		it(`should return previousNames: ${shouldIncludePreviousNames} if includePreviousNames property: ${includePreviousName} for countryCode: DE`, () => {
			const input = {
				includePreviousName,
			};

			const actualDEOutput = queryFieldMappings(typeof includePreviousName === 'undefined' ? {} : input).DE;

			// Define your expected output here
			const expectedOutput = shouldIncludePreviousNames
				? {
					default: ['name', 'tradingNames', 'previousNames'],
					fallback: ['name.*', 'tradingNames.*', 'previousNames.*'],
					plain: ['name.plain', 'tradingNames', 'previousNames'],
					synonym: ['name.synonyms', 'tradingNames', 'previousNames'],
					raw: ['name.raw', 'tradingNames.raw', 'previousNames.raw'],
					substr: ['name.plain', 'tradingNames', 'previousNames'],
				} : {
					default: ['name', 'tradingNames'],
					fallback: ['name.*', 'tradingNames.*'],
					plain: ['name.plain', 'tradingNames'],
					synonym: ['name.synonyms', 'tradingNames'],
					raw: ['name.raw', 'tradingNames.raw'],
					substr: ['name.plain', 'tradingNames'],
				};

			assert.deepStrictEqual(actualDEOutput.name, expectedOutput);
		});
	});
});
