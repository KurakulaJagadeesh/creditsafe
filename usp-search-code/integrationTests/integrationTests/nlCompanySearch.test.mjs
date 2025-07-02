import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('NL Regression Tests', async () => {
	describe('NL company Search', () => {
		it('returns NL Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=NL`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'NL'), true);
		});
	});

	describe('NL id', () => {
		const idTestCases = ['NL-X-371248840000', 'NL-X-342398650000', 'NL-X-371244630000', 'NL-X-081968920000', 'NL-X-011194450000'];
		idTestCases.forEach(async (testCase) => {
			it(`NL company with id:${testCase}`, async () => {
				const queryString = `?countries=NL&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					vatNo: '817896600',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('NL company search with id and vatNo', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					safeNo: 'NL02350229',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('NL company search with id and safeNo', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCase.forEach(async (testCase) => {
			it('NL company search with id and officeType', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					regNo: '371248840000',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('NL company search with id and regNo', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					city: 'PURMEREND',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('NL company search with id and city', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idhouseNotestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					houseNo: '14 K',
				},
			},
		];
		idhouseNotestCase.forEach(async (testCase) => {
			it('NL company search with id and houseNo', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					postCode: '1442LA',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('NL company search with id and postCode', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					simpleValue: 'Kwadijkerkoogweg, 14 K, 1442LA, PURMEREND',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('NL company search with id and simpleValue', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					street: 'Kwadijkerkoogweg',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('NL company search with id and street', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					name: 'Thai Aloy V.O.F.',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('NL company search with id and name', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'NL-X-091093280000',
					phoneNo: '0553014051',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('NL company search with id and phoneNo', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					status: 'NonActive',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('NL company search with id and status', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idtradeNametestCase = [
			{
				params: {
					id: 'NL-X-011194450000',
					tradeName: 'Thai Aloy',
				},
			},
		];
		idtradeNametestCase.forEach(async (testCase) => {
			it('NL company search with id and tradeName', async () => {
				const queryString = `?countries=NL&id=${testCase.params.id}&tradeName=${testCase.params.tra}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('NL vatNo', () => {
		const vatNotestCases = ['852337346', '823021087', '001475253', '009833080'];
		vatNotestCases.forEach(async (testCase) => {
			it(`NL company with vatNo:${testCase}`, async () => {
				const queryString = `?countries=NL&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNosafeNotestCase = [
			{
				params: {
					vatNo: '817896600',
					safeNo: 'NL03323991',
				},
			},
		];
		vatNosafeNotestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and safeNo', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCase = [
			{
				params: {
					vatNo: '852337346',
					officeType: 'branch',
				},
			},
		];
		vatNoofficeTypetestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and officeType', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoregNotestCase = [
			{
				params: {
					vatNo: '852337346',
					regNo: '568631600000',
				},
			},
		];
		vatNoregNotestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and regNo', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: '852337346',
					city: 'NIJMEGEN',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and city', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNohouseNotestCase = [
			{
				params: {
					vatNo: '852337346',
					houseNo: '42',
				},
			},
		];
		vatNohouseNotestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and houseNo', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: '852337346',
					postCode: '6543KK',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and postCode', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: '852337346',
					simpleValue: 'Kerkstraat, 42, 6543KK, NIJMEGEN',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: '852337346',
					street: 'Kerkstraat',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and street', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: '852337346',
					name: 'Heeslust B.V.',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and name', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: '852337346',
					phoneNo: '0243730329',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: '852337346',
					status: 'Active',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and status', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNotradeNametestCase = [
			{
				params: {
					vatNo: '852337346',
					tradeName: 'Heeslust B.V.',
				},
			},
		];
		vatNotradeNametestCase.forEach(async (testCase) => {
			it('NL company search with vatNo and tradeName', async () => {
				const queryString = `?countries=NL&vatNo=${testCase.params.vatNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('NL safeNo', () => {
		const safeNotestCases = ['NL02350229', 'NL02126134', 'NL02349812', 'NL00392090', 'NL00052966'];
		safeNotestCases.forEach(async (testCase) => {
			it(`NL company with safeNo:${testCase}`, async () => {
				const queryString = `?countries=NL&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoofficeTypetestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and officeType', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					regNo: '371248840000',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and regNo', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					city: 'PURMEREND',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and city', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNohouseNotestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					houseNo: '14 K',
				},
			},
		];
		safeNohouseNotestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and houseNo', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					postCode: '1442LA',
				},
			},
		];
		safeNopostCodetestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and postCode', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					simpleValue: 'Kwadijkerkoogweg, 14 K, 1442LA, PURMEREND',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					street: 'Kwadijkerkoogweg',
				},
			},
		];
		safeNostreettestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and street', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					name: 'Thai Aloy V.O.F.',
				},
			},
		];
		safeNonametestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and name', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					phoneNo: '0243730329',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					status: 'NonActive',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and status', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotradeNametestCase = [
			{
				params: {
					safeNo: 'NL02350229',
					tradeName: 'Thai Aloy',
				},
			},
		];
		safeNotradeNametestCase.forEach(async (testCase) => {
			it('NL company search with safeNo and tradeName', async () => {
				const queryString = `?countries=NL&safeNo=${testCase.params.safeNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('NL officeType', () => {
		const officeTypetestCases = ['branch', 'headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`NL company with officeType:${testCase}`, async () => {
				const queryString = `?countries=NL&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTyperegNotestCase = [
			{
				params: {
					officeType: 'headOffice',
					regNo: '371248840000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02350229',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					regNo: '342398650000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02126134',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					regNo: '371244630000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02349812',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					regNo: '081968920000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00392090',
				},
			},
			{
				params: {
					officeType: 'branch',
					regNo: '598868110000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03629337',
				},
			},
		];
		officeTyperegNotestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and regNo: ${testCase.params.regNo}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&regNo=${testCase.params.regNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const officeTypecitytestCase = [
			{
				params: {
					officeType: 'headOffice',
					city: 'AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01714479',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					city: 'GOUDA',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01651639',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					city: 'UGCHELEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					officeType: 'branch',
					city: 'OLDEBERKOOP',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		officeTypecitytestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&city=${testCase.params.city}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const officeTypehouseNotestCase = [
			{
				params: {
					officeType: 'headOffice',
					houseNo: '14 K',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					houseNo: '100 -II',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					houseNo: '63',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					houseNo: '4',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					officeType: 'branch',
					houseNo: '8',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		officeTypehouseNotestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&houseNo=${testCase.params.houseNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase.params.houseNo}`), true);
			});
		});
		const officeTypepostCodetestCase = [
			{
				params: {
					officeType: 'headOffice',
					postCode: '3439MN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					postCode: '1015VZ',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					postCode: '2908LT',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					postCode: '5047RK',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					officeType: 'branch',
					postCode: '3752LV',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		officeTypepostCodetestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const officeTypesimpleValuetestCase = [
			{
				params: {
					officeType: 'headOffice',
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					officeType: 'branch',
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		officeTypesimpleValuetestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const officeTypesreettestCase = [
			{
				params: {
					officeType: 'headOffice',
					street: 'Edisonbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					street: 'Marnixstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02131764',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					street: 'Athenastraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					officeType: 'branch',
					street: 'Edisonweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					street: 'Cypresbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		officeTypesreettestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const officeTypenametestCase = [
			{
				params: {
					officeType: 'headOffice',
					name: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					name: 'Haarlemse Apothekersgroep V.O.F.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02131764',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					name: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					officeType: 'branch',
					name: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					name: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		officeTypenametestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const officeTypephoneNotestCase = [
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0553014051',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0630076908',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0104774677',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '0629179935',
				},
			},
		];
		officeTypephoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === `${testCase.params.phoneNo}`), true);
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
					status: 'NonActive',
				},
			},
			{
				params: {
					officeType: 'branch',
					status: 'Active',
				},
			},
			{
				params: {
					officeType: 'branch',
					status: 'NonActive',
				},
			},
		];
		officeTypestatustestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const officeTypetradeNametestCase = [
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'Het Toekomst Surplus B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03830982',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'Christa Oosterhof Praktijk voor Kinesiologie',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00392090',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'P. Burger Holding B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03130951',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					tradeName: 'Karanika Business Solutions B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01693171',
				},
			},
			{
				params: {
					officeType: 'branch',
					tradeName: 'F.V.V. (Foxholster Voetbalvereniging)',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02435130',
				},
			},
		];
		officeTypetradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with officeType: ${testCase.params.officeType} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&officeType=${testCase.params.officeType}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL regNo', () => {
		const regNotestCases = ['371248840000', '342398650000', '371244630000', '081968920000', '598868110000'];
		regNotestCases.forEach(async (testCase) => {
			it(`NL company with regNo:${testCase}`, async () => {
				const queryString = `?countries=NL&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: '371248840000',
					city: 'PURMEREND',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it('NL company search with regNo and city', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNohouseNotestCase = [
			{
				params: {
					regNo: '371248840000',
					houseNo: '14 K',
				},
			},
		];
		regNohouseNotestCase.forEach(async (testCase) => {
			it('NL company search with regNo and houseNo', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&houseNo=${testCase.params.houseNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: '371248840000',
					postCode: '1442LA',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it('NL company search with regNo and postCode', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: '371248840000',
					simpleValue: 'Kwadijkerkoogweg, 14 K, 1442LA, PURMEREND',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('NL company search with regNo and simpleValue', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: '371248840000',
					street: 'Kwadijkerkoogweg',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('NL company search with regNo and street', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: '371248840000',
					name: 'Thai Aloy V.O.F.',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('NL company search with regNo and name', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: '091093280000',
					phoneNo: '0553014051',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('NL company search with regNo and phoneNo', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: '371248840000',
					status: 'Active',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('NL company search with regno and status', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotradeNametestCase = [
			{
				params: {
					regNo: '371248840000',
					tradeName: 'Thai Aloy',
				},
			},
		];
		regNotradeNametestCase.forEach(async (testCase) => {
			it('NL company search with regNo and tradeName', async () => {
				const queryString = `?countries=NL&regNo=${testCase.params.regNo}&tradeName=${testCase.params.tradeName}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('NL city', () => {
		const citytestCases = ['PURMEREND', 'AMSTERDAM', 'GOUDA', 'UGCHELEN', 'OLDEBERKOOP'];
		citytestCases.forEach(async (testCase) => {
			it(`NL company with city:${testCase}`, async () => {
				const queryString = `?countries=NL&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const cityhouseNotestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					houseNo: '68',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					houseNo: '333',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					houseNo: '102',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03188381',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					houseNo: '2',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'OLDEBERKOOP',
					houseNo: '4',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		cityhouseNotestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and houseNo: ${testCase.params.houseNo}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&houseNo=${testCase.params.houseNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					postCode: '1017HL',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					postCode: '1072LH',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					postCode: '2807GZ',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03188381',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					postCode: '7339GS',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'OLDEBERKOOP',
					postCode: '8421PA',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					simpleValue: 'Vijzelstraat, 68, 1017HL, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					simpleValue: 'Ferdinand Bolstraat, 333, 1072LH, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					simpleValue: 'Middenmolenplein, 102, 2807GZ, GOUDA',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03188381',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					simpleValue: 'Wezenweg, 2, 7339GS, UGCHELEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'OLDEBERKOOP',
					simpleValue: 'Oosterwoldseweg, 4, 8421PA, OLDEBERKOOP',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					street: 'Vijzelstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					street: 'Ferdinand Bolstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					street: 'Middenmolenplein',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03188381',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					street: 'Wezenweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'OLDEBERKOOP',
					street: 'Oosterwoldseweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					name: 'Bose Products B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					name: 'Hotel Okura Amsterdam B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					name: 'Randstad Uitzendbureau',
				},
				expected: {
					key: 'safeNo',
					value: 'NL05323914',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					name: 'VHP Security Paper B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'Herenveen',
					name: 'Stichting Talant',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567651',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'PURMEREND',
					phoneNo: '0299390111',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02286041',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					phoneNo: '0206787111',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					phoneNo: '0555332132',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02581102',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === `${testCase.params.city.toLowerCase()}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const citytradeNametestCase = [
			{
				params: {
					city: 'AMSTERDAM',
					tradeName: 'Bose Products B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02290801',
				},
			},
			{
				params: {
					city: 'AMSTERDAM',
					tradeName: 'Hotel Okura Amsterdam',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01948916',
				},
			},
			{
				params: {
					city: 'GOUDA',
					tradeName: 'Randstad Uitzendbureau',
				},
				expected: {
					key: 'safeNo',
					value: 'NL05323914',
				},
			},
			{
				params: {
					city: 'UGCHELEN',
					tradeName: 'VHP Security Paper B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00276254',
				},
			},
			{
				params: {
					city: 'OLDEBERKOOP',
					tradeName: 'Eetcafe de Stal',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02567652',
				},
			},
		];
		citytradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL houseNo', () => {
		const houseNotestCases = ['14 K', '100 -II', '63', '4', '8'];
		houseNotestCases.forEach(async (testCase) => {
			it(`NL company with houseNo:${testCase}`, async () => {
				const queryString = `?countries=NL&houseNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const houseNopostCodetestCase = [
			{
				params: {
					houseNo: '14 K',
					postCode: '3439MN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					houseNo: '100 -II',
					postCode: '1015VZ',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '63',
					postCode: '5038AC',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03963257',
				},
			},
			{
				params: {
					houseNo: '4',
					postCode: '5047RK',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					houseNo: '8',
					postCode: '3752LV',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		houseNopostCodetestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNosimpleValuetestCase = [
			{
				params: {
					houseNo: '14 K',
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					houseNo: '100 -II',
					simpleValue: 'Marnixstraat, 100 -II, 1015VZ, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '63',
					simpleValue: 'Heuvelstraat, 63, 5038AC, TILBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03963257',
				},
			},
			{
				params: {
					houseNo: '4',
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					houseNo: '8',
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		houseNosimpleValuetestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNostreettestCase = [
			{
				params: {
					houseNo: '14 K',
					street: 'Edisonbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					houseNo: '100 -II',
					street: 'Marnixstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '63',
					street: 'Heuvelstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03963257',
				},
			},
			{
				params: {
					houseNo: '4',
					street: 'Athenastraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					houseNo: '8',
					street: 'Edisonweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		houseNostreettestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNonametestCase = [
			{
				params: {
					houseNo: '14 K',
					name: 'IBM Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01944898',
				},
			},
			{
				params: {
					houseNo: '100 -II',
					name: 'DEMOCRAT',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '305',
					name: 'ITX Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01035099',
				},
			},
			{
				params: {
					houseNo: '4',
					name: 'Hilti Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01447664',
				},
			},
			{
				params: {
					houseNo: '8',
					name: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		houseNonametestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNophoneNotestCase = [
			{
				params: {
					houseNo: '100 -II',
					phoneNo: '0652691642',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '1',
					phoneNo: '0888660866',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01580566',
				},
			},
			{
				params: {
					houseNo: '4',
					phoneNo: '0416711300',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
		];
		houseNophoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNostatustestCase = [
			{
				params: {
					houseNo: '14 K',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01944898',
				},
			},
			{
				params: {
					houseNo: '63',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03413105',
				},
			},
		];
		houseNostatustestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const houseNotradeNanetestCase = [
			{
				params: {
					houseNo: '14 K',
					tradeName: 'Cognos B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01668712',
				},
			},
			{
				params: {
					houseNo: '100 -II',
					tradeName: 'Democrat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01478855',
				},
			},
			{
				params: {
					houseNo: '63',
					tradeName: 'TNO',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03413105',
				},
			},
			{
				params: {
					houseNo: '6',
					tradeName: 'syncreon Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04640810',
				},
			},
			{
				params: {
					houseNo: '8',
					tradeName: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		houseNotradeNanetestCase.forEach(async (testCase) => {
			it(`NL company search with houseNo: ${testCase.params.houseNo} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&houseNo=${testCase.params.houseNo}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL postCode', () => {
		const postCodetestCases = ['3439MN', '1015VZ', '2908LT', '5047RK', '3752LV'];
		postCodetestCases.forEach(async (testCase) => {
			it(`NL company with postCode:${testCase}`, async () => {
				const queryString = `?countries=NL&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCase = [
			{
				params: {
					postCode: '3439MN',
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					postCode: '1015VZ',
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					postCode: '2908LT',
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					postCode: '5047RK',
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01186434',
				},
			},
			{
				params: {
					postCode: '3752LV',
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		postCodesimpleValuetestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCase = [
			{
				params: {
					postCode: '3439MN',
					street: 'Edisonbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					postCode: '1015VZ',
					street: 'Marnixstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					postCode: '2908LT',
					street: 'Cypresbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					postCode: '5047RK',
					street: 'Athenastraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					postCode: '3752LV',
					street: 'Edisonweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		postCodestreettestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCase = [
			{
				params: {
					postCode: '3439MN',
					name: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					postCode: '1015VZ',
					name: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					postCode: '2908LT',
					name: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					postCode: '5047RK',
					name: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					postCode: '3752LV',
					name: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		postCodenametestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCase = [
			{
				params: {
					postCode: '3439MN',
					phoneNo: '0306016000',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01681333',
				},
			},
			{
				params: {
					postCode: '1015VZ',
					phoneNo: '0206250517',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					postCode: '2908LT',
					phoneNo: '0102841100',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					postCode: '5047RK',
					phoneNo: '0416711300',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
		];
		postCodephoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCase = [
			{
				params: {
					postCode: '3439MN',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01681333',
				},
			},
			{
				params: {
					postCode: '2908LT',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		postCodestatustestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodetradeNametestCase = [
			{
				params: {
					postCode: '3439MN',
					tradeName: 'AMIS',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01681333',
				},
			},
			{
				params: {
					postCode: '1015VZ',
					tradeName: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					postCode: '2908LT',
					tradeName: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
			{
				params: {
					postCode: '5047RK',
					tradeName: 'syncreon Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04640810',
				},
			},
			{
				params: {
					postCode: '3752LV',
					tradeName: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
		];
		postCodetradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL simpleValue', () => {
		const simpleValuetestCases = ['Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
			'Marnixstraat, 102, 1015VZ, AMSTERDAM',
			'Athenastraat, 4, 5047RK, TILBURG', 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG', 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`NL company with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=NL&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const simpleValuestreettestCase = [
			{
				params: {
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
					street: 'Edisonbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
					street: 'Marnixstraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
					street: 'Athenastraat',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01186434',
				},
			},
			{
				params: {
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
					street: 'Edisonweg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
					street: 'Cypresbaan',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		simpleValuestreettestCase.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCase = [
			{
				params: {
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
					name: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
					name: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
					name: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
					name: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
					name: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		simpleValuenametestCase.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCase = [
			{
				params: {
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
					phoneNo: '0206250517',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
					phoneNo: '0102841100',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		simpleValuephoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCase = [
			{
				params: {
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01944898',
				},
			},
			{
				params: {
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
		];
		simpleValuestatustestCase.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetradeNametestCase = [
			{
				params: {
					simpleValue: 'Edisonbaan, 14 K, 3439MN, NIEUWEGEIN',
					tradeName: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					simpleValue: 'Marnixstraat, 102, 1015VZ, AMSTERDAM',
					tradeName: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					simpleValue: 'Athenastraat, 4, 5047RK, TILBURG',
					tradeName: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					simpleValue: 'Edisonweg, 8, 3752LV, BUNSCHOTEN-SPAKENBURG',
					tradeName: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					simpleValue: 'Cypresbaan, 63, 2908LT, CAPELLE AAN DEN IJSSEL',
					tradeName: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		simpleValuetradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL street', () => {
		const streettestCases = ['Edisonbaan', 'Marnixstraat', 'Athenastraat', 'Edisonweg', 'Cypresbaan'];
		streettestCases.forEach(async (testCase) => {
			it(`NL company with street:${testCase}`, async () => {
				const queryString = `?countries=NL&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line2.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const streetnametestCase = [
			{
				params: {
					street: 'Edisonbaan',
					name: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					street: 'Marnixstraat',
					name: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					street: 'Athenastraat',
					name: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					street: 'Edisonweg',
					name: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					street: 'Cypresbaan',
					name: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		streetnametestCase.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCase = [
			{
				params: {
					street: 'Marnixstraat',
					phoneNo: '0206250517',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					street: 'Athenastraat',
					phoneNo: '0416711300',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					street: 'Cypresbaan',
					phoneNo: '0102841100',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		streetphoneNotestCase.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCase = [
			{
				params: {
					street: 'Edisonbaan',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01944898',
				},
			},
			{
				params: {
					street: 'Marnixstraat',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04490328',
				},
			},
		];
		streetstatustestCase.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettradeNametestCase = [
			{
				params: {
					street: 'Edisonbaan',
					tradeName: 'SPSS Benelux B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01152602',
				},
			},
			{
				params: {
					street: 'Marnixstraat',
					tradeName: 'Glashandel Actief',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04594921',
				},
			},
			{
				params: {
					street: 'Athenastraat',
					tradeName: 'DP World Logistics Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					street: 'Edisonweg',
					tradeName: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					street: 'Cypresbaan',
					tradeName: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		streettradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL name', () => {
		const nametestCases = ['SPSS Benelux B.V.', 'Haarlemse Apothekersgroep V.O.F.', 'DP World Logistics Netherlands B.V.', 'De Banketgroep B.V.', 'Econosto Nederland B.V.'];
		nametestCases.forEach(async (testCase) => {
			it(`NL company with name:${testCase}`, async () => {
				const queryString = `?countries=NL&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name.toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'Haarlemse Apothekersgroep V.O.F.',
					phoneNo: '0235256357',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02131764',
				},
			},
			{
				params: {
					name: 'DP World Logistics Netherlands B.V.',
					phoneNo: '0416711300',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					name: 'Econosto Nederland B.V.',
					phoneNo: '0102841100',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`NL company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=NL&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'Haarlemse Apothekersgroep V.O.F.',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02131764',
				},
			},
			{
				params: {
					name: 'Econosto Nederland B.V.',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`NL company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametradeNametestCases = [
			{
				params: {
					name: 'Haarlemse Apothekersgroep V.O.F.',
					tradeName: 'Marnix Apotheek',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02131764',
				},
			},
			{
				params: {
					name: 'DP World Logistics Netherlands B.V.',
					tradeName: 'syncreon Netherlands B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00270112',
				},
			},
			{
				params: {
					name: 'De Banketgroep B.V.',
					tradeName: 'De Banketgroep B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03437151',
				},
			},
			{
				params: {
					name: 'Econosto Nederland B.V.',
					tradeName: 'Econosto Nederland B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01198597',
				},
			},
		];
		nametradeNametestCases.forEach(async (testCase) => {
			it(`NL company search with name: ${testCase.params.name} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&name=${testCase.params.name}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL phoneNo', () => {
		const phoneNotestCases = ['0553014051', '0630076908', '0104774677', '0629179935'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`NL company with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=NL&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNostatustestCase = [
			{
				params: {
					phoneNo: '0553014051',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00457313',
				},
			},
		];
		phoneNostatustestCase.forEach(async (testCase) => {
			it(`NL company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=NL&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const phoneNotradeNametestCase = [
			{
				params: {
					phoneNo: '0652107673',
					tradeName: 'Christa Oosterhof Praktijk voor Kinesiologie',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00392090',
				},
			},
			{
				params: {
					phoneNo: '0630076908',
					tradeName: 'P. Burger Holding B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03130951',
				},
			},
			{
				params: {
					phoneNo: '0104774677',
					tradeName: 'Karanika Business Solutions B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01693171',
				},
			},
		];
		phoneNotradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with phoneNo: ${testCase.params.phoneNo} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&phoneNo=${testCase.params.phoneNo}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`NL company with status:${testCase}`, async () => {
				const queryString = `?countries=NL&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const statustradeNametestCase = [
			{
				params: {
					status: 'Active',
					tradeName: 'Heeslust B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03323991',
				},
			},
			{
				params: {
					status: 'NonActive',
					tradeName: 'A. Kuperus B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03465139',
				},
			},
		];
		statustradeNametestCase.forEach(async (testCase) => {
			it(`NL company search with status: ${testCase.params.status} and tradeName: ${testCase.params.tradeName}`, async () => {
				const querystring = `?countries=NL&status=${testCase.params.status}&tradeName=${testCase.params.tradeName}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL tradeName', () => {
		const tradeNametestCases = ['Het Toekomst Surplus B.V.', 'Christa Oosterhof Praktijk voor Kinesiologie', 'P. Burger Holding B.V.', 'Karanika Business Solutions B.V.'];
		tradeNametestCases.forEach(async (testCase) => {
			it(`NL company with tradeName:${testCase}`, async () => {
				const queryString = `?countries=NL&tradeName=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.tradingNames[0].toLowerCase() === `${testCase.toLowerCase()}`), true);
			});
		});
	});

	describe('NL synonyms', () => {
		const streetconjionedtestCases = [
			{
				params: {
					street: 'coenstr',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02171763',
				},
			},
			{
				params: {
					street: 'Spilln',
				},
				expected: {
					key: 'safeNo',
					value: 'NL05105384',
				},
			},
			{
				params: {
					street: 'Dorpswg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00571271',
				},
			},
			{
				params: {
					street: 'Meergt',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03276836',
				},
			},
			{
				params: {
					street: 'Torenstg',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02052372',
				},
			},
			{
				params: {
					street: 'Meikd',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00443158',
				},
			},
		];
		streetconjionedtestCases.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueconjionedtestCases = [
			{
				params: {
					simpleValue: 'Jan Pietersz. Coenstr, 10, 2595WP',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02171763',
				},
			},
			{
				params: {
					simpleValue: 'Spilln, 10, 1852BM, HEILOO',
				},
				expected: {
					key: 'safeNo',
					value: 'NL05105384',
				},
			},
			{
				params: {
					simpleValue: 'Dorpswg, 43 A, 8271BJ, IJSSELMUIDEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04655454',
				},
			},
			{
				params: {
					simpleValue: 'Jansbuitensgl, 7, 6811AA, ARNHEM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01172595',
				},
			},
			{
				params: {
					simpleValue: 'Meergt, 19, 1131EN, VOLENDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL03276836',
				},
			},
			{
				params: {
					simpleValue: 'Torenhf, 12, 3742CT, BAARN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02865593',
				},
			},
			{
				params: {
					simpleValue: 'Torenstg, 2, 1012TH, AMSTERDAM',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02052372',
				},
			},
			{
				params: {
					simpleValue: 'Meikd, 61, 6744TC, EDERVEEN',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00443158',
				},
			},
		];
		simpleValueconjionedtestCases.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'HEUSDEN GEM aaste',
					name: 'Stichting Administratiekantoor La Planta',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00816818',
				},
			},
			{
				params: {
					city: 'Vèghel',
					name: 'EMTÉ Supermarkten B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01008243',
				},
			},
			{
				params: {
					city: 'duozel',
					name: 'Restaurant Ereslo B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00767722',
				},
			},
			{
				params: {
					city: 'pot',
					name: 'Stichting Van Adonai',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02897048',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`NL company search with city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=NL&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}&pageSize=200`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'papekop',
					name: 'Oranjevereniging Papekop',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01736474',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`NL company search with street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=NL&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuesynonymtestCases = [
			{
				params: {
					simpleValue: 'Laar, 40, 5388HH, nisseroi',
					name: 'Laarstede',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02773373',
				},
			},
			{
				params: {
					simpleValue: 'Jousterweg, 92, 8465PL, aldehaske',
					name: 'Herenwal Service',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00018093',
				},
			},
			{
				params: {
					simpleValue: 'Kanaalstraat, 59, 9301LR, rhoon',
					name: 'ANWB B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01421573',
				},
			},
		];
		simpleValuesynonymtestCases.forEach(async (testCase) => {
			it(`NL company search with simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=NL&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namesynonymtestCases = [
			{
				params: {
					name: 'Th. Vergeer en zoon bv',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01641414',
				},
			},
			{
				params: {
					name: 'happy for two',
				},
				expected: {
					key: 'safeNo',
					value: 'NL02623099',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`NL company search with name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=NL&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('NL Partial matches', () => {
		const partialvatNotestCases = [
			{
				params: {
					vatNo: '005616864',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01401373',
				},
			},
			{
				params: {
					vatNo: 'NL005616864',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01401373',
				},
			},
			{
				params: {
					vatNo: '005616864B15',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01401373',
				},
			},
			{
				params: {
					vatNo: '5616864',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01401373',
				},
			},
			{
				params: {
					vatNo: 'NL005616864B15',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01401373',
				},
			},
		];
		partialvatNotestCases.forEach(async (testCase) => {
			it(`NL company search with vatNo: ${testCase.params.vatNo}`, async () => {
				const querystring = `?countries=NL&vatNo=${testCase.params.vatNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialpostCodetestCases = [
			{
				params: {
					postCode: '3812RG',
				},
				expected: {
					key: 'safeNo',
					value: 'NL04515699',
				},
			},
			{
				params: {
					postCode: '3812',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01904564',
				},
			},
			{
				params: {
					postCode: '13',
					name: 'De Keiestamper B.V.',
				},
				expected: {
					key: 'safeNo',
					value: 'NL00769722',
				},
			},
			{
				params: {
					postCode: '38 12',
				},
				expected: {
					key: 'safeNo',
					value: 'NL01904564',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`NL company search with postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=NL&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe(' NL Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns NL company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=NL&name=${testCase}`;
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
			it(`returns NL company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=NL&name=${testCase}`;
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
			it(`returns NL company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=NL&name=${testCase}`;
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
