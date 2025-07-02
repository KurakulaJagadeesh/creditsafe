import assert from 'assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('US Generic Director Search Tests', () => {
	it('Returns US directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.peopleId.slice(0, 2) === 'US'), true);
	});

	[
		{ key: 'city', value: 'NEW YORK', responseKey: 'address.city' },
		{ key: 'postCode', value: '10018', responseKey: 'address.postCode' },
		{ key: 'street', value: '620 8TH AVE', responseKey: 'address.line1' },
		{ key: 'companyName', value: 'CREDITSAFE USA INC.', responseKey: 'representativeCompany.name' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200&firstName=cato&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('US Exact Director Search Tests', () => {
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
		{ key: 'firstName', value: 'CATO' },
		{ key: 'lastName', value: 'SYVERSEN' },
		{ key: 'companyName', value: 'CREDITSAFE USA INC.' },
		{ key: 'safeNo', value: 'US60521352' },
		{ key: 'city', value: 'NEW YORK' },
		{ key: 'street', value: '620 8TH AVE' },
	];

	const expectedResponse = {
		responseCompany: ['CREDITSAFE USA INC.'],
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'province', value: 'NY' }, { key: 'firstName', value: 'CATO' }],
		[{ key: 'province', value: 'NY' }, { key: 'lastName', value: 'SYVERSEN' }],
		[{ key: 'province', value: 'NY' }, { key: 'companyName', value: 'CREDITSAFE USA INC.' }],
		[{ key: 'province', value: 'NY' }, { key: 'safeNo', value: 'US60521352' }],
		[{ key: 'province', value: 'NY' }, { key: 'city', value: 'NEW YORK' }],
		[{ key: 'province', value: 'NY' }, { key: 'street', value: '620 8TH AVE' }],
		[{ key: 'postCode', value: '10018' }, { key: 'firstName', value: 'CATO' }],
		[{ key: 'postCode', value: '10018' }, { key: 'lastName', value: 'SYVERSEN' }],
		[{ key: 'postCode', value: '10018' }, { key: 'companyName', value: 'CREDITSAFE USA INC.' }],
		[{ key: 'postCode', value: '10018' }, { key: 'safeNo', value: 'US60521352' }],
		[{ key: 'postCode', value: '10018' }, { key: 'city', value: 'NEW YORK' }],
		[{ key: 'postCode', value: '10018' }, { key: 'street', value: '620 8TH AVE' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=US&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => ['US-S1358185265'].includes(director.peopleId)), true);
			assert.equal(response.data.directors.some((director) => expectedResponse.responseCompany.includes(director.representativeCompany.name)), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('US Specific Director Search Tests', () => {
	it('Returns CREDITSAFE USA INC. when: companyName=CREDITSAFE USA INC.', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200&companyName=CREDITSAFE USA INC.`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.peopleId === 'US-S1358185265'), true);
	});

	[
		{ key: 'peopleId', value: 'US-S1358185265' },
		{ key: 'peopleId', value: 'us-S1358185265' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns CREDITSAFE USA INC. when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});
});

describe('US Director companyname searches', () => {
	describe('US Director companyname and street synonym searches', () => {
		[
			{
				params: {
					companyName: 'CREDITSAFE USA incorporated.',
					street: '620 8TH AVE',
				},
				expected: {
					key: 'peopleId',
					value: 'US-S1358185265',
				},
			},
			{
				params: {
					companyName: 'environ CONTROL',
					street: '324 NATIONAL RD',
				},
				expected: {
					key: 'peopleId',
					value: 'US-S211390809',
				},
			},
			{
				params: {
					street: '620 8TH aven',
					companyName: 'CREDITSAFE USA INC.',
				},
				expected: {
					key: 'peopleId',
					value: 'US-S1358185265',
				},
			},
			{
				params: {
					street: '35 ROPE frry RD',
					companyName: 'OVERSTOCK.COM, INC.',
				},
				expected: {
					key: 'peopleId',
					value: 'US-S275504533',
				},
			},
		].forEach((test) => {
			it(`Returns peopleId: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
				const urlParams = new URLSearchParams(test.params);
				const queryStringParams = urlParams.toString();
				const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200&${queryStringParams}`);

				const { key, value } = test.expected;
				assert.equal(response.status, 200);
				assert.equal(response.data.directors.some((director) => director[key] === value), true);
			});
		});
	});

	describe('US Director companyname and street synonym searches', () => {
		[
			{
				params: {
					companyName: 'CREDITSAFE USA INC.',
					postCode: '10',
				},
				expected: {
					key: 'peopleId',
					value: 'US-S1358185265',
				},
			},
			{
				params: {
					companyName: 'GLOBAL PAYMENTS INC.',
					postCode: '30',
				},
				expected: {
					key: 'peopleId',
					value: 'US-P470076488',
				},
			},
		].forEach((test) => {
			it(`Returns peopleId: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
				const urlParams = new URLSearchParams(test.params);
				const queryStringParams = urlParams.toString();
				const response = await getWithRetry(`${baseUrl}/people?countries=US&pageSize=200&${queryStringParams}`);

				const { key, value } = test.expected;
				assert.equal(response.status, 200);
				assert.equal(response.data.directors.some((director) => director[key] === value), true);
			});
		});
	});
});
