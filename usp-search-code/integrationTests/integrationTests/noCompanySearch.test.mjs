import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('NO Regression Tests', async () => {
	describe('NO company Search', () => {
		it('returns NO Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=NO`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'NO'), true);
		});
	});

	describe('NO id', () => {
		const idtestCases = ['NO-0-NO02450020', 'NO-0-NO00682396', 'NO-0-NO00610046', 'NO-0-NO25925995', 'NO-0-NO01783174'];
		idtestCases.forEach(async (testCase) => {
			it(`NO company search with id:${testCase}`, async () => {
				const queryString = `?countries=NO&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					safeNo: 'NO02450020',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('NO company search with id and safeNo', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					regNo: '914328888',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('NO company search with id and regNo', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					city: 'OSLO',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('NO company search with id and city', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					postCode: '0155',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('NO company search with id and postCode', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					simpleValue: 'Storgata 7, 0155, OSLO',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('NO company search with id and simpleValue', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					street: 'Storgata 7',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('NO company search with id and street', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idexacttestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					exact: 'true',
				},
			},
		];
		idexacttestCases.forEach(async (testCase) => {
			it('NO company search with id and exact', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase.params.id}`), true);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					name: 'CREDITSAFE NORWAY AS',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('NO company search with id and name', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('NO company search with id and officeType', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('NO company search with id and status', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCases = [
			{
				params: {
					id: 'NO-0-NO00610046',
					phoneNo: '95933211',
				},
			},
		];
		idphoneNotestCases.forEach(async (testCase) => {
			it('NO company search with id and phoneNo', async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtypetestCases = [
			{
				params: {
					id: 'NO-0-NO02450020',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02450020',
				},
			},
			{
				params: {
					id: 'NO-0-NO00682396',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00682396',
				},
			},
			{
				params: {
					id: 'NO-0-NO00610046',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					id: 'NO-2-NO02550464',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02550464',
				},
			},
			{
				params: {
					id: 'NO-2-NO25322068',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO25322068',
				},
			},
		];
		idtypetestCases.forEach(async (testCase) => {
			it(`NO company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase.params.id}`), true);
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO safeNo', () => {
		const safeNotestCases = ['NO02450020', 'NO00682396', 'NO00610046', 'NO25925995', 'NO01783174'];
		safeNotestCases.forEach(async (testCase) => {
			it(`NO company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=NO&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					regNo: '914328888',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and regNo', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					city: 'OSLO',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and city', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					postCode: '0155',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and postCode', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					simpleValue: 'Storgata 7, 0155, OSLO',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					street: 'Storgata 7',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and street', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoexacttestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					exact: 'true',
				},
			},
		];
		safeNoexacttestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and exact', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.params.safeNo}`), true);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					name: 'CREDITSAFE NORWAY AS',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and name', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and officeType', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and status', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCases = [
			{
				params: {
					safeNo: 'NO02455317',
					phoneNo: '51621063',
				},
			},
		];
		safeNophoneNotestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotypetestCases = [
			{
				params: {
					safeNo: 'NO02450020',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCases.forEach(async (testCase) => {
			it('NO company search with safeNo and type', async () => {
				const queryString = `?countries=NO&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('NO regNo', () => {
		const regNotestCases = ['914328888', '982753570', '980771903', '919677198', '912406652'];
		regNotestCases.forEach(async (testCase) => {
			it(`NO company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=NO&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '914328888',
					city: 'OSLO',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('NO company search with regNo and city', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '914328888',
					postCode: '0155',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('NO company search with regNo and postCode', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: '914328888',
					simpleValue: 'Storgata 7, 0155, OSLO',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('NO company search with regNo and simpleValue', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '914328888',
					street: 'Storgata 7',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('NO company search with regNo and street', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoexacttestCases = [
			{
				params: {
					regNo: '914328888',
					exact: 'true',
				},
			},
		];
		regNoexacttestCases.forEach(async (testCase) => {
			it('NO company search with regNo and exact', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.params.regNo}`), true);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '914328888',
					name: 'CREDITSAFE NORWAY AS',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('NO company search with regNo and name', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '914328888',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('NO company search with regNo and officeType', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '914328888',
					status: 'Active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('NO company search with regNo and status', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCases = [
			{
				params: {
					regNo: '914387272',
					phoneNo: '51621063',
				},
			},
		];
		regNophoneNotestCases.forEach(async (testCase) => {
			it('NO company search with regNo and phoneNo', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotypetestCases = [
			{
				params: {
					regNo: '914328888',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02450020',
				},
			},
			{
				params: {
					regNo: '982753570',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00682396',
				},
			},
			{
				params: {
					regNo: '980771903',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					regNo: '914387272',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02455317',
				},
			},
			{
				params: {
					regNo: '915656757',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02550464',
				},
			},
		];
		regNotypetestCases.forEach(async (testCase) => {
			it('NO company search with regNo and type', async () => {
				const queryString = `?countries=NO&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO city', () => {
		const citytestCases = ['OSLO', '2100 COPENHAGEN Ø', 'MOSJØEN', 'HØNEFOSS', 'DUBLIN 4'];
		citytestCases.forEach(async (testCase) => {
			it(`NO company search with city:${testCase}`, async () => {
				const queryString = `?countries=NO&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'OSLO',
					postCode: '0679',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02577412',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					postCode: '8658',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					postCode: '3511',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					postCode: '1366',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					postCode: '1920',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'OSLO',
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					simpleValue: 'Vestersidvegen 180, 8658, MOSJØEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					simpleValue: 'Kartverksveien 11, 3511, HØNEFOSS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'OSLO',
					street: 'Ryenstubben 12',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					street: 'Vestersidvegen 180',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					street: 'Kartverksveien 11',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					street: 'Oksenøyveien 8',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					street: 'Fru Natvigs vei 2',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.line1.toLowerCase()}`), true);
			});
		});
		const cityexacttestCases = [
			{
				params: {
					city: 'OSLO',
					exact: 'true',
				},
			},
		];
		cityexacttestCases.forEach(async (testCase) => {
			it('NO company search with city and exact', async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.params.city}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'OSLO',
					name: 'GK INNEKLIMA AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					name: 'ENTREPRENØR TEAM AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					name: 'KVÆRNER AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					name: 'LILLESTRØM ELEKTRO AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'OSLO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'OSLO',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO29781610',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00167756',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'OSLO',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					phoneNo: '75171718',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01713792',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					phoneNo: '91315730',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00167756',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					phoneNo: '23303000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00999618',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const citytypetestCases = [
			{
				params: {
					city: 'OSLO',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					city: 'MOSJØEN',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00728258',
				},
			},
			{
				params: {
					city: 'HØNEFOSS',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01133662',
				},
			},
			{
				params: {
					city: 'LYSAKER',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					city: 'SØRUMSAND',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		citytypetestCases.forEach(async (testCase) => {
			it(`NO company search with city: ${testCase.params.city} and type:${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO postCode', () => {
		const postCodetestCases = ['0679', '8663', '3511', '1366', '1920'];
		postCodetestCases.forEach(async (testCase) => {
			it(`NO company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '0679',
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8658',
					simpleValue: 'Vestersidvegen 180, 8658, MOSJØEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					postCode: '3511',
					simpleValue: 'Kartverksveien 11, 3511, HØNEFOSS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					postCode: '1366',
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '0679',
					street: 'Ryenstubben 12',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8658',
					street: 'Vestersidvegen 180',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					postCode: '3511',
					street: 'Kartverksveien 11',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					postCode: '1366',
					street: 'Oksenøyveien 8',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					street: 'Fru Natvigs vei 2',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
			});
		});
		const postCodeexacttestCases = [
			{
				params: {
					postCode: '0679',
					exact: 'true',
				},
			},
		];
		postCodeexacttestCases.forEach(async (testCase) => {
			it('NO company search with postCode and exact', async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '0679',
					name: 'GK INNEKLIMA AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8658',
					name: 'ENTREPRENØR TEAM AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					postCode: '3511',
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					postCode: '1366',
					name: 'KVÆRNER AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					name: 'LILLESTRØM ELEKTRO AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '0679',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8663',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					postCode: '3511',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					postCode: '1366',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '0679',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8663',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					postCode: '3511',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					postCode: '1366',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '0679',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8663',
					phoneNo: '75179100',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					postCode: '3511',
					phoneNo: '61312020',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					postCode: '1366',
					phoneNo: '23303000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00999618',
				},
			},
			{
				params: {
					postCode: '1920',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const postCodetypetestCases = [
			{
				params: {
					postCode: '0679',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					postCode: '8663',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					postCode: '3511',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01133662',
				},
			},
			{
				params: {
					postCode: '1366',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					postCode: '1920',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00293797',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`NO company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO simpleValue', () => {
		const simpleValuetestCases = [
			'Ryenstubben 12, 0679, OSLO', 'Vestersidvegen 180, 8658, MOSJØEN', 'Kartverksveien 11, 3511, HØNEFOSS', 'Oksenøyveien 8, 1366, LYSAKER', 'Fru Natvigs vei 2, 1920, SØRUMSAND'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					street: 'Ryenstubben 12',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Vestersidvegen 180, 8658, MOSJØEN',
					street: 'Vestersidvegen 180',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					simpleValue: 'Kartverksveien 11, 3511, HØNEFOSS',
					street: 'Kartverksveien 11',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
					street: 'Oksenøyveien 8',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					street: 'Fru Natvigs vei 2',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
			});
		});
		const simpleValueexacttestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					exact: 'true',
				},
			},
		];
		simpleValueexacttestCases.forEach(async (testCase) => {
			it('NO company search with simpleValue and exact', async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					name: 'GK INNEKLIMA AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Vestersidvegen 180, 8658, MOSJØEN',
					name: 'ENTREPRENØR TEAM AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					simpleValue: 'Kartverksveien 11, 3511, HØNEFOSS',
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
					name: 'KVÆRNER AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					name: 'LILLESTRØM ELEKTRO AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Havnegata 40, 8663, MOSJØEN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					simpleValue: 'c/o ECIT Veiby Akonto AS, Hvervenmoveien 49, 3511, HØNEFOSS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Havnegata 40, 8663, MOSJØEN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					simpleValue: 'c/o ECIT Veiby Akonto AS, Hvervenmoveien 49, 3511, HØNEFOSS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue:${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Havnegata 40, 8663, MOSJØEN',
					phoneNo: '75179100',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					simpleValue: 'Osloveien 75, 3511, HØNEFOSS',
					phoneNo: '61312020',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				// assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: 'Ryenstubben 12, 0679, OSLO',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					simpleValue: 'Havnegata 40, 8663, MOSJØEN',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					simpleValue: 'c/o ECIT Veiby Akonto AS, Hvervenmoveien 49, 3511, HØNEFOSS',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					simpleValue: 'Oksenøyveien 8, 1366, LYSAKER',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					simpleValue: 'Fru Natvigs vei 2, 1920, SØRUMSAND',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00683091',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue.toLowerCase() === `${testCase.params.simpleValue.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type}`), true);
			});
		});
	});

	describe('NO street', () => {
		const streettestCases = ['Ryenstubben 12', 'Vestersidvegen 180', 'Kartverksveien 11', 'Oksenøyveien 8', 'Fru Natvigs vei 2'];
		streettestCases.forEach(async (testCase) => {
			it(`NO company search with street:${testCase}`, async () => {
				const queryString = `?countries=NO&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetexacttestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					exact: 'true',
				},
			},
		];
		streetexacttestCases.forEach(async (testCase) => {
			it('NO company search with street and exact', async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase.params.street}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					name: 'GK INNEKLIMA AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					street: 'Vestersidvegen 180',
					name: 'ENTREPRENØR TEAM AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					street: 'Kartverksveien ',
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					street: 'Oksenøyveien 8',
					name: 'KVÆRNER AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					street: 'Fru Natvigs vei 2',
					name: 'LILLESTRØM ELEKTRO AS',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`NO company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					street: 'Vestersidvegen 180',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					street: 'Havnegata 40',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					street: 'Oksenøyveien 8',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					street: 'Fru Natvigs vei 2',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					street: 'Havnegata 40',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					street: 'c/o ECIT Veiby Akonto AS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					street: 'Oksenøyveien 8',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					street: 'Fru Natvigs vei 2',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`NO company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					street: 'Havnegata 40',
					phoneNo: '75179100',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					street: 'Osloveien 75',
					phoneNo: '61312020',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					street: 'Fru Natvigs vei 2',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: 'Ryenstubben 12',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					street: 'Havnegata 40',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					street: 'c/o ECIT Veiby Akonto AS',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00693372',
				},
			},
			{
				params: {
					street: 'Oksenøyveien 8',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					street: 'Fru Natvigs vei 2',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00683091',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`NO company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.params.street.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO name', () => {
		const nametestCases = ['GK INNEKLIMA AS', 'ENTREPRENØR TEAM AS', 'SPAREBANK 1 ØKONOMIHUSET AS', 'KVÆRNER AS', 'LILLESTRØM ELEKTRO AS'];
		nametestCases.forEach(async (testCase) => {
			it(`NO company search with name:${testCase}`, async () => {
				const queryString = `?countries=NO&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'GK INNEKLIMA AS',
					exact: 'true',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it('NO company search with name and exact', async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase.params.name}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'GK INNEKLIMA AS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					name: 'ENTREPRENØR TEAM AS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'GK INNEKLIMA AS',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					name: 'ENTREPRENØR TEAM AS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					name: 'KVÆRNER AS',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00138385',
				},
			},
			{
				params: {
					name: 'LILLESTRØM ELEKTRO AS',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`NO company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.params.status.toLowerCase()}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'GK INNEKLIMA AS',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					name: 'ALCOA NORWAY ANS',
					phoneNo: '75179100',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					name: 'SANDBERG HØNEFOSS AS',
					phoneNo: '61312020',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					name: 'LILLESTRØM ELEKTRO AS',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.phoneumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'GK INNEKLIMA AS',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					name: 'ENTREPRENØR TEAM AS',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00610046',
				},
			},
			{
				params: {
					name: 'SPAREBANK 1 ØKONOMIHUSET AS',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00556754',
				},
			},
			{
				params: {
					name: 'ØYVIND DAHL',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02506955',
				},
			},
			{
				params: {
					name: 'KNUT OLAV DYBVIG',
					type: 'NonLtdNonReg',
				},
				expected: {
					key: 'safeNo',
					value: 'NO31550941',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`NO company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
				// assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`NO company search with name:${testCase}`, async () => {
				const queryString = `?countries=NO&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypeexacttestCases = [
			{
				params: {
					officeType: 'headOffice',
					exact: 'true',
				},
			},
		];
		officeTypeexacttestCases.forEach(async (testCase) => {
			it('NO company search with officetype and exact', async () => {
				const queryString = `?countries=NO&officeType=${testCase.params.officeType}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const officeTypestatustestCases = [
			{
				params: {
					officeType: 'headOffice',
					status: 'NonActive',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					status: 'Active',
				},
			},
		];
		officeTypestatustestCases.forEach(async (testCase) => {
			it(`NO company search with officeType: ${testCase.params.officeType} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=NO&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const officeTypephoneNotestCases = [
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '22974700',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00178512',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '75179100',
				},
				expected: {
					key: 'safeNo',
					value: 'NO00143559',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '61312020',
				},
				expected: {
					key: 'safeNo',
					value: 'NO02552042',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '47178000',
				},
				expected: {
					key: 'safeNo',
					value: 'NO01248978',
				},
			},
		];
		officeTypephoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with officeType: ${testCase.params.officeType} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&officeType=${testCase.params.officeType}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const officeTypetypetestCases = [
			{
				params: {
					officeType: 'headOffice',
					type: 'Ltd',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					type: 'NonLtdNonReg',
				},
			},
		];
		officeTypetypetestCases.forEach(async (testCase) => {
			it(`NO company search with officeType: ${testCase.params.officeType} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&officeType=${testCase.params.officeType}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType.toLowerCase() === `${testCase.params.officeType.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === `${testCase.params.type.toLowerCase()}`), true);
			});
		});
	});

	describe('NO status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`NO company search with status:${testCase}`, async () => {
				const queryString = `?countries=NO&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const statusexacttestCases = [
			{
				params: {
					status: 'Active',
					exact: 'true',
				},
			},
		];
		statusexacttestCases.forEach(async (testCase) => {
			it('NO company search with status and exact', async () => {
				const queryString = `?countries=NO&status=${testCase.params.status}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const statusphoneNotestCases = [
			{
				params: {
					status: 'NonActive',
					phoneNo: '22974700',
				},
			},
			{
				params: {
					status: 'NonActive',
					phoneNo: '75179100',
				},
			},
			{
				params: {
					status: 'Active',
					phoneNo: '61312020',
				},
			},
		];
		statusphoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with status: ${testCase.params.status} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=NO&status=${testCase.params.status}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
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
					type: 'NonLtdNonReg',
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
					type: 'NonLtdNonReg',
				},
			},
		];
		statustypetestCases.forEach(async (testCase) => {
			it(`NO company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check that the status of all companies is correct
				assert.equal(response.data.companies.every((company) => company.status.toLowerCase() === testCase.params.status.toLowerCase()), true);
				// Check that all companies have the correct type
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === testCase.params.type.toLowerCase()), true);
			});
		});
	});

	describe('NO phoneNo', () => {
		const phoneNotestCases = ['22974700', '75179100', '61312020', '47178000'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`NO company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=NO&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNoexacttestCases = [
			{
				params: {
					phoneNo: '22974700',
					exact: 'true',
				},
			},
		];
		phoneNoexacttestCases.forEach(async (testCase) => {
			it('NO company search with phneno and exact', async () => {
				const queryString = `?countries=NO&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const phoneNotypetestCases = [
			{
				params: {
					phoneNo: '62358434',
					type: 'NonLtdNonReg',
				},
			},
			{
				params: {
					phoneNo: '90964144',
					type: 'Ltd',
				},
			},
		];
		phoneNotypetestCases.forEach(async (testCase) => {
			it(`NO company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=NO&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				// Check that all companies have the correct type
				assert.equal(response.data.companies.every((company) => company.type.toLowerCase() === testCase.params.type.toLowerCase()), true);
			});
		});
	});

	describe('NO type', () => {
		const typetestCases = ['Ltd', 'NonLtdNonReg'];
		typetestCases.forEach(async (testCase) => {
			it(`NO company search with type:${testCase}`, async () => {
				const queryString = `?countries=NO&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);
				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const typeexacttestCases = [
			{
				params: {
					type: 'Ltd',
					exact: 'true',
				},
			},
		];
		typeexacttestCases.forEach(async (testCase) => {
			it('NO company search with type and exact', async () => {
				const queryString = `?countries=NO&type=${testCase.params.type}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
	});

	describe('NO synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'OG ORTOPEDI AS',
				},
				expected: {
					name: 'OCH ORTOPEDI AS',
				},
			},
			{
				params: {
					name: 'ALTIBOX A/S',
				},
				expected: {
					name: 'ALTIBOX AS',
				},
			},
			{
				params: {
					name: 'TECH MAHINDRA Ltd',
				},
				expected: {
					name: 'TECH MAHINDRA LIMITED',
				},
			},
			{
				params: {
					name: 'NORSKe OLJEMUSEUM',
				},
				expected: {
					name: 'NORSK OLJEMUSEUM',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`NO company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=NO&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const simpleValueconjoinedsynonymtestCases = [
			{
				params: {
					simpleValue: 'Obos, Storg 20, 3126, TØNSBERG',
				},
				expected: {
					simpleValue: 'OBOS, Storgaten 20, 3126, TØNSBERG',
				},
			},
			{
				params: {
					simpleValue: 'Sanderpl 14, 6813, FØRDE',
				},
				expected: {
					simpleValue: 'Sanderplassen 14, 6813, FØRDE',
				},
			},
			{
				params: {
					simpleValue: 'Flyplassvei 1, 4050, SOLA',
				},
				expected: {
					simpleValue: 'Flyplassveien 1, 4050, SOLA',
				},
			},
			{
				params: {
					simpleValue: 'Lønnevei 24, 2020, SKEDSMOKORSET',
				},
				expected: {
					simpleValue: 'Lønneveien 24, 2020, SKEDSMOKORSET',
				},
			},
		];
		simpleValueconjoinedsynonymtestCases.forEach(async (testCase) => {
			it(`NO company search with simpleValueconjoined: ${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=NO&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.expected.simpleValue.toLowerCase()}`), true);
			});
		});
		const streetconjoinedsynonymtestCases = [
			{
				params: {
					street: 'Storg 20',
				},
				expected: {
					street: 'Storgaten 20',
				},
			},
			{
				params: {
					street: 'Sanderplass 14',
				},
				expected: {
					street: 'Sanderplassen 14',
				},
			},
			{
				params: {
					street: 'Flyplassvei 1',
				},
				expected: {
					street: 'Flyplassveien 1',
				},
			},
			{
				params: {
					street: 'Lønnevei 24',
				},
				expected: {
					street: 'Lønneveien 24',
				},
			},
		];
		streetconjoinedsynonymtestCases.forEach(async (testCase) => {
			it(`NO company search with streetconjoined: ${testCase.params.street}`, async () => {
				const queryString = `?countries=NO&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
			});
		});
	});

	describe('Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns NO company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=NO&name=${testCase}`;
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
			it(`returns NO company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=NO&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphaNumericsTestCases = ['j2'];
		AlphaNumericsTestCases.forEach(async (testCase) => {
			it(`returns NO company name startwith alphanumerics:${testCase}`, async () => {
				const queryString = `?countryCode=NO&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const SpecialcharacterTestCases = ['@', '!'];
		SpecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns NO company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=NO&name=${testCase}`;
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
