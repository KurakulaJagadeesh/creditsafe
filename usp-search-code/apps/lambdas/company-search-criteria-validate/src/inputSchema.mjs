const inputSchema = {
	type: 'object',
	required: ['body'],
	properties: {
		body: {
			type: 'object',
			required: ['query', 'criteriaSets'],
			properties: {
				query: {
					type: 'object',
				},
				criteriaSets: {
					type: 'array',
				},
			},
		},
	},
};

export default inputSchema;
