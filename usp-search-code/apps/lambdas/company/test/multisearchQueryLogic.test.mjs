import assert from 'node:assert';
import { describe, it } from 'node:test';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import {
	cartesianProduct,
	mapMultisearchQueryResponse,
	sortAndScoreQueryCombinations,
	extractQuotedAndUnquotedText,
	generateExactTermsFromName,
	generateQueries,
} from '../src/services/multisearchQueryLogicService.mjs';
import constants from '../src/constants.mjs';

// Set up logger for tests
global.logger = createLogger(constants.SERVICE_NAME);

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
	it('should group results based on groupId if groupResults = true', () => {
		const responses = [
			{
				total: 1,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA03669375',
						_score: 14.020561,
						_source: {
							safeNo: 'CA03669375',
							address: {
								simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER',
								county: 'ONTARIO',
								line1: '305 JOSEPH ST',
								city: 'KITCHENER',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTER CONTRACTING LIMITED',
							groupId: 'CA03669375',
						},
					},
				],
			},
			{
				total: 2,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA07546882',
						_score: 19.347923,
						_source: {
							safeNo: 'CA07546882',
							address: {
								simpleValue: '197 MCKEAND ST, ONTARIO, N5C3T8, INGERSOLL',
								county: 'ONTARIO',
								line1: '197 MCKEAND ST',
								city: 'INGERSOLL',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTERS CONTRACTING',
							groupId: 'CA03669375',
						},
					},
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA03669375',
						_score: 19.347923,
						_source: {
							safeNo: 'CA03669375',
							address: {
								simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER',
								county: 'ONTARIO',
								line1: '305 JOSEPH ST',
								city: 'KITCHENER',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTER CONTRACTING LIMITED',
							groupId: 'CA03669375',
						},
					},
				],
			},
		];

		const sortedQueries = [{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name,groupResults'] }] },
			{ avgScore: 80, queries: [{ matchScore: 80, type: 'text', keys: ['name,groupResults'] }] }];

		const groupResults = true;
		const increaseRecall = undefined;
		const expectedOutput = {
			results: [{
				avgScore: 100,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 100 }],
				result: {
					_id: 'CA03669375',
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_score: 14.020561,
					_source: {
						safeNo: 'CA03669375',
						address: {
							simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER',
							county: 'ONTARIO',
							line1: '305 JOSEPH ST',
							city: 'KITCHENER',
							province: 'ON',
						},
						status: 'Active',
						name: 'ROOFMASTER CONTRACTING LIMITED',
						groupId: 'CA03669375',
						alternative: [{
							safeNo: 'CA07546882',
							name: 'ROOFMASTERS CONTRACTING',
							status: 'Active',
							simpleValue: '197 MCKEAND ST, ONTARIO, N5C3T8, INGERSOLL',
							street: '197 MCKEAND ST',
							city: 'INGERSOLL',
							province: 'ON',
							groupId: 'CA03669375',
						}],
					},
				},
			}],
			total: 1,
		};

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries, increaseRecall, groupResults);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
	it('should return all results groupResults = false', () => {
		const responses = [
			{
				total: 1,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA03669375',
						_score: 14.020561,
						_source: {
							safeNo: 'CA03669375',
							address: {
								simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER',
								county: 'ONTARIO',
								line1: '305 JOSEPH ST',
								city: 'KITCHENER',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTER CONTRACTING LIMITED',
							groupId: 'CA03669375',
						},
					},
				],
			},
			{
				total: 2,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA07546882',
						_score: 19.347923,
						_source: {
							safeNo: 'CA07546882',
							address: {
								simpleValue: '197 MCKEAND ST, ONTARIO, N5C3T8, INGERSOLL',
								county: 'ONTARIO',
								line1: '197 MCKEAND ST',
								city: 'INGERSOLL',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTERS CONTRACTING',
							groupId: 'CA03669375',
						},
					},
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA03669375',
						_score: 19.347923,
						_source: {
							safeNo: 'CA03669375',
							address: {
								simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER',
								county: 'ONTARIO',
								line1: '305 JOSEPH ST',
								city: 'KITCHENER',
								province: 'ON',
							},
							status: 'Active',
							name: 'ROOFMASTER CONTRACTING LIMITED',
							groupId: 'CA03669375',
						},
					},
				],
			},
		];

		const sortedQueries = [{ avgScore: 100, queries: [{ matchScore: 100, type: 'text', keys: ['name,groupResults'] }] },
			{ avgScore: 80, queries: [{ matchScore: 80, type: 'text', keys: ['name,groupResults'] }] }];

		const groupResults = false;
		const increaseRecall = undefined;
		const expectedOutput = {
			results: [{
				avgScore: 100,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 100 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA03669375',
					_score: 14.020561,
					_source: {
						safeNo: 'CA03669375',
						address: {
							simpleValue: '305 JOSEPH ST, ONTARIO, N2G1J9, KITCHENER', county: 'ONTARIO', line1: '305 JOSEPH ST', city: 'KITCHENER', province: 'ON',
						},
						status: 'Active',
						name: 'ROOFMASTER CONTRACTING LIMITED',
						groupId: 'CA03669375',
					},
				},
			}, {
				avgScore: 80,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 80 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA07546882',
					_score: 19.347923,
					_source: {
						safeNo: 'CA07546882',
						address: {
							simpleValue: '197 MCKEAND ST, ONTARIO, N5C3T8, INGERSOLL', county: 'ONTARIO', line1: '197 MCKEAND ST', city: 'INGERSOLL', province: 'ON',
						},
						status: 'Active',
						name: 'ROOFMASTERS CONTRACTING',
						groupId: 'CA03669375',
					},
				},
			}],
			total: 2,
		};

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries, increaseRecall, groupResults);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
	it('should return unique results totalSize if uniqueResults.length < pageSize', () => {
		const pageSize = 10;
		const responses = [
			{
				total: 2,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA09828367',
						_score: 14.020561,
						_source: {
							safeNo: 'CA09828367',
							status: 'Active',
							name: 'CRESCENT A/C',
							groupId: 'CA00214833',
						},
					},
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA00214833',
						_score: 14.020561,
						_source: {
							safeNo: 'CA00214833',
							status: 'Active',
							name: 'CRESCENT AIR CONDITIONING LTD',
							groupId: 'CA00214833',
						},
					},
				],
			},
			{
				total: 3,
				resultsArray: [
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA09828367',
						_score: 14.020561,
						_source: {
							safeNo: 'CA09828367',
							status: 'Active',
							name: 'CRESCENT A/C',
							groupId: 'CA00214833',
						},
					},
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA00496368',
						_score: 19.347923,
						_source: {
							safeNo: 'CA00496368',
							status: 'Active',
							name: 'CRESCENT MOON C S',
							groupId: 'CA00496368',
						},
					},
					{
						_index: 'cs-company-search-ca.2024-09-06.11-38-06',
						_id: 'CA12227999',
						_score: 19.347923,
						_source: {
							safeNo: 'CA12227999',
							status: 'Active',
							name: 'DISCOVERY CRESCENT C',
							groupId: 'CA12227999',
						},
					},
				],
			},
		];

		const expectedOutput = {
			results: [{
				avgScore: 99,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 99 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA09828367',
					_score: 14.020561,
					_source: {
						groupId: 'CA00214833',
						name: 'CRESCENT A/C',
						safeNo: 'CA09828367',
						status: 'Active',
					},
				},
			}, {
				avgScore: 99,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 99 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA00214833',
					_score: 14.020561,
					_source: {
						groupId: 'CA00214833',
						name: 'CRESCENT AIR CONDITIONING LTD',
						safeNo: 'CA00214833',
						status: 'Active',
					},
				},
			}, {
				avgScore: 60,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 60 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA00496368',
					_score: 19.347923,
					_source: {
						groupId: 'CA00496368',
						name: 'CRESCENT MOON C S',
						safeNo: 'CA00496368',
						status: 'Active',
					},
				},
			}, {
				avgScore: 60,
				queryInfo: [{ keys: 'name,groupResults', type: 'text', matchScore: 60 }],
				result: {
					_index: 'cs-company-search-ca.2024-09-06.11-38-06',
					_id: 'CA12227999',
					_score: 19.347923,
					_source: {
						groupId: 'CA12227999',
						name: 'DISCOVERY CRESCENT C',
						safeNo: 'CA12227999',
						status: 'Active',
					},
				},
			}],
			total: 4,
		};

		const groupResults = false;
		const increaseRecall = undefined;

		const sortedQueries = [{ avgScore: 99, queries: [{ matchScore: 99, type: 'text', keys: ['name,groupResults'] }] },
			{ avgScore: 60, queries: [{ matchScore: 60, type: 'text', keys: ['name,groupResults'] }] }];

		const actualOutput = mapMultisearchQueryResponse(responses, sortedQueries, increaseRecall, groupResults, pageSize);
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('extractQuotedAndUnquotedText', () => {
	it('should extract quoted text in an array and store the unquoted text in name field', () => {
		const input = [
			'"krispy kondors"',
			'"krispy kreme" donuts',
			'"krispy Kreme" jam "dunkin donuts"',
		];
		const expectedOutput = [
			{ quoted: ['krispy kondors'], unquoted: '' },
			{ quoted: ['krispy kreme'], unquoted: 'donuts' },
			{ quoted: ['krispy Kreme', 'dunkin donuts'], unquoted: 'jam' },
		];
		const actualOutput = [];
		input.forEach((element) => {
			actualOutput.push(extractQuotedAndUnquotedText(element));
		});
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('generateExactTermsFromName', () => {
	it('should generate exact match terms from quoted name field', () => {
		const input = [
			{ countryCode: 'NO', name: '"krispy kondors"' },
			{ countryCode: 'NO', name: '"krispy kreme" donuts' },
			{ countryCode: 'NO', name: '"krispy Kreme" jam "dunkin donuts"' },
			{ countryCode: 'FR', name: '"krispy kreme" donuts' },
		];
		const expectedOutput = [
			{
				countryCode: 'NO',
				name: '',
				exactTerms: ['krispy kondors'],
				exact: true,
			},
			{
				countryCode: 'NO',
				name: 'donuts',
				exactTerms: ['krispy kreme'],
				exact: false,
			},
			{
				countryCode: 'NO',
				name: 'jam',
				exactTerms: ['krispy Kreme', 'dunkin donuts'],
				exact: false,
			},
			{
				countryCode: 'FR',
				name: '"krispy kreme" donuts',
			},
		];
		const actualOutput = [];
		input.forEach((element) => {
			actualOutput.push(generateExactTermsFromName(element));
		});
		assert.deepStrictEqual(actualOutput, expectedOutput);
	});
});

describe('generateQueries', () => {
	it('should generate exact match query where name is entirely quoted', () => {
		const inputObj = {
			countryCode: 'NO', name: '"krispy kondors"', page: 1, pageSize: 15,
		};
		const expectedOutput = [
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kondors',
															slop: 0,
														},
													},
												},
											],
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
		];
		const { multisearchQueryArray } = generateQueries(inputObj);
		assert.deepStrictEqual(multisearchQueryArray, expectedOutput);
	});

	it('should generate multi search queries where substring of name is quoted', () => {
		const inputObj = {
			countryCode: 'NO', name: '"krispy kreme" donuts', page: 1, pageSize: 15,
		};
		const expectedOutput = [
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.raw': {
															query: 'donuts',
															slop: 0,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'donuts',
															slop: 0,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.raw': {
															query: 'donuts',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'donuts',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										multi_match: {
											query: 'donuts',
											fields: [
												'name',
											],
											type: 'phrase',
											slop: 0,
											prefix_length: 0,
											max_expansions: 50,
											lenient: true,
											zero_terms_query: 'NONE',
											auto_generate_synonyms_phrase_query: true,
											fuzzy_transpositions: true,
											boost: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										multi_match: {
											query: 'donuts',
											fields: [
												'name',
											],
											type: 'phrase',
											slop: 2,
											prefix_length: 0,
											max_expansions: 50,
											lenient: true,
											zero_terms_query: 'NONE',
											auto_generate_synonyms_phrase_query: true,
											fuzzy_transpositions: true,
											boost: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match: {
														name: 'donuts',
													},
												},
											],
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.plain': {
															query: 'donuts',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy kreme',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										function_score: {
											query: {
												bool: {
													must: [
														{
															bool: {
																should: [
																	{
																		match_phrase: {
																			'name.plain': {
																				query: 'donuts',
																				slop: 1,
																			},
																		},
																	},
																],
																minimum_should_match: 1,
															},
														},
														{
															bool: {
																must: [
																],
																should: [
																	{
																		term: {
																			status: {
																				value: 'active',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			status: {
																				value: 'nonactive',
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'AS',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'ENK',
																				boost: 0.5,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'FLI',
																				boost: 0.5,
																			},
																		},
																	},
																],
															},
														},
													],
												},
											},
											functions: [
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'noEmployees.to',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'creditLimit',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'turnover.to',
													},
												},
											],
											score_mode: 'sum',
										},
									},
									{
										function_score: {
											query: {
												bool: {
													must: [
														{
															bool: {
																should: [
																	{
																		match_phrase: {
																			'name.plain': {
																				query: '',
																				slop: 1,
																			},
																		},
																	},
																],
																minimum_should_match: 1,
															},
														},
														{
															bool: {
																must: [
																],
																should: [
																	{
																		term: {
																			status: {
																				value: 'active',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			status: {
																				value: 'nonactive',
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'AS',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'ENK',
																				boost: 0.5,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'FLI',
																				boost: 0.5,
																			},
																		},
																	},
																],
															},
														},
													],
												},
											},
											functions: [
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'noEmployees.to',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'creditLimit',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'turnover.to',
													},
												},
											],
											score_mode: 'sum',
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
		];
		const { multisearchQueryArray } = generateQueries(inputObj);
		assert.deepStrictEqual(multisearchQueryArray, expectedOutput);
	});

	it('should generate multi search queries where substring of name has multiple quotes', () => {
		const inputObj = {
			countryCode: 'NO', name: '"krispy Kreme" jam "dunkin donuts"', page: 1, pageSize: 15,
		};
		const expectedOutput = [
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.raw': {
															query: 'jam',
															slop: 0,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'jam',
															slop: 0,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.raw': {
															query: 'jam',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'jam',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										multi_match: {
											query: 'jam',
											fields: [
												'name',
											],
											type: 'phrase',
											slop: 0,
											prefix_length: 0,
											max_expansions: 50,
											lenient: true,
											zero_terms_query: 'NONE',
											auto_generate_synonyms_phrase_query: true,
											fuzzy_transpositions: true,
											boost: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										multi_match: {
											query: 'jam',
											fields: [
												'name',
											],
											type: 'phrase',
											slop: 2,
											prefix_length: 0,
											max_expansions: 50,
											lenient: true,
											zero_terms_query: 'NONE',
											auto_generate_synonyms_phrase_query: true,
											fuzzy_transpositions: true,
											boost: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match: {
														name: 'jam',
													},
												},
											],
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											should: [
												{
													match_phrase: {
														'name.plain': {
															query: 'jam',
															slop: 2,
														},
													},
												},
											],
											minimum_should_match: 1,
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
			{
			},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
										bool: {
											must: [
											],
											should: [
												{
													term: {
														status: {
															value: 'active',
															boost: 2,
														},
													},
												},
												{
													term: {
														status: {
															value: 'nonactive',
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'AS',
															boost: 2,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'ENK',
															boost: 0.5,
														},
													},
												},
												{
													term: {
														legalForm: {
															value: 'FLI',
															boost: 0.5,
														},
													},
												},
											],
										},
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'krispy Kreme',
															slop: 0,
														},
													},
												},
												{
													match_phrase: {
														'name.synonyms': {
															query: 'dunkin donuts',
															slop: 0,
														},
													},
												},
											],
										},
									},
									{
										function_score: {
											query: {
												bool: {
													must: [
														{
															bool: {
																should: [
																	{
																		match_phrase: {
																			'name.plain': {
																				query: 'jam',
																				slop: 1,
																			},
																		},
																	},
																],
																minimum_should_match: 1,
															},
														},
														{
															bool: {
																must: [
																],
																should: [
																	{
																		term: {
																			status: {
																				value: 'active',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			status: {
																				value: 'nonactive',
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'AS',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'ENK',
																				boost: 0.5,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'FLI',
																				boost: 0.5,
																			},
																		},
																	},
																],
															},
														},
													],
												},
											},
											functions: [
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'noEmployees.to',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'creditLimit',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'turnover.to',
													},
												},
											],
											score_mode: 'sum',
										},
									},
									{
										function_score: {
											query: {
												bool: {
													must: [
														{
															bool: {
																should: [
																	{
																		match_phrase: {
																			'name.plain': {
																				query: '',
																				slop: 1,
																			},
																		},
																	},
																],
																minimum_should_match: 1,
															},
														},
														{
															bool: {
																must: [
																],
																should: [
																	{
																		term: {
																			status: {
																				value: 'active',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			status: {
																				value: 'nonactive',
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'AS',
																				boost: 2,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'ENK',
																				boost: 0.5,
																			},
																		},
																	},
																	{
																		term: {
																			legalForm: {
																				value: 'FLI',
																				boost: 0.5,
																			},
																		},
																	},
																],
															},
														},
													],
												},
											},
											functions: [
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'noEmployees.to',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'creditLimit',
													},
												},
												{
													field_value_factor: {
														factor: 1.1,
														modifier: 'log1p',
														missing: 1,
														field: 'turnover.to',
													},
												},
											],
											score_mode: 'sum',
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'NO',
													},
												},
											},
										],
										should: [
										],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
		];
		const { multisearchQueryArray } = generateQueries(inputObj);
		assert.deepStrictEqual(multisearchQueryArray, expectedOutput);
	});
});
