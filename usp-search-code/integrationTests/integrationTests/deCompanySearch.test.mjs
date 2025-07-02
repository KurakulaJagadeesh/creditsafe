import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

// describe('DE Generic Company Search Tests', () => {
// 	it('Returns DE companies', async () => {
// 		const response = await getWithRetry(`${baseUrl}/companies?countries=DE`);

// 		assert.equal(response.status, 200);
// 		assert.equal(response.data.companies.length > 0, true);
// 		assert.equal(response.data.companies.every((company) => company.country === 'DE'), true);
// 	});

// 	[
// 		{ key: 'city', value: 'Berlin', responseKey: 'address.city' },
// 		{ key: 'postCode', value: '10317', responseKey: 'address.postCode' },
// 		{ key: 'type', value: 'ltd' },
// 		{ key: 'status', value: 'active' },
// 		{ key: 'regNo', value: 'HRB 123430 B' },
// 	].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${urlParams}`);

// 			assert.equal(response.status, 200);

// 			const responseKey = 'responseKey' in test ? test.responseKey : test.key;
// 			assert.equal(response.data.companies.some((company) => get(company, responseKey).toLowerCase() === test.value.toLowerCase()), true);
// 		});
// 	});

// 	[
// 		{ key: 'simpleValue', value: 'Berlin', responseKey: 'address.simpleValue' },
// 		{ key: 'phoneNo', value: '4930756499000', responseKey: 'phoneNumbers[0]' },
// 		{ key: 'vatNo', value: 'DE268748479', responseKey: 'vatNo[0]' },
// 	].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns results that CONTAIN ${test.value} when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${urlParams}`);

// 			assert.equal(response.status, 200);

// 			const responseKey = 'responseKey' in test ? test.responseKey : test.key;
// 			assert.equal(response.data.companies.some((company) => get(company, responseKey).toLowerCase().includes(test.value.toLowerCase())), true);
// 		});
// 	});
// });

// describe('DE Exact Company Search Tests', () => {
// 	// Create a list of combinations based on the params in the array
// 	// e.g. input [1,2,3] => [[1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
// 	const createCombinations = (params) => {
// 		const combinations = [[]];

// 		params.forEach((param) => {
// 			const newCombinations = [];

// 			combinations.forEach((combination) => {
// 				if (param.values) {
// 					param.values.forEach((value) => {
// 						newCombinations.push([...combination, { key: param.key, value, ...(param.responseKey !== undefined && { responseKey: param.responseKey }) }]);
// 					});
// 				} else {
// 					newCombinations.push([...combination, { key: param.key, value: param.value, ...(param.responseKey !== undefined && { responseKey: param.responseKey }) }]);
// 				}
// 			});

// 			combinations.push(...newCombinations);
// 		});

// 		return combinations.slice(1);
// 	};

// 	const params = [
// 		{ key: 'city', value: 'Berlin', responseKey: 'address.city' },
// 		{ key: 'name', value: 'Creditsafe Deutschland GmbH' },
// 		{ key: 'postCode', value: '10317', responseKey: 'address.postCode' },
// 		{ key: 'type', value: 'Ltd' },
// 		{ key: 'simpleValue', value: 'Schreiberhauer Straße 30, Berlin', responseKey: 'address.simpleValue' },
// 		{ key: 'phoneNo', value: '+4930756499000', responseKey: 'phoneNumbers[0]' },
// 	];

// 	const combinations = [
// 		...createCombinations(params),
// 		// Add these separately because criterias.json makes them not play nice with other params
// 		[{ key: 'regNo', value: 'HRB 123430 B' }],
// 		[{ key: 'regNo', value: 'HRB 181891' }, { key: 'city', value: 'Hamburg', responseKey: 'address.city' }],
// 		[{ key: 'vatNo', value: 'DE268748479', responseKey: 'vatNo[0]' }],
// 	];

// 	combinations.forEach((test) => {
// 		const queryParams = `?countries=DE&exact=true${test.map((param) => `&${param.key}=${param.value}`).join('')}`;
// 		it(`Returns exact matches when: ${queryParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies${queryParams}`);

// 			assert.equal(response.status, 200);

// 			test.forEach((param) => {
// 				const responseKey = 'responseKey' in param ? param.responseKey : param.key;
// 				assert.equal(response.data.companies.every((company) => get(company, responseKey) === param.value), true);
// 			});
// 		});
// 	});
// });

// describe('DE Specific Company Search Tests', () => {
// 	it('Returns Creditsafe when: name=Creditsafe', async () => {
// 		const response = await getWithRetry(`${baseUrl}/companies?countries=DE&name=Creditsafe`);

// 		assert.equal(response.status, 200);
// 		assert.equal(response.data.companies.some((company) => company.safeNo === 'DE02033209'), true);
// 	});

// 	[{ key: 'id', value: 'DE-0-DE02033209' }, { key: 'safeNo', value: 'DE02033209' }].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns Creditsafe when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${urlParams}`);

// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => company[test.key] === test.value), true);
// 		});
// 	});

// 	[
// 		{
// 			params: {
// 				name: 'Siemens AG',
// 				street: 'Werner-von-Siemens-Straße 1',
// 				city: 'München',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01461234',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Bayer AG',
// 				street: 'Kaiser-Wilhelm-Allee 1',
// 				city: 'Leverkusen',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01244776',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Adidas AG',
// 				street: 'Adi-Dassler-Straße 1',
// 				city: 'Herzogenaurach',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01629088',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'SAP SE',
// 				street: 'Dietmar-Hopp-Allee 16',
// 				city: 'Walldorf',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01422320',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Merck KGaA',
// 				street: 'Frankfurter Str. 250',
// 				city: 'Darmstadt',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01284817',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Beiersdorf AG',
// 				street: 'Unnastraße 48',
// 				city: 'Hamburg',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01045897',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Volkswagen AG',
// 				street: 'Berliner Ring 2',
// 				city: 'Wolfsburg',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01871326',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Robert Bosch GmbH',
// 				street: 'Robert-Bosch-Platz 1',
// 				city: 'Gerlingen',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE01985584',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'E.ON SE',
// 				street: 'Brüsseler Platz 1',
// 				city: 'Essen',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'DE00885415',
// 			},
// 		},
// 	].forEach((test) => {
// 		it(`Returns safeNo: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
// 			const urlParams = new URLSearchParams(test.params);
// 			const queryStringParams = urlParams.toString();
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${queryStringParams}`);

// 			const { key, value } = test.expected;
// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => get(company, key) === value), true);
// 		});
// 	});
// });

// // Exercise the DE 65% match score logic from the textFieldQueryBuilderService
// // This logic splits the input by whitespace and generates AND queries for each word
// // Example: "Siemens AG" => "Siemens" AND "AG"
// describe('DE 65% Match Score Tests', () => {
// 	[{
// 		params: {
// 			street: '40 Rommel',
// 		},
// 		expected: [
// 			{
// 				key: 'safeNo',
// 				value: 'DE04557635',
// 			},
// 			{
// 				key: 'safeNo',
// 				value: 'DE30157484',
// 			},
// 		],
// 	},
// 	{
// 		params: {
// 			address: 'Dissen Bahnhofstraße',
// 		},
// 		expected: [
// 			{
// 				key: 'safeNo',
// 				value: 'DE01396154',
// 			},
// 			{
// 				key: 'safeNo',
// 				value: 'DE01477019',
// 			},
// 		],
// 	},
// 	].forEach((test) => {
// 		it(`Returns safeNos: ${test.expected.map((x) => x.value).join(',')} when: ${JSON.stringify(test.params)}`, async () => {
// 			const urlParams = new URLSearchParams(test.params);
// 			const queryStringParams = urlParams.toString();
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${queryStringParams}`);

// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => test.expected.map((expectedResult) => {
// 				const { key, value } = expectedResult;
// 				return get(company, key) === value;
// 			})), true);
// 		});
// 	});
// });

// // Exercise the DE 65% match score logic from the textFieldQueryBuilderService
// // This logic splits the input by whitespace and generates AND queries for each word
// // Example: "Siemens AG" => "Siemens" AND "AG"
// describe('DE 65% Match Score Tests', () => {
// 	[{
// 		params: {
// 			street: '40 Rommel',
// 		},
// 		expected: [
// 			{
// 				key: 'safeNo',
// 				value: 'DE04557635',
// 			},
// 			{
// 				key: 'safeNo',
// 				value: 'DE30157484',
// 			},
// 		],
// 	},
// 	{
// 		params: {
// 			address: 'Dissen Bahnhofstraße',
// 		},
// 		expected: [
// 			{
// 				key: 'safeNo',
// 				value: 'DE01396154',
// 			},
// 			{
// 				key: 'safeNo',
// 				value: 'DE01477019',
// 			},
// 		],
// 	},
// 	].forEach((test) => {
// 		it(`Returns safeNos: ${test.expected.map((x) => x.value).join(',')} when: ${JSON.stringify(test.params)}`, async () => {
// 			const urlParams = new URLSearchParams(test.params);
// 			const queryStringParams = urlParams.toString();
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=DE&${queryStringParams}`);

// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => test.expected.forEach((expectedResult) => {
// 				const { key, value } = expectedResult;
// 				return get(company, key) === value;
// 			})), true);
// 		});
// 	});
// });

describe('DE Regression Tests', async () => {
	describe('Autocompletes', () => {
		const alphabetsTestCases = ['qwer', 'bank', 'credit', 'safe', 'company', 'gmbh'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns DE company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=DE&name=${testCase}`;
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
			it(`returns DE company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=DE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphaNumericsTestCases = ['12 a', '23w', '28 l', '86 v'];
		AlphaNumericsTestCases.forEach(async (testCase) => {
			it(`returns DE company name startwith alphanumerics:${testCase}`, async () => {
				const queryString = `?countryCode=DE&name=${testCase}`;
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
			it(`returns DE company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=DE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const AlphabetspecialcharacterTestCases = ['team!'];
		AlphabetspecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns DE company name startwith alphabetspecialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=DE&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
	});

	describe('DE company search', () => {
		it('Returns DE companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=DE`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'DE'), true);
		});
	});

	describe('DE regNo', () => {
		const regNoTestCases = ['HRB 77528', 'HRB 192866 B', 'HRB 123430 B', 'HRB 25915', 'HRB 21407'];
		regNoTestCases.forEach(async (testCase) => {
			it(`DE company with regNo:${testCase}`, async () => {
				const queryString = `?countries=DE&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					city: 'Herford',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20593351',
				},
			},
			{
				params: {
					regNo: 'HRB 123430 B',
					city: 'Berlin',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},
			},
			{
				params: {
					regNo: 'HRB 25915',
					city: 'Dresden',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02354207',
				},
			},
			{
				params: {
					regNo: 'HRB 21407',
					city: 'Hünxe',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02328684',
				},
			},
			{
				params: {
					regNo: 'HRB 192866 B',
					city: 'Berlin',
				},
				expected: {
					Key: 'safeNo',
					value: 'DE25280300',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it(`returns DE Company with regNo: ${testCase.params.regNo} and city: ${testCase.params.city}`, async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const regNopostCodetestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					postCode: '32051',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20593351',
				},
			},
			{
				params: {
					regNo: 'HRB 123430 B',
					postCode: '12059',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},
			},
			{
				params: {
					regNo: 'HRB 25915',
					postCode: '01307',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02354207',
				},
			},
			{
				params: {
					regNo: 'HRB 21407',
					postCode: '46569',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02328684',
				},
			},
			{
				params: {
					regNo: 'HRB 192866 B',
					postCode: '10407',
				},
				expected: {
					Key: 'safeNo',
					value: 'DE25280300',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it(`returns DE Company with regNo: ${testCase.params.regNo} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const regNostreettestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					street: 'Denkwerk Herford, Leopoldstraße 2 - 8',
				},

			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('DE Company with regNo and street', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosimpleValuetestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					simpleValue: 'Denkwerk Herford, Leopoldstraße 2 - 8, Herford',
				},

			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('DE Company with regNo and simpleValue', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotypetestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20593351',
				},

			},
			{
				params: {
					regNo: 'HRB 77528',
					type: 'nonLtd',
				},

			},
		];
		regNotypetestCase.forEach(async (testCase) => {
			it(`DE Company with regNo and type : ${testCase.params.type}`, async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				if (response.data.companies.length > 0) {
					assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				} else {
					assert.equal(response.data.totalSize === 0, true);
					console.log(response.data.messages[0].text);
				}
			});
		});
		const regNostatustestCase =	[
			{
				params: {
					regNo: 'HRB 77528',
					status: 'Active',
				},
			},
			{
				params: {
					regNo: 'HRB 123430 B',
					status: 'NonActive',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('DE Company search with regNo and status', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNovatNotestCase = [
			{
				params: {
					regNo: 'HRB 77528',
					vatNo: 'DE306598865',
				},
			},
		];
		regNovatNotestCase.forEach(async (testCase) => {
			it('DE company search with regNo and vatNo', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoidtestCase = [
			{
				params: {
					regNo: 'HRB 77528',
					id: 'DE-0-DE20593351',
				},
			},
		];
		regNoidtestCase.forEach(async (testCase) => {
			it('DE company search with regNo and id', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&id=${testCase.params.id}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: 'HRB 77528',
					phoneNo: '+493514014043',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('DE company search with regNo and phoneNo', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: 'HRB 77528',
					name: 'Creditsafe',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('DE company search with regNo and name', async () => {
				const queryString = `?countries=DE&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('DE phoneNo', () => {
		const phoneNotestCase =	['+4915758658361', '+4930756499000', '+493514569260', '+4928589180880', '+4930577004999'];
		phoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=DE&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNostatustestCase = [
			{
				params: {
					phoneNo: '+4915758658361',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20593351',
				},
			},
			{
				params: {
					phoneNo: '+4915758658361',
					status: 'nonactive',
				},
			},
			{
				params: {
					phoneNo: '+49371235878',
					status: 'nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE09320862',
				},
			},
		];
		phoneNostatustestCase.forEach(async (testCase) => {
			it(`DE company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DE&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				if (response.data.companies.length > 0) {
					assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				} else {
					assert.equal(response.data.totalSize === 0, true);
					console.log(response.data.messages[0].text);
				}
			});
		});

		const phoneNotypetestCase = [
			{
				params: {
					phoneNo: '+4915758658361',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20593351',
				},
			},
			{
				params: {
					phoneNo: '+4915758658361',
					type: 'nonltd',
				},
			},
			{
				params: {
					phoneNo: '+4981533480',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE07748325',
				},
			},
			{
				params: {
					phoneNo: '+4981533480',
					type: 'ltd',
				},
			},
		];
		phoneNotypetestCase.forEach(async (testCase) => {
			it(`DE company search with phoneNo: ${testCase.params.phoneNo} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=DE&phoneNo=${testCase.params.phoneNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				if (response.data.companies.length > 0) {
					assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				} else {
					assert.equal(response.data.totalSize === 0, true);
					console.log(response.data.messages[0].text);
				}
			});
		});
	});

	describe('DE companyname', () => {
		const nametestcase = [
			{
				params: {
					name: 'peter',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					name: 'Creditsafe',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},
			},
			{
				params: {
					name: 'Google Germany GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					name: 'Cognizant Solutions GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		nametestcase.forEach(async (testCase) => {
			it(`DE company search with name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DE&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namephoneNotestCase = [
			{
				params: {
					name: 'team',
					phoneNo: '+4950322032',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02080574',
				},
			},
			{
				params: {
					name: 'peter',
					phoneNo: '+493814405895',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					name: 'Creditsafe',
					phoneNo: '+4930756499000',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},
			},
			{
				params: {
					name: 'Google Germany GmbH',
					phoneNo: '+4940808179000',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					name: 'Cognizant Solutions GmbH',
					phoneNo: '+4940523880',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		namephoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=DE&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCase = [
			{
				params: {
					name: 'peter',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12282031',
				},
			},
			{
				params: {
					name: 'creditsafe',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01444137',
				},
			},
		];
		namestatustestCase.forEach(async (testCase) => {
			it(`DE company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DE&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametypetestCase = [
			{
				params: {
					name: 'peter',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12282031',
				},
			},
			{
				params: {
					name: 'creditsafe',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},
			},
		];
		nametypetestCase.forEach(async (testCase) => {
			it(`DE company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=DE&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('DE simpleValue', () => {
		const simpleValuetestCase = ['Am Rohrgarten 102, 14163, Berlin', 'Schreiberhauer Straße 30, 10317, Berlin', 'ABC-Str. 19, 20354, Hamburg', 'Große Elbstr. 39, 22767, Hamburg'];
		simpleValuetestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase}`, async () => {
				const queryString = `?countries=DE&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuenametestCase = [
			{
				params: {
					simpleValue: 'Parkstr. 11, Rostock',
					name: 'Peter',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},

			},
			{
				params: {
					simpleValue: 'Sonnenallee 221 F, Berlin',
					name: 'Creditsafe Deutschland GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02033209',
				},

			},
			{
				params: {
					simpleValue: 'ABC-Straße 19, Hamburg',
					name: 'Google Germany GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},

			},
			{
				params: {
					simpleValue: 'Große Elbstr. 39, Hamburg',
					name: 'Cognizant Solutions GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},

			},
		];
		simpleValuenametestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DE&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCase = [
			{
				params: {
					simpleValue: 'Parkstr. 11, Rostock',
					status: 'active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					simpleValue: 'Große Elbstr. 39, Hamburg',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		simpleValuestatustestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DE&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuetypetestCase = [
			{
				params: {
					simpleValue: 'Parkstr. 11, Rostock',
					type: 'Nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					simpleValue: 'Große Elbstr. 39, Hamburg',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		simpleValuetypetestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestreettestCase = [
			{
				params: {
					simpleValue: 'Parkstr. 11, Rostock',
					street: 'Parkstr. 11',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					simpleValue: 'ABC-Straße 19, Hamburg',
					street: 'ABC-Straße 19',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					simpleValue: 'Große Elbstr. 39, Hamburg',
					street: 'Große Elbstr. 39',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		simpleValuestreettestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=DE&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuephoneNotestCase = [
			{
				params: {
					simpleValue: 'Parkstr. 11, Rostock',
					phoneNo: '+493814405895',
				},
				expected: {
					key: 'safeNo',
					value: 'DE12579026',
				},
			},
			{
				params: {
					simpleValue: 'ABC-Straße 19, Hamburg',
					phoneNo: '+4940808179000',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					simpleValue: 'Große Elbstr. 39, Hamburg',
					phoneNo: '+4940523880',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		simpleValuephoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=DE&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('DE street', () => {
		const streettestCase = ['Parkstr. 11', 'Schreiberhauer Straße 30', 'ABC-Straße 19', 'Große Elbstr. 39'];
		streettestCase.forEach(async (testCase) => {
			it(`DE company search with street: ${testCase}`, async () => {
				const querystring = `?countries=DE&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streetnametestCase = [
			{
				params: {
					street: 'Parkstr. 11',
					name: 'Christian Schuh',
				},
				expected: {
					key: 'safeNo',
					value: 'DE15820363',
				},
			},
			{
				params: {
					street: 'ABC-Straße 19',
					name: 'Google Germany GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					street: 'Große Elbstr. 39',
					name: 'Cognizant Solutions GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		streetnametestCase.forEach(async (testCase) => {
			it(`DE company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=DE&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetphoneNotestCase = [
			{
				params: {
					street: 'Parkstr. 11',
					phoneNo: '+49521333395',
				},
				expected: {
					key: 'safeNo',
					value: 'DE17097834',
				},
			},
			{
				params: {
					street: 'ABC-Straße 19',
					phoneNo: '"+4940808179000',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01009138',
				},
			},
			{
				params: {
					street: 'Große Elbstr. 39',
					phoneNo: '+4940523880',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		streetphoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=DE&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCase = [
			{
				params: {
					street: 'Parkstr. 11',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE17097834',
				},
			},
			{
				params: {
					street: 'Große Elbstr. 39',
					status: 'Nonactive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		streetstatustestCase.forEach(async (testCase) => {
			it(`DE company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=DE&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streettypetestCase = [
			{
				params: {
					street: 'Parkstr. 11',
					type: 'nonltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE17097834',
				},
			},
			{
				params: {
					street: 'Rosselstr. 27',
					type: 'ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE04117178',
				},
			},
		];
		streettypetestCase.forEach(async (testCase) => {
			it(`DE company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&street=${testCase.params.street}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('DE city', () => {
		const citytestCase = ['Bad Schwalbach', 'Berlin', 'Ingolstadt', 'Darmstadt', 'Hamburg'];
		citytestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase}`, async () => {
				const querystring = `?countries=DE&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					phoneNo: '+4961247010',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01535796',
				},
			},
			{
				params: {
					city: 'Berlin',
					phoneNo: '+493084530',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					city: 'Ingolstadt',
					phoneNo: '+498416340',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					city: 'Darmstadt',
					phoneNo: '+49615162850',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
			{
				params: {
					city: 'Hamburg',
					phoneNo: '+4940771750',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01160852',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					street: 'Hamsterweg 35',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02250690',
				},
			},
			{
				params: {
					city: 'Berlin',
					street: 'Beeskowdamm 3-11',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					city: 'Ingolstadt',
					street: 'Wankelstraße 5',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					city: 'Darmstadt',
					street: 'Alsfelder Str. 17',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
			{
				params: {
					city: 'Hamburg',
					street: 'Harburger Schloßstr. 1',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01034491',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					simpleValue: 'Hamsterweg 35, Bad Schwalbach',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02250690',
				},
			},
			{
				params: {
					city: 'Berlin',
					simpleValue: 'Beeskowdamm 3-11, Berlin',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					city: 'Ingolstadt',
					simpleValue: 'Wankelstraße 5, Ingolstadt',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					city: 'Darmstadt',
					simpleValue: 'Alsfelder Str. 17, Darmstadt',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
			{
				params: {
					city: 'Hamburg',
					simpleValue: 'Harburger Schloßstr. 1, Hamburg',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01034491',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					postCode: '65307',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01535796',
				},
			},
			{
				params: {
					city: 'Berlin',
					postCode: '14167',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01250313',
				},
			},
			{
				params: {
					city: 'Ingolstadt',
					postCode: '85046',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					city: 'Darmstadt',
					postCode: '64289',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
			{
				params: {
					city: 'Hamburg',
					postCode: '21079',
				},
				expected: {
					key: 'safeNo',
					value: 'DE30627015',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					name: 'Lindenallee Service GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE25315633',
				},
			},
			{
				params: {
					city: 'Berlin',
					name: 'ADC Telecommunikations GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					city: 'Ingolstadt',
					name: 'MMS Property GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					city: 'Darmstadt',
					name: 'Serono GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
			{
				params: {
					city: 'Hamburg',
					name: 'Cognizant Solutions GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01831579',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citytypetestCase = [
			{
				params: {
					city: 'Bad Schwalbach',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE05109145',
				},
			},
			{
				params: {
					city: 'Berlin',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02375949',
				},
			},
		];
		citytypetestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'Emden',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01989265',
				},
			},
			{
				params: {
					city: 'Berlin',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02375949',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`DE company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=DE&pageSize=1000&city=${testCase.params.city}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('DE postCode', () => {
		const postCodetestCase = ['65307', '14167', '85046', '64289', '21079'];
		postCodetestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase}`, async () => {
				const querystring = `?countries=DE&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodestreettestCase = [
			{
				params: {
					postCode: '65307',
					street: 'Martha-von-Opel-Weg',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					street: 'Beeskowdamm 3-11',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					postCode: '85046',
					street: 'Wankelstraße 5',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					postCode: '64289',
					street: 'Alsfelder Str. 17',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
		];
		postCodestreettestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=DE&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodesimpleValuetestCase = [
			{
				params: {
					postCode: '65307',
					simpleValue: 'Martha-von-Opel-Weg, 65307, Bad Schwalbach',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					simpleValue: 'Beeskowdamm 3-11, 14167, Berlin',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					postCode: '85046',
					simpleValue: 'Wankelstraße 5, 85046, Ingolstadt',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					postCode: '64289',
					simpleValue: 'Alsfelder Str. 17, 64289, Darmstadt',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
		];
		postCodesimpleValuetestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=DE&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodephoneNotestCase = [
			{
				params: {
					postCode: '65307',
					phoneNo: '+4961245070',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					phoneNo: '+493084530',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					postCode: '85046',
					phoneNo: '+498416340',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					postCode: '64289',
					phoneNo: '+49615162850',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
		];
		postCodephoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=DE&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCase = [
			{
				params: {
					postCode: '65307',
					name: 'Riebisch GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					name: 'ADC Telecommunikations GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE00965305',
				},
			},
			{
				params: {
					postCode: '85046',
					name: 'MMS Property GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02526155',
				},
			},
			{
				params: {
					postCode: '64289',
					name: 'Serono GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01694912',
				},
			},
		];
		postCodenametestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=DE&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodetypetestCase = [
			{
				params: {
					postCode: '65307',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE19581095',
				},
			},
		];
		postCodetypetestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const queryString = `?countries=DE&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const postCodestatustestCase = [
			{
				params: {
					postCode: '65307',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01746031',
				},
			},
			{
				params: {
					postCode: '14167',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02078123',
				},
			},
		];
		postCodestatustestCase.forEach(async (testCase) => {
			it(`DE company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=DE&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
	});

	describe('DE safeNo', () => {
		const safeNotestCase = ['DE01746031', 'DE00965305', 'DE02526155', 'DE01694912'];
		safeNotestCase.forEach(async (testCase) => {
			it(`DE company search with safeNo: ${testCase}`, async () => {
				const queryString = `?countries=DE&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					status: 'nonactive',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and status', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNotypetestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					type: 'Ltd',
				},
			},
		];
		safeNotypetestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and type', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					regNo: 'HRB 77528',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and regNo', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					vatNo: 'DE811728023',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and vatNo', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNonametestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					name: 'Creditsafe',
				},
			},
		];
		safeNonametestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and name', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					city: 'Bannewitz',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and city', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNopostCodetestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					postCode: '01127',
				},
			},
		];
		safeNopostCodetestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and postCode', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					simpleValue: 'Martha-von-Opel-Weg, 65307, Bad Schwalbach',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNostreettestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					street: 'Welschhufer',
				},
			},
		];
		safeNostreettestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and street', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNoidtestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					id: 'DE-1-DE09269246',
				},
			},
		];
		safeNoidtestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and id', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&id=${testCase.params.id}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'DE01746031',
					phoneNo: '+493514014043',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('DE company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=DE&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
	});

	describe('DE vatNo', () => {
		const vatNotestCase = ['DE811728023', 'DE223268168', 'DE301453549', 'DE208175430'];
		vatNotestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase}`, async () => {
				const queryString = `?countries=DE&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: 'DE811728023',
					phoneNo: '+49342986060',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01344932',
				},
			},
			{
				params: {
					vatNo: 'DE223268168',
					phoneNo: '+494123959651',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					phoneNo: '+4934149291700',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					phoneNo: '+493634621351',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: 'DE223268168',
					name: 'SIMONSELL Aktiengesellschaft',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					name: 'VarioBus GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					name: 'Getränke-Jochmann GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: 'DE811728023',
					postCode: '04425',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01344932',
				},
			},
			{
				params: {
					vatNo: 'DE223268168',
					postCode: '21521',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					postCode: '04107',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					postCode: '19370',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: 'DE811728023',
					street: 'Sommerfelder Straße 110',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01344932',
				},
			},
			{
				params: {
					vatNo: 'DE223268168',
					street: 'Obere Lindenstraße 8 D',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					street: 'Wilhelm-Leuschner-Platz 12',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					street: 'Am Brunnen 1',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&sreet=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: 'DE811728023',
					simpleValue: 'Sommerfelder Straße 110, 04425, Taucha',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01344932',
				},
			},
			{
				params: {
					vatNo: 'DE223268168',
					simpleValue: 'Obere Lindenstraße 8 D, 21521, Wohltorf',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					simpleValue: 'Wilhelm-Leuschner-Platz 12, 04107, Leipzig',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					simpleValue: 'Am Brunnen 1, 19370, Parchim',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: 'DE811728023',
					city: 'Taucha',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01344932',
				},
			},
			{
				params: {
					vatNo: 'DE223268168',
					city: 'Wohltorf',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
			{
				params: {
					vatNo: 'DE301453549',
					city: 'Leipzig',
				},
				expected: {
					key: 'safeNo',
					value: 'DE20208333',
				},
			},
			{
				params: {
					vatNo: 'DE208175430',
					city: 'Parchim',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01199429',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: 'DE812702775',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01727825',
				},
			},
			{
				params: {
					vatNo: 'DE814038653',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01762317',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const vatNotypetestCase = [
			{
				params: {
					vatNo: 'DE230428274',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE31573297',
				},
			},
			{
				params: {
					vatNo: 'DE814038653',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01762317',
				},
			},
		];
		vatNotypetestCase.forEach(async (testCase) => {
			it(`DE company search with vatNo: ${testCase.params.vatNo} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
	});

	describe('DE status', () => {
		const statustestCase = ['Active', 'NonActive'];
		statustestCase.forEach(async (testCase) => {
			it(`DE company search with status: ${testCase}`, async () => {
				const querystring = `?countries=DE&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const statustypetestCase = [
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
		statustypetestCase.forEach(async (testCase) => {
			it(`DE company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
	});

	describe('DE type', () => {
		const typetestCase = ['Ltd', 'NonLtd'];
		typetestCase.forEach(async (testCase) => {
			it(`DE company search with type: ${testCase}`, async () => {
				const querystring = `?countries=DE&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
	});

	describe('DE id', () => {
		const idtestCase = ['DE-0-DE01344932', 'DE-0-DE01044677', 'DE-0-DE20208333', 'DE-0-DE01199429'];
		idtestCase.forEach(async (testCase) => {
			it(`DE company search with id: ${testCase}`, async () => {
				const querystring = `?countries=DE&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idtypetestCase = [
			{
				params: {
					id: 'DE-1-DE20908426',
					type: 'NonLtd',
				},
			},
			{
				params: {
					id: 'DE-0-DE01344932',
					type: 'Ltd',
				},
			},
		];
		idtypetestCase.forEach(async (testCase) => {
			it(`DE company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=DE&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase.params.id}`), true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					phoneNo: '+4935187443910',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('DE company search with id and phoneNo', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					name: '+Dieter Kalmus',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('DE company search with id and name', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					simpleValue: 'Königsbrücker Landstr. 312, Dresden',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('DE company search with id and simpleValue', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					street: 'Königsbrücker Landstr. 312',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('DE company search with id and street', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					city: 'Dresden',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('DE company search with id and city', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					postCode: '01108',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('DE company search with id and postCode', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					vatNo: 'DE224829493',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('DE company search with id and vatNo', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'DE-1-DE19545959',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('DE company search with id and status', async () => {
				const queryString = `?countries=DE&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);
				assert.equal(response.status, 400);
			});
		});
	});

	describe('DE partial matches', () => {
		const partialvatNotestCase = [
			{
				params: {
					vatNo: '223268168',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01044677',
				},
			},
		];
		partialvatNotestCase.forEach(async (testCase) => {
			it(`DE company search with partialvatNo: ${testCase.params.vatNo}`, async () => {
				const querystring = `?countries=DE&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialphoneNotestCase = [
			{
				params: {
					phoneNo: '4922429187808',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02339892',
				},
			},
			{
				params: {
					phoneNo: '004922429187808',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02339892',
				},
			},
			{
				params: {
					phoneNo: '22429187808',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02339892',
				},
			},
			{
				params: {
					phoneNo: '022429187808',
				},
				expected: {
					key: 'safeNo',
					value: 'DE02339892',
				},
			},
		];
		partialphoneNotestCase.forEach(async (testCase) => {
			it(`DE company search with partialphoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=DE&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialregNotestCase = [
			{
				params: {
					regNo: 'HRB 92661 B',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01798226',
				},
			},
			{
				params: {
					regNo: '92661 B',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01798226',
				},
			},
			{
				params: {
					regNo: 'HRB 92661',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01798226',
				},
			},
			{
				params: {
					regNo: '92661',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01798226',
				},
			},
			{
				params: {
					regNo: '92661',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01798226',
				},
			},
		];
		partialregNotestCase.forEach(async (testCase) => {
			it(`DE company search with partialregNo: ${testCase.params.regNo}`, async () => {
				const querystring = `?countries=DE&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialpostCodetestCase = [
			{
				params: {
					postCode: '35510',
				},
				expected: {
					postCode: '35510',
				},
			},
			{
				params: {
					postCode: '69412',
				},
				expected: {
					postCode: '69412',
				},
			},
			{
				params: {
					postCode: '69',
				},
				expected: {
					postCode: '69469',
				},
			},
		];
		partialpostCodetestCase.forEach(async (testCase) => {
			it(`DE company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=DE&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.expected.postCode}`), true);
			});
		});
	});

	describe('DE synonynms', () => {
		const streetconjoinedtestCase = [
			{
				params: {
					street: 'Weinstrasse 4',
				},
				expected: {
					key: 'safeNo',
					value: 'DE01457822',
				},
			},
			{
				params: {
					street: 'Feldafingerstr 5',
				},
				expected: {
					key: 'safeNo',
					value: 'DE30634548',
				},
			},
		];
		streetconjoinedtestCase.forEach(async (testCase) => {
			it(`DE company search with streetconjoined: ${testCase.params.street}`, async () => {
				const querystring = `?countries=DE&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});
});

// describe('DE Include Previous Names Tests', () => {
// 	// Choose companies where the previous name is very different to the current name
// 	[
// 		{
// 			expectedSafeNo: 'DE31346397',
// 			name: 'Serpentis Vermögensverwaltung GmbH',
// 		},
// 	].forEach((test) => {
// 		const includePreviousQueryParams = `?countries=DE&includePreviousName=true&name=${test.name}`;
// 		const excludePreviousQueryParams = `?countries=DE&includePreviousName=false&name=${test.name}`;

// 		it(`Returns NO results that CONTAIN previous name when includePreviousName is false for params: ${excludePreviousQueryParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}${excludePreviousQueryParams}`);
// 			assert.equal(response.status, 200);

// 			// Ensure every company returned does not match the expected safe no
// 			assert.equal(response.data.companies.every((company) => company.safeNo !== test.expectedSafeNo), true);
// 		});

// 		it(`Returns results that CONTAIN previous name when includePreviousName is true for params: ${includePreviousQueryParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}${includePreviousQueryParams}`);

// 			assert.equal(response.status, 200);

// 			// Ensure the expected company is returned
// 			assert.equal(response.data.companies.some((company) => company.safeNo === test.expectedSafeNo), true);
// 		});
// 	});
// });
