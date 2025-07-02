import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('FR Regression Tests', async () => {
	describe('FR company Search', () => {
		it('returns FR Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=FR`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'FR'), true);
		});
	});

	describe('FR id', () => {
		const idTestCases = ['FR-X-40810289500013', 'FR-X-40854608300010', 'FR-X-40325387500021', 'FR-X-40301872400019', 'FR-X-40321005700010'];
		idTestCases.forEach(async (testCase) => {
			it(`FR company search with id:${testCase}`, async () => {
				const queryString = `?countries=FR&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					safeNo: 'FR28132312',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('FR company search with id and safeNo', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					regNo: '40810289500013',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('FR company search with id and regNo', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					vatNo: 'FR14408102895',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('FR company search with id and vatNo', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idacronymtestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					acronym: 'ISO',
				},
			},
		];
		idacronymtestCase.forEach(async (testCase) => {
			it('FR company search with id and acronym', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&acronym=${testCase.params.acronym}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idactivityCodestestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					activityCodes: '0150Z',
				},
			},
		];
		idactivityCodestestCase.forEach(async (testCase) => {
			it('FR company search with id and activityCodes', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&activityCodes=${testCase.params.activityCodes}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					city: 'MONSEMPRON-LIBOS',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('FR company search with id and city', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idhouseNotestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					houseNo: '48',
				},
			},
		];
		idhouseNotestCase.forEach(async (testCase) => {
			it('FR company search with id and houseNo', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					postCode: '47500',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('FR company search with id and postCode', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					province: 'NOUVELLE AQUITAINE',
				},
			},
		];
		idprovincetestCase.forEach(async (testCase) => {
			it('FR company search with id and province', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					simpleValue: 'A POUMARELLY, MONSEMPRON-LIBOS, 47500',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('FR company search with id and simpleValue', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					street: 'A POUMARELLY',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('FR company search with id and street', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idexacttestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					exact: 'true',
				},
			},
		];
		idexacttestCase.forEach(async (testCase) => {
			it('FR company search with id and exact', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase.params.id}`), true);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					name: 'PAILLAS ALICE',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('FR company search with id and name', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCase.forEach(async (testCase) => {
			it('FR company search with id and officeType', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'FR-X-79912973900022',
					phoneNo: '0497133689',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('FR company search with id and phoneNo', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					status: 'NonActive',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('FR company search with id and status', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCase = [
			{
				params: {
					id: 'FR-X-40810289500013',
					tradeName: 'PAILLAS ALICE',
				},
			},
		];
		idtradeNametestCase.forEach(async (testCase) => {
			it('FR company search with id and tradeName', async () => {
				const queryString = `?countries=FR&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FR safeNo', () => {
		const safeNoTestCases = ['FR28132312', 'FR28146500', 'FR27999766', 'FR27992883', 'FR28014008'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`FR company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=FR&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					regNo: '40810289500013',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and regNo', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					vatNo: 'FR14408102895',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and vatNo', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoacronymtestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					acronym: 'ISO',
				},
			},
		];
		safeNoacronymtestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and acronym', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&acronym=${testCase.params.acronym}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoactivityCodestestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					activityCodes: '0150Z',
				},
			},
		];
		safeNoactivityCodestestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and activityCodes', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&activityCodes=${testCase.params.activityCodes}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					city: 'MONSEMPRON-LIBOS',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and city', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNohouseNotestCase = [
			{
				params: {
					safeNo: 'FR19327382',
					houseNo: '48',
				},
			},
		];
		safeNohouseNotestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and houseNo', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostcodetestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					postCode: '47500',
				},
			},
		];
		safeNopostcodetestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and postCode', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					province: 'NOUVELLE AQUITAINE',
				},
			},
		];
		safeNoprovincetestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and province', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					simpleValue: 'A POUMARELLY, MONSEMPRON-LIBOS, 47500',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreetValuetestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					street: 'A POUMARELLY',
				},
			},
		];
		safeNostreetValuetestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and street', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoexacttestCases = [
			{
				params: {
					safeNo: 'FR28132312',
					exact: 'true',
				},
			},
		];
		safeNoexacttestCases.forEach(async (testCase) => {
			it('FR company search with safeNo and exact', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.params.safeNo}`), true);
			});
		});
		const safeNonametestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					name: 'PAILLAS ALICE',
				},
			},
		];
		safeNonametestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and name', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCase = [
			{
				params: {
					safeNo: 'FR30549444',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and officeType', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'FR30549444',
					phoneNo: '0497133689',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'FR30549444',
					status: 'NonActive',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and status', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCase = [
			{
				params: {
					safeNo: 'FR28132312',
					tradeName: 'PAILLAS ALICE',
				},
			},
		];
		safeNotradeNametestCase.forEach(async (testCase) => {
			it('FR company search with safeNo and tradeName', async () => {
				const queryString = `?countries=FR&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FR regNo', () => {
		const regNoTestCases = ['40810289500013', '40854608300010', '40325387500021', '40301872400019', '40321005700010'];
		regNoTestCases.forEach(async (testCase) => {
			it(`FR company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCase = [
			{
				params: {
					regNo: '40810289500013',
					vatNo: 'FR14408102895',
				},
			},
		];
		regNovatNotestCase.forEach(async (testCase) => {
			it('FR company search with regNo and vatNo', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoacronymtestCase = [
			{
				params: {
					regNo: '40810289500013',
					acronym: 'ISO',
				},
			},
		];
		regNoacronymtestCase.forEach(async (testCase) => {
			it('FR company search with regNo and acronym', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&acronym=${testCase.params.acronym}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoactivityCodestestCase = [
			{
				params: {
					regNo: '40810289500013',
					activityCodes: '0150Z',
				},
			},
		];
		regNoactivityCodestestCase.forEach(async (testCase) => {
			it('FR company search with regNo and activityCodes', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&activityCodes=${testCase.params.activityCodes}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: '40810289500013',
					city: 'MONSEMPRON-LIBOS',
				},
				expected: {
					safeNo: 'FR28132312',
				},
			},
			{
				params: {
					regNo: '40854608300010',
					city: 'MARLY-LA-VILLE',
				},
				expected: {
					safeNo: 'FR28146500',
				},
			},
			{
				params: {
					regNo: '40325387500021',
					city: 'STRASBOURG',
				},
				expected: {
					safeNo: 'FR27999766',
				},
			},
			{
				params: {
					regNo: '40301872400019',
					city: 'AYSE',
				},
				expected: {
					safeNo: 'FR27992883',
				},
			},
			{
				params: {
					regNo: '40321005700010',
					city: 'SAINT-CYPRIEN',
				},
				expected: {
					safeNo: 'FR28014008',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and city: ${testCase.params.city}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const regNohouseNotestCase = [
			{
				params: {
					regNo: '34795123800869',
					houseNo: '48',
				},
			},
		];
		regNohouseNotestCase.forEach(async (testCase) => {
			it('FR company search with regNo and houseNo', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '40810289500013',
					postCode: '47500',
				},
				expected: {
					safeNo: 'FR28132312',
				},
			},
			{
				params: {
					regNo: '40854608300010',
					postCode: '95670',
				},
				expected: {
					safeNo: 'FR28146500',
				},
			},
			{
				params: {
					regNo: '40325387500021',
					postCode: '67100',
				},
				expected: {
					safeNo: 'FR27999766',
				},
			},
			{
				params: {
					regNo: '40301872400019',
					postCode: '74130',
				},
				expected: {
					safeNo: 'FR27992883',
				},
			},
			{
				params: {
					regNo: '40321005700010',
					postCode: '42160',
				},
				expected: {
					safeNo: 'FR28014008',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '40810289500013',
					province: 'NOUVELLE AQUITAINE',
				},
				expected: {
					safeNo: 'FR28132312',
				},
			},
			{
				params: {
					regNo: '40854608300010',
					province: 'ILE DE FRANCE',
				},
				expected: {
					safeNo: 'FR28146500',
				},
			},
			{
				params: {
					regNo: '40325387500021',
					province: 'GRAND EST',
				},
				expected: {
					safeNo: 'FR27999766',
				},
			},
			{
				params: {
					regNo: '40301872400019',
					province: 'AUVERGNE RHONE ALPES',
				},
				expected: {
					safeNo: 'FR27992883',
				},
			},
			{
				params: {
					regNo: '40321005700010',
					province: 'AUVERGNE RHONE ALPES',
				},
				expected: {
					safeNo: 'FR28014008',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: '40810289500013',
					simpleValue: 'A POUMARELLY, MONSEMPRON-LIBOS, 47500',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('FR company search with regNo and simpleValue', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '40810289500013',
					street: 'A POUMARELLY',
				},
				expected: {
					safeNo: 'FR28132312',
				},
			},
			{
				params: {
					regNo: '40854608300010',
					street: '7 HAM DES VERGERS',
				},
				expected: {
					safeNo: 'FR28146500',
				},
			},
			{
				params: {
					regNo: '40325387500021',
					street: '67 AV DE COLMAR',
				},
				expected: {
					safeNo: 'FR27999766',
				},
			},
			{
				params: {
					regNo: '40301872400019',
					street: 'LES LACS',
				},
				expected: {
					safeNo: 'FR27992883',
				},
			},
			{
				params: {
					regNo: '40321005700010',
					street: '11 RUE DE LA GENETTE',
				},
				expected: {
					safeNo: 'FR28014008',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const regNoexacttestCases = [
			{
				params: {
					regNo: '40810289500013',
					exact: 'true',
				},
			},
		];
		regNoexacttestCases.forEach(async (testCase) => {
			it('FR company search with regNo and exact', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.params.regNo}`), true);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: '40810289500013',
					name: 'PAILLAS ALICE',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('FR company search with regNo and name', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '40810289500013',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					regNo: '40830547200016',
					officeType: 'branch',
				},
			},
			{
				params: {
					regNo: '77557501200791',
					officeType: 'branch',
				},
			},
			{
				params: {
					regNo: '38397987900087',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: '79912973900022',
					phoneNo: '0497133689',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('FR company search with regNo and phoneNo', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '79912973900022',
					status: 'NonActive',
				},
			},
			{
				params: {
					regNo: '40830547200016',
					status: 'NonActive',
				},
			},
			{
				params: {
					regNo: '77557501200791',
					status: 'Active',
				},
			},
			{
				params: {
					regNo: '35400173700015',
					status: 'NonActive',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it(`FR company search with regNo: ${testCase.params.regNo} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const regNotradeNametestCase = [
			{
				params: {
					regNo: '40810289500013',
					tradeName: 'PAILLAS ALICE',
				},
			},
		];
		regNotradeNametestCase.forEach(async (testCase) => {
			it('FR company search with regNo and tradeName', async () => {
				const queryString = `?countries=FR&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FR vatNo', () => {
		const vatNoTestCases = ['FR14408102895', 'FR96408546083', 'FR44403253875', 'FR72403018724', 'FR25403210057', 'FR04039125885'];
		vatNoTestCases.forEach(async (testCase) => {
			it(`FR company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=FR&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNomaxmintestCase = [
			{
				params: {
					vatNo: 'FR1440810 28 95',
				},
			},
			{
				params: {
					vatNo: 'FR144 081',
				},
			},
		];
		vatNomaxmintestCase.forEach(async (testCase) => {
			it('FR company search with vatNo', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoacronymtestCase = [
			{
				params: {
					vatNo: 'FR06319525564',
					acronym: 'ISO',
				},
			},
		];
		vatNoacronymtestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and acronym', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&acronym=${testCase.params.acronym}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoactivityCodestestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					activityCodes: '0150Z',
				},
			},
		];
		vatNoactivityCodestestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and activityCodes', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&activityCodes=${testCase.params.activityCodes}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					city: 'MONSEMPRON-LIBOS',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and city', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNohouseNotestCase = [
			{
				params: {
					vatNo: 'FR60347951238',
					houseNo: '48',
				},
			},
		];
		vatNohouseNotestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and houseNo', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					postCode: '47500',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and postCode', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					province: 'NOUVELLE AQUITAINE',
				},
			},
		];
		vatNoprovincetestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and province', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					simpleValue: 'A POUMARELLY, MONSEMPRON-LIBOS, 47500',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					street: 'A POUMARELLY',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and street', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoexacttestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					exact: 'true',
				},
			},
		];
		vatNoexacttestCase.forEach(async (testCase) => {
			it(`FR company search with vatNo:${testCase.params.vatNo} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					name: 'PAILLAS ALICE',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and name', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCases = [
			{
				params: {
					vatNo: 'FR14408102895',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					vatNo: 'FR40408305472',
					officeType: 'branch',
				},
			},
			{
				params: {
					vatNo: 'FR16775575012',
					officeType: 'branch',
				},
			},
			{
				params: {
					vatNo: 'FR47383979879',
					officeType: 'headOffice',
				},
			},
		];
		vatNoofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with vatNo: ${testCase.params.vatNo} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: 'FR85799129739',
					phoneNo: '0497133689',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: 'FR85799129739',
					status: 'Active',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and status', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNotradeNametestCase = [
			{
				params: {
					vatNo: 'FR14408102895',
					type: 'PAILLAS ALICE',
				},
			},
		];
		vatNotradeNametestCase.forEach(async (testCase) => {
			it('FR company search with vatNo and tradeNAme', async () => {
				const queryString = `?countries=FR&vatNo=${testCase.params.vatNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FR acronym', () => {
		const acronymTestCases = ['ISO', 'ESM', 'SNCF', 'ANPE', 'RFF'];
		acronymTestCases.forEach(async (testCase) => {
			it(`FR company search with acronym:${testCase}`, async () => {
				const queryString = `?countries=FR&acronym=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.acronym === `${testCase}`), true);
			});
		});
		const acronymactivityCodestestCases = [
			{
				params: {
					acronym: 'ISO',
					activityCodes: '5829C',
				},
			},
			{
				params: {
					acronym: 'ESM',
					activityCodes: '4643Z',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					activityCodes: '4910Z',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					activityCodes: '8413Z',
				},
			},
			{
				params: {
					acronym: 'RFF',
					activityCodes: '5221Z',
				},
			},
		];
		acronymactivityCodestestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and activityCodes: ${testCase.params.activityCodes}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&activityCodes=${testCase.params.activityCodes}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
			});
		});
		const acronymcitytestCases = [
			{
				params: {
					acronym: 'ISO',
					city: 'RIS-ORANGIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					acronym: 'ESM',
					city: 'SANNOIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					city: 'SAINT-DENIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					city: 'PARIS 11',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00133068',
				},
			},
			{
				params: {
					acronym: 'RFF',
					city: 'ROMBAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		acronymcitytestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const acronymhouseNotestCases = [
			{
				params: {
					acronym: 'ISO',
					houseNo: '1',
				},
			},
			{
				params: {
					acronym: 'ESM',
					houseNo: '6',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					houseNo: '2',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					houseNo: '50',
				},
			},
			{
				params: {
					acronym: 'RFF',
					houseNo: '15',
				},
			},
		];
		acronymhouseNotestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
			});
		});
		const acronympostCodetestCases = [
			{
				params: {
					acronym: 'ISO',
					postCode: '91130',
				},
			},
			{
				params: {
					acronym: 'ESM',
					postCode: '95110',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					postCode: '93210',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					postCode: '75011',
				},
			},
			{
				params: {
					acronym: 'RFF',
					postCode: '57120',
				},
			},
		];
		acronympostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const acronymprovincetestCases = [
			{
				params: {
					acronym: 'ISO',
					province: 'GRAND EST',
				},
			},
			{
				params: {
					acronym: 'ESM',
					province: 'ILE DE FRANCE',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					province: 'AUVERGNE RHONE ALPES',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					province: 'MARTINIQUE',
				},
			},
			{
				params: {
					acronym: 'RFF',
					province: 'NORMANDIE',
				},
			},
		];
		acronymprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const acronymsimpleValuetestCases = [
			{
				params: {
					acronym: 'ISO',
					simpleValue: '57 RUE NOTRE DAME DES PRES, SAINT-ANDRE-LES-VERGERS, 10120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00946247',
				},
			},
			{
				params: {
					acronym: 'ESM',
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					simpleValue: '1 CITE GRISET, PARIS, 75011',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23730740',
				},
			},
			{
				params: {
					acronym: 'RFF',
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		acronymsimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const acronymstreettestCases = [
			{
				params: {
					acronym: 'ISO',
					street: '1 RUE JULES GUESDE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					acronym: 'ESM',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					street: '1 CITE GRISET',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132880',
				},
			},
			{
				params: {
					acronym: 'RFF',
					street: 'PLACE SAINT EXUPERY',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18418972',
				},
			},
		];
		acronymstreettestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const acronymexacttestCases = [
			{
				params: {
					acronym: 'ISO',
					exact: 'true',
				},
			},
			{
				params: {
					acronym: 'ESM',
					exact: 'false',
				},
			},
		];
		acronymexacttestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
			});
		});
		const acronymnametestCases = [
			{
				params: {
					acronym: 'ISO',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					acronym: 'ESM',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					acronym: 'OGEC',
					name: 'ORGANISME DE GESTION ENSEIGNEMENT CATHOLIQUE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11594370',
				},
			},
			{
				params: {
					acronym: 'RFF',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR19250642',
				},
			},
		];
		acronymnametestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const acronymofficeTypetestCases = [
			{
				params: {
					acronym: 'ISO',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					acronym: 'ESM',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					officeType: 'branch',
				},
			},
			{
				params: {
					acronym: 'RFF',
					officeType: 'branch',
				},
			},
		];
		acronymofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const acronymphoneNotestCases = [
			{
				params: {
					acronym: 'ISO',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					acronym: 'ESM',
					phoneNo: '0140019666',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					phoneNo: '0153256000',
				},
			},
			{
				params: {
					acronym: 'RFF',
					phoneNo: '0184943635',
				},
			},
		];
		acronymphoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const acronymstatustestCases = [
			{
				params: {
					acronym: 'ISO',
					status: 'Active',
				},
			},
			{
				params: {
					acronym: 'ESM',
					status: 'NonActive',
				},
			},
			{
				params: {
					acronym: 'SNCF',
					status: 'Active',
				},
			},
			{
				params: {
					acronym: 'ANPE',
					status: 'NonActive',
				},
			},
			{
				params: {
					acronym: 'RFF',
					status: 'Active',
				},
			},
		];
		acronymstatustestCases.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.acronym === `${testCase.params.acronym}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const acronymtradeNametestCase = [
			{
				params: {
					acronym: 'ISO',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					acronym: 'ESM',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					acronym: 'SNCF',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					acronym: 'RFF',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		acronymtradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with acronym: ${testCase.params.acronym} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR activityCodes', () => {
		const activityCodesTestCases = ['5829C', '4643Z', '4910Z', '8413Z', '5221Z'];
		activityCodesTestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes:${testCase}`, async () => {
				const queryString = `?countries=FR&activityCodes=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.activityCode === `${testCase}`), true);
			});
		});
		const activityCodescitytestCases = [
			{
				params: {
					activityCodes: '4646Z',
					city: 'RIS-ORANGIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					city: 'SANNOIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					city: 'SAINT-DENIS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					city: 'ROMBAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		activityCodescitytestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&city=${testCase.params.city}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const activityCodeshouseNotestCases = [
			{
				params: {
					activityCodes: '4646Z',
					houseNo: '1',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					houseNo: '6',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					houseNo: '2',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					houseNo: '50',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					houseNo: '15',
				},
			},
		];
		activityCodeshouseNotestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
			});
		});
		const activityCodespostCodetestCases = [
			{
				params: {
					activityCodes: '4646Z',
					postCode: '91130',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					postCode: '95110',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					postCode: '93210',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					postCode: '75011',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					postCode: '57120',
				},
			},
		];
		activityCodespostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const activityCodesprovincetestCases = [
			{
				params: {
					activityCodes: '5829C',
					province: 'GRAND EST',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					province: 'ILE DE FRANCE',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					province: 'AUVERGNE RHONE ALPES',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					province: 'MARTINIQUE',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					province: 'NORMANDIE',
				},
			},
		];
		activityCodesprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const activityCodessimpleValuetestCases = [
			{
				params: {
					activityCodes: '4646Z',
					simpleValue: '157 AVENUE CHARLES DE GAULLE, NEUILLY-SUR-SEINE, 92200',
				},
				expected: {
					key: 'safeNo',
					value: 'FR35411214',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					simpleValue: '1 CITE GRISET, PARIS, 75011',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132880',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		activityCodessimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const activityCodesstreettestCases = [
			{
				params: {
					activityCodes: '4646Z',
					street: '1 RUE JULES GUESDE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					street: '1 CITE GRISET',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132880',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					street: 'PLACE SAINT EXUPERY',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18418972',
				},
			},
		];
		activityCodesstreettestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const activityCodesexacttestCases = [
			{
				params: {
					activityCodes: '4646Z',
					exact: 'true',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					exact: 'false',
				},
			},
		];
		activityCodesexacttestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
			});
		});
		const activityCodesnametestCases = [
			{
				params: {
					activityCodes: '4646Z',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					activityCodes: '8520Z',
					name: 'ORGANISME DE GESTION ENSEIGNEMENT CATHOLIQUE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11594370',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR19250642',
				},
			},
		];
		activityCodesnametestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const activityCodesofficeTypetestCases = [
			{
				params: {
					activityCodes: '4646Z',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					officeType: 'branch',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					officeType: 'branch',
				},
			},
		];
		activityCodesofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const activityCodesphoneNotestCases = [
			{
				params: {
					activityCodes: '4646Z',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					phoneNo: '0140019666',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					phoneNo: '0153256000',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					phoneNo: '0184943635',
				},
			},
		];
		activityCodesphoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const activityCodesstatustestCases = [
			{
				params: {
					activityCodes: '4646Z',
					status: 'Active',
				},
			},
			{
				params: {
					activityCodes: '4643Z',
					status: 'NonActive',
				},
			},
			{
				params: {
					activityCodes: '4910Z',
					status: 'Active',
				},
			},
			{
				params: {
					activityCodes: '8413Z',
					status: 'NonActive',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					status: 'Active',
				},
			},
		];
		activityCodesstatustestCases.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.activityCode === `${testCase.params.activityCodes}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const activityCodestradeNametestCase = [
			{
				params: {
					activityCodes: '7022Z',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					activityCodes: '4329B',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					activityCodes: '4910Z',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					activityCodes: '5221Z',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		activityCodestradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with activityCodes: ${testCase.params.activityCodes} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&activityCodes=${testCase.params.activityCodes}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR city', () => {
		const cityTestCases = ['RIS-ORANGIS', 'SANNOIS', 'SAINT-DENIS', 'PARIS 11', 'ROMBAS'];
		cityTestCases.forEach(async (testCase) => {
			it(`FR company search with city:${testCase}`, async () => {
				const queryString = `?countries=FR&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const cityhouseNotestCases = [
			{
				params: {
					city: 'SANNOIS',
					houseNo: '6',
				},

				expected: {
					key: 'safeNo',
					value: 'FR16549246',
				},
			},
			{
				params: {
					city: 'SAINT-DENIS',
					houseNo: '2',
				},

				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					houseNo: '15',
				},

				expected: {
					key: 'safeNo',
					value: 'FR11903610',
				},
			},
		];
		cityhouseNotestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&houseNo=${testCase.params.houseNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					postCode: '91130',
				},

				expected: {
					key: 'safeNo',
					value: 'FR02650974',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					postCode: '95110',
				},

				expected: {
					key: 'safeNo',
					value: 'FR16549246',
				},
			},
			{
				params: {
					city: 'SAINT-DENIS',
					postCode: '93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					city: 'PARIS 11',
					postCode: '75011',
				},
				expected: {
					key: 'safeNo',
					value: 'FR35837419',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					postCode: '57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'NANCY',
					province: 'GRAND EST',
				},
				expected: {
					key: 'safeNo',
					value: 'FR35601161',
				},
			},
			{
				params: {
					city: 'PUTEAUX',
					province: 'ILE DE FRANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23161764',
				},
			},
			{
				params: {
					city: 'MODANE',
					province: 'AUVERGNE RHONE ALPES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11726229',
				},
			},
			{
				params: {
					city: 'FORT-DE-FRANCE',
					province: 'MARTINIQUE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02651398',
				},
			},
			{
				params: {
					city: 'GLOS-SUR-RISLE',
					province: 'NORMANDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386575',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					simpleValue: 'CHEMIN DU CLOS LANGLET, RIS-ORANGIS, 91130',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02650974',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					city: 'SAINT-DENIS',
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					street: '1 RUE JULES GUESDE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					city: 'SAINT-DENIS',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					city: 'PARIS',
					street: '1 CITE GRISET',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23026921',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					street: 'PLACE DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityexacttestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					exact: 'false',
				},
			},
		];
		cityexacttestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR20666347',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11560708',
				},
			},
			{
				params: {
					city: 'EMERAINVILLE',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR09985678',
				},
			},
			{
				params: {
					city: 'GARDANNE',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02651237',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16544386',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					phoneNo: '0169021920',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					city: 'PARIS',
					phoneNo: '0140019666',
				},
				expected: {
					key: 'safeNo',
					value: 'FR05900823',
				},
			},
			{
				params: {
					city: 'EMERAINVILLE',
					phoneNo: '0153256000',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					city: 'NOISY-LE-GRAND',
					phoneNo: '0243930437',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132900',
				},
			},
			{
				params: {
					city: 'PETITE-FORET',
					phoneNo: '0184943635',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724854',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'RIS-ORANGIS',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'SANNOIS',
					status: 'NonActive',
				},
			},
			{
				params: {
					city: 'SAINT-DENIS',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'PARIS 11',
					status: 'NonActive',
				},
			},
			{
				params: {
					city: 'ROMBAS',
					status: 'Active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const citytradeNametestCase = [
			{
				params: {
					city: 'LIEUSAINT',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					city: 'CHECY',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					city: 'SAINT-DENIS',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					city: 'PARIS',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		citytradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR houseNo', () => {
		const houseNoTestCases = ['1', '6', '2', '50', '15'];
		houseNoTestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo:${testCase}`, async () => {
				const queryString = `?countries=FR&houseNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.houseNo === `${testCase}`), true);
			});
		});
		const houseNopostCodetestCases = [
			{
				params: {
					houseNo: '45',
					postCode: '54000',
				},
			},
			{
				params: {
					houseNo: '23',
					postCode: '92800',
				},
			},
			{
				params: {
					houseNo: '1',
					postCode: '42000',
				},
			},
			{
				params: {
					houseNo: '26',
					postCode: '97200',
				},
			},
			{
				params: {
					houseNo: '3',
					postCode: '50000',
				},
			},
		];
		houseNopostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const houseNoprovincetestCases = [
			{
				params: {
					houseNo: '45',
					province: 'GRAND EST',
				},
			},
			{
				params: {
					houseNo: '23',
					province: 'ILE DE FRANCE',
				},
			},
			{
				params: {
					houseNo: '1',
					province: 'AUVERGNE RHONE ALPES',
				},
			},
			{
				params: {
					houseNo: '26',
					province: 'MARTINIQUE',
				},
			},
			{
				params: {
					houseNo: '3',
					province: 'NORMANDIE',
				},
			},
		];
		houseNoprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const houseNosimpleValuetestCases = [
			{
				params: {
					houseNo: '1',
					simpleValue: '1 PLACE SAMUEL DE CHAMPLAIN, COURBEVOIE, 92400',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12215837',
				},
			},
			{
				params: {
					houseNo: '6',
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					houseNo: '2',
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					houseNo: '4',
					simpleValue: '4 CHE DES SABLES, ANTIBES, 06160',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30604787',
				},
			},
		];
		houseNosimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNostreettestCases = [
			{
				params: {
					houseNo: '6',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					houseNo: '2',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					houseNo: '1',
					street: '1 CITE GRISET',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23026921',
				},
			},
			{
				params: {
					houseNo: '4',
					street: '4 CHE DES SABLES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR13056134',
				},
			},
		];
		houseNostreettestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNoexacttestCases = [
			{
				params: {
					houseNo: '1',
					exact: 'true',
				},
			},
			{
				params: {
					houseNo: '15',
					exact: 'false',
				},
			},
		];
		houseNoexacttestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
			});
		});
		const houseNonametestCases = [
			{
				params: {
					houseNo: '1',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					houseNo: '6',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					houseNo: '15',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549461',
				},
			},
		];
		houseNonametestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNoofficeTypetestCases = [
			{
				params: {
					houseNo: '48',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					houseNo: '6',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					houseNo: '9001',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					houseNo: '58',
					officeType: 'branch',
				},
			},
			{
				params: {
					houseNo: '18',
					officeType: 'branch',
				},
			},
		];
		houseNoofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const houseNophoneNotestCases = [
			{
				params: {
					houseNo: '1',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					houseNo: '102',
					phoneNo: '0140019666',
				},
			},
			{
				params: {
					houseNo: '18',
					phoneNo: '0800007046',
				},
			},
			{
				params: {
					houseNo: '4',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					houseNo: '3',
					phoneNo: '0184943635',
				},
			},
		];
		houseNophoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const houseNostatustestCases = [
			{
				params: {
					houseNo: '9001',
					status: 'Active',
				},
			},
			{
				params: {
					houseNo: '15',
					status: 'NonActive',
				},
			},
			{
				params: {
					houseNo: '10',
					status: 'Active',
				},
			},
			{
				params: {
					houseNo: '41',
					status: 'NonActive',
				},
			},
			{
				params: {
					houseNo: '24',
					status: 'Active',
				},
			},
		];
		houseNostatustestCases.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const houseNotradeNametestCase = [
			{
				params: {
					houseNo: '23',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					houseNo: '35',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					houseNo: '2',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					houseNo: '92',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		houseNotradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with houseNo: ${testCase.params.houseNo} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&houseNo=${testCase.params.houseNo}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR postCode', () => {
		const postCodeTestCases = ['91130', '95110', '93210', '75011', '57120'];
		postCodeTestCases.forEach(async (testCase) => {
			it(`FR company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=FR&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '54000',
					province: 'GRAND EST',
				},
			},
			{
				params: {
					postCode: '92800',
					province: 'ILE DE FRANCE',
				},
			},
			{
				params: {
					postCode: '73500',
					province: 'AUVERGNE RHONE ALPES',
				},
			},
			{
				params: {
					postCode: '97200',
					province: 'MARTINIQUE',
				},
			},
			{
				params: {
					postCode: '27290',
					province: 'NORMANDIE',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '91130',
					simpleValue: 'CHEMIN DU CLOS LANGLET, RIS-ORANGIS, 91130',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02650974',
				},
			},
			{
				params: {
					postCode: '95110',
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					postCode: '93210',
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					postCode: '57120',
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '95110',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					postCode: '93210',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					postCode: '75011',
					street: '1 CITE GRISET',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23026921',
				},
			},
			{
				params: {
					postCode: '57120',
					street: 'PLACE DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeexacttestCases = [
			{
				params: {
					postCode: '91130',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '95110',
					exact: 'false',
				},
			},
		];
		postCodeexacttestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '91130',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					postCode: '95110',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					postCode: '77184',
					name: 'SOCIETE NATIONALE SNCF',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					postCode: '57120',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '91130',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '95110',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '77184',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '13120',
					officeType: 'branch',
				},
			},
			{
				params: {
					postCode: '57120',
					officeType: 'branch',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '91130',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					postCode: '75011',
					phoneNo: '0140019666',
				},
			},
			{
				params: {
					postCode: '77184',
					phoneNo: '0153256000',
				},
			},
			{
				params: {
					postCode: '93160',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					postCode: '59494',
					phoneNo: '0184943635',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '91130',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '95110',
					status: 'NonActive',
				},
			},
			{
				params: {
					postCode: '93210',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '75011',
					status: 'NonActive',
				},
			},
			{
				params: {
					postCode: '57120',
					status: 'Active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const postCodetradeNametestCase = [
			{
				params: {
					postCode: '77127',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					postCode: '45430',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					postCode: '93210',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					postCode: '75013',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		postCodetradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR province', () => {
		const provinceTestCases = ['GRAND EST', 'ILE DE FRANCE', 'MARTINIQUE', 'NORMANDIE', 'GUADELOUPE'];
		provinceTestCases.forEach(async (testCase) => {
			it(`FR company search with province:${testCase}`, async () => {
				const queryString = `?countries=FR&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'ILE DE FRANCE',
					simpleValue: 'CHEMIN DU CLOS LANGLET, RIS-ORANGIS, 91130',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02650974',
				},
			},
			{
				params: {
					province: 'PROVENCE ALPES COTE D AZUR',
					simpleValue: '4 CHE DES SABLES, ANTIBES, 06160',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30604787',
				},
			},
			{
				params: {
					province: 'BRETAGNE',
					simpleValue: 'LIEU DIT LA PETITE ROCHETTE, VIGNOC, 35630',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23455598',
				},
			},
			{
				params: {
					province: 'CORSE',
					simpleValue: 'RUE DES TROIS MARIES, AJACCIO, 20000',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23666459',
				},
			},
			{
				params: {
					province: 'GRAND EST',
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'ILE DE FRANCE',
					street: '1 RUE JULES GUESDE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					province: 'PROVENCE ALPES COTE D AZUR',
					street: '4 CHE DES SABLES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30604787',
				},
			},
			{
				params: {
					province: 'BRETAGNE',
					street: 'LIEU DIT LA PETITE ROCHETTE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23455598',
				},
			},
			{
				params: {
					province: 'CORSE',
					street: 'RUE DES TROIS MARIES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR23666459',
				},
			},
			{
				params: {
					province: 'GRAND EST',
					street: 'PLACE DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724593',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provinceexacttestCases = [
			{
				params: {
					province: 'ILE DE FRANCE',
					exact: 'true',
				},
			},
			{
				params: {
					province: 'GRAND EST',
					exact: 'false',
				},
			},
		];
		provinceexacttestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'ILE DE FRANCE',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					province: 'PROVENCE ALPES COTE D AZUR',
					name: 'INGLESE JEAN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30604787',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'GUYANE',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'MAYOTTE',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'OCCITANIE',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'GUADELOUPE',
					officeType: 'branch',
				},
			},
			{
				params: {
					province: 'NOUVELLE AQUITAINE',
					officeType: 'branch',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const provincephoneNotestCases = [
			{
				params: {
					province: 'ILE DE FRANCE',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					province: 'AUVERGNE RHONE ALPES',
					phoneNo: '0981884018',
				},
			},
			{
				params: {
					province: 'PROVENCE ALPES COTE D AZUR',
					phoneNo: '0153256000',
				},
			},
			{
				params: {
					province: 'PAYS DE LA LOIRE',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					province: 'HAUTS DE FRANCE',
					phoneNo: '0184943635',
				},
			},
		];
		provincephoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'AUVERGNE RHONE ALPES',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'PAYS DE LA LOIRE',
					status: 'NonActive',
				},
			},
			{
				params: {
					province: 'BRETAGNE',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'NORMANDIE',
					status: 'NonActive',
				},
			},
			{
				params: {
					province: 'ILE DE FRANCE',
					status: 'Active',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const provincetradeNametestCase = [
			{
				params: {
					province: 'ILE DE FRANCE',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					province: 'CENTRE VAL DE LOIRE',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					province: 'ILE DE FRANCE',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					province: 'ILE DE FRANCE',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		provincetradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with province: ${testCase.params.province} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&province=${testCase.params.province}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR simpleValue', () => {
		const simpleValueTestCases = ['THELEVILLE, BOUGLAINVAL, 28130',
			'6 ESP DE LA GARE, SANNOIS, 95110', '2 PLACE AUX ETOILES, SAINT-DENIS, 93210', '1 CITE GRISET, PARIS, 75011', 'PLACE DE LA GARE, ROMBAS, 57120'];
		simpleValueTestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=FR&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'THELEVILLE, BOUGLAINVAL, 28130',
					street: 'THELEVILLE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11896657',
				},
			},
			{
				params: {
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
					street: '6 ESP DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
					street: '2 PLACE AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
					street: 'PLACE DE LA GARE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueexacttestCases = [
			{
				params: {
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '1 CITE GRISET, PARIS, 75011',
					exact: 'false',
				},
			},
		];
		simpleValueexacttestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'THELEVILLE, BOUGLAINVAL, 28130',
					name: 'BAUCHET ALAIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR01005891',
				},
			},
			{
				params: {
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
					name: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'THELEVILLE, BOUGLAINVAL, 28130',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR01005891',
				},
			},
			{
				params: {
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					simpleValue: '343 RTE BLANCHE, GARDANNE, 13120',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00133632',
				},
			},
			{
				params: {
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: '102 BD BEAUMARCHAIS, PARIS, 75011',
					phoneNo: '0140019666',
				},
				expected: {
					key: 'safeNo',
					value: 'FR05900823',
				},
			},
			{
				params: {
					simpleValue: 'RUE DE LA FAMILLE AURIBAULT, GARE SNCF, EMERAINVILLE, 77184',
					phoneNo: '0153256000',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					simpleValue: '4 RUE GALILEE, NOISY-LE-GRAND, 93160',
					phoneNo: '0243930437',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132900',
				},
			},
			{
				params: {
					simpleValue: 'RUE JOSEPH MARIE JACQUARD, PARC ACTIVITES LAVOISIER, PETITE-FORET, 59494',
					phoneNo: '0184943635',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724854',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'THELEVILLE, BOUGLAINVAL, 28130',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11896657',
				},
			},
			{
				params: {
					simpleValue: '6 ESP DE LA GARE, SANNOIS, 95110',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR18836325',
				},
			},
			{
				params: {
					simpleValue: 'RUE DE LA FAMILLE AURIBAULT, GARE SNCF, EMERAINVILLE, 77184',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					simpleValue: '343 RTE BLANCHE, GARDANNE, 13120',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR00133632',
				},
			},
			{
				params: {
					simpleValue: 'PLACE DE LA GARE, ROMBAS, 57120',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR18386524',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCase = [
			{
				params: {
					simpleValue: '23 AVENUE RENE CASSIN, LIEUSAINT, 77127',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					simpleValue: '35 RUE DE LA SAUGE, CHECY, 45430',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					simpleValue: '2 PLACE AUX ETOILES, SAINT-DENIS, 93210',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					simpleValue: '92 AVENUE DE FRANCE, PARIS, 75013',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		simpleValuetradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR street', () => {
		const streetTestCases = ['1 RUE JULES GUESDE', '6 ESP DE LA GARE', '2 PLACE AUX ETOILES', '1 CITE GRISET', 'PLACE DE LA GARE'];
		streetTestCases.forEach(async (testCase) => {
			it(`FR company search with street:${testCase}`, async () => {
				const queryString = `?countries=FR&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetexacttestCases = [
			{
				params: {
					street: '6 ESP DE LA GARE',
					exact: 'true',
				},
			},
			{
				params: {
					street: '1 CITE GRISET',
					exact: 'false',
				},
			},
		];
		streetexacttestCases.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: '1 RUE JULES GUESDE',
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					street: '6 ESP DE LA GARE',
					name: 'ESPACES SERVICES MULTIMEDIAS',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: '1 RUE JULES GUESDE',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR14801828',
				},
			},
			{
				params: {
					street: '6 ESP DE LA GARE',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					street: 'RUE DE LA FAMILLE AURIBAULT',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17594512',
				},
			},
			{
				params: {
					street: '343 RTE BLANCHE',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00133632',
				},
			},
			{
				params: {
					street: 'PLACE DE LA GARE',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18350352',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: '1 RUE JULES GUESDE',
					phoneNo: '0169021920',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					street: '102 BD BEAUMARCHAIS',
					phoneNo: '0140019666',
				},
				expected: {
					key: 'safeNo',
					value: 'FR05900823',
				},
			},
			{
				params: {
					street: 'RUE DE LA FAMILLE AURIBAULT',
					phoneNo: '0153256000',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					street: '4 RUE GALILEE',
					phoneNo: '0243930437',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00132900',
				},
			},
			{
				params: {
					street: 'RUE JOSEPH MARIE JACQUARD',
					phoneNo: '0184943635',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11724854',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: '1 RUE JULES GUESDE',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'FR34957539',
				},
			},
			{
				params: {
					street: '6 ESP DE LA GARE',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR18836325',
				},
			},
			{
				params: {
					street: 'RUE DE LA FAMILLE AURIBAULT',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR11724378',
				},
			},
			{
				params: {
					street: '343 RTE BLANCHE',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR00133632',
				},
			},
			{
				params: {
					street: 'PLACE DE LA GARE',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR18350352',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettradeNametestCase = [
			{
				params: {
					street: '23 AVENUE RENE CASSIN',
					tradeName: 'TEAM FASHION -- AS INTER -- AS CONSULTIN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR18401247',
				},
			},
			{
				params: {
					street: '35 RUE DE LA SAUGE',
					tradeName: 'ENSEIGNES SERVICE MAINTENANCE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30972043',
				},
			}, {
				params: {
					street: '2 PLACE AUX ETOILES',
					tradeName: 'SNCF ST DENIS 2 PL AUX ETOILES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17216335',
				},
			},
			{
				params: {
					street: '92 AVENUE DE FRANCE',
					tradeName: 'SNCF RESEAU',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04549472',
				},
			},
		];
		streettradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR name', () => {
		const nameTestCases = ['IMPLANTS SERVICE ORTHOPEDIE', 'ESPACES SERVICES MULTIMEDIAS', 'SOCIETE NATIONALE SNCF', '25 AVENUE DE LA GARE', 'SNCF RESEAU'];
		nameTestCases.forEach(async (testCase) => {
			it(`FR company search with name:${testCase}`, async () => {
				const queryString = `?countries=FR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'ESPACES SERVICES MULTIMEDIAS',
					exact: 'false',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it(`FR company search with name: ${testCase.params.name} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					name: 'ESPACES SERVICES MULTIMEDIAS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'FR15477693',
				},
			},
			{
				params: {
					name: 'INGLESE JEAN',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR30604787',
				},
			},
			{
				params: {
					name: 'MADAME JEHANNE RUYNAT',
					officeType: 'branch',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02041278',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`FR company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
					phoneNo: '0169021920',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					name: 'ESPACES SERVICES MULTIMEDIAS',
					phoneNo: '0140019666',
				},
				expected: {
					key: 'safeNo',
					value: 'FR05900823',
				},
			},
			{
				params: {
					name: 'SOCIETE NATIONALE SNCF',
					phoneNo: '0153256000',
				},
				expected: {
					key: 'safeNo',
					value: 'FR19625166',
				},
			},
			{
				params: {
					name: 'AGENCE LOCALE LA FERTE BERNARD',
					phoneNo: '0243930437',
				},
				expected: {
					key: 'safeNo',
					value: 'FR00133350',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'IMPLANTS SERVICE ORTHOPEDIE',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'FR16745653',
				},
			},
			{
				params: {
					name: 'ESPACES SERVICES MULTIMEDIAS',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR05900823',
				},
			},
			{
				params: {
					name: 'DELAVISSE PATRICIA',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR30480107',
				},
			},
			{
				params: {
					name: 'PRADERE CHAUBET LINDA',
					status: 'NonActive',
				},

				expected: {
					key: 'safeNo',
					value: 'FR08074039',
				},
			},
			{
				params: {
					name: 'SNCF RESEAU',
					status: 'Active',
				},

				expected: {
					key: 'safeNo',
					value: 'FR19250642',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`FR company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCase = [
			{
				params: {
					name: 'LA POSTE',
					tradeName: 'LA POSTE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02448492',
				},
			},
			{
				params: {
					name: 'BOUYGUES TELECOM',
					tradeName: 'BOUYGUES TELECOM ENTREPRISES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17061891',
				},
			},
			{
				params: {
					name: 'SOFICO FRANCE',
					tradeName: 'EURAAUDIT',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12099749',
				},
			},
		];
		nametradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR officeType', () => {
		const officeTypeTestCases = ['headOffice', 'branch'];
		officeTypeTestCases.forEach(async (testCase) => {
			it(`FR company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=FR&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypeexacttestCases = [
			{
				params: {
					officeType: 'headOffice',
					exact: 'true',
				},
			},
			{
				params: {
					officeType: 'branch',
					exact: 'false',
				},
			},
		];
		officeTypeexacttestCases.forEach(async (testCase) => {
			it(`FR company search with officeType: ${testCase.params.officeType} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&officeType=${testCase.params.officeType}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const officeTypephoneNotestCases = [
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0169021920',
				},
			},
			{
				params: {
					officeType: 'branch',
					phoneNo: '0140019666',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0153256000',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0243930437',
				},
			},
			{
				params: {
					officeType: 'branch',
					phoneNo: '0184943635',
				},
			},
		];
		officeTypephoneNotestCases.forEach(async (testCase) => {
			it(`FR company search with officeType: ${testCase.params.officeType} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=FR&officeType=${testCase.params.officeType}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const officeTypestatustestCases = [
			{
				params: {
					officeType: 'headOffice',
					status: 'Active',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					status: 'NonActive',
				},
			},
			{
				params: {
					officeType: 'branch',
					status: 'Active',
				},
			},
			{
				params: {
					officeType: 'branch',
					status: 'NonActive',
				},
			},
		];
		officeTypestatustestCases.forEach(async (testCase) => {
			it(`FR company search with officeType: ${testCase.params.officeType} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const officeTypetradeNametestCase = [
			{
				params: {
					officeType: 'branch',
					tradeName: 'BODY MINUTE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR04630114',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'BOUM BOUM SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR01451086',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'AGENCE CAISSE CENTRALE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11893657',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'EURAAUDIT',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12099744',
				},
			},
		];
		officeTypetradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR phoneNo', () => {
		const phoneNoTestCases = ['0169021920', '0140019666', '0153256000', '0243930437', '0184943635'];
		phoneNoTestCases.forEach(async (testCase) => {
			it(`FR company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=FR&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNoexacttestCases = [
			{
				params: {
					phoneNo: '0169021920',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '0140019666',
					exact: 'false',
				},
			},
		];
		phoneNoexacttestCases.forEach(async (testCase) => {
			it(`FR company search with phoneNo: ${testCase.params.phoneNo} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '0169021920',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '0140019666',
					status: 'NonActive',
				},
			},
			{
				params: {
					phoneNo: '0153256000',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '0243930437',
					status: 'NonActive',
				},
			},
			{
				params: {
					phoneNo: '0184943635',
					status: 'Active',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it(`FR company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=FR&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const phoneNotradeNametestCase = [
			{
				params: {
					phoneNo: '0157140078',
					tradeName: 'LA POSTE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02448492',
				},
			},
			{
				params: {
					phoneNo: '0144589090',
					tradeName: 'BOUYGUES TELECOM ENTREPRISES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17061891',
				},
			},
			{
				params: {
					phoneNo: '0164612626',
					tradeName: 'BOUM BOUM SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR01451086',
				},
			},
			{
				params: {
					phoneNo: '0820856929',
					tradeName: 'AGENCE CAISSE CENTRALE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11893657',
				},
			},
			{
				params: {
					phoneNo: '0387671842',
					tradeName: 'EURAAUDIT',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12099744',
				},
			},
		];
		phoneNotradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with phoneNo: ${testCase.params.phoneNo} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&phoneNo=${testCase.params.phoneNo}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR status', () => {
		const statusTestCases = ['Active', 'NonActive'];
		statusTestCases.forEach(async (testCase) => {
			it(`FR company search with status:${testCase}`, async () => {
				const queryString = `?countries=FR&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase}`), true);
			});
		});
		const statusexacttestCases = [
			{
				params: {
					status: 'Active',
					exact: 'true',
				},
			},
			{
				params: {
					status: 'NonActive',
					exact: 'false',
				},
			},
		];
		statusexacttestCases.forEach(async (testCase) => {
			it(`FR company search with status: ${testCase.params.status} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&status=${testCase.params.status}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const statustradeNametestCase = [
			{
				params: {
					status: 'Active',
					tradeName: 'LA POSTE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR02448492',
				},
			},
			{
				params: {
					status: 'Active',
					tradeName: 'BOUYGUES TELECOM ENTREPRISES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17061891',
				},
			},
			{
				params: {
					status: 'Active',
					tradeName: 'BOUM BOUM SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'FR01451086',
				},
			},
			{
				params: {
					status: 'Active',
					tradeName: 'AGENCE CAISSE CENTRALE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11893657',
				},
			},
			{
				params: {
					status: 'Active',
					tradeName: 'EURAAUDIT',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12099744',
				},
			},
		];
		statustradeNametestCase.forEach(async (testCase) => {
			it(`FR company search with status: ${testCase.params.status} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=FR&status=${testCase.params.status}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR tradeName', () => {
		const tradeNameTestCases = ['LA POSTE', 'BOUYGUES TELECOM ENTREPRISES', 'BOUM BOUM SERVICES', 'AGENCE CAISSE CENTRALE', 'EURAAUDIT'];
		tradeNameTestCases.forEach(async (testCase) => {
			it(`FR company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=FR&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const tradeNameexacttestCases = [
			{
				params: {
					tradeName: 'LA POSTE',
					exact: 'true',
				},
			},
			{
				params: {
					tradeName: 'BOUYGUES TELECOM ENTREPRISES',
					exact: 'false',
				},
			},
		];
		tradeNameexacttestCases.forEach(async (testCase) => {
			it(`FR company search with tradeName: ${testCase.params.tradeName} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=FR&tradeName=${testCase.params.tradeName}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.params.tradeName.toLowerCase()}`), true);
			});
		});
	});

	describe('FR specificcompanysearch', () => {
		const companysearchtestCases = [
			{
				params: {
					city: 'ROMBAS',
					postCode: '57120',
					province: 'GRAND EST',
					street: '24 RUE RAYMOND MONDON',
					officeType: 'headOffice',
					regNo: '78608017600021',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'FR12099744',
				},
			},
		];
		companysearchtestCases.forEach(async (testCase) => {
			it('FR companysearch with city, postCode, province, street, officeType, regNo and status', async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}&postCode=${testCase.params.postCode}
				&province=${testCase.params.province}&street=${testCase.params.street}&officeType=${testCase.params.officeType}&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;

				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const companysearchtestCase1 = [
			{
				params: {
					acronym: 'C.E.G.E.E',
					activityCodes: '6419Z',
					city: 'ROMBAS',
					houseNo: '3',
					postCode: '57120',
					province: 'GRAND EST',
					simpleValue: '3 RUE DE VERSAILLES, ROMBAS, 57120',
					street: '3 RUE DE VERSAILLES,',
					name: 'CAISSE D\'EPARGNE ET DE PREVOYANCE GRAND EST EUROPE',
					officeType: 'branch',
					phoneNo: '0356222468',
					status: 'Active',
					tradeName: 'CAISSE D\'EPARGNE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11904258',
				},
			},
		];
		companysearchtestCase1.forEach(async (testCase) => {
			it('FR company search with acronym, activityCodes, address, name, officeType,phoneNo, status, tradeName', async () => {
				const querystring = `?countries=FR&acronym=${testCase.params.acronym}&activityCodes=${testCase.params.activityCodes}
				&city=${testCase.params.city}&houseNo=${testCase.params.houseNo}&postCode=${testCase.params.postCode}&province=${testCase.params.province}
				&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&name=${testCase.params.name}&officeType=${testCase.params.officeType}
				&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}&tradeName=${testCase.params.tradeName}`;

				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR partialmatches', () => {
		const partialvatNotestCases = [
			{
				params: {
					vatNo: 'FR13325373470',
				},
				expected: {
					vatNo: 'FR13325373470',
				},
			},
			{
				params: {
					vatNo: 'FR 13325373470',
				},
				expected: {
					vatNo: 'FR13325373470',
				},
			},
			{
				params: {
					vatNo: 'Fr13325373470',
				},
				expected: {
					vatNo: 'FR13325373470',
				},
			},
			{
				params: {
					vatNo: '13325373470',
				},
				expected: {
					vatNo: 'FR13325373470',
				},
			},
		];
		partialvatNotestCases.forEach(async (testCase) => {
			it(`FR company search with partialvatNo: ${testCase.params.vatNo}`, async () => {
				const querystring = `?countries=FR&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase.expected.vatNo}`), true);
			});
		});
		const partialpostCodetestCases = [
			{
				params: {
					postCode: '4 7 500',
				},
				expected: {
					postCode: '47500',
				},
			},
			{
				params: {
					postCode: '47',
				},
				expected: {
					postCode: '47300',
				},
			},
			{
				params: {
					postCode: '47500',
				},
				expected: {
					postCode: '47500',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`FR company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=FR&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.expected.postCode}`), true);
			});
		});
		const partialregNotestCases = [
			{
				params: {
					regNo: '325373470',
				},
				expected: {
					regNo: '32537347000047',
				},
			},
			{
				params: {
					regNo: '408305472',
				},
				expected: {
					regNo: '40830547200032',
				},
			},
			{
				params: {
					regNo: '32537347000021',
				},
				expected: {
					regNo: '32537347000021',
				},
			},
			{
				params: {
					regNo: '3 2 5 3 7 3 4 7 0',
				},
				expected: {
					regNo: '32537347000047',
				},
			},
			{
				params: {
					regNo: '3253 73 47 0000 21',
				},
				expected: {
					regNo: '32537347000021',
				},
			},
		];
		partialregNotestCases.forEach(async (testCase) => {
			it(`FR company search with partialregNo: ${testCase.params.regNo}`, async () => {
				const querystring = `?countries=FR&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.expected.regNo}`), true);
			});
		});
	});

	describe('FR synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'SCM BALAGNE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR31187172',
				},
			},
			{
				params: {
					name: 'SOCIETE CIVILE DE MOYENS BALAGNE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR31187172',
				},
			},
			{
				params: {
					name: 'ESSO SA FRANCAISE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR31380061',
				},
			},
			{
				params: {
					name: 'PROVALLIANCE GIE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR35640521',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`FR company search with namesynonyms: ${testCase.params.name}`, async () => {
				const querystring = `?countries=FR&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'Avignion',
				},
				expected: {
					city: 'AVIGNON',
				},
			},
			{
				params: {
					city: 'Nants',
				},
				expected: {
					city: 'NANTES',
				},
			},
			{
				params: {
					city: 'Renes',
				},
				expected: {
					city: 'RENNES',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`FR company search with citysynonyms: ${testCase.params.city}`, async () => {
				const querystring = `?countries=FR&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.expected.city}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'SQuare PAUL VIDAL',
					name: 'LA BANQUE POSTALE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR05118449',
				},
			},
			{
				params: {
					street: 'route DE VILLEDIEU',
					name: 'LEADER PRICE',
				},
				expected: {
					key: 'safeNo',
					value: 'FR17229060',
				},
			},
			{
				params: {
					street: '6 ALL JAMES WATT',
					name: 'AUTOMOBILES CITROEN',
				},
				expected: {
					key: 'safeNo',
					value: 'FR11806184',
				},
			},
			{
				params: {
					street: '793 AV CHARLES DE GAULLE',
					name: 'OLYMPIA DEVELOPPEMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'FR08893276',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`FR company search with streetsynonyms: ${testCase.params.street}`, async () => {
				const querystring = `?countries=FR&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('FR autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company', 'gmbh'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns FR company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=FR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
					// qwerty = pass
					// testqwert = fail
				});
			});
		});
		const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
		NumericsTestCases.forEach(async (testCase) => {
			it(`returns FR company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=FR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphaNumericsTestCases = ['1 a', 'j 2'];
		AlphaNumericsTestCases.forEach(async (testCase) => {
			it(`returns FR company name startwith alphanumerics:${testCase}`, async () => {
				const queryString = `?countryCode=FR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const SpecialcharacterTestCases = ['@'];
		SpecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns FR company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=FR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
	});
});
