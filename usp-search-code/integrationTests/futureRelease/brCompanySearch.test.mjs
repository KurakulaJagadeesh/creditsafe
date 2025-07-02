import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('BR Regression tests', async () => {
	describe('BR id searches', () => {
		const idtestCases = ['BR-X-11583582000100', 'BR-X-10990100000166'];
		idtestCases.forEach(async (testCase) => {
			it(`BR company search with id:${testCase}`, async () => {
				const queryString = `?countries=BR&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					safeNo: 'BR0106713195',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('BR company search with id and safeNo', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					regNo: '11583582000100',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('BR company search with id and regNo', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					city: 'CAMPINAS',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('BR company search with id and city', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					postCode: '13025270',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('BR company search with id and postCode', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					province: 'SP',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('BR company search with id and province', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with id and simpleValue', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('BR company search with id and street', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					name: 'CREDIT STORE',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('BR company search with id and name', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'BR-X-11583582000100',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with id and officeType', async () => {
				const queryString = `?countries=BR&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR safeNo searches', () => {
		const safeNotestCases = ['BR0106713195', 'BR0106625239'];
		safeNotestCases.forEach(async (testCase) => {
			it(`BR company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=BR&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoinvalidtestCases = ['BR0106713', 'BR01066252390', 'BR 0106713'];
		safeNoinvalidtestCases.forEach(async (testCase) => {
			it(`BR company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=BR&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					regNo: '11583582000100',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and regNo', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					city: 'CAMPINAS',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and city', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					postCode: '13025270',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and postCode', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					province: 'SP',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and province', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and street', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					name: 'CREDIT STORE',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and name', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'BR0106713195',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with safeNo and officeType', async () => {
				const queryString = `?countries=BR&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR regNo searches', () => {
		const regNotestCases = ['11583582000100', '10990100000166'];
		regNotestCases.forEach(async (testCase) => {
			it(`BR company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=BR&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '11583582000100',
					city: 'CAMPINAS',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('BR company search with regNo and city', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '11583582000100',
					postCode: '13025270',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('BR company search with regNo and postCode', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '11583582000100',
					province: 'SP',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('BR company search with regNo and province', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '11583582000100',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with regNo and simpleValue', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '11583582000100',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('BR company search with regNo and street', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '11583582000100',
					name: 'CREDIT STORE',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('BR company search with regNo and name', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '11583582000100',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with regNo and officeType', async () => {
				const queryString = `?countries=BR&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR city searches', () => {
		const citytestCases = ['CAMPINAS'];
		citytestCases.forEach(async (testCase) => {
			it(`BR company search with city:${testCase}`, async () => {
				const queryString = `?countries=BR&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'CAMPINAS',
					postCode: '13025270',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it('BR company search with city and postCode', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'CAMPINAS',
					province: 'SP',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it('BR company search with city and province', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'CAMPINAS',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with city and simpleValue', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'CAMPINAS',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it('BR company search with city and street', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'CAMPINAS',
					name: 'CREDIT STORE',
				},
				expected: {
					safeNo: 'BR0106713195',
				},
			},
			{
				params: {
					city: 'EXTERIOR',
					name: 'INFOSYS LIMITED',
				},
				expected: {
					safeNo: 'BR0106625239',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it('BR company search with city and name', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'CAMPINAS',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with city and officeType', async () => {
				const queryString = `?countries=BR&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR postCode searches', () => {
		const postCodetestCases = ['13025270'];
		postCodetestCases.forEach(async (testCase) => {
			it(`BR company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=BR&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '13025270',
					province: 'SP',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it('BR company search with postCode and province', async () => {
				const queryString = `?countries=BR&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '13025270',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with postCode and simpleValue', async () => {
				const queryString = `?countries=BR&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '13025270',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it('BR company search with postCode and street', async () => {
				const queryString = `?countries=BR&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '13025270',
					name: 'CREDIT STORE',
				},
				expected: {
					safeNo: 'BR0106713195',
				},
			},
			{
				params: {
					postCode: '00000000',
					name: 'INFOSYS LIMITED',
				},
				expected: {
					safeNo: 'BR0106625239',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it('BR company search with postCode and name', async () => {
				const queryString = `?countries=BR&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '13025270',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with postCode and officeType', async () => {
				const queryString = `?countries=BR&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR province searches', () => {
		const provincetestCases = ['SP'];
		provincetestCases.forEach(async (testCase) => {
			it(`BR company search with province:${testCase}`, async () => {
				const queryString = `?countries=BR&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'SP',
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it('BR company search with province and simpleValue', async () => {
				const queryString = `?countries=BR&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'SP',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it('BR company search with province and street', async () => {
				const queryString = `?countries=BR&province=${testCase.params.province}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'SP',
					name: 'CREDIT STORE',
				},
				expected: {
					safeNo: 'BR0106713195',
				},
			},
			{
				params: {
					province: 'EX',
					name: 'INFOSYS LIMITED',
				},
				expected: {
					safeNo: 'BR0106625239',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`BR company search with province:${testCase.params.province} and name:${testCase.params.name}`, async () => {
				const queryString = `?countries=BR&province=${testCase.params.province}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'SP',
					officeType: 'headOffice',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with province and officeType', async () => {
				const queryString = `?countries=BR&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR simpleValue searches', () => {
		const simpleValuetestCases = ['RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`BR company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=BR&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it('BR company search with simpleValue and street', async () => {
				const queryString = `?countries=BR&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINAS',
					name: 'CREDIT STORE',
				},
				expected: {
					safeNo: 'BR0106713195',
				},
			},
			{
				params: {
					simpleValue: 'ELETRONICS CITY, HOUSE ROAD, S/N, 00000000, EXTERIOR',
					name: 'INFOSYS LIMITED',
				},
				expected: {
					safeNo: 'BR0106625239',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it('BR company search with simpleValue and name', async () => {
				const queryString = `?countries=BR&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'SRUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207, CAMBUI, 13025270, CAMPINASP',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with simpleValue and officeType', async () => {
				const queryString = `?countries=BR&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR street searches', () => {
		const streettestCases = ['RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207'];
		streettestCases.forEach(async (testCase) => {
			it(`BR company search with street:${testCase}`, async () => {
				const queryString = `?countries=BR&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'RUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
					name: 'CREDIT STORE',
				},
				expected: {
					safeNo: 'BR0106713195',
				},
			},
			{
				params: {
					street: 'ELETRONICS CITY, HOUSE ROAD, S/N',
					name: 'INFOSYS LIMITED',
				},
				expected: {
					safeNo: 'BR0106625239',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it('BR company search with street and name', async () => {
				const queryString = `?countries=BR&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'SRUA COMENDADOR TORLOGO DAUNTRE, 74 -SALA 1207',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with street and officeType', async () => {
				const queryString = `?countries=BR&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR name searches', () => {
		const nametestCases = ['CREDIT STORE', 'INFOSYS LIMITED'];
		nametestCases.forEach(async (testCase) => {
			it(`BR company search with name:${testCase}`, async () => {
				const queryString = `?countries=BR&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'CREDIT STORE',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it('BR company search with name and officeType', async () => {
				const queryString = `?countries=BR&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('BR officeType searches', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`BR company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=BR&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BR synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'sociedade limitada DECORACOES LTDA',
				},
				expected: {
					name: 'LTDA DECORACOES LTDA',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`BR company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=BR&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const addresssynonymtestCases = [
			{
				params: {
					simpleValue: 'R AMERICO GUAZELLI, 112 -SALA 2, SILVEIRA, 09195400, SANTO ANDRE',
					name: 'MARCIO FERNANDO RIBEIRO 33456387890',
				},
				expected: {
					safeNo: 'BR0110835549',
				},
			},
			{
				params: {
					simpleValue: 'AV EDGAR PIRES DE CASTRO, 1320, HIPICA, 91788000, PORTO ALEGRE',
					name: 'LEONEL VELOSO ROMERO 86233041015',
				},
				expected: {
					safeNo: 'BR0110835563',
				},
			},
		];
		addresssynonymtestCases.forEach(async (testCase) => {
			it(`BR company search with addresssynonym: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=BR&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});
});
