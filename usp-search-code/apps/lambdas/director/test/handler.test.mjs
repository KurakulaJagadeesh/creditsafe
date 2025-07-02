import assert from 'node:assert';
import { describe, it } from 'node:test';
import esmock from 'esmock';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
};

describe('USP Handler', () => {
	it('should return bad request if no body present in event', async () => {
		const input = { ...awsRequestTemplate };
		const expectedOutput = 'Bad Request';

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({}),
			},
		});
		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
		assert.equal(JSON.parse(actualOutput.body).message, expectedOutput);
	});

	it('should return a x-cs-searchSource header in the response', async () => {
		const esMockOutput = {
			body: {
				hits: {
					total: {
						value: 1,
						relation: 'eq',
					},
					max_score: 15.891085,
					hits: [
						{
							_index: 'cs-director-search-gb.2024-11-20.13-51-13',
							_id: 'UK909183938',
							_score: 15.891085,
							_source: {
								'@version': '1',
								localDirectorNumber: 'UK909183938',
								'@timestamp': '2024-11-20T19:15:03.546Z',
								countryCode: 'GB',
								dateOfBirth: '1965-12-28T00:00:00.000000Z',
								aggregatedTurnovers: 157888251.24,
								aggregatedEmployeeCounts: 570,
								peopleId: 'GB-909183938',
								address: {
									simpleValue: 'Caspian Point One Pierhead Street, Cardiff, CF10 4DQ',
									city: 'Cardiff',
									line1: 'Caspian Point One Pierhead Street',
									postCode: {
										raw: 'CF10 4DQ',
										inCode: '4dq',
										full: 'cf104dq',
										outCode: 'cf10',
									},
								},
								lastName: 'Syversen',
								companyCount: 12,
								firstName: 'Cato',
								companies: [
									{
										turnover_to: 72923000,
										safeNo: 'UK03490298',
										regNo: '03836192',
										connectId: 'GB-0-03836192',
										employeeCount_to: 271,
										lastUpdateDate: '2024-11-19T18:49:04.000Z',
										name: 'CREDITSAFE BUSINESS SOLUTIONS LIMITED',
										riskRating: 'A',
										regType: 'Ltd',
										creditLimit: 3500000,
										status: 'current',
										riskScore: 96,
										preTaxProfit: 11723000,
									},
									{
										turnover_to: 68232000,
										safeNo: 'UK17866117',
										regNo: '12297233',
										connectId: 'GB-0-12297233',
										employeeCount_to: 268,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
										name: 'CREDITSAFE SERVICES LIMITED',
										riskRating: 'A',
										regType: 'Ltd',
										creditLimit: 11900000,
										status: 'current',
										riskScore: 100,
										preTaxProfit: 16688000,
									},
									{
										turnover_to: 15065000,
										safeNo: 'UK17891232',
										regNo: '12314045',
										connectId: 'GB-0-12314045',
										employeeCount_to: 23,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
										name: 'CREDITSAFE UK HOLDING LIMITED',
										riskRating: 'A',
										regType: 'Ltd',
										creditLimit: 680000,
										status: 'current',
										riskScore: 94,
										preTaxProfit: 57047000,
									},
									{
										turnover_to: 1098251.24,
										safeNo: 'UK16792966',
										regNo: 'FC035438',
										connectId: 'GB-0-FC035438',
										employeeCount_to: 8,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
										name: 'CREDITSAFE IRELAND LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										creditLimit: 0,
										status: 'current',
										riskScore: -17,
										preTaxProfit: 21965.02,
									},
									{
										turnover_to: 570000,
										safeNo: 'UK04551728',
										regNo: '04905417',
										connectId: 'GB-0-04905417',
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
										name: 'COMPANY CHECK LTD',
										riskRating: 'A',
										regType: 'Ltd',
										creditLimit: 25000,
										status: 'current',
										riskScore: 73,
										preTaxProfit: 268000,
									},
									{
										name: 'CREDITSAFE FIRST LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK08186514',
										creditLimit: 0,
										regNo: '07941488',
										connectId: 'GB-0-07941488',
										status: 'current',
										riskScore: -34,
										lastUpdateDate: '2024-11-19T01:18:33.000Z',
									},
									{
										name: 'INSURESAFE LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK05241603',
										creditLimit: 0,
										regNo: '05597291',
										connectId: 'GB-0-05597291',
										status: 'current',
										riskScore: -6,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
									},
									{
										name: 'CREDITSAFE LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK08186390',
										creditLimit: 0,
										regNo: '07941364',
										connectId: 'GB-0-07941364',
										status: 'current',
										riskScore: -34,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
									},
									{
										name: 'CREDITSAFE INFORMATION SERVICES LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK08186666',
										creditLimit: 0,
										regNo: '07941640',
										connectId: 'GB-0-07941640',
										status: 'current',
										riskScore: -34,
										lastUpdateDate: '2024-11-19T01:18:33.000Z',
									},
									{
										name: 'MARKETSAFE.COM LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK04692183',
										creditLimit: 0,
										regNo: '05046335',
										connectId: 'GB-0-05046335',
										status: 'current',
										riskScore: -6,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
									},
									{
										name: 'SAFE INFORMATION GROUP',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK18066631',
										creditLimit: 0,
										regNo: 'FC037079',
										connectId: 'GB-0-FC037079',
										status: 'current',
										riskScore: -17,
										lastUpdateDate: '2024-11-05T14:16:42.000Z',
									},
									{
										name: 'CREDITSAFE UK LIMITED',
										riskRating: 'E',
										regType: 'Ltd',
										safeNo: 'UK08186368',
										creditLimit: 0,
										regNo: '07941342',
										connectId: 'GB-0-07941342',
										status: 'current',
										riskScore: -34,
										lastUpdateDate: '2024-11-19T01:18:33.000Z',
									},
								],
							},
						},
					],
				},
			},
		};
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: (esQuery) => {
						assert.equal(esQuery.index, 'cs-director-search-gb');
						const expected = {
							query: {
								bool: {
									should: [
										{
											match: {
												localDirectorNumber: {
													query: 'UK909183938',
												},
											},
										},
									],
									minimum_should_match: 1,
									filter: {
										bool: {
											must: [
												{
													term: {
														countryCode: {
															value: 'GB',
														},
													},
												},
											],
										},
									},
								},
							},
						};
						assert.equal(JSON.stringify(esQuery.body), JSON.stringify(expected));
						return esMockOutput;
					},
				}),
			},
		});

		const expectedHeaders = {
			'Content-Type': 'application/json',
			'x-cs-searchSource': 'usp',
			'Access-Control-Allow-Origin': 'https://usp-swagger-ui.s3.eu-west-1.amazonaws.com',
			'Access-Control-Allow-Methods': 'GET',
		};

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'GB', page: '1', pageSize: '15', localDirectorNumber: 'UK909183938',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});
