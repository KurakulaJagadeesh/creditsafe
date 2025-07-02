import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('LI Regression tests', async () => {
	describe('LI id searches', () => {
		const idtestCases = ['LI-X-6082413', 'LI-X-7926493'];
		idtestCases.forEach(async (testCase) => {
			it(`LI company search with id:${testCase}`, async () => {
				const queryString = `?countries=LI&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					safeNo: 'BR0106713195',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('LI company search with id and safeNo', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					city: 'VADUZ',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('LI company search with id and city', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					postCode: '9490',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('LI company search with id and postCode', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('LI company search with id and simpleValue', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('LI company search with id and street', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('LI company search with id and name', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with id and officeType', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'LI-X-6082413',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('LI company search with id and status', async () => {
				const queryString = `?countries=LI&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI safeNo searches', () => {
		const safeNotestCases = ['LI02144212', 'LI02425415'];
		safeNotestCases.forEach(async (testCase) => {
			it(`LI company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=LI&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					city: 'VADUZ',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and city', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					postCode: '9490',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and postCode', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and street', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and name', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and officeType', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'LI02144212',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('LI company search with safeNo and status', async () => {
				const queryString = `?countries=LI&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI city searches', () => {
		const citytestCases = ['VADUZ'];
		citytestCases.forEach(async (testCase) => {
			it(`LI company search with city:${testCase}`, async () => {
				const queryString = `?countries=LI&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'VADUZ',
					postCode: '9490',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it('LI company search with city and postCode', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'VADUZ',
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('LI company search with city and simpleValue', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'VADUZ',
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it('LI company search with city and street', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'VADUZ',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
				expected: {
					safeNo: 'LI02144212',
				},
			},
			{
				params: {
					city: 'TRIESEN',
					name: 'IHG CLEANING GMBH',
				},
				expected: {
					safeNo: 'LI02425415',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it('LI company search with city and name', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'VADUZ',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with city and officeType', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'VADUZ',
					status: 'active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it('LI company search with city and status', async () => {
				const queryString = `?countries=LI&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI postCode searches', () => {
		const postCodetestCases = ['9490'];
		postCodetestCases.forEach(async (testCase) => {
			it(`LI company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=LI&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '9490',
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('LI company search with postCode and simpleValue', async () => {
				const queryString = `?countries=LI&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '9490',
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it('LI company search with postCode and street', async () => {
				const queryString = `?countries=LI&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '9490',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
				expected: {
					safeNo: 'LI02144212',
				},
			},
			{
				params: {
					postCode: '9495',
					name: 'IHG CLEANING GMBH',
				},
				expected: {
					safeNo: 'LI02425415',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it('LI company search with postCode and name', async () => {
				const queryString = `?countries=LI&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '9490',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with postCode and officeType', async () => {
				const queryString = `?countries=LI&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '9490',
					status: 'active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it('LI company search with postCode and status', async () => {
				const queryString = `?countries=LI&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI simpleValue searches', () => {
		const simpleValuetestCases = ['C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`LI company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=LI&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it('LI company search with simpleValue and street', async () => {
				const queryString = `?countries=LI&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
				expected: {
					safeNo: 'LI02144212',
				},
			},
			{
				params: {
					simpleValue: 'INDUSTRIESTRASSE 32, 9495, TRIESEN',
					name: 'IHG CLEANING GMBH',
				},
				expected: {
					safeNo: 'LI02425415',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it('LI company search with simpleValue and name', async () => {
				const queryString = `?countries=LI&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with simpleValue and officeType', async () => {
				const queryString = `?countries=LI&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13, 9490, VADUZ',
					status: 'active',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it('LI company search with simpleValue and status', async () => {
				const queryString = `?countries=LI&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI street searches', () => {
		const streettestCases = ['C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13'];
		streettestCases.forEach(async (testCase) => {
			it(`LI company search with street:${testCase}`, async () => {
				const queryString = `?countries=LI&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
					name: 'COMMERCIAL AND CREDIT LIMITED',
				},
				expected: {
					safeNo: 'LI02144212',
				},
			},
			{
				params: {
					street: 'INDUSTRIESTRASSE 32',
					name: 'IHG CLEANING GMBH',
				},
				expected: {
					safeNo: 'LI02425415',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it('LI company search with street and name', async () => {
				const queryString = `?countries=LI&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with street and officeType', async () => {
				const queryString = `?countries=LI&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'C/O AUDAX CONSULTING TRUST ESTABLISHMENT, RÄTIKONSTRASSE 13',
					status: 'active',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it('LI company search with street and status', async () => {
				const queryString = `?countries=LI&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI name searches', () => {
		const nametestCases = ['COMMERCIAL AND CREDIT LIMITED', 'IHG CLEANING GMBH'];
		nametestCases.forEach(async (testCase) => {
			it(`LI company search with name:${testCase}`, async () => {
				const queryString = `?countries=LI&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'COMMERCIAL AND CREDIT LIMITED',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it('LI company search with name and officeType', async () => {
				const queryString = `?countries=LI&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'COMMERCIAL AND CREDIT LIMITED',
					status: 'Active',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it('LI company search with name and status', async () => {
				const queryString = `?countries=LI&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('LI officeType searches', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`LI company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=LI&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const officeTypestatustestCases = [
			{
				params: {
					officeType: 'headOffice',
					status: 'active',
				},
			},
		];
		officeTypestatustestCases.forEach(async (testCase) => {
			it(`LI company search with officeType:${testCase.params.officeType} and status:${testCase.params.status}`, async () => {
				const queryString = `?countries=LI&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('LI status searches', () => {
		const statustestCases = ['headOffice'];
		statustestCases.forEach(async (testCase) => {
			it(`LI company search with status:${testCase}`, async () => {
				const queryString = `?countries=LI&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});
});
