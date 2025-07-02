import assert from 'node:assert';
import { describe, it } from 'node:test';
import { handler } from '../src/index.mjs';

const awsRequestTemplate = {
	resource: '/companies',
	path: '/companies',
	httpMethod: 'GET',
	headers: {
		'content-type': 'application/json',
	},
	multiValueHeaders: {
		Accept: [
			'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
		],
		'Accept-Encoding': ['gzip, deflate, br'],
		'Accept-Language': ['en-US,en;q=0.9'],
	},
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	pathParameters: null,
	stageVariables: null,
	requestContext: {
		resourceId: 'fdbqih',
		resourcePath: '/companies',
		httpMethod: 'GET',
		extendedRequestId: 'HORwxGg9DoEF29A=',
		path: '/dev/companies',
		accountId: '712390586371',
		protocol: 'HTTP/1.1',
		stage: 'dev',
		domainPrefix: '87k282r1y1',
		requestTimeEpoch: 1687944401482,
		requestId: 'ac46b367-ed4f-459a-8204-0fccaa217fec',
		identity: {
			cognitoIdentityPoolId: null,
			accountId: null,
			cognitoIdentityId: null,
			caller: null,
			sourceIp: '49.37.150.91',
			principalOrgId: null,
			accessKey: null,
			cognitoAuthenticationType: null,
			cognitoAuthenticationProvider: null,
			userArn: null,
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
			user: null,
		},
		domainName: '87k282r1y1.execute-api.eu-west-1.amazonaws.com',
		apiId: '87k282r1y1',
	},
	body: null,
	isBase64Encoded: false,
};

describe('Search Criteria Merge', () => {
	it('should return bad request if no body present in event', async () => {
		const input = { ...awsRequestTemplate };
		const expectedOutput = 'Event object failed validation';

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
		assert.equal(actualOutput.body, expectedOutput);
	});
	it('should return intersection of two country criteria sets', async () => {
		const bodyObj = {
			countriesCriteria: [
				{
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								validationRegExp: 'DE\\d{8}',
								maxLength: 10,
								required: true,
								minLength: 10,
							},
						},
						{
							vatNo: {
								validationRegExp: 'DE\\d{9}',
								maxLength: 11,
								required: true,
								minLength: 11,
							},
						},
						{
							regNo: {
								validationRegExp: '^(?!^\\s*HR\\s*$)(?!^\\s*HRB\\s*$)(?!^\\s*HRA\\s*$)(?!^\\s*GnR\\s*$)(?!^\\s*PR\\s*$)(?!^\\s*IN\\s*$).*$',
								required: true,
								minLength: 1,
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
								required: false,
							},
							address: {
								city: {
									required: false,
								},
							},
						},
						{
							name: {
								required: false,
								minLength: 2,
							},
							tradeName: {
								required: false,
								minLength: 2,
							},
							address: {
								simpleValue: {
									required: false,
									minLength: 2,
								},
								postCode: {
									required: false,
									minLength: 2,
								},
								city: {
									required: false,
								},
								street: {
									required: false,
								},
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
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
						},
					],
					country: 'DE',
				},
				{
					criteriaSets: [
						{
							id: {
								required: true,
							},
						},
						{
							safeNo: {
								validationRegExp: 'GB\\d{8}',
								maxLength: 10,
								required: true,
								minLength: 10,
							},
						},
						{
							regNo: {
								maxLength: 8,
								required: true,
								minLength: 2,
							},
						},
						{
							vatNo: {
								validationRegExp: 'GB\\d{9}',
								maxLength: 11,
								required: true,
								minLength: 11,
							},
						},
						{
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
							address: {
								simpleValue: {
									required: false,
									minLength: 2,
								},
								postCode: {
									required: false,
									minLength: 2,
								},
								city: {
									required: false,
								},
								street: {
									required: false,
								},
							},
							type: {
								allowedValues: [
									'Ltd',
									'NonLtd',
								],
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
						},
					],
					country: 'GB',
				},
			],
			aggregate: {},
		};
		const input = {
			...awsRequestTemplate,
			body: JSON.stringify(bodyObj),
		};

		const expectedOutput = {
			aggregate: [
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
					name: {
						required: false,
					},
					address: {
						simpleValue: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
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
				},
			],
			countries: [
				'DE',
				'GB',
			],
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(actualOutput.body, JSON.stringify(expectedOutput));
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify({ 'Content-Type': 'application/json', 'x-cs-searchSource': 'usp' }));
	});
});
