import assert from 'node:assert';
import { describe, it } from 'node:test';
import { handler } from '../src/index.mjs';

describe('Search Criteria Validate', () => {
	it('should return bad request if query combination is invalid', async () => {
		const body = {
			query: {
				name: 'bank',
				safeNo: '1234',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const invalidInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'false',
			error: 'Specified criteria combination is not allowed',
		};
		const actualOutput = await handler(invalidInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it('should return bad request if query parameter minLength constraint is violated', async () => {
		const body = {
			query: {
				regNo: '1',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const invalidInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'false',
			error: 'regNo is shorter than the required minimum length of 2',
		};
		const actualOutput = await handler(invalidInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it('should return bad request if query parameter maxLength constraint is violated', async () => {
		const body = {
			query: {
				regNo: '123456789',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const invalidInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'false',
			error: 'regNo is longer than the required maximum length of 8',
		};
		const actualOutput = await handler(invalidInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it('should return bad request if query parameter regEx constraint is violated', async () => {
		const body = {
			query: {
				safeNo: 'UK12345678',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const invalidInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'false',
			error: 'safeNo has failed regular expression',
		};
		const actualOutput = await handler(invalidInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it('should return bad request if query parameter allowed values constraint is voilated', async () => {
		const body = {
			query: {
				name: 'bank',
				type: 'Limited',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const invalidInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'false',
			error: 'type has an invalid value. Needs to be one of [Ltd,NonLtd]',
		};
		const actualOutput = await handler(invalidInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
	it('it should return success if query is valid', async () => {
		const body = {
			query: {
				name: 'bank',
				type: 'Ltd',
			},
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						minLength: 10,
						maxLength: 10,
						validationRegExp: 'GB\\d{8}',
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						maxLength: 8,
						required: true,
					},
				},
				{
					name: {
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
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
					address: {
						street: {
							required: false,
						},
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					phoneNo: {
						required: false,
					},
				},
			],
		};
		const validInput = {
			headers: {
				'x-amzn-requestid': '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		const expectedOutput = {
			isQueryValid: 'true',
		};
		const actualOutput = await handler(validInput);
		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
});
