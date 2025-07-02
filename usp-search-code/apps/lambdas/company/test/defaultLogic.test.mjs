import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runExactMatchForAllSearch, runExactMatchForAllWithSynonymsSearch } from '../src/services/textFieldQueryBuilderService.mjs';

describe('textFieldQueryBuilderService Default Country Logic', () => {
	it('Should use default query fields for exact match when countryCode "AF" does not exist in mappings', () => {
		const inputObj = {
			countryCode: 'AF',
			name: 'Adel Zahid',
			page: 1,
			pageSize: 15,
		};
		const result = runExactMatchForAllSearch(inputObj);
		const expected = [{
			bool: {
				should: [
					{
						match_phrase: {
							'name.raw': {
								query: 'Adel Zahid',
								slop: 0,
							},
						},
					},
					{
						match_phrase: {
							'tradingNames.raw': {
								query: 'Adel Zahid',
								slop: 0,
							},
						},
					},
				],
				minimum_should_match: 1,
			},
		}];
		assert.deepStrictEqual(result, expected, 'Default query fields for exact match with undefined countryCode "AF" should be "name.raw, tradingNames.raw"');
	});

	describe('textFieldQueryBuilderService Default Country Logic', () => {
		it('Should use default query fields for synonym match when countryCode "AF" does not exist in mappings', () => {
			const inputObj = {
				countryCode: 'AF',
				name: 'Adel Zahid',
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
									'name.synonyms': {
										query: 'Adel Zahid',
										slop: 0,
									},
								},
							},
							{
								match_phrase: {
									'tradingNames.synonyms': {
										query: 'Adel Zahid',
										slop: 0,
									},
								},
							},
						],
						minimum_should_match: 1,
					},
				},
			];
			assert.deepStrictEqual(result, expected, 'Default query fields for synonym match with undefined countryCode "AF" should be "name.synonyms, tradingNames.raw"');
		});
	});
});
