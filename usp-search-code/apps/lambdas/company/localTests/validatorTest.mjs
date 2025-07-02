import deref from 'json-schema-deref-sync';
import { validateSearchCriteria, validateInput } from '@usp-monorepo/usp-core/services/validationService.mjs';
import swagger from '@usp-monorepo/usp-core/config/usp-swagger.json' with { type: 'json' };

const swaggerSchema = deref(swagger);
const schemaPath = swaggerSchema.components.schemas;
const INPUT_VALIDATION_SCHEMA = schemaPath['CompanySearch.InputParameters'];

export const validateSearchCriteriaTest = async () => {
	const test1 = {
		id: '123',
	};

	const test2 = {
		safeNo: '1234567891',
	};

	const test3 = {
		safeNo: '123',
	};

	const test4 = {
		safeNo: 'DE123',
	};

	const test5 = {
		safeNo: 'DE12345678',
	};

	const criteriaSets = [
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
	];
	const testCases = [test1, test2, test3, test4, test5];
	testCases.forEach((testObj) => {
		const result = validateSearchCriteria(testObj, criteriaSets);
		console.log(result);
	});
	console.log('Fin');
};

export const validateInputTest = async () => {
	const testCases = [{
		countryCode: 'GB,DE', page: '1', pageSize: '15', name: 'creditsafe',
	}];
	testCases.forEach((testObj) => {
		const result = validateInput(INPUT_VALIDATION_SCHEMA, testObj);
		console.log(result);
	});
	console.log('Fin');
};

export const main = async () => {
	await validateInputTest();
	console.log('Fin');
};

main();
