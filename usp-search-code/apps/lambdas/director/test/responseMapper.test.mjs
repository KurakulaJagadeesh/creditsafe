import assert from 'node:assert';
import { describe, it } from 'node:test';
import mapToResponseModel from '../src/models/responseMapper.mjs';

describe('USP response mapper', () => {
	it('should return max score if directors present in results', async () => {
		const maxScore = 99.5;
		const input = {
			results: [
				{
					avgScore: maxScore,
				},
				{
					avgScore: 90,
				},
			],

		};
		const actualOutput = mapToResponseModel(input);

		assert.equal(actualOutput.maxScore, maxScore);
	});
	it('should return standard response', async () => {
		const input = {
			results: [
				{
					result: {
						_source: {
							lastName: 'Syversen',
							companies: [
								{
									regNo: '03836192',
									preTaxProfit: 11723000,
									regType: 'Ltd',
									creditLimit: 3500000,
									riskRating: 'A',
									safeNo: 'UK03490298',
									status: 'current',
									lastUpdateDate: '2025-02-07T19:08:00.000Z',
									turnover_to: 72923000,
									name: 'CREDITSAFE BUSINESS SOLUTIONS LIMITED',
									riskScore: 96,
									connectId: 'GB-0-03836192',
									employeeCount_to: 271,
								},
								{
									regNo: '12297233',
									preTaxProfit: 16688000,
									regType: 'Ltd',
									creditLimit: 11900000,
									riskRating: 'A',
									safeNo: 'UK17866117',
									status: 'current',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									turnover_to: 68232000,
									name: 'CREDITSAFE SERVICES LIMITED',
									riskScore: 100,
									connectId: 'GB-0-12297233',
									employeeCount_to: 268,
								},
								{
									regNo: '12314045',
									preTaxProfit: 57047000,
									regType: 'Ltd',
									creditLimit: 680000,
									riskRating: 'A',
									safeNo: 'UK17891232',
									status: 'current',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									turnover_to: 15065000,
									name: 'CREDITSAFE UK HOLDING LIMITED',
									riskScore: 94,
									connectId: 'GB-0-12314045',
									employeeCount_to: 23,
								},
								{
									regNo: 'FC035438',
									preTaxProfit: 21965.02,
									regType: 'Ltd',
									creditLimit: 0,
									riskRating: 'E',
									safeNo: 'UK16792966',
									status: 'current',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									turnover_to: 1098251.24,
									name: 'CREDITSAFE IRELAND LIMITED',
									riskScore: -17,
									connectId: 'GB-0-FC035438',
									employeeCount_to: 8,
								},
								{
									regNo: '04905417',
									preTaxProfit: 268000,
									regType: 'Ltd',
									creditLimit: 25000,
									riskRating: 'A',
									safeNo: 'UK04551728',
									status: 'current',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									turnover_to: 570000,
									name: 'COMPANY CHECK LTD',
									riskScore: 73,
									connectId: 'GB-0-04905417',
								},
								{
									riskRating: 'E',
									safeNo: 'UK08186368',
									status: 'current',
									regNo: '07941342',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'CREDITSAFE UK LIMITED',
									riskScore: -34,
									connectId: 'GB-0-07941342',
									creditLimit: 0,
								},
								{
									riskRating: 'E',
									safeNo: 'UK08186390',
									status: 'current',
									regNo: '07941364',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'CREDITSAFE LIMITED',
									riskScore: -34,
									connectId: 'GB-0-07941364',
									creditLimit: 0,
								},
								{
									riskRating: 'E',
									safeNo: 'UK18066631',
									status: 'current',
									regNo: 'FC037079',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'SAFE INFORMATION GROUP',
									riskScore: -17,
									connectId: 'GB-0-FC037079',
									creditLimit: 0,
								}, {
									riskRating: 'E',
									safeNo: 'UK08186514',
									status: 'current',
									regNo: '07941488',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'CREDITSAFE FIRST LIMITED',
									riskScore: -34,
									connectId: 'GB-0-07941488',
									creditLimit: 0,
								},
								{
									riskRating: 'E',
									safeNo: 'UK05241603',
									status: 'current',
									regNo: '05597291',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'INSURESAFE LIMITED',
									riskScore: -6,
									connectId: 'GB-0-05597291',
									creditLimit: 0,
								},
								{
									riskRating: 'E',
									safeNo: 'UK08186666',
									status: 'current',
									regNo: '07941640',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'CREDITSAFE INFORMATION SERVICES LIMITED',
									riskScore: -34,
									connectId: 'GB-0-07941640',
									creditLimit: 0,
								},
								{
									riskRating: 'E',
									safeNo: 'UK04692183',
									status: 'current',
									regNo: '05046335',
									lastUpdateDate: '2025-02-04T06:39:42.000Z',
									regType: 'Ltd',
									name: 'MARKETSAFE.COM LIMITED',
									riskScore: -6,
									connectId: 'GB-0-05046335',
									creditLimit: 0,
								},
							],
							'@version': '1',
							'@timestamp': '2025-02-12T21:33:07.189Z',
							peopleId: 'GB-909183938',
							localDirectorNumber: 'UK909183938',
							firstName: 'Cato',
							countryCode: 'GB',
							aggregatedEmployeeCounts: 570,
							aggregatedTurnovers: 157888251.24,
							dateOfBirth: '1965-12-28T00:00:00.000000Z',
							address: {
								line2: 'Caspian Point One Pierhead Street',
								simpleValue: 'Caspian Point One Pierhead Street, Cardiff, CF10 4DQ',
								city: 'Cardiff',
								postCode: {
									inCode: '4dq',
									raw: 'CF10 4DQ',
									full: 'cf104dq',
									outCode: 'cf10',
								},
							},
							companyCount: 12,
						},
					},
				},
			],
		};
		const output = {
			directors: [
				{
					address: {
						city: 'Cardiff',
						line2: 'Caspian Point One Pierhead Street',
						postCode: 'CF10 4DQ',
						simpleValue: 'Caspian Point One Pierhead Street, Cardiff, CF10 4DQ',
					},
					companyCount: 12,
					country: 'GB',
					dateOfBirth: '1965-12-28T00:00:00.000000Z',
					dateOfLatestChange: '2025-02-07T19:08:00.000Z',
					firstName: 'Cato',
					lastName: 'Syversen',
					localDirectorNumber: 'UK909183938',
					peopleId: 'GB-909183938',
					representativeCompany: {
						appointmentStatus: 'current',
						connectId: 'GB-0-03836192',
						name: 'CREDITSAFE BUSINESS SOLUTIONS LIMITED',
						regNo: '03836192',
						safeNo: 'UK03490298',

					},
				},
			],
		};
		const actualOutput = mapToResponseModel(input);
		assert.deepEqual(actualOutput.directors, output.directors);
	});
});
