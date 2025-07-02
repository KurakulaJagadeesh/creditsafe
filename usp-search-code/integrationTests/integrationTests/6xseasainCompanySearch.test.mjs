import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('KH Regression Tests', () => {
	describe('KH company Search', () => {
		it('returns KH Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=KH`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'KH'), true);
		});
	});

	describe('KH id', () => {
		const idtestCases = ['KH-X-KH12984189', 'KH-X-KH12984032', 'KH-X-KH12534734', 'KH-X-KH13936435', 'KH-X-KH13213224', 'KH-X-KH12983271'];
		idtestCases.forEach(async (testCase) => {
			it(`KH company search with id:${testCase}`, async () => {
				const queryString = `?countries=KH&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					safeNo: 'KH12984189',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('KH company search with id and safeNo', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					regNo: '00018841',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('KH company search with id and regNo', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					city: 'Phnom Penh',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('KH company search with id and city', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					postCode: '12105',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('KH company search with id and postCode', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 221, Phnom Penh',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('KH company search with id and simpleValue', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					street: 'WF136',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('KH company search with id and street', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					name: 'PLANETMART CO., LTD.',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('KH company search with id and name', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('KH company search with id and officeType', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'KH-X-KH12984189',
					tradeName: 'PLANETMART',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('KH company search with id and tradeName', async () => {
				const queryString = `?countries=KH&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KH safeNo', () => {
		const safeNotestCases = ['KH12984189', 'KH12984032', 'KH12534734', 'KH13936435', 'KH13213224', 'KH12983271'];
		safeNotestCases.forEach(async (testCase) => {
			it(`KH company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=KH&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					regNo: '00018841',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and regNo', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					city: 'Phnom Penh',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and city', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					postCode: '12105',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and postCode', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 221, Phnom Penh',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					street: 'WF136',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and street', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					name: 'PLANETMART CO., LTD.',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and name', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and officeType', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'KH12984189',
					tradeName: 'PLANETMART',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('KH company search with safeNo and tradeName', async () => {
				const queryString = `?countries=KH&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KH regNo', () => {
		const regNotestCases = ['00018841', '00015997', '00028357', '00058999', '00038471'];
		regNotestCases.forEach(async (testCase) => {
			it(`KH company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=KH&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '00018841',
					city: 'Phnom Penh',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('KH company search with regNo and city', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '00018841',
					postCode: '12105',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('KH company search with regNo and postCode', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '00018841',
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 221, Phnom Penh',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('KH company search with regNo and simpleValue', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '00018841',
					street: 'WF136',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('KH company search with regNo and street', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '00018841',
					name: 'PLANETMART CO., LTD.',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('KH company search with regNo and name', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '00018841',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('KH company search with regNo and officeType', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: '00018841',
					tradeName: 'PLANETMART',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('KH company search with regNo and tradeName', async () => {
				const queryString = `?countries=KH&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KH city', () => {
		const citytestCases = ['Phnom Penh', 'Battambang', 'Siem Reap', 'SIHANOUKVILLE, PREAH SIHANOUK', 'Svay Rieng'];
		citytestCases.forEach(async (testCase) => {
			it(`KH company search with city:${testCase}`, async () => {
				const queryString = `?countries=KH&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'Battambang',
					postCode: '2353',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986194',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					postCode: '17252',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					postCode: '18204',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13211440',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					postCode: '20202',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13354426',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'Phnom Penh',
					simpleValue: '¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿, RUESSEI KAEV, 12105, Phnom Penh',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13208583',
				},
			},
			{
				params: {
					city: 'Battambang',
					simpleValue: '¿¿¿ ¿¿¿, ¿¿¿¿¿¿¿ ¿, RUMCHEK BUON, ROTANAK, BATTAMBANG, 2353, Battambang',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986194',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					simpleValue: 'N/A, N/A, SALA KAN AENG, SVAY DANGKUM, SIEM REAP, 17252, Siem Reap',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					simpleValue: '¿¿¿¿¿¿¿¿¿¿¿ ¿ ¿¿¿¿, ¿¿¿¿¿, Chantrea, 20202, Svay Rieng',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13354426',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'Phnom Penh',
					street: 'WF136',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					city: 'Battambang',
					street: '08, 104A, KAMMEAKKAR',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					street: 'N/A',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					street: '379',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'Phnom Penh',
					name: 'PLANETMART CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					city: 'Battambang',
					name: 'RATANAK(CAMBODIA)INVEST CO.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					name: 'GIQ INTERNATIONAL CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					name: 'WELL HARVEST CREATION CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'Phnom Penh',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Battambang',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.params.city.toLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'Phnom Penh',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					city: 'Battambang',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					city: 'Siem Reap',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					city: 'SIHANOUKVILLE, PREAH SIHANOUK',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					city: 'Svay Rieng',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH postCode', () => {
		const postCodetestCases = ['12105', '2353', '17252', '18204', '20202'];
		postCodetestCases.forEach(async (testCase) => {
			it(`KH company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '12105',
					simpleValue: '117, 4, PHUM TUOL KOUK, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12987877',
				},
			},
			{
				params: {
					postCode: '2360',
					simpleValue: '08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					postCode: '17252',
					simpleValue: 'N/A, N/A, SALA KAN AENG, SVAY DANGKUM, SIEM REAP, 17252, Siem Reap',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					postCode: '18204',
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					postCode: '20202',
					simpleValue: 'N/A, N/A, TA BOEB, BAVET, CHANTREA, 20202, Svay Rieng',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12536890',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`KH company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '12105',
					street: '117',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12987877',
				},
			},
			{
				params: {
					postCode: '2360',
					street: '08, 104A, KAMMEAKKAR',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					postCode: '17252',
					street: 'N/A',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					postCode: '18204',
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					postCode: '20202',
					street: 'N/A, N/A, TA BOEB',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12536890',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`KH company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '12105',
					name: 'PLANETMART CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					postCode: '2360',
					name: 'RATANAK(CAMBODIA)INVEST CO.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					postCode: '17656',
					name: 'GIQ INTERNATIONAL CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					postCode: '18204',
					name: 'WELL HARVEST CREATION CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					postCode: '20251',
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`KH company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '12105',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '2360',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '17656',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '18204',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '20251',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '12105',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					postCode: '2360',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					postCode: '17656',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					postCode: '18204',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					postCode: '20251',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=KH&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH simpleValue', () => {
		const simpleValuetestCases = ['117, 4, PHUM TUOL KOUK, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
			'08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
			'N/A, N/A, SALA KAN AENG, SVAY DANGKUM, SIEM REAP, 17252, Siem Reap',
			'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
			'N/A, N/A, TA BOEB, BAVET, CHANTREA, 20202, Svay Rieng'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`KH company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=KH&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '117, 4, PHUM TUOL KOUK, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
					street: '117',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12987877',
				},
			},
			{
				params: {
					simpleValue: '08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
					street: '08, 104A, KAMMEAKKAR',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					simpleValue: 'N/A, N/A, SALA KAN AENG, SVAY DANGKUM, SIEM REAP, 17252, Siem Reap',
					street: 'N/A',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12986362',
				},
			},
			{
				params: {
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					simpleValue: 'N/A, N/A, TA BOEB, BAVET, CHANTREA, 20202, Svay Rieng',
					street: 'N/A, N/A, TA BOEB',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12536890',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`KH company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KH&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
					name: 'PLANETMART CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					simpleValue: '08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
					name: 'RATANAK(CAMBODIA)INVEST CO.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					simpleValue: 'N/A, N/A, TRANG, KANDAEK, PRA AT BAKONG, 17656, Siem Reap',
					name: 'GIQ INTERNATIONAL CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
					name: 'WELL HARVEST CREATION CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					simpleValue: '379, 204, ME PHEUNG, SVAY RIENG, SVAY RIENG, 20251, Svay Rieng',
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`KH company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KH&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					simpleValue: '08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					simpleValue: 'N/A, N/A, TRANG, KANDAEK, PRA AT BAKONG, 17656, Siem Reap',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					simpleValue: '379, 204, ME PHEUNG, SVAY RIENG, SVAY RIENG, 20251, Svay Rieng',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=KH&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: 'WF136, 5BT, PHUM TUOL SANGKAE, TUOL SANGKAE, RUE EI KAEV, 12105, Phnom Penh',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					simpleValue: '08, 104A, KAMMEAKKAR, SVAY PAO, BATTAMBANG, 2360, Battambang',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					simpleValue: 'N/A, N/A, TRANG, KANDAEK, PRA AT BAKONG, 17656, Siem Reap',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					simpleValue: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk, 18204, SIHANOUKVILLE, PREAH SIHANOUK',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					simpleValue: '379, 204, ME PHEUNG, SVAY RIENG, SVAY RIENG, 20251, Svay Rieng',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=KH&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH street', () => {
		const streettestCases = ['117', '08, 104A, KAMMEAKKAR', 'N/A', 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk', 'N/A, N/A, TA BOEB'];
		streettestCases.forEach(async (testCase) => {
			it(`KH company search with street:${testCase}`, async () => {
				const queryString = `?countries=KH&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'WF136',
					name: 'PLANETMART CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					street: '08, 104A, KAMMEAKKAR',
					name: 'RATANAK(CAMBODIA)INVEST CO.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					street: 'N/A',
					name: 'GIQ INTERNATIONAL CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
					name: 'WELL HARVEST CREATION CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					street: '379',
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`KH company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KH&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'WF136',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					street: '08, 104A, KAMMEAKKAR',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					street: 'N/A',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985860',
				},
			},
			{
				params: {
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13950317',
				},
			},
			{
				params: {
					street: '379',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=KH&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: 'WF136',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					street: '08, 104A, KAMMEAKKAR',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					street: 'N/A',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					street: 'Phum 6, Sangkat Buon, Mittakpheap, Preah Sihanouk',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					street: '379',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=KH&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH name', () => {
		const nametestCases = ['PLANETMART CO., LTD.', 'RATANAK(CAMBODIA)INVEST CO.', 'GIQ INTERNATIONAL CO., LTD.', 'WELL HARVEST CREATION CO., LTD.', 'SUGAR INDOCHINE INVESTMENT CO., LTD.'];
		nametestCases.forEach(async (testCase) => {
			it(`KH company search with name:${testCase}`, async () => {
				const queryString = `?countries=KH&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'PLANETMART CO., LTD.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					name: 'RATANAK(CAMBODIA)INVEST CO.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					name: 'GIQ INTERNATIONAL CO., LTD.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					name: 'WELL HARVEST CREATION CO., LTD.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=KH&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'PLANETMART CO., LTD.',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					name: 'RATANAK(CAMBODIA)INVEST CO.',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					name: 'GIQ INTERNATIONAL CO., LTD.',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					name: 'WELL HARVEST CREATION CO., LTD.',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					name: 'SUGAR INDOCHINE INVESTMENT CO., LTD.',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it('KH company search with name and tradeName', async () => {
				const queryString = `?countries=KH&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`KH company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=KH&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'PLANETMART',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12984189',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'RATANAK CAMBODIA INVEST',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12534865',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'GIQ INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12981288',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'WELL HARVEST CREATION',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13813883',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'SUGAR INDOCHINE INVESTMENT',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985842',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=KH&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('KH tradeName', () => {
		const tradeNametestCases = ['PLANETMART', 'RATANAK CAMBODIA INVEST', 'GIQ INTERNATIONAL', 'WELL HARVEST CREATION', 'SUGAR INDOCHINE INVESTMENT'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`KH company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=KH&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('KH synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'E.L.E.A.N. Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'KH04055590',
				},
			},
			{
				params: {
					name: 'PREAHCHAN2 limited liability partnership CO., LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13355224',
				},
			},
			{
				params: {
					name: 'MINCONSULT sendirian berhad',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13932329',
				},
			},
			{
				params: {
					name: 'ATTICA DIAMOND tnhh mot thanh vien',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13948273',
				},
			},
			{
				params: {
					name: 'BARMANULA COmpany',
				},
				expected: {
					key: 'safeNo',
					value: 'KH10320148',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`KH company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KH&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'rep',
				},
				expected: {
					key: 'city',
					value: 'siem reap',
				},
			},
			{
				params: {
					city: 'bbm',
				},
				expected: {
					key: 'city',
					value: 'Battambang',
				},
			},
			{
				params: {
					city: 'siemreab',
				},
				expected: {
					key: 'city',
					value: 'siem reap',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`KH company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=KH&city=${testCase.params.city}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'No, No, Kakranh, rep, siemreab',
				},
				expected: {
					key: 'safeNo',
					value: 'KH04054098',
				},
			},
			{
				params: {
					street: 'Chamkar Samraong, batdambang',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13353806',
				},
			},
			{
				params: {
					street: 'Rotanak, Rotanak, bbm, 2353',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13207043',
				},
			},
			{
				params: {
					street: '¿¿¿¿¿¿¿ kul 02C',
				},
				expected: {
					key: 'safeNo',
					value: 'KH12985811',
				},
			},
			{
				params: {
					street: 'Phdau georgetown, Tang Krouch, Samraong Tong, 5211',
				},
				expected: {
					key: 'safeNo',
					value: 'KH13935524',
				},
			},
			{
				params: {
					street: 'NO. 1540, han (ST 1019)',
				},
				expected: {
					key: 'safeNo',
					value: 'KH11961302',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`KH company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KH&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});

describe('AF Regression Tests', () => {
	describe('AF company Search', () => {
		it('returns AF Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=AF`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'AF'), true);
		});
	});

	describe('AF id', () => {
		const idtestCases = ['AF-X-AF10605364', 'AF-X-AF02599189', 'AF-X-AF10598225', 'AF-X-AF10613780', 'AF-X-AF10605093'];
		idtestCases.forEach(async (testCase) => {
			it(`AF company search with id:${testCase}`, async () => {
				const queryString = `?countries=AF&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					safeNo: 'AF10605364',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('AF company search with id and safeNo', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					regNo: ' I-10112',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('AF company search with id and regNo', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					city: 'KABUL',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('AF company search with id and city', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					postCode: '1001',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('AF company search with id and postCode', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('AF company search with id and simpleValue', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					street: 'SHERPUR MAYOR STREET',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('AF company search with id and street', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					name: 'I.O GLOBAL SERVICES',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('AF company search with id and name', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('AF company search with id and officeType', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'AF-X-AF10605364',
					tradeName: 'I.O GLOBAL SERVICES',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('AF company search with id and tradeName', async () => {
				const queryString = `?countries=AF&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AF safeNo', () => {
		const safeNotestCases = ['AF10605364', 'AF02599189', 'AF10598225', 'AF10613780', 'AF10605093'];
		safeNotestCases.forEach(async (testCase) => {
			it(`AF company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=AF&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					regNo: 'I-10112',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and regNo', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					city: 'KABUL',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and city', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					postCode: '1001',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and postCode', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					street: 'SHERPUR MAYOR STREET',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and street', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					name: 'I.O GLOBAL SERVICES',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and name', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and officeType', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'AF10605364',
					tradeName: 'I.O GLOBAL SERVICES',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('AF company search with safeNo and tradeName', async () => {
				const queryString = `?countries=AF&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AF regNo', () => {
		const regNotestCases = ['I-10112', 'I-11379', 'D-42441', 'D-39630', 'D-46078'];
		regNotestCases.forEach(async (testCase) => {
			it(`AF company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=AF&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: 'I-10112',
					city: 'KABUL',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('AF company search with regNo and city', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: 'I-10112',
					postCode: '1001',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('AF company search with regNo and postCode', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: 'I-10112',
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('AF company search with regNo and simpleValue', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: 'I-10112',
					street: 'SHERPUR MAYOR STREET',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('AF company search with regNo and street', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: 'I-10112',
					name: 'I.O GLOBAL SERVICES',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('AF company search with regNo and name', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: 'I-10112',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('AF company search with regNo and officeType', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: 'I-10112',
					tradeName: 'I.O GLOBAL SERVICES',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('AF company search with regNo and tradeName', async () => {
				const queryString = `?countries=AF&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AF city', () => {
		const citytestCases = ['KABUL', 'ZARANJ , NIMROZ', 'JALALABAD', 'MAZAR-I-SHARIF'];
		citytestCases.forEach(async (testCase) => {
			it(`AF company search with city:${testCase}`, async () => {
				const queryString = `?countries=AF&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'KABUL',
					postCode: '1009',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248685',
				},
			},
			{
				params: {
					city: 'ZARANJ , NIMROZ',
					postCode: '0093',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
			{
				params: {
					city: 'MAZAR-I-SHARIF',
					postCode: '1001',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10593890',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'KABUL',
					simpleValue: 'HOUSE 3, STREET 12, WAZIR AKBAR KHAN, P.O. BOX 225, KABUL',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599183',
				},
			},
			{
				params: {
					city: 'ZARANJ , NIMROZ',
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
			{
				params: {
					city: 'JALALABAD',
					simpleValue: 'KAMA STATION, HOUSE 22, JALALABAD',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248662',
				},
			},
			{
				params: {
					city: 'MAZAR-I-SHARIF',
					simpleValue: 'MAZAR-KABUL HIGH STREET, MAZAR-I-SHARIF',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248663',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'KABUL',
					street: 'HOUSE 3, STREET 12',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599183',
				},
			},
			{
				params: {
					city: 'ZARANJ , NIMROZ',
					street: 'ABO DAVOOD SAJESTANI ST',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
			{
				params: {
					city: 'JALALABAD',
					street: 'KAMA STATION, HOUSE 22',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248662',
				},
			},
			{
				params: {
					city: 'MAZAR-I-SHARIF',
					street: 'MAZAR-KABUL HIGH STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248663',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'JALALABAD',
					name: 'SADAT HASANZAI LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248662',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'KABUL',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'ZARANJ , NIMROZ',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'JALALABAD',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'MAZAR-I-SHARIF',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLocaleLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'KABUL',
					tradeName: 'MOBY GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599183',
				},
			},
			{
				params: {
					city: 'ZARANJ , NIMROZ',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
			{
				params: {
					city: 'JALALABAD',
					tradeName: 'SADAT HASAN ZAI',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248662',
				},
			},
			{
				params: {
					city: 'MAZAR-I-SHARIF',
					tradeName: 'BRADARAN ETEHAD',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248663',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF postCode', () => {
		const postCodetestCases = ['1001', '1009', '93(79) 997', '0093'];
		postCodetestCases.forEach(async (testCase) => {
			it(`AF company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '1001',
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					postCode: '1009',
					simpleValue: 'HOUSE# 13, 3TH SIDE ROAD HUMAN RIGHTS STREET, SARAK-E SHORA, 1009, KABUL',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248685',
				},
			},
			{
				params: {
					postCode: '93(79) 997',
					simpleValue: 'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					postCode: '0093',
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`AF company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '1001',
					street: 'SHERPUR MAYOR STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					postCode: '1009',
					street: 'HOUSE# 13, 3TH SIDE ROAD HUMAN RIGHTS STREET, SARAK-E SHORA',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248685',
				},
			},
			{
				params: {
					postCode: '93(79) 997',
					street: 'ROSHAN SHOP STREET #13, OFF MAIN STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					postCode: '0093',
					street: 'ABO DAVOOD SAJESTANI ST',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`AF company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '1001',
					name: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					postCode: '1009',
					name: 'NAWI HAFIZ HABIB LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248685',
				},
			},
			{
				params: {
					postCode: '93(79) 997',
					name: 'ROSHAN (TELECOM DEVELOPMENT COMPANY)',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					postCode: '0093',
					name: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`AF company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '1001',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '1009',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '93(79) 997',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '0093',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '1001',
					tradeName: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					postCode: '1009',
					tradeName: 'NAWI HAFIZ HABIB',
				},
				expected: {
					key: 'safeNo',
					value: 'AF07248685',
				},
			},
			{
				params: {
					postCode: '93(79) 997',
					tradeName: 'ROSHAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					postCode: '0093',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=AF&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF simpleValue', () => {
		const simpleValuetestCases = ['SHERPUR MAYOR STREET, 1001, KABUL',
			'HOUSE 217, MICRORAYON 3, OPPOSITE AZADI PUBLISH HOUSE, DISTRICT 9',
			'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
			'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`AF company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=AF&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
					street: 'SHERPUR MAYOR STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					simpleValue: 'HOUSE 217, MICRORAYON 3, OPPOSITE AZADI PUBLISH HOUSE, DISTRICT 9',
					street: 'HOUSE 217, MICRORAYON 3',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					simpleValue: 'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
					street: 'ROSHAN SHOP STREET #13, OFF MAIN STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
					street: 'ABO DAVOOD SAJESTANI ST',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`AF company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=AF&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
					name: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					simpleValue: 'HOUSE 217, MICRORAYON 3, OPPOSITE AZADI PUBLISH HOUSE, DISTRICT 9',
					name: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					simpleValue: 'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
					name: 'ROSHAN (TELECOM DEVELOPMENT COMPANY)',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
					name: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`AF company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AF&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					simpleValue: 'HOUSE 217, MICRORAYON 3, OPPOSITE AZADI PUBLISH HOUSE, DISTRICT 9',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					simpleValue: 'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=AF&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: 'SHERPUR MAYOR STREET, 1001, KABUL',
					tradeName: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					simpleValue: 'HOUSE 217, MICRORAYON 3, OPPOSITE AZADI PUBLISH HOUSE, DISTRICT 9',
					tradeName: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					simpleValue: 'ROSHAN SHOP STREET #13, OFF MAIN STREET, WAZIR AKBAR KHAN, 93(79) 997, KABUL',
					tradeName: 'ROSHAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					simpleValue: 'ABO DAVOOD SAJESTANI ST, MOSQUE HAJI HOSAIN JAME ZARANJ, 0093, ZARANJ , NIMROZ',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=AF&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF street', () => {
		const streettestCases = ['SHERPUR MAYOR STREET', 'HOUSE 217, MICRORAYON 3', 'ROSHAN SHOP STREET #13, OFF MAIN STREET', 'ABO DAVOOD SAJESTANI ST'];
		streettestCases.forEach(async (testCase) => {
			it(`AF company search with street:${testCase}`, async () => {
				const queryString = `?countries=AF&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'SHERPUR MAYOR STREET',
					name: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					street: 'HOUSE 217, MICRORAYON 3',
					name: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					street: 'ROSHAN SHOP STREET #13, OFF MAIN STREET',
					name: 'ROSHAN (TELECOM DEVELOPMENT COMPANY)',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					street: 'ABO DAVOOD SAJESTANI ST',
					name: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`AF company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AF&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'SHERPUR MAYOR STREET',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					street: 'HOUSE 217, MICRORAYON 3',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					street: 'ROSHAN SHOP STREET #13, OFF MAIN STREET',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					street: 'ABO DAVOOD SAJESTANI ST',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with street:${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=AF&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: 'SHERPUR MAYOR STREET',
					tradeName: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					street: 'HOUSE 217, MICRORAYON 3',
					tradeName: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					street: 'ROSHAN SHOP STREET #13, OFF MAIN STREET',
					tradeName: 'ROSHAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					street: 'ABO DAVOOD SAJESTANI ST',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=AF&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF name', () => {
		const nametestCases = ['I.O GLOBAL SERVICES', 'BADGHIS', 'ROSHAN (TELECOM DEVELOPMENT COMPANY)', 'DANESH NET'];
		nametestCases.forEach(async (testCase) => {
			it(`AF company search with name:${testCase}`, async () => {
				const queryString = `?countries=AF&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'I.O GLOBAL SERVICES',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					name: 'BADGHIS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					name: 'ROSHAN (TELECOM DEVELOPMENT COMPANY)',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					name: 'DANESH NET',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=AF&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'I.O GLOBAL SERVICES',
					tradeName: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					name: 'BADGHIS',
					tradeName: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					name: 'ROSHAN (TELECOM DEVELOPMENT COMPANY)',
					tradeName: 'ROSHAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					name: 'DANESH NET',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it('AF company search with name and tradeName', async () => {
				const queryString = `?countries=AF&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`AF company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=AF&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'I.O GLOBAL SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10605364',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'BADGHIS',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627400',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'ROSHAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599191',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'DANESH NET',
				},
				expected: {
					key: 'safeNo',
					value: 'AF02599189',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=AF&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AF tradeName', () => {
		const tradeNametestCases = ['I.O GLOBAL SERVICES', 'BADGHIS', 'ROSHAN', 'DANESH NET'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`AF company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=AF&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('AF synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'TERRASEIS TRADING Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10624427',
				},
			},
			{
				params: {
					name: 'YASAMIN limited',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10618064',
				},
			},
			{
				params: {
					name: 'AETS limited liability partnership',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10597649',
				},
			},
			{
				params: {
					name: 'ACADEMI trach nhiem huu han',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10596386',
				},
			},
			{
				params: {
					name: 'BRANCH OF ctcp TECHNOPROM EXPORT',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10627337',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`AF company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AF&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'mazar sharif',
				},
				expected: {
					key: 'city',
					value: 'MAZAR-I-SHARIF',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`AF company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=AF&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'qandahar HALL, OPPOSITE, kdh',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10594122',
				},
			},
			{
				params: {
					street: 'BAZAR NOW bmn',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10618968',
				},
			},
			{
				params: {
					street: 'MAWLANA STREET, mzr',
				},
				expected: {
					key: 'safeNo',
					value: 'AF10598047',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`AF company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=AF&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns AF company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns AF company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns AF company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns AF company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});

describe('TH Regression Tests', () => {
	describe('TH company Search', () => {
		it('returns TH Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=TH`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'TH'), true);
		});
	});

	describe('TH id', () => {
		const idtestCases = ['TH-X-TH02587716', 'TH-X-TH02587260', 'TH-X-TH02598642', 'TH-X-TH02588164', 'TH-X-TH02599348'];
		idtestCases.forEach(async (testCase) => {
			it(`TH company search with id:${testCase}`, async () => {
				const queryString = `?countries=TH&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					safeNo: 'TH02587716',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('TH company search with id and safeNo', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					regNo: '0105538041891',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('TH company search with id and regNo', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					city: 'BANGSUE, BANGKOK',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('TH company search with id and city', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					postCode: '10800',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('TH company search with id and postCode', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('TH company search with id and simpleValue', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					street: '1 SIAM CEMENT RD',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('TH company search with id and street', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					name: 'RAYONG OLEFINS CO LTD',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('TH company search with id and name', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('TH company search with id and officeType', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'TH-X-TH02587716',
					tradeName: 'RAYONG OLEFINS',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('TH company search with id and tradeName', async () => {
				const queryString = `?countries=TH&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('TH safeNo', () => {
		const safeNotestCases = ['TH02587716', 'TH02587260', 'TH02598642', 'TH02588164', 'TH02599348'];
		safeNotestCases.forEach(async (testCase) => {
			it(`TH company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=TH&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					regNo: '0105538041891',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and regNo', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					city: 'BANGSUE, BANGKOK',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and city', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					postCode: '10800',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and postCode', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					street: '1 SIAM CEMENT RD',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and street', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					name: 'RAYONG OLEFINS CO LTD',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and name', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and officeType', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'TH02587716',
					tradeName: 'RAYONG OLEFINS',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('TH company search with safeNo and tradeName', async () => {
				const queryString = `?countries=TH&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('TH regNo', () => {
		const regNotestCases = ['0105538041891', '0105532016096', '0105532014875', '0255537000014', '0105553005620'];
		regNotestCases.forEach(async (testCase) => {
			it(`TH company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=TH&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '0105538041891',
					city: 'BANGSUE, BANGKOK',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('TH company search with regNo and city', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '0105538041891',
					postCode: '10800',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('TH company search with regNo and postCode', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '0105538041891',
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('TH company search with regNo and simpleValue', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '0105538041891',
					street: '1 SIAM CEMENT RD',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('TH company search with regNo and street', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '0105538041891',
					name: 'RAYONG OLEFINS CO LTD',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('TH company search with regNo and name', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '0105538041891',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('TH company search with regNo and officeType', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: '0105538041891',
					tradeName: 'RAYONG OLEFINS',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('TH company search with regNo and tradeName', async () => {
				const queryString = `?countries=TH&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('TH city', () => {
		const citytestCases = ['BANGSUE, BANGKOK', 'SIRACHA, CHONBURI', 'BANGPRAKONG', 'PRACHINBURI', 'LAMPHUN'];
		citytestCases.forEach(async (testCase) => {
			it(`TH company search with city:${testCase}`, async () => {
				const queryString = `?countries=TH&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					postCode: '10800',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02626046',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					postCode: '24130',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					postCode: '25110',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02636524',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					postCode: '51000',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02592336',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					city: 'SIRACHA, CHONBURI',
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					street: '1 SIAM CEMENT RD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02730472',
				},
			},
			{
				params: {
					city: 'SIRACHA, CHONBURI',
					street: '673 MOO 11',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					street: '80 M.1',
				},
				expected: {
					key: 'safeNo',
					value: 'TH11060087',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					street: 'SAHA GROUP INDUSTRIAL PARK',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					street: 'NORTH REGION INDUSTRIAL ESTATE',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					name: 'RAYONG OLEFINS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					city: 'SIRACHA, CHONBURI',
					name: 'BANGKOK TOKYO SOCKS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					name: 'KANAGATA (THAILAND) CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					name: 'CHAMP KABIN CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					name: 'W.T.F. CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'SIRACHA, CHONBURI',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.params.city.toLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'BANGSUE, BANGKOK',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					city: 'SIRACHA, CHONBURI',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					city: 'BANGPRAKONG',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					city: 'PRACHINBURI',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					city: 'LAMPHUN',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH postCode', () => {
		const postCodetestCases = ['10800', '20110', '24130', '25110', '51000'];
		postCodetestCases.forEach(async (testCase) => {
			it(`TH company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '10800',
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					postCode: '20110',
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					postCode: '24130',
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					postCode: '25110',
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					postCode: '51000',
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`TH company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '10800',
					street: '1 SIAM CEMENT RD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					postCode: '20110',
					street: '673 MOO 11',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					postCode: '24130',
					street: '80 M.1',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					postCode: '25110',
					street: 'SAHA GROUP INDUSTRIAL PARK',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					postCode: '51000',
					street: 'NORTH REGION INDUSTRIAL ESTATE',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`TH company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '10800',
					name: 'RAYONG OLEFINS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					postCode: '20110',
					name: 'BANGKOK TOKYO SOCKS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					postCode: '24130',
					name: 'KANAGATA (THAILAND) CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					postCode: '25110',
					name: 'CHAMP KABIN CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					postCode: '51000',
					name: 'W.T.F. CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`TH company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '10800',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '20110',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '24130',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '25110',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '51000',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '10800',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					postCode: '20110',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					postCode: '24130',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					postCode: '25110',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					postCode: '51000',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH simpleValue', () => {
		const simpleValuetestCases = ['1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
			'673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
			'80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
			'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
			'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`TH company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=TH&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
					street: '1 SIAM CEMENT RD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
					street: '673 MOO 11',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
					street: '80 M.1',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
					street: 'SAHA GROUP INDUSTRIAL PARK',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
					street: 'NORTH REGION INDUSTRIAL ESTATE',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`TH company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=TH&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
					name: 'RAYONG OLEFINS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
					name: 'BANGKOK TOKYO SOCKS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
					name: 'KANAGATA (THAILAND) CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
					name: 'CHAMP KABIN CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
					name: 'W.T.F. CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`TH company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=TH&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=TH&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: '1 SIAM CEMENT RD, BANGSEU, 10800, BANGSUE, BANGKOK',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					simpleValue: '673 MOO 11, SUKHAPHIBAN 8 RD, NONG KHAM, 20110, SIRACHA, CHONBURI',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					simpleValue: '80 M.1, BANG NA-TRAD RD, HOM SIN, 24130, BANGPRAKONG',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					simpleValue: 'SAHA GROUP INDUSTRIAL PARK, (KABNBURI),117 MOO 5, SUWANNASARN RD.,KABIN BURI, 25110, PRACHINBURI',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					simpleValue: 'NORTH REGION INDUSTRIAL ESTATE, 116 MOOC4, BANKLANG,MUANG, 51000, LAMPHUN',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH street', () => {
		const streettestCases = ['1 SIAM CEMENT RD', '673 MOO 11', '80 M.1', 'SAHA GROUP INDUSTRIAL PARK', 'NORTH REGION INDUSTRIAL ESTATE'];
		streettestCases.forEach(async (testCase) => {
			it(`TH company search with street:${testCase}`, async () => {
				const queryString = `?countries=TH&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: '1 SIAM CEMENT RD',
					name: 'RAYONG OLEFINS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					street: '673 MOO 11',
					name: 'BANGKOK TOKYO SOCKS CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					street: '80 M.1',
					name: 'KANAGATA (THAILAND) CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					street: 'SAHA GROUP INDUSTRIAL PARK',
					name: 'CHAMP KABIN CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					street: 'NORTH REGION INDUSTRIAL ESTATE',
					name: 'W.T.F. CO LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`TH company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=TH&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: '1 SIAM CEMENT RD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					street: '673 MOO 11',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					street: '80 M.1',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02886600',
				},
			},
			{
				params: {
					street: 'SAHA GROUP INDUSTRIAL PARK',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					street: 'NORTH REGION INDUSTRIAL ESTATE',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=TH&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: '1 SIAM CEMENT RD',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					street: '673 MOO 11',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					street: '80 M.1',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					street: 'SAHA GROUP INDUSTRIAL PARK',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					street: 'NORTH REGION INDUSTRIAL ESTATE',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH name', () => {
		const nametestCases = ['RAYONG OLEFINS CO LTD', 'BANGKOK TOKYO SOCKS CO LTD', 'KANAGATA (THAILAND) CO LTD', 'CHAMP KABIN CO LTD', 'W.T.F. CO LTD'];
		nametestCases.forEach(async (testCase) => {
			it(`TH company search with name:${testCase}`, async () => {
				const queryString = `?countries=TH&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'RAYONG OLEFINS CO LTD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					name: 'BANGKOK TOKYO SOCKS CO LTD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					name: 'KANAGATA (THAILAND) CO LTD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					name: 'CHAMP KABIN CO LTD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					name: 'W.T.F. CO LTD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=TH&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'RAYONG OLEFINS CO LTD',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					name: 'BANGKOK TOKYO SOCKS CO LTD',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					name: 'KANAGATA (THAILAND) CO LTD',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					name: 'CHAMP KABIN CO LTD',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					name: 'W.T.F. CO LTD',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`TH company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=TH&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'RAYONG OLEFINS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587716',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'BANGKOK TOKYO SOCKS',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02587260',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'KANAGATA (THAILAND)',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02598642',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'CHAMP KABIN',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02588164',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'W.T.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02599348',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=TH&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('TH tradeName', () => {
		const tradeNametestCases = ['RAYONG OLEFINS', 'BANGKOK TOKYO SOCKS', 'KANAGATA (THAILAND)', 'CHAMP KABIN', 'W.T.F.'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`TH company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=TH&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('TH synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'OR.AKARAPON LTD.,limited',
				},
				expected: {
					key: 'safeNo',
					value: 'TH05027928',
				},
			},
			{
				params: {
					name: 'public liability company OIL COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'TH07273371',
				},
			},
			{
				params: {
					name: 'SIRI limited liability partnership LIMITED PARTNERSHIP',
				},
				expected: {
					key: 'safeNo',
					value: 'TH06275452',
				},
			},
			{
				params: {
					name: '123 trach nhiem huu han LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'TH04549043',
				},
			},
			{
				params: {
					name: 'not-for-profit DECORATION COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'TH05912425',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`TH company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=TH&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'krung thep',
				},
				expected: {
					key: 'city',
					value: 'BANGKOK',
				},
			},
			{
				params: {
					city: 'hkt',
				},
				expected: {
					key: 'city',
					value: 'PHUKET',
				},
			},
			{
				params: {
					city: 'NONG HA Noi',
				},
				expected: {
					key: 'city',
					value: 'NONG HAN',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`TH company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=TH&city=${testCase.params.city}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: '2 THANON CHAYANG kl ',
				},
				expected: {
					key: 'safeNo',
					value: 'TH11198872',
				},
			},
			{
				params: {
					street: '8 Soi georgetown Lea Peaun',
				},
				expected: {
					key: 'safeNo',
					value: 'TH07226897',
				},
			},
			{
				params: {
					street: 'MY RESORT bkk',
				},
				expected: {
					key: 'safeNo',
					value: 'TH11024373',
				},
			},
			{
				params: {
					street: '48 PHUKET city RD',
				},
				expected: {
					key: 'safeNo',
					value: 'TH11318354',
				},
			},
			{
				params: {
					street: 'M.6 NONG HANoi',
				},
				expected: {
					key: 'safeNo',
					value: 'TH02879128',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`TH company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=TH&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});

describe('VN Regression Tests', () => {
	describe('VN company Search', () => {
		it('returns VN Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=VN`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'VN'), true);
		});
	});

	describe('VN id', () => {
		const idtestCases = ['VN-X-VN02619866', 'VN-X-VN10872671', 'VN-X-VN02603142', 'VN-X-VN10873175', 'VN-X-VN13954759'];
		idtestCases.forEach(async (testCase) => {
			it(`VN company search with id:${testCase}`, async () => {
				const queryString = `?countries=VN&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					safeNo: 'VN02619866',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('VN company search with id and safeNo', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					regNo: '2400144465',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('VN company search with id and regNo', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					city: 'BAC GIANG PROV.',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('VN company search with id and city', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					postCode: '221',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('VN company search with id and postCode', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('VN company search with id and simpleValue', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					street: '171 NGUYEN KHAC NHU',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('VN company search with id and street', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('VN company search with id and name', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('VN company search with id and officeType', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'VN-X-VN02619866',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('VN company search with id and tradeName', async () => {
				const queryString = `?countries=VN&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('VN safeNo', () => {
		const safeNotestCases = ['VN02619866', 'VN10872671', 'VN02603142', 'VN10873175', 'VN13954759'];
		safeNotestCases.forEach(async (testCase) => {
			it(`VN company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=VN&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					regNo: '2400144465',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and regNo', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					city: 'BAC GIANG PROV.',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and city', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					postCode: '221',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and postCode', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					street: '171 NGUYEN KHAC NHU',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and street', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and name', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and officeType', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'VN02619866',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('VN company search with safeNo and tradeName', async () => {
				const queryString = `?countries=VN&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('VN regNo', () => {
		const regNotestCases = ['2400144465', '2600382058', '2000354362', '3400476141', '0105525759'];
		regNotestCases.forEach(async (testCase) => {
			it(`VN company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=VN&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '2400144465',
					city: 'BAC GIANG PROV.',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('VN company search with regNo and city', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '2400144465',
					postCode: '221',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('VN company search with regNo and postCode', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '2400144465',
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('VN company search with regNo and simpleValue', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '2400144465',
					street: '171 NGUYEN KHAC NHU',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('VN company search with regNo and street', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '2400144465',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('VN company search with regNo and name', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '2400144465',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('VN company search with regNo and officeType', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: '2400144465',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('VN company search with regNo and tradeName', async () => {
				const queryString = `?countries=VN&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('VN city', () => {
		const citytestCases = ['BAC GIANG PROV.', 'PHU THO', 'CA MAU', 'BINH THUAN', 'HA NOI'];
		citytestCases.forEach(async (testCase) => {
			it(`VN company search with city:${testCase}`, async () => {
				const queryString = `?countries=VN&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					postCode: '221',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					postCode: '217',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					postCode: '82307',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					postCode: '71503',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					postCode: '100000',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					street: '171 NGUYEN KHAC NHU',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					street: '11B GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					street: '169, AREA 7',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					street: '7B HAMLET',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					name: 'AIDS HEALTHCARE FOUNDATION',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.params.city.toLocaleLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'BAC GIANG PROV.',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					city: 'PHU THO',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					city: 'CA MAU',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					city: 'BINH THUAN',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					city: 'HA NOI',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('VN postCode', () => {
		const postCodetestCases = ['221', '217', '82307', '71503', '100000'];
		postCodetestCases.forEach(async (testCase) => {
			it(`VN company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '221',
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					postCode: '217',
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					postCode: '82307',
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					postCode: '71503',
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					postCode: '100000',
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`VN company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '221',
					street: '171 NGUYEN KHAC NHU',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					postCode: '217',
					street: '11B GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					postCode: '82307',
					street: '169, AREA 7',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					postCode: '71503',
					street: '7B HAMLET',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					postCode: '100000',
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`VN company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '221',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					postCode: '217',
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					postCode: '82307',
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					postCode: '71503',
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					postCode: '100000',
					name: 'AIDS HEALTHCARE FOUNDATION',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`VN company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '221',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '217',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '82307',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '71503',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '100000',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '221',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					postCode: '217',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					postCode: '82307',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					postCode: '71503',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					postCode: '100000',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('VN simpleValue', () => {
		const simpleValuetestCases = ['171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
			'11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
			'169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
			'7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
			'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`VN company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=VN&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
					street: '171 NGUYEN KHAC NHU',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
					street: '11B GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
					street: '169, AREA 7',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
					street: '7B HAMLET',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`VN company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=VN&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
					name: 'AIDS HEALTHCARE FOUNDATION',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`VN company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=VN&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=VN&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: '171 NGUYEN KHAC NHU, NGO QUYEN WARD, 22101 BAC GIANG CITY, 221, BAC GIANG PROV.',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					simpleValue: '11B GROUP, ANH DUNG BLOCK, TIEN CAT WARD, 217, PHU THO',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					simpleValue: '169, AREA 7, SONG DOC TOWNLET, TRAN VAN THOI DISTRICT, 82307, CA MAU',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					simpleValue: '7B HAMLET, VINH TAN COMMUNE, TUY PHONG DISTRICT, 71503, BINH THUAN',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					simpleValue: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING, 1 CHAU VAN LIEM, PHU DO WARD, 100000, HA NOI',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('VN street', () => {
		const streettestCases = ['171 NGUYEN KHAC NHU', '169, AREA 7', 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING'];
		streettestCases.forEach(async (testCase) => {
			it(`VN company search with street:${testCase}`, async () => {
				const queryString = `?countries=VN&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: '171 NGUYEN KHAC NHU',
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					street: '11B GROUP',
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					street: '169, AREA 7',
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					street: '7B HAMLET',
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
					name: 'AIDS HEALTHCARE FOUNDATION',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`VN company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=VN&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: '171 NGUYEN KHAC NHU',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					street: '11B GROUP',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					street: '169, AREA 7',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					street: '7B HAMLET',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with street:${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=VN&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: '171 NGUYEN KHAC NHU',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					street: '11B GROUP',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					street: '169, AREA 7',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					street: '7B HAMLET',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					street: 'SHOPHOUSE NO. P1-TM14, MY DINH PEARL BUILDING',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('VN name', () => {
		const nametestCases = ['CONG TY CONG TRINH GIAO THONG BAC GIANG',
			'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
			'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
			'CONG TY TNHH KY THUAT SINH VU JIN TA', 'AIDS HEALTHCARE FOUNDATION'];
		nametestCases.forEach(async (testCase) => {
			it(`VN company search with name:${testCase}`, async () => {
				const queryString = `?countries=VN&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					name: 'AIDS HEALTHCARE FOUNDATION',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=VN&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'CONG TY CONG TRINH GIAO THONG BAC GIANG',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					name: 'CONG TY CO PHAN THUONG MAI VA VAN TAI HOA THAO',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					name: 'CONG TY CO PHAN CHE BIEN THUY SAN XUAT NHAP KHAU SONG DOC',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					name: 'CONG TY TNHH KY THUAT SINH VU JIN TA',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					name: 'AIDS HEALTHCARE FOUNDATION',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('VN officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`VN company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=VN&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'CTY CONG TRINH GT BAC GIANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02619866',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'THUONG MAI VA VAN TAI HOA THAO',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10872671',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'CHE BIEN THUY SAN XNK SONG DOC',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02603142',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'SINH VU JIN TA',
				},
				expected: {
					key: 'safeNo',
					value: 'VN10873175',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'AIDS HEALTHCARE',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13954759',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=VN&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.params.tradeName.toLowerCase()}`), true);
			});
		});
	});

	describe('VN tradeName', () => {
		const tradeNametestCases = ['CTY CONG TRINH GT BAC GIANG', 'THUONG MAI VA VAN TAI HOA THAO', 'CHE BIEN THUY SAN XNK SONG DOC', 'SINH VU JIN TA', 'AIDS HEALTHCARE'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`VN company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=VN&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('VN synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'CONG TY HITACHI , Limited',
				},
				expected: {
					key: 'safeNo',
					value: 'VN11940507',
				},
			},
			{
				params: {
					name: 'jsc public liability company grp',
				},
				expected: {
					key: 'safeNo',
					value: 'VN13982717',
				},
			},
			{
				params: {
					name: 'CONG TY CO PHAN LMK INVESTLINK limited liability partnership',
				},
				expected: {
					key: 'safeNo',
					value: 'VN12317155',
				},
			},
			{
				params: {
					name: 'DANA CORPorations',
				},
				expected: {
					key: 'safeNo',
					value: 'VN02586008',
				},
			},
			{
				params: {
					name: 'ctthtvtl PHUONG KHANG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN11375901',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`VN company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=VN&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'rangoon, rgn REGION',
				},
				expected: {
					key: 'city',
					value: 'YANGON, YANGON REGION',
				},
			},
			{
				params: {
					city: 'saigon',
				},
				expected: {
					key: 'city',
					value: 'HO CHI MINH CITY',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`VN company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=VN&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'KHU kul, ROAD B, CUM 2, INDUSTRIAL PARK CAT LAI',
				},
				expected: {
					key: 'safeNo',
					value: 'VN12671405',
				},
			},
			{
				params: {
					street: 'HAMLET georgetown SANG PENG',
				},
				expected: {
					key: 'safeNo',
					value: 'VN11486859',
				},
			},
			{
				params: {
					street: 'kota kinabalu 3 BA VI',
				},
				expected: {
					key: 'safeNo',
					value: 'VN04027704',
				},
			},
			{
				params: {
					street: '14B HANoi THUYEN , CITY HAN',
				},
				expected: {
					key: 'safeNo',
					value: 'VN11367102',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`VN company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=VN&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});

describe('MM Regression Tests', () => {
	describe('MM company Search', () => {
		it('returns MM Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=MM`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'MM'), true);
		});
	});

	describe('MM id', () => {
		const idtestCases = ['MM-X-MM13171532', 'MM-X-MM13165640', 'MM-X-MM13143897', 'MM-X-MM13157207'];
		idtestCases.forEach(async (testCase) => {
			it(`MM company search with id:${testCase}`, async () => {
				const queryString = `?countries=MM&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					safeNo: 'MM13171532',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('MM company search with id and safeNo', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					regNo: '102747011',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('MM company search with id and regNo', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('MM company search with id and city', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					postCode: '11201',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('MM company search with id and postCode', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('MM company search with id and simpleValue', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					street: 'U CHIT MAUNG ROAD',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('MM company search with id and street', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('MM company search with id and name', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('MM company search with id and officeType', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'MM-X-MM13171532',
					tradeName: 'SHWE DENTI',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('MM company search with id and tradeName', async () => {
				const queryString = `?countries=MM&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MM safeNo', () => {
		const safeNotestCases = ['MM13171532', 'MM13165640', 'MM13143897', 'MM13157207'];
		safeNotestCases.forEach(async (testCase) => {
			it(`MM company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=MM&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					regNo: '102747011',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and regNo', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and city', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					postCode: '11201',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and postCode', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					street: 'U CHIT MAUNG ROAD',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and street', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and name', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and officeType', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'MM13171532',
					tradeName: 'SHWE DENTI',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('MM company search with safeNo and tradeName', async () => {
				const queryString = `?countries=MM&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MM regNo', () => {
		const regNotestCases = ['102747011', '106039712', '101123111', '111789916'];
		regNotestCases.forEach(async (testCase) => {
			it(`MM company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=MM&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '102747011',
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('MM company search with regNo and city', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '102747011',
					postCode: '11201',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('MM company search with regNo and postCode', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '102747011',
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('MM company search with regNo and simpleValue', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '102747011',
					street: 'U CHIT MAUNG ROAD',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('MM company search with regNo and street', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '102747011',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('MM company search with regNo and name', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '102747011',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('MM company search with regNo and officeType', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: '102747011',
					tradeName: 'SHWE DENTI',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('MM company search with regNo and tradeName', async () => {
				const queryString = `?countries=MM&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MM city', () => {
		const citytestCases = ['SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON', 'KYAUKTADA TOWNSHIP', 'AUNG MYAE THAR SAN TOWNSHIP', 'CHIN'];
		citytestCases.forEach(async (testCase) => {
			it(`MM company search with city:${testCase}`, async () => {
				const queryString = `?countries=MM&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					postCode: '11201',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					postCode: '09011',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN',
					postCode: '100101',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13143897',
				},
			},
			{
				params: {
					city: 'CHIN',
					postCode: '03041',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN TOWNSHIP',
					simpleValue: '27ST BETWEEN 69X70, AUNG MYAE THAR SAN TOWNSHIP',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14590749',
				},
			},
			{
				params: {
					city: 'CHIN',
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					street: 'U CHIT MAUNG ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					street: 'U THIRI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN TOWNSHIP',
					street: '27ST BETWEEN 69X70',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14590749',
				},
			},
			{
				params: {
					city: 'CHIN',
					street: 'NO.M-178, KAM HAUK STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					name: 'ROYAL COBBER COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN TOWNSHIP',
					name: 'MZT TRADING COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14590749',
				},
			},
			{
				params: {
					city: 'CHIN',
					name: 'K T Y COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN TOWNSHIP',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'CHIN',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.params.city.toLocaleLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					tradeName: 'SHWE DENTI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					city: 'DAW OU KHU,LOIKAW',
					tradeName: 'ROYAL COBBER',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					city: 'AUNG MYAE THAR SAN TOWNSHIP',
					tradeName: 'MZT TRADING',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14590749',
				},
			},
			{
				params: {
					city: 'CHIN',
					tradeName: 'K T Y',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MM postCode', () => {
		const postCodetestCases = ['11201', '09011', '100101', '03041'];
		postCodetestCases.forEach(async (testCase) => {
			it(`MM company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '11201',
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					postCode: '09011',
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					postCode: '03041',
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`MM company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '11201',
					street: 'U CHIT MAUNG ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					postCode: '09011',
					street: 'U THIRI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					postCode: '03041',
					street: 'NO.M-178, KAM HAUK STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`MM company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '11201',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					postCode: '09011',
					name: 'ROYAL COBBER COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					postCode: '100101',
					name: 'EASTERN PALACE COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13143897',
				},
			},
			{
				params: {
					postCode: '03041',
					name: 'K T Y COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`MM company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '11201',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '09011',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '100101',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '03041',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '11201',
					tradeName: 'SHWE DENTI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					postCode: '09011',
					tradeName: 'ROYAL COBBER',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					postCode: '100101',
					tradeName: 'EASTERN PALACE',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13143897',
				},
			},
			{
				params: {
					postCode: '03041',
					tradeName: 'K T Y',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MM simpleValue', () => {
		const simpleValuetestCases = ['U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
			'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
			'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`MM company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=MM&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					street: 'U CHIT MAUNG ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
					street: 'U THIRI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
					street: 'NO.M-178, KAM HAUK STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`MM company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MM&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
					name: 'ROYAL COBBER COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
					name: 'K T Y COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`MM company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MM&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MM&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: 'U CHIT MAUNG ROAD, NO 37, 11201, SAYA SAN (SOUTH) SANPYA, BAHAN, YANGON',
					tradeName: 'SHWE DENTI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					simpleValue: 'U THIRI, 4, 09011, DAW OU KHU,LOIKAW',
					tradeName: 'ROYAL COBBER',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					simpleValue: 'NO.M-178, KAM HAUK STREET, MYOMA QUARTER, TEETAIN TOWNSHIP, 03041, CHIN',
					tradeName: 'K T Y',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MM street', () => {
		const streettestCases = ['U CHIT MAUNG ROAD', 'U THIRI', 'NO.M-178, KAM HAUK STREET'];
		streettestCases.forEach(async (testCase) => {
			it(`MM company search with street:${testCase}`, async () => {
				const queryString = `?countries=MM&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'U CHIT MAUNG ROAD',
					name: 'SHWE DENTI COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					street: 'U THIRI',
					name: 'ROYAL COBBER COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					street: 'NO.M-178, KAM HAUK STREET',
					name: 'K T Y COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`MM company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MM&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'U CHIT MAUNG ROAD',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'U THIRI',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'NO.M-178, KAM HAUK STREET',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MM&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: 'U CHIT MAUNG ROAD',
					tradeName: 'SHWE DENTI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					street: 'U THIRI',
					tradeName: 'ROYAL COBBER',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					street: 'NO.M-178, KAM HAUK STREET',
					tradeName: 'K T Y',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MM name', () => {
		const nametestCases = ['SHWE DENTI COMPANY LIMITED', 'ROYAL COBBER COMPANY LIMITED', 'EASTERN PALACE COMPANY LIMITED', 'K T Y COMPANY LIMITED'];
		nametestCases.forEach(async (testCase) => {
			it(`MM company search with name:${testCase}`, async () => {
				const queryString = `?countries=MM&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'SHWE DENTI COMPANY LIMITED',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'ROYAL COBBER COMPANY LIMITED',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'EASTERN PALACE COMPANY LIMITED',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'K T Y COMPANY LIMITED',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MM&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'SHWE DENTI COMPANY LIMITED',
					tradeName: 'SHWE DENTI',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13171532',
				},
			},
			{
				params: {
					name: 'ROYAL COBBER COMPANY LIMITED',
					tradeName: 'ROYAL COBBER',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13165640',
				},
			},
			{
				params: {
					name: 'EASTERN PALACE COMPANY LIMITED',
					tradeName: 'EASTERN PALACE',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13143897',
				},
			},
			{
				params: {
					name: 'K T Y COMPANY LIMITED',
					tradeName: 'K T Y',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13157207',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MM officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`MM company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=MM&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'SHWE DENTI',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'ROYAL COBBER',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'EASTERN PALACE',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'K T Y',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MM&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.params.tradeName.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('MM tradeName', () => {
		const tradeNametestCases = ['SHWE DENTI', 'ROYAL COBBER', 'EASTERN PALACE', 'K T Y'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`MM company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=MM&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('MM synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'STANDARD CHARTERED BANK public liability company (REPRESENTATIVE OFFICE)',
				},
				expected: {
					key: 'safeNo',
					value: 'MM03251200',
				},
			},
			{
				params: {
					name: 'limited liability company VIMA COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13179645',
				},
			},
			{
				params: {
					name: 'MYANMAR TERMINAL inc COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13132881',
				},
			},
			{
				params: {
					name: 'GTECH ctcp LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14589397',
				},
			},
			{
				params: {
					name: 'cong ty COmpany LEAF Co LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14646702',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`MM company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MM&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'bassein',
				},
				expected: {
					key: 'city',
					value: 'PATHEIN',
				},
			},
			{
				params: {
					city: 'nyt',
				},
				expected: {
					key: 'city',
					value: 'NAYPYITAW',
				},
			},
			{
				params: {
					city: 'pegu',
				},
				expected: {
					key: 'city',
					value: 'BAGO',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`MM company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=MM&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'bki/207  PIN SIN KONE STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14603398',
				},
			},
			{
				params: {
					street: 'NAYPYIdAW (1) STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13127961',
				},
			},
			{
				params: {
					street: 'rgn ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13131440',
				},
			},
			{
				params: {
					street: 'SOUTH bgo STREET',
				},
				expected: {
					key: 'safeNo',
					value: 'MM14576487',
				},
			},
			{
				params: {
					street: 'NO.(36), bkk HSAI KAT YART',
				},
				expected: {
					key: 'safeNo',
					value: 'MM13135718',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`MM company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MM&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});

describe('MY Regression Tests', () => {
	describe('MY company Search', () => {
		it('returns MY Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=MY`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'MY'), true);
		});
	});

	describe('MY id', () => {
		const idtestCases = ['MY-X-MY10451799', 'MY-X-MY10359644', 'MY-X-MY10792826', 'MY-X-MY12000955'];
		idtestCases.forEach(async (testCase) => {
			it(`MY company search with id:${testCase}`, async () => {
				const queryString = `?countries=MY&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					safeNo: 'MY10451799',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('MY company search with id and safeNo', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					regNo: '608400-W',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('MY company search with id and regNo', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					city: 'KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('MY company search with id and city', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					postCode: '20200',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('MY company search with id and postCode', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('MY company search with id and simpleValue', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					street: 'LOT 4230 TINGKAT 1',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('MY company search with id and street', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('MY company search with id and name', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('MY company search with id and officeType', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCases = [
			{
				params: {
					id: 'MY-X-MY10451799',
					tradeName: 'MAIFA SERVICES',
				},
			},
		];
		idtradeNametestCases.forEach(async (testCase) => {
			it('MY company search with id and tradeName', async () => {
				const queryString = `?countries=MY&id=${testCase.params.id}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MY safeNo', () => {
		const safeNotestCases = ['MY10451799', 'MY10359644', 'MY10792826', 'MY12000955', 'MY06154286'];
		safeNotestCases.forEach(async (testCase) => {
			it(`MY company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=MY&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					regNo: '608400-W',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and regNo', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					city: 'KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and city', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					postCode: '20200',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and postCode', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					street: 'LOT 4230 TINGKAT 1',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and street', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and name', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and officeType', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCases = [
			{
				params: {
					safeNo: 'MY10451799',
					tradeName: 'MAIFA SERVICES',
				},
			},
		];
		safeNotradeNametestCases.forEach(async (testCase) => {
			it('MY company search with safeNo and tradeName', async () => {
				const queryString = `?countries=MY&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MY regNo', () => {
		const regNotestCases = ['608400-W', '103980-V', '956007-V', '1166111-M'];
		regNotestCases.forEach(async (testCase) => {
			it(`MY company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=MY&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '608400-W',
					city: 'KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('MY company search with regNo and city', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '608400-W',
					postCode: '20200',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('MY company search with regNo and postCode', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '608400-W',
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('MY company search with regNo and simpleValue', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '608400-W',
					street: 'LOT 4230 TINGKAT 1',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('MY company search with regNo and street', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '608400-W',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('MY company search with regNo and name', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '608400-W',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('MY company search with regNo and officeType', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCases = [
			{
				params: {
					regNo: '608400-W',
					tradeName: 'MAIFA SERVICES',
				},
			},
		];
		regNotradeNametestCases.forEach(async (testCase) => {
			it('MY company search with regNo and tradeName', async () => {
				const queryString = `?countries=MY&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MY city', () => {
		const citytestCases = ['KUALA TERENGGANU, TERENGGANU', 'MIRI, SARAWAK', 'SABAH', 'SEREMBAN, NEGERI SEMBILAN'];
		citytestCases.forEach(async (testCase) => {
			it(`MY company search with city:${testCase}`, async () => {
				const queryString = `?countries=MY&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					postCode: '20200',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					postCode: '70000',
				},
				expected: {
					key: 'safeNo',
					value: 'MY06161661',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					city: 'MIRI, SARAWAK',
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					city: 'SABAH',
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10518345',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					street: 'LOT 4230 TINGKAT 1',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					city: 'MIRI, SARAWAK',
					street: 'NO.49,BROOKE ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					city: 'SABAH',
					street: '3RD FLOOR, WISMA GEK POH,',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					street: 'NO. 23, GROUND FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10518345',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					city: 'MIRI, SARAWAK',
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					city: 'SABAH',
					name: 'GFG MARKETING SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					name: 'THE MUFFIN HOUSE SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'MIRI, SARAWAK',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'SABAH',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLocaleLowerCase()), true);
			});
		});
		const citytradeNametestCases = [
			{
				params: {
					city: 'KUALA TERENGGANU, TERENGGANU',
					tradeName: 'MAIFA SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					city: 'MIRI, SARAWAK',
					tradeName: 'PACIFIC PROPRIETORS',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					city: 'SABAH',
					tradeName: 'JAWAT BIJAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10792826',
				},
			},
			{
				params: {
					city: 'SEREMBAN, NEGERI SEMBILAN',
					tradeName: 'THE MUFFIN HOUSE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		citytradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MY postCode', () => {
		const postCodetestCases = ['20200', '98000', '88000', '70000'];
		postCodetestCases.forEach(async (testCase) => {
			it(`MY company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '20200',
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					postCode: '98000',
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					postCode: '88000',
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					postCode: '70000',
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10518345',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`MY company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '20200',
					street: 'LOT 4230 TINGKAT 1',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					postCode: '98000',
					street: 'NO.49,BROOKE ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					postCode: '88000',
					street: '3RD FLOOR, WISMA GEK POH,',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					postCode: '70000',
					street: 'NO. 23, GROUND FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10518345',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`MY company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '20200',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					postCode: '98000',
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					postCode: '88000',
					name: 'GFG MARKETING SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					postCode: '70000',
					name: 'THE MUFFIN HOUSE SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`MY company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '20200',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '98000',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '88000',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					postCode: '70000',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetradeNametestCases = [
			{
				params: {
					postCode: '20200',
					tradeName: 'MAIFA SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					postCode: '98000',
					tradeName: 'PACIFIC PROPRIETORS',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					postCode: '88000',
					tradeName: 'JAWAT BIJAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10792826',
				},
			},
			{
				params: {
					postCode: '70000',
					tradeName: 'THE MUFFIN HOUSE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		postCodetradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MY simpleValue', () => {
		const simpleValuetestCases = ['LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
			'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
			'3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
			'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`MY company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=MY&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
					street: 'LOT 4230 TINGKAT 1',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
					street: 'NO.49,BROOKE ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
					street: '3RD FLOOR, WISMA GEK POH,',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10792826',
				},
			},
			{
				params: {
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
					street: 'NO. 23, GROUND FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10518345',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`MY company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MY&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
					name: 'GFG MARKETING SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
					name: 'THE MUFFIN HOUSE SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`MY company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MY&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
					officeType: 'headOffice',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with simpleValue:${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MY&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const simpleValuetradeNametestCases = [
			{
				params: {
					simpleValue: 'LOT 4230 TINGKAT 1, WISMA CHUA AH KEE, OFF JALAN SULTAN ISMAIL, 20200, KUALA TERENGGANU, TERENGGANU',
					tradeName: 'MAIFA SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					simpleValue: 'NO.49,BROOKE ROAD, 98000, MIRI, SARAWAK',
					tradeName: 'PACIFIC PROPRIETORS',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					simpleValue: '3RD FLOOR, WISMA GEK POH,, NO. 18, JALAN HAJI SAMAN,, 88000, SABAH',
					tradeName: 'JAWAT BIJAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10792826',
				},
			},
			{
				params: {
					simpleValue: 'NO. 23, GROUND FLOOR, JALAN CAMPBELL, 70000, SEREMBAN, NEGERI SEMBILAN',
					tradeName: 'THE MUFFIN HOUSE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		simpleValuetradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MY street', () => {
		const streettestCases = ['LOT 4230 TINGKAT 1', 'NO.49,BROOKE ROAD', '3RD FLOOR, WISMA GEK POH,', 'NO. 23, GROUND FLOOR'];
		streettestCases.forEach(async (testCase) => {
			it(`MY company search with street:${testCase}`, async () => {
				const queryString = `?countries=MY&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'LOT 4230 TINGKAT 1',
					name: 'MAIFA SERVICES SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					street: 'NO.49,BROOKE ROAD',
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					street: '3RD FLOOR, WISMA GEK POH,',
					name: 'GFG MARKETING SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10517301',
				},
			},
			{
				params: {
					street: 'NO. 23, GROUND FLOOR',
					name: 'THE MUFFIN HOUSE SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`MY company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MY&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'LOT 4230 TINGKAT 1',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'NO.49,BROOKE ROAD',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: '3RD FLOOR, WISMA GEK POH,',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					street: 'NO. 23, GROUND FLOOR',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MY&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const streettradeNametestCases = [
			{
				params: {
					street: 'LOT 4230 TINGKAT 1',
					tradeName: 'MAIFA SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					street: 'NO.49,BROOKE ROAD',
					tradeName: 'PACIFIC PROPRIETORS',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					street: '3RD FLOOR, WISMA GEK POH,',
					tradeName: 'JAWAT BIJAK',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10792826',
				},
			},
			{
				params: {
					street: 'NO. 23, GROUND FLOOR',
					tradeName: 'THE MUFFIN HOUSE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		streettradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MY name', () => {
		const nametestCases = ['MAIFA SERVICES SDN. BHD.', 'PACIFIC PROPRIETORS SDN.BHD.', 'GFG MARKETING SDN. BHD.', 'THE MUFFIN HOUSE SDN. BHD.'];
		nametestCases.forEach(async (testCase) => {
			it(`MY company search with name:${testCase}`, async () => {
				const queryString = `?countries=MY&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'MAIFA SERVICES SDN. BHD.',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'GFG MARKETING SDN. BHD.',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					name: 'THE MUFFIN HOUSE SDN. BHD.',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=MY&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'MAIFA SERVICES SDN. BHD.',
					tradeName: 'MAIFA SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10451799',
				},
			},
			{
				params: {
					name: 'PACIFIC PROPRIETORS SDN.BHD.',
					tradeName: 'PACIFIC PROPRIETORS',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10359644',
				},
			},
			{
				params: {
					name: 'THE MUFFIN HOUSE SDN. BHD.',
					tradeName: 'THE MUFFIN HOUSE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY12000955',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('MY officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`MY company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=MY&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetradeNametestCases = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'MAIFA SERVICES',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'PACIFIC PROPRIETORS',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'JAWAT BIJAK',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'THE MUFFIN HOUSE',
				},
			},
		];
		officeTypetradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const queryString = `?countries=MY&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.tradingNames[0].toLowerCase() === `${testCase.params.tradeName.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('MY tradeName', () => {
		const tradeNametestCases = ['MAIFA SERVICES', 'PACIFIC PROPRIETORS', 'JAWAT BIJAK', 'THE MUFFIN HOUSE'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`MY company search with tradeName:${testCase}`, async () => {
				const queryString = `?countries=MY&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('MY synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'public liability company DEVELOPMENT sendirian berhad',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10833032',
				},
			},
			{
				params: {
					name: 'SKAL tnhh LOGISTICS SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10822952',
				},
			},
			{
				params: {
					name: 'ITOCHU KENZAI CORPs',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10845656',
				},
			},
			{
				params: {
					name: 'RAZAK SCHOOL OF govt',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10545370',
				},
			},
			{
				params: {
					name: 'INSTA COng ty CONSULTING SDN. BHD.',
				},
				expected: {
					key: 'safeNo',
					value: 'MY06207980',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`MY company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MY&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'kul',
				},
				expected: {
					key: 'city',
					value: 'KUALA LUMPUR',
				},
			},
			{
				params: {
					city: 'NAYPYIDAW, naypyitaw UNION TERRITORY',
				},
				expected: {
					key: 'city',
					value: 'NAYPYIDAW, NAYPYIDAW UNION TERRITORY',
				},
			},
			{
				params: {
					city: 'han',
				},
				expected: {
					key: 'city',
					value: 'HA NOI',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`MY company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=MY&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'LEVEL 21, HOTEL ISTANA kul CITY CENTRE',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10505411',
				},
			},
			{
				params: {
					street: '206,JALAN BURMAH,george town',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10363242',
				},
			},
			{
				params: {
					street: 'THISTLE HOTEL jhb',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10861668',
				},
			},
			{
				params: {
					street: '52C yangon ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'MY10347044',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`MY company search with streetsynonymns: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MY&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	// describe('Autocompletes', () => {
	// 	const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
	// 	alphabetsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphabets:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
	// 	NumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith Numerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const AlphaNumericsTestCases = ['12a'];
	// 	AlphaNumericsTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith alphanumerics:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// 	const SpecialcharacterTestCases = ['@', '!'];
	// 	SpecialcharacterTestCases.forEach(async (testCase) => {
	// 		it(`returns KH company name startwith specialcharacter:${testCase}`, async () => {
	// 			const queryString = `?countryCode=SE&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			response.data.companies.forEach((company) => {
	// 				assert.ok(company.name.toLowerCase().startsWith(testCase), true);
	// 			});
	// 		});
	// 	});
	// });
});
