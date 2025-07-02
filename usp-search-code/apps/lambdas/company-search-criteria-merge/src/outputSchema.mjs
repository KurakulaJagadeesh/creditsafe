const outputSchema = {
	type: 'object',
	required: ['aggregate', 'countries'],
	properties: {
		countries: {
			type: 'array',
		},
		aggregate: {
			type: 'array',
		},
	},
};

export default outputSchema;
