import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('IT Regression Tests', async () => {
	describe('IT company Search', () => {
		it('Returns IT companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=IT`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'IT'), true);
		});
	});

	describe('IT id', () => {
		const idTestCases = ['IT-0-MI1969106', 'IT-0-PD439672', 'IT-0-MI1692565', 'IT-0-MI2678130', 'IT-0-CZ160408'];
		idTestCases.forEach(async (testCase) => {
			it(`IT company with id:${testCase}`, async () => {
				const queryString = `?countries=IT&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					safeNo: 'IT02903722',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('IT company search with id and safeNo', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					regNo: 'MI1969106',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('IT company search with id and regNo', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					vatNo: '07589380968',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('IT company search with id and vatNo', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					city: 'MILANO',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('IT company search with id and city', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idhouseNotestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					houseNo: '2',
				},
			},
		];
		idhouseNotestCase.forEach(async (testCase) => {
			it('IT company search with id and houseNo', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					postCode: '20122',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('IT company search with id and postCode', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					province: 'MI',
				},
			},
		];
		idprovincetestCase.forEach(async (testCase) => {
			it('IT company search with id and province', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					simpleValue: 'VIA PANTANO, 2, MILANO, 20122, MI',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('IT company search with id and simpleValue', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					street: 'VIA PANTANO',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('IT company search with id and street', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					name: 'CREDITSAFE ITALIA S.R.L.',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('IT company search with id and name', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					phoneNo: '01119464600',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('IT company search with id and phoneNo', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('IT company search with id and status', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idTypetestCases = [
			{
				params: {
					id: 'IT-0-MI1969106',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					id: 'IT-0-PD439672',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					id: 'IT-1-FO214422',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422162',
				},
			},
			{
				params: {
					id: 'IT-1-NA952870',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587301',
				},
			},
		];
		idTypetestCases.forEach(async (testCase) => {
			it(`IT company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase.params.id}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const idofficeTypetestCase = [
			{
				params: {
					id: 'IT-0-MI1969106',
					officeType: 'Active',
				},
			},
		];
		idofficeTypetestCase.forEach(async (testCase) => {
			it('IT company search with id and officeType', async () => {
				const queryString = `?countries=IT&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IT safeNo', () => {
		const safeNoTestCases = ['IT02903722', 'IT08955884', 'IT02825612', 'IT20122004', 'IT02314525'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`IT company with safeNo:${testCase}`, async () => {
				const queryString = `?countries=IT&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					regNo: 'MI1969106',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and regNo', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					vatNo: '07589380968',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and vatNo', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					city: 'MILANO',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and city', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNohouseNotestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					houseNo: '2',
				},
			},
		];
		safeNohouseNotestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and houseNo', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostcodetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					postCode: '20122',
				},
			},
		];
		safeNopostcodetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and postCode', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					province: 'MI',
				},
			},
		];
		safeNoprovincetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and province', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					simpleValue: 'VIA PANTANO, 2, MILANO, 20122, MI',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreetValuetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					street: 'VIA PANTANO',
				},
			},
		];
		safeNostreetValuetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and street', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonameValuetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					name: 'CREDITSAFE ITALIA S.R.L.',
				},
			},
		];
		safeNonameValuetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and name', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					phoneNo: '01119464600',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					safeNo: 'IT08955884',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					safeNo: 'IT08587301',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587301',
				},
			},
			{
				params: {
					safeNo: 'IT08587303',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587303',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it(`IT company search with safeNo: ${testCase.params.safeNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const safeNotypetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and type', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCase = [
			{
				params: {
					safeNo: 'IT02903722',
					officeType: 'headoffice',
				},
			},
		];
		safeNoofficeTypetestCase.forEach(async (testCase) => {
			it('IT company search with safeNo and officeType', async () => {
				const queryString = `?countries=IT&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IT regNo', () => {
		const regNoTestCases = ['MI1969106', 'PD439672', 'MI1692565', 'MI2678130', 'CZ160408'];
		regNoTestCases.forEach(async (testCase) => {
			it(`IT company with regNo:${testCase}`, async () => {
				const queryString = `?countries=IT&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCase = [
			{
				params: {
					regNo: 'MI1969106',
					vatNo: '07589380968',
				},
			},
		];
		regNovatNotestCase.forEach(async (testCase) => {
			it('IT company search with regNo and vatNo', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: 'MI1969106',
					city: 'MILANO',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it('IT company search with regNo and city', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNohouseNotestCase = [
			{
				params: {
					regNo: 'MI1969106',
					houseNo: '2',
				},
			},
		];
		regNohouseNotestCase.forEach(async (testCase) => {
			it('IT company search with regNo and houseNo', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: 'MI1969106',
					postCode: '20122',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it('IT company search with regNo and postCode', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCase = [
			{
				params: {
					regNo: 'MI1969106',
					province: '20122',
				},
			},
		];
		regNoprovincetestCase.forEach(async (testCase) => {
			it('IT company search with regNo and province', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: 'MI1969106',
					simpleValue: 'VIA PANTANO, 2, MILANO, 20122, MI',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('IT company search with regNo and simpleValue', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: 'MI1969106',
					street: 'VIA PANTANO',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('IT company search with regNo and street', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: 'MI1969106',
					name: 'CREDITSAFE ITALIA S.R.L.',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('IT company search with regNo and name', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: 'MI1969106',
					phoneNo: '01119464600',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('IT company search with regNo and phoneNo', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: 'MI1969106',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					regNo: 'PD439672',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					regNo: 'NA952870',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587301',
				},
			},
			{
				params: {
					regNo: 'SS192923',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587303',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it(`IT company search with regNo: ${testCase.params.regNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.regNo === `${testCase.params.regNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const regNotypetestCase = [
			{
				params: {
					regNo: 'MI1969106',
					type: 'ltd',
				},
			},
		];
		regNotypetestCase.forEach(async (testCase) => {
			it('IT company search with regNo and type', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCase = [
			{
				params: {
					regNo: 'MI1969106',
					officeType: 'ltd',
				},
			},
		];
		regNoofficeTypetestCase.forEach(async (testCase) => {
			it('IT company search with regNo and officeType', async () => {
				const queryString = `?countries=IT&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('IT vatNo', () => {
		const vatNoTestCases = ['07589380968', '05058160283', '03660670963', '12684820967', '02294060799'];
		vatNoTestCases.forEach(async (testCase) => {
			it(`IT company with vatNo:${testCase}`, async () => {
				const queryString = `?countries=IT&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: '07589380968',
					city: 'MILANO',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and city: ${testCase.params.city}`, async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNohouseNotestCase = [
			{
				params: {
					vatNo: '07589380968',
					houseNo: 'MILANO',
				},
			},
		];
		vatNohouseNotestCase.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and houseNo: ${testCase.params.houseNo}`, async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: '07589380968',
					postCode: '20122',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCase = [
			{
				params: {
					vatNo: '07589380968',
					province: 'MI',
				},
			},
		];
		vatNoprovincetestCase.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: '07589380968',
					simpleValue: 'VIA PANTANO, 2, MILANO, 20122, MI',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('IT company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: '07589380968',
					street: 'VIA PANTANO',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('IT company search with vatNo and street', async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: '07589380968',
					name: 'CREDITSAFE ITALIA S.R.L.',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('IT company search with vatNo and name', async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: '07589380968',
					phoneNo: '01119464600',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('IT company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=IT&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: '07589380968',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					vatNo: '05058160283',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					vatNo: 'SCHMTT97P08F839S',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587301',
				},
			},
			{
				params: {
					vatNo: 'RMNLRA74L48B354Z',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587303',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const vatNotypetestCases = [
			{
				params: {
					vatNo: '07589380968',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					vatNo: '05058160283',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					vatNo: 'SCHMTT97P08F839S',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587301',
				},
			},
			{
				params: {
					vatNo: 'RMNLRA74L48B354Z',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08587303',
				},
			},
		];
		vatNotypetestCases.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const vatNoofficeTypetestCases = [
			{
				params: {
					vatNo: '07589380968',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02903722',
				},
			},
			{
				params: {
					vatNo: '05058160283',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08955884',
				},
			},
			{
				params: {
					vatNo: '05611940486',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02367583',
				},
			},
			{
				params: {
					vatNo: '07307730965',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02930474',
				},
			},
		];
		vatNoofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with vatNo: ${testCase.params.vatNo} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT city', () => {
		const cityTestCases = ['MILANO', 'LIMENA', 'CESENATICO', 'PALERMO', 'CATANZARO'];
		cityTestCases.forEach(async (testCase) => {
			it(`IT company with city:${testCase}`, async () => {
				const queryString = `?countries=IT&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const cityhouseNotestCase = [
			{
				params: {
					city: 'LIMENA',
					houseNo: '56',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					houseNo: '184',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					houseNo: '43/45',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					houseNo: '178/180',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		cityhouseNotestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'MILANO',
					postCode: '20144',
				},
				expected: {
					key: 'safeNo',
					value: 'IT14312517',
				},
			},
			{
				params: {
					city: 'LIMENA',
					postCode: '35010',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08440950',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					postCode: '47042',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02404052',
				},
			},
			{
				params: {
					city: 'PALERMO',
					postCode: '90142',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04542255',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					postCode: '88100',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08571490',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const cityprovincetestCase = [
			{
				params: {
					city: 'MILANO',
					province: 'MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					city: 'LIMENA',
					province: 'PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					province: 'FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					province: 'PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					province: 'CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		cityprovincetestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'MILANO',
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					city: 'LIMENA',
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'MILANO',
					street: 'VIA TORTONA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					city: 'LIMENA',
					street: 'VIA ROMA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					street: 'VIA MAZZINI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					street: 'VIA AMMIRAGLIO RIZZO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					street: 'VIA PIO X',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'MILANO',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					city: 'LIMENA',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'MILANO',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					city: 'LIMENA',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					city: 'PALERMO',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'MILANO',
					status: 'NonActive',
				},
			},
			{
				params: {
					city: 'LIMENA',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'PALERMO',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					status: 'NonActive',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const citytypetestCase = [
			{
				params: {
					city: 'MILANO',
					type: 'Ltd',
				},
			},
			{
				params: {
					city: 'LIMENA',
					type: 'Ltd',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					type: 'Ltd',
				},
			},
			{
				params: {
					city: 'PALERMO',
					type: 'NonLtd',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					type: 'NonLtd',
				},
			},
		];
		citytypetestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const cityofficeTypetestCase = [
			{
				params: {
					city: 'MILANO',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'LIMENA',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'CESENATICO',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					city: 'PALERMO',
					officeType: 'other',
				},
			},
			{
				params: {
					city: 'CATANZARO',
					officeType: 'other',
				},
			},
		];
		cityofficeTypetestCase.forEach(async (testCase) => {
			it(`IT company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT houseNo', () => {
		const houseNoTestCases = ['25', '56', '184', '43/45', '178/180'];
		houseNoTestCases.forEach(async (testCase) => {
			it(`IT company with houseNo:${testCase}`, async () => {
				const queryString = `?countries=IT&houseNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line2 === `${testCase}`), true);
			});
		});
		const houseNopostCodetestCase = [
			{
				params: {
					houseNo: '25',
					postCode: '20144',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					houseNo: '56',
					postCode: '35010',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					postCode: '47042',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					postCode: '90142',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					postCode: '88100',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNopostCodetestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const houseNoprovincetestCase = [
			{
				params: {
					houseNo: '25',
					province: 'MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04616298',
				},
			},
			{
				params: {
					houseNo: '56',
					province: 'PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03202984',
				},
			},
			{
				params: {
					houseNo: '184',
					province: 'FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					province: 'PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					province: 'CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNoprovincetestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const houseNosimpleValuetestCase = [
			{
				params: {
					houseNo: '25',
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					houseNo: '56',
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNosimpleValuetestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const houseNostreettestCase = [
			{
				params: {
					houseNo: '25',
					street: 'VIA TORTONA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02873896',
				},
			},
			{
				params: {
					houseNo: '56',
					street: 'VIA ROMA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					street: 'VIA MAZZINI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					street: 'VIA AMMIRAGLIO RIZZO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					street: 'VIA PIO X',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNostreettestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNonametestCase = [
			{
				params: {
					houseNo: '25',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					houseNo: '56',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNonametestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNophoneNotestCase = [
			{
				params: {
					houseNo: '25',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					houseNo: '56',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		houseNophoneNotestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				// assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const houseNostatustestCase = [
			{
				params: {
					houseNo: '25',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					houseNo: '56',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					houseNo: '178/180',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02677742',
				},
			},
		];
		houseNostatustestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const houseNotypetestCase = [
			{
				params: {
					houseNo: '25',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					houseNo: '56',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02199833',
				},
			},
			{
				params: {
					houseNo: '178/180',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04579740',
				},
			},
		];
		houseNotypetestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const houseNoofficeTypetestCase = [
			{
				params: {
					houseNo: '25',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					houseNo: '56',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					houseNo: '184',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					houseNo: '43/45',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT14272174',
				},
			},
			{
				params: {
					houseNo: '42',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02677742',
				},
			},
		];
		houseNoofficeTypetestCase.forEach(async (testCase) => {
			it(`IT company search with houseNo: ${testCase.params.houseNo} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&houseNo=${testCase.params.houseNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line2 === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT postCode', () => {
		const postCodetestCases = ['20144', '35010', '47042', '90142', '88100'];
		postCodetestCases.forEach(async (testCase) => {
			it(`IT company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=IT&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '20144',
					province: 'MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					postCode: '35010',
					province: 'PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03250310',
				},
			},
			{
				params: {
					postCode: '47042',
					province: 'FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424691',
				},
			},
			{
				params: {
					postCode: '90142',
					province: 'PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					postCode: '88100',
					province: 'CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '20144',
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					postCode: '35010',
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					postCode: '47042',
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					postCode: '90142',
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					postCode: '88100',
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '20144',
					street: 'VIA TORTONA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02917747',
				},
			},
			{
				params: {
					postCode: '35010',
					street: 'VIA ROMA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03250996',
				},
			},
			{
				params: {
					postCode: '47042',
					street: 'VIA MAZZINI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					postCode: '90142',
					street: 'VIA AMMIRAGLIO RIZZO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					postCode: '88100',
					street: 'VIA PIO X',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '20144',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					postCode: '35010',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					postCode: '47042',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					postCode: '90142',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					postCode: '88100',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '20144',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					postCode: '35010',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					postCode: '47042',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					postCode: '90142',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					postCode: '88100',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '20144',
					status: 'NonActive',
				},
			},
			{
				params: {
					postCode: '35010',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '47042',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '90142',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '88100',
					status: 'NonActive',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const postCodetypetestCases = [
			{
				params: {
					postCode: '20144',
					type: 'Ltd',
				},
			},
			{
				params: {
					postCode: '35010',
					type: 'Ltd',
				},
			},
			{
				params: {
					postCode: '47042',
					type: 'Ltd',
				},
			},
			{
				params: {
					postCode: '90142',
					type: 'NonLtd',
				},
			},
			{
				params: {
					postCode: '88100',
					type: 'NonLtd',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '20144',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					postCode: '35010',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03250310',
				},
			},
			{
				params: {
					postCode: '47042',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424691',
				},
			},
			{
				params: {
					postCode: '90139',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03167668',
				},
			},
			{
				params: {
					postCode: '88100',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08571490',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT province', () => {
		const postCodetestCases = ['MI', 'PD', 'FO', 'PA', 'CZ'];
		postCodetestCases.forEach(async (testCase) => {
			it(`IT company with province:${testCase}`, async () => {
				const queryString = `?countries=IT&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincesimpleValuetestCases = [
			{
				params: {
					province: 'MI',
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					province: 'PD',
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					province: 'fo',
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					province: 'Pa',
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					province: 'CZ',
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		provincesimpleValuetestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'PD',
					street: 'VIA TORTONA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08611376',
				},
			},
			{
				params: {
					province: 'pd',
					street: 'VIA ROMA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08503866',
				},
			},
			{
				params: {
					province: 'fo',
					street: 'VIA MAZZINI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					province: 'PA',
					street: 'VIA AMMIRAGLIO RIZZO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					province: 'cZ',
					street: 'VIA PIO X',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'MI',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					province: 'PD',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					province: 'fo',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					province: 'pa',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					province: 'CZ',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincephoneNotestCases = [
			{
				params: {
					province: 'MI',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					province: 'PD',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					province: 'fo',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					province: 'PA',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					province: 'CZ',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		provincephoneNotestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'MI',
					status: 'NonActive',
				},
			},
			{
				params: {
					province: 'PD',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'FO',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'PA',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'CZ',
					status: 'NonActive',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const provincetypetestCases = [
			{
				params: {
					province: 'MI',
					type: 'Ltd',
				},
			},
			{
				params: {
					province: 'PD',
					type: 'Ltd',
				},
			},
			{
				params: {
					province: 'FO',
					type: 'Ltd',
				},
			},
			{
				params: {
					province: 'PA',
					type: 'NonLtd',
				},
			},
			{
				params: {
					province: 'CZ',
					type: 'NonLtd',
				},
			},
		];
		provincetypetestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'MI',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'PD',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'FO',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					province: 'PA',
					officeType: 'other',
				},
			},
			{
				params: {
					province: 'CZ',
					officeType: 'other',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with province: ${testCase.params.province} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.province === `${testCase.params.province}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT simpleValue', () => {
		const simpleValuetestCases = [
			'VIA TORTONA, 37, MILANO, 20144, PD',
			'VIA ROMA, 56, LIMENA, 35010, PD',
			'VIA MAZZINI, 184, CESENATICO, 47042, FO',
			'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
			'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
		];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`IT company with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=IT&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
					street: 'VIA TORTONA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02702847',
				},
			},
			{
				params: {
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
					street: 'VIA ROMA',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
					street: 'VIA MAZZINI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
					street: 'VIA AMMIRAGLIO RIZZO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
					street: 'VIA PIO X',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: 'VIA TORTONA, 25, MILANO, 20144, MI',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					simpleValue: 'VIA ROMA, 56, LIMENA, 35010, PD',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					simpleValue: 'VIA MAZZINI, 184, CESENATICO, 47042, FO',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					simpleValue: 'VIA AMMIRAGLIO RIZZO, 43/45, PALERMO, 90142, PA',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					simpleValue: 'VIA PIO X, 178/180, CATANZARO, 88100, CZ',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'VIA SENIGALLIA, 18/A, MILANO, 20161, MI',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08585694',
				},
			},
			{
				params: {
					simpleValue: 'VIA VALSUGANA, 250, SAN GIORGIO IN BOSCO, 35010, PD',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03247536',
				},
			},
			{
				params: {
					simpleValue: 'VIA ENRICO FERMI, 10, CESENATICO, 47042, FO',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422162',
				},
			},
			{
				params: {
					simpleValue: 'VIA VALSUGANA, 250, SAN GIORGIO IN BOSCO, 35010, PD',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03247536',
				},
			},
			{
				params: {
					simpleValue: 'VIA PRIMO MAGGIO, 14, SOVERATO, 88068, CZ',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08588465',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: 'VIA RONCHI, 2, MILANO, 20134, MI',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02726152',
				},
			},
			{
				params: {
					simpleValue: 'VIA VALSUGANA, 250, SAN GIORGIO IN BOSCO, 35010, PD',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03247536',
				},
			},
			{
				params: {
					simpleValue: 'VIA CARLO ALBERTO DALLA CHIESA, 73, TERRASINI, 90049, PA',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT06586545',
				},
			},
			{
				params: {
					simpleValue: 'VIA BARLAAM DA SEMINARA, 5, CATANZARO, 88100, CZ',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02300329',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'VIA RONCHI, 2, MILANO, 20134, MI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02726152',
				},
			},
			{
				params: {
					simpleValue: 'VIA VALSUGANA, 250, SAN GIORGIO IN BOSCO, 35010, PD',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03247536',
				},
			},
			{
				params: {
					simpleValue: 'VIA ENRICO FERMI, 10, CESENATICO, 47042, FO',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422162',
				},
			},
			{
				params: {
					simpleValue: 'VIA DEL BERSAGLIERE, 53, PALERMO, 90143, PA',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT19647789',
				},
			},
			{
				params: {
					simpleValue: 'VIA MAZZINI, 64, SAN PIETRO APOSTOLO, 88040, CZ',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02312364',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('IT street', () => {
		const streettestCases = ['VIA TORTONA', 'VIA ROMA', 'VIA MAZZINI', 'VIA AMMIRAGLIO RIZZO', 'VIA PIO X'];
		streettestCases.forEach(async (testCase) => {
			it(`IT company with street:${testCase}`, async () => {
				const queryString = `?countries=IT&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'VIA TORTONA',
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					street: 'VIA ROMA',
					name: 'MEDEPTA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					street: 'VIA MAZZINI',
					name: 'CAMPING ZADINA S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					street: 'VIA AMMIRAGLIO RIZZO',
					name: 'PRIME RETAIL S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					street: 'VIA PIO X',
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`IT company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'VIA TORTONA',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					street: 'VIA ROMA',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					street: 'VIA MAZZINI',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					street: 'VIA AMMIRAGLIO RIZZO',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					street: 'VIA PIO X',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`IT company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'VIA SENIGALLIA',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03354003',
				},
			},
			{
				params: {
					street: 'VIA VALSUGANA',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT11212159',
				},
			},
			{
				params: {
					street: 'VIA ENRICO FERMI',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02680030',
				},
			},
			{
				params: {
					street: 'VIA FRANCIA',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04484169',
				},
			},
			{
				params: {
					street: 'VIA PRIMO MAGGIO',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03116044',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`IT company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				// assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: 'VIA RONCHI',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08402049',
				},
			},
			{
				params: {
					street: 'VIA VALSUGANA',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT11212159',
				},
			},
			{
				params: {
					street: 'PZA FALCONE BORSELLINO',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422899',
				},
			},
			{
				params: {
					street: 'VIA CARLO ALBERTO DALLA CHIESA',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02381217',
				},
			},
			{
				params: {
					street: 'VIA BARLAAM DA SEMINARA',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02300329',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`IT company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}&type=${testCase.params.type}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				// assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'VIA RONCHI',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT01921904',
				},
			},
			{
				params: {
					street: 'VIA VALSUGANA',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					street: 'VIA FRANCIA',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08332060',
				},
			},
			{
				params: {
					street: 'CSO LUIGI EINAUDI',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT18977351',
				},
			},
			{
				params: {
					street: 'VIA MAZZINI',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT01731955',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT name', () => {
		const nametestCases = ['DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
			'MEDEPTA S.R.L.',
			'CAMPING ZADINA S.R.L.', 'PRIME RETAIL S.R.L.', 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.'];
		nametestCases.forEach(async (testCase) => {
			it(`IT company with name:${testCase}`, async () => {
				const queryString = `?countries=IT&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'DELOITTE EXTENDED BUSINESS SERVICES S.R.L. ED IN FORMA ABBREVIATA XBS - SRL',
					phoneNo: '0258111864',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02881079',
				},
			},
			{
				params: {
					name: 'MEDEPTA S.R.L.',
					phoneNo: '0498842551',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03248182',
				},
			},
			{
				params: {
					name: 'CAMPING ZADINA S.R.L.',
					phoneNo: '054782310',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02424592',
				},
			},
			{
				params: {
					name: 'PRIME RETAIL S.R.L.',
					phoneNo: '091542953',
				},
				expected: {
					key: 'safeNo',
					value: 'IT12924823',
				},
			},
			{
				params: {
					name: 'CALIO SOCIETA A RESPONSABILITA LIMITATA IN BREVE CALIO S.R.L.',
					phoneNo: '0961728110',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02297796',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`IT company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'GREEN FOX S.R.L.',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03354003',
				},
			},
			{
				params: {
					name: 'CTR S.R.L.',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					name: 'GNC SRL',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT13926900',
				},
			},
			{
				params: {
					name: 'FANTASTIC SERVICE S.R.L.',
					status: 'Nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03116044',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`IT company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'GAMA INTERNATIONAL S.R.L.',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02898266',
				},
			},
			{
				params: {
					name: 'CTR S.R.L.',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					name: 'KAPITAL IMMOBILIARE S.R.L.',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422899',
				},
			},
			{
				params: {
					name: 'I.R.E.S. - ISTITUTO DI STUDI E RICERCHE ECONOMICHE E SOCIALI - IMPRESA SOCIALE',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08312874',
				},
			},
			{
				params: {
					name: 'GENTILE SOCIETA SEMPLICE',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02300329',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`IT company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'GAMA INTERNATIONAL S.R.L.',
					exact: 'true',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02898266',
				},
			},
			{
				params: {
					name: 'GAMA INTERNATIONAL S.R.L.',
					exact: 'false',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02819835',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it(`IT company search with name: ${testCase.params.name} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'GAMA INTERNATIONAL S.R.L.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02898266',
				},
			},
			{
				params: {
					name: 'CTR S.R.L.',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					name: 'GNC SRL',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT13926900',
				},
			},
			{
				params: {
					name: 'SUADERS S.R.L.',
					officeType: 'Other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT18977351',
				},
			},
			{
				params: {
					name: 'TIMO COSTRUZIONI S.R.L.',
					officeType: 'Other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT01731955',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('IT phoneNo', () => {
		const phoneNotestCases = ['0258111864', '0498842551', '054782310', '091542953', '0961728110'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`IT company with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=IT&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '072140871',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03354003',
				},
			},
			{
				params: {
					phoneNo: '0424568133',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					phoneNo: '0744607948',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04103200',
				},
			},
			{
				params: {
					phoneNo: '0818185860',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03116044',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it(`IT company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=IT&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const phoneNotypetestCases = [
			{
				params: {
					phoneNo: '0226417365',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02898266',
				},
			},
			{
				params: {
					phoneNo: '0424568133',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					phoneNo: '054365105',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02422899',
				},
			},
			{
				params: {
					phoneNo: '0916859834',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT08312874',
				},
			},
			{
				params: {
					phoneNo: '0961775381',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02300329',
				},
			},
		];
		phoneNotypetestCases.forEach(async (testCase) => {
			it(`IT company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const phoneNoofficeTypetestCases = [
			{
				params: {
					phoneNo: '0226417365',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02898266',
				},
			},
			{
				params: {
					phoneNo: '0424568133',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04305938',
				},
			},
			{
				params: {
					phoneNo: '3334803167',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02367583',
				},
			},
			{
				params: {
					phoneNo: '0143746306',
					officeType: 'other',
				},
				expected: {
					key: 'safeNo',
					value: 'IT01731955',
				},
			},
		];
		phoneNoofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with phoneNo: ${testCase.params.phoneNo} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&phoneNo=${testCase.params.phoneNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`IT company with status:${testCase}`, async () => {
				const queryString = `?countries=IT&status=${testCase}`;
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
					status: 'NonActive',
					type: 'Ltd',
				},
			},
			{
				params: {
					status: 'Active',
					type: 'NonLtd',
				},
			},
			{
				params: {
					status: 'NonActive',
					type: 'NonLtd',
				},
			},
		];
		statustypetestCases.forEach(async (testCase) => {
			it(`IT company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=IT&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const statusofficeTypetestCases = [
			{
				params: {
					status: 'Active',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					status: 'NonActive',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					status: 'Active',
					officeType: 'other',
				},
			},
			{
				params: {
					status: 'NonActive',
					officeType: 'other',
				},
			},
		];
		statusofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with status: ${testCase.params.status} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&status=${testCase.params.status}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT type', () => {
		const typetestCases = ['Ltd', 'NonLtd'];
		typetestCases.forEach(async (testCase) => {
			it(`IT company with type:${testCase}`, async () => {
				const queryString = `?countries=IT&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
		const typeofficeTypetestCases = [
			{
				params: {
					type: 'Ltd',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					type: 'NonLtd',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					type: 'Ltd',
					officeType: 'other',
				},
			},
			{
				params: {
					type: 'NonLtd',
					officeType: 'other',
				},
			},
		];
		typeofficeTypetestCases.forEach(async (testCase) => {
			it(`IT company search with type: ${testCase.params.type} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=IT&type=${testCase.params.type}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('IT officeType', () => {
		const officeTypetestCases = ['headOffice', 'other'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`IT company with officeType:${testCase}`, async () => {
				const queryString = `?countries=IT&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
	});

	describe('IT partialmatches', () => {
		const partialpostCodetestCases = [
			{
				params: {
					postCode: '20 90 0',
				},
				expected: {
					postCode: '20900',
				},
			},
			{
				params: {
					postCode: '20900',
				},
				expected: {
					postCode: '20900',
				},
			},
			{
				params: {
					postCode: '20',
				},
				expected: {
					postCode: '20',
				},
			},
			{
				params: {
					postCode: '209',
				},
				expected: {
					postCode: '20900',
				},
			},
			{
				params: {
					postCode: '2014',
				},
				expected: {
					postCode: '2014',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`IT company search with valid partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=IT&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.expected.postCode}`), true);
			});
		});
	});

	describe('IT synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'THERMAE SRL THERMAE S.R.L.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02084603',
				},
			},
			{
				params: {
					name: 'GAROFALO srl',
				},
				expected: {
					key: 'safeNo',
					value: 'IT03524187',
				},
			},
			{
				params: {
					name: 'GAROFALO Spa',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02683275',
				},
			},
			{
				params: {
					name: 'GABRIELLA GAROFALO HAIR S.P.A.',
				},
				expected: {
					key: 'safeNo',
					value: 'IT05204399',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`IT company search with namesynonyms: ${testCase.params.name}`, async () => {
				const querystring = `?countries=IT&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'vicolo PESCATORI',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04492979',
				},
			},
			{
				params: {
					street: 'STRADA BIBANO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT04143243',
				},
			},
			{
				params: {
					street: 'piazzale EGEO',
				},
				expected: {
					key: 'safeNo',
					value: 'IT02783202',
				},
			},
			{
				params: {
					street: 'lungomare SUD',
				},
				expected: {
					key: 'safeNo',
					value: 'IT16806434',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`IT company search with streetsynonyms: ${testCase.params.street}`, async () => {
				const querystring = `?countries=IT&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe(' IT Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns IT company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=IT&name=${testCase}`;
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
			it(`returns IT company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=IT&name=${testCase}`;
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
			it(`returns IT company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=IT&name=${testCase}`;
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
