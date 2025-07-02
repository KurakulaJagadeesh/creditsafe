import assert from 'assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('NO Generic Director Search Tests', () => {
	it('Returns NO directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=NO&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'NO'), true);
	});

	[
		{ key: 'city', value: 'OSLO', responseKey: 'address.city' },
		{ key: 'postCode', value: '0873', responseKey: 'address.postCode' },
		{ key: 'street', value: 'Bergrådveien 33', responseKey: 'address.line2' },
		{ key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING', responseKey: 'representativeCompany.name' },
		{ key: 'id', value: 'NO-0-NO00966755', responseKey: 'representativeCompany.connectId' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=NO&pageSize=200&firstName=Andrew&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('NO Exact Director Search Tests', () => {
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
		{ key: 'firstName', value: 'Andrew' },
		{ key: 'lastName', value: 'Nyendwa' },
		{ key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING' },
		{ key: 'companyNumber', value: '989349376' },
		{ key: 'regNo', value: '989349376' },
		{ key: 'id', value: 'NO-0-NO00966755' },
	];

	const expectedResponse = {
		responseCompany: ['NORGE ZAMBIA VENNSKAPSFORENING'],
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1973-10-09' }, { key: 'firstName', value: 'Andrew' }],
		[{ key: 'dateOfBirth', value: '1973-10-09' }, { key: 'lastName', value: 'Nyendwa' }],
		[{ key: 'dateOfBirth', value: '1973-10-09' }, { key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING' }],
		[{ key: 'dateOfBirth', value: '1973-10' }, { key: 'regNo', value: '989349376' }],
		[{ key: 'dateOfBirth', value: '1973-10' }, { key: 'id', value: 'NO-0-NO00966755' }],
		[{ key: 'dateOfBirth', value: '1973-10' }, { key: 'companyNumber', value: '989349376' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'firstName', value: 'Andrew' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'lastName', value: 'Nyendwa' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'regNo', value: '989349376' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'id', value: 'NO-0-NO00966755' }],
		[{ key: 'city', value: 'OSLO' }, { key: 'companyNumber', value: '989349376' }],
		[{ key: 'postCode', value: '0873' }, { key: 'firstName', value: 'Andrew' }],
		[{ key: 'postCode', value: '0873' }, { key: 'lastName', value: 'Nyendwa' }],
		[{ key: 'postCode', value: '0873' }, { key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING' }],
		[{ key: 'postCode', value: '0873' }, { key: 'regNo', value: '989349376' }],
		[{ key: 'postCode', value: '0873' }, { key: 'id', value: 'NO-0-NO00966755' }],
		[{ key: 'postCode', value: '0873' }, { key: 'companyNumber', value: '989349376' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'firstName', value: 'Andrew' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'lastName', value: 'Nyendwa' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'companyName', value: 'NORGE ZAMBIA VENNSKAPSFORENING' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'regNo', value: '989349376' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'id', value: 'NO-0-NO00966755' }],
		[{ key: 'type', value: 'Ltd' }, { key: 'companyNumber', value: '989349376' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=NO&pageSize=200&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => ['NOD1709532_989349376'].includes(director.localDirectorNumber)), true);
			assert.equal(response.data.directors.some((director) => expectedResponse.responseCompany.includes(director.representativeCompany.name)), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('NO Specific Director Search Tests', () => {
	it('Returns NORGE ZAMBIA VENNSKAPSFORENING when: companyName=NORGE ZAMBIA VENNSKAPSFORENING', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=NO&pageSize=200&companyName=NORGE ZAMBIA VENNSKAPSFORENING`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'NOD1709532_989349376'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'NOD1709532_989349376' },
		{ key: 'localDirectorNumber', value: 'noD1709532_989349376' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns SOLVABILITE ENTREPRISE when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=NO&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});
});

describe('NO Director companyname synonym searches', () => {
	[
		{
			params: {
				companyName: 'INDUSTRIENS och EKSPORTENS HUS AS',
				id: 'NO-0-NO01298447',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'NOD339807_995095831',
			},
		},
		{
			params: {
				companyName: 'BORREGAARD a/s',
				id: 'NO-0-NO00120584',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'NOD1771251_895623032',
			},
		},
		{
			params: {
				companyName: 'norske VENTILASJON AS',
				id: 'NO-0-NO00212169',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'NOD242244_962341721',
			},
		},
		{
			params: {
				companyName: 'WINGTOP ltd',
				id: 'NO-0-NO01905696',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'NOD1678516_913632109',
			},
		},
		{
			params: {
				firstName: 'Anita Blom',
				street: 'Nedre Storgate 15',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'NOD13276_985304688',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=NO&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});
