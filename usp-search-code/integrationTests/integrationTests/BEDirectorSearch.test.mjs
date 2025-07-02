import assert from 'assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('BE Generic Director Search Tests', () => {
	it('Returns BE directors', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.length > 0, true);
		assert.equal(response.data.directors.every((director) => director.localDirectorNumber.slice(0, 2) === 'BE'), true);
	});

	[
		{ key: 'city', value: 'UKKEL', responseKey: 'address.city' },
		{ key: 'postCode', value: '1180', responseKey: 'address.postCode' },
		{ key: 'houseNo', value: '7', responseKey: 'address.line1' },
		{ key: 'street', value: 'DEN DOORNLAAN', responseKey: 'address.line2' },
		{ key: 'companyName', value: 'ENTREMETS ET MERVEILLES SA', responseKey: 'representativeCompany.name' },
		{ key: 'id', value: 'BE-X-891630334', responseKey: 'representativeCompany.connectId' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&firstName=JOHN&${urlParams}`);

			assert.equal(response.status, 200);

			if ('responseKey' in test) {
				assert.equal(response.data.directors.some((director) => test.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === test.value.toLowerCase()), true);
			}
		});
	});
});

describe('BE Exact Director Search Tests', () => {
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
		{ key: 'firstName', value: 'JOHN' },
		{ key: 'lastName', value: 'DESMOORT' },
		{ key: 'companyName', value: 'ENTREMETS ET MERVEILLES SA' },
		{ key: 'regNo', value: '891630334' },
		{ key: 'id', value: 'BE-X-891630334' },
		{ key: 'street', value: 'DEN DOORNLAAN' },
		{ key: 'city', value: 'UKKEL' },
		{ key: 'postCode', value: '1180' },
	];

	const expectedResponse = {
		responseCompany: ['ENTREMETS ET MERVEILLES SA'],
	};

	const combinations = [
		...createCombinations(params),
		// Add these separately because criterias.json makes them not play nice with other params
		[{ key: 'dateOfBirth', value: '1966-01-12' }, { key: 'firstName', value: 'JOHN' }],
		[{ key: 'dateOfBirth', value: '1966-01-12' }, { key: 'lastName', value: 'DESMOORT' }],
		[{ key: 'dateOfBirth', value: '1966-01-12' }, { key: 'companyName', value: 'ENTREMETS ET MERVEILLES SA' }],
		[{ key: 'dateOfBirth', value: '1966-01-12' }, { key: 'regNo', value: '891630334' }],
		[{ key: 'dateOfBirth', value: '1966-01-12' }, { key: 'id', value: 'BE-X-891630334' }],
		[{ key: 'dateOfBirth', value: '1966-01' }, { key: 'street', value: 'DEN DOORNLAAN' }],
		[{ key: 'dateOfBirth', value: '1966-01' }, { key: 'city', value: 'UKKEL' }],
		[{ key: 'dateOfBirth', value: '1966-01' }, { key: 'postCode', value: '1180' }],
		[{ key: 'houseNo', value: '7' }, { key: 'firstName', value: 'JOHN' }],
		[{ key: 'houseNo', value: '7' }, { key: 'lastName', value: 'DESMOORT' }],
		[{ key: 'houseNo', value: '7' }, { key: 'companyName', value: 'ENTREMETS ET MERVEILLES SA' }],
		[{ key: 'houseNo', value: '7' }, { key: 'regNo', value: '891630334' }],
		[{ key: 'houseNo', value: '7' }, { key: 'id', value: 'BE-X-891630334' }],
		[{ key: 'houseNo', value: '7' }, { key: 'street', value: 'DEN DOORNLAAN' }],
		[{ key: 'houseNo', value: '7' }, { key: 'city', value: 'UKKEL' }],
		[{ key: 'houseNo', value: '7' }, { key: 'postCode', value: '1180' }],
		[{ key: 'status', value: 'current' }, { key: 'firstName', value: 'JOHN' }],
		[{ key: 'status', value: 'current' }, { key: 'lastName', value: 'DESMOORT' }],
		[{ key: 'status', value: 'current' }, { key: 'companyName', value: 'ENTREMETS ET MERVEILLES SA' }],
		[{ key: 'status', value: 'current' }, { key: 'regNo', value: '891630334' }],
		[{ key: 'status', value: 'current' }, { key: 'id', value: 'BE-X-891630334' }],
		[{ key: 'status', value: 'current' }, { key: 'street', value: 'DEN DOORNLAAN' }],
		[{ key: 'status', value: 'current' }, { key: 'city', value: 'UKKEL' }],
		[{ key: 'status', value: 'current' }, { key: 'postCode', value: '1180' }],
	];

	combinations.forEach((test) => {
		const queryParams = `?countries=BE&pageSize=200${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
		it(`Returns exact matches when: ${queryParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people${queryParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => ['BE0891630334_7'].includes(director.localDirectorNumber)), true);
			assert.equal(response.data.directors.some((director) => expectedResponse.responseCompany.includes(director.representativeCompany.name)), true);
			test.forEach((param) => {
				if ('responseKey' in param) {
					assert.equal(response.data.directors.some((director) => param.responseKey.split('.').reduce((a, c) => a && a[c], director).toLowerCase() === param.value.toLowerCase()), true);
				}
			});
		});
	});
});

describe('BE Specific Director Search Tests', () => {
	it('Returns ENTREMETS ET MERVEILLES SA when: companyName=ENTREMETS ET MERVEILLES SA', async () => {
		const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&companyName=ENTREMETS ET MERVEILLES SA`);

		assert.equal(response.status, 200);
		assert.equal(response.data.directors.some((director) => director.localDirectorNumber === 'BE0891630334_7'), true);
	});

	[
		{ key: 'localDirectorNumber', value: 'BE0891630334_7' },
		{ key: 'localDirectorNumber', value: 'be0891630334_7' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ENTREMETS ET MERVEILLES SA when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});

	[
		{ key: 'peopleId', value: 'BE-BE0891630334_7' },
		{ key: 'peopleId', value: 'be-be0891630334_7' },
	].forEach((test) => {
		const urlParams = `${test.key}=${test.value}`;
		it(`Returns ENTREMETS ET MERVEILLES SA when: ${urlParams}`, async () => {
			const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&${urlParams}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[test.key].toLowerCase() === test.value.toLowerCase()), true);
		});
	});
});

describe('BE Director synonym searches', () => {
	[
		{
			params: {
				companyName: 'creditsafe belgium nv',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0828450670_2',
			},
		},
		{
			params: {
				companyName: 'WUNDERMAN SA',
				street: 'all DE LA RECHERCHE',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0860369709_12',
			},
		},
		{
			params: {
				companyName: 'RDU SRL',
				street: 'fg SAINT-PAUL',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0760335686_1',
			},
		},
		{
			params: {
				companyName: 'HIGH SECURITY SRL',
				city: 'waver',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0891255893_5',
			},
		},
		{
			params: {
				companyName: 'DECOSPAN NV',
				city: 'menin',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0889710328_11',
			},
		},
		{
			params: {
				companyName: 'THUISVERPLEGING ERNA LADANG',
				street: 'MOUTSBORNstr',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0894289520_1',
			},
		},
		{
			params: {
				companyName: 'DIBO BV',
				street: 'HOGE MAUWeg',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0877684902_2',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});

describe('BE Director partial searches', () => {
	[
		{
			params: {
				regNo: '019754466',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE1019754466_1',
			},
		},
		{
			params: {
				regNo: '0891630334',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0891630334_7',
			},
		},
		{
			params: {
				postCode: '1',
				companyName: 'GRAND HOPITAL DE CHARLEROI ASBL',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0894384837_23',
			},
		},
		{
			params: {
				postCode: '1180',
				companyName: 'BRUSSELS AIRPORT COMPANY SA',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0890082292_21',
			},
		},
		{
			params: {
				postCode: '11 80',
				companyName: 'BRUSSELS AIRPORT COMPANY SA',
			},
			expected: {
				key: 'localDirectorNumber',
				value: 'BE0890082292_21',
			},
		},
	].forEach((test) => {
		it(`Returns localDirectorNumber: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
			const urlParams = new URLSearchParams(test.params);
			const queryStringParams = urlParams.toString();
			const response = await getWithRetry(`${baseUrl}/people?countries=BE&pageSize=200&${queryStringParams}`);

			const { key, value } = test.expected;
			assert.equal(response.status, 200);
			assert.equal(response.data.directors.some((director) => director[key] === value), true);
		});
	});
});
