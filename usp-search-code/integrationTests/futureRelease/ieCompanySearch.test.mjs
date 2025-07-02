import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('IE Regression tests', async () => {
	describe('IE id searches', () => {
		const idtestCases = ['IE-0-IE441750', 'IE-0-IE512080', 'IE-0-IE001674'];
		idtestCases.forEach(async (testCase) => {
			it(`IE company search with id:${testCase}`, async () => {
				const queryString = `?countries=IE&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					safeNo: 'IE00433394',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('IE company search with id and safeNo', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					regNo: 'IE441750',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('IE company search with id and regNo', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					vatNo: 'IE9662565A',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('IE company search with id and vatNo', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('IE company search with id and city', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					postCode: 'D12Y4C0',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('IE company search with id and postCode', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('IE company search with id and simpleValue', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					street: 'UNIT 1H',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('IE company search with id and street', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcountytestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					county: 'Dublin',
				},
			},
		];
		idcountytestCases.forEach(async (testCase) => {
			it('IE company search with id and county', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&county=${testCase.params.county}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idexacttestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					exact: 'true',
				},
			},
		];
		idexacttestCases.forEach(async (testCase) => {
			it('IE company search with id and exact', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 200);

				assert.equal(response.status, 200);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('IE company search with id and name', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					phoneNo: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		idphoneNotestCases.forEach(async (testCase) => {
			it('IE company search with id and phoneNo', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('IE company search with id and status', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtypetestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					type: 'Ltd',
				},
			},
		];
		idtypetestCases.forEach(async (testCase) => {
			it('IE company search with id and type', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const idwebsitetestCases = [
			{
				params: {
					id: 'IE-0-IE441750',
					website: 'www.creditsafe.ie',
				},
			},
		];
		idwebsitetestCases.forEach(async (testCase) => {
			it('IE company search with id and website', async () => {
				const queryString = `?countries=IE&id=${testCase.params.id}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE safeNo searches', () => {
		const safeNotestCases = ['IE00433394', 'IE00510368', 'IE00000132'];
		safeNotestCases.forEach(async (testCase) => {
			it(`IE company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=IE&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					regNo: 'IE441750',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and regNo', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					vatNo: 'IE9662565A',
				},
			},
		];
		safeNovatNotestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and vatNo', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and city', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					postCode: 'D12Y4C0',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and postCode', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					street: 'UNIT 1H',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and street', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocountytestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					county: 'Dublin',
				},
			},
		];
		safeNocountytestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and county', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&county=${testCase.params.county}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoexacttestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					exact: 'true',
				},
			},
		];
		safeNoexacttestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and exact', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 200);

				assert.equal(response.status, 200);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and name', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					phoneNo: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		safeNophoneNotestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and status', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotypetestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and type', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
		const safeNowebsitetestCases = [
			{
				params: {
					safeNo: 'IE00433394',
					website: 'www.creditsafe.ie',
				},
			},
		];
		safeNowebsitetestCases.forEach(async (testCase) => {
			it('IE company search with safeNo and website', async () => {
				const queryString = `?countries=IE&safeNo=${testCase.params.safeNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidsafeNotestCases = ['IE0043339', 'IE005103681', 'IE 0000013'];
		invalidsafeNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid safeNo:${testCase}`, async () => {
				const queryString = `?countries=IE&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
	});

	describe('IE regNo searches', () => {
		const regNotestCases = ['IE441750', 'IE512080', 'IE001674'];
		regNotestCases.forEach(async (testCase) => {
			it(`IE company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=IE&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: 'IE441750',
					vatNo: 'IE9662565A',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('IE company search with regNo and vatNo', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: 'IE441750',
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('IE company search with regNo and city', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: 'IE441750',
					postCode: 'D12Y4C0',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('IE company search with regNo and postCode', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: 'IE441750',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('IE company search with regNo and simpleValue', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: 'IE441750',
					street: 'UNIT 1H',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('IE company search with regNo and street', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocountytestCases = [
			{
				params: {
					regNo: 'IE441750',
					county: 'Dublin',
				},
			},
		];
		regNocountytestCases.forEach(async (testCase) => {
			it('IE company search with regNo and county', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&county=${testCase.params.county}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoexacttestCases = [
			{
				params: {
					regNo: 'IE441750',
					exact: 'true',
				},
			},
		];
		regNoexacttestCases.forEach(async (testCase) => {
			it('IE company search with regNo and exact', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 200);

				assert.equal(response.status, 200);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: 'IE441750',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('IE company search with regNo and name', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCases = [
			{
				params: {
					regNo: 'IE441750',
					phoneNo: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		regNophoneNotestCases.forEach(async (testCase) => {
			it('IE company search with regNo and phoneNo', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: 'IE441750',
					status: 'Active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('IE company search with regNo and status', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotypetestCases = [
			{
				params: {
					regNo: 'IE441750',
					type: 'Ltd',
				},
			},
		];
		regNotypetestCases.forEach(async (testCase) => {
			it('IE company search with regNo and type', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
		const regNowebsitetestCases = [
			{
				params: {
					regNo: 'IE441750',
					website: 'www.creditsafe.ie',
				},
			},
		];
		regNowebsitetestCases.forEach(async (testCase) => {
			it('IE company search with regNo and website', async () => {
				const queryString = `?countries=IE&regNo=${testCase.params.regNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidregNotestCases = ['I', 'IE4417501'];
		invalidregNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid regNo:${testCase}`, async () => {
				const queryString = `?countries=IE&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE vatNo searches', () => {
		const vatNotestCases = ['IE9662565A', 'IE9825613N'];
		vatNotestCases.forEach(async (testCase) => {
			it(`IE company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=IE&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and city', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					postCode: 'D12Y4C0',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and postCode', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
			},
		];
		vatNosimpleValuetestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					street: 'UNIT 1H',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and street', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocountytestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					county: 'Dublin',
				},
			},
		];
		vatNocountytestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and county', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&county=${testCase.params.county}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoexacttestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					exact: 'true',
				},
			},
		];
		vatNoexacttestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and exact', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 200);

				assert.equal(response.status, 200);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and name', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					phoneNo: 'CREDITSAFE IRELAND LIMITED',
				},
			},
		];
		vatNophoneNotestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					status: 'Active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and status', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNotypetestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					type: 'Ltd',
				},
			},
		];
		vatNotypetestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and type', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
		const vatNowebsitetestCases = [
			{
				params: {
					vatNo: 'IE9662565A',
					website: 'www.creditsafe.ie',
				},
			},
		];
		vatNowebsitetestCases.forEach(async (testCase) => {
			it('IE company search with vatNo and website', async () => {
				const queryString = `?countries=IE&vatNo=${testCase.params.vatNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidvatNotestCases = ['IE9662565', 'IE9662565A11'];
		invalidvatNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid vatNo:${testCase}`, async () => {
				const queryString = `?countries=IE&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE city', () => {
		const citytestCase = ['THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD', 'DUBLIN 2DUBLIN'];
		citytestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase}`, async () => {
				const querystring = `?countries=IE&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					postCode: 'D12Y4C0',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					postCode: 'D02R296',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00441225',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					simpleValue: 'TWO PARK PLACE, HATCH STREET, DUBLIN 2DUBLIN, DUBLIN, DUBLIN 2',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					street: 'UNIT 1H',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
			});
		});
		const citycountytestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					county: 'Dublin',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					county: 'DUBLIN',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		citycountytestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and county: ${testCase.params.county}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&county=${testCase.params.county}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityexacttestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					exact: 'true',
				},
			},
		];
		cityexacttestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
			});
		});
		const cityIncludepreviousNametestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					includepreviousName: 'UNIT 1H',
				},
			},
		];
		cityIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					phoneNo: '+35312438500',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00559645',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citytypetestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		citytypetestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citywebsitetestCase = [
			{
				params: {
					city: 'THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD',
					website: 'www.creditsafe.ie',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					city: 'DUBLIN 2DUBLIN',
					website: 'www.ml.com',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		citywebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with city: ${testCase.params.city} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&city=${testCase.params.city}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('IE postCode', () => {
		const postCodetestCase = ['D12Y4C0', 'D02R296'];
		postCodetestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		postCodesimpleValuetestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCase = [
			{
				params: {
					postCode: 'D02R296',
					street: '70',
				},
			},
		];
		postCodestreettestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const postCodecountytestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					county: 'Dublin',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					postCode: 'D02R296',
					county: 'DUBLIN',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00250928',
				},
			},
		];
		postCodecountytestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and county: ${testCase.params.county}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&county=${testCase.params.county}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeexacttestCase = [
			{
				params: {
					postCode: 'D02R296',
					exact: 'true',
				},
			},
		];
		postCodeexacttestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const postCodeIncludepreviousNametestCase = [
			{
				params: {
					postCode: 'D02R296',
					includepreviousName: 'true',
				},
			},
		];
		postCodeIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const postCodenametestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					postCode: 'D02R296',
					name: 'GOOGLE COMMERCE LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00510368',
				},
			},
		];
		postCodenametestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCase = [
			{
				params: {
					postCode: 'DUBLIN 2',
					phoneNo: '+35312438500',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		postCodephoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					postCode: 'D02R296',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00403401',
				},
			},
		];
		postCodestatustestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodetypetestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					postCode: 'D02R296',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01001146',
				},
			},
		];
		postCodetypetestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodewebsitetestCase = [
			{
				params: {
					postCode: 'D12Y4C0',
					website: 'www.creditsafe.ie',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					postCode: 'DUBLIN 2',
					website: 'www.ml.com',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		postCodewebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with postCode: ${testCase.params.postCode} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&postCode=${testCase.params.postCode}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const invalidpostCodetestCases = ['5'];
		invalidpostCodetestCases.forEach(async (testCase) => {
			it(`IE company search with invalid postCode:${testCase}`, async () => {
				const queryString = `?countries=IE&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE simpleValue', () => {
		const simpleValuetestCase = ['UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0', '70, SIR JOHN ROGERSONS QUAY, DUBLIN 2,DUBLIN, DUBLIN, DUBLIN 2'];
		simpleValuetestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCase = [
			{
				params: {
					simpleValue: '70, SIR JOHN ROGERSONS QUAY, DUBLIN 2,DUBLIN, DUBLIN, DUBLIN 2',
					street: '70',
				},
				expected: {
					safeNo: 'IE01236145',
				},
			},
		];
		simpleValuestreettestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValuecountytestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					county: 'Dublin',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		simpleValuecountytestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and county: ${testCase.params.county}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&county=${testCase.params.county}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueexacttestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					exact: 'true',
				},
			},
		];
		simpleValueexacttestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const simpleValueIncludepreviousNametestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					includepreviousName: 'true',
				},
			},
		];
		simpleValueIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const simpleValuenametestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		simpleValuenametestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCase = [
			{
				params: {
					simpleValue: 'TWO PARK PLACE, HATCH STREET, DUBLIN 2DUBLIN, DUBLIN, DUBLIN 2',
					phoneNo: '+35312438500',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		simpleValuephoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		simpleValuestatustestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetypetestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		simpleValuetypetestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuewebsitetestCase = [
			{
				params: {
					simpleValue: 'UNIT 1H, BLOCK 71, THE PLAZA PARKWEST FACILITIES COMPLEX NANGOR ROAD, DUBLIN, D12Y4C0',
					website: 'www.creditsafe.ie',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		simpleValuewebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with simpleValue: ${testCase.params.simpleValue} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&simpleValue=${testCase.params.simpleValue}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const invalidsimpleValuetestCases = ['I'];
		invalidsimpleValuetestCases.forEach(async (testCase) => {
			it(`IE company search with invalid simpleValue:${testCase}`, async () => {
				const queryString = `?countries=IE&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE street', () => {
		const streettestCase = ['70'];
		streettestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase}`, async () => {
				const querystring = `?countries=IE&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streetcountytestCase = [
			{
				params: {
					street: '70',
					county: 'Dublin',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01219442',
				},
			},
		];
		streetcountytestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and county: ${testCase.params.county}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&county=${testCase.params.county}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetexacttestCase = [
			{
				params: {
					street: '70',
					exact: 'true',
				},
			},
		];
		streetexacttestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const streetIncludepreviousNametestCase = [
			{
				params: {
					street: '70',
					includepreviousName: 'true',
				},
			},
		];
		streetIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const streetnametestCase = [
			{
				params: {
					street: '70',
					name: 'AMERICAN EXPRESS EUROPE S.A. (IRELAND BRANCH)',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01219442',
				},
			},
		];
		streetnametestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCase = [
			{
				params: {
					street: '70',
					phoneNo: '+35312438500',
				},
			},
		];
		streetphoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
			});
		});
		const streetstatustestCase = [
			{
				params: {
					street: '70',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01219442',
				},
			},
		];
		streetstatustestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettypetestCase = [
			{
				params: {
					street: '70',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01219442',
				},
			},
		];
		streettypetestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetwebsitetestCase = [
			{
				params: {
					street: '70',
					website: 'www.creditsafe.ie',
				},
			},
		];
		streetwebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with street: ${testCase.params.street} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&street=${testCase.params.street}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
			});
		});
	});

	describe('IE county', () => {
		const countytestCase = ['DUBLIN', 'WEXFORD'];
		countytestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase}`, async () => {
				const querystring = `?countries=IE&county=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.county === `${testCase}`), true);
			});
		});
		const countyexacttestCase = [
			{
				params: {
					county: 'DUBLIN',
					exact: 'true',
				},
			},
		];
		countyexacttestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const countyIncludepreviousNametestCase = [
			{
				params: {
					county: 'DUBLIN',
					includepreviousName: 'true',
				},
			},
		];
		countyIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const countynametestCase = [
			{
				params: {
					county: 'DUBLIN',
					name: 'CREDITSAFE IRELAND LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					county: 'WEXFORD',
					name: 'LAKE REGION MEDICAL LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00185429',
				},
			},
		];
		countynametestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const countyphoneNotestCase = [
			{
				params: {
					county: 'DUBLIN',
					phoneNo: '+35312438500',
				},
				expected: {
					safeNo: 'IE00223297',
				},
			},
			{
				params: {
					county: 'WEXFORD',
					phoneNo: '+3535437111',
				},
				expected: {
					safeNo: 'IE00244942',
				},
			},
		];
		countyphoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const countystatustestCase = [
			{
				params: {
					county: 'DUBLIN',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00463311',
				},
			},
			{
				params: {
					county: 'WEXFORD',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00366986',
				},
			},
		];
		countystatustestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const countytypetestCase = [
			{
				params: {
					county: 'DUBLIN',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00463311',
				},
			},
		];
		countytypetestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const countywebsitetestCase = [
			{
				params: {
					county: 'DUBLIN',
					website: 'www.creditsafe.ie',
				},
				expected: {
					safeNo: 'IE00433394',
				},
			},
			{
				params: {
					county: 'WEXFORD',
					website: 'www.waters.com',
				},
				expected: {
					safeNo: 'IE00397238',
				},
			},
		];
		countywebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with county: ${testCase.params.county} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&county=${testCase.params.county}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('IE name', () => {
		const nametestCase = ['CREDITSAFE IRELAND LIMITED', 'GOOGLE COMMERCE LIMITED'];
		nametestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase}`, async () => {
				const querystring = `?countries=IE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const nameexacttestCase = [
			{
				params: {
					name: 'CREDITSAFE IRELAND LIMITED',
					exact: 'true',
				},
			},
		];
		nameexacttestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const nameIncludepreviousNametestCase = [
			{
				params: {
					name: 'CREDITSAFE IRELAND LIMITED',
					includepreviousName: 'true',
				},
			},
		];
		nameIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const namephoneNotestCase = [
			{
				params: {
					name: 'BANK OF AMERICA EUROPE DESIGNATED ACTIVITY COMPANY',
					phoneNo: '+35312438500',
				},
				expected: {
					safeNo: 'IE00223297',
				},
			},
			{
				params: {
					name: 'CLEARSTREAM TECHNOLOGIES LIMITED',
					phoneNo: '+3535437111',
				},
				expected: {
					safeNo: 'IE00244942',
				},
			},
		];
		namephoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namestatustestCase = [
			{
				params: {
					name: 'CREDITSAFE IRELAND LIMITED',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
			{
				params: {
					name: 'JOHN BROWNE',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IE01144576',
				},
			},
		];
		namestatustestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametypetestCase = [
			{
				params: {
					name: 'CREDITSAFE IRELAND LIMITED',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00433394',
				},
			},
		];
		nametypetestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namewebsitetestCase = [
			{
				params: {
					name: 'CREDITSAFE IRELAND LIMITED',
					website: 'www.creditsafe.ie',
				},
				expected: {
					safeNo: 'IE00433394',
				},
			},
			{
				params: {
					name: 'WATERS CELTIC HOLDINGS LIMITED',
					website: 'www.waters.com',
				},
				expected: {
					safeNo: 'IE00397238',
				},
			},
		];
		namewebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with name: ${testCase.params.name} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&name=${testCase.params.name}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('IE phoneNo', () => {
		const phoneNotestCase = ['016161300', '+35312438500'];
		phoneNotestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNoexacttestCase = [
			{
				params: {
					phoneNo: '016161300',
					exact: 'true',
				},
			},
		];
		phoneNoexacttestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase.params.phoneNo} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const phoneNoIncludepreviousNametestCase = [
			{
				params: {
					phoneNo: '016161300',
					includepreviousName: 'true',
				},
			},
		];
		phoneNoIncludepreviousNametestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase.params.phoneNo} and includepreviousName: ${testCase.params.IncludepreviousName}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase.params.phoneNo}&includepreviousName=${testCase.params.includepreviousName}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
		const phoneNostatustestCase = [
			{
				params: {
					phoneNo: '016161300',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00000132',
				},
			},
			{
				params: {
					phoneNo: '+35312438500',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		phoneNostatustestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const phoneNotypetestCase = [
			{
				params: {
					phoneNo: '016161300',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00000132',
				},
			},
			{
				params: {
					phoneNo: '+35312438500',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IE00223297',
				},
			},
		];
		phoneNotypetestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const phoneNowebsitetestCase = [
			{
				params: {
					phoneNo: '016161300',
					website: 'www.candcgroupplc.com',
				},
				expected: {
					safeNo: 'IE00000132',
				},
			},
		];
		phoneNowebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with phoneNo: ${testCase.params.phoneNo} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&phoneNo=${testCase.params.phoneNo}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('IE status', () => {
		const statustestCase = ['Active', 'NonActive'];
		statustestCase.forEach(async (testCase) => {
			it(`IE company search with status: ${testCase}`, async () => {
				const querystring = `?countries=IE&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const statustypetestCase = [
			{
				params: {
					status: 'Active',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'NonActive',
					type: 'Ltd',
				},
			},
		];
		statustypetestCase.forEach(async (testCase) => {
			it(`IE company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IE&status=${testCase.params.status}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const statuswebsitetestCase = [
			{
				params: {
					status: 'Active',
					website: 'www.candcgroupplc.com',
				},
				expected: {
					safeNo: 'IE00375420',
				},
			},
		];
		statuswebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with status: ${testCase.params.status} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&status=${testCase.params.status}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const invalidstatustestCases = ['activ'];
		invalidstatustestCases.forEach(async (testCase) => {
			it(`IE company search with invalid status:${testCase}`, async () => {
				const queryString = `?countries=IE&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE type', () => {
		const typetestCase = ['Ltd', 'NonLtd'];
		typetestCase.forEach(async (testCase) => {
			it(`IE company search with type: ${testCase}`, async () => {
				const querystring = `?countries=IE&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
		const typewebsitetestCase = [
			{
				params: {
					type: 'Ltd',
					website: 'www.candcgroupplc.com',
				},
				expected: {
					safeNo: 'IE00375420',
				},
			},
		];
		typewebsitetestCase.forEach(async (testCase) => {
			it(`IE company search with type: ${testCase.params.type} and website: ${testCase.params.website}`, async () => {
				const querystring = `?countries=IE&type=${testCase.params.type}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const invalidtypetestCases = ['activ'];
		invalidtypetestCases.forEach(async (testCase) => {
			it(`IE company search with invalid type:${testCase}`, async () => {
				const queryString = `?countries=IE&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidexacttestCases = ['activ'];
		invalidexacttestCases.forEach(async (testCase) => {
			it(`IE company search with invalid exact:${testCase}`, async () => {
				const queryString = `?countries=IE&exact=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IE website', () => {
		const websitetestCase = ['www.candcgroupplc.com', 'www.creditsafe.ie'];
		websitetestCase.forEach(async (testCase) => {
			it(`IE company search with website: ${testCase}`, async () => {
				const querystring = `?countries=IE&website=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.website[0] === `${testCase}`), true);
			});
		});
	});

	describe('IE synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'APPLE OPERATIONS INTERNATIONAL Ltd',
				},
				expected: {
					name: 'APPLE OPERATIONS INTERNATIONAL LIMITED',
				},
			},
			{
				params: {
					name: 'CECP ADVISORS limited liability partnership',
				},
				expected: {
					name: 'CECP ADVISORS LLP',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`IE company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=IE&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
	});
});
