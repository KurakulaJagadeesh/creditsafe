import { handler } from '../src/handler.mjs';
import SEARCH_MODE from '../src/models/searchMode.mjs';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
};

const paginationTest = async () => {
	const input = {
		...awsRequestTemplate,
		queryStringParameters: {
			countries: 'GB', pageSize: '15',
		},
	};

	// Create a list of UK company names
	const inputNames = [
		{ name: 'bank', type: 'Ltd' },
		{ name: 'creditsafe', type: 'Ltd' },
		{ name: 'experian', type: 'Ltd' },
		{ name: 'Tesco', type: 'Ltd' },
		{ name: 'Sainsbury', type: 'Ltd' },
		{ name: 'Asda', type: 'Ltd' },
		{ name: 'Morrisons', type: 'Ltd' },
		{ name: 'Lidl', type: 'Ltd' },
		{ name: 'Aldi', type: 'Ltd' },
		{ name: 'Waitrose', type: 'Ltd' },
		{ name: 'Beales', type: 'Ltd' },
		{ name: 'Finnegans', type: 'Ltd' },
		{ name: 'London', postCode: 'E20 1JN', type: 'Ltd' },
		{ name: 'British', city: 'London', type: 'Ltd' },
	];

	const results = [];

	// For each name, make a request to the handler and log the totalSize
	// eslint-disable-next-line no-restricted-syntax
	for (const inputName of inputNames) {
		const individualResults = [];
		for (let j = 0; j < 5; j += 1) {
			// eslint-disable-next-line no-await-in-loop
			const actualOutput = await handler({
				...input,
				queryStringParameters: {
					...input.queryStringParameters,
					...inputName,
					page: `${j + 1}`,
				},
			});
			const actualOutputObject = JSON.parse(actualOutput.body);
			individualResults.push({
				[inputName.name]: actualOutputObject.totalSize,
			});
		}
		results.push(individualResults);
	}
	console.table(results);
};

const main = async () => {
	const input = {
		...awsRequestTemplate,
		queryStringParameters: {
			countries: 'US', page: '1', pageSize: '15', province: 'ME', searchMode: SEARCH_MODE.INCLUDECOEFFICIENT,
		},
	};

	console.log('input:', input);
	const actualOutput = await handler(input);
	const actualOutputObject = JSON.parse(actualOutput.body);
	console.dir(actualOutputObject, { depth: null, colors: true });
	console.table(actualOutputObject.companies.map((x) => ({
		matchScore: x.matchScore, safeNo: x.safeNo, name: x.name, simpleValue: x.address.simpleValue, coefficient: x.coefficient,
	})));
	console.log(1);
};

main();
paginationTest();
