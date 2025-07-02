import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('SE Regression Tests', async () => {
	describe('SE company Search', () => {
		it('returns SE Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=SE`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'SE'), true);
		});
	});

	describe('SE id', () => {
		const idtestCases = ['SE-0-1020159370', 'SE-0-5590695978', 'SE-0-5590695952', 'SE-1-6310277907', 'SE-0-5592765167'];
		idtestCases.forEach(async (testCase) => {
			it(`SE company search with id:${testCase}`, async () => {
				const queryString = `?countries=SE&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					safeNo: 'SE03721104',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('SE company search with id and safeNo', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					regNo: '7803031256',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('SE company search with id and regNo', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtypetestCases = [
			{
				params: {
					id: 'SE-0-1020159370',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00006762',
				},
			},
			{
				params: {
					id: 'SE-0-5565144408',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					id: 'SE-0-5569967929',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03783533',
				},
			},
			{
				params: {
					id: 'SE-1-7803031256',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03721104',
				},
			},
			{
				params: {
					id: 'SE-1-9697864917',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04208210',
				},
			},
		];
		idtypetestCases.forEach(async (testCase) => {
			it(`NO company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					vatNo: 'SE780303125601',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('SE company search with id and vatNo', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					city: 'MALMÖ',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('SE company search with id and city', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					postCode: '21433',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('SE company search with id and postCode', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					simpleValue: 'Nobelvägen 103 A LGH 1301, 21433 MALMÖ',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('SE company search with id and simpleValue', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					street: 'Nobelvägen 103 A LGH 1301',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('SE company search with id and street', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					name: 'Cian Woodrow Burke',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('SE company search with id and name', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					status: 'active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('SE company search with id and status', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCases = [
			{
				params: {
					id: 'SE-1-7803031256',
					phoneNo: '0370-654352',
				},
			},
		];
		idphoneNotestCases.forEach(async (testCase) => {
			it('SE company search with id and phoneNo', async () => {
				const queryString = `?countries=SE&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('SE safeNo', () => {
		const safeNotestCases = ['SE00006762', 'SE03977213', 'SE03977211', 'SE04462406', 'SE04509237'];
		safeNotestCases.forEach(async (testCase) => {
			it(`SE company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=SE&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					regNo: '1020159370',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and regNo', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotypetestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and type', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCases = [
			{
				params: {
					safeNo: 'SE03271963',
					type: 'SE690703625201',
				},
			},
		];
		safeNovatNotestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and vatNo', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					city: 'STOCKHOLM',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and city', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					postCode: '10311',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and postCode', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					city: 'BOX 2022, 10311 STOCKHOLM',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					city: 'Box 2022',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and street', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					name: 'Ridd.H.Dir Nr 42 Gm och Ms De Bergs Förstärk F',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and name', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					status: 'Other',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and status', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCases = [
			{
				params: {
					safeNo: 'SE00006762',
					name: '0370-654352',
				},
			},
		];
		safeNophoneNotestCases.forEach(async (testCase) => {
			it('SE company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=SE&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('SE regNo', () => {
		const regNotestCases = ['1020159370', '5590695978', '5590695952', '6310277907', '5592765167'];
		regNotestCases.forEach(async (testCase) => {
			it(`SE company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=SE&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNotypetestCases = [
			{
				params: {
					regNo: '1020159370',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00006762',
				},
			},
			{
				params: {
					regNo: '9697868033',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04216542',
				},
			},
			{
				params: {
					regNo: '559-2765076',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04509228',
				},
			},
			{
				params: {
					regNo: '6310277907',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04462406',
				},
			},
			{
				params: {
					regNo: '601031283001',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03974393',
				},
			},
			{
				params: {
					regNo: '8235228',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00003870',
				},
			},
		];
		regNotypetestCases.forEach(async (testCase) => {
			it(`NO company search with regNo: ${testCase.params.regNo} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '6907036252',
					type: 'SE690703625201',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('SE company search with regNo and vatNo', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '6907036252',
					city: 'KRISTINEHAMN',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('SE company search with regNo and city', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '6907036252',
					postCode: '68152',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('SE company search with regNo and postCode', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '6907036252',
					simpleValue: 'Svangatan 18, 68152 KRISTINEHAMN',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('SE company search with regNo and simpleValue', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '6907036252',
					simpleValue: 'Svangatan 18',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('SE company search with regNo and street', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '6907036252',
					name: 'Jan Bohlin',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('SE company search with regNo and name', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '6907036252',
					status: 'active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('SE company search with regNo and status', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCases = [
			{
				params: {
					regNo: '6907036252',
					phoneNo: '0370-654352',
				},
			},
		];
		regNophoneNotestCases.forEach(async (testCase) => {
			it('SE company search with regNo and phoneNo', async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('SE vatNo', () => {
		const vatNotestCases = ['SE851017146801', 'SE520830243901', 'SE559276497001'];
		vatNotestCases.forEach(async (testCase) => {
			it(`SE company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=SE&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNotypetestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					type: 'nonLtd',
				},
			},
		];
		vatNotypetestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and type', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					city: 'UPPSALA',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and city', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					city: '75422',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and postCode', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					simpleValue: 'Råbyvägen 26 LGH 1202, 75422 UPPSALA',
				},
			},
		];
		vatNosimpleValuetestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					street: 'Råbyvägen 26 LGH 1202',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and street', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					name: 'Armine Sinabian',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and name', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					status: 'active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and status', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCases = [
			{
				params: {
					vatNo: 'SE851017146801',
					phoneNo: '070-4426647',
				},
			},
		];
		vatNophoneNotestCases.forEach(async (testCase) => {
			it('SE company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('SE city', () => {
		const citytestCases = ['GÖTEBORG', 'RYDAHOLM', 'SÖDERTÄLJE', 'LUND'];
		citytestCases.forEach(async (testCase) => {
			it(`SE company search with city:${testCase}`, async () => {
				const queryString = `?countries=SE&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citytypetestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00557432',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04402282',
				},
			},
			{
				params: {
					city: 'LUND',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE01267184',
				},
			},
		];
		citytypetestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and type:${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					postCode: '41105',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04194182',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					postCode: '33176',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					postCode: '15271',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04402282',
				},
			},
			{
				params: {
					city: 'LUND',
					postCode: '22592',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03659817',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					simpleValue: 'Operagatan 2 Gate A, 41105 GÖTEBORG',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04194182',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					simpleValue: 'Industrigatan 10, 33176 RYDAHOLM',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					simpleValue: 'Östra kanalgatan 2, 15271 SÖDERTÄLJE',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04402282',
				},
			},
			{
				params: {
					city: 'LUND',
					simpleValue: 'Östra Odarslöv 631, 22592 LUND',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03659817',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					street: 'Operagatan 2 Gate A',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04194182',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					street: 'Industrigatan 10',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					street: 'Östra kanalgatan 2',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04402282',
				},
			},
			{
				params: {
					city: 'LUND',
					street: 'Östra Odarslöv 631',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03659817',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					name: 'AGN Haga AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04194182',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					name: 'Småland Timber Aktiebolag',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					name: 'Södertälje Rehab Kommanditbolag',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04402282',
				},
			},
			{
				params: {
					city: 'LUND',
					name: 'Autohuset CM i Skåne AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03659817',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					status: 'pending',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					status: 'active',
				},
			},
			{
				params: {
					city: 'SÖDERTÄLJE',
					status: 'nonactive',
				},
			},
			{
				params: {
					city: 'LUND',
					status: 'active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLocaleLowerCase()), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'GÖTEBORG',
					phoneNo: '072-3037185',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04194182',
				},
			},
			{
				params: {
					city: 'RYDAHOLM',
					phoneNo: '0472-617200',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00599616',
				},
			},
			{
				params: {
					city: 'LUND',
					phoneNo: '046-169000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00567753',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE postCode', () => {
		const postCodetestCases = ['40241', '19255', '86342', '22104', '10311'];
		postCodetestCases.forEach(async (testCase) => {
			it(`SE company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodetypetestCases = [
			{
				params: {
					postCode: '40241',
					type: 'Ltd',
				},
			},
			{
				params: {
					postCode: '19255',
					type: 'Ltd',
				},
			},
			{
				params: {
					postCode: '86342',
					type: 'NonLtd',
				},
			},
			{
				params: {
					postCode: '22104',
					type: 'NonLtd',
				},
			},
			{
				params: {
					postCode: '10311',
					type: 'Ltd',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '40241',
					simpleValue: 'Box 12086, 40241 GÖTEBORG',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03783528',
				},
			},
			{
				params: {
					postCode: '19255',
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					postCode: '86342',
					simpleValue: 'Huli 152, 86342 SUNDSVALL',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					postCode: '22104',
					simpleValue: 'Box 1136, 22104 LUND',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
			{
				params: {
					postCode: '10311',
					simpleValue: 'Box 2016, 10311 STOCKHOLM',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04344649',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '40241',
					street: 'Box 12086',
				},
				expected: {
					key: 'safeNo',
					value: 'SE01165655',
				},
			},
			{
				params: {
					postCode: '19255',
					street: 'Orrvägen 26',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					postCode: '86342',
					street: 'Huli 152',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					postCode: '22104',
					street: 'Box 1136',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '40241',
					name: 'Slutplattan SAVMI 115404 AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04500597',
				},
			},
			{
				params: {
					postCode: '19255',
					name: 'RT Inreco Göteborg AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					postCode: '86342',
					name: 'Marcus Andersson Transport AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					postCode: '22104',
					name: 'Hotell och Restaurang Aktiebolaget Grand i Lund',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
			{
				params: {
					postCode: '10311',
					name: 'Accepta Vi AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04344649',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '40241',
					status: 'Pending',
				},
			},
			{
				params: {
					postCode: '19255',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '86342',
					status: 'NonActive',
				},
			},
			{
				params: {
					postCode: '22104',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '10311',
					status: 'Active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '19255',
					phoneNo: '031-3872404',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					postCode: '86342',
					phoneNo: '070-5795362',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00533098',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE simpleValue', () => {
		const simpleValuetestCases = ['C/O Bolagsstiftarna AB Box 12086, 40241 GÖTEBORG', 'Orrvägen 26, 19255 SOLLENTUNA', 'Huli 152, 86342 SUNDSVALL', 'Box 1136, 22104 LUND'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: 'C/O Bolagsstiftarna AB Box 12086, 40241 GÖTEBORG',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04153795',
				},
			},
			{
				params: {
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					simpleValue: 'Huli 152, 86342 SUNDSVALL',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					simpleValue: 'Box 1136, 22104 LUND',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE02256171',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'C/O Gustaf Adlercreutz Fannydalsv 34, 13141 NACKA',
					street: 'Fannydalsv 34',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00006752',
				},
			},
			{
				params: {
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
					street: 'Orrvägen 26',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					simpleValue: 'Huli 152, 86342 SUNDSVALL',
					street: 'Huli 152',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					simpleValue: 'Box 1136, 22104 LUND',
					street: 'Box 1136',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'C/O Bolagsstiftarna AB Box 12086, 40241 GÖTEBORG',
					name: 'Slutplattan SAVMI 115404 AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04500597',
				},
			},
			{
				params: {
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
					name: 'Norsecraft Geo Position AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					simpleValue: 'Huli 152, 86342 SUNDSVALL',
					name: 'Marcus Andersson Transport AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					simpleValue: 'Box 1136, 22104 LUND',
					name: 'Hotell och Restaurang Aktiebolaget Grand i Lund',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'C/O Gustaf Adlercreutz Fannydalsv 34, 13141 NACKA',
					status: 'Other',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00006752',
				},
			},
			{
				params: {
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
					status: 'nonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					simpleValue: 'Huli 152, 86342 SUNDSVALL',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					simpleValue: 'Box 1136, 22104 LUND',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue:${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: 'Orrvägen 26, 19255 SOLLENTUNA',
					phoneNo: '031-3872404',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					simpleValue: 'Box 1136, 22104 LUND',
					phoneNo: '046-2117010',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE street', () => {
		const streettestCases = ['Box 12086', 'Orrvägen 26', 'Huli 152', 'Box 1136'];
		streettestCases.forEach(async (testCase) => {
			it(`SE company search with street:${testCase}`, async () => {
				const queryString = `?countries=SE&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: 'Box 12086',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04153795',
				},
			},
			{
				params: {
					street: 'Orrvägen 26',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					street: 'Huli 152',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					street: 'Box 1136',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE02256171',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`SE company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&street=${testCase.params.street}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'Box 12086',
					name: 'Startplattan 8908 Kommanditbolag',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04153795',
				},
			},
			{
				params: {
					street: 'Orrvägen 26',
					name: 'RT Inreco Göteborg AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					street: 'Huli 152',
					name: 'Marcus Andersson Transport AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					street: 'Box 1136',
					name: 'Förvaltningsbolaget Grand Hotell i Lund Kommanditbolag',
				},
				expected: {
					key: 'safeNo',
					value: 'SE02256171',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`SE company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=SE&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'Skolgatan 21',
					status: 'pending',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03456114',
				},
			},
			{
				params: {
					street: 'Orrvägen 26',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					street: 'Huli 152',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					street: 'Box 1136',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`SE company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=SE&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'Orrvägen 26',
					phoneNo: '031-3872404',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03422502',
				},
			},
			{
				params: {
					street: 'Huli 152',
					phoneNo: '070-6217087',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03308554',
				},
			},
			{
				params: {
					street: 'Box 1136',
					phoneNo: '046-2117010',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE name', () => {
		const nametestCases = ['Startplattan 8908 Kommanditbolag', 'RT Inreco Göteborg AB', 'Marcus Andersson Transport AB', 'Förvaltningsbolaget Grand Hotell i Lund Kommanditbolag'];
		nametestCases.forEach(async (testCase) => {
			it(`SE company search with name:${testCase}`, async () => {
				const queryString = `?countries=SE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'Startplattan 8908 Kommanditbolag',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04153795',
				},
			},
			{
				params: {
					name: 'RT Inreco Göteborg AB',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					name: 'Marcus Andersson Transport AB',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					name: 'Förvaltningsbolaget Grand Hotell i Lund Kommanditbolag',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE01190330',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`SE company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&name=${testCase.params.name}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'Startplattan 8908 Kommanditbolag',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04153795',
				},
			},
			{
				params: {
					name: 'RT Inreco Göteborg AB',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03587354',
				},
			},
			{
				params: {
					name: 'Marcus Andersson Transport AB',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04220002',
				},
			},
			{
				params: {
					name: 'Bilverkstan i Älta AB',
					status: 'Pending',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04511637',
				},
			},
			{
				params: {
					name: 'Profitmetrics Aps',
					status: 'Other',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04510887',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`SE company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=SE&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'R T Inreco AB',
					phoneNo: '08-6267320',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00999210',
				},
			},
			{
				params: {
					name: 'Ingemar Andersson Timmertransport AB',
					phoneNo: '070-6217087',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03308554',
				},
			},
			{
				params: {
					name: 'Hotell och Restaurang Aktiebolaget Grand i Lund',
					phoneNo: '046-2117010',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00729626',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it('SE company search with name and phoneNo', async () => {
				const queryString = `?countries=SE&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE status', () => {
		const statustestCases = ['Active', 'NonActive', 'Pending', 'Other'];
		statustestCases.forEach(async (testCase) => {
			it(`SE company search with status:${testCase}`, async () => {
				const queryString = `?countries=SE&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const statustypetestCases = [
			{
				params: {
					status: 'Active',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'Active',
					type: 'nonLtd',
				},
			},
			{
				params: {
					status: 'NonActive',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'NonActive',
					type: 'nonLtd',
				},
			},
			{
				params: {
					status: 'Pending',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'Pending',
					type: 'NonLtd',
				},
			},
			{
				params: {
					status: 'Other',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'Other',
					type: 'NonLtd',
				},
			},
		];
		statustypetestCases.forEach(async (testCase) => {
			it(`SE company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check that the status of all companies is correct
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === testCase.params.status.toLowerCase()), true);
				// Check that all companies have the correct type
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === testCase.params.type.toLowerCase()), true);
			});
		});
		const statusphoneNotestCases = [
			{
				params: {
					status: 'Active',
					phoneNo: '08-6267320',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00999210',
				},
			},
			{
				params: {
					status: 'Other',
					phoneNo: '031-233199',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04548945',
				},
			},
		];
		statusphoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with status: ${testCase.params.status} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&status=${testCase.params.status}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE type', () => {
		const typetestCases = ['Ltd', 'NonLtd'];
		typetestCases.forEach(async (testCase) => {
			it(`SE company search with type:${testCase}`, async () => {
				const queryString = `?countries=SE&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
		const phoneNotypetestCases = [
			{
				params: {
					phoneNo: '08-6267320',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00999210',
				},
			},
			{
				params: {
					phoneNo: '060-563414',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04462406',
				},
			},
			{
				params: {
					phoneNo: '073-0659423',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04509429',
				},
			},
		];
		phoneNotypetestCases.forEach(async (testCase) => {
			it(`SE company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=SE&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE phoneNo', () => {
		const phoneNotestCases = ['08-6267320', '070-6217087', '046-2117010'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=SE&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.telephone === `${testCase}`), true);
			});
		});
	});

	describe('SE partial matches', () => {
		const partialvatNotestCases = [
			{
				params: {
					vatNo: 'SE810717469301',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03721122',
				},
			},
			{
				params: {
					vatNo: '810717469301',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03721122',
				},
			},
		];
		partialvatNotestCases.forEach(async (testCase) => {
			it(`SE company search with partialvatNo: ${testCase.params.vatNo}`, async () => {
				const queryString = `?countries=SE&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialpostCodetestCases = [
			{
				params: {
					postCode: '412 50',
					name: 'creditsafe',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					postCode: '41250',
					name: 'creditsafe',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					postCode: '41',
					name: 'creditsafe',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					postCode: '412',
					name: 'creditsafe',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`SE company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=SE&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialphoneNotestCases = [
			{
				params: {
					phoneNo: '317255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '7255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '46317255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '0046317255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			}, {
				params: {
					phoneNo: '460317255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '0317255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '031 725 5000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					phoneNo: '031-7255000',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
		];
		partialphoneNotestCases.forEach(async (testCase) => {
			it(`SE company search with partialphoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=SE&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialregNotestCases = [
			{
				params: {
					regNo: '5508121232',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00546943',
				},
			},
			{
				params: {
					regNo: '550812123201',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00546943',
				},
			},
		];
		partialregNotestCases.forEach(async (testCase) => {
			it(`SE company search with partialregNo: ${testCase.params.regNo}`, async () => {
				const queryString = `?countries=SE&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('SE synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'Creditsafe AKTIEBOLAG',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00916021',
				},
			},
			{
				params: {
					name: 'Syskon karlick AB',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03313004',
				},
			},
			{
				params: {
					name: 'SVEN ERIK avven',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00313466',
				},
			},
			{
				params: {
					name: 'Region Norr botten',
				},
				expected: {
					key: 'safeNo',
					value: 'SE00023098',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`SE company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=SE&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'gbg',
				},
				expected: {
					key: 'city',
					value: 'GÖTEBORG',
				},
			},
			{
				params: {
					city: 'hbg',
				},
				expected: {
					key: 'city',
					value: 'helsingborg',
				},
			},
			{
				params: {
					city: 'sthlm',
				},
				expected: {
					key: 'city',
					value: 'stockholm',
				},
			},
			{
				params: {
					city: 'scania-TRANÅS',
				},
				expected: {
					key: 'city',
					value: 'SKÅNE-TRANÅS',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`SE company search with citysynonym: ${testCase.params.city}`, async () => {
				const queryString = `?countries=SE&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === testCase.expected.value.toLowerCase()), true);
			});
		});
		const addressconjoinedsynonymtestCases = [
			{
				params: {
					street: 'Tellusg. 8',
				},
				expected: {
					key: 'safeNo',
					value: 'SE04114610',
				},
			},
			{
				params: {
					street: 'Lidaled',
				},
				expected: {
					key: 'safeNo',
					value: 'SE01200539',
				},
			},
			{
				params: {
					street: 'Nordhavnskajen',
				},
				expected: {
					key: 'safeNo',
					value: 'SE03907293',
				},
			},
			{
				params: {
					street: 'Gånsvikshamnen',
				},
				expected: {
					key: 'safeNo',
					value: 'SE01166006',
				},
			},
		];
		addressconjoinedsynonymtestCases.forEach(async (testCase) => {
			it(`SE company search with streetconjoined: ${testCase.params.street}`, async () => {
				const queryString = `?countries=SE&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns SE company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=SE&name=${testCase}`;
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
			it(`returns SE company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=SE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphaNumericsTestCases = ['12a'];
		AlphaNumericsTestCases.forEach(async (testCase) => {
			it(`returns SE company name startwith alphanumerics:${testCase}`, async () => {
				const queryString = `?countryCode=SE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const SpecialcharacterTestCases = ['!'];
		SpecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns SE company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=SE&name=${testCase}`;
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
