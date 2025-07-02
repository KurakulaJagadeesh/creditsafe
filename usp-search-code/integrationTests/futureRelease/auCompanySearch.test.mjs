import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('AU Regression tests', async () => {
	describe('AU id searches', () => {
		const idtestCases = ['AU-0-633072849', 'AU-0-120421356'];
		idtestCases.forEach(async (testCase) => {
			it(`AU company search with id:${testCase}`, async () => {
				const queryString = `?countries=AU&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					safeNo: 'AU0006688186',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('AU company search with id and safeNo', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					regNo: '120421356',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('AU company search with id and regNo', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					vatNo: '38120421356',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('AU company search with id and vatNo', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					name: 'BUSY BROS PTY LTD',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('AU company search with id and name', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					postCode: '6153',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('AU company search with id and postCode', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'AU-0-120421356',
					province: 'WA',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('AU company search with id and province', async () => {
				const queryString = `?countries=AU&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AU safeNo searches', () => {
		const safeNotestCases = ['AU0016130480', 'AU0006688186'];
		safeNotestCases.forEach(async (testCase) => {
			it(`AU company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=AU&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'AU0006688186',
					regNo: '120421356',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('AU company search with safeNo and regNo', async () => {
				const queryString = `?countries=AU&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCases = [
			{
				params: {
					safeNo: 'AU0006688186',
					vatNo: '38120421356',
				},
			},
		];
		safeNovatNotestCases.forEach(async (testCase) => {
			it('AU company search with safeNo and vatNo', async () => {
				const queryString = `?countries=AU&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'AU0006688186',
					name: 'BUSY BROS PTY LTD',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('AU company search with safeNo and name', async () => {
				const queryString = `?countries=AU&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'AU0006688186',
					postCode: '6153',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('AU company search with safeNo and postCode', async () => {
				const queryString = `?countries=AU&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'AU0006688186',
					province: 'WA',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('AU company search with safeNo and province', async () => {
				const queryString = `?countries=AU&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidsafeNotestCases = ['AU001613048', 'A70016130480', 'AU 016130480'];
		invalidsafeNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid safeNo:${testCase}`, async () => {
				const queryString = `?countries=AU&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
	});

	describe('AU regNo searches', () => {
		const regNotestCases = ['633072849', '120421356'];
		regNotestCases.forEach(async (testCase) => {
			it(`AU company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=AU&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '120421356',
					vatNo: '38120421356',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('AU company search with regNo and vatNo', async () => {
				const queryString = `?countries=AU&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '120421356',
					name: 'BUSY BROS PTY LTD',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('AU company search with regNo and name', async () => {
				const queryString = `?countries=AU&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '120421356',
					postCode: '6153',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('AU company search with regNo and postCode', async () => {
				const queryString = `?countries=AU&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '120421356',
					province: 'WA',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('AU company search with regNo and province', async () => {
				const queryString = `?countries=AU&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidregNotestCases = ['63307284', '6330728490', '63307284a'];
		invalidregNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid regNo:${testCase}`, async () => {
				const queryString = `?countries=AU&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
	});

	describe('AU vatNo searches', () => {
		const vatNotestCases = ['38120421356'];
		vatNotestCases.forEach(async (testCase) => {
			it(`AU company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=AU&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: '38120421356',
					name: 'BUSY BROS PTY LTD',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('AU company search with vatNo and name', async () => {
				const queryString = `?countries=AU&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: '38120421356',
					postCode: '6153',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('AU company search with vatNo and postCode', async () => {
				const queryString = `?countries=AU&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCases = [
			{
				params: {
					vatNo: '38120421356',
					province: 'WA',
				},
			},
		];
		vatNoprovincetestCases.forEach(async (testCase) => {
			it('AU company search with vatNo and province', async () => {
				const queryString = `?countries=AU&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const invalidvatNotestCases = ['3812042135', '381204213566', '3812042135a'];
		invalidvatNotestCases.forEach(async (testCase) => {
			it(`IE company search with invalid vatNo:${testCase}`, async () => {
				const queryString = `?countries=AU&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
			});
		});
	});

	describe('AU name searches', () => {
		const nametestCases = ['CREDIT SAVVY PTY LTD', 'BUSY BROS PTY LTD'];
		nametestCases.forEach(async (testCase) => {
			it(`AU company search with name:${testCase}`, async () => {
				const queryString = `?countries=AU&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const namepostCodetestCases = [
			{
				params: {
					name: 'CREDIT SAVVY PTY LTD',
					postCode: '2000',
				},
				expected: {
					safeNo: 'AU0016130480',
				},
			},
			{
				params: {
					name: 'BUSY BROS PTY LTD',
					postCode: '6153',
				},
				expected: {
					safeNo: 'AU0006688186',
				},
			},
		];
		namepostCodetestCases.forEach(async (testCase) => {
			it(`AU company search with name: ${testCase.params.name} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=AU&name=${testCase.params.name}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const nameprovincetestCases = [
			{
				params: {
					name: 'CREDIT SAVVY PTY LTD',
					province: 'NSW',
				},
				expected: {
					safeNo: 'AU0016130480',
				},
			},
			{
				params: {
					name: 'BUSY BROS PTY LTD',
					province: 'WA',
				},
				expected: {
					safeNo: 'AU0006688186',
				},
			},
		];
		nameprovincetestCases.forEach(async (testCase) => {
			it(`AU company search with name: ${testCase.params.name} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=AU&name=${testCase.params.name}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('AU postCode searches', () => {
		const postCodetestCases = ['2000', '6153'];
		postCodetestCases.forEach(async (testCase) => {
			it(`AU company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=AU&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '2000',
					province: 'NSW',
				},
			},
			{
				params: {
					postCode: '6153',
					province: 'WA',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`AU company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=AU&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
	});

	describe('AU province searches', () => {
		const provincetestCases = ['NSW', 'WA'];
		provincetestCases.forEach(async (testCase) => {
			it(`AU company search with province:${testCase}`, async () => {
				const queryString = `?countries=AU&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase}`), true);
			});
		});
	});

	describe('AU synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'SMSJANE proprietary limited PTY LTD',
				},
				expected: {
					name: 'SMSJANE PTYLTD PTY LTD',
				},
			},
			{
				params: {
					name: 'registeredbusiness REFRIGERATION',
				},
				expected: {
					name: 'R B REFRIGERATION',
				},
			},
			{
				params: {
					name: 'australian business number FILE',
				},
				expected: {
					name: 'ABN FILE',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`AU company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=AU&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
	});
});
