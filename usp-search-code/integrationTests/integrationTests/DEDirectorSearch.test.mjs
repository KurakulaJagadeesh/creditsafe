import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('DE Generic Director Search Tests', () => {
	it('Returns DE directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'DE'), true);
	});

	[
		{ key: 'city', value: 'Cardiff', responseKey: 'address.city' },
		{ key: 'postCode', value: 'CF10 4DQ', responseKey: 'address.postCode' },
		{ key: 'type', value: 'Ltd' },
		{ key: 'status', value: 'current' },
		{ key: 'regNo', value: 'HRB 123430 B' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200&firstName=cato&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('DE Exact Director Search Tests', () => {
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
		{ key: 'companyName', value: 'Creditsafe Deutschland GmbH' },
		{ key: 'regNo', value: 'HRB 123430 B' },
		{ key: 'id', value: 'DE-0-DE02033209' },
	];

	const expectedResponse = {
		responseCompany: ['Creditsafe Deutschland GmbH', 'Den-Ol Bau GmbH'],
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1965-12-28' }, { key: 'firstName', value: 'Cato' }],
		[{ key: 'dateOfBirth', value: '1965-12' }, { key: 'lastName', value: 'Syversen' }],
		[
			{ key: 'city', value: 'Berlin', responseKey: 'address.city' },
			{ key: 'postCode', value: '10439', responseKey: 'address.postCode' },
			{ key: 'street', value: 'Dunkerstraße 30', responseKey: 'address.line1' },
			{ key: 'id', value: 'DE-0-DE30906359', responseKey: 'representativeCompany.connectId' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=DE&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => ['DE02033209_10002004187', 'DE30906359_10004386241'].includes(director.localDirectorNumber)), true);
			assert.equal(response.data.directors.some((director) => expectedResponse.responseCompany.includes(director.representativeCompany.name)), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('DE Specific Director Search Tests', () => {
	it('Returns Creditsafe when: companyName=Creditsafe', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200&companyName=Creditsafe`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'DE02033209_10002004187'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'DE02033209_10002004187' },
		{ key: 'peopleId', value: 'DE-10002004187' },
		{ key: 'localDirectorNumber', value: 'de02033209_10002004187' },
		{ key: 'peopleId', value: 'de-10002004187' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns Creditsafe when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});
});

describe('DE Director partial postCode and regNo searches', () => {
	[
		{
			params: {
				firstName: 'cato',
				regNo: 'HRB 123430',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE02033209_10002004187',
			},
		},
		{
			params: {
				firstName: 'cato',
				regNo: '123430 B',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE02033209_10002004187',
			},
		},
		{
			params: {
				firstName: 'cato',
				regNo: '123430',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE02033209_10002004187',
			},
		},
		{
			params: {
				firstName: 'Deniss',
				postCode: '10',
				street: 'Dunkerstraße 30',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE30906359_10004386241',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});

describe('DE Director companyName and address synonym searches', () => {
	[
		{
			params: {
				companyName: 'vw Osnabruck GmbH',
				firstName: 'Christoph',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE00963874_10000583672',
			},
		},
		{
			params: {
				companyName: 'Lamia pizzeria GmbH',
				firstName: 'Munirul Islam',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE20529303_10000644325',
			},
		},
		{
			params: {
				city: 'hb',
				companyName: 'FobiZe Bad Rothenfelde eGbR',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'DE32083572_10005627736',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=DE&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});
