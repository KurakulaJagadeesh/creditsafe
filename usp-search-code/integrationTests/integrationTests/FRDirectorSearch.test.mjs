import assert from 'assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('FR Generic Director Search Tests', () => {
	it('Returns FR directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=FR&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'FR'), true);
	});

	[
		{ key: 'city', value: 'OSLO(NORVEGE)', responseKey: 'address.city' },
		{ key: 'companyName', value: 'SOLVABILITE ENTREPRISE', responseKey: 'representativeCompany.name' },
		{ key: 'id', value: 'FR-X-48972424500035', responseKey: 'representativeCompany.connectId' },
		{ key: 'lastName', value: 'SYVERSEN' },
		{ key: 'dateOfBirth', value: '1965-12-28' },
		{ key: 'status', value: 'current' },
		{ key: 'regNo', value: '48972424500035' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=FR&pageSize=200&firstName=cato&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('FR Exact Director Search Tests', () => {
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
		{ key: 'lastName', value: 'Syversen' },
		{ key: 'companyName', value: 'SOLVABILITE ENTREPRISE' },
		{ key: 'regNo', value: '48972424500035' },
		{ key: 'id', value: 'FR-X-48972424500035' },
	];

	const expectedResponse = {
		responseCompany: ['SOLVABILITE ENTREPRISE'],
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1965-12-28' }, { key: 'firstName', value: 'Cato' }],
		[{ key: 'dateOfBirth', value: '1965-12' }, { key: 'lastName', value: 'Syversen' }],
		[{ key: 'dateOfBirth', value: '1965-12-28' }, { key: 'companyName', value: 'SOLVABILITE ENTREPRISE' }],
		[{ key: 'dateOfBirth', value: '1965-12-28' }, { key: 'regNo', value: '48972424500035' }],
		[{ key: 'dateOfBirth', value: '1965-12-28' }, { key: 'id', value: 'FR-X-48972424500035' }],
		[{ key: 'city', value: 'OSLO(NORVEGE)' }, { key: 'firstName', value: 'Cato' }],
		[{ key: 'city', value: 'OSLO(NORVEGE)' }, { key: 'lastName', value: 'Syversen' }],
		[{ key: 'city', value: 'OSLO(NORVEGE)' }, { key: 'companyName', value: 'SOLVABILITE ENTREPRISE' }],
		[{ key: 'city', value: 'OSLO(NORVEGE)' }, { key: 'regNo', value: '48972424500035' }],
		[{ key: 'city', value: 'OSLO(NORVEGE)' }, { key: 'id', value: 'FR-X-48972424500035' }],
		[{ key: 'status', value: 'current' }, { key: 'firstName', value: 'Cato' }],
		[{ key: 'status', value: 'current' }, { key: 'lastName', value: 'Syversen' }],
		[{ key: 'status', value: 'current' }, { key: 'companyName', value: 'SOLVABILITE ENTREPRISE' }],
		[{ key: 'status', value: 'current' }, { key: 'regNo', value: '48972424500035' }],
		[{ key: 'status', value: 'current' }, { key: 'id', value: 'FR-X-48972424500035' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=FR&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => ['FRD4897242454'].includes(director.localDirectorNumber)), true);
			assert.equal(response.data.directors.some((director) => expectedResponse.responseCompany.includes(director.representativeCompany.name)), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('FR Specific Director Search Tests', () => {
	it('Returns SOLVABILITE ENTREPRISE when: companyName=SOLVABILITE ENTREPRISE', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=FR&pageSize=200&companyName=SOLVABILITE ENTREPRISE`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'FRD4897242454'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'FRD4897242454' },
		{ key: 'localDirectorNumber', value: 'fRD4897242454' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns SOLVABILITE ENTREPRISE when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=FR&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});
});

describe('FR Director name synonym searches', () => {
	[
		{
			params: {
				companyName: 'NAVAL GROUP',
				firstName: 'Manu',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'FRD4411338087',
			},
		},
		{
			params: {
				companyName: 'BACCARAT',
				firstName: 'Benjamin',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'FRD76080006011',
			},
		},
	].forEach((test) => {
		it(`Returns firstName: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=FR&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});
