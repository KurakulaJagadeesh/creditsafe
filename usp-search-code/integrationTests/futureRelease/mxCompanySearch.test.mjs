import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('MX Regression tests', async () => {
	describe('MX id searches', () => {
		const idtestCases = ['MX-X-MX00733874', 'MX-X-MX00365267', 'MX-X-MX02923222', 'MX-X-MX02291566', 'MX-X-MX00018041'];
		idtestCases.forEach(async (testCase) => {
			it(`MX company search with id:${testCase}`, async () => {
				const queryString = `?countries=MX&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					safeNo: 'MX00733874',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('MX company search with id and safeNo', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					regNo: 'ITE0706203X7',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('MX company search with id and regNo', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					city: 'BENITO JUAREZ',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('MX company search with id and city', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					postCode: '03940',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('MX company search with id and postCode', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
				},
			},
		];
		idsimpleValuetestCases.forEach(async (testCase) => {
			it('MX company search with id and simpleValue', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('MX company search with id and street', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'MX-X-MX00733874',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('MX company search with id and name', async () => {
				const queryString = `?countries=MX&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MX safeNo searches', () => {
		const safeNotestCases = ['MX00733874', 'MX00365267', 'MX02923222', 'MX02291566', 'MX00018041'];
		safeNotestCases.forEach(async (testCase) => {
			it(`MX company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=MX&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					regNo: 'ITE0706203X7',
				},
			},
		];
		safeNoregNotestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and regNo', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					city: 'BENITO JUAREZ',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and city', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					postCode: '03940',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and postCode', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
				},
			},
		];
		safeNosimpleValuetestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and street', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'MX00733874',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('MX company search with safeNo and name', async () => {
				const queryString = `?countries=MX&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MX regNo searches', () => {
		const regNotestCases = ['ITE0706203X7', 'CTS061006HD7', 'GLC021022EZ9', 'OME870324N71', 'ACC901031IS6'];
		regNotestCases.forEach(async (testCase) => {
			it(`MX company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=MX&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: 'ITE0706203X7',
					city: 'BENITO JUAREZ',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('MX company search with regNo and city', async () => {
				const queryString = `?countries=MX&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: 'ITE0706203X7',
					postCode: '03940',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('MX company search with regNo and postCode', async () => {
				const queryString = `?countries=MX&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCases = [
			{
				params: {
					regNo: 'ITE0706203X7',
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
				},
			},
		];
		regNosimpleValuetestCases.forEach(async (testCase) => {
			it('MX company search with regNo and simpleValue', async () => {
				const queryString = `?countries=MX&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: 'ITE0706203X7',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('MX company search with regNo and street', async () => {
				const queryString = `?countries=MX&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: 'ITE0706203X7',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('MX company search with regNo and name', async () => {
				const queryString = `?countries=MX&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('MX city searches', () => {
		const citytestCases = ['BENITO JUAREZ'];
		citytestCases.forEach(async (testCase) => {
			it(`MX company search with city:${testCase}`, async () => {
				const queryString = `?countries=MX&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'BENITO JUAREZ',
					postCode: '03940',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it('MX company search with city and postCode', async () => {
				const queryString = `?countries=MX&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citysimpleValuetestCases = [
			{
				params: {
					city: 'BENITO JUAREZ',
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
				},
			},
		];
		citysimpleValuetestCases.forEach(async (testCase) => {
			it('MX company search with city and simpleValue', async () => {
				const queryString = `?countries=MX&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'BENITO JUAREZ',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it('MX company search with city and street', async () => {
				const queryString = `?countries=MX&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'BENITO JUAREZ',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
				expected: {
					safeNo: 'MX00733874',
				},
			},
			{
				params: {
					city: 'ZAPOPAN',
					name: 'COGNIZANT TECHNOLOGY SOLUTIONS DE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX00365267',
				},
			},
			{
				params: {
					city: 'MIGUEL HIDALGO',
					name: 'ORACLE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX02291566',
				},
			},
			{
				params: {
					city: 'CUAJIMALPA DE MORELOS',
					name: 'ACCENTURE SC',
				},
				expected: {
					safeNo: 'MX00018041',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it('MX company search with city and name', async () => {
				const queryString = `?countries=MX&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('MX postCode searches', () => {
		const postCodetestCases = ['03940'];
		postCodetestCases.forEach(async (testCase) => {
			it(`MX company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=MX&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '03940',
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it('MX company search with postCode and simpleValue', async () => {
				const queryString = `?countries=MX&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '03940',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it('MX company search with postCode and street', async () => {
				const queryString = `?countries=MX&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '03940',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
				expected: {
					safeNo: 'MX00733874',
				},
			},
			{
				params: {
					postCode: '45119',
					name: 'COGNIZANT TECHNOLOGY SOLUTIONS DE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX00365267',
				},
			},
			{
				params: {
					postCode: '11000',
					name: 'ORACLE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX02291566',
				},
			},
			{
				params: {
					postCode: '05120',
					name: 'ACCENTURE SC',
				},
				expected: {
					safeNo: 'MX00018041',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it('MX company search with postCode and name', async () => {
				const queryString = `?countries=MX&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('MX simpleValue searches', () => {
		const simpleValuetestCases = ['AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`MX company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=MX&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it('MX company search with simpleValue and street', async () => {
				const queryString = `?countries=MX&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
				expected: {
					safeNo: 'MX00733874',
				},
			},
			{
				params: {
					simpleValue: 'AVIACION 3800, 45119, ZAPOPAN',
					name: 'COGNIZANT TECHNOLOGY SOLUTIONS DE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX00365267',
				},
			},
			{
				params: {
					simpleValue: 'MONTES URALES 470, 11000, MIGUEL HIDALGO',
					name: 'ORACLE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX02291566',
				},
			},
			{
				params: {
					simpleValue: 'CALLE PASEO DE LOS TAMARINDOS 90 ARCOS BOSQUES II PISO 26, 05120, CUAJIMALPA DE MORELOS',
					name: 'ACCENTURE SC',
				},
				expected: {
					safeNo: 'MX00018041',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it('MX company search with simpleValue and name', async () => {
				const queryString = `?countries=MX&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('MX street searches', () => {
		const streettestCases = ['AV INSURG 162 12 CREDITO CONSTRUCTOR, 03940, BENITO JUAREZ'];
		streettestCases.forEach(async (testCase) => {
			it(`MX company search with street:${testCase}`, async () => {
				const queryString = `?countries=MX&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'AV INSURG 162 12 CREDITO CONSTRUCTOR',
					name: 'INFOSYS TECHNOLOGIES SRL',
				},
				expected: {
					safeNo: 'MX00733874',
				},
			},
			{
				params: {
					street: 'AVIACION 3800',
					name: 'COGNIZANT TECHNOLOGY SOLUTIONS DE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX00365267',
				},
			},
			{
				params: {
					street: 'MONTES URALES 470',
					name: 'ORACLE MEXICO SA DE CV',
				},
				expected: {
					safeNo: 'MX02291566',
				},
			},
			{
				params: {
					street: 'CALLE PASEO DE LOS TAMARINDOS 90 ARCOS BOSQUES II PISO 26',
					name: 'ACCENTURE SC',
				},
				expected: {
					safeNo: 'MX00018041',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it('MX company search with street and name', async () => {
				const queryString = `?countries=MX&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
	});

	describe('MX name searches', () => {
		const nametestCases = ['INFOSYS TECHNOLOGIES SRL', 'COGNIZANT TECHNOLOGY SOLUTIONS DE MEXICO SA DE CV', 'ORACLE MEXICO SA DE CV', 'ACCENTURE SC'];
		nametestCases.forEach(async (testCase) => {
			it(`MX company search with name:${testCase}`, async () => {
				const queryString = `?countries=MX&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('MX synonyms searches', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'VAR unidad economica rural ASESORES Y CONSULTORES SC',
				},
				expected: {
					name: 'VAR UER ASESORES Y CONSULTORES SC',
				},
			},
			{
				params: {
					name: 'NUBEMEX sociedad anonima',
				},
				expected: {
					name: 'NUBEMEX SA',
				},
			},
			{
				params: {
					name: 'ac CALIMALLA A.C',
				},
				expected: {
					name: 'ASOCIACION CIVIL CALIMALLA AC',
				},
			},
			{
				params: {
					name: 'fideic BANCOMER',
				},
				expected: {
					name: 'FIDEICOMISO BANCOMER',
				},
			},
			{
				params: {
					name: 'SERVICIOS CORPORATIVOS  e de pem SC',
				},
				expected: {
					name: 'SERVICIOS CORPORATIVOS EPEM SC',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`MX company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=MX&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.expected.name.toLowerCase()}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'blvd BOULEVARD SN',
					name: 'SERVICIOS TAMAULIPAS SA DE CV',
				},
				expected: {
					street: 'BOULEVARD BOULEVARD SN',
				},
			},
			{
				params: {
					street: 'edificio QUINTANA',
					name: 'COACOYOLE SA DE CV',
				},
				expected: {
					street: 'EDIF QUINTANA',
				},
			},
			{
				params: {
					street: 'fraccionamiento 1-A Y FRACC 3',
					name: 'PUNCH DE MEXICO SRL',
				},
				expected: {
					street: 'FRACC 1-A Y FRACC 3',
				},
			},
			{
				params: {
					street: 'villalba HIDALGO',
					name: 'EL FARO',
				},
				expected: {
					street: 'VILLA HIDALGO',
				},
			},
			{
				params: {
					street: 'mx, MEXICO',
					name: 'ESGAR ESQUIVEL HERRERA',
				},
				expected: {
					street: 'MEXICO, MEXICO',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`MX company search with streetsynonym: ${testCase.params.street}`, async () => {
				const queryString = `?countries=MX&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.expected.street.toLowerCase()}`), true);
			});
		});
	});
});
