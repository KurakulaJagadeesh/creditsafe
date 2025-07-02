const outputSchema = {
	type: 'object',
	required: ['countries', 'languages', 'criteriaSets'],
	properties: {
		countries: {
			type: 'array',
		},
		languages: {
			type: 'array',
		},
		criteriaSets: {
			type: 'array',
		},
	},
};

export default outputSchema;
