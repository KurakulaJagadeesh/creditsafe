import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('Id Regression Tests', async () => {
	describe('Id companysearch with countryCode', async () => {
		it('return ID companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=ID`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'ID'), true);
		});
	});

	describe('ID id Searches', () => {
		const idtestCases = ['ID-X-ID0000007998', 'ID-X-ID0000038186', 'ID-X-ID0000039823', 'ID-X-ID0000032409', 'ID-X-ID0000038245'];
		idtestCases.forEach(async (testCase) => {
			it(`ID company search with id:${testCase}`, async () => {
				const queryString = `?countries=ID&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					safeNo: 'ID00007998',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('ID company search with id and safeNo', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					city: 'KOTA TANGERANG SELATAN',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('ID company search with id and city', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					postCode: '15311',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('ID company search with id and postCode', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					province: 'BANTEN',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('ID company search with id and province', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('ID company search with id and simpleValue', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('ID company search with id and street', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					name: 'PT BOSTIK INDONESIA',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('ID company search with id and name', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'ID-X-ID0000007998',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('ID company search with id and officeType', async () => {
				const queryString = `?countries=ID&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('ID safeNo Searches', () => {
		const safeNotestCases = ['ID00007998', 'ID00038186', 'ID00039823', 'ID00032409', 'ID00038245'];
		safeNotestCases.forEach(async (testCase) => {
			it(`ID company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=ID&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					city: 'KOTA TANGERANG SELATAN',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and city', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					postCode: '15311',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and postCode', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					province: 'BANTEN',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and province', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and street', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					name: 'PT BOSTIK INDONESIA',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and name', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'ID00007998',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('ID company search with safeNo and officeType', async () => {
				const queryString = `?countries=ID&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('ID city Searches', () => {
		const citytestCases = ['KOTA TANGERANG SELATAN', 'KOTA TANGERANG', 'PANGKAL PINANG', 'SEMARANG'];
		citytestCases.forEach(async (testCase) => {
			it(`ID company search with city:${testCase}`, async () => {
				const queryString = `?countries=ID&city=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					postCode: '15311',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01064918',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					postCode: '15146',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					postCode: '33141',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					postCode: '50184',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					province: 'BANTEN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01057260',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					province: 'BANTEN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01050136',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					province: 'KEPULAUAN BANGKA BELITUNG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					province: 'JAWA TENGAH',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					simpleValue: 'KOMP. MULTI GUNA F-18 - F-19, PAKUALAM, SERPONG UTARA, 15320, KOTA TANGERANG SELATAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00000348',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, PANGKAL PINANG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, SEMARANG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00007998',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					street: 'GIRIMAYA, BUKITINTAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					name: 'PT BOSTIK INDONESIA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00007998',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					name: 'PT NIAGA GRAHA ESTETIKA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					name: 'PT MAKRO JAYA LESTARI',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					name: 'BERKAT MANUNGGAL JAYA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'KOTA TANGERANG SELATAN',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'KOTA TANGERANG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'PANGKAL PINANG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'SEMARANG',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct city
				// assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLowerCase()), true);
			});
		});
	});

	describe('ID postCode Searches', () => {
		const postCodetestCases = ['15311', '15146', '33141', '50184'];
		postCodetestCases.forEach(async (testCase) => {
			it(`ID company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '15311',
					province: 'BANTEN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00072595',
				},
			},
			{
				params: {
					postCode: '15146',
					province: 'BANTEN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01054260',
				},
			},
			{
				params: {
					postCode: '33141',
					province: 'KEPULAUAN BANGKA BELITUNG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					postCode: '50184',
					province: 'JAWA TENGAH',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`ID company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase.params.postCode}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '15311',
					simpleValue: 'RT008  RW002, SERPONG, SERPONG, 15311, KOTA TANGERANG SELATAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01062877',
				},
			},
			{
				params: {
					postCode: '15146',
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					postCode: '33141',
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, 33141',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					postCode: '50184',
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, 50184',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`ID company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '15311',
					street: 'RT008  RW002',
				},
				expected: {
					key: 'safeNo',
					value: 'ID01062877',
				},
			},
			{
				params: {
					postCode: '15146',
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					postCode: '33141',
					street: 'GIRIMAYA, BUKITINTAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					postCode: '50184',
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`ID company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '15311',
					name: 'CV GARASI 88',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00072595',
				},
			},
			{
				params: {
					postCode: '15146',
					name: 'PT NIAGA GRAHA ESTETIKA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					postCode: '33141',
					name: 'PT MAKRO JAYA LESTARI',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					postCode: '50184',
					name: 'BERKAT MANUNGGAL JAYA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`ID company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '15311',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '15146',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '33141',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '50184',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct postCode
				// assert.equal(response.data.companies.every((company) => company.address.postCode === testCase.params.postCode), true);
			});
		});
	});

	describe('ID province Searches', () => {
		const provincetestCases = ['BANTEN', 'DKI JAKARTA', 'KEPULAUAN BANGKA BELITUNG', 'JAWA TENGAH'];
		provincetestCases.forEach(async (testCase) => {
			it(`ID company search with province:${testCase}`, async () => {
				const queryString = `?countries=ID&province=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'BANTEN',
					simpleValue: 'CBD EMERALD BLOK CE/ A NO. 01, PERIGI LAMA, PONDOK AREN, 15227, KOTA TANGERANG SELATAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00000125',
				},
			},
			{
				params: {
					province: 'BANTEN',
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					province: 'KEPULAUAN BANGKA BELITUNG',
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, 33141',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					province: 'JAWA TENGAH',
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, 50184',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it(`ID company search with province: ${testCase.params.province} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=ID&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'BANTEN',
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00007998',
				},
			},
			{
				params: {
					province: 'BANTEN',
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					province: 'KEPULAUAN BANGKA BELITUNG',
					street: 'GIRIMAYA, BUKITINTAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					province: 'JAWA TENGAH',
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`ID company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=ID&province=${testCase.params.province}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'BANTEN',
					name: 'PT BOSTIK INDONESIA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00007998',
				},
			},
			{
				params: {
					province: 'BANTEN',
					name: 'PT NIAGA GRAHA ESTETIKA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					province: 'KEPULAUAN BANGKA BELITUNG',
					name: 'PT MAKRO JAYA LESTARI',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					province: 'JAWA TENGAH',
					name: 'BERKAT MANUNGGAL JAYA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`ID company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&province=${testCase.params.province}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'BANTEN',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'KEPULAUAN BANGKA BELITUNG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'JAWA TENGAH',
					officeType: 'headOffice',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with province: ${testCase.params.province} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&province=${testCase.params.province}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct province
				// assert.equal(response.data.companies.every((company) => company.address.province === testCase.params.province), true);
			});
		});
	});

	describe('ID simpleValue Searches', () => {
		const simpleValuetestCases = ['CBD EMERALD BLOK CE/ A NO. 01, PERIGI LAMA, PONDOK AREN, 15227, KOTA TANGERANG SELATAN',
			'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
			'GIRIMAYA, BUKITINTAN, 33141, PANGKAL PINANG',
			'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, SEMARANG'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`ID company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=ID&simpleValue=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'CBD EMERALD BLOK CE/ A NO. 01, PERIGI LAMA, PONDOK AREN, 15227, KOTA TANGERANG SELATAN',
					street: 'CBD EMERALD BLOK CE/ A NO. 01',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00000125',
				},
			},
			{
				params: {
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, PANGKAL PINANG',
					street: 'GIRIMAYA, BUKITINTAN',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, SEMARANG',
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`ID company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=ID&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'CBD EMERALD BLOK CE/ A NO. 01, PERIGI LAMA, PONDOK AREN, 15227, KOTA TANGERANG SELATAN',
					name: 'PT JAYA REAL PROPERTY TBK',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00000125',
				},
			},
			{
				params: {
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
					name: 'PT NIAGA GRAHA ESTETIKA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, PANGKAL PINANG',
					name: 'PT MAKRO JAYA LESTARI',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, SEMARANG',
					name: 'BERKAT MANUNGGAL JAYA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`ID company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A, SETU, SETU, 15311, KOTA TANGERANG SELATAN',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011, GONDRONG, CIPONDOH, 15146, KOTA TANGERANG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'GIRIMAYA, BUKITINTAN, 33141, PANGKAL PINANG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1, PURWOYOSO, NGALIYAN, 50184, SEMARANG',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct simpleValue
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue === testCase.params.simpleValue), true);
			});
		});
	});

	describe('ID street Searches', () => {
		const streettestCases = ['TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
			'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
			'GIRIMAYA, BUKITINTAN',
			'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1'];
		streettestCases.forEach(async (testCase) => {
			it(`ID company search with street:${testCase}`, async () => {
				const queryString = `?countries=ID&street=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
					name: 'PT BOSTIK INDONESIA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00007998',
				},
			},
			{
				params: {
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
					name: 'PT NIAGA GRAHA ESTETIKA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00038186',
				},
			},
			{
				params: {
					street: 'GIRIMAYA, BUKITINTAN',
					name: 'PT MAKRO JAYA LESTARI',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00039823',
				},
			},
			{
				params: {
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
					name: 'BERKAT MANUNGGAL JAYA',
				},
				expected: {
					key: 'safeNo',
					value: 'ID00032409',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`ID company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'TAMAN TEKNO, SEKTOR XI, BLOK H1 NO. 1A',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'GREEN LAKE CITY, RUKAN CORDOBA BLOK C NO. 18, RT 005 RW 011',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'GIRIMAYA, BUKITINTAN',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'KAWASAN INDUSTRI CANDI, JL. GATOT SUBROTO BLOK B NO. 1',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct street
				// assert.equal(response.data.companies.every((company) => company.address.street === testCase.params.street), true);
			});
		});
	});

	describe('ID name Searches', () => {
		const nametestCases = ['PT BOSTIK INDONESIA', 'PT NIAGA GRAHA ESTETIKA', 'PT MAKRO JAYA LESTARI', 'BERKAT MANUNGGAL JAYA'];
		nametestCases.forEach(async (testCase) => {
			it(`ID company search with name:${testCase}`, async () => {
				const queryString = `?countries=ID&name=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'PT BOSTIK INDONESIA',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'PT NIAGA GRAHA ESTETIKA',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'PT MAKRO JAYA LESTARI',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'BERKAT MANUNGGAL JAYA',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=ID&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.length > 0, true);
				// // Check all companies have the correct status
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// // Check all companies have the correct name
				// assert.equal(response.data.companies.every((company) => company.name === testCase.params.name), true);
			});
		});
	});

	describe('ID officeType Searches', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`ID company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=ID&officeType=${testCase}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
	});

	describe('ID synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'perseroan terbatas WELCO',
				},
				expected: {
					name: 'PT WELCO',
				},
			},
			{
				params: {
					name: 'UNIVERSITAS tbk',
				},
				expected: {
					name: 'UNIVERSITAS TERBUKA',
				},
			},
			{
				params: {
					name: 'FIRMA CHEMICAL',
				},
				expected: {
					name: 'FA CHEMICAL',
				},
			},
			{
				params: {
					name: 'PERUM BULOG',
				},
				expected: {
					name: 'PERUSAHAAN UMUM BULOG',
				},
			},
			{
				params: {
					name: 'foundation FLORENCE',
				},
				expected: {
					name: 'YAYASAN FLORENCE',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`ID company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=ID&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'kaltara',
				},
				expected: {
					city: 'KALIMANTAN UTARA',
				},
			},
			{
				params: {
					city: 'KOTA gorontalo',
				},
				expected: {
					city: 'KOTA GORONTALO',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`ID company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=ID&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.city.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'KOMP PU',
				},
				expected: {
					street: 'KOMPLEKS PU',
				},
			},
			{
				params: {
					street: 'PSR SENTRAL',
				},
				expected: {
					street: 'PASAR SENTRAL',
				},
			},
			{
				params: {
					street: 'gg BUNGA',
				},
				expected: {
					street: 'GANG BUNGA',
				},
			},
			{
				params: {
					street: 'KP BUWEK',
				},
				expected: {
					street: 'KAMPUNG BUWEK',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`ID company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=ID&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
			});
		});
	});
});
