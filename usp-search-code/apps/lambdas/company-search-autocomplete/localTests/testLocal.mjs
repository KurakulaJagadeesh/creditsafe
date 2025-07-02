import { lambdaHandler } from '../src/index.mjs';

const test = async () => {
	const event = {
		httpMethod: 'GET',
		queryStringParameters: { countryCode: 'GB', name: 'CREDITS', size: 4 },
		multiValueQueryStringParameters: null,
		body: null,
		headers: {
			'Content-Type': 'application/json',
			'x-cs-searchSource': 'usp',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
		},
		path: '/companies/autocomplete',
	};
	const result = await lambdaHandler(event);
	console.table(result.companies.map((x) => ({
		safeNo: x.safeNo, name: x.name, tradingName: x.tradingNames, alternativeName: x.additionalData?.alternateName, officeType: x.officeType, countryCode: x.countryCode, status: x.status,
	})));
};

test();
