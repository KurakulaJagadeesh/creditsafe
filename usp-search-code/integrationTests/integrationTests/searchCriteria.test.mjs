import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('Search Criteria', () => {
	it('should return bad request if no body present in event', async () => {
		const expectedOutput = 'Event object failed validation';

		const response = await getWithRetry(`${baseUrl}/searchcriteria`, 400);
		assert.equal(response.status, 400);
		assert.equal(response.data, expectedOutput);
	});

	it('should return GB criteria sets', async () => {
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
								validationRegExp: 'UK\\d{8}',
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
								minLength: 9,
								required: true,
								validationRegExp: '^(GB)?\\d{9}$',
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
		const countries = 'GB';
		const response = await getWithRetry(`${baseUrl}/searchcriteria?countries=${countries}`);

		assert.equal(response.status, 200);
		assert.deepStrictEqual(JSON.stringify(response.data), JSON.stringify(expectedOutput));
		assert.equal(response.headers['content-type'], 'application/json');
		assert.equal(response.headers['x-cs-searchsource'], 'usp');
	});

	it('should return merged criteria sets of GB and DE', async () => {
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
					vatNo: {
						required: true,
					},
				},
				{
					regNo: {
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
		const countries = 'DE,GB';
		const response = await getWithRetry(`${baseUrl}/searchcriteria?countries=${countries}`);

		assert.equal(response.status, 200);
		assert.deepStrictEqual(JSON.stringify(response.data), JSON.stringify(expectedOutput));
		assert.equal(response.headers['content-type'], 'application/json');
		assert.equal(response.headers['x-cs-searchsource'], 'usp');
	});

	it('should return company criteria sets for /searchcriteria', async () => {
		const countries = 'GB';
		const response = await getWithRetry(`${baseUrl}/searchcriteria?countries=${countries}`);
		assert.equal(response.status, 200);
		assert.ok('id' in response.data.criteriaSets[0]);
	});

	it('should return company criteria sets for /searchcriteria/company', async () => {
		const countries = 'DE';
		const endPoint = 'company';
		const response = await getWithRetry(`${baseUrl}/searchcriteria/${endPoint}?countries=${countries}`);
		assert.equal(response.status, 200);
		assert.ok('id' in response.data.criteriaSets[0]);
	});

	it('should return director criteria sets for /peopleSearchCriteria', async () => {
		const countries = 'GB';
		const response = await getWithRetry(`${baseUrl}/peopleSearchCriteria?countries=${countries}`);
		assert.equal(response.status, 200);
		assert.ok('localDirectorNumber' in response.data.criteriaSets[0]);
	});

	it('should return BAD REQUEST director criteria sets for /peopleSearchCriteria with unknown country code', async () => {
		const countries = 'ZZ';
		const response = await getWithRetry(`${baseUrl}/peopleSearchCriteria?countries=${countries}`, 400);
		assert.equal(response.status, 400);
		assert.equal(response.data, 'Search criterias not found for one or more countries from: ZZ');
	});

	it('should return BAD REQUEST company criteria sets for /searchcriteria/company with unknown country code', async () => {
		const countries = 'ZZ';
		const endPoint = 'company';
		const response = await getWithRetry(`${baseUrl}/searchcriteria/${endPoint}?countries=${countries}`, 400);
		assert.equal(response.status, 400);
		assert.equal(response.data, 'Search criterias not found for one or more countries from: ZZ');
	});
});
