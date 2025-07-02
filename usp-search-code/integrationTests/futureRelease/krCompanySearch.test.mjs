import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('KR Regression tests', async () => {
	describe('KR id searches', () => {
		const idtestCases = ['KR-0-4388600214', 'KR-1-2677100224'];
		idtestCases.forEach(async (testCase) => {
			it(`KR company search with id:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase}`), true);
			});
		});
		const idtypetestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					type: 'Ltd',
				},
			},
			{
				params: {
					id: 'KR-1-2677100224',
					type: 'NonLtd',
				},
			},
		];
		idtypetestCases.forEach(async (testCase) => {
			it(`KR company search with id:${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase.params.id}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					regNo: '1345110274370',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('KR company search with id and regNo', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					vatNo: '4388600214',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('KR company search with id and vatNo', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					safeNo: 'KR02142361',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('KR company search with id and safeNo', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					city: 'YONGIN-SI',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('KR company search with id and city', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					postCode: '16869',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('KR company search with id and postCode', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					province: 'GYEONGGI',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('KR company search with id and province', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with id and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					street: '2725-2 YONGGU-DAERO',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('KR company search with id and street', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idexacttestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					exact: 'true',
				},
			},
		];
		idexacttestCases.forEach(async (testCase) => {
			it(`KR company search with id:${testCase} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase.params.id}`), true);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					name: 'CREDITMENT CO.,LTD.',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('KR company search with id and name', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					phoneNo: '02-3664-8801',
				},
			},
		];
		idphoneNotestCases.forEach(async (testCase) => {
			it('KR company search with id and phoneNo', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'KR-0-4388600214',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('KR company search with id and status', async () => {
				const queryString = `?countries=KR&pageSize=200&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KR regNo searches', () => {
		const regNotestCases = ['1345110274370', '1101140247913'];
		regNotestCases.forEach(async (testCase) => {
			it(`KR company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNotypetestCases = [
			{
				params: {
					regNo: '1345110274370',
					type: 'Ltd',
				},
			},
		];
		regNotypetestCases.forEach(async (testCase) => {
			it(`KR company search with regNo:${testCase} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '1345110274370',
					vatNo: '4388600214',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('KR company search with regNo and vatNo', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosafeNotestCases = [
			{
				params: {
					regNo: '1345110274370',
					safeNo: 'KR02142361',
				},
			},
		];
		regNosafeNotestCases.forEach(async (testCase) => {
			it('KR company search with regNo and safeNo', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '1345110274370',
					city: 'YONGIN-SI',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('KR company search with regNo and city', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '1345110274370',
					postCode: '16869',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('KR company search with regNo and postCode', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '1345110274370',
					province: 'GYEONGGI',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('KR company search with regNo and province', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '1345110274370',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with regNo and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '1345110274370',
					street: '2725-2 YONGGU-DAERO',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('KR company search with regNo and street', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoexacttestCases = [
			{
				params: {
					regNo: '1345110274370',
					exact: 'true',
				},
			},
		];
		regNoexacttestCases.forEach(async (testCase) => {
			it(`KR company search with regNo:${testCase.params.regNo} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '1345110274370',
					name: 'CREDITMENT CO.,LTD.',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('KR company search with regNo and name', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCases = [
			{
				params: {
					regNo: '1345110274370',
					phoneNo: '02-3664-8801',
				},
			},
		];
		regNophoneNotestCases.forEach(async (testCase) => {
			it('KR company search with regNo and phoneNo', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '1345110274370',
					status: 'Active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('KR company search with regNo and status', async () => {
				const queryString = `?countries=KR&pageSize=200&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KR vatNo searches', () => {
		const vatNotestCases = ['4388600214', '2677100224'];
		vatNotestCases.forEach(async (testCase) => {
			it(`KR company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNotypetestCases = [
			{
				params: {
					vatNo: '4388600214',
					type: 'Ltd',
				},
			},
		];
		vatNotypetestCases.forEach(async (testCase) => {
			it(`KR company search with vatNo:${testCase} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosafeNotestCases = [
			{
				params: {
					vatNo: '4388600214',
					safeNo: 'KR02142361',
				},
			},
		];
		vatNosafeNotestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and safeNo', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: '4388600214',
					city: 'YONGIN-SI',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and city', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: '4388600214',
					postCode: '16869',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and postCode', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCases = [
			{
				params: {
					vatNo: '4388600214',
					province: 'GYEONGGI',
				},
			},
		];
		vatNoprovincetestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and province', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCases = [
			{
				params: {
					vatNo: '4388600214',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI',
				},
			},
		];
		vatNosimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: '4388600214',
					street: '2725-2 YONGGU-DAERO',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and street', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoexacttestCases = [
			{
				params: {
					vatNo: '4388600214',
					exact: 'true',
				},
			},
		];
		vatNoexacttestCases.forEach(async (testCase) => {
			it(`KR company search with vatNo:${testCase.params.vatNo} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: '4388600214',
					name: 'CREDITMENT CO.,LTD.',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and name', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCases = [
			{
				params: {
					vatNo: '4388600214',
					phoneNo: '02-3664-8801',
				},
			},
		];
		vatNophoneNotestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: '4388600214',
					status: 'Active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('KR company search with vatNo and status', async () => {
				const queryString = `?countries=KR&pageSize=200&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KR safeNo searches', () => {
		const safeNotestCases = ['KR02142361', 'KR05149501'];
		safeNotestCases.forEach(async (testCase) => {
			it(`KR company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNotypetestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCases.forEach(async (testCase) => {
			it(`KR company search with safeNo:${testCase} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					city: 'YONGIN-SI',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and city', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					postCode: '16869',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and postCode', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					province: 'GYEONGGI',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and province', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					street: '2725-2 YONGGU-DAERO',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and street', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoexacttestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					exact: 'true',
				},
			},
		];
		safeNoexacttestCases.forEach(async (testCase) => {
			it(`KR company search with safeNo:${testCase.params.safeNo} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.safeNo === `${testCase.params.safeNo}`), true);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					name: 'CREDITMENT CO.,LTD.',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and name', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					phoneNo: '02-3664-8801',
				},
			},
		];
		safeNophoneNotestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'KR02142361',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('KR company search with safeNo and status', async () => {
				const queryString = `?countries=KR&pageSize=200&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('KR city searches', () => {
		const citytestCases = ['YONGIN-SI', 'GOYANG-SI'];
		citytestCases.forEach(async (testCase) => {
			it(`KR company search with city:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const citytypetestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					type: 'Ltd',
				},
			},
		];
		citytypetestCases.forEach(async (testCase) => {
			it(`KR company search with city:${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					postCode: '16869',
				},
				expected: {
					safeNo: 'KR04861092',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					postCode: '10325',
				},
				expected: {
					safeNo: 'KR05031131',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`KR company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					province: 'GYEONGGI',
				},
				expected: {
					safeNo: 'KR05154814',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					province: 'GYEONGGI',
				},
				expected: {
					safeNo: 'KR05147459',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it(`KR company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
				},
				expected: {
					safeNo: 'KR01149272',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with city and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					street: '2725-2 YONGGU-DAERO',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					street: '79 WI CITY 4-RO',
				},
				expected: {
					safeNo: 'KR01149272',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`KR company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityexacttestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					exact: 'false',
				},
			},
		];
		cityexacttestCases.forEach(async (testCase) => {
			it(`KR company search with city:${testCase.params.city} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					name: 'CREDITMENT CO.,LTD.',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					name: 'Y2K RENTAL COMPANY',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`KR company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					phoneNo: '0319665380',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'YONGIN-SI',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'GOYANG-SI',
					status: 'Active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it('KR company search with city and status', async () => {
				const queryString = `?countries=KR&pageSize=200&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR postCode searches', () => {
		const postCodetestCases = ['16869', '10325'];
		postCodetestCases.forEach(async (testCase) => {
			it(`KR company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodetypetestCases = [
			{
				params: {
					postCode: '16869',
					type: 'Ltd',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`KR company search with postCode:${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '16869',
					province: 'GYEONGGI',
				},
				expected: {
					safeNo: 'KR04861092',
				},
			},
			{
				params: {
					postCode: '10325',
					province: 'GYEONGGI',
				},
				expected: {
					safeNo: 'KR05031131',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`KR company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '16869',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					postCode: '10325',
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
				},
				expected: {
					safeNo: 'KR01149272',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with postCode and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '16869',
					street: '2725-2 YONGGU-DAERO',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					postCode: '10325',
					street: '79 WI CITY 4-RO',
				},
				expected: {
					safeNo: 'KR01149272',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`KR company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodeexacttestCases = [
			{
				params: {
					postCode: '16869',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '10325',
					exact: 'false',
				},
			},
		];
		postCodeexacttestCases.forEach(async (testCase) => {
			it(`KR company search with postCode:${testCase.params.postCode} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '16869',
					name: 'CREDITMENT CO.,LTD.',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					postCode: '10325',
					name: 'Y2K RENTAL COMPANY',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`KR company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '16869',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					postCode: '10325',
					phoneNo: '0319665380',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '16869',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '10325',
					status: 'Active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it('KR company search with postCode and status', async () => {
				const queryString = `?countries=KR&pageSize=200&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR province searches', () => {
		const provincetestCases = ['GYEONGGI', 'SEOUL'];
		provincetestCases.forEach(async (testCase) => {
			it(`KR company search with province:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincetypetestCases = [
			{
				params: {
					province: 'GYEONGGI',
					type: 'Ltd',
				},
			},
		];
		provincetypetestCases.forEach(async (testCase) => {
			it(`KR company search with province:${testCase.params.province} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'GYEONGGI',
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					province: 'SEOUL',
					simpleValue: '107 SINDORIM-RO 11GA-GIL, GURO-GU, SEOUL',
				},
				expected: {
					safeNo: 'KR05119692',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it('KR company search with province and simpleValue', async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'GYEONGGI',
					street: '2725-2 YONGGU-DAERO',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					province: 'SEOUL',
					street: '107 SINDORIM-RO 11GA-GIL',
				},
				expected: {
					safeNo: 'KR05119692',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`KR company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provinceexacttestCases = [
			{
				params: {
					province: 'GYEONGGI',
					exact: 'true',
				},
			},
			{
				params: {
					province: 'SEOUL',
					exact: 'false',
				},
			},
		];
		provinceexacttestCases.forEach(async (testCase) => {
			it(`KR company search with province:${testCase.params.province} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'GYEONGGI',
					name: 'CREDITMENT CO.,LTD.',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					province: 'SEOUL',
					name: 'BIBIANRI HAIR',
				},
				expected: {
					safeNo: 'KR05119692',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`KR company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provincephoneNotestCases = [
			{
				params: {
					province: 'GYEONGGI',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					province: 'SEOUL',
					phoneNo: '02-747-0221',
				},
				expected: {
					safeNo: 'KR05121970',
				},
			},
		];
		provincephoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with province: ${testCase.params.province} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'GYEONGGI',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'SEOUL',
					status: 'NonActive',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it('KR company search with province and status', async () => {
				const queryString = `?countries=KR&pageSize=200&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR simpleValue searches', () => {
		const simpleValuetestCases = ['2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI', '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					type: 'Ltd',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue:${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					street: '2725-2 YONGGU-DAERO',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
					street: '79 WI CITY 4-RO',
				},
				expected: {
					safeNo: 'KR01149272',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValueexacttestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
					exact: 'true',
				},
			},
		];
		simpleValueexacttestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue:${testCase.params.simpleValue} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					name: 'CREDITMENT CO.,LTD.',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
					name: 'Y2K RENTAL COMPANY',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
					phoneNo: '0319665380',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: '2725-2 YONGGU-DAERO, SUJI-GU, YONGIN-SI, GYEONGGI',
					status: 'Active',
				},
			},
			{
				params: {
					simpleValue: '79 WI CITY 4-RO, ILSANDONG-GU, GOYANG-SI, GYEONGGI',
					status: 'Active',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it('KR company search with simpleValue and status', async () => {
				const queryString = `?countries=KR&pageSize=200&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR street searches', () => {
		const streettestCases = ['2725-2 YONGGU-DAERO', '79 WI CITY 4-RO'];
		streettestCases.forEach(async (testCase) => {
			it(`KR company search with street:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: '2725-2 YONGGU-DAERO',
					type: 'Ltd',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`KR company search with street:${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase.params.street}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetexacttestCases = [
			{
				params: {
					street: '2725-2 YONGGU-DAERO',
					exact: 'true',
				},
			},
			{
				params: {
					street: '79 WI CITY 4-RO',
					exact: 'true',
				},
			},
		];
		streetexacttestCases.forEach(async (testCase) => {
			it(`KR company search with street:${testCase.params.street} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: '2725-2 YONGGU-DAERO',
					name: 'CREDITMENT CO.,LTD.',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					street: '79 WI CITY 4-RO',
					name: 'Y2K RENTAL COMPANY',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`KR company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: '2725-2 YONGGU-DAERO',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					street: '79 WI CITY 4-RO',
					phoneNo: '0319665380',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: '2725-2 YONGGU-DAERO',
					status: 'Active',
				},
			},
			{
				params: {
					street: '79 WI CITY 4-RO',
					status: 'Active',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it('KR company search with street and status', async () => {
				const queryString = `?countries=KR&pageSize=200&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase.params.street}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR name searches', () => {
		const nametestCases = ['CREDITMENT CO.,LTD.', 'Y2K RENTAL COMPANY'];
		nametestCases.forEach(async (testCase) => {
			it(`KR company search with name:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'CREDITMENT CO.,LTD.',
					type: 'Ltd',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`KR company search with name:${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'CREDITMENT CO.,LTD.',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'Y2K RENTAL COMPANY',
					exact: 'true',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it(`KR company search with name:${testCase.params.name} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.name === `${testCase.params.name}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'CREDITMENT CO.,LTD.',
					phoneNo: '02-3664-8801',
				},
				expected: {
					safeNo: 'KR02142361',
				},
			},
			{
				params: {
					name: 'Y2K RENTAL COMPANY',
					phoneNo: '0319665380',
				},
				expected: {
					safeNo: 'KR05157825',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=KR&pageSize=200&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'CREDITMENT CO.,LTD.',
					status: 'Active',
				},
			},
			{
				params: {
					name: 'Y2K RENTAL COMPANY',
					status: 'Active',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it('KR company search with name and status', async () => {
				const queryString = `?countries=KR&pageSize=200&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase.params.name}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR phoneNo searches', () => {
		const phoneNotestCases = ['02-3664-8801', '0319665380'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`KR company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNotypetestCases = [
			{
				params: {
					phoneNo: '02-3664-8801',
					type: 'Ltd',
				},
			},
		];
		phoneNotypetestCases.forEach(async (testCase) => {
			it(`KR company search with phoneNo:${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const phoneNoexacttestCases = [
			{
				params: {
					phoneNo: '02-3664-8801',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '0319665380',
					exact: 'true',
				},
			},
		];
		phoneNoexacttestCases.forEach(async (testCase) => {
			it(`KR company search with phoneNo:${testCase.params.phoneNo} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '02-3664-8801',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '0319665380',
					status: 'Active',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it('KR company search with phoneNo and status', async () => {
				const queryString = `?countries=KR&pageSize=200&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR status searches', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`KR company search with status:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&status=${testCase}`;
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
		];
		statustypetestCases.forEach(async (testCase) => {
			it(`KR company search with status:${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=KR&pageSize=200&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const statusexacttestCases = [
			{
				params: {
					status: 'Active',
					exact: 'true',
				},
			},
			{
				params: {
					status: 'NonActive',
					exact: 'true',
				},
			},
		];
		statusexacttestCases.forEach(async (testCase) => {
			it(`KR company search with status:${testCase.params.status} and exact: ${testCase.params.exact}`, async () => {
				const queryString = `?countries=KR&pageSize=200&status=${testCase.params.status}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('KR type searches', () => {
		const statustestCases = ['Ltd', 'NonLtd'];
		statustestCases.forEach(async (testCase) => {
			it(`KR company search with status:${testCase}`, async () => {
				const queryString = `?countries=KR&pageSize=200&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
	});

	// describe('ES safeNo searches', () => {
	// 	const safeNotestCases = ['ES06093991', 'ES04247703', 'ES06805450'];
	// 	safeNotestCases.forEach(async (testCase) => {
	// 		it(`ES company search with safeNo:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
	// 		});
	// 	});
	// 	const safeNoregNotestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				regNo: 'B21566674',
	// 			},
	// 		},
	// 	];
	// 	safeNoregNotestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and regNo', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNocitytestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				city: 'HUELVA',
	// 			},
	// 		},
	// 	];
	// 	safeNocitytestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and city', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNopostCodetestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				postCode: '21001',
	// 			},
	// 		},
	// 	];
	// 	safeNopostCodetestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and postCode', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNoprovincetestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				province: 'ES-H',
	// 			},
	// 		},
	// 	];
	// 	safeNoprovincetestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and province', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNosimpleValuetestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 			},
	// 		},
	// 	];
	// 	safeNosimpleValuetestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and simpleValue', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNostreettestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 			},
	// 		},
	// 	];
	// 	safeNostreettestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and street', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNonametestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 		},
	// 	];
	// 	safeNonametestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and name', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNoofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				officeType: 'headOffice',
	// 			},
	// 		},
	// 	];
	// 	safeNoofficeTypetestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and officeType', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNostatustestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				status: 'active',
	// 			},
	// 		},
	// 	];
	// 	safeNostatustestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and status', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const safeNotypetestCases = [
	// 		{
	// 			params: {
	// 				safeNo: 'ES06093991',
	// 				type: 'ltd',
	// 			},
	// 		},
	// 	];
	// 	safeNotypetestCases.forEach(async (testCase) => {
	// 		it('ES company search with safeNo and type', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// });

	// describe('ES regNo searches', () => {
	// 	const regNotestCases = ['B21566674', 'B84720010'];
	// 	regNotestCases.forEach(async (testCase) => {
	// 		it(`ES company search with regNo:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
	// 		});
	// 	});
	// 	const regNocitytestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				city: 'HUELVA',
	// 			},
	// 		},
	// 	];
	// 	regNocitytestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and city', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNopostCodetestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				postCode: '21001',
	// 			},
	// 		},
	// 	];
	// 	regNopostCodetestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and postCode', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNoprovincetestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				province: 'ES-H',
	// 			},
	// 		},
	// 	];
	// 	regNoprovincetestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and province', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNosimpleValuetestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 			},
	// 		},
	// 	];
	// 	regNosimpleValuetestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and simpleValue', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNostreettestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 			},
	// 		},
	// 	];
	// 	regNostreettestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and street', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNonametestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 		},
	// 	];
	// 	regNonametestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and name', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNoofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				officeType: 'headOffice',
	// 			},
	// 		},
	// 	];
	// 	regNoofficeTypetestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and officeType', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNostatustestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				status: 'active',
	// 			},
	// 		},
	// 	];
	// 	regNostatustestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and status', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// 	const regNotypetestCases = [
	// 		{
	// 			params: {
	// 				regNo: 'B21566674',
	// 				type: 'ltd',
	// 			},
	// 		},
	// 	];
	// 	regNotypetestCases.forEach(async (testCase) => {
	// 		it('ES company search with regNo and type', async () => {
	// 			const queryString = `?countries=ES&pageSize=200&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

	// 			assert.equal(response.status, 400);
	// 			console.log(`${response.status}${response.data.message}`);
	// 		});
	// 	});
	// });

	// describe('ES city searches', () => {
	// 	const citytestCases = ['HUELVA', 'MADRID'];
	// 	citytestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
	// 		});
	// 	});
	// 	const citypostCodetestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				postCode: '21005',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				postCode: '28024',
	// 			},
	// 		},
	// 	];
	// 	citypostCodetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
	// 		});
	// 	});
	// 	const cityprovincetestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				province: 'ES-H',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				province: 'ES-M',
	// 			},
	// 		},
	// 	];
	// 	cityprovincetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and province:${testCase.params.province}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&province=${testCase.params.province}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
	// 		});
	// 	});
	// 	const citysimpleValuetestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	citysimpleValuetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and simpleValue:${testCase.params.simpleValue}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const citystreettestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	citystreettestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and street:${testCase.params.street}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const citynametestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				name: 'QUALITY CREDITS',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	citynametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and name:${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const cityofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07101909',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07117418',
	// 			},
	// 		},
	// 	];
	// 	cityofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const citystatustestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				status: 'active',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07101909',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				status: 'nonactive',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07121000',
	// 			},
	// 		},
	// 	];
	// 	citystatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&city=${testCase.params.city}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const citytypetestCases = [
	// 		{
	// 			params: {
	// 				city: 'HUELVA',
	// 				type: 'ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07110336',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				city: 'MADRID',
	// 				type: 'ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07117418',
	// 			},
	// 		},
	// 	];
	// 	citytypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with city:${testCase.params.city} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&city=${testCase.params.city}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// });

	// describe('ES postCode searches', () => {
	// 	const postCodetestCases = ['21005', '28024'];
	// 	postCodetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
	// 		});
	// 	});
	// 	const postCodeprovincetestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				province: 'ES-H',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07101909',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				province: 'ES-M',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07117611',
	// 			},
	// 		},
	// 	];
	// 	postCodeprovincetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and province:${testCase.params.province}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodesimpleValuetestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				simpleValue: 'CALLE LIMA, 1, 21005, HUELVA',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06558921',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	postCodesimpleValuetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and simpleValue:${testCase.params.simpleValue}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodestreettestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				street: 'CALLE LIMA, 1',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06558921',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	postCodestreettestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and street:${testCase.params.street}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodenametestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21001',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				name: 'QUALITY CREDITS',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	postCodenametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and name:${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodeofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07101909',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07099069',
	// 			},
	// 		},
	// 	];
	// 	postCodeofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode::${testCase.params.postCode} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodestatustestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				status: 'active',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07101909',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				status: 'nonactive',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05570675',
	// 			},
	// 		},
	// 	];
	// 	postCodestatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and status::${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const postCodetypetestCases = [
	// 		{
	// 			params: {
	// 				postCode: '21005',
	// 				type: 'ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07067156',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				postCode: '28024',
	// 				type: 'ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES07099069',
	// 			},
	// 		},
	// 	];
	// 	postCodetypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with postCode:${testCase.params.postCode} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// });

	// describe('ES province searches', () => {
	// 	const provincetestCases = ['ES-H', 'ES-M'];
	// 	provincetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
	// 		});
	// 	});
	// 	const provincesimpleValuetestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	provincesimpleValuetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and simpleValue:${testCase.params.simpleValue}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const provincestreettestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	provincestreettestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and street:${testCase.params.street}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const provincenametestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				name: 'QUALITY CREDITS',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	provincenametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and name:${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const provinceofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				officeType: 'headOffice',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				officeType: 'headOffice',
	// 			},
	// 		},
	// 	];
	// 	provinceofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
	// 		});
	// 	});
	// 	const provincestatustestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				status: 'Active',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				status: 'NonActive',
	// 			},
	// 		},
	// 	];
	// 	provincestatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
	// 		});
	// 	});
	// 	const provincetypetestCases = [
	// 		{
	// 			params: {
	// 				province: 'ES-H',
	// 				type: 'Ltd',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				province: 'ES-M',
	// 				type: 'Ltd',
	// 			},
	// 		},
	// 	];
	// 	provincetypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with province:${testCase.params.province} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&province=${testCase.params.province}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
	// 		});
	// 	});
	// });

	// describe('ES simpleValue searches', () => {
	// 	const simpleValuetestCases = ['CALLE MORA CLAROS, 1 4 A, 21001, HUELVA', 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID'];
	// 	simpleValuetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
	// 		});
	// 	});
	// 	const simpleValuestreettestCases = [
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	simpleValuestreettestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase.params.simpleValue} and street:${testCase.params.street}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const simpleValuenametestCases = [
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 				name: 'QUALITY CREDITS',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	simpleValuenametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase.params.simpleValue} and name:${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const simpleValueofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	simpleValueofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase.params.simpleValue} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const simpleValuestatustestCases = [
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 				status: 'Active',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 				status: 'NonActive',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	simpleValuestatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase.params.simpleValue} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const simpleValuetypetestCases = [
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE MORA CLAROS, 1 4 A, 21001, HUELVA',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				simpleValue: 'CALLE TEMBLEQUE, 95 LO 3, 28024, MADRID',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	simpleValuetypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with simpleValue:${testCase.params.simpleValue} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// });

	// describe('ES street searches', () => {
	// 	const streettestCases = ['CALLE MORA CLAROS, 1 4 A', 'CALLE TEMBLEQUE, 95 LO 3'];
	// 	streettestCases.forEach(async (testCase) => {
	// 		it(`ES company search with street:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&street=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
	// 		});
	// 	});
	// 	const streetnametestCases = [
	// 		{
	// 			params: {
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 				name: 'ALTERNATIVE CREDIT',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 				name: 'QUALITY CREDITS',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	streetnametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with street:${testCase.params.street} and name:${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&street=${testCase.params.street}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const streetofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	streetofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with street:${testCase.params.street} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const streetstatustestCases = [
	// 		{
	// 			params: {
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 				status: 'Active',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 				status: 'NonActive',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	streetstatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with street:${testCase.params.street} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&street=${testCase.params.street}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const streettypetestCases = [
	// 		{
	// 			params: {
	// 				street: 'CALLE MORA CLAROS, 1 4 A',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES05551077',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'CALLE TEMBLEQUE, 95 LO 3',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	streettypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with street:${testCase.params.street} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&street=${testCase.params.street}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// });

	// describe('ES name searches', () => {
	// 	const nametestCases = ['ALTERNATIVE CREDIT', 'QUALITY CREDITS'];
	// 	nametestCases.forEach(async (testCase) => {
	// 		it(`ES company search with name:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&name=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
	// 		});
	// 	});
	// 	const nameofficeTypetestCases = [
	// 		{
	// 			params: {
	// 				name: 'ALTERNATIVE CREDIT',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'QUALITY CREDITS',
	// 				officeType: 'headOffice',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	nameofficeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with name:${testCase.params.name} and officeType:${testCase.params.officeType}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const namestatustestCases = [
	// 		{
	// 			params: {
	// 				name: 'ALTERNATIVE CREDIT',
	// 				status: 'Active',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'QUALITY CREDITS',
	// 				status: 'NonActive',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	namestatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with name:${testCase.params.name} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&name=${testCase.params.name}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// 	const nametypetestCases = [
	// 		{
	// 			params: {
	// 				name: 'ALTERNATIVE CREDIT',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES06093991',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'QUALITY CREDITS',
	// 				type: 'Ltd',
	// 			},
	// 			expected: {
	// 				safeNo: 'ES04247703',
	// 			},
	// 		},
	// 	];
	// 	nametypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with name:${testCase.params.name} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&name=${testCase.params.name}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
	// 		});
	// 	});
	// });

	// describe('ES officeType searches', () => {
	// 	const officeTypetestCases = ['headOffice'];
	// 	officeTypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with officeType:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&officeType=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
	// 		});
	// 	});
	// 	const officeTypestatustestCases = [
	// 		{
	// 			params: {
	// 				officeType: 'headOffice',
	// 				status: 'Active',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				officeType: 'headOffice',
	// 				status: 'NonActive',
	// 			},
	// 		},
	// 	];
	// 	officeTypestatustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with officeType:${testCase.params.officeType} and status:${testCase.params.status}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
	// 		});
	// 	});
	// 	const officeTypetypetestCases = [
	// 		{
	// 			params: {
	// 				officeType: 'headOffice',
	// 				type: 'Ltd',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				officeType: 'headOffice',
	// 				type: 'NonLtd',
	// 			},
	// 		},
	// 	];
	// 	officeTypetypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with officeType:${testCase.params.officeType} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&officeType=${testCase.params.officeType}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
	// 		});
	// 	});
	// });

	// describe('ES status searches', () => {
	// 	const statustestCases = ['Active', 'NonActive'];
	// 	statustestCases.forEach(async (testCase) => {
	// 		it(`ES company search with status:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&status=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
	// 		});
	// 	});
	// 	const statustypetestCases = [
	// 		{
	// 			params: {
	// 				status: 'Active',
	// 				type: 'Ltd',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				status: 'NonActive',
	// 				type: 'NonLtd',
	// 			},
	// 		},
	// 	];
	// 	statustypetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with status:${testCase.params.status} and type:${testCase.params.type}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&status=${testCase.params.status}&type=${testCase.params.type}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
	// 			assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
	// 		});
	// 	});
	// });

	// describe('ES type searches', () => {
	// 	const typetestCases = ['Ltd', 'NonLtd'];
	// 	typetestCases.forEach(async (testCase) => {
	// 		it(`ES company search with type:${testCase}`, async () => {
	// 			const queryString = `?countries=ES&pageSize=200&type=${testCase}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.every((company) => company.type === `${testCase}`), true);
	// 		});
	// 	});
	// });

	// describe('ES synonyms searches', () => {
	// 	const namesynonymtestCases = [
	// 		{
	// 			params: {
	// 				name: 'fnd FABRETTO FUNDACION',
	// 			},
	// 			expected: {
	// 				name: 'FUNDACION FABRETTO FUNDACION',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'grupo G G CAFETERIAS',
	// 			},
	// 			expected: {
	// 				name: 'G G G CAFETERIAS',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'coop TRIDENASOCIEDAD COOPERATIVA',
	// 			},
	// 			expected: {
	// 				name: 'COOPERATIVA TRIDENASOCIEDAD COOPERATIVA',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				name: 'empresa ARQUITEX',
	// 			},
	// 			expected: {
	// 				name: 'EMP ARQUITEX',
	// 			},
	// 		},
	// 	];
	// 	namesynonymtestCases.forEach(async (testCase) => {
	// 		it(`ES company search with namesynonym: ${testCase.params.name}`, async () => {
	// 			const queryString = `?countries=ES&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
	// 		});
	// 	});
	// 	const streetsynonymtestCases = [
	// 		{
	// 			params: {
	// 				street: 'AVDA blv, 404',
	// 				name: 'APICIUS ALIMENTACION',
	// 			},
	// 			expected: {
	// 				street: 'AVDA BULEVAR, 404',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'AVDA AV av, 46',
	// 				name: 'CHONGPING XIANG',
	// 			},
	// 			expected: {
	// 				street: 'AVDA AV AVENIDA, 46',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'carretera CRA SEVILLA, 89',
	// 				name: 'JOAQUIN CABRERA CARRETERO',
	// 			},
	// 			expected: {
	// 				street: 'CRA CRA SEVILLA, 89',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'PLAZA pza, 16',
	// 				name: 'DONATO HOLGADO CASADO',
	// 			},
	// 			expected: {
	// 				street: 'PLAZA PLAZA, 16',
	// 			},
	// 		},
	// 		{
	// 			params: {
	// 				street: 'P PASEO COLON, 14',
	// 				name: 'MARIA ISABEL MARTINEZ NOVOA',
	// 			},
	// 			expected: {
	// 				street: 'PASEO PASEO COLON, 14',
	// 			},
	// 		},
	// 	];
	// 	streetsynonymtestCases.forEach(async (testCase) => {
	// 		it(`MX company search with streetsynonym: ${testCase.params.street}`, async () => {
	// 			const queryString = `?countries=ES&street=${testCase.params.street}&name=${testCase.params.name}`;
	// 			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

	// 			assert.equal(response.status, 200);
	// 			assert.equal(response.data.companies.length > 0, true);
	// 			assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
	// 		});
	// 	});
	// });
});
