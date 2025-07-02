const inputSchema = {
	type: 'object',
	required: ['body'],
	properties: {
		body: {
			type: 'object',
			required: ['countriesCriteria'],
			properties: {
				countriesCriteria: {
					type: 'array',
				},
				aggregate: {
					type: 'object',
				},
			},
		},
	},
};

export default inputSchema;
