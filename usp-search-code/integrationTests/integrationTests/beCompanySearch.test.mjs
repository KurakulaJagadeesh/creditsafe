import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('BE Regression Tests', async () => {
	describe('BE company Search', () => {
		it('returns BE Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=BE`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'BE'), true);
		});
	});

	describe('BE partial regNo searches', () => {
		[
			{ regNo: '828450670', expected: '828450670' },
			{ regNo: '0828450670', expected: '828450670' },
			{ regNo: '006495754', expected: '1006495754' },
			{ regNo: '1006495754', expected: '1006495754' },
		].forEach(async ({ regNo, expected }) => {
			it(`returns BE company with regNo ${regNo}`, async () => {
				const response = await getWithRetry(`${baseUrl}/companies?countries=BE&regNo=${regNo}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies[0].regNo, expected);
			});
		});
		[
			{ regNo: '3828450670' },
		].forEach(async (testCase) => {
			it('BE company search with partial regNo', async () => {
				const queryString = `?countries=BE&regNo=${testCase.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE partial postCode searches', () => {
		[
			{ postCode: '2980', expected: '2980' },
			{ postCode: '1', expected: '1' },
			{ postCode: '29', expected: '29' },
			{ postCode: '241', expected: '241' },
			{ postCode: '92200', expected: '92200' },
			{ postCode: '2517KZ', expected: '2517KZ' },
			{ postCode: 'EC2V7AB', expected: 'EC2V7AB' },
			{ postCode: 'KY1-1103', expected: 'KY1-1103' },
			{ postCode: '774794702', expected: '774794702' },
			{ postCode: '0000000000', expected: '0000000000' },
			{ postCode: '92 200', expected: '92200' },
		].forEach(async ({ postCode, expected }) => {
			it(`returns BE company with postCode ${postCode}`, async () => {
				const response = await getWithRetry(`${baseUrl}/companies?countries=BE&postCode=${postCode}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies[0].address.postCode, expected);
			});
		});
		[
			{ postCode: '0000 000000' },
		].forEach(async (testCase) => {
			it('BE company search with partial postCode', async () => {
				const queryString = `?countries=BE&postCode=${testCase.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE city synonymn searches', () => {
		[
			{ city: 'gand', expected: 'GENT' },
			{ city: 'Brussels', expected: 'BRUXELLES' },
			{ city: 'Elsene', expected: 'IXELLES' },
			{ city: 'Ukkel', expected: 'UCCLE' },
			{ city: 'Coxyde', expected: 'KOKSIJDE' },
			{ city: 'Grammont', expected: 'GERAARDSBERGEN' },
		].forEach(async ({ city, expected }) => {
			it(`returns BE company with city ${city}`, async () => {
				const response = await getWithRetry(`${baseUrl}/companies?countries=BE&city=${city}`);

				assert.equal(response.status, 200);
				// assert.equal(response.data.companies.address.city, expected);
				assert.equal(response.data.companies.some((company) => company.address.city === `${expected}`), true);
			});
		});
	});

	describe('BE street synonymn searches', () => {
		[
			{ street: 'ALL DE LA RECHERCHE', expected: 'ALLÉE DE LA RECHERCHE' },
			{ street: 'GRAND rte', expected: 'GRAND-ROUTE' },
			{ street: 'CRS SAINT MICHEL', expected: 'COURS SAINT MICHEL' },
			{ street: 'DE LA HLE', expected: 'DE LA HALLE' },
			{ street: 'PLT DE LA GARE', expected: 'PLATEAU DE LA GARE' },
			{ street: 'RUE VLA ROMAINE', expected: 'RUE VILLA ROMAINE' },
		].forEach(async ({ street, expected }) => {
			it(`returns BE company with street ${street}`, async () => {
				const response = await getWithRetry(`${baseUrl}/companies?countries=BE&street=${street}`);

				assert.equal(response.status, 200);
				// Check that at least one of the results street field is equal to the expected value
				assert.equal(response.data.companies.some((company) => company.address.street === `${expected}`), true);
			});
		});
	});

	describe('BE street conjoinedsynonymn searches', () => {
		[
			{ street: 'MOUTSBORNstr', expected: 'MOUTSBORNSTRAAT' },
			{ street: 'KERKPL', expected: 'KERKPLEIN' },
			{ street: 'MARNEFL', expected: 'MARNEFLAAN' },
			{ street: 'DERDEDR', expected: 'DERDEDREEF' },
			{ street: 'VILLERSPK', expected: 'VILLERSPARK' },
			{ street: 'HOGE MAUWeg', expected: 'HOGE MAUW' },
		].forEach(async ({ street, expected }) => {
			it(`returns BE company with street ${street}`, async () => {
				const response = await getWithRetry(`${baseUrl}/companies?countries=BE&street=${street}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies[0].address.street, expected);
			});
		});
	});

	describe('BE id searches', () => {
		const idTestCases = ['BE-X-828450670', 'BE-X-419488574', 'BE-X-438675669', 'BE-X-768298396', 'BE-X-768306910'];
		idTestCases.forEach(async (testCase) => {
			it(`BE company search with id:${testCase}`, async () => {
				const queryString = `?countries=BE&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					safeNo: 'BE00106115',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('BE company search with id and safeNo', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					regNo: '419488574',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('BE company search with id and regNo', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					vatNo: 'BE0419488574',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('BE company search with id and vatNo', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					city: 'ZOERSEL',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('BE company search with id and city', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idhouseNotestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					houseNo: '8',
				},
			},
		];
		idhouseNotestCase.forEach(async (testCase) => {
			it('BE company search with id and houseNo', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					postCode: '2980',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('BE company search with id and postCode', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					simpleValue: '8 TORTELSTRAAT, 2980, ZOERSEL',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('BE company search with id and simpleValue', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					street: 'TORTELSTRAAT',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('BE company search with id and street', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idexacttestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					exact: 'true',
				},
			},
		];
		idexacttestCase.forEach(async (testCase) => {
			it(`BE company search with id:${testCase.params.id} and exact:${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase.params.id}`), true);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					name: 'INFOSYS',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('BE company search with id and name', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					phoneNo: '3233091347',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('BE company search with id and phoneNo', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'BE-X-419488574',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('BE company search with id and status', async () => {
				const queryString = `?countries=BE&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE safeNo searches', () => {
		const safeNoTestCases = ['BE01435042', 'BE00106115', 'BE00220745', 'BE13333078', 'BE13334478'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`BE company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=BE&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					regNo: '419488574',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and regNo', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					vatNo: 'BE0419488574',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and vatNo', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					city: 'ZOERSEL',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and city', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNohouseNotestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					houseNo: '8',
				},
			},
		];
		safeNohouseNotestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and houseNo', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					postCode: '2980',
				},
			},
		];
		safeNopostCodetestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and postCode', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					simpleValue: '8 TORTELSTRAAT, 2980, ZOERSEL',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					street: 'TORTELSTRAAT',
				},
			},
		];
		safeNostreettestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and street', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoexacttestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					exact: 'true',
				},
			},
		];
		safeNoexacttestCase.forEach(async (testCase) => {
			it(`BE company search with safeNo:${testCase.params.safeNo} and exact:${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.params.safeNo}`), true);
			});
		});
		const safeNonametestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					name: 'INFOSYS',
				},
			},
		];
		safeNonametestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and name', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					phoneNo: '3233091347',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'BE00106115',
					status: 'Active',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('BE company search with safeNo and status', async () => {
				const queryString = `?countries=BE&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE regNo searches', () => {
		const regNotestCases = ['828450670', '419488574', '438675669', '768306910', '1010479781'];
		regNotestCases.forEach(async (testCase) => {
			it(`BE company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=BE&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCase = [
			{
				params: {
					regNo: '419488574',
					vatNo: 'BE0419488574',
				},
			},
		];
		regNovatNotestCase.forEach(async (testCase) => {
			it('BE company search with regNo and vatNo', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: '419488574',
					city: 'ZOERSEL',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it('BE company search with regNo and city', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNohouseNotestCase = [
			{
				params: {
					regNo: '419488574',
					houseNo: '8',
				},
			},
		];
		regNohouseNotestCase.forEach(async (testCase) => {
			it('BE company search with regNo and houseNo', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: '419488574',
					postCode: '2980',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it('BE company search with regNo and postCode', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: '419488574',
					simpleValue: '8 TORTELSTRAAT, 2980, ZOERSEL',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('BE company search with regNo and simpleValue', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: '419488574',
					street: 'TORTELSTRAAT',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('BE company search with regNo and street', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoexacttestCase = [
			{
				params: {
					regNo: '419488574',
					exact: 'false',
				},
			},
		];
		regNoexacttestCase.forEach(async (testCase) => {
			it(`BE company search with regNo:${testCase.params.regNo} and exact:${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase.params.regNo}`), true);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: '419488574',
					name: 'INFOSYS',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('BE company search with regNo and name', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: '419488574',
					phoneNo: '3233091347',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('BE company search with regNo and phoneNo', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: '419488574',
					status: 'Active',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('BE company search with regNo and status', async () => {
				const queryString = `?countries=BE&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE vatNo searches', () => {
		const vatNotestCases = ['BE0768258014', 'BE0419488574', 'BE0438675669', 'BE0768298396', 'BE0768306910', 'BE0768298396'];
		vatNotestCases.forEach(async (testCase) => {
			it(`BE company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=BE&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					city: 'ZOERSEL',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and city', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNohouseNotestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					houseNo: '8',
				},
			},
		];
		vatNohouseNotestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and houseNo', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					postCode: '2980',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and postCode', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					simpleValue: '8 TORTELSTRAAT, 2980, ZOERSEL',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					street: 'TORTELSTRAAT',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and street', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoexacttestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					exact: 'true',
				},
			},
		];
		vatNoexacttestCase.forEach(async (testCase) => {
			it(`BE company search with vatNo:${testCase.params.vatNo} and exact:${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					name: 'INFOSYS',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and name', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					phoneNo: '3233091347',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: 'BE0419488574',
					status: 'Active',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it('BE company search with vatNo and status', async () => {
				const queryString = `?countries=BE&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('BE city searches', () => {
		const citytestCases = ['BERCHEM-SAINTE-AGATHE', 'ZOERSEL', 'BRUXELLES', 'ZAVENTEM', 'CHARLEROI'];
		citytestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase}`, async () => {
				const queryString = `?countries=BE&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const cityhouseNotestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					houseNo: '10',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					houseNo: '167',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					houseNo: '42',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					houseNo: '11 / F1',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					houseNo: '48',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		cityhouseNotestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and houseNo=${testCase.params.houseNo}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					postCode: '1082',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					postCode: '2980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					postCode: '1130',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00034752',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					postCode: '1930',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00039862',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					postCode: '6000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and postCode=${testCase.params.postCode}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and simpleValue=${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					street: 'AVENUE DU HUNDERENVELD',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					street: 'HERENTALSEBAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					street: 'AVENUE DU BOURGET',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					street: 'DA VINCILAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					street: 'BOULEVARD JACQUES BERTRAND',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and street=${testCase.params.street}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityexacttestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					exact: 'true',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					exact: 'false',
				},
			},
		];
		cityexacttestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.params.city}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					name: 'FORD CREDIT BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					name: 'SHA INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					name: 'LA SAMBRIENNE',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and name=${testCase.params.name}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					phoneNo: '3227777777',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00432813',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'BERCHEM-SAINTE-AGATHE',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00432813',
				},
			},
			{
				params: {
					city: 'ZOERSEL',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					city: 'BRUXELLES',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					city: 'ZAVENTEM',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00368284',
				},
			},
			{
				params: {
					city: 'CHARLEROI',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE04528109',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`BE company search with city:${testCase.params.city} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&city=${testCase.params.city}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('BE houseNo searches', () => {
		const houseNotestCases = ['20', '167', '42', '11 / F1', '48'];
		houseNotestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.houseNo === `${testCase}`), true);
			});
		});
		const houseNopostCodetestCases = [
			{
				params: {
					houseNo: '10',
					postCode: '1082',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					houseNo: '167',
					postCode: '2980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					postCode: '1130',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					postCode: '1930',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					houseNo: '48',
					postCode: '6000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		houseNopostCodetestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and postCode=${testCase.params.postCode}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNosimpleValuetestCases = [
			{
				params: {
					houseNo: '10',
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					houseNo: '167',
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					houseNo: '48',
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		houseNosimpleValuetestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and simpleValue=${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNostreettestCases = [
			{
				params: {
					houseNo: '10',
					street: 'AVENUE DU HUNDERENVELD',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					houseNo: '167',
					street: 'HERENTALSEBAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					street: 'AVENUE DU BOURGET',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					street: 'DA VINCILAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					houseNo: '48',
					street: 'BOULEVARD JACQUES BERTRAND',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		houseNostreettestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and street=${testCase.params.street}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNoexacttestCases = [
			{
				params: {
					houseNo: '10',
					exact: 'true',
				},
			},
			{
				params: {
					houseNo: '167',
					exact: 'true',
				},
			},
			{
				params: {
					houseNo: '42',
					exact: 'true',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					exact: 'true',
				},
			},
			{
				params: {
					houseNo: '48',
					exact: 'false',
				},
			},
		];
		houseNoexacttestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
			});
		});
		const houseNonametestCases = [
			{
				params: {
					houseNo: '10',
					name: 'FORD CREDIT BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					houseNo: '167',
					name: 'SHA INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					houseNo: '48',
					name: 'LA SAMBRIENNE',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		houseNonametestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and name=${testCase.params.name}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNophoneNotestCases = [
			{
				params: {
					houseNo: '10',
					phoneNo: '3234884770',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00497516',
				},
			},
			{
				params: {
					houseNo: '167',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					houseNo: '48',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		houseNophoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNostatustestCases = [
			{
				params: {
					houseNo: '10',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00432813',
				},
			},
			{
				params: {
					houseNo: '167',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					houseNo: '42',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					houseNo: '11 / F1',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00368284',
				},
			},
			{
				params: {
					houseNo: '48',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE04528109',
				},
			},
		];
		houseNostatustestCases.forEach(async (testCase) => {
			it(`BE company search with houseNo:${testCase.params.houseNo} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&houseNo=${testCase.params.houseNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.houseNo === `${testCase.params.houseNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE postCode searches', () => {
		const postCodetestCases = ['1082', '2980', '1130', '1930', '6000'];
		postCodetestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '1082',
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					postCode: '2980',
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					postCode: '1130',
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					postCode: '1930',
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					postCode: '6000',
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and simpleValue=${testCase.params.simpleValue}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '1082',
					street: 'AVENUE DU HUNDERENVELD',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					postCode: '2980',
					street: 'HERENTALSEBAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					postCode: '1130',
					street: 'AVENUE DU BOURGET',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					postCode: '1930',
					street: 'DA VINCILAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					postCode: '6000',
					street: 'BOULEVARD JACQUES BERTRAND',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and street=${testCase.params.street}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeexacttestCases = [
			{
				params: {
					postCode: '1082',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '2980',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '1130',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '1930',
					exact: 'true',
				},
			},
			{
				params: {
					postCode: '6000',
					exact: 'false',
				},
			},
		];
		postCodeexacttestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '1082',
					name: 'FORD CREDIT BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					postCode: '2980',
					name: 'SHA INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					postCode: '1130',
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					postCode: '1930',
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					postCode: '3822TK',
					name: 'VAN OS EN PARTNERS B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'BE13347708',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and name=${testCase.params.name}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '1560',
					phoneNo: '3234884770',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					postCode: '2980',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					postCode: '1130',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					postCode: '1930',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					postCode: '6000',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '9200',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '3822TK',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '1082',
					status: 'Active',
				},
			},
			{
				params: {
					postCode: '1930',
					status: 'NonActive',
				},
			},
			{
				params: {
					postCode: '6000',
					status: 'NonActive',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`BE company search with postCode:${testCase.params.postCode} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE simpleValue searches', () => {
		const simpleValuetestCases = ['10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
			'167 HERENTALSEBAAN, 2980, ZOERSEL',
			'42 AVENUE DU BOURGET, 1130, BRUXELLES',
			'11 DA VINCILAAN, 1930, ZAVENTEM',
			'48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
					street: 'AVENUE DU HUNDERENVELD',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
					street: 'HERENTALSEBAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
					street: 'AVENUE DU BOURGET',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
					street: 'DA VINCILAAN',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
					street: 'BOULEVARD JACQUES BERTRAND',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase.params.simpleValue} and street=${testCase.params.street}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueexacttestCases = [
			{
				params: {
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
					exact: 'true',
				},
			},
			{
				params: {
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
					exact: 'false',
				},
			},
		];
		simpleValueexacttestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase.params.simpleValue} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase.params.simpleValue}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: '10 AVENUE DU HUNDERENVELD, 1082, BERCHEM-SAINTE-AGATHE',
					name: 'FORD CREDIT BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
					name: 'SHA INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					simpleValue: '16 ZOCHERPAD, 3822TK, AMERSFOORT',
					name: 'VAN OS EN PARTNERS B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'BE13347708',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase.params.simpleValue} and name=${testCase.params.name}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: '6A TERHULPSESTEENWEG, 1560, HOEILAART',
					phoneNo: '3234884770',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase.params.simpleValue} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: '6A TERHULPSESTEENWEG, 1560, HOEILAART',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					simpleValue: '167 HERENTALSEBAAN, 2980, ZOERSEL',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					simpleValue: '42 AVENUE DU BOURGET, 1130, BRUXELLES',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					simpleValue: '11 DA VINCILAAN, 1930, ZAVENTEM',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01356612',
				},
			},
			{
				params: {
					simpleValue: '48 BOULEVARD JACQUES BERTRAND, 6000, CHARLEROI',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE03071154',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`BE company search with simpleValue:${testCase.params.simpleValue} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				// assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE street searches', () => {
		const streettestCases = ['AVENUE DU HUNDERENVELD',
			'HERENTALSEBAAN',
			'AVENUE DU BOURGET',
			'DA VINCILAAN',
			'BOULEVARD JACQUES BERTRAND'];
		streettestCases.forEach(async (testCase) => {
			it(`BE company search with street:${testCase}`, async () => {
				const queryString = `?countries=BE&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.street === `${testCase}`), true);
			});
		});
		const streetexacttestCases = [
			{
				params: {
					street: 'AVENUE DU HUNDERENVELD',
					exact: 'true',
				},
			},
			{
				params: {
					street: 'HERENTALSEBAAN',
					exact: 'true',
				},
			},
			{
				params: {
					street: 'AVENUE DU BOURGET',
					exact: 'true',
				},
			},
			{
				params: {
					street: 'DA VINCILAAN',
					exact: 'true',
				},
			},
			{
				params: {
					street: 'BOULEVARD JACQUES BERTRAND',
					exact: 'false',
				},
			},
		];
		streetexacttestCases.forEach(async (testCase) => {
			it(`BE company search with street:${testCase.params.street} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.street === `${testCase.params.street}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'AVENUE DU HUNDERENVELD',
					name: 'FORD CREDIT BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE06278672',
				},
			},
			{
				params: {
					street: 'HERENTALSEBAAN',
					name: 'SHA INTERNATIONAL',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					street: 'AVENUE DU BOURGET',
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					street: 'DA VINCILAAN',
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					street: 'ZOCHERPAD',
					name: 'VAN OS EN PARTNERS B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'BE13347708',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`BE company search with street:${testCase.params.street} and name=${testCase.params.name}`, async () => {
				const queryString = `?countries=BE&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'TERHULPSESTEENWEG',
					phoneNo: '3234884770',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					street: 'HERENTALSEBAAN',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					street: 'AVENUE DU BOURGET',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					street: 'DA VINCILAAN',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					street: 'BOULEVARD JACQUES BERTRAND',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with street:${testCase.params.street} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'TERHULPSESTEENWEG',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					street: 'HERENTALSEBAAN',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					street: 'AVENUE DU BOURGET',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					street: 'DA VINCILAAN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00368284',
				},
			},
			{
				params: {
					street: 'BOULEVARD JACQUES BERTRAND',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE02879110',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`BE company search with street:${testCase.params.street} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.street === `${testCase.params.street}`), true);
				// assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE name searches', () => {
		const nametestCases = ['FORD CREDIT BELGIUM',
			'SHA INTERNATIONAL',
			'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
			'ST. JUDE MEDICAL COORDINATION CENTER',
			'VAN OS EN PARTNERS B.V.'];
		nametestCases.forEach(async (testCase) => {
			it(`BE company search with name:${testCase}`, async () => {
				const queryString = `?countries=BE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'FORD CREDIT BELGIUM',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'SHA INTERNATIONAL',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
					exact: 'true',
				},
			},
			{
				params: {
					name: 'VAN OS EN PARTNERS B.V.',
					exact: 'false',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it(`BE company search with name:${testCase.params.name} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase.params.name}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'VIATRIS INTERNATIONAL SUPPLY POINT',
					phoneNo: '3234884770',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					name: 'SHA INTERNATIONAL',
					phoneNo: '3233208980',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
					phoneNo: '3223398211',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					name: 'ST. JUDE MEDICAL COORDINATION CENTER',
					phoneNo: '3227252042',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01306919',
				},
			},
			{
				params: {
					name: 'LA SAMBRIENNE',
					phoneNo: '3271272000',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00016849',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with name:${testCase.params.name} and phoneNo=${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=BE&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'VIATRIS INTERNATIONAL SUPPLY POINT',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00394477',
				},
			},
			{
				params: {
					name: 'SHA INTERNATIONAL',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE01335390',
				},
			},
			{
				params: {
					name: 'INTERNATIONAL BUSINESS MACHINES OF BELGIUM',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00032315',
				},
			},
			{
				params: {
					name: 'HUSINT SA',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE03061227',
				},
			},
			{
				params: {
					name: 'LA SALADERIE',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'BE00207136',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`BE company search with name:${testCase.params.name} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.name === `${testCase.params.name}`), true);
				// assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE phoneNo searches', () => {
		const phoneNotestCases = ['3234884770', '3233208980', '3223398211', '3227252042', '3271272000'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`BE company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=BE&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNoexacttestCases = [
			{
				params: {
					phoneNo: '3234884770',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '3233208980',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '3223398211',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '3227252042',
					exact: 'true',
				},
			},
			{
				params: {
					phoneNo: '3271272000',
					exact: 'false',
				},
			},
		];
		phoneNoexacttestCases.forEach(async (testCase) => {
			it(`BE company search with phoneNo:${testCase.params.phoneNo} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '3234884770',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '3233208980',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '3223398211',
					status: 'Active',
				},
			},
			{
				params: {
					phoneNo: '3238304025',
					status: 'NonActive',
				},
			},
			{
				params: {
					phoneNo: '3285236945',
					status: 'NonActive',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it(`BE company search with phoneNo:${testCase.params.phoneNo} and status=${testCase.params.status}`, async () => {
				const queryString = `?countries=BE&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE status searches', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`BE company search with status:${testCase}`, async () => {
				const queryString = `?countries=BE&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
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
			{
				params: {
					status: 'Active',
					exact: 'false',
				},
			},
			{
				params: {
					status: 'NonActive',
					exact: 'false',
				},
			},
		];
		statusexacttestCases.forEach(async (testCase) => {
			it(`BE company search with status:${testCase.params.status} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=BE&status=${testCase.params.status}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('BE exact match searches', () => {
		it('BE company search with exact:true and status: NonActive', async () => {
			const queryString = '?countries=BE&status=NonActive&exact=true';
			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
		});
	});

	describe('BE exact match searches', () => {
		it('BE company search with exact:true and status: NonActive', async () => {
			const queryString = '?countries=BE&status=NonActive&exact=true';
			const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
		});
	});
});
