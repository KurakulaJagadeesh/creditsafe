const outputSchema = {
	type: 'object',
	required: [],
	properties: {
		isQueryValid: {
			type: 'string',
		},
		error: {
			type: 'string',
		},
		details: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
	},
};

export default outputSchema;
