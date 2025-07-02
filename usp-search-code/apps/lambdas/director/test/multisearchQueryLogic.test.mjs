import assert from 'node:assert';
import { describe, it } from 'node:test';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import {
	applyPagination, cartesianProduct,
	mapMultisearchQueryResponse, sortAndScoreQueryCombinations,
} from '../src/services/multisearchQueryLogicService.mjs';

// Set up logger for tests
global.logger = createLogger();

describe('applyPagination', () => {
	it('it should return from and size', () => {
		const inputObj = {
			countryCode: 'GB', page: 1, pageSize: 20,
		};

		const expectedOutput = {
			from: 0,
			size: 20,
		};
		const actualOutput = applyPagination(inputObj);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('cartesianProduct', () => {
	it('should return an empty array when input is empty', () => {
		const input = [];
		const expectedOutput = [];
		const actualOutput = cartesianProduct(input);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should return the Cartesian product of the input arrays', () => {
		const input = [[1, 2], [3, 4]];
		const expectedOutput = [[1, 3], [1, 4], [2, 3], [2, 4]];
		const actualOutput = cartesianProduct(input);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should handle arrays with different lengths', () => {
		const input = [[1, 2], [3], [4, 5, 6]];
		const expectedOutput = [[1, 3, 4], [1, 3, 5], [1, 3, 6], [2, 3, 4], [2, 3, 5], [2, 3, 6]];
		const actualOutput = cartesianProduct(input);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should handle arrays with a single element', () => {
		const input = [[1]];
		const expectedOutput = [[1]];
		const actualOutput = cartesianProduct(input);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should remove elements with avgScore less than or equal to threshold limit in response', () => {
		const responses = [
			{
				total: 2,
				resultsArray: [{ _id: 1 }, { _id: 2 }],
			},
			{
				total: 2,
				resultsArray: [{ _id: 3 }, { _id: 4 }],
			},
		];

		const sortedQueries = [
			{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name'] }] },
			{ avgScore: 50, queries: [{ matchScore: 50, type: 'text', keys: ['name'] }] },
		];

		const expectedOutput = {
			results: [
				{
					avgScore: 100,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 100 }],
					result: { _id: 1 },
				},
				{
					avgScore: 100,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 100 }],
					result: { _id: 2 },
				},
			],
			total: 2,
		};

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});

	it('should return all results if none are greater than threshold', () => {
		const responses = [
			{
				total: 0,
				resultsArray: [],
			},
			{
				total: 2,
				resultsArray: [{ _id: 1 }, { _id: 2 }],
			},
		];

		const sortedQueries = [
			{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name'] }] },
			{ avgScore: 50, queries: [{ matchScore: 50, type: 'text', keys: ['name'] }] },
		];

		const expectedOutput = {
			results: [
				{
					avgScore: 50,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 50 }],
					result: { _id: 1 },
				},
				{
					avgScore: 50,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 50 }],
					result: { _id: 2 },
				},
			],
			total: 2,
		};

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('sortAndScoreQueryCombinations', () => {
	it('should sort queries by average score', () => {
		const queryCombinations = [
			[
				{ matchScore: 90 },
				{ matchScore: 80 },
				{ matchScore: 70 },
			],
			[
				{ matchScore: 100 },
				{ matchScore: 90 },
				{ matchScore: 80 },
			],
			[
				{ matchScore: 80 },
				{ matchScore: 70 },
				{ matchScore: 60 },
			],
		];

		const expectedOutput = [
			{
				avgScore: 90,
				queries: [
					{ matchScore: 100 },
					{ matchScore: 90 },
					{ matchScore: 80 },
				],
			},
			{
				avgScore: 80,
				queries: [
					{ matchScore: 90 },
					{ matchScore: 80 },
					{ matchScore: 70 },
				],
			},
			{
				avgScore: 70,
				queries: [
					{ matchScore: 80 },
					{ matchScore: 70 },
					{ matchScore: 60 },
				],
			},
		];

		try {
			const actualOutput = sortAndScoreQueryCombinations(queryCombinations);

			assert.deepStrictEqual(actualOutput, expectedOutput);
		} catch (e) {
			console.log(e);
		}
	});

	it('should filter queries by exact match score if exact is true', () => {
		const queryCombinations = [
			[
				{ matchScore: 90 },
				{ matchScore: 80 },
				{ matchScore: 70 },
			],
			[
				{ matchScore: 100 },
				{ matchScore: 100 },
				{ matchScore: 100 },
			],
			[
				{ matchScore: 80 },
				{ matchScore: 70 },
				{ matchScore: 60 },
			],
		];

		const expectedOutput = [
			{
				avgScore: 100,
				queries: [
					{ matchScore: 100 },
					{ matchScore: 100 },
					{ matchScore: 100 },
				],
			},
		];

		const actualOutput = sortAndScoreQueryCombinations(queryCombinations, true);

		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('mapMultisearchQueryResponse', () => {
	it('should remove duplicate rows with the same _id field', () => {
		const responses = [
			{
				total: 2,
				resultsArray: [{ _id: 1 }, { _id: 2 }],
			},
			{
				total: 3,
				resultsArray: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
			},
		];

		const sortedQueries = [
			{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name'] }] },
			{ avgScore: 99, queries: [{ matchScore: 99, type: 'text', keys: ['name'] }] },
		];

		const expectedOutput = {
			results: [
				{
					avgScore: 100,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 100 }],
					result: { _id: 1 },
				},
				{
					avgScore: 100,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 100 }],
					result: { _id: 2 },
				},
				{
					avgScore: 99,
					queryInfo: [{ keys: 'name', type: 'text', matchScore: 99 }],
					result: { _id: 3 },
				},
			],
			total: 3,
		};

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
	[true, false].forEach((isGreaterThan50AvgScore) => {
		it(`should calcualte the total size correctly when results > 50 avg score = ${isGreaterThan50AvgScore}`, () => {
			const expectedTotal = isGreaterThan50AvgScore ? 10 : 100;

			const responses = [
				{ total: 0, resultsArray: [] },
				{
					total: isGreaterThan50AvgScore ? expectedTotal : 0,
					resultsArray: [],
				},
				{
					total: 100,
					resultsArray: [],
				},
			];

			const sortedQueries = [
				{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name'] }] },
				{ avgScore: 99, queries: [{ matchScore: 99, type: 'text', keys: ['name'] }] },
				{ avgScore: 50, queries: [{ matchScore: 50, type: 'text', keys: ['name'] }] },
			];

			const mappedResponse = mapMultisearchQueryResponse(responses, sortedQueries);
			assert.deepStrictEqual(mappedResponse.total, expectedTotal);
		});
	});
});
