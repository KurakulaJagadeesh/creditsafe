import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('FI Regression tests', async () => {
	describe('FI id searches', () => {
		const idtestCases = ['FI-X-06601480', 'FI-X-17349305'];
		idtestCases.forEach(async (testCase) => {
			it(`FI company search with id:${testCase}`, async () => {
				const queryString = `?countries=FI&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					safeNo: 'FI00786091',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('FI company search with id and safeNo', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					regNo: '06601480',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('FI company search with id and regNo', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					vatNo: '06601480',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('FI company search with id and vatNo', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					name: 'CREDITAX OY',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('FI company search with id and name', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					postCode: '6153',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('FI company search with id and city', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					postCode: '6153',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('FI company search with id and postCode', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with id and simpleValue', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('FI company search with id and street', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					status: 'active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('FI company search with id and status', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'FI-X-06601480',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with id and officeType', async () => {
				const queryString = `?countries=FI&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI safeNo searches', () => {
		const safeNotestCases = ['FI00786091', 'FI00946377'];
		safeNotestCases.forEach(async (testCase) => {
			it(`FI company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=FI&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					regNo: '06601480',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and regNo', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					vatNo: '06601480',
				},
			},
		];
		safeNovatNotestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and vatNo', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					name: 'CREDITAX OY',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and name', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					postCode: '6153',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and city', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					postCode: '6153',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and postCode', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and street', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					status: 'active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and status', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'FI00786091',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with safeNo and officeType', async () => {
				const queryString = `?countries=FI&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI regNo searches', () => {
		const regNotestCases = ['06601480', '17349305'];
		regNotestCases.forEach(async (testCase) => {
			it(`FI company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=FI&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '06601480',
					vatNo: '06601480',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('FI company search with regNo and vatNo', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '06601480',
					name: 'CREDITAX OY',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('FI company search with regNo and name', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '06601480',
					postCode: '6153',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('FI company search with regNo and city', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '06601480',
					postCode: '6153',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('FI company search with regNo and postCode', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '06601480',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with regNo and simpleValue', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '06601480',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('FI company search with regNo and street', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '06601480',
					status: 'active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('FI company search with regNo and status', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '06601480',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with regNo and officeType', async () => {
				const queryString = `?countries=FI&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI vatNo searches', () => {
		const vatNotestCases = ['06601480', '17349305'];
		vatNotestCases.forEach(async (testCase) => {
			it(`FI company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=FI&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: '06601480',
					name: 'CREDITAX OY',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and name', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: '06601480',
					postCode: '6153',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and city', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: '06601480',
					postCode: '6153',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and postCode', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCases = [
			{
				params: {
					vatNo: '06601480',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		vatNosimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: '06601480',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and street', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: '06601480',
					status: 'active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and status', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCases = [
			{
				params: {
					vatNo: '06601480',
					officeType: 'headOffice',
				},
			},
		];
		vatNoofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with vatNo and officeType', async () => {
				const queryString = `?countries=FI&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI city searches', () => {
		const citytestCases = ['HELSINKI', 'ESPOO'];
		citytestCases.forEach(async (testCase) => {
			it(`FI company search with city:${testCase}`, async () => {
				const queryString = `?countries=FI&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'SALO',
					name: 'CREDITAX OY',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it('FI company search with city and name', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'HELSINKI',
					postCode: '00210',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it('FI company search with city and postCode', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'HELSINKI',
					simpleValue: 'MELKONKUJA 1 C 44, 00210, HELSINKI',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with city and simpleValue', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'HELSINKI',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it('FI company search with city and street', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'HELSINKI',
					status: 'active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it('FI company search with city and status', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'HELSINKI',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with city and officeType', async () => {
				const queryString = `?countries=FI&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI postCode searches', () => {
		const postCodetestCases = ['00210'];
		postCodetestCases.forEach(async (testCase) => {
			it(`FI company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=FI&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '24100',
					name: 'CREDITAX OY',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it('FI company search with postCode and name', async () => {
				const queryString = `?countries=FI&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '00210',
					simpleValue: 'MELKONKUJA 1 C 44, 00210, HELSINKI',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('FI company search with postCode and simpleValue', async () => {
				const queryString = `?countries=FI&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '00210',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it('FI company search with postCode and street', async () => {
				const queryString = `?countries=FI&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '00210',
					status: 'active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it('FI company search with postCode and status', async () => {
				const queryString = `?countries=FI&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '00210',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with postCode and officeType', async () => {
				const queryString = `?countries=FI&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI simpleValue searches', () => {
		const simpleValuetestCases = ['C/O REIJO PELTOLA HORNINKATU 9 A 19, 24100, SALO'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`FI company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=FI&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'C/O REIJO PELTOLA HORNINKATU 9 A 19, 24100, SALO',
					name: 'CREDITAX OY',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it('FI company search with simpleValue and name', async () => {
				const queryString = `?countries=FI&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'MELKONKUJA 1 C 44, 00210, HELSINKI',
					street: 'MELKONKUJA 1 C 44',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it('FI company search with simpleValue and street', async () => {
				const queryString = `?countries=FI&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'MELKONKUJA 1 C 44, 00210, HELSINKI',
					status: 'active',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it('FI company search with simpleValue and status', async () => {
				const queryString = `?countries=FI&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'MELKONKUJA 1 C 44, 00210, HELSINKI',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with simpleValue and officeType', async () => {
				const queryString = `?countries=FI&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI street searches', () => {
		const streettestCases = ['MELKONKUJA 1 C 44'];
		streettestCases.forEach(async (testCase) => {
			it(`FI company search with street:${testCase}`, async () => {
				const queryString = `?countries=FI&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'C/O REIJO PELTOLA HORNINKATU 9 A 19',
					name: 'CREDITAX OY',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it('FI company search with street and name', async () => {
				const queryString = `?countries=FI&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'C/O REIJO PELTOLA HORNINKATU 9 A 19',
					status: 'active',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it('FI company search with street and status', async () => {
				const queryString = `?countries=FI&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'C/O REIJO PELTOLA HORNINKATU 9 A 19',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with street and officeType', async () => {
				const queryString = `?countries=FI&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI name searches', () => {
		const nametestCases = ['CREDITAX OY', 'INFOSYS LIMITED, SUOMEN SIVULIIKE'];
		nametestCases.forEach(async (testCase) => {
			it(`FI company search with name:${testCase}`, async () => {
				const queryString = `?countries=FI&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'CREDITAX OY',
					exact: 'true',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it('FI company search with name and name', async () => {
				const queryString = `?countries=FI&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'CREDITAX OY',
					status: 'active',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it('FI company search with name and status', async () => {
				const queryString = `?countries=FI&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'CREDITAX OY',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'FI00786091',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with name and officeType', async () => {
				const queryString = `?countries=FI&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('FI status searches', () => {
		const statustestCases = ['active'];
		statustestCases.forEach(async (testCase) => {
			it(`FI company search with status:${testCase}`, async () => {
				const queryString = `?countries=FI&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const statusofficeTypetestCases = [
			{
				params: {
					status: 'active',
					officeType: 'headOffice',
				},
			},
		];
		statusofficeTypetestCases.forEach(async (testCase) => {
			it('FI company search with status and officeType', async () => {
				const queryString = `?countries=FI&status=${testCase.params.status}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI officeType searches', () => {
		const officeTypetestCases = ['active'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`FI company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=FI&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('FI synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'CREDITVISOR osakeyhtiö',
				},
				expected: {
					name: 'CREDITVISOR OY',
				},
			},
			{
				params: {
					name: 'toiminimi SYSTEM FINLAND OY',
				},
				expected: {
					name: 'TM SYSTEM FINLAND OY',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`AU company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=FI&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const addresssynonymtestCases = [
			{
				params: {
					name: 'HAIKONEN PAAVO JOHANNES',
					city: 'KAUHAJOKI asema',
				},
				expected: {
					city: 'KAUHAJOKI AS',
				},
			},
		];
		addresssynonymtestCases.forEach(async (testCase) => {
			it(`AU company search with addresssynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=FI&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.expected.city.toLowerCase()}`), true);
			});
		});
	});
});
