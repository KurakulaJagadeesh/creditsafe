import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runFallbackMatch } from '../src/services/textFieldQueryBuilderService.mjs';

describe('runFallbackMatch Test', () => {
	it('should generate OR operator if company name param present', () => {
		const input = {
			countryCode: 'DE',
			name: 'test name',
			simpleValue: 'test address',
		};

		const actualOutput = runFallbackMatch(input);

		// Define your expected output here
		const expectedOutput = [{
			multi_match: {
				query: 'test name',
				fields: ['name.*', 'tradingNames.*'],
				type: 'most_fields',
				slop: 2,
				prefix_length: 0,
				max_expansions: 50,
				lenient: true,
				zero_terms_query: 'NONE',
				auto_generate_synonyms_phrase_query: true,
				fuzzy_transpositions: true,
				boost: 1,
				operator: 'OR',
			},
		}, {
			multi_match: {
				query: 'test address',
				fields: ['address.simpleValue'],
				type: 'most_fields',
				slop: 2,
				prefix_length: 0,
				max_expansions: 50,
				lenient: true,
				zero_terms_query: 'NONE',
				auto_generate_synonyms_phrase_query: true,
				fuzzy_transpositions: true,
				boost: 1,
				operator: 'AND',
			},
		}];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
	it('should generate AND operator for all params except company name', () => {
		const input = {
			countryCode: 'DE',
			city: 'test city',
			simpleValue: 'test address',
		};

		const actualOutput = runFallbackMatch(input);

		// Define your expected output here
		const expectedOutput = [{
			multi_match: {
				query: 'test city',
				fields: ['address.city', 'address.registeredCity'],
				type: 'most_fields',
				slop: 2,
				prefix_length: 0,
				max_expansions: 50,
				lenient: true,
				zero_terms_query: 'NONE',
				auto_generate_synonyms_phrase_query: true,
				fuzzy_transpositions: true,
				boost: 1,
				operator: 'AND',
			},
		}, {
			multi_match: {
				query: 'test address',
				fields: ['address.simpleValue'],
				type: 'most_fields',
				slop: 2,
				prefix_length: 0,
				max_expansions: 50,
				lenient: true,
				zero_terms_query: 'NONE',
				auto_generate_synonyms_phrase_query: true,
				fuzzy_transpositions: true,
				boost: 1,
				operator: 'AND',
			},
		}];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});
