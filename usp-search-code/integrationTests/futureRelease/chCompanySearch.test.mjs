import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('CH Regression tests', async () => {
	describe('CH id searches', () => {
		const idtestCases = ['CH-X-8130421', 'CH-X-5204327'];
		idtestCases.forEach(async (testCase) => {
			it(`CH company search with id:${testCase}`, async () => {
				const queryString = `?countries=CH&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					safeNo: 'CH02466089',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('CH company search with id and safeNo', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					regNo: 'CHE213487925',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('CH company search with id and regNo', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					city: 'ZÜRICH',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('CH company search with id and city', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					postCode: '8004',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('CH company search with id and postCode', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					province: 'ZH',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('CH company search with id and province', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with id and simpleValue', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('CH company search with id and street', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					name: 'CREDIT EXCHANGE AG',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('CH company search with id and name', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					officeType: 'CREDIT EXCHANGE AG',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with id and officeType', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'CH-X-8130421',
					status: 'CREDIT EXCHANGE AG',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('CH company search with id and status', async () => {
				const queryString = `?countries=CH&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH safeNo searches', () => {
		const safeNotestCases = ['CH02466089', 'CH01501447'];
		safeNotestCases.forEach(async (testCase) => {
			it(`CH company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=CH&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					regNo: 'CHE213487925',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and regNo', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					city: 'ZÜRICH',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and city', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					postCode: '8004',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and postCode', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					province: 'ZH',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and province', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and street', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					name: 'CREDIT EXCHANGE AG',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and name', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					officeType: 'CREDIT EXCHANGE AG',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and officeType', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'CH02466089',
					status: 'CREDIT EXCHANGE AG',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('CH company search with safeNo and status', async () => {
				const queryString = `?countries=CH&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH regNo searches', () => {
		const regNotestCases = ['CHE213487925', 'CHE112483410'];
		regNotestCases.forEach(async (testCase) => {
			it(`CH company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=CH&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					city: 'ZÜRICH',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('CH company search with regNo and city', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					postCode: '8004',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('CH company search with regNo and postCode', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					province: 'ZH',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('CH company search with regNo and province', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with regNo and simpleValue', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('CH company search with regNo and street', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					name: 'CREDIT EXCHANGE AG',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('CH company search with regNo and name', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					officeType: 'CREDIT EXCHANGE AG',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with regNo and officeType', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: 'CHE213487925',
					status: 'CREDIT EXCHANGE AG',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('CH company search with regNo and status', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH city searches', () => {
		const citytestCases = ['ZÜRICH'];
		citytestCases.forEach(async (testCase) => {
			it(`CH company search with city:${testCase}`, async () => {
				const queryString = `?countries=CH&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'ZÜRICH',
					postCode: '8004',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it('CH company search with city and postCode', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'ZÜRICH',
					province: 'ZH',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it('CH company search with city and province', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'ZÜRICH',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with city and simpleValue', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'ZÜRICH',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it('CH company search with city and street', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'ZÜRICH',
					name: 'CREDIT EXCHANGE AG',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					city: 'KLOTEN',
					name: 'INFOSYS CONSULTING HOLDING AG',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it('CH company search with city and name', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'ZÜRICH',
					officeType: 'headoffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with city and officeType', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'ZÜRICH',
					status: 'active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it('CH company search with city and status', async () => {
				const queryString = `?countries=CH&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH postCode searches', () => {
		const postCodetestCases = ['8004'];
		postCodetestCases.forEach(async (testCase) => {
			it(`CH company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=CH&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '8004',
					province: 'ZH',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it('CH company search with postCode and province', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '8004',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with postCode and simpleValue', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '8004',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it('CH company search with postCode and street', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '8004',
					name: 'CREDIT EXCHANGE AG',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					postCode: '8302',
					name: 'INFOSYS CONSULTING HOLDING AG',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it('CH company search with postCode and name', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '8004',
					officeType: 'headoffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with postCode and officeType', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '8004',
					status: 'active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it('CH company search with postCode and status', async () => {
				const queryString = `?countries=CH&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH province searches', () => {
		const provincetestCases = ['ZH'];
		provincetestCases.forEach(async (testCase) => {
			it(`CH company search with province:${testCase}`, async () => {
				const queryString = `?countries=CH&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'ZH',
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it('CH company search with province and simpleValue', async () => {
				const queryString = `?countries=CH&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'ZH',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it('CH company search with province and street', async () => {
				const queryString = `?countries=CH&province=${testCase.params.province}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'ZH',
					name: 'CREDIT EXCHANGE AG',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					province: 'ZH',
					name: 'INFOSYS CONSULTING HOLDING AG',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it('CH company search with province and name', async () => {
				const queryString = `?countries=CH&province=${testCase.params.province}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'ZH',
					officeType: 'headoffice',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with province and officeType', async () => {
				const queryString = `?countries=CH&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'ZH',
					status: 'active',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it('CH company search with province and status', async () => {
				const queryString = `?countries=CH&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH simpleValue searches', () => {
		const simpleValuetestCases = ['BADENERSTRASSE 60, ZÜRICH, 8004'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`CH company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=CH&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
					street: 'BADENERSTRASSE 60',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it('CH company search with simpleValue and street', async () => {
				const queryString = `?countries=CH&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
					name: 'CREDIT EXCHANGE AG',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					simpleValue: 'OBSTGARTENSTRASSE 27, KLOTEN, 8302',
					name: 'INFOSYS CONSULTING HOLDING AG',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it('CH company search with simpleValue and name', async () => {
				const queryString = `?countries=CH&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
					officeType: 'headoffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with simpleValue and officeType', async () => {
				const queryString = `?countries=CH&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'BADENERSTRASSE 60, ZÜRICH, 8004',
					status: 'active',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it('CH company search with simpleValue and status', async () => {
				const queryString = `?countries=CH&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH street searches', () => {
		const streettestCases = ['BADENERSTRASSE 60'];
		streettestCases.forEach(async (testCase) => {
			it(`CH company search with street:${testCase}`, async () => {
				const queryString = `?countries=CH&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'BADENERSTRASSE 60',
					name: 'CREDIT EXCHANGE AG',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					street: 'OBSTGARTENSTRASSE 27',
					name: 'INFOSYS CONSULTING HOLDING AG',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it('CH company search with street and name', async () => {
				const queryString = `?countries=CH&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'BADENERSTRASSE 60',
					officeType: 'headoffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with street and officeType', async () => {
				const queryString = `?countries=CH&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'BADENERSTRASSE 60',
					status: 'active',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it('CH company search with street and status', async () => {
				const queryString = `?countries=CH&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH name searches', () => {
		const nametestCases = ['CREDIT EXCHANGE AG', 'INFOSYS CONSULTING HOLDING AG'];
		nametestCases.forEach(async (testCase) => {
			it(`CH company search with name:${testCase}`, async () => {
				const queryString = `?countries=CH&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'CREDIT EXCHANGE AG',
					officeType: 'headoffice',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					name: 'INFOSYS CONSULTING HOLDING AG',
					officeType: 'headoffice',
				},
				expected: {
					safeNo: 'CH01501447',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it('CH company search with name and officeType', async () => {
				const queryString = `?countries=CH&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'CREDIT EXCHANGE AG',
					status: 'active',
				},
				expected: {
					safeNo: 'CH02466089',
				},
			},
			{
				params: {
					name: 'ZWIMPFER INFOSYS',
					status: 'nonactive',
				},
				expected: {
					safeNo: 'CH01341629',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it('CH company search with name and status', async () => {
				const queryString = `?countries=CH&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('CH status searches', () => {
		const statustestCases = ['headOffice'];
		statustestCases.forEach(async (testCase) => {
			it(`CH company search with status:${testCase}`, async () => {
				const queryString = `?countries=CH&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CH partial regNo searches', () => {
		const partialregNotestCases = [
			{
				params: {
					regNo: 'CHE-106-832-407',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
			{
				params: {
					regNo: 'CH.106.832.407',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
			{
				params: {
					regNo: '106 832 407',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
			{
				params: {
					regNo: 'CHE/106/832/407',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
			{
				params: {
					regNo: 'CH-106.832/407',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
			{
				params: {
					regNo: '106832407 HR/MWST',
				},
				expected: {
					regNo: 'CHE106832407',
				},
			},
		];
		partialregNotestCases.forEach(async (testCase) => {
			it('CH company search with partialregNo', async () => {
				const queryString = `?countries=CH&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.expected.regNo}`), true);
			});
		});
	});
});
