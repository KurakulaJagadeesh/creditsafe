import { validateInput, validateOutput } from '../services/validationService.mjs';

const inputOutputValidator = (INPUT_VALIDATION_SCHEMA, OUTPUT_VALIDATION_SCHEMA, criteriaObject) => ({
	before: (request) => {
		const { queryStringParameters } = request.event;
		validateInput(INPUT_VALIDATION_SCHEMA, queryStringParameters, criteriaObject.searchCriteria);
	},
	after: (request) => {
		const { response } = request;
		validateOutput(OUTPUT_VALIDATION_SCHEMA, response);
	},
});

export default inputOutputValidator;
