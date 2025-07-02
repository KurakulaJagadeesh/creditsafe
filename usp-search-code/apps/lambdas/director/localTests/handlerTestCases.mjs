import { handler } from '../src/handler.mjs';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
};

const main = async () => {
	const input = {
		...awsRequestTemplate,
		queryStringParameters: {
			countries: 'GB',
			page: '1',
			pageSize: '200',
			firstName: 'Cato',
			lastName: 'Syversen',
		},
	};

	const actualOutput = await handler(input);
	const actualOutputObject = JSON.parse(actualOutput.body);
	console.table(actualOutputObject.directors.map((x) => ({
		matchScore: x.matchScore,
		localDirectorNumber: x.localDirectorNumber,
		firstName: x.firstName,
		lastName: x.lastName,
		...x.representativeCompany,
	})));
	console.log(1);
};

main();
