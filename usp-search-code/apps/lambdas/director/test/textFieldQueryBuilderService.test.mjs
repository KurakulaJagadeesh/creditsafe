import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runExactMatchForAllSearch } from '../src/services/textFieldQueryBuilderService.mjs';

describe('runExactMatchForAllSearch Test', () => {
	it('should generate query if firstName is present', () => {
		const input = {
			countryCode: 'GB',
			firstName: 'Cato',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
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
						},
					],
					minimum_should_match: 1,
				},
			},
		];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should return an empty array if firstName is missing', () => {
		const input = { countryCode: 'GB' };

		const actualOutput = runExactMatchForAllSearch(input);

		assert.deepStrictEqual(actualOutput, []);
	});

	it('should generate query for lastName if provided', () => {
		const input = {
			countryCode: 'GB',
			lastName: 'Smith',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
			{
				bool: {
					should: [
						{
							match_phrase: {
								'lastName.raw': {
									query: 'Smith',
									slop: 0,
								},
							},
						},
					],
					minimum_should_match: 1,
				},
			},
		];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should generate queries for both firstName and lastName if both are present', () => {
		const input = {
			countryCode: 'GB',
			firstName: 'Cato',
			lastName: 'Smith',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
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
						},
					],
					minimum_should_match: 1,
				},
			},
			{
				bool: {
					should: [
						{
							match_phrase: {
								'lastName.raw': {
									query: 'Smith',
									slop: 0,
								},
							},
						},
					],
					minimum_should_match: 1,
				},
			},
		];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should ignore unexpected fields', () => {
		const input = {
			countryCode: 'GB',
			firstName: 'Cato',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
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
						},
					],
					minimum_should_match: 1,
				},
			},
		];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should generate query for country-specific fields (e.g., province for GB)', () => {
		const input = {
			countryCode: 'GB',
			province: 'London',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
			{
				bool: {
					should: [
						{
							match_phrase: {
								'address.province.raw': {
									query: 'London',
									slop: 0,
								},
							},
						},
					],
					minimum_should_match: 1,
				},
			},
		];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should generate query for NO-specific fields (e.g., postCode for NO)', () => {
		const input = {
			countryCode: 'NO',
			postCode: '0150',
		};

		const actualOutput = runExactMatchForAllSearch(input);

		const expectedOutput = [
			{
				bool: {
					should: [
						{
							match_phrase: {
								'address.postCode.raw': {
									query: '0150',
									slop: 0,
								},
							},
						},
					],
					minimum_should_match: 1,
				},
			}];

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});
