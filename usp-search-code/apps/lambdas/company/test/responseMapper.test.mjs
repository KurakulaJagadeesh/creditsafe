import assert from 'node:assert';
import { describe, it } from 'node:test';
import createLogger from '@usp-monorepo/usp-core/logger.mjs';
import mapToResponseModel from '../src/models/responseMapper.mjs';
import constants from '../src/constants.mjs';

// Set up logger for tests
global.logger = createLogger(constants.SERVICE_NAME);

describe('USP response mapper', () => {
	it('should return max score if companies present in results', async () => {
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
	it('should return registeredCity for DE as additionalData response', async () => {
		const input = {
			results: [
				{
					result: {
						_source: {
							countryCode: 'DE',
							address: {
								registeredCity: 'Koln',
								city: undefined,
							},
							website: [],
							tradeName: null,
						},
					},
				},
				{
					result: {
						_source: {
							countryCode: 'DE',
							address: {
								city: 'Berlin',
							},
						},
					},
				},
				{
					result: {
						_source: {
							countryCode: 'SE',
							address: {
								registeredCity: 'Gothenburg',
								city: 'Stockholm',
							},
						},
					},
				},
			],
		};
		const output = {
			companies: [
				{
					additionalData: {
						registeredCity: 'Koln',
					},
					address: {},
					country: 'DE',
				},
				{
					additionalData: {},
					address: {
						city: 'Berlin',
					},
					country: 'DE',
				},
				{
					additionalData: {},
					address: {
						city: 'Stockholm',
					},
					country: 'SE',
				},
			],
		};
		const actualOutput = mapToResponseModel(input);
		assert.deepEqual(actualOutput.companies, output.companies);
	});

	[false, true].forEach((isRawPostcode) => {
		it(`should use relevant postcode field when raw postcode field is ${isRawPostcode}`, async () => {
			const input = {
				results: [{
					avgScore: 100,
					result: {
						_index: 'cs-company-search-lu.2024-08-27.11-55-00',
						_id: 'LU00137093',
						_score: 10.035392,
						_source: {
							lastAccountsDate: '2024-05-21T07:40:57.140Z',
							address: {
								city: 'ESCH-SUR-ALZETTE',
								simpleValue: '50 GAALGEBIERG, 4142, ESCH-SUR-ALZETTE',
								line1: '50 GAALGEBIERG',
								postCode: isRawPostcode ? { raw: '4142' } : '4142',
							},
							lastUpdateDate: '2024-07-25T14:55:54.466Z',
							dateOfLatestAccounts: '2024-05-21T07:40:57.140Z',
							activityCodes: ['55.100'],
							safeNo: 'LU00137093',
							noEmployees: { from: 0, to: 10 },
							legalForm: 'PUBLIC LIMITED COMPANY',
							phoneNo: '+352/540228',
							urls: ['WWW.THESEVENHOTEL.LU'],
							'@timestamp': '2024-08-20T13:56:45.507Z',
							recordStatus: 'I',
							orgNo: 'B129685',
							countryCode: 'LU',
							netWorth: 412256,
							previousNames: ['HOTEL AM PARK S.A.'],
							'@version': '1',
							name: 'HOTEL AM PARK S.A.',
							creditLimit: 25000,
							connectId: 'LU-X-LU00137093',
							regType: 'Ltd',
							turnover: { from: 0, to: 0 },
							status: 'Active',
							officeType: 'headOffice',
						},
					},
				}],
				total: 1,
				page: 1,
				pageSize: 15,
			};
			const output = {
				correlationId: '',
				maxScore: 100,
				totalSize: 1,
				page: 1,
				pageSize: 15,
				companies: [{
					activityCode: '55.100',
					additionalData: {},
					address: {
						city: 'ESCH-SUR-ALZETTE', postCode: '4142', simpleValue: '50 GAALGEBIERG, 4142, ESCH-SUR-ALZETTE', line1: '50 GAALGEBIERG',
					},
					country: 'LU',
					dateOfLatestChange: '2024-07-25T14:55:54.466Z',
					dateOfLatestAccounts: '2024-05-21T07:40:57.140Z',
					id: 'LU-X-LU00137093',
					legalForm: 'PUBLIC LIMITED COMPANY',
					matchScore: 100,
					name: 'HOTEL AM PARK S.A.',
					officeType: 'headOffice',
					previousNames: ['HOTEL AM PARK S.A.'],
					safeNo: 'LU00137093',
					status: 'Active',
					type: 'Ltd',
					website: ['WWW.THESEVENHOTEL.LU'],
				}],
			};
			const actualOutput = mapToResponseModel(input);
			assert.deepEqual(actualOutput.companies, output.companies);
		});
	});
	it('should apply custom IT mapping when IT_VAT_NO_ENABLED is true', async () => {
		const prevEnv = process.env.IT_VAT_NO_ENABLED;
		process.env.IT_VAT_NO_ENABLED = 'true';
		const input = {
			results: [
				{
					result: {
						_source: {
							countryCode: 'IT',
							taxCode: 'ITCODE123',
							vatGroup: 'VATGROUP',
							vatNo: { raw: ['VATNO123', 'TAXCODE123', 'VATGROUP'] },
							address: {},
						},
					},
				},
			],
		};
		const actualOutput = mapToResponseModel(input);
		const company = actualOutput.companies[0];
		assert.equal(company.additionalData.taxCode, 'ITCODE123');
		assert.equal(company.additionalData.vatGroup, 'VATGROUP');
		assert.deepEqual(company.vatNo, ['VATNO123', 'TAXCODE123', 'VATGROUP']);
		process.env.IT_VAT_NO_ENABLED = prevEnv;
	});
	it('should not apply custom IT mapping when IT_VAT_NO_ENABLED is false or unset', async () => {
		const prevEnv = process.env.IT_VAT_NO_ENABLED;
		process.env.IT_VAT_NO_ENABLED = '';
		const input = {
			results: [
				{
					result: {
						_source: {
							countryCode: 'IT',
							taxCode: 'ITCODE123',
							vatGroup: 'VATGROUP',
							vatNo: { raw: ['VATNO123', 'TAXCODE123', 'VATGROUP'] },
							address: {},
						},
					},
				},
			],
		};
		const actualOutput = mapToResponseModel(input);
		const company = actualOutput.companies[0];
		assert.strictEqual(company.additionalData.taxCode, undefined);
		assert.strictEqual(company.additionalData.vatGroup, undefined);
		assert.deepEqual(company.vatNo, ['VATNO123', 'TAXCODE123', 'VATGROUP']); // Should fallback to default mapping
		process.env.IT_VAT_NO_ENABLED = prevEnv;
	});
});
