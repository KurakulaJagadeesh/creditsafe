/* eslint-disable no-shadow */
import assert from 'node:assert';
// eslint-disable-next-line import/no-extraneous-dependencies
import esmock from 'esmock';
import { describe, it } from 'node:test';
import { handler } from '../src/index.mjs';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	path: '/searchcriteria',
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
};

describe('Search Criteria', () => {
	it('should return bad request if no body present in event', async () => {
		const input = { ...awsRequestTemplate };
		const expectedOutput = 'Event object failed validation';

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
	});
	it.skip('should return GB criteria sets', async () => {
		const expectedCriterias = {
			searchCriteria: {
				GB: {
					country: 'GB',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'GB\\d{8}',
							},
						},
						{
							regNo: {
								maxLength: 8,
								minLength: 2,
								required: true,
							},
						},
						{
							vatNo: {
								maxLength: 11,
								minLength: 11,
								required: true,
								validationRegExp: 'GB\\d{9}',
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							exact: {
								allowedValues: [
									true,
									false,
								],
								required: false,
							},
							name: {
								required: false,
							},
							phoneNo: {
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
			},
		};

		const expectedOutput = {
			countries: ['GB'],
			languages: ['EN'],
			criteriaSets: expectedCriterias.searchCriteria.GB.criteriaSets,
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../usp-company-search-criteria-config/configs/criterias.json': {
				default: () => (expectedCriterias),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: { countries: 'GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it.skip('should return merged criteria sets of GB and DE', async () => {
		// Include a subset of all countries available
		const expectedCriterias = {
			searchCriteria: {
				DE: {
					country: 'DE',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'DE\\d{8}',
							},
						},
						{
							vatNo: {
								maxLength: 11,
								minLength: 11,
								required: true,
								validationRegExp: 'DE\\d{9}',
							},
						},
						{
							address: {
								city: {
									required: false,
								},
							},
							regNo: {
								minLength: 1,
								required: true,
								validationRegExp: '^(?!^\\s*HR\\s*$)(?!^\\s*HRB\\s*$)(?!^\\s*HRA\\s*$)(?!^\\s*GnR\\s*$)(?!^\\s*PR\\s*$)(?!^\\s*IN\\s*$).*$',
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								minLength: 2,
								required: false,
							},
							phoneNo: {
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							tradeName: {
								minLength: 2,
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				GB: {
					country: 'GB',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'GB\\d{8}',
							},
						},
						{
							regNo: {
								maxLength: 8,
								minLength: 2,
								required: true,
							},
						},
						{
							vatNo: {
								maxLength: 11,
								minLength: 11,
								required: true,
								validationRegExp: 'GB\\d{9}',
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							exact: {
								allowedValues: [
									true,
									false,
								],
								required: false,
							},
							name: {
								required: false,
							},
							phoneNo: {
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				DK: {
					country: 'DK',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'DK\\d{8}',
							},
						},
						{
							regNo: {
								required: true,
							},
						},
						{
							vatNo: {
								required: true,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								province: {
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								minLength: 2,
								required: false,
							},
							officeType: {
								allowedValues: [
									'HeadOffice',
								],
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				ES: {
					country: 'ES',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'ES\\d{8}',
							},
						},
						{
							regNo: {
								required: true,
							},
						},
						{
							vatNo: {
								required: true,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								province: {
									allowedValues: [
										'ES-A',
										'ES-AB',
										'ES-AL',
										'ES-AV',
										'ES-B',
										'ES-BA',
										'ES-BI',
										'ES-BU',
										'ES-C',
										'ES-CA',
										'ES-CC',
										'ES-CE',
										'ES-CO',
										'ES-CR',
										'ES-CS',
										'ES-CU',
										'ES-GC',
										'ES-GI',
										'ES-GR',
										'ES-GU',
										'ES-H',
										'ES-HU',
										'ES-J',
										'ES-L',
										'ES-LE',
										'ES-LO',
										'ES-LU',
										'ES-M',
										'ES-MA',
										'ES-ML',
										'ES-MU',
										'ES-NA',
										'ES-O',
										'ES-OR',
										'ES-P',
										'ES-PM',
										'ES-PO',
										'ES-S',
										'ES-SA',
										'ES-SE',
										'ES-SG',
										'ES-SO',
										'ES-SS',
										'ES-T',
										'ES-TE',
										'ES-TF',
										'ES-TO',
										'ES-V',
										'ES-VA',
										'ES-VI',
										'ES-Z',
										'ES-ZA',
									],
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								required: false,
							},
							officeType: {
								allowedValues: [
									'HeadOffice',
								],
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
			},
		};

		const expectedOutput = {
			countries: [
				'DE',
				'GB',
			],
			languages: [
				'EN',
			],
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						required: true,
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						simpleValue: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						required: false,
					},
					phoneNo: {
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
			],
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/s3service.mjs': {
				default: () => (expectedCriterias),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: { countries: 'DE,GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it.skip('should return merged criteria sets of DE, GB and DK', async () => {
		// Include a subset of all countries available
		const expectedCriterias = {
			searchCriteria: {
				DE: {
					country: 'DE',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'DE\\d{8}',
							},
						},
						{
							vatNo: {
								maxLength: 11,
								minLength: 11,
								required: true,
								validationRegExp: 'DE\\d{9}',
							},
						},
						{
							address: {
								city: {
									required: false,
								},
							},
							regNo: {
								minLength: 1,
								required: true,
								validationRegExp: '^(?!^\\s*HR\\s*$)(?!^\\s*HRB\\s*$)(?!^\\s*HRA\\s*$)(?!^\\s*GnR\\s*$)(?!^\\s*PR\\s*$)(?!^\\s*IN\\s*$).*$',
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								minLength: 2,
								required: false,
							},
							phoneNo: {
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							tradeName: {
								minLength: 2,
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				GB: {
					country: 'GB',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'GB\\d{8}',
							},
						},
						{
							regNo: {
								maxLength: 8,
								minLength: 2,
								required: true,
							},
						},
						{
							vatNo: {
								maxLength: 11,
								minLength: 11,
								required: true,
								validationRegExp: 'GB\\d{9}',
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							exact: {
								allowedValues: [
									true,
									false,
								],
								required: false,
							},
							name: {
								required: false,
							},
							phoneNo: {
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				DK: {
					country: 'DK',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'DK\\d{8}',
							},
						},
						{
							regNo: {
								required: true,
							},
						},
						{
							vatNo: {
								required: true,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								province: {
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								minLength: 2,
								required: false,
							},
							officeType: {
								allowedValues: [
									'HeadOffice',
								],
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
				ES: {
					country: 'ES',
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								maxLength: 10,
								minLength: 10,
								required: true,
								validationRegExp: 'ES\\d{8}',
							},
						},
						{
							regNo: {
								required: true,
							},
						},
						{
							vatNo: {
								required: true,
							},
						},
						{
							address: {
								city: {
									required: false,
								},
								postCode: {
									minLength: 2,
									required: false,
								},
								province: {
									allowedValues: [
										'ES-A',
										'ES-AB',
										'ES-AL',
										'ES-AV',
										'ES-B',
										'ES-BA',
										'ES-BI',
										'ES-BU',
										'ES-C',
										'ES-CA',
										'ES-CC',
										'ES-CE',
										'ES-CO',
										'ES-CR',
										'ES-CS',
										'ES-CU',
										'ES-GC',
										'ES-GI',
										'ES-GR',
										'ES-GU',
										'ES-H',
										'ES-HU',
										'ES-J',
										'ES-L',
										'ES-LE',
										'ES-LO',
										'ES-LU',
										'ES-M',
										'ES-MA',
										'ES-ML',
										'ES-MU',
										'ES-NA',
										'ES-O',
										'ES-OR',
										'ES-P',
										'ES-PM',
										'ES-PO',
										'ES-S',
										'ES-SA',
										'ES-SE',
										'ES-SG',
										'ES-SO',
										'ES-SS',
										'ES-T',
										'ES-TE',
										'ES-TF',
										'ES-TO',
										'ES-V',
										'ES-VA',
										'ES-VI',
										'ES-Z',
										'ES-ZA',
									],
									required: false,
								},
								simpleValue: {
									minLength: 2,
									required: false,
								},
								street: {
									required: false,
								},
							},
							name: {
								required: false,
							},
							officeType: {
								allowedValues: [
									'HeadOffice',
								],
								required: false,
							},
							status: {
								allowedValues: [
									'Active',
									'NonActive',
								],
								required: false,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
						},
					],
					languages: [
						'EN',
					],
				},
			},
		};

		const expectedOutput = {
			countries: [
				'DE',
				'DK',
				'GB',
			],
			languages: [
				'EN',
			],
			criteriaSets: [
				{
					id:
					{
						required: true,
					},
				},
				{
					safeNo: {
						required: true,
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						simpleValue: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
				}],
		};
		const { handler } = await esmock('../src/index.mjs', {
			'../src/s3service.mjs': {
				default: () => (expectedCriterias),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: { countries: 'DE,GB,DK' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});

	it('should return company criteria sets for /searchcriteria', async () => {
		const input = {
			...awsRequestTemplate,
			queryStringParameters: { countries: 'GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.ok('id' in JSON.parse(actualOutput.body).criteriaSets[0]);
	});

	it('should return director criteria sets for /peopleSearchCriteria', async () => {
		const input = {
			...awsRequestTemplate,
			path: '/peopleSearchCriteria',
			queryStringParameters: { countries: 'GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.ok('localDirectorNumber' in JSON.parse(actualOutput.body).criteriaSets[0]);
	});

	it('should return BAD REQUEST director criteria sets for /peopleSearchCriteria with unknown country code', async () => {
		const input = {
			...awsRequestTemplate,
			path: '/peopleSearchCriteria',
			queryStringParameters: { countries: 'ZZ' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, 'Search criterias not found for one or more countries from: ZZ');
	});

	it('should return company criteria sets for /searchcriteria/company', async () => {
		const input = {
			...awsRequestTemplate,
			path: '/searchcriteria/company',
			queryStringParameters: { countries: 'GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.ok('id' in JSON.parse(actualOutput.body).criteriaSets[0]);
	});

	it('should return not found for invalid path', async () => {
		const input = {
			...awsRequestTemplate,
			path: '/invalidpath',
			queryStringParameters: { countries: 'GB' },
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 404);
	});
});
