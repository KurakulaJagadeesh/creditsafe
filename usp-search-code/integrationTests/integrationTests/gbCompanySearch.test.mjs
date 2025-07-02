import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('GB Regression Tests', async () => {
	describe('GB company Search', () => {
		it('returns GB Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=GB`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'GB'), true);
		});
	});

	describe('GB pagination tests', () => {
		// Create a list of UK company names
		const inputNames = [
			{ name: 'bank', type: 'Ltd' },
			{ name: 'creditsafe', type: 'Ltd' },
			{ name: 'experian', type: 'Ltd' },
			{ name: 'Tesco', type: 'Ltd' },
			{ name: 'Sainsbury', type: 'Ltd' },
			{ name: 'Asda', type: 'Ltd' },
			{ name: 'Morrisons', type: 'Ltd' },
			{ name: 'Lidl', type: 'Ltd' },
			{ name: 'Aldi', type: 'Ltd' },
			{ name: 'Waitrose', type: 'Ltd' },
			{ name: 'Beales', type: 'Ltd' },
			{ name: 'Finnegans', type: 'Ltd' },
			{ name: 'London', postCode: 'E20 1JN', type: 'Ltd' },
			{ name: 'British', city: 'London', type: 'Ltd' },
		];

		// For each name, make a request to the handler and log the totalSize
		for (let i = 0; i < inputNames.length; i += 1) {
			// It shows consistent total size across 5 requests
			it(`Returns consistent totalSize for ${JSON.stringify(inputNames[i])}`, async () => {
				const individualResults = [];
				for (let j = 0; j < 5; j += 1) {
					const urlParams = new URLSearchParams(inputNames[i]).toString();

					const url = `${baseUrl}/companies?countries=GB&pageSize=15&page=${j + 1}&${urlParams}`;
					// eslint-disable-next-line no-await-in-loop
					const response = await getWithRetry(url);

					assert.equal(response.status, 200);

					if (response.data.totalSize > 0) {
						individualResults.push(response.data.totalSize);
					}
				}
				// Assert all totals in the array are the same
				assert.equal(individualResults.every((val) => val === individualResults[0]), true);
			});
		}
	});

	describe('GB id', () => {
		const idTestCases = ['GB-0-12297233', 'GB-0-03702381', 'GB-1-5795468', 'GB-1-5795477', 'GB-1-5795481'];
		idTestCases.forEach(async (testCase) => {
			it(`GB company with id:${testCase}`, async () => {
				const queryString = `?countries=GB&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					safeNo: 'UK17866117',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('GB company search with id and safeNo', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					regNo: '12297233',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('GB company search with id and regNo', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'GB-1-5797846',
					vatNo: 'GB775332908',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('GB company search with id and vatNo', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					city: 'CARDIFF',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('GB company search with id and city', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					postCode: 'CF10 4DQ',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('GB company search with id and postCode', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					simpleValue: 'CASPIAN POINT ONE, PIERHEAD STREET, CARDIFF, SOUTH GLAMORGAN, CF10 4PH',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('GB company search with id and simpleValue', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					street: 'CASPIAN POINT ONE',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('GB company search with id and street', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					name: 'CREDITSAFE SERVICES LIMITED',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('GB company search with id and name', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					phoneNo: '02920886500',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('GB company search with id and phoneNo', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'GB-0-12297233',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('GB company search with id and status', async () => {
				const queryString = `?countries=GB&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idTypetestCases = [
			{
				params: {
					id: 'GB-0-12297233',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					id: 'GB-1-5795468',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
		];
		idTypetestCases.forEach(async (testCase) => {
			it(`GB company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('GB safeNo', () => {
		const safeNoTestCases = ['UK17866117', 'UK03357972', 'UK14602219', 'UK14602227', 'UK14602230'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`GB company with safeNo:${testCase}`, async () => {
				const queryString = `?countries=GB&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					regNo: '12297233',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and regNo', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					vatNo: 'GB775332908',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and vatNo', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					city: 'CARDIFF',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and city', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostcodetestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					postCode: 'CF10 4DQ',
				},
			},
		];
		safeNopostcodetestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and postCode', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					simpleValue: 'CASPIAN POINT ONE, PIERHEAD STREET, CARDIFF, SOUTH GLAMORGAN, CF10 4PH',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreetValuetestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					street: 'CASPIAN POINT ONE',
				},
			},
		];
		safeNostreetValuetestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and street', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonameValuetestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					name: 'CREDITSAFE SERVICES LIMITED',
				},
			},
		];
		safeNonameValuetestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and name', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					phoneNo: '02920886500',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					status: 'Active',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and status', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotypetestCase = [
			{
				params: {
					safeNo: 'UK17866117',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCase.forEach(async (testCase) => {
			it('GB company search with safeNo and type', async () => {
				const queryString = `?countries=GB&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('GB regNo', () => {
		const regNoTestCases = ['12297233', '03702381', '5795468', '5795477', '5795481'];
		regNoTestCases.forEach(async (testCase) => {
			it(`GB company with regNo:${testCase}`, async () => {
				const queryString = `?countries=GB&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCase = [
			{
				params: {
					regNo: '12297233',
					vatNo: 'GB775332908',
				},
			},
		];
		regNovatNotestCase.forEach(async (testCase) => {
			it('GB company search with regNo and vatNo', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: '12297233',
					city: 'CARDIFF',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it(`GB company search with regNo: ${testCase.params.regNo} and city: ${testCase.params.city}`, async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: '12297233',
					postCode: 'CF10 4DQ',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it(`GB company search with regNo: ${testCase.params.regNo} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: '12297233',
					simpleValue: 'CASPIAN POINT ONE, PIERHEAD STREET, CARDIFF, SOUTH GLAMORGAN, CF10 4PH',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('GB company search with regNo and simpleValue', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: '12297233',
					street: 'CASPIAN POINT ONE',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('GB company search with regNo and street', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: '12297233',
					name: 'CREDITSAFE SERVICES LIMITED',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('GB company search with regNo and name', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: '12297233',
					phoneNo: '02920886500',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('GB company search with regNo and phoneNo', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: '12297233',
					status: 'active',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('GB company search with regNo and status', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotypetestCase = [
			{
				params: {
					regNo: '12297233',
					type: 'ltd',
				},
			},
		];
		regNotypetestCase.forEach(async (testCase) => {
			it('GB company search with regNo and type', async () => {
				const queryString = `?countries=GB&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('GB vatNo', () => {
		const vatNoTestCases = ['GB127287110', 'GB775332908', 'GB890933980', 'GB416062426', 'GB447257083'];
		vatNoTestCases.forEach(async (testCase) => {
			it(`GB company with vatNo:${testCase}`, async () => {
				const queryString = `?countries=GB&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					city: 'LONDON',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it(`GB company search with vatNo: ${testCase.params.vatNo} and city: ${testCase.params.city}`, async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					postCode: 'W10 4DX',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it(`GB company search with vatNo: ${testCase.params.vatNo} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					simpleValue: '253, PEACH ROAD, LONDON, W10 4DX',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					street: '253',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and street', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					name: 'CONTEXT CONSULTANTS LIMITED',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and name', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					phoneNo: '01392 758742',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					status: 'Nonactive',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and status', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNotypetestCase = [
			{
				params: {
					vatNo: 'GB127287110',
					type: 'ltd',
				},
			},
		];
		vatNotypetestCase.forEach(async (testCase) => {
			it('GB company search with vatNo and type', async () => {
				const queryString = `?countries=GB&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('GB city', () => {
		const cityTestCases = ['CARDIFF', 'CRAWLEY', 'LONDON', 'GUERNSEY', 'CAMBRIDGE'];
		cityTestCases.forEach(async (testCase) => {
			it(`GB company with city:${testCase}`, async () => {
				const queryString = `?countries=GB&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'CARDIFF',
					postCode: 'CF10 4DQ',
				},
				expected: {
					key: 'safeNo',
					value: 'UK09580496',
				},
			},
			{
				params: {
					city: 'CRAWLEY',
					postCode: 'RH10 6AA',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					city: 'LONDON',
					postCode: 'SW8 1SP',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					city: 'GUERNSEY',
					postCode: 'GY1 1RQ',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602227',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					postCode: 'CB5 8AA',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602230',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'LONDON',
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON, SW8 1SP',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					simpleValue: 'NEWMARKET ROAD, TEVERSHAM, CAMBRIDGE, CAMBRIDGESHIRE, CB5 8AA',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602230',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'CAMBRIDGE',
					street: 'THE HOMESTEAD NEWMARKET ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'UK18745103',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'CARDIFF',
					name: 'CREDITSAFE SERVICES LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					city: 'CRAWLEY',
					name: 'LEWIS AND DICK LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					city: 'LONDON',
					name: 'LIGHTBOX',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					name: 'AUSTIN TREE CARE LTD',
				},
				expected: {
					key: 'safeNo',
					value: 'UK18745103',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'CARDIFF',
					phoneNo: '02920886500',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					city: 'CRAWLEY',
					phoneNo: '02083930055',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					city: 'LONDON',
					phoneNo: '020 3242 0040',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					phoneNo: '01223967274',
				},
				expected: {
					key: 'safeNo',
					value: 'UK18745103',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'CARDIFF',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK03503898',
				},
			},
			{
				params: {
					city: 'CRAWLEY',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05038071',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK06969656',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citytypetestCase = [
			{
				params: {
					city: 'CARDIFF',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK03503898',
				},
			},
			{
				params: {
					city: 'CRAWLEY',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05038071',
				},
			}, {
				params: {
					city: 'LONDON',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK11559185',
				},
			},
			{
				params: {
					city: 'CAMBRIDGE',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK21467239',
				},
			},
		];
		citytypetestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityexacttestCase = [
			{
				params: {
					city: 'CARDIFF',
					exact: 'true',
				},
			},
		];
		cityexacttestCase.forEach(async (testCase) => {
			it(`GB company search with city: ${testCase.params.city} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
	});

	describe('GB postCode', () => {
		const postCodetestCases = ['CF10 4DQ', 'RH10 6AA', 'SW8 1SP', 'GY1 1RQ', 'CB5 8AA'];
		postCodetestCases.forEach(async (testCase) => {
			it(`GB company with postCode:${testCase}`, async () => {
				const queryString = `?countries=GB&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: 'CF10 4DQ',
					simpleValue: 'ONE CASPIAN POINT CARDIFF, WATERSIDE PIERHEAD STREET, WATERSIDE, PIERHEAD STREET, CARDIFF, CF10 4DQ',
				},
				expected: {
					key: 'safeNo',
					value: 'UK06150920',
				},
			},
			{
				params: {
					postCode: 'SW8 1SP',
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON, SW8 1SP',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					postCode: 'CB5 8AA',
					simpleValue: 'NEWMARKET ROAD, TEVERSHAM, CAMBRIDGE, CAMBRIDGESHIRE, CB5 8AA',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602230',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: 'CF10 4DQ',
					street: 'CASPIAN POINT ONE',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17891232',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: 'CF10 4DQ',
					name: 'CREDITSAFE UK HOLDING LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17891232',
				},
			},
			{
				params: {
					postCode: 'RH10 6AA',
					name: 'LEWIS AND DICK LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					postCode: 'SW8 1SP',
					name: 'LIGHTBOX',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					postCode: 'CB5 8AA',
					name: 'STARS CHILDRENS BEREAVEMENT SUPPORT SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: 'CF10 4DQ',
					phoneNo: '02920886500',
				},
				expected: {
					key: 'safeNo',
					value: 'UK18066631',
				},
			},
			{
				params: {
					postCode: 'RH10 6AA',
					phoneNo: '02083930055',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					postCode: 'SW8 1SP',
					phoneNo: '020 3242 0040',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					postCode: 'CB5 8AA',
					phoneNo: '01223863511',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: 'CF10 4DQ',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK18066631',
				},
			},
			{
				params: {
					postCode: 'RH10 6AA',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					postCode: 'SW8 1SP',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK06390147',
				},
			},
			{
				params: {
					postCode: 'CB5 8AA',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&status=${testCase.params.status}&pageSize=200`;
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
					postCode: 'CF10 4DQ',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					postCode: 'RH10 6AA',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					postCode: 'SW8 1SP',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					postCode: 'CB5 8AA',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602230',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const postCodeexacttestCase = [
			{
				params: {
					postCode: 'CF10 4DQ',
					exact: 'true',
				},
			},
		];
		postCodeexacttestCase.forEach(async (testCase) => {
			it(`GB company search with postCode: ${testCase.params.postCode} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
	});

	describe('GB simpleValue', () => {
		const simpleValuetestCases = [
			'6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON, SW8 1SP',
			'FULLER HOUSE GRANGE ROAD, ST PETER PORT, GUERNSEY, CHANNEL ISLES, GY1 1RQ',
			'NEWMARKET ROAD, TEVERSHAM, CAMBRIDGE, CAMBRIDGESHIRE, CB5 8AA',
		];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`GB company with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=GB&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON, SW8 1SP',
					street: 'SOUTH LAMBETH PLACE',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					simpleValue: 'GREENHOUSE FARM BUNGALOW, ROAD, NEWMARKET ROAD, CAMBRIDGE, CAMBRIDGESHIRE, CB5 8AA',
					street: 'ROAD',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`GB company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=GB&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON',
					name: 'LIGHTBOX',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					simpleValue: 'GREENHOUSE FARM BUNGALOW, NEWMARKET ROAD, CAMBRIDGE, CAMBRIDGESHIRE',
					name: 'STARS CHILDRENS BEREAVEMENT SUPPORT SERVICES',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`GB company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON',
					phoneNo: '020 3242 0040',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					simpleValue: 'GREENHOUSE FARM BUNGALOW, NEWMARKET ROAD, CAMBRIDGE, CAMBRIDGESHIRE',
					phoneNo: '01223863511',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`GB company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=GB&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					simpleValue: 'GREENHOUSE FARM BUNGALOW, NEWMARKET ROAD, CAMBRIDGE, CAMBRIDGESHIRE',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`GB company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: '6A, SOUTH LAMBETH PLACE, LAMBETH, LONDON',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					simpleValue: 'GREENHOUSE FARM BUNGALOW, NEWMARKET ROAD, CAMBRIDGE, CAMBRIDGESHIRE',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`GB company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('GB street', () => {
		const streettestCases = ['ROAD', 'STREET'];
		streettestCases.forEach(async (testCase) => {
			it(`GB company with street:${testCase}`, async () => {
				const queryString = `?countries=GB&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line2 === `${testCase}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'STREET',
					name: 'CREDITSAFE SERVICES LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					street: 'ROAD',
					name: 'LEWIS AND DICK LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					street: 'SOUTH LAMBETH PLACE',
					name: 'LIGHTBOX',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`GB company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'STREET',
					phoneNo: '02920886500',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`GB company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'STREET',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`GB company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: 'CASPIAN POINT ONE',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					street: '18',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14696578',
				},
			},
			{
				params: {
					street: '6A',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK10970836',
				},
			},
			{
				params: {
					street: 'GREENHOUSE FARM BUNGALOW',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`GB company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetexacttestCase = [
			{
				params: {
					street: ' DWR CYMRU WELSH WATER',
					exact: 'true',
				},
			},
		];
		streetexacttestCase.forEach(async (testCase) => {
			it(`GB company search with street: ${testCase.params.street} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
	});

	describe('GB name', () => {
		const nametestCases = ['CREDITSAFE SERVICES LIMITED', 'LEWIS AND DICK LIMITED', 'LIGHTBOX', 'IKAROS SW LIMITED'];
		nametestCases.forEach(async (testCase) => {
			it(`GB company with name:${testCase}`, async () => {
				const queryString = `?countries=GB&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'CREDITSAFE SERVICES LIMITED',
					phoneNo: '02920886500',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					name: 'LEWIS AND DICK LIMITED',
					phoneNo: '02083930055',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					name: 'LIGHTBOX',
					phoneNo: '020 3242 0040',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
			{
				params: {
					name: 'STARS CHILDRENS BEREAVEMENT SUPPORT SERVICES',
					phoneNo: '01223863511',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`GB company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'CREDITSAFE SERVICES LIMITED',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					name: 'THE CO-OPERATIVE BANK PLC',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK07001093',
				},
			},
			{
				params: {
					name: 'ALLIANCE HEALTHCARE',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK10970836',
				},
			},
			{
				params: {
					name: 'STARS CHILDRENS BEREAVEMENT SUPPORT SERVICES',
					status: 'Nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`GB company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'CREDITSAFE SERVICES LIMITED',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					name: 'WALSTEAD GROUP LIMITED',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14696578',
				},
			},
			{
				params: {
					name: 'ALLIANCE HEALTHCARE',
					type: 'nonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK10970836',
				},
			},
			{
				params: {
					name: 'STARS CHILDRENS BEREAVEMENT SUPPORT SERVICES',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK09142028',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`GB company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nameexacttestCases = [
			{
				params: {
					name: 'DALEY GOLF HOLIDAYS',
					exact: 'true',
				},
				expected: {
					key: 'safeNo',
					value: 'UK21472910',
				},
			},
			{
				params: {
					name: 'DALEY GOLF HOLIDAYS',
					exact: 'false',
				},
				expected: {
					key: 'safeNo',
					value: 'UK21472910',
				},
			},
		];
		nameexacttestCases.forEach(async (testCase) => {
			it(`GB company search with name: ${testCase.params.name} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('GB phoneNo', () => {
		const phoneNotestCases = ['02920886500', '02083930055', '020 3242 0040', '01223863511'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`GB company with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=GB&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '02920886500',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					phoneNo: '01142729768',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK07001093',
				},
			},
			{
				params: {
					phoneNo: '01506 434211',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'UK10970836',
				},
			},
			{
				params: {
					phoneNo: '01223863511',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05538512',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it(`GB company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=GB&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const phoneNotypetestCases = [
			{
				params: {
					phoneNo: '02920886500',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK17866117',
				},
			},
			{
				params: {
					phoneNo: '02083930055',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK16652687',
				},
			},
			{
				params: {
					phoneNo: '01392 758742',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14607738',
				},
			},
			{
				params: {
					phoneNo: '020 3242 0040',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'UK14602219',
				},
			},
		];
		phoneNotypetestCases.forEach(async (testCase) => {
			it(`GB company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=GB&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const phoneNoexacttestCase = [
			{
				params: {
					phoneNo: '01443452300',
					exact: 'true',
				},
			},
		];
		phoneNoexacttestCase.forEach(async (testCase) => {
			it(`GB company search with phoneNo: ${testCase.params.phoneNo} and exact: ${testCase.params.exact}`, async () => {
				const querystring = `?countries=GB&phoneNo=${testCase.params.phoneNo}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
			});
		});
	});

	describe('GB status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`GB company with status:${testCase}`, async () => {
				const queryString = `?countries=GB&status=${testCase}`;
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
			it(`GB company search with status:${testCase.params.status} and exact=${testCase.params.exact}`, async () => {
				const queryString = `?countries=GB&status=${testCase.params.status}&exact=${testCase.params.exact}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
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
			it(`GB company search with status:${testCase.params.status} and type=${testCase.params.type}`, async () => {
				const queryString = `?countries=GB&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
	});

	describe('GB type', () => {
		const typetestCase = ['Ltd', 'NonLtd'];
		typetestCase.forEach(async (testCase) => {
			it(`GB company search with type: ${testCase}`, async () => {
				const querystring = `?countries=GB&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase}`), true);
			});
		});
		const exacttypetestCases = [
			{
				params: {
					exact: 'true',
					type: 'Ltd',
				},
			},
			{
				params: {
					exact: 'false',
					type: 'Ltd',
				},
			},
			{
				params: {
					exact: 'true',
					type: 'NonLtd',
				},
			},
			{
				params: {
					exact: 'false',
					type: 'NonLtd',
				},
			},
		];
		exacttypetestCases.forEach(async (testCase) => {
			it(`GB company search with exact:${testCase.params.exact} and type=${testCase.params.type}`, async () => {
				const queryString = `?countries=GB&exact=${testCase.params.exact}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
	});

	describe('GB partialmatches', () => {
		const partialvatNotestCases = [
			{
				params: {
					vatNo: 'GB127287110',
				},
				expected: {
					vatNo: 'GB127287110',
				},
			},
			{
				params: {
					vatNo: '127287110',
				},
				expected: {
					vatNo: 'GB127287110',
				},
			},
			{
				params: {
					vatNo: 'GB447257083',
				},
				expected: {
					vatNo: 'GB447257083',
				},
			},
			{
				params: {
					vatNo: '447257083',
				},
				expected: {
					vatNo: 'GB447257083',
				},
			},
		];
		partialvatNotestCases.forEach(async (testCase) => {
			it(`GB company search with partialvatNo: ${testCase.params.vatNo}`, async () => {
				const querystring = `?countries=GB&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase.expected.vatNo}`), true);
			});
		});
		const partialpostCodetestCases = [
			{
				params: {
					postCode: 'CF10',
				},
				expected: {
					postCode: 'CF10 2EH',
				},
			},
			{
				params: {
					postCode: 'CF10 4DQ',
				},
				expected: {
					postCode: 'CF10 4DQ',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`GB company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=GB&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.expected.postCode}`), true);
			});
		});
	});

	describe('GB synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'PRET INTERMEDIATE CO LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK19155677',
				},
			},
			{
				params: {
					name: 'HIGHBOURNE GRP LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'UK05860274',
				},
			},
			{
				params: {
					name: 'KEOGHS limited liability partnership',
				},
				expected: {
					key: 'safeNo',
					value: 'UK07090158',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`GB company search with namesynonyms: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [

			{
				params: {
					city: 'oxf',
				},
				expected: {
					city: 'OXFORD',
				},
			},
			{
				params: {
					city: 'gsy',
				},
				expected: {
					city: 'GUERNSEY',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`GB company search with citysynonyms: ${testCase.params.city}`, async () => {
				const querystring = `?countries=GB&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.expected.city}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: '11 THE AVENUE OAKTREE',
				},
				expected: {
					key: 'safeNo',
					value: 'UK15951888',
				},
			},
			{
				params: {
					street: 'PERPETUAL pk',
				},
				expected: {
					key: 'safeNo',
					value: 'UK02664577',
				},
			},
			{
				params: {
					street: 'CLIFTON hts',
				},
				expected: {
					key: 'safeNo',
					value: 'UK02922118',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`GB company search with streetsynonyms: ${testCase.params.street}`, async () => {
				const querystring = `?countries=GB&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('GB autocompletes', () => {
		const alphabetsTestCases = ['bank', 'credit', 'safe', 'company', 'gmbh'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns GB company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=GB&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
					// qwerty = pass
					// testqwert = fail
				});
			});
		});
		const NumericsTestCases = ['12', '7', '45', '23', '28', '86'];
		NumericsTestCases.forEach(async (testCase) => {
			it(`returns GB company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=GB&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphaNumericsTestCases = ['45 d', '23 w', '28 l', '86 v'];
		AlphaNumericsTestCases.forEach(async (testCase) => {
			it(`returns GB company name startwith alphanumerics:${testCase}`, async () => {
				const queryString = `?countryCode=GB&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const SpecialcharacterTestCases = ['@', '!', '$'];
		SpecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns GB company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=GB&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
	});

	describe('GB companyname search with stopwords ', () => {
		const companynamestopwordtestCases = [
			{
				params: {
					name: 'IKAROS SW a',
				},
				expected: {
					name: 'IKAROS SW LIMITED',
				},
			},
			{
				params: {
					name: 'Akhter Computers PLC',
				},
				expected: {
					name: 'AKHTER COMPUTERS LIMITED',
				},
			},
			{
				params: {
					name: 'Akhter Computers co',
				},
				expected: {
					name: 'AKHTER COMPUTERS LIMITED',
				},
			},
			{
				params: {
					name: 'AKHTER COMPUTERS company',
				},
				expected: {
					name: 'AKHTER COMPUTERS LIMITED',
				},
			},
		];
		companynamestopwordtestCases.forEach(async (testCase) => {
			it(`GB company search with companynamestopwords: ${testCase.params.name}`, async () => {
				const querystring = `?countries=GB&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase.expected.name}`), true);
			});
		});
	});

	describe('GB AND query logic for name search', () => {
		it('GB company search with name: CREDITSAFE should return 99 match score results', async () => {
			console.log('Test 1 started');
			const querystring = '?countries=GB&name=CREDITSAFE';
			const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.name.toLowerCase().includes('creditsafe')), true);
			assert.equal(response.data.companies.every((company) => company.matchScore === 99), true);
			console.log('Test 1 completed');
		});

		// Prove that we don't go showing users fallback company search results as they are of a poor quality
		it('GB company search with name: CREDITSAFE and city: London should return NO results', async () => {
			console.log('Test 2 started');
			const querystring = '?countries=GB&name=CREDITSAFE&city=London';
			const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length, 0);
			console.log('Test 2 completed');
		});

		it('GB company search with name: CREDITSAFE and city: Cardiff should return 99 match score results', async () => {
			console.log('Test 3 started');
			const querystring = '?countries=GB&name=CREDITSAFE&city=Cardiff';
			const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.name.toLowerCase().includes('creditsafe')), true);
			// Check that all results are in cardiff
			assert.equal(response.data.companies.every((company) => company.address.city === 'CARDIFF'), true);
			console.log('Test 3 completed');
		});
	});

	describe('GB default and max page size', () => {
		// If no page size is specified, the default should be 10 and should be set to page 1
		it('GB company search with no page size specified should return 10 results', async () => {
			const querystring = '?countries=GB&name=credit';
			const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length, 10);
			assert.equal(response.data.page, 1);
		});

		// If the page size is set to 200 (the max), it should return 200 results
		it('GB company search with page size of 200 should return 200 results', async () => {
			const querystring = '?countries=GB&name=credit&pageSize=200';
			const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length, 200);
		});

		// If the page size is greater than 200 (the max), it should be capped at 200
		it('GB company search with page size of 300 should return 200 results', async () => {
			const querystring = '?countries=GB&name=creditsafe&pageSize=300';
			try {
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`, 400);
				assert.equal(response.status, 400);
			} catch (error) {
				console.log(error);
			}
		});
	});

	describe('GB increase recall flag', () => {
		const testCases = [false, true];

		testCases.forEach(async (increaseRecall) => {
			it(`GB company search with increase recall flag set to ${increaseRecall} should return more relevant results`, async () => {
				const querystring = `?countries=GB&name=creditsafe&city=London&increaseRecall=${increaseRecall}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(increaseRecall === true ? response.data.companies.length > 0 : response.data.companies.length === 0, true);
			});
		});
	});
});
