import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('DK Regression Tests', async () => {
	describe('DK company Search', () => {
		it('returns DK Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=DK`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'DK'), true);
		});
	});

	describe('DK id', () => {
		const idtestCases = ['DK-X-DK03657317', 'DK-X-DK03657322', 'DK-X-DK03657332', 'DK-X-DK03657355', 'DK-X-DK06484952'];
		idtestCases.forEach(async (testCase) => {
			it(`DK company with id:${testCase}`, async () => {
				const queryString = `?countries=DK&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					safeNo: 'DK03657317',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('DK company search with id and safeNo', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					regNo: '84860115',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('DK company search with id and regNo', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					vatNo: '84860115',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('DK company search with id and vatNo', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					city: 'Viborg',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('DK company search with id and city', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					postCode: '8800',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('DK company search with id and postCode', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					province: 'VIBORG',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('DK company search with id and province', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					simpleValue: 'Tranehøjen 3 Mønsted, 8800, Viborg',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('DK company search with id and simpleValue', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					street: 'Tranehøjen 3 Mønsted',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('DK company search with id and street', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					name: 'TØMRERMESTER BENT SØRENSEN',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('DK company search with id and name', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('DK company search with id and officeType', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'DK-X-DK03657317',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('DK company search with id and status', async () => {
				const queryString = `?countries=DK&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('DK safeNo', () => {
		const safeNotestCases = ['DK03657317', 'DK03657322', 'DK03657332', 'DK03657355', 'DK06484952'];
		safeNotestCases.forEach(async (testCase) => {
			it(`DK company with safeNo:${testCase}`, async () => {
				const queryString = `?countries=DK&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					regNo: '84860115',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and regNo', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					vatNo: '84860115',
				},
			},
		];
		safeNovatNotestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and vatNo', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					city: 'Viborg',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and city', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					postCode: '8800',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and postCode', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					province: 'VIBORG',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and province', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					simpleValue: 'Tranehøjen 3 Mønsted, 8800, Viborg',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					street: 'Tranehøjen 3 Mønsted',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and street', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					name: 'TØMRERMESTER BENT SØRENSEN',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and name', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and officeType', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'DK03657317',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('DK company search with safeNo and status', async () => {
				const queryString = `?countries=DK&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('DK regNo', () => {
		const regNotestCases = ['84860115', '84866113', '84872210', '84890219', '84890812'];
		regNotestCases.forEach(async (testCase) => {
			it(`DK company with regNo:${testCase}`, async () => {
				const queryString = `?countries=DK&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '84860115',
					vatNo: '84860115',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('DK company search with regNo and vatNo', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '84860115',
					city: 'Viborg',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('DK company search with regNo and city', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '84860115',
					postCode: '8800',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('DK company search with regNo and postCode', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '84860115',
					province: 'VIBORG',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('DK company search with regNo and province', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '84860115',
					simpleValue: 'Tranehøjen 3 Mønsted, 8800, Viborg',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('DK company search with regNo and simpleValue', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '84860115',
					street: 'Tranehøjen 3 Mønsted',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('DK company search with regNo and street', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '84860115',
					name: 'TØMRERMESTER BENT SØRENSEN',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('DK company search with regNo and name', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '84860115',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('DK company search with regNo and officeType', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '84860115',
					status: 'Active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('DK company search with regNo and status', async () => {
				const queryString = `?countries=DK&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('DK vatNo', () => {
		const vatNotestCases = ['84860115', '84866113', '84872210', '84890219', '84890812'];
		vatNotestCases.forEach(async (testCase) => {
			it(`DK company with vatNo:${testCase}`, async () => {
				const queryString = `?countries=DK&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: '84860115',
					city: 'Viborg',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and city', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: '84860115',
					postCode: '8800',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and postCode', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCases = [
			{
				params: {
					vatNo: '84860115',
					province: 'VIBORG',
				},
			},
		];
		vatNoprovincetestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and province', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCases = [
			{
				params: {
					vatNo: '84860115',
					simpleValue: 'Tranehøjen 3 Mønsted, 8800, Viborg',
				},
			},
		];
		vatNosimpleValuetestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: '84860115',
					street: 'Tranehøjen 3 Mønsted',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and street', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: '84860115',
					name: 'TØMRERMESTER BENT SØRENSEN',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and name', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCases = [
			{
				params: {
					vatNo: '84860115',
					officeType: 'headOffice',
				},
			},
		];
		vatNoofficeTypetestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and officeType', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: '84860115',
					status: 'Active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('DK company search with vatNo and status', async () => {
				const queryString = `?countries=DK&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('DK city', () => {
		const citytestCases = ['Viborg', 'Grenaa', 'Padborg', 'Solrød Strand', 'Løgumkloster'];
		citytestCases.forEach(async (testCase) => {
			it(`DK company with city:${testCase}`, async () => {
				const queryString = `?countries=DK&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'Viborg',
					postCode: '8800',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					city: 'Grenaa',
					postCode: '8500',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					postCode: '6330',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					city: 'Solrød Strand',
					postCode: '2680',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02963431',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					postCode: '6240',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'Viborg',
					province: 'VIBORG',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					city: 'Grenaa',
					province: 'NORDDJURS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					province: 'AABENRAA',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					city: 'Solrød Strand',
					province: 'SOLRØD',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02963431',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					province: 'TØNDER',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'Viborg',
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					city: 'Grenaa',
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					simpleValue: 'Industrivej 13, AABENRAA, 6330, Padborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03004858',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'Viborg',
					street: 'Center Vest 16',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					city: 'Grenaa',
					street: 'Veggerslevvej 11 Voldby',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					street: 'Industrivej 13',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03004858',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					street: 'Fælledvej 7 Vester Terp',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.line1.toLowerCase()}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'Viborg',
					name: 'THOKAMO ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02941648',
				},
			},
			{
				params: {
					city: 'Grenaa',
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					name: 'PROFLEX KEMI A/S',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					name: 'FÆLLED MN INVEST ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'Viborg',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Grenaa',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Padborg',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Solrød Strand',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'Viborg',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					city: 'Grenaa',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					city: 'Padborg',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04451315',
				},
			},
			{
				params: {
					city: 'Solrød Strand',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02967812',
				},
			},
			{
				params: {
					city: 'Løgumkloster',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04443011',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`DK company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('DK postCode', () => {
		const postCodetestCases = ['8800', '8500', '6330', '2680', '6240'];
		postCodetestCases.forEach(async (testCase) => {
			it(`DK company with postCode:${testCase}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '8800',
					province: 'VIBORG',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					postCode: '8500',
					province: 'NORDDJURS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					postCode: '6330',
					province: 'AABENRAA',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					postCode: '2680',
					province: 'SOLRØD',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02963431',
				},
			},
			{
				params: {
					postCode: '6240',
					province: 'TØNDER',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '8800',
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					postCode: '8500',
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					postCode: '6330',
					simpleValue: 'Industrivej 13, AABENRAA, 6330, Padborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					postCode: '6240',
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const postCodestreettestCases = [
			// {
			// 	params: {
			// 		postCode: '8800',
			// 		street: 'Center Vest 16',
			// 	},
			// 	expected: {
			// 		key: 'safeNo',
			// 		value: 'DK02965704',
			// 	},
			// },
			{
				params: {
					postCode: '8500',
					street: 'Veggerslevvej 11 Voldby',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			// {
			// 	params: {
			// 		postCode: '6330',
			// 		street: 'Industrivej 13',
			// 	},
			// 	expected: {
			// 		key: 'safeNo',
			// 		value: 'DK02951211',
			// 	},
			// },
			// {
			// 	params: {
			// 		postCode: '6240',
			// 		street: 'Fælledvej 7 Vester Terp',
			// 	},
			// 	expected: {
			// 		key: 'safeNo',
			// 		value: 'DK03176176',
			// 	},
			// },
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '8800',
					name: 'THOKAMO ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02941648',
				},
			},
			{
				params: {
					postCode: '8500',
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					postCode: '6330',
					name: 'PROFLEX KEMI A/S',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					postCode: '6240',
					name: 'FÆLLED MN INVEST ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '8800',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '8500',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '6330',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '2680',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '6240',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '8800',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03041923',
				},
			},
			{
				params: {
					postCode: '8500',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					postCode: '6330',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03785369',
				},
			},
			{
				params: {
					postCode: '2680',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04416089',
				},
			},
			{
				params: {
					postCode: '6240',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04443011',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`DK company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
	});

	describe('DK province', () => {
		const provincetestCases = ['VIBORG', 'NORDDJURS', 'AABENRAA', 'SOLRØD', 'TØNDER'];
		provincetestCases.forEach(async (testCase) => {
			it(`DK company with province:${testCase}`, async () => {
				const queryString = `?countries=DK&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'VIBORG',
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					province: 'NORDDJURS',
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					province: 'AABENRAA',
					simpleValue: 'Industrivej 13, AABENRAA, 6330, Padborg',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					province: 'TØNDER',
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it(`DK company search with province: ${testCase.params.province} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=DK&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'VIBORG',
					street: 'Center Vest 16',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					province: 'NORDDJURS',
					street: 'Veggerslevvej 11 Voldby',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					province: 'AABENRAA',
					street: 'Industrivej 13',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					province: 'TØNDER',
					street: 'Fælledvej 7 Vester Terp',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`DK company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=DK&province=${testCase.params.province}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'VIBORG',
					name: 'THOKAMO ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02941648',
				},
			},
			{
				params: {
					province: 'NORDDJURS',
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					province: 'AABENRAA',
					name: 'PROFLEX KEMI A/S',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					province: 'TØNDER',
					name: 'FÆLLED MN INVEST ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`DK company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&province=${testCase.params.province}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'VIBORG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'NORDDJURS',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'AABENRAA',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'SOLRØD',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'TØNDER',
					officeType: 'headOffice',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with province: ${testCase.params.province} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'VIBORG',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02962040',
				},
			},
			{
				params: {
					province: 'NORDDJURS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					province: 'AABENRAA',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04492334',
				},
			},
			{
				params: {
					province: 'SOLRØD',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04491386',
				},
			},
			{
				params: {
					province: 'TØNDER',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04441406',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it(`DK company search with province: ${testCase.params.province} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
	});

	describe('DK simpleValue', () => {
		const simpleValuetestCases = [
			'Center Vest 16, VIBORG, 8800, Viborg',
			'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa', 'Industrivej 13, AABENRAA, 6330, Padborg', 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`DK company with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=DK&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
					street: 'Center Vest 16',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
					street: 'Veggerslevvej 11 Voldby',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					simpleValue: 'Industrivej 13, AABENRAA, 6330, Padborg',
					street: 'Industrivej 13',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03004858',
				},
			},
			{
				params: {
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
					street: 'Fælledvej 7 Vester Terp',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`DK company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=DK&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.line1}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
					name: 'ColorConnect ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
					name: 'FÆLLED MN INVEST ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`DK company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'Center Vest 16, VIBORG, 8800, Viborg',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					simpleValue: 'Industrivej 13, AABENRAA, 6330, Padborg',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					simpleValue: 'Fælledvej 7 Vester Terp, TØNDER, 6240, Løgumkloster',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'Hedevænget 27, VIBORG, 8800, Viborg',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03041923',
				},
			},
			{
				params: {
					simpleValue: 'Veggerslevvej 11 Voldby, NORDDJURS, 8500, Grenaa',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					simpleValue: 'Torvegade 1, BOV, 6330, Padborg',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04451315',
				},
			},
			{
				params: {
					simpleValue: 'Hyldebærhaven 2, SOLRØD, 2680, Solrød Strand',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04882577',
				},
			},
			{
				params: {
					simpleValue: 'Hedevej 9-19, TØNDER, 6240, Løgumkloster',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04443011',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`DK company search with simpleValue:${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
	});

	describe('DK street', () => {
		const streettestCases = ['Center Vest 16', 'Veggerslevvej 11 Voldby', 'Industrivej 13', 'Fælledvej 7 Vester Terp'];
		streettestCases.forEach(async (testCase) => {
			it(`DK company with street:${testCase}`, async () => {
				const queryString = `?countries=DK&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'Center Vest 16',
					name: 'ColorConnect ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					street: 'Veggerslevvej 11 Voldby',
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					street: 'Fælledvej 7 Vester Terp',
					name: 'FÆLLED MN INVEST ApS',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`DK company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'Center Vest 16',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02965704',
				},
			},
			{
				params: {
					street: 'Veggerslevvej 11 Voldby',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					street: 'Industrivej 13',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					street: 'Fælledvej 7 Vester Terp',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03176176',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'Hedevænget 27',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03041923',
				},
			},
			{
				params: {
					street: 'Veggerslevvej 11 Voldby',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02998307',
				},
			},
			{
				params: {
					street: 'Torvegade 1',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04451315',
				},
			},
			{
				params: {
					street: 'Hyldebærhaven 2',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04882577',
				},
			},
			{
				params: {
					street: 'Hedevej 9-19',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK04443011',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`DK company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
	});

	describe('DK name', () => {
		const nametestCases = ['THOKAMO ApS', 'ES SMEDE- OG MASKINSERVICE ApS', 'PROFLEX KEMI A/S', 'KEEPSMILING ApS', 'FÆLLED MN INVEST ApS'];
		nametestCases.forEach(async (testCase) => {
			it(`DK company with name:${testCase}`, async () => {
				const queryString = `?countries=DK&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'THOKAMO ApS',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'ES SMEDE- OG MASKINSERVICE ApS',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'PROFLEX KEMI A/S',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'KEEPSMILING ApS',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'FÆLLED MN INVEST ApS',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`DK company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=DK&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'THOKAMO ApS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02941648',
				},
			},
			{
				params: {
					name: 'PROFLEX KEMI A/S',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DK02951211',
				},
			},
			{
				params: {
					name: 'KEEP SMILEY ApS',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK03330525',
				},
			},
			{
				params: {
					name: 'Fælled Boldklub',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DK06025451',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`DK company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
	});

	describe('DK officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`DK company with name:${testCase}`, async () => {
				const queryString = `?countries=DK&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypestatustestCases = [
			{
				params: {
					officeType: 'headOffice',
					status: 'NonActive',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					status: 'Active',
				},
			},
		];
		officeTypestatustestCases.forEach(async (testCase) => {
			it(`DK company search with officeType: ${testCase.params.officeType} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DK&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('DK status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`DK company with status:${testCase}`, async () => {
				const queryString = `?countries=DK&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('DK synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'Novo Nordisk AS',
				},
				expected: {
					name: 'NOVO NORDISK A/S',
				},
			},
			{
				params: {
					name: 'og Holding ApS',
				},
				expected: {
					name: 'OCH Holding ApS',
				},
			},
			{
				params: {
					name: 'Impilo Denmark',
				},
				expected: {
					name: 'Impilo Danmark',
				},
			},
			{
				params: {
					name: 'Procom Danmark',
				},
				expected: {
					name: 'Procom Denmark',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`DK company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DK&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'copenhague',
				},
				expected: {
					city: 'København K',
				},
			},
			{
				params: {
					city: 'copenhagen',
				},
				expected: {
					city: 'København K',
				},
			},
			{
				params: {
					city: 'København',
				},
				expected: {
					city: 'København K',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`DK company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=DK&city=${testCase.params.city}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.expected.city.toLowerCase()}`), true);
			});
		});
		const streetconjoinedsynonymtestCases = [
			{
				params: {
					street: 'Gormsvejen',
				},
				expected: {
					street: 'Gormsvej',
				},
			},
			{
				params: {
					street: 'Gormsvænget',
				},
				expected: {
					street: 'Gormsvej',
				},
			},
			{
				params: {
					street: 'Gammeltorvet 8',
				},
				expected: {
					street: 'Gammeltorv 8',
				},
			},
			{
				params: {
					street: 'Brostræde',
				},
				expected: {
					street: 'Brostrædet 1',
				},
			},
			{
				params: {
					street: 'Flyveplads',
				},
				expected: {
					street: 'Flyvepladsen',
				},
			},
		];
		streetconjoinedsynonymtestCases.forEach(async (testCase) => {
			it(`DK company search with streetconjoined: ${testCase.params.street}`, async () => {
				const queryString = `?countries=DK&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
			});
		});
	});

	describe(' DK Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns DK company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=DK&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
		NumericsTestCases.forEach(async (testCase) => {
			it(`returns DK company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=DK&name=${testCase}`;
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
			it(`returns DK company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=DK&name=${testCase}`;
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
