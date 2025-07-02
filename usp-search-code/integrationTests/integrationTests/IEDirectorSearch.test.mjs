import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('IE Generic Director Search Tests', () => {
	it('Returns IE directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=IE&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'IE'), true);
	});

	[
		{ key: 'city', value: 'DUBLIN 3.', responseKey: 'address.city' },
		{ key: 'postCode', value: 'DUBLIN 3', responseKey: 'address.postCode' },
		{ key: 'type', value: 'ltd' },
		{ key: 'status', value: 'current' },
		{ key: 'regNo', value: 'IE334478' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=IE&pageSize=200&firstName=ANDREW&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('IE Exact Director Search Tests', () => {
	// Create a list of combinations based on the params in the array
	// e.g. input [1,2,3] => [[1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
	const createCombinations = (params) => {
		const combinations = [[]];

		params.forEach((param) => {
			const newCombinations = [];

			combinations.forEach((combination) => {
				if (param.values) {
					param.values.forEach((value) => {
						newCombinations.push([...combination, { key: param.key, value, ...(param.responseKey !== undefined && { responseKey: param.responseKey }) }]);
					});
				} else {
					newCombinations.push([...combination, { key: param.key, value: param.value, ...(param.responseKey !== undefined && { responseKey: param.responseKey }) }]);
				}
			});

			combinations.push(...newCombinations);
		});

		return combinations.slice(1);
	};

	const params = [
		{ key: 'firstName', value: 'ANDREW' },
		{ key: 'lastName', value: 'BATES' },
		{ key: 'companyName', value: 'TULIP ASSET PURCHASE COMPANY (IRELAND) LIMITED' },
		{ key: 'companyNumber', value: 'IE334478' },
		{ key: 'regNo', value: 'IE334478' },
		{ key: 'id', value: 'IE-0-IE334478' },
	];

	const expectedResponse = {
		responseCompany: 'TULIP ASSET PURCHASE COMPANY (IRELAND) LIMITED',
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1966-11-02' }, { key: 'firstName', value: 'ANDREW' }],
		[{ key: 'ageMax', value: '60' }, { key: 'ageMin', value: '57' }, { key: 'companyName', value: 'TULIP ASSET PURCHASE COMPANY (IRELAND) LIMITED' }],
		[{ key: 'dateOfBirth', value: '1966-11-02' }, { key: 'lastName', value: 'BATES' }],
		[
			{ key: 'city', value: 'DUBLIN 3.', responseKey: 'address.city' },
			{ key: 'postCode', value: 'DUBLIN 3', responseKey: 'address.postCode' },
			{ key: 'street', value: 'CLONTARF', responseKey: 'address.line2' },
			{ key: 'houseNo', value: '148 CLONTARF ROAD', responseKey: 'address.line1' },
		],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=IE&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'IE700124210'), true);
			assert.equal(response.data.directors.some((director) => director.representativeCompany.name.toLowerCase() === expectedResponse.responseCompany.toLowerCase()), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('IE Specific Director Search Tests', () => {
	it('Returns Creditsafe when: companyName=TULIP ASSET PURCHASE COMPANY (IRELAND) LIMITED', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=IE&pageSize=200&companyName=TULIP ASSET PURCHASE COMPANY (IRELAND) LIMITED`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'IE700124210'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'IE700124210' },
		{ key: 'peopleId', value: 'IE-700124210' },
		{ key: 'localDirectorNumber', value: 'ie700124210' },
		{ key: 'peopleId', value: 'ie-700124210' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns Creditsafe when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=IE&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});

	[
		{
			params: {
				firstName: 'Stephen',
				companyName: 'BACKHOUSE SUPERMARKETS LIMITED',
				dateOfBirth: '1965-11-20',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'IE700528206',
			},
		},
		{
			params: {
				firstName: 'JOHN',
				companyNumber: 'IE408697',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'IE700557605',
			},
		},
		{
			params: {
				firstName: 'HOWARD',
				lastName: 'HASTINGS',
				houseNo: 'ANNERD LODGE',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'IE700201607',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=IE&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});

describe('IE name synonym Director searches', () => {
	it('should return results for regNo: 459496, companyName: general partnership', async () => {
		const regNo = '459496';
		const companyName = 'general partnership';

		const response = await getWithRetry(`${baseUrl}/people?countries=IE&regNo=${regNo}&companyName=${companyName}`);
		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'IE1419109'), true);
	});
});
