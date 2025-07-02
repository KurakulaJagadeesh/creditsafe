const inputSchema = {
	type: 'object',
	required: ['queryStringParameters'],
	properties: {
		queryStringParameters: {
			type: 'object',
			required: ['countryCode'],
			properties: {
				countryCode: {
					type: 'string',
					description: 'Ensure a CSV of two capital letters',
					pattern: '^[A-Z]{2}',
				},
			},
		},
	},
};

export default inputSchema;
