import assert from 'node:assert';
import esmock from 'esmock';
import { describe, it } from 'node:test';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
	path: '/companies/autocomplete',
};

const expectedHeaders = {
	'Content-Type': 'application/json',
	'x-cs-searchSource': 'usp',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
};

// Mock mappings
const mockApiRequestMappings = {
	default: {
		name: 'name',
	},
	DE: {
		name: 'name',
	},
	AT: {
		name: 'name',
	},
	DK: {
		name: 'name',
	},
	GB: {
		name: 'name',
	},
	IT: {
		name: 'name',
	},
	NL: {
		name: 'name',
	},
	NO: {
		name: 'name',
	},
	SE: {
		name: 'name',
	},
	FR: {
		name: 'name',
	},
};

const mockApiContextMappings = {
	default: {
		name: ['country', 'status'],
	},
	DE: {
		name: ['country', 'status'],
	},
	AT: {
		name: ['country', 'status'],
	},
	DK: {
		name: ['country', 'status'],
	},
	GB: {
		name: ['country', 'status'],
	},
	IT: {
		name: ['country', 'status'],
	},
	NL: {
		name: ['country', 'status'],
	},
	NO: {
		name: ['country', 'status'],
	},
	SE: {
		name: ['country', 'status'],
	},
	FR: {
		name: ['country', 'status'],
	},
};

const mockApiResponseMappings = {
	DE: ['name', 'regType', 'address.city', 'statusDescription', 'safeNo', 'connectId'],
	AT: ['name', 'regType', 'status', 'address.city', 'safeNo', 'connectId'],
	DK: ['name', 'officeType', 'address.city', 'safeNo', 'connectId'],
	GB: ['name', 'regType', 'address.city', 'address.county', 'statusDescription', 'safeNo', 'connectId'],
	IT: ['name', 'status', 'address.city', 'safeNo', 'connectId', 'officeType'],
	NL: ['name', 'statusDescription', 'address.city', 'safeNo', 'connectId', 'officeType'],
	NO: ['name', 'status', 'address.city', 'safeNo', 'connectId', 'officeType'],
	SE: ['name', 'legalGroup', 'address.city', 'safeNo', 'connectId', 'status'],
	FR: ['name', 'alternateName', 'connectId', 'address.city', 'regNo.raw', 'safeNo', 'status'],
};

describe('Auto Complete Parameters Validation', () => {
	it('should validate no input', async () => {
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/suggestions.mjs': {
				default: () => [],
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'DE', size: 2 } };
		const expectedOutput = 'No Input Specified';
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'text/plain' }));
	});

	it('should validate multiple parameters', async () => {
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({}),
			},
		});
		const validInput = {
			...awsRequestTemplate,
			queryStringParameters: {
				countryCode: 'DE', name: 'peter', city: 'berlin', size: 2,
			},
		};
		const expectedOutput = 'Invalid Input, does not support multiple input parameters';
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'text/plain' }));
	});

	it('should validate invalid input parameter', async () => {
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({}),
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'DE', line1: 'berlin', size: 2 } };
		const expectedOutput = 'Invalid Input Parameter';
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'text/plain' }));
	});

	it('should return empty when no data found', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: () => [],
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'DE', name: 'ofhourhjncsk', size: 2 } };
		const expectedOutput = {
			totalSize: 0,
			companies: [],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});

	it('should return input validation error message when countryCode is invalid', async () => {
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({}),
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'fdfhd', name: 'peter', size: 2 } };
		const expectedOutput = 'Event object failed validation';
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'text/plain' }));
	});

	it('should return input validation error message when countryCode is missing in parameters', async () => {
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({}),
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { name: 'peter', size: 2 } };
		const expectedOutput = 'Event object failed validation';
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'text/plain' }));
	});
});

describe('Auto Complete Validate AT', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									address: { city: 'Wien' },
									name: 'TEAM - Schwingenschlögl KG',
									safeNo: 'AT05856321',
									connectId: 'AT-0-AT05856321',
									regType: 'NonLtd',
									status: 'Active',
								},
							},
						],
					}],
				},
			},
		};

		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});

		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'AT', name: 'team', size: 2 } };
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), {
			totalSize: 1,
			companies: [{
				address: { city: 'Wien' },
				name: 'TEAM - Schwingenschlögl KG',
				safeNo: 'AT05856321',
				connectId: 'AT-0-AT05856321',
				regType: 'NonLtd',
				status: 'Active',
			}],
		});
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate DE', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									statusDescription: 'Inactive',
									address: { city: 'Wiesbaden' },
									name: 'TEAM - Bau Bauträger GmbH',
									safeNo: 'DE00270383',
									connectId: 'DE-0-DE00270383',
									regType: 'ltd',
								},
							},
							{
								_source: {
									statusDescription: 'Inactive',
									address: { city: 'Iserlohn' },
									name: 'TEAM - Bau Gesellschaft mit beschränkter Haftung',
									safeNo: 'DE01590897',
									connectId: 'DE-0-DE01590897',
									regType: 'ltd',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'DE', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'Wiesbaden' },
					connectId: 'DE-0-DE00270383',
					name: 'TEAM - Bau Bauträger GmbH',
					regType: 'ltd',
					safeNo: 'DE00270383',
					statusDescription: 'Inactive',
				},
				{
					address: { city: 'Iserlohn' },
					connectId: 'DE-0-DE01590897',
					name: 'TEAM - Bau Gesellschaft mit beschränkter Haftung',
					regType: 'ltd',
					safeNo: 'DE01590897',
					statusDescription: 'Inactive',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate DK', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [
						{
							options: [
								{
									_source: {
										statusDescription: {
											en: 'Ceased',
										},
										address: { city: 'København K' },
										name: 'TEAM',
										safeNo: 'DK03440931',
										connectId: 'DK-X-DK03440931',
										officeType: 'HeadOffice',
									},
								},
								{
									_source: {
										statusDescription: {
											en: 'Ceased',
										},
										address: { city: 'Haderslev' },
										name: 'TEAM-AGENCY V/HENRIK STILHOFF NICOLAISEN',
										safeNo: 'DK04441082',
										connectId: 'DK-X-DK04441082',
										officeType: 'HeadOffice',
									},
								},
							],
						},
					],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'DK', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'København K' },
					connectId: 'DK-X-DK03440931',
					name: 'TEAM',
					officeType: 'HeadOffice',
					safeNo: 'DK03440931',
					statusDescription: 'Ceased',
				},
				{
					address: { city: 'Haderslev' },
					connectId: 'DK-X-DK04441082',
					name: 'TEAM-AGENCY V/HENRIK STILHOFF NICOLAISEN',
					officeType: 'HeadOffice',
					safeNo: 'DK04441082',
					statusDescription: 'Ceased',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate GB', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									statusDescription: 'Active',
									address: { city: 'JERSEY', county: 'CHANNEL ISLES' },
									name: 'TEAM',
									safeNo: 'UK10632204',
									connectId: 'GB-1-2680603',
									regType: 'NonLtd',
								},
							},
							{
								_source: {
									statusDescription: 'Active',
									address: { city: 'LISS', county: 'HAMPSHIRE' },
									name: 'TEAM',
									safeNo: 'UK11168107',
									connectId: 'GB-1-3886188',
									regType: 'NonLtd',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'GB', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'JERSEY', county: 'CHANNEL ISLES' },
					connectId: 'GB-1-2680603',
					name: 'TEAM',
					regType: 'NonLtd',
					safeNo: 'UK10632204',
					statusDescription: 'Active',
				},
				{
					address: { city: 'LISS', county: 'HAMPSHIRE' },
					connectId: 'GB-1-3886188',
					name: 'TEAM',
					regType: 'NonLtd',
					safeNo: 'UK11168107',
					statusDescription: 'Active',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate IT', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									address: { city: 'FIUME VENETO' },
									name: 'TEAM & PARTNERS S.R.L.',
									safeNo: 'IT20063182',
									connectId: 'IT-0-PN365741',
									status: 'Active',
									officeType: 'headOffice',
								},
							},
							{
								_source: {
									address: { city: 'BARI' },
									name: 'TEAM & PROJECT SOCIETA A RESPONSABILITA LIMITATA SEMPLIFICATA',
									safeNo: 'IT20490501',
									connectId: 'IT-0-BA657177',
									status: 'Active',
									officeType: 'headOffice',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'IT', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'FIUME VENETO' },
					connectId: 'IT-0-PN365741',
					name: 'TEAM & PARTNERS S.R.L.',
					officeType: 'headOffice',
					safeNo: 'IT20063182',
					status: 'Active',
				},
				{
					address: { city: 'BARI' },
					connectId: 'IT-0-BA657177',
					name: 'TEAM & PROJECT SOCIETA A RESPONSABILITA LIMITATA SEMPLIFICATA',
					officeType: 'headOffice',
					safeNo: 'IT20490501',
					status: 'Active',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate NL', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									statusDescription: 'NON TRADING',
									address: { city: 'ZWOLLE' },
									name: 'TEAM (Training Enhancing Athletic Movement)',
									safeNo: 'NL01756849',
									connectId: 'NL-X-302223280000',
									officeType: 'headOffice',
								},
							},
							{
								_source: {
									statusDescription: 'NON TRADING',
									address: { city: 'NIEUWERKERK AD IJSSEL' },
									name: 'TEAM FIN B.V.',
									safeNo: 'NL05522882',
									connectId: 'NL-X-801652490000',
									officeType: 'headOffice',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'NL', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'ZWOLLE' },
					connectId: 'NL-X-302223280000',
					name: 'TEAM (Training Enhancing Athletic Movement)',
					officeType: 'headOffice',
					safeNo: 'NL01756849',
					statusDescription: 'NON TRADING',
				},
				{
					address: { city: 'NIEUWERKERK AD IJSSEL' },
					connectId: 'NL-X-801652490000',
					name: 'TEAM FIN B.V.',
					officeType: 'headOffice',
					safeNo: 'NL05522882',
					statusDescription: 'NON TRADING',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate NO', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									address: { city: 'MOELV' },
									name: 'TEAM 1435 AS',
									safeNo: 'NO01420375',
									connectId: 'NO-0-NO01420375',
									status: 'NonActive',
									officeType: 'headOffice',
								},
							},
							{
								_source: {
									address: { city: 'HØNEFOSS' },
									name: 'TEAM & SAMSPILL AS',
									safeNo: 'NO26264596',
									connectId: 'NO-0-NO26264596',
									status: 'NonActive',
									officeType: 'headOffice',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'NO', name: 'team', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'MOELV' },
					connectId: 'NO-0-NO01420375',
					name: 'TEAM 1435 AS',
					officeType: 'headOffice',
					safeNo: 'NO01420375',
					status: 'NonActive',
				},
				{
					address: { city: 'HØNEFOSS' },
					connectId: 'NO-0-NO26264596',
					name: 'TEAM & SAMSPILL AS',
					officeType: 'headOffice',
					safeNo: 'NO26264596',
					status: 'NonActive',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate SE', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{
								_source: {
									address: { city: 'STOCKHOLM' },
									name: 'CREDIT LYONNAIS',
									safeNo: 'SE00414726',
									legalGroup: 'OVR',
									connectId: 'SE-0-5020277868',
									status: 'Other',
								},
							},
							{
								_source: {
									address: { city: 'STOCKHOLM' },
									name: 'CREDIT SUISSE',
									safeNo: 'SE00416937',
									legalGroup: 'OVR',
									connectId: 'SE-0-5020489984',
									status: 'Other',
								},
							},
						],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'SE', name: 'credit', size: 2 } };
		const expectedOutput = {
			totalSize: 2,
			companies: [
				{
					address: { city: 'STOCKHOLM' },
					connectId: 'SE-0-5020277868',
					legalGroup: 'OVR',
					name: 'CREDIT LYONNAIS',
					safeNo: 'SE00414726',
					status: 'Other',
				},
				{
					address: { city: 'STOCKHOLM' },
					connectId: 'SE-0-5020489984',
					legalGroup: 'OVR',
					name: 'CREDIT SUISSE',
					safeNo: 'SE00416937',
					status: 'Other',
				},
			],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});

describe('Auto Complete Validate FR', () => {
	it('should return success', async () => {
		const mockOutput = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [{
							_source: {
								regNo: {
									raw: '48972424500050',
								},
								address: {
									city: 'PARIS',
								},
								name: 'CREDITSAFE PARIS',
								safeNo: 'FR36245529',
								alternateName: 'CREDITSAFE PARIS',
								connectId: 'FR-X-48972424500050',
								status: 'Inactive',
							},
						}],
					}],
				},
			},
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/client.mjs': {
				default: () => ({
					search: async () => mockOutput,
				}),
			},
			'../src/mappings/apiRequestMapping.mjs': {
				default: mockApiRequestMappings,
			},
			'../src/mappings/apiContextMapping.mjs': {
				default: mockApiContextMappings,
			},
			'../src/mappings/apiResponseMapping.mjs': {
				default: mockApiResponseMappings,
			},
			'../src/suggestions.mjs': {
				default: (suggestions) => suggestions,
			},
		});
		const validInput = { ...awsRequestTemplate, queryStringParameters: { countryCode: 'FR', name: 'creditsafe', size: 4 } };
		const expectedOutput = {
			totalSize: 1,
			companies: [{
				additionalData: {
					alternateName: 'CREDITSAFE PARIS',
				},
				address: {
					city: 'PARIS',
				},
				connectId: 'FR-X-48972424500050',
				name: 'CREDITSAFE PARIS',
				regNo: '48972424500050',
				safeNo: 'FR36245529',
				status: 'inactive',
			}],
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepEqual(JSON.parse(actualOutput.body), expectedOutput);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});
});
