import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('GB Generic Director Search Tests', () => {
	it('Returns GB directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=GB&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'UK'), true);
	});

	[
		{ key: 'city', value: 'Cardiff', responseKey: 'address.city' },
		{ key: 'postCode', value: 'CF10 4DQ', responseKey: 'address.postCode' },
		{ key: 'type', value: 'ltd' },
		{ key: 'status', value: 'current' },
		{ key: 'regNo', value: 'FC037079' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=GB&pageSize=200&firstName=cato&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('GB Exact Director Search Tests', () => {
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
		{ key: 'firstName', value: 'Cato' },
		{ key: 'lastName', value: 'Johannessen' },
		{ key: 'companyName', value: 'PINEMONT SECURITIES LIMITED' },
		{ key: 'companyNumber', value: '02381357' },
		{ key: 'regNo', value: '02381357' },
		{ key: 'id', value: 'GB-0-02381357' },
	];

	const expectedResponse = {
		responseCompany: 'PINEMONT SECURITIES LIMITED',
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1960-04-01' }, { key: 'firstName', value: 'Cato' }],
		[{ key: 'ageMax', value: '66' }, { key: 'ageMin', value: '64' }, { key: 'companyName', value: 'PINEMONT SECURITIES LIMITED' }],
		[{ key: 'dateOfBirth', value: '1960-04-01' }, { key: 'lastName', value: 'Johannessen' }],
		[
			{ key: 'city', value: 'London', responseKey: 'address.city' },
			{ key: 'postCode', value: 'WC1V 7PA', responseKey: 'address.postCode' },
			{ key: 'street', value: '330 High Holborn', responseKey: 'address.line2' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=GB&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'UK926635055'), true);
			assert.equal(response.data.directors.some((director) => director.representativeCompany.name.toLowerCase() === expectedResponse.responseCompany.toLowerCase()), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('GB Specific Director Search Tests', () => {
	it('Returns Creditsafe when: companyName=INSURESAFE', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=GB&pageSize=200&companyName=INSURESAFE`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'UK909183938'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'UK909183938' },
		{ key: 'peopleId', value: 'GB-909183938' },
		{ key: 'localDirectorNumber', value: 'uk909183938' },
		{ key: 'peopleId', value: 'gb-909183938' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns Creditsafe when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=GB&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});

	[
		{
			params: {
				firstName: 'Stephen',
				companyName: 'ENJOVIA',
				dateOfBirth: '1990-09',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'UK918178267',
			},
		},
		{
			params: {
				firstName: 'Cato',
				companyNumber: 'FC037079',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'UK909183938',
			},
		},
		{
			params: {
				firstName: 'Howard',
				lastName: 'Newman',
				province: 'Kent',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'UK919122166',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=GB&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});

describe('GB postCode partial Director searches', () => {
	it('should return results for postCode: NP20, firstName: Stephen, lastName: McQueen', async () => {
		const postCode = 'NP20';
		const firstName = 'Stephen';
		const lastName = 'McQueen';
		const response = await getWithRetry(`${baseUrl}/people?countries=GB&postCode=${postCode}&firstName=${firstName}&lastName=${lastName}`);
		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'UK918178267'), true);
	});
});
