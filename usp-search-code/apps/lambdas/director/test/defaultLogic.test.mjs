import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runExactMatchForAllSearch, runExactMatchForAllWithSynonymsSearch } from '../src/services/textFieldQueryBuilderService.mjs';

describe('textFieldQueryBuilderService Default Country Logic', () => {
	it('Should use default query fields for exact match when countryCode "BE" does not exist in mappings', () => {
		const inputObj = {
			countryCode: 'BE',
			firstName: 'Cato',
			page: 1,
			pageSize: 15,
		};
		const result = runExactMatchForAllSearch(inputObj);
		const expected = [
			{
				bool: {
					should: [
						{
							match_phrase: {
								'firstName.raw': {
									query: 'Cato',
									slop: 0,
								},
							},
						}],
					minimum_should_match: 1,
				},
			}];
		assert.deepStrictEqual(result, expected, 'Default query fields for exact match with undefined countryCode "BE" should be "firstName.raw"');
	});

	describe('textFieldQueryBuilderService Default Country Logic', () => {
		it('Should use default query fields for synonym match when countryCode "BE" does not exist in mappings', () => {
			const inputObj = {
				countryCode: 'BE',
				firstName: 'Cato',
				page: 1,
				pageSize: 15,
			};
			const result = runExactMatchForAllWithSynonymsSearch(inputObj);
			const expected = [
				{
					bool: {
						should: [
							{
								match_phrase: {
									'firstName.synonyms': {
										query: 'Cato',
										slop: 0,
									},
								},
							}],
						minimum_should_match: 1,
					},
				}];
			assert.deepStrictEqual(result, expected, 'Default query fields for synonym match with undefined countryCode "BE" should be "firstName.synonyms"');
		});
	});
});
