import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('CA Regression Tests', async () => {
	describe('CA grouping results', () => {
		const testCases = [false, true];

		testCases.forEach(async (groupResults) => {
			it(`CA company search with group results flag set to ${groupResults}`, async () => {
				const querystring = `?countries=CA&name=TD BANK FINANCIAL&groupResults=${groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);

				const { alternatives } = response.data.companies[0];
				assert.equal(
					groupResults === true
						? alternatives !== undefined
						: alternatives === undefined,
					true,
				);
			});
		});
	});

	describe('CA synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'agent FOODS CANADA ROSETOWN PULS',
				},
				expected: {
					name: 'AGT FOODS CANADA ROSETOWN PULS',
				},
			},
			{
				params: {
					name: 'R.C. WITZKE p.c.',
				},
				expected: {
					name: 'R.C. WITZKE PROFESSIONAL CORPORATION',
				},
			},
			{
				params: {
					name: 'INDIAN TIME dr THRU',
				},
				expected: {
					name: 'INDIAN TIME DRIVE THRU',
				},
			},
			{
				params: {
					name: 'COMPOSITES INNOVATION center',
				},
				expected: {
					name: 'COMPOSITES INNOVATION CTR',
				},
			},
			{
				params: {
					name: 'RESTAURANT BLACKSTRAP barbeque',
				},
				expected: {
					name: 'RESTAURANT BLACKSTRAP BBQ',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`CA company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'saint johns',
					name: 'BRITISH CONFECTIONERY COMPANY LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'CA08902180',
				},
			},
			{
				params: {
					city: 'saint johns',
					name: 'WEATHER SHINE WINDOWS INC',
				},
				expected: {
					key: 'safeNo',
					value: 'CA09172824',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`CA company search with citysynonym: ${testCase.params.city} and name : ${testCase.params.name}`, async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === testCase.expected.value), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'TUNNEL arc CHARLOTTE MEWS',
				},
				expected: {
					street: 'TUNNEL ARCADE CHARLOTTE MEWS',
				},
			},
			{
				params: {
					street: '222 SUN canyn CRES SE',
				},
				expected: {
					street: '222 SUN CANYON CRES SE',
				},
			},
			{
				params: {
					street: '77 FIMA CREScent',
				},
				expected: {
					street: '77 FIMA CRES',
				},
			},
			{
				params: {
					street: '50 SPORTSWORLD xing RD SUITE 290',
				},
				expected: {
					street: '50 SPORTSWORLD CROSSING RD SUITE 290',
				},
			},
			{
				params: {
					street: '349 nl',
				},
				expected: {
					street: '349 NEWFOUNDLAND AND LABRADOR',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`CA company search with streetsynonym: ${testCase.params.street}`, async () => {
				const queryString = `?countries=CA&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
			});
		});
	});

	describe('CA stopword searches searches', () => {
		const namestopwordtestCases = [
			{
				params: {
					name: 'N to P LTD',
				},
				expected: {
					name: 'N A P LTD',
				},
			},
			{
				params: {
					name: '5788 for NUNAVUT with llc LTD.',
				},
				expected: {
					name: '5788 NUNAVUT LTD.',
				},
			},
			{
				params: {
					name: 'UNICON for BUILDS',
				},
				expected: {
					name: 'UNICON BUILDS',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO a LTD',
				},
				expected: {
					name: '1683933 ONTARIO LTD',
				},
			},
			{
				params: {
					name: 'CORE STUCCO STONE llp LIMITED',
				},
				expected: {
					name: 'CORE STUCCO STONE LIMITED',
				},
			},
		];
		namestopwordtestCases.forEach(async (testCase) => {
			it(`CA company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
	});

	describe('CA partialmatches', () => {
		const partialpostCodetestCases = [
			{
				params: {
					postCode: 'L5B1M5',
					name: '10463566 CANADA INC.',
				},
				expected: {
					key: 'safeNo',
					value: 'CA12704130',
				},
			},
			{
				params: {
					postCode: 'A1C2Z5',
					name: '5788 NUNAVUT LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'CA12210153',
				},
			},
			{
				params: {
					postCode: 'N2B',
					name: 'ERWIN HYMER GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'CA08866055',
				},
			},
			{
				params: {
					postCode: 'H3B',
					name: 'SIGNE HURTUBISE INC',
				},
				expected: {
					key: 'safeNo',
					value: 'CA12342703',
				},
			},
			{
				params: {
					postCode: 'M  5H 2G4',
					name: 'PULSE RX PHARMACY',
				},
				expected: {
					key: 'safeNo',
					value: 'CA10859138',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`CA company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=CA&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialsafeNotestCases = [
			{
				params: {
					safeNo: 'Ca11009638',
				},
				expected: {
					key: 'safeNo',
					value: 'CA11009638',
				},
			},
			{
				params: {
					safeNo: 'ca07835677',
				},
				expected: {
					key: 'safeNo',
					value: 'CA07835677',
				},
			},
			{
				params: {
					safeNo: '11009638',
				},
				expected: {
					key: 'safeNo',
					value: 'CA11009638',
				},
			},
			{
				params: {
					safeNo: '12203542',
				},
				expected: {
					key: 'safeNo',
					value: 'CA12203542',
				},
			},
		];
		partialsafeNotestCases.forEach(async (testCase) => {
			it(`CA company search with partialsafeNo: ${testCase.params.safeNo}`, async () => {
				const querystring = `?countries=CA&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('CA id searches', () => {
		const idTestCases = ['CA-X-CA11733281', 'CA-X-CA07835677', 'CA-X-CA03211695', 'CA-X-CA01498170', 'CA-X-CA12203542'];
		idTestCases.forEach(async (testCase) => {
			it(`CA company search with id:${testCase}`, async () => {
				const queryString = `?countries=CA&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idgroupResultstestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					groupResults: 'true',
				},
			},
		];
		idgroupResultstestCase.forEach(async (testCase) => {
			it(`CA company search with id:${testCase.params.id} and groupResults: ${testCase.params.groupResults}`, async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase.params.id}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					safeNo: 'CA11733281',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('CA company search with id and safeNo', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					regNo: 'BC0513312',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('CA company search with id and regNo', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idfileNotestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					fileNo: '0160693177',
				},
			},
		];
		idfileNotestCase.forEach(async (testCase) => {
			it('CA company search with id and fileNo', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&fileNo=${testCase.params.fileNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('CA company search with id and status', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					name: 'CREDITSAFE CANADA',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('CA company search with id and name', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					postCode: 'L5B1M5',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('CA company search with id and postCode', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					province: 'ON',
				},
			},
		];
		idprovincetestCase.forEach(async (testCase) => {
			it('CA company search with id and province', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					city: 'MISSISSAUGA',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('CA company search with id and city', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					street: '77 CITY CENTRE DR SUITE 300',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('CA company search with id and street', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					phoneNo: '7920582908',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('CA company search with id and phoneNo', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCase = [
			{
				params: {
					id: 'CA-X-CA11733281',
					officeType: 'headoffice',
				},
			},
		];
		idofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with id and officetype', async () => {
				const queryString = `?countries=CA&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CA safeNo searches', () => {
		const safeNoTestCases = ['CA11733281', 'CA07835677', 'CA03211695', 'CA01498170', 'CA12203542'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`CA company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=CA&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNogroupResultstestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					groupResults: 'true',
				},
			},
		];
		safeNogroupResultstestCase.forEach(async (testCase) => {
			it(`CA company search with safeNo:${testCase.params.safeNo} and groupResults: ${testCase.params.groupResults}`, async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.params.safeNo}`), true);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					regNo: 'BC0513312',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and regNo', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNofileNotestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					fileNo: '0160693177',
				},
			},
		];
		safeNofileNotestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and fileNo', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&fileNo=${testCase.params.fileNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					status: 'Active',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and status', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					name: 'CREDITSAFE CANADA',
				},
			},
		];
		safeNonametestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and name', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					postCode: 'L5B1M5',
				},
			},
		];
		safeNopostCodetestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and postCode', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					province: 'ON',
				},
			},
		];
		safeNoprovincetestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and province', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					city: 'MISSISSAUGA',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and city', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					street: '77 CITY CENTRE DR SUITE 300',
				},
			},
		];
		safeNostreettestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and street', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					phoneNo: '7920582908',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCase = [
			{
				params: {
					safeNo: 'CA11733281',
					officeType: 'headoffice',
				},
			},
		];
		safeNoofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with safeNo and officetype', async () => {
				const queryString = `?countries=CA&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CA regNo searches', () => {
		const regNoTestCases = ['2014542829', '2193793', '335979', 'BC0513312', '1171480586'];
		regNoTestCases.forEach(async (testCase) => {
			it(`CA company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=CA&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNogroupResultstestCase = [
			{
				params: {
					regNo: '2014542829',
					groupResults: 'true',
				},
			},
		];
		regNogroupResultstestCase.forEach(async (testCase) => {
			it(`CA company search with regNo:${testCase.params.regNo} and groupResults: ${testCase.params.groupResults}`, async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.params.regNo}`), true);
			});
		});
		const regNofileNotestCase = [
			{
				params: {
					regNo: '2014542829',
					fileNo: '0160693177',
				},
			},
		];
		regNofileNotestCase.forEach(async (testCase) => {
			it('CA company search with regNo and fileNo', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&fileNo=${testCase.params.fileNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: '2014542829',
					status: 'Active',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('CA company search with regNo and status', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: '2014542829',
					name: 'CREDITSAFE CANADA',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('CA company search with regNo and name', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: '2014542829',
					postCode: 'L5B1M5',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it('CA company search with regNo and postCode', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCase = [
			{
				params: {
					regNo: '2014542829',
					province: 'ON',
				},
			},
		];
		regNoprovincetestCase.forEach(async (testCase) => {
			it('CA company search with regNo and province', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: '2014542829',
					city: 'MISSISSAUGA',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it('CA company search with regNo and city', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: '2014542829',
					street: '77 CITY CENTRE DR SUITE 300',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('CA company search with regNo and street', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: '2014542829',
					phoneNo: '7920582908',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('CA company search with regNo and phoneNo', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCase = [
			{
				params: {
					regNo: '2014542829',
					officeType: 'headoffice',
				},
			},
		];
		regNoofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with regNo and officetype', async () => {
				const queryString = `?countries=CA&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CA fileNo searches', () => {
		const fileNoTestCases = ['0160693177', '0096532725', '0061523081', '0118707524', '0160693177'];
		fileNoTestCases.forEach(async (testCase) => {
			it(`CA company search with fileNo:${testCase}`, async () => {
				const queryString = `?countries=CA&fileNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.fileNo === `${testCase}`), true);
			});
		});
		const fileNogroupResultstestCase = [
			{
				params: {
					fileNo: '0160693177',
					groupResults: 'true',
				},
			},
		];
		fileNogroupResultstestCase.forEach(async (testCase) => {
			it(`CA company search with fileNo:${testCase.params.fileNo} and groupResults: ${testCase.params.groupResults}`, async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length = 1, true);
				assert.equal(response.data.companies.some((company) => company.fileNo === `${testCase.params.fileNo}`), true);
			});
		});
		const fileNostatustestCase = [
			{
				params: {
					fileNo: '0160693177',
					status: 'Active',
				},
			},
			{
				params: {
					fileNo: '0096532725',
					status: 'Active',
				},
			},
			{
				params: {
					fileNo: '0061523081',
					status: 'Active',
				},
			},
			{
				params: {
					fileNo: '0118707524',
					status: 'Active',
				},
			},
			{
				params: {
					fileNo: '0163844753',
					status: 'NonActive',
				},
			},
		];
		fileNostatustestCase.forEach(async (testCase) => {
			it(`CA company search with fileNo:${testCase.params.fileNo} and status:${testCase.params.status}`, async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.fileNo === `${testCase.params.fileNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const fileNonametestCase = [
			{
				params: {
					fileNo: '0160693177',
					name: 'CREDITSAFE CANADA',
				},
			},
		];
		fileNonametestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and name', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNopostCodetestCase = [
			{
				params: {
					fileNo: '0160693177',
					postCode: 'L5B1M5',
				},
			},
		];
		fileNopostCodetestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and postCode', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNoprovincetestCase = [
			{
				params: {
					fileNo: '0160693177',
					province: 'ON',
				},
			},
		];
		fileNoprovincetestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and province', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNocitytestCase = [
			{
				params: {
					fileNo: '0160693177',
					city: 'MISSISSAUGA',
				},
			},
		];
		fileNocitytestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and city', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNostreettestCase = [
			{
				params: {
					fileNo: '0160693177',
					street: '77 CITY CENTRE DR SUITE 300',
				},
			},
		];
		fileNostreettestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and street', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNophoneNotestCase = [
			{
				params: {
					fileNo: '0160693177',
					phoneNo: '7920582908',
				},
			},
		];
		fileNophoneNotestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and phoneNo', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const fileNoofficeTypetestCase = [
			{
				params: {
					fileNo: '0160693177',
					officeType: 'headoffice',
				},
			},
		];
		fileNoofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with fileNo and officetype', async () => {
				const queryString = `?countries=CA&fileNo=${testCase.params.fileNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('CA name searches', () => {
		const nameTestCases = ['UNICON BUILDS', 'CEDAR RIDGE ELECTRICAL', '1683933 ONTARIO LTD', 'INNREP INC.', '2562619 ONTARIO INC.'];
		nameTestCases.forEach(async (testCase) => {
			it(`CA company search with name:${testCase}`, async () => {
				const queryString = `?countries=CA&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const namegroupResultstestCase = [
			{
				params: {
					name: 'Sears',
					groupResults: 'true',
				},
			},
			{
				params: {
					name: 'Sears',
					groupResults: 'false',
				},
			},
		];
		namegroupResultstestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and groupResults: ${testCase.params.groupResults}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length = 1, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.params.name.toLowerCase()}`), true);
			});
		});
		const namestatustestCase = [
			{
				params: {
					name: 'UNICON BUILDS',
					status: 'Active',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					status: 'Active',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					status: 'Active',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					status: 'Active',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2320610 ONTARIO INC',
					status: 'NonActive',
				},
				expected: {
					safeNo: 'CA10821039',
				},
			},
		];
		namestatustestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and status:${testCase.params.status}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namepostCodetestCase = [
			{
				params: {
					name: 'UNICON BUILDS',
					postCode: 'L4Z0A3',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					postCode: 'B0P1P0',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					postCode: 'L6X5N1',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					postCode: 'L1V2X8',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2320610 ONTARIO INC',
					postCode: 'L4W4Y9',
				},
				expected: {
					safeNo: 'CA10821039',
				},
			},
		];
		namepostCodetestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and postCode:${testCase.params.postCode}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&postCode=${testCase.params.postCode}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const nameprovincetestCase = [
			{
				params: {
					name: 'UNICON BUILDS',
					province: 'ON',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					province: 'NS',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '5788 NUNAVUT LTD',
					province: 'NL',
				},
				expected: {
					safeNo: 'CA12210153',
				},
			},
			{
				params: {
					name: 'VALY GLEN DAIRIES',
					province: 'MB',
				},
				expected: {
					safeNo: 'CA04220076',
				},
			},
			{
				params: {
					name: 'CORE STUCCO STONE LIMITED',
					province: 'BC',
				},
				expected: {
					safeNo: 'CA12210175',
				},
			},
		];
		nameprovincetestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and province:${testCase.params.province}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&province=${testCase.params.province}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namecitytestCase = [
			{
				params: {
					name: 'UNICON BUILDS',
					city: 'MISSISSAUGA',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					city: 'FALMOUTH',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					city: 'BRAMPTON',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					city: 'PICKERING',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2562619 ONTARIO INC.',
					city: 'ST CATHARINES',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		namecitytestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and city:${testCase.params.city}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&city=${testCase.params.city}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namestreettestCase = [
			{
				params: {
					name: 'UNICON BUILDS',
					street: '90 ABSOLUTE AVE SUITE 1001',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					street: '19 TOWN RD',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					street: '9 GLACIER RD',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					street: '1801 FOLEYET CRES',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2562619 ONTARIO INC.',
					street: '12 LOYALIST DR',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		namestreettestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and street:${testCase.params.street}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&street=${testCase.params.street}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const namephoneNotestCase = [
			{
				params: {
					name: '5788 NUNAVUT LTD',
					phoneNo: '7097289460',
				},
				expected: {
					safeNo: 'CA12210153',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					phoneNo: '9026798017',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					phoneNo: '4162064208',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					phoneNo: '6477466762',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2562619 ONTARIO INC.',
					phoneNo: '4168467487',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		namephoneNotestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and phoneNo:${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const nameofficeTypetestCase = [
			{
				params: {
					name: '5788 NUNAVUT LTD',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'CA12210153',
				},
			},
			{
				params: {
					name: 'CEDAR RIDGE ELECTRICAL',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					name: '1683933 ONTARIO LTD',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					name: 'INNREP INC.',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					name: '2562619 ONTARIO INC.',
					officeType: 'headOffice',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		nameofficeTypetestCase.forEach(async (testCase) => {
			it(`CA company search with name:${testCase.params.name} and officeType:${testCase.params.officeType}`, async () => {
				const queryString = `?countries=CA&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('CA postCode searches', () => {
		const postCodeTestCases = ['L4Z0A3', 'B0P1P0', 'L6X5N1', 'L1V2X8', 'L2N3J8'];
		postCodeTestCases.forEach(async (testCase) => {
			it(`CA company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=CA&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodegroupResultstestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					groupResults: 'true',
				},
			},
			{
				params: {
					postCode: 'L4Z0A3',
					groupResults: 'false',
				},
			},
		];
		postCodegroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with postCode and groupResults', async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const postCodestatustestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: 'L4Z0A3',
					status: 'nonactive',
				},
			},
		];
		postCodestatustestCase.forEach(async (testCase) => {
			it('CA company search with postCode and status', async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const postCodeprovincetestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					province: 'ON',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					postCode: 'B0P1P0',
					province: 'NS',
				},
				expected: {
					safeNo: 'CA12319212',
				},
			},
		];
		postCodeprovincetestCase.forEach(async (testCase) => {
			it(`CA company search with postCode:${testCase.params.postCode} and province:${testCase.params.province}`, async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&province=${testCase.params.province}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodecitytestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					city: 'MISSISSAUGA',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					postCode: 'B0P1P0',
					city: 'FALMOUTH',
				},
				expected: {
					safeNo: 'CA00362177',
				},
			},
			{
				params: {
					postCode: 'L6X5N1',
					city: 'BRAMPTON',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					postCode: 'L1V2X8',
					city: 'PICKERING',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					postCode: 'L2N3J8',
					city: 'ST CATHARINES',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		postCodecitytestCase.forEach(async (testCase) => {
			it(`CA company search with postCode:${testCase.params.postCode} and city:${testCase.params.city}`, async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&city=${testCase.params.city}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodestreettestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					street: '90 ABSOLUTE AVE SUITE 1001',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					postCode: 'B0P1P0',
					street: '19 TOWN RD',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					postCode: 'L6X5N1',
					street: '9 GLACIER RD',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					postCode: 'L1V2X8',
					street: '1801 FOLEYET CRES',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					postCode: 'L2N3J8',
					street: '12 LOYALIST DR',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		postCodestreettestCase.forEach(async (testCase) => {
			it(`CA company search with postCode:${testCase.params.postCode} and street:${testCase.params.street}`, async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodephoneNotestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					phoneNo: '4168254606',
				},
				expected: {
					safeNo: 'CA12022299',
				},
			},
			{
				params: {
					postCode: 'B0P1P0',
					phoneNo: '9026798017',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					postCode: 'L6X5N1',
					phoneNo: '4162064208',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					postCode: 'L1V2X8',
					phoneNo: '6477466762',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					postCode: 'L2N3J8',
					phoneNo: '4168467487',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		postCodephoneNotestCase.forEach(async (testCase) => {
			it(`CA company search with postCode:${testCase.params.postCode} and phoneNo:${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const postCodeofficeTypetestCase = [
			{
				params: {
					postCode: 'L4Z0A3',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with postCode and officetype', async () => {
				const queryString = `?countries=CA&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});

	describe('CA province searches', () => {
		const provinceTestCases = ['ON'];
		provinceTestCases.forEach(async (testCase) => {
			it('CA company search with province', async () => {
				const queryString = `?countries=CA&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const provincegroupResultstestCase = [
			{
				params: {
					province: 'ON',
					groupResults: 'true',
				},
			},
			{
				params: {
					province: 'ON',
					groupResults: 'false',
				},
			},
		];
		provincegroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with province and groupResults', async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const provincestatustestCase = [
			{
				params: {
					province: 'ON',
					status: 'Active',
				},
			},
			{
				params: {
					province: 'ON',
					status: 'nonactive',
				},
			},
		];
		provincestatustestCase.forEach(async (testCase) => {
			it('CA company search with province and status', async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const provincecitytestCase = [
			{
				params: {
					province: 'ON',
					city: 'MISSISSAUGA',
				},
				expected: {
					safeNo: 'CA12711149',
				},
			},
			{
				params: {
					province: 'NS',
					city: 'FALMOUTH',
				},
				expected: {
					safeNo: 'CA12329665',
				},
			},
			{
				params: {
					province: 'NL',
					city: 'GOULDS',
				},
				expected: {
					safeNo: 'CA12395921',
				},
			},
			{
				params: {
					province: 'MB',
					city: 'ARBORG',
				},
				expected: {
					safeNo: 'CA12799789',
				},
			},
			{
				params: {
					province: 'BC',
					city: 'ABBOTSFORD',
				},
				expected: {
					safeNo: 'CA09294341',
				},
			},
		];
		provincecitytestCase.forEach(async (testCase) => {
			it(`CA company search with province:${testCase.params.province} and city:${testCase.params.city}`, async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&city=${testCase.params.city}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provincestreettestCase = [
			{
				params: {
					province: 'ON',
					street: '90 ABSOLUTE AVE SUITE 1001',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					province: 'NS',
					street: '19 TOWN RD',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					province: 'ON',
					street: '9 GLACIER RD',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
		];
		provincestreettestCase.forEach(async (testCase) => {
			it(`CA company search with province:${testCase.params.province} and street:${testCase.params.street}`, async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&street=${testCase.params.street}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provincephoneNotestCase = [
			{
				params: {
					province: 'ON',
					phoneNo: '4168254606',
				},
				expected: {
					safeNo: 'CA12022299',
				},
			},
			{
				params: {
					province: 'NS',
					phoneNo: '9026798017',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
		];
		provincephoneNotestCase.forEach(async (testCase) => {
			it(`CA company search with province:${testCase.params.province} and phoneNo:${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&phoneNo=${testCase.params.phoneNo}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const provinceofficeTypetestCase = [
			{
				params: {
					province: 'L4Z0A3',
					officeType: 'headOffice',
				},
			},
		];
		provinceofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with province and officetype', async () => {
				const queryString = `?countries=CA&province=${testCase.params.province}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});

	describe('CA city searches', () => {
		const cityTestCases = ['MISSISSAUGA', 'FALMOUTH', 'BRAMPTON', 'PICKERING', 'ST CATHARINES'];
		cityTestCases.forEach(async (testCase) => {
			it(`CA company search with city:${testCase}`, async () => {
				const queryString = `?countries=CA&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const citygroupResultstestCase = [
			{
				params: {
					city: 'MISSISSAUGA',
					groupResults: 'true',
				},
			},
			{
				params: {
					city: 'MISSISSAUGA',
					groupResults: 'false',
				},
			},
		];
		citygroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with city and groupResults', async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'MISSISSAUGA',
					status: 'Active',
				},
			},
			{
				params: {
					city: 'MISSISSAUGA',
					status: 'nonactive',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it('CA company search with city and status', async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'MISSISSAUGA',
					street: '90 ABSOLUTE AVE SUITE 1001',
				},
				expected: {
					safeNo: 'CA12210156',
				},
			},
			{
				params: {
					city: 'FALMOUTH',
					street: '19 TOWN RD',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					city: 'BRAMPTON',
					street: '9 GLACIER RD',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					city: 'PICKERING',
					street: '1801 FOLEYET CRES',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					city: 'ST CATHARINES',
					street: '12 LOYALIST DR',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`CA company search with city:${testCase.params.city} and street:${testCase.params.street}`, async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'MISSISSAUGA',
					phoneNo: '4168254606',
				},
				expected: {
					safeNo: 'CA12022299',
				},
			},
			{
				params: {
					city: 'FALMOUTH',
					phoneNo: '9026798017',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					city: 'BRAMPTON',
					phoneNo: '4162064208',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					city: 'PICKERING',
					phoneNo: '6477466762',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					city: 'ST CATHARINES',
					phoneNo: '4168467487',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`CA company search with city:${testCase.params.city} and phoneNo:${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const cityofficeTypetestCase = [
			{
				params: {
					city: 'L4Z0A3',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with city and officetype', async () => {
				const queryString = `?countries=CA&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});

	describe('CA street searches', () => {
		const streetTestCases = ['90 ABSOLUTE AVE SUITE 1001', '19 TOWN RD', '9 GLACIER RD', '1801 FOLEYET CRES', '12 LOYALIST DR'];
		streetTestCases.forEach(async (testCase) => {
			it(`CA company search with street:${testCase}`, async () => {
				const queryString = `?countries=CA&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetgroupResultstestCase = [
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1001',
					groupResults: 'true',
				},
			},
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1001',
					groupResults: 'false',
				},
			},
		];
		streetgroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with street and groupResults', async () => {
				const queryString = `?countries=CA&street=${testCase.params.street}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const streetstatustestCase = [
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1001',
					status: 'Active',
				},
			},
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1001',
					status: 'nonactive',
				},
			},
		];
		streetstatustestCase.forEach(async (testCase) => {
			it('CA company search with street and status', async () => {
				const queryString = `?countries=CA&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const streetphoneNotestCase = [
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1610',
					phoneNo: '4168254606',
				},
				expected: {
					safeNo: 'CA12022299',
				},
			},
			{
				params: {
					street: '19 TOWN RD',
					phoneNo: '9026798017',
				},
				expected: {
					safeNo: 'CA12210158',
				},
			},
			{
				params: {
					street: '9 GLACIER RD',
					phoneNo: '4162064208',
				},
				expected: {
					safeNo: 'CA12210159',
				},
			},
			{
				params: {
					street: '1801 FOLEYET CRES',
					phoneNo: '6477466762',
				},
				expected: {
					safeNo: 'CA01498170',
				},
			},
			{
				params: {
					street: '12 LOYALIST DR',
					phoneNo: '4168467487',
				},
				expected: {
					safeNo: 'CA12210183',
				},
			},
		];
		streetphoneNotestCase.forEach(async (testCase) => {
			it(`CA company search with street:${testCase.params.street} and phoneNo:${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=CA&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=100`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetofficeTypetestCase = [
			{
				params: {
					street: '90 ABSOLUTE AVE SUITE 1610',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with street and officetype', async () => {
				const queryString = `?countries=CA&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});

	describe('CA phoneNo searches', () => {
		const phoneNoTestCases = ['4168254606', '9026798017', '4162064208', '6477466762', '4168467487'];
		phoneNoTestCases.forEach(async (testCase) => {
			it(`CA company search with phone:${testCase}`, async () => {
				const queryString = `?countries=CA&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNogroupResultstestCase = [
			{
				params: {
					phoneNo: '4168254606',
					groupResults: 'true',
				},
			},
			{
				params: {
					phoneNo: '9026798017',
					groupResults: 'false',
				},
			},
		];
		phoneNogroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with phoneNo and groupResults', async () => {
				const queryString = `?countries=CA&phoneNo=${testCase.params.phoneNo}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const phoneNostatustestCase = [
			{
				params: {
					phoneNo: '4168254606',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '9026798017',
					status: 'Active',
				},
			},
		];
		phoneNostatustestCase.forEach(async (testCase) => {
			it('CA company search with phoneNo and status', async () => {
				const queryString = `?countries=CA&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const phoneNoofficeTypetestCase = [
			{
				params: {
					phoneNo: '9026798017',
					officeType: 'headOffice',
				},
			},
		];
		phoneNoofficeTypetestCase.forEach(async (testCase) => {
			it('CA company search with phoneNo and officetype', async () => {
				const queryString = `?countries=CA&phoneNo=${testCase.params.phoneNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
	});

	describe('CA status searches', () => {
		const statusTestCases = ['Active', 'NonActive'];
		statusTestCases.forEach(async (testCase) => {
			it(`CA company search with status:${testCase}`, async () => {
				const queryString = `?countries=CA&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const statusgroupResultstestCase = [
			{
				params: {
					status: 'Active',
					groupResults: 'true',
				},
			},
			{
				params: {
					status: 'NonActive',
					groupResults: 'false',
				},
			},
		];
		statusgroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with status and groupResults', async () => {
				const queryString = `?countries=CA&status=${testCase.params.status}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});

	describe('CA officeType searches', () => {
		const officeTypeTestCases = ['headOffice'];
		officeTypeTestCases.forEach(async (testCase) => {
			it(`CA company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=CA&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const officeTypegroupResultstestCase = [
			{
				params: {
					officeType: 'headOffice',
					groupResults: 'true',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					groupResults: 'false',
				},
			},
		];
		officeTypegroupResultstestCase.forEach(async (testCase) => {
			it('CA company search with officeType and groupResults', async () => {
				const queryString = `?countries=CA&officeType=${testCase.params.officeType}&groupResults=${testCase.params.groupResults}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
		const officeTypestatustestCase = [
			{
				params: {
					officeType: 'headOffice',
					status: 'Active',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					groupResults: 'false',
				},
			},
		];
		officeTypestatustestCase.forEach(async (testCase) => {
			it('CA company search with officeType and status', async () => {
				const queryString = `?countries=CA&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
				console.log(`${response.data.details[0]}`);
			});
		});
	});
});
