import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

// describe('AT Generic Company Search Tests', () => {
// 	it('Returns AT companies', async () => {
// 		console.log(`${baseUrl}/companies?countries=AT`);
// 		const response = await getWithRetry(`${baseUrl}/companies?countries=AT`);

// 		assert.equal(response.status, 200);
// 		assert.equal(response.data.companies.length > 0, true);
// 		assert.equal(response.data.companies.every((company) => company.country === 'AT'), true);
// 	});

// 	[
// 		{ key: 'city', value: 'Wien', responseKey: 'address.city' },
// 		{ key: 'postCode', value: '1160', responseKey: 'address.postCode' },
// 		{ key: 'type', value: 'ltd' },
// 		{ key: 'status', value: 'active' },
// 		{ key: 'regNo', value: 'FN 397258d' },
// 	].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns ONLY ${test.value} when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&${urlParams}`);

// 			assert.equal(response.status, 200);

// 			const responseKey = 'responseKey' in test ? test.responseKey : test.key;
// 			assert.equal(response.data.companies.some((company) => get(company, responseKey).toLowerCase() === test.value.toLowerCase()), true);
// 		});
// 	});

// 	[
// 		{ key: 'simpleValue', value: 'Wien', responseKey: 'address.simpleValue' },
// 		{ key: 'phoneNo', value: '069916017002', responseKey: 'address.telephone' },
// 		{ key: 'vatNo', value: 'ATU68100477', responseKey: 'vatNo[0]' },
// 	].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns results that CONTAIN ${test.value} when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&${urlParams}`);

// 			assert.equal(response.status, 200);

// 			const responseKey = 'responseKey' in test ? test.responseKey : test.key;
// 			assert.equal(response.data.companies.some((company) => get(company, responseKey).toLowerCase().includes(test.value.toLowerCase())), true);
// 		});
// 	});
// });

// describe('AT Exact Company Search Tests', () => {
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
// 		{ key: 'city', value: 'Klagenfurt am Wörthersee', responseKey: 'address.city' },
// 		{ key: 'name', value: 'Jamnig Bauelemente GmbH' },
// 		{ key: 'companyType', value: 'company' },
// 		{ key: 'postCode', value: '9020', responseKey: 'address.postCode' },
// 		{ key: 'type', value: 'Ltd' },
// 		{ key: 'simpleValue', value: 'Völkermarkter Straße 233', responseKey: 'address.simpleValue' },
// 		{ key: 'phoneNo', value: '0664 260 91 51', responseKey: 'address.telephone' },
// 	];

// 	const combinations = [
// 		...createCombinations(params),
// 		// Add these separately because criterias.json makes them not play nice with other params
// 		[{ key: 'regNo', value: 'FN 397039g' }],
// 		[{ key: 'regNo', value: 'FN 397460a' }, { key: 'city', value: 'Wien', responseKey: 'address.city' }],
// 		[{ key: 'vatNo', value: 'ATU67950933' }],
// 		[{ key: 'vatNo', value: 'ATU67939323', responseKey: 'vatNo[0]' }, { key: 'city', value: 'Esternberg', responseKey: 'address.city' }],
// 	];

// 	combinations.forEach((test) => {
// 		const queryParamsArray = ['?countries=AT', 'exact=true'];
// 		test.forEach((param) => {
// 			queryParamsArray.push(`${param.key}=${param.value}`);
// 		});
// 		const queryParams = queryParamsArray.join('&');

// 		it(`Returns exact matches when: ${queryParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}${queryParams}`);

// 			assert.equal(response.status, 200);

// 			test.forEach((param) => {
// 				const responseKey = 'responseKey' in param ? param.responseKey : param.key;
// 				assert.equal(response.data.companies.every((company) => get(company, responseKey) === param.value), true);
// 			});
// 		});
// 	});
// });

// describe('AT Specific Company Search Tests', () => {
// 	it('Returns Andritz when: name=Andritz', async () => {
// 		const response = await getWithRetry(`${baseUrl}/companies?countries=AT&name=Andritz`);

// 		assert.equal(response.status, 200);
// 		assert.equal(response.data.companies.some((company) => company.safeNo === 'AT04667274'), true);
// 	});

// 	[{ key: 'id', value: 'AT-0-AT04667274' }, { key: 'safeNo', value: 'AT04667274' }].forEach((test) => {
// 		const urlParams = `${test.key}=${test.value}`;
// 		it(`Returns Andritz when: ${urlParams}`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&${urlParams}`);

// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => company[test.key] === test.value), true);
// 		});
// 	});

// 	[
// 		{
// 			params: {
// 				name: 'Andritz AG',
// 				street: 'Stattegger Straße 18',
// 				city: 'Graz',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'AT04667274',
// 			},
// 		},
// 		{
// 			params: {
// 				name: 'Red Bull GmbH',
// 				street: 'Am Brunnen 1',
// 				city: 'Fuschl am See',
// 			},
// 			expected: {
// 				key: 'safeNo',
// 				value: 'AT04676577',
// 			},
// 		},
// 	].forEach((test) => {
// 		it(`Returns safeNo: ${test.expected.value} when: ${JSON.stringify(test.params)}`, async () => {
// 			const urlParams = new URLSearchParams(test.params);
// 			const queryStringParams = urlParams.toString();
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&${queryStringParams}`);

// 			const { key, value } = test.expected;
// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => get(company, key) === value), true);
// 		});
// 	});

// 	const testRegNo = (regNo) => {
// 		it(`should return results for regNo with value "${regNo}" (actual value: "FN 56247t")`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&regNo=${regNo}`);
// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => company.regNo === regNo), true);
// 		});
// 	};

// 	testRegNo('56247t');
// 	testRegNo('56247');
// 	testRegNo('FN56247');

// 	const testVatNo = (vatNo) => {
// 		it(`should return results for vatNo with value "${vatNo}" (actual value: "ATU${vatNo}")`, async () => {
// 			const response = await getWithRetry(`${baseUrl}/companies?countries=AT&regNo=${vatNo}`);
// 			assert.equal(response.status, 200);
// 			assert.equal(response.data.companies.some((company) => company.vatNo === vatNo), true);
// 		});
// 	};

// 	testVatNo('33864707');
// 	testVatNo('48204802');
// });

describe('AT Regression Tests', async () => {
	describe('AT company Search', () => {
		it('returns AT Companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=AT`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'AT'), true);
		});
	});

	describe('AT id', () => {
		const idTestCases = ['AT-X-AT06270569', 'AT-X-AT06591575', 'AT-X-AT06591577', 'AT-X-AT04618987', 'AT-X-AT04618967'];
		idTestCases.forEach(async (testCase) => {
			it(`AT company search with id:${testCase}`, async () => {
				const queryString = `?countries=AT&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idsafeNotestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					safeNo: 'AT06270569',
				},
			},
		];
		idsafeNotestCase.forEach(async (testCase) => {
			it('AT company search with id and safeNo', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					vatNo: 'ATU77978208',
				},
			},
		];
		idvatNotestCase.forEach(async (testCase) => {
			it('AT company search with id and vatNo', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idregNotestCase = [
			{
				params: {
					id: 'AT-X-AT04618357',
					regNo: 'FN 397591V',
				},
			},
		];
		idregNotestCase.forEach(async (testCase) => {
			it('AT company search with id and regNo', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					city: 'ST.VEIT/GLAN',
				},
			},
		];
		idcitytestCase.forEach(async (testCase) => {
			it('AT company search with id and city', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					postCode: '9300',
				},
			},
		];
		idpostCodetestCase.forEach(async (testCase) => {
			it('AT company search with id and postCode', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsimpleValuetestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					simpleValue: 'PERSONALSTRAßE 19/6, 9300, ST.VEIT/GLAN',
				},
			},
		];
		idsimpleValuetestCase.forEach(async (testCase) => {
			it('AT company search with id and simpleValue', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					street: 'PERSONALSTRAßE 19/6',
				},
			},
		];
		idstreettestCase.forEach(async (testCase) => {
			it('AT company search with id and street', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					name: 'BENJAMIN BUCHER',
				},
			},
		];
		idnametestCase.forEach(async (testCase) => {
			it('AT company search with id and name', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					status: 'Active',
				},
			},
		];
		idstatustestCase.forEach(async (testCase) => {
			it('AT company search with id and status', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCase.forEach(async (testCase) => {
			it('AT company search with id and officeType', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idTypetestCases = [
			{
				params: {
					id: 'AT-X-AT06270569',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06270569',
				},
			},
			{
				params: {
					id: 'AT-X-AT06591575',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06591575',
				},
			},
			{
				params: {
					id: 'AT-X-AT04618987',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618987',
				},
			},
			{
				params: {
					id: 'AT-X-AT04618967',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618967',
				},
			},
		];
		idTypetestCases.forEach(async (testCase) => {
			it(`AT company search with id: ${testCase.params.id} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&id=${testCase.params.id}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.id === `${testCase.params.id}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const idphoneNotestCase = [
			{
				params: {
					id: 'AT-X-AT06270569',
					phoneNo: '+436644356559',
				},
			},
		];
		idphoneNotestCase.forEach(async (testCase) => {
			it('AT company search with id and phoneNo', async () => {
				const queryString = `?countries=AT&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AT safeNo', () => {
		const safeNoTestCases = ['AT06270569', 'AT06591575', 'AT06591577', 'AT04618987', 'AT04618967'];
		safeNoTestCases.forEach(async (testCase) => {
			it(`AT company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=AT&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNovatNotestCase = [
			{
				params: {
					safeNo: 'AT05172919',
					vatNo: 'ATU62956466',
				},
			},
		];
		safeNovatNotestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and vatNo', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoregNotestCase = [
			{
				params: {
					safeNo: 'AT04910033',
					regNo: 'FN 147551m',
				},
			},
		];
		safeNoregNotestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and regNo', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNocitytestCase = [
			{
				params: {
					safeNo: 'AT04910033',
					city: 'Wien',
				},
			},
		];
		safeNocitytestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and city', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostcodetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					postCode: '9300',
				},
			},
		];
		safeNopostcodetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and postCode', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNosimpleValuetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					simpleValue: 'PERSONALSTRAßE 19/6, 9300, ST.VEIT/GLAN',
				},
			},
		];
		safeNosimpleValuetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and simpleValue', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreetValuetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					street: 'PERSONALSTRAßE 19/6',
				},
			},
		];
		safeNostreetValuetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and street', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonameValuetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					name: 'BENJAMIN BUCHER',
				},
			},
		];
		safeNonameValuetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and name', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					status: 'Active',
				},
			},
		];
		safeNostatustestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and status', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and officeType', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNotypetestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					type: 'NonLtd',
				},
			},
		];
		safeNotypetestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and type', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCase = [
			{
				params: {
					safeNo: 'AT06270569',
					phoneNo: 'NonLtd',
				},
			},
		];
		safeNophoneNotestCase.forEach(async (testCase) => {
			it('AT company search with safeNo and phoneNO', async () => {
				const queryString = `?countries=AT&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AT vatNo', () => {
		const vatNoTestCases = ['ATU77978208', 'ATU75286806', 'ATU68144028', 'ATU67951488', 'ATU68052322'];
		vatNoTestCases.forEach(async (testCase) => {
			it(`AT company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=AT&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNoregNotestCase = [
			{
				params: {
					vatNo: 'ATU75286806',
					regNo: 'FN 397549G',
				},
			},
		];
		vatNoregNotestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and regNo', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					city: 'ST.VEIT/GLAN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06270569',
				},
			},
			{
				params: {
					vatNo: 'ATU75286806',
					city: 'WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618364',
				},
			},
			{
				params: {
					vatNo: 'ATU68144028',
					city: 'GRAZ',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618372',
				},
			},
			{
				params: {
					vatNo: 'ATU67951488',
					city: 'KLAGENFURT',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618380',
				},
			},
			{
				params: {
					vatNo: 'ATU68052322',
					city: 'WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06606259',
				},
			},
		];
		vatNocitytestCase.forEach(async (testCase) => {
			it(`AT company search with vatNo: ${testCase.params.vatNo} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=AT&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
			});
		});
		const vatNopostCodetestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					postCode: '9300',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06270569',
				},
			},
			{
				params: {
					vatNo: 'ATU75286806',
					postCode: '1100',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618364',
				},
			},
			{
				params: {
					vatNo: 'ATU68144028',
					postCode: '8010',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618372',
				},
			},
			{
				params: {
					vatNo: 'ATU67951488',
					postCode: '9020',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618380',
				},
			},
			{
				params: {
					vatNo: 'ATU68052322',
					postCode: '1040',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06606259',
				},
			},
		];
		vatNopostCodetestCase.forEach(async (testCase) => {
			it(`AT company search with vatNo: ${testCase.params.vatNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=AT&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.vatNo[0] === `${testCase.params.vatNo}`), true);
			});
		});
		const vatNosimpleValuetestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					simpleValue: 'PERSONALSTRAßE 19/6, 9300, ST.VEIT/GLAN',
				},
			},
		];
		vatNosimpleValuetestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and simpleValue', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					street: 'PERSONALSTRAßE 19/6',
				},
			},
		];
		vatNostreettestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and street', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					name: 'BENJAMIN BUCHER',
				},
			},
		];
		vatNonametestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and name', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					status: 'Active',
				},
			},
		];
		vatNostatustestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and status', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					officeType: 'Active',
				},
			},
		];
		vatNoofficeTypetestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and officeType', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNotypetestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					type: 'NonLtd',
				},
			},
		];
		vatNotypetestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and type', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCase = [
			{
				params: {
					vatNo: 'ATU77978208',
					phoneNo: '+436644356559',
				},
			},
		];
		vatNophoneNotestCase.forEach(async (testCase) => {
			it('AT company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=AT&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AT regNo', () => {
		const regNoTestCases = ['FN 285714V', 'FN 178512V', 'FN 484851T', 'FN 442927P'];
		regNoTestCases.forEach(async (testCase) => {
			it(`AT company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=AT&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNocitytestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					city: 'WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618987',
				},
			},
			{
				params: {
					regNo: 'FN 397083X',
					city: 'WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618967',
				},
			},
			{
				params: {
					regNo: 'FN 397496D',
					city: 'GRAZ',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618372',
				},
			},
			{
				params: {
					regNo: 'FN 397407Y',
					city: 'KLAGENFURT',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618380',
				},
			},
			{
				params: {
					regNo: 'FN 370265H',
					city: 'ALTACH',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04697479',
				},
			},
		];
		regNocitytestCase.forEach(async (testCase) => {
			it(`AT company search with regNo: ${testCase.params.regNo} and city: ${testCase.params.city}`, async () => {
				const querystring = `?countries=AT&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const regNopostCodetestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					postCode: '1190',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618987',
				},
			},
			{
				params: {
					regNo: 'FN 397083X',
					postCode: '1010',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618967',
				},
			},
			{
				params: {
					regNo: 'FN 397496D',
					postCode: '8010',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618372',
				},
			},
			{
				params: {
					regNo: 'FN 397407Y',
					postCode: '9020',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618380',
				},
			},
			{
				params: {
					regNo: 'FN 370265H',
					postCode: '6844',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04697479',
				},
			},
		];
		regNopostCodetestCase.forEach(async (testCase) => {
			it(`AT company search with regNo: ${testCase.params.regNo} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=AT&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const regNosimpleValuetestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					simpleValue: 'BUDINSKYGASSE 4, 1190, WIEN',
				},
			},
		];
		regNosimpleValuetestCase.forEach(async (testCase) => {
			it('AT company search with regNo and simpleValue', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					street: 'BUDINSKYGASSE 4',
				},
			},
		];
		regNostreettestCase.forEach(async (testCase) => {
			it('AT company search with regNo and street', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					name: 'EMUS INVEST GMBH',
				},
			},
		];
		regNonametestCase.forEach(async (testCase) => {
			it('AT company search with regNo and name', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					status: 'Active',
				},
			},
		];
		regNostatustestCase.forEach(async (testCase) => {
			it('AT company search with regNo and status', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCase.forEach(async (testCase) => {
			it('AT company search with regNo and officeType', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNotypetestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					type: 'Ltd',
				},
			},
		];
		regNotypetestCase.forEach(async (testCase) => {
			it('AT company search with regNo and type', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCase = [
			{
				params: {
					regNo: 'FN 396766F',
					phoneNo: '01 996 21 06-100',
				},
			},
		];
		regNophoneNotestCase.forEach(async (testCase) => {
			it('AT company search with regNo and phoneNo', async () => {
				const queryString = `?countries=AT&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('AT city', () => {
		const cityTestCases = ['GRAFENSTEIN', 'LUXEMBOURG', 'LONDON', 'ALTACH', 'WIEN'];
		cityTestCases.forEach(async (testCase) => {
			it(`AT company search with city:${testCase}`, async () => {
				const queryString = `?countries=AT&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const citypostCodetestCase = [
			{
				params: {
					city: 'WIEN',
					postCode: '1010',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618967',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					postCode: '9131',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06611960',
				},
			},
			{
				params: {
					city: 'LUXEMBOURG',
					postCode: '1661',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05946317',
				},
			},
			{
				params: {
					city: 'LONDON',
					postCode: 'WC1R 4HE',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					city: 'ALTACH',
					postCode: '6844',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06635566',
				},
			},
		];
		citypostCodetestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
			});
		});
		const citysimpleValuetestCase = [
			{
				params: {
					city: 'WIEN',
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					simpleValue: 'GEWERBEPARK 1, 9131, GRAFENSTEIN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05136356',
				},
			},
			{
				params: {
					city: 'LUXEMBOURG',
					simpleValue: 'GRAND-RUE 25, 1661, LUXEMBOURG',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05946317',
				},
			},
			{
				params: {
					city: 'LONDON',
					simpleValue: 'THE SHARD 12, SE1 9SG, LONDON',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05242621',
				},
			},
			{
				params: {
					city: 'ALTACH',
					simpleValue: 'RHEINSTRAßE 9/2, 6844, ALTACH',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06302526',
				},
			},
		];
		citysimpleValuetestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
			});
		});
		const citystreettestCase = [
			{
				params: {
					city: 'WIEN',
					street: 'LAXENBURGER STRAßE 87/20',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05104454',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					street: 'GEWERBEPARK 1',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05136356',
				},
			},
			{
				params: {
					city: 'LUXEMBOURG',
					street: 'GRAND-RUE 25',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05946317',
				},
			},
			{
				params: {
					city: 'LONDON',
					street: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					city: 'ALTACH',
					street: 'UNTERHUB 33',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04689144',
				},
			},
		];
		citystreettestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
			});
		});
		const citynametestCase = [
			{
				params: {
					city: 'WIEN',
					name: 'WIENERBERGER AG',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04648617',
				},
			},
			{
				params: {
					city: 'LUXEMBOURG',
					name: 'ASSEKURISK AG',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05570536',
				},
			},
			{
				params: {
					city: 'LONDON',
					name: 'TRANSPAK LOGISTICS LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05098741',
				},
			},
			{
				params: {
					city: 'ALTACH',
					name: 'OPTIMAL FT GMBH',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06218462',
				},
			},
		];
		citynametestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				// assert.equal(response.data.companies.every((company) => company.name === `${testCase.name}`), true);
			});
		});
		const citystatustestCase = [
			{
				params: {
					city: 'WIEN',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618364',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04648961',
				},
			},
		];
		citystatustestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const cityofficeTypetestCase = [
			{
				params: {
					city: 'WIEN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04618364',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04648961',
				},
			},
		];
		cityofficeTypetestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const citytypetestCase = [
			{
				params: {
					city: 'WIEN',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06626964',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04634805',
				},
			},
		];
		citytypetestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const cityphoneNotestCase = [
			{
				params: {
					city: 'WIEN',
					phoneNo: '050 390-22000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					city: 'GRAFENSTEIN',
					phoneNo: '+43 (0) 676 60 57 011',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06611960',
				},
			},
		];
		cityphoneNotestCase.forEach(async (testCase) => {
			it(`AT company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.city === `${testCase.params.city}`), true);
				assert.equal(response.data.companies.every((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT postCode', () => {
		const postCodetestCases = ['1010', 'W2 6LA', 'SE10RA', 'WC1R 4HE', 'W1T 6AD', 'W11 4'];
		postCodetestCases.forEach(async (testCase) => {
			it(`AT company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=AT&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesimpleValuetestCases = [
			{
				params: {
					postCode: '1010',
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04832234',
				},
			},
			{
				params: {
					postCode: 'W2 6LA',
					simpleValue: 'PART 30, W2 6LA, LONDON',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					postCode: 'SE10RA',
					simpleValue: 'RUSHWORTH STREET 8, SE10RA, LONDON',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					postCode: 'WC1R 4HE',
					simpleValue: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR, WC1R 4HE, LONDON',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					simpleValue: 'FRESTON ROAD 91-97, W11 4, LONDON',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodesimpleValuetestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and simpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '1010',
					street: 'SCHOTTENRING 30',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04832234',
				},
			},
			{
				params: {
					postCode: 'W2 6LA',
					street: 'PART 30',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					postCode: 'SE10RA',
					street: 'RUSHWORTH STREET 8',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					postCode: 'WC1R 4HE',
					street: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					street: 'FRESTON ROAD 91-97',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '1010',
					name: 'DONAU VERSICHERUNG AG VIENNA INSURANCE GROUP',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04666738',
				},
			},
			{
				params: {
					postCode: 'W2 6LA',
					name: 'JCB INTERNATIONAL (EUROPE) LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					postCode: 'SE10RA',
					name: 'POLIMEKANOS LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					postCode: 'WC1R 4HE',
					name: 'KONICA MINOLTA MARKETING SERVICES LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					name: 'TOMORROWS PEOPLE (UK) LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '1010',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'AT10000029',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '1010',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT10000029',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const postCodetypetestCases = [
			{
				params: {
					postCode: '1010',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06591996',
				},
			},
			{
				params: {
					postCode: 'W11 4',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		postCodetypetestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '1010',
					phoneNo: '050 390-22000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					postCode: '4470',
					phoneNo: '07223 844 77-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04670434',
				},
			},
			{
				params: {
					postCode: '1090',
					phoneNo: '01 404 00-90000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04675835',
				},
			},
			{
				params: {
					postCode: '3385',
					phoneNo: '0699 1826 0510',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05256445',
				},
			},
			{
				params: {
					postCode: '8047',
					phoneNo: '+43 (0)664 28 26 327',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06547993',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.postCode === `${testCase.params.postCode}`), true);
				assert.equal(response.data.companies.every((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT simpleValue', () => {
		const simpleValuetestCases = [
			'SCHOTTENRING 30, 1010, WIEN',
			'PART 30, W2 6LA, LONDON', 'RUSHWORTH STREET 8, SE10RA, LONDON', 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR, WC1R 4HE, LONDON', 'FRESTON ROAD 91-97, W11 4, LONDON'];
		simpleValuetestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue:${testCase}`, async () => {
				const queryString = `?countries=AT&simpleValue=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase}`), true);
			});
		});
		const simpleValuestreettestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					street: 'SCHOTTENRING 30',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04832234',
				},
			},
			{
				params: {
					simpleValue: 'PART 30, W2 6LA, LONDON',
					street: 'PART 30',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					simpleValue: 'RUSHWORTH STREET 8, SE10RA, LONDON',
					street: 'RUSHWORTH STREET 8',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					simpleValue: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR, WC1R 4HE, LONDON',
					street: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					simpleValue: 'FRESTON ROAD 91-97, W11 4, LONDON',
					street: 'FRESTON ROAD 91-97',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		simpleValuestreettestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and street: ${testCase.params.street}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuenametestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					name: 'PLAZA HOTEL AM SCHOTTENRING BETRIEBSGESELLSCHAFT M.B.H.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04635127',
				},
			},
			{
				params: {
					simpleValue: 'PART 30, W2 6LA, LONDON',
					name: 'JCB INTERNATIONAL (EUROPE) LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					simpleValue: 'RUSHWORTH STREET 8, SE10RA, LONDON',
					name: 'POLIMEKANOS LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					simpleValue: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR, WC1R 4HE, LONDON',
					name: 'KONICA MINOLTA MARKETING SERVICES LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					simpleValue: 'FRESTON ROAD 91-97, W11 4, LONDON',
					name: 'TOMORROWS PEOPLE (UK) LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		simpleValuenametestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuestatustestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04747006',
				},
			},
			{
				params: {
					simpleValue: 'PART 30, W2 6LA, LONDON',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
		];
		simpleValuestatustestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const simpleValueofficeTypetestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04747006',
				},
			},
			{
				params: {
					simpleValue: 'PART 30, W2 6LA, LONDON',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
		];
		simpleValueofficeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const simpleValuetypetestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05102377',
				},
			},
			{
				params: {
					simpleValue: 'PART 30, W2 6LA, LONDON',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
		];
		simpleValuetypetestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.simpleValue === `${testCase.params.simpleValue}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const simpleValuephoneNotestCases = [
			{
				params: {
					simpleValue: 'SCHOTTENRING 30, 1010, WIEN',
					phoneNo: '050 390-22000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					simpleValue: 'WIENER STRAßE 1/1, 4470, ENNS',
					phoneNo: '07223/84043',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05844715',
				},
			},
			{
				params: {
					simpleValue: 'FUCHSTHALLERGASSE 8/6, 1090, WIEN',
					phoneNo: '01 317 66 52-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04731549',
				},
			},
			{
				params: {
					simpleValue: 'WILHELMINENSTRAßE 91/19/2, 1160, WIEN',
					phoneNo: '01 486 24 24',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04947048',
				},
			},
			{
				params: {
					simpleValue: 'RAGNITZSTRAßE 115, 8047, GRAZ',
					phoneNo: '0316 32 14 04-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04771755',
				},
			},
		];
		simpleValuephoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValue: ${testCase.params.simpleValue} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AT street', () => {
		const streettestCases = ['SCHOTTENRING 30', 'PART 30', 'RUSHWORTH STREET 8', 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR', 'FRESTON ROAD 91-97'];
		streettestCases.forEach(async (testCase) => {
			it(`AT company search with street:${testCase}`, async () => {
				const queryString = `?countries=AT&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: 'SCHOTTENRING 30',
					name: 'PLAZA HOTEL AM SCHOTTENRING BETRIEBSGESELLSCHAFT M.B.H.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04635127',
				},
			},
			{
				params: {
					street: 'PART 30',
					name: 'JCB INTERNATIONAL (EUROPE) LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
			{
				params: {
					street: 'RUSHWORTH STREET 8',
					name: 'POLIMEKANOS LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06098853',
				},
			},
			{
				params: {
					street: 'BEDFORD ROW 26-28/4TH AND 5TH FLOOR',
					name: 'KONICA MINOLTA MARKETING SERVICES LIMITED',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05580705',
				},
			},
			{
				params: {
					street: 'FRESTON ROAD 91-97',
					name: 'TOMORROWS PEOPLE (UK) LTD.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05030203',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`AT company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: 'SCHOTTENRING 30',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04669698',
				},
			},
			{
				params: {
					street: 'PART 30',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`AT company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: 'SCHOTTENRING 30',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04832234',
				},
			},
			{
				params: {
					street: 'PART 30',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05269498',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				// assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				// assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const streettypetestCases = [
			{
				params: {
					street: 'SCHOTTENRING 30',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05102377',
				},
			},
			{
				params: {
					street: 'PART 30',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'ATU64880579',
				},
			},
		];
		streettypetestCases.forEach(async (testCase) => {
			it(`AT company search with street: ${testCase.params.street} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.address.line1 === `${testCase.params.street}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: 'SCHOTTENRING 30',
					phoneNo: '050 390-22000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					street: 'WIENER STRAßE 1/1',
					phoneNo: '02236 71 03 00',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04858115',
				},
			},
			{
				params: {
					street: 'FUCHSTHALLERGASSE 8/6',
					phoneNo: '01 317 66 52-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04731549',
				},
			},
			{
				params: {
					street: 'MAUTSTRAßE 9/2',
					phoneNo: '069910326294',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05735548',
				},
			},
			{
				params: {
					street: 'RAGNITZSTRAßE 115',
					phoneNo: '0316 32 14 04-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04771755',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AT name', () => {
		const nametestCases = ['WIENERBERGER AG', 'ASSEKURISK AG', 'TRANSPAK LOGISTICS LIMITED', 'OPTIMAL FT GMBH'];
		nametestCases.forEach(async (testCase) => {
			it(`AT company search with name:${testCase}`, async () => {
				const queryString = `?countries=AT&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'WWG BETEILIGUNGEN GMBH',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04856208',
				},
			},
			{
				params: {
					name: 'RAIFFEISENBANK HENNDORF AM WALLERSEE EGEN',
					status: 'NonActive',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04685375',
				},
			},
			{
				params: {
					name: 'HOLZ GMEINER GMBH',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05777473',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`AT company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const querystring = `?countries=AT&name=${testCase.params.name}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'WWG BETEILIGUNGEN GMBH',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04856208',
				},
			},
			{
				params: {
					name: 'RAIFFEISENBANK HENNDORF AM WALLERSEE EGEN',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04685375',
				},
			},
			{
				params: {
					name: 'HOLZ GMEINER GMBH',
					officeType: 'headOffice',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05777473',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&name=${testCase.params.name}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const nametypetestCases = [
			{
				params: {
					name: 'WWG BETEILIGUNGEN GMBH',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04856208',
				},
			},
			{
				params: {
					name: 'RAIFFEISENBANK WALLERSEE EGEN',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06074962',
				},
			},
			{
				params: {
					name: 'HOLZ GMEINER GMBH',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05777473',
				},
			},
		];
		nametypetestCases.forEach(async (testCase) => {
			it(`AT company search with name: ${testCase.params.name} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&name=${testCase.params.name}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'LVP HOLDING GMBH',
					phoneNo: '050 390-22000',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04811876',
				},
			},
			{
				params: {
					name: 'RENE FUNKE',
					phoneNo: '06602369512',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06584255',
				},
			},
			{
				params: {
					name: 'DENIS GAPPMAIER',
					phoneNo: '+43 (0) 664 241 78 00',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05685656',
				},
			},
			{
				params: {
					name: 'SANDRA POSCH',
					phoneNo: '069910326294',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05735548',
				},
			},
			{
				params: {
					name: 'KANZLER VERFAHRENSTECHNIK GESELLSCHAFT M.B.H.',
					phoneNo: '0316 32 14 04-0',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04771755',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase.params.name}`), true);
				assert.equal(response.data.companies.some((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT status', () => {
		const statustestCases = ['Active', 'NonActive'];
		statustestCases.forEach(async (testCase) => {
			it(`AT company search with status:${testCase}`, async () => {
				const queryString = `?countries=AT&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const statusofficeTypetestCases = [
			{
				params: {
					status: 'NonActive',
					officeType: 'headOffice',
				},
			},
			{
				params: {
					status: 'Active',
					officeType: 'headOffice',
				},
			},
		];
		statusofficeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with status: ${testCase.params.status} and officeType: ${testCase.params.officeType}`, async () => {
				const querystring = `?countries=AT&status=${testCase.params.status}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
			});
		});
		const statustypetestCases = [
			{
				params: {
					status: 'NonActive',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT10000008',
				},
			},
			{
				params: {
					status: 'Active',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06302551',
				},
			},
			{
				params: {
					status: 'Active',
					type: 'Ltd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06302596',
				},
			},
			{
				params: {
					status: 'NonActive',
					type: 'NonLtd',
				},
				expected: {
					key: 'safeNo',
					value: 'AT10000009',
				},
			},
		];
		statustypetestCases.forEach(async (testCase) => {
			it(`AT company search with status: ${testCase.params.status} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&status=${testCase.params.status}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const statusphoneNotestCases = [
			{
				params: {
					status: 'Active',
					phoneNo: '06602369512',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06566500',
				},
			},
		];
		statusphoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with status: ${testCase.params.status} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&status=${testCase.params.status}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				assert.equal(response.data.companies.every((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT officeType', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`AT company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=AT&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const officeTypetypetestCases = [
			{
				params: {
					officeType: 'headOffice',
					type: 'Ltd',
				},
			},
			{
				params: {
					officeType: 'headOffice',
					type: 'NonLtd',
				},
			},
		];
		officeTypetypetestCases.forEach(async (testCase) => {
			it(`AT company search with officeType: ${testCase.params.officeType} and type: ${testCase.params.type}`, async () => {
				const querystring = `?countries=AT&officeType=${testCase.params.officeType}&type=${testCase.params.type}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
			});
		});
		const officeTypephoneNotestCases = [
			{
				params: {
					officeType: 'headOffice',
					phoneNo: '06602369512',
				},
			},
		];
		officeTypephoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with officeType: ${testCase.params.officeType} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&officeType=${testCase.params.officeType}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				assert.equal(response.data.companies.every((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT type', () => {
		const typetestCases = ['Ltd', 'NonLtd'];
		typetestCases.forEach(async (testCase) => {
			it(`AT company search with type:${testCase}`, async () => {
				const queryString = `?countries=AT&type=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.type === `${testCase}`), true);
			});
		});
		const typephoneNotestCases = [
			{
				params: {
					type: 'NonLtd',
					phoneNo: '069910326294',
				},
			},
			{
				params: {
					type: 'Ltd',
					phoneNo: '050 390-22000',
				},
			},
		];
		typephoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with type: ${testCase.params.type} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&type=${testCase.params.type}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
				assert.equal(response.data.companies.every((company) => company.type === `${testCase.params.type}`), true);
				assert.equal(response.data.companies.every((company) => company.address.telephone === `${testCase.params.phoneNo}`), true);
			});
		});
	});

	describe('AT phoneNo', () => {
		const phoneNotestCases = ['050 390-22000', '06602369512', '069910326294', '+43 (0)664 28 26 327'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=AT&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.telephone === `${testCase}`), true);
			});
		});
	});

	describe('AT partialmatches', () => {
		const partialvatNotestCases = [
			{
				params: {
					vatNo: '60748178',
				},
				expected: {
					vatNo: 'ATU60748178',
				},
			},
			{
				params: {
					vatNo: '72995039',
				},
				expected: {
					vatNo: 'ATU72995039',
				},
			},
			{
				params: {
					vatNo: '77527525',
				},
				expected: {
					vatNo: 'ATU77527525',
				},
			},
			{
				params: {
					vatNo: '62485769',
				},
				expected: {
					vatNo: 'ATU62485769',
				},
			},
			{
				params: {
					vatNo: '62956466',
				},
				expected: {
					vatNo: 'ATU62956466',
				},
			},
		];
		partialvatNotestCases.forEach(async (testCase) => {
			it(`AT company search with partialvatNo: ${testCase.params.vatNo}`, async () => {
				const querystring = `?countries=AT&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase.expected.vatNo}`), true);
			});
		});
		const partialpostCodetestCases = [
			{
				params: {
					postCode: '8452',
					name: 'Neubauer',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06104892',
				},
			},
			{
				params: {
					postCode: '52',
					name: 'Neubauer',
				},
				expected: {
					key: 'safeNo',
					value: 'AT06104892',
				},
			},
			{
				params: {
					postCode: '60',
					name: 'DEMNER',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04680075',
				},
			},
			{
				params: {
					postCode: '80',
					name: 'CREATIVGIGANTIC',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04852815',
				},
			},
		];
		partialpostCodetestCases.forEach(async (testCase) => {
			it(`AT company search with partialpostCode: ${testCase.params.postCode}`, async () => {
				const querystring = `?countries=AT&postCode=${testCase.params.postCode}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialregNotestCases = [
			{
				params: {
					regNo: 'FN 484851t',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05973364',
				},
			},
			{
				params: {
					regNo: 'FN 484851',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05973364',
				},
			},
			{
				params: {
					regNo: '484851t',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05973364',
				},
			},
			{
				params: {
					regNo: 'FN 442927',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05778420',
				},
			},
			{
				params: {
					regNo: '442927 p',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05778420',
				},
			},
			{
				params: {
					regNo: '442927',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05778420',
				},
			},
		];
		partialregNotestCases.forEach(async (testCase) => {
			it(`AT company search with partialregNo: ${testCase.params.regNo}`, async () => {
				const querystring = `?countries=AT&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const partialphoneNotestCases = [
			{
				params: {
					phoneNo: '0043 720 56 92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
			{
				params: {
					phoneNo: '43 720 56 92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
			{
				params: {
					phoneNo: '720 56 92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
			{
				params: {
					phoneNo: '56 92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
			{
				params: {
					phoneNo: '720-56 92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
			{
				params: {
					phoneNo: '56/92 50',
				},
				expected: {
					phoneNo: '0043 720 56 92 50',
				},
			},
		];
		partialphoneNotestCases.forEach(async (testCase) => {
			it(`AT company search with partialphoneNo: ${testCase.params.phoneNo}`, async () => {
				const querystring = `?countries=AT&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.telephone === `${testCase.expected.phoneNo}`), true);
			});
		});
	});

	describe('AT synonyms', () => {
		const streetconjoinedtestCases = [
			{
				params: {
					street: 'BAHNHOFSTRASSE 2',
				},
				expected: {
					key: 'line1',
					value: 'BAHNHOFSTRAßE 2',
				},
			},
		];
		streetconjoinedtestCases.forEach(async (testCase) => {
			it(`AT company search with conjoinedstreet: ${testCase.params.street}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase.expected.value}`), true);
			});
		});
		const simpleValueconjoinedtestCases = [
			{
				params: {
					simpleValue: 'MEILSTR. 46',
				},
				expected: {
					key: 'simpleValue',
					value: 'MEILSTRAßE 46, 6170, ZIRL',
				},
			},
		];
		simpleValueconjoinedtestCases.forEach(async (testCase) => {
			it(`AT company search with conjoinedsimpleValue: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.expected.value}`), true);
			});
		});
		const namesynonymtestCases = [
			{
				params: {
					name: 'TGA beratung GmbH.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04785451',
				},
			},
			{
				params: {
					name: 'Vw Holding Österreich GmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05257711',
				},
			},
			{
				params: {
					name: 'gasthof Rebhuhn GesmbH',
				},
				expected: {
					key: 'safeNo',
					value: 'AT04772265',
				},
			},
			{
				params: {
					name: 'Steakhütte ristorante e.U.',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05751162',
				},
			},
			{
				params: {
					name: 'st Kate Privatstiftung',
				},
				expected: {
					key: 'safeNo',
					value: 'AT05744349',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`AT company search with namesynonyms: ${testCase.params.name}`, async () => {
				const querystring = `?countries=AT&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citysynonymtestCases = [
			{
				params: {
					city: 'Wien, Mariahilfer Str 54',
				},
				expected: {
					key: 'city',
					value: 'WIEN, MARIAHILFER STRAßE 54',
				},
			},
			{
				params: {
					city: 'St. Johann i.W. osterreich',
				},
				expected: {
					key: 'city',
					value: 'ST. JOHANN I.W. AUT',
				},
			},
			{
				params: {
					city: 'England und Wales',
				},
				expected: {
					key: 'city',
					value: 'ENGLAND UND WALES',
				},
			},
			{
				params: {
					city: 'dtl Wagram',
				},
				expected: {
					key: 'city',
					value: 'DEUTSCH-WAGRAM',
				},
			},
			{
				params: {
					city: 'Taufkirchen a d Pram',
				},
				expected: {
					key: 'city',
					value: 'TAUFKIRCHEN AN DER PRAM',
				},
			},
		];
		citysynonymtestCases.forEach(async (testCase) => {
			it(`AT company search with citysynonyms: ${testCase.params.city}`, async () => {
				const querystring = `?countries=AT&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase.expected.value}`), true);
			});
		});
		const simpleValuesynonymtestCases = [
			{
				params: {
					simpleValue: 'Mariahilfer Str 54, 1070, Wien',
				},
				expected: {
					key: 'simpleValue',
					value: 'MARIAHILFER STRAßE 54, 1070, WIEN',
				},
			},
			{
				params: {
					simpleValue: 'osterreich, 1010, WIEN',
				},
				expected: {
					key: 'simpleValue',
					value: 'AUT, 1010, WIEN',
				},
			},
			{
				params: {
					simpleValue: 'JOSEF-osterreichische-GASSE 45A, 1230, WIEN',
				},
				expected: {
					key: 'simpleValue',
					value: 'JOSEF-ÖSTERREICHER-GASSE 45A, 1230, WIEN',
				},
			},
		];
		simpleValuesynonymtestCases.forEach(async (testCase) => {
			it(`AT company search with simpleValuesynonyms: ${testCase.params.simpleValue}`, async () => {
				const querystring = `?countries=AT&simpleValue=${testCase.params.simpleValue}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.simpleValue === `${testCase.expected.value}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: 'Mariahilfer Str 54',
				},
				expected: {
					key: 'street',
					value: 'MARIAHILFER STRAßE 54/6',
				},
			},
			{
				params: {
					street: 'St. Johann i.W. osterreich 48',
				},
				expected: {
					key: 'street',
					value: 'ST. JOHANN I.W. AUT 48',
				},
			},
			{
				params: {
					street: 'osterreichische Strase 3',
				},
				expected: {
					key: 'street',
					value: 'ÖSTERREICHER STRAßE 3',
				},
			},
			{
				params: {
					street: 'germany-Bieling 44',
				},
				expected: {
					key: 'street',
					value: 'DEUTSCH-BIELING 44',
				},
			},
			{
				params: {
					street: 'p adr Denes 4/9',
				},
				expected: {
					key: 'street',
					value: 'PA DENES 4/9',
				},
			},
			{
				params: {
					street: 'Szinhaz Und. 14',
				},
				expected: {
					key: 'street',
					value: 'SZINHAZ U. 14',
				},
			},
			{
				params: {
					street: 'dt Sätzen 14',
				},
				expected: {
					key: 'street',
					value: 'DEUTSCHE SÄTZEN 14',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`AT company search with streetsynonyms: ${testCase.params.street}`, async () => {
				const querystring = `?countries=AT&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${querystring}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('AT Autocompletes', () => {
		const alphabetsTestCases = ['team', 'bank', 'credit', 'safe', 'company'];
		alphabetsTestCases.forEach(async (testCase) => {
			it(`returns AT company name startwith alphabets:${testCase}`, async () => {
				const queryString = `?countryCode=AT&name=${testCase}`;
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
			it(`returns AT company name startwith Numerics:${testCase}`, async () => {
				const queryString = `?countryCode=AT&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				response.data.companies.forEach((company) => {
					assert.ok(company.name.toLowerCase().startsWith(testCase), true);
				});
			});
		});
		const SpecialcharacterTestCases = ['@'];
		SpecialcharacterTestCases.forEach(async (testCase) => {
			it(`returns AT company name startwith specialcharacter:${testCase}`, async () => {
				const queryString = `?countryCode=AT&name=${testCase}`;
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
