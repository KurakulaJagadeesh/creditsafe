const loadSwaggerDefaults = (swaggerSchema, inputValidationPath, outputValidationPath) => {
	// All the defaults are based on swagger file and its paths
	const schemaPath = swaggerSchema.components.schemas;
	return {
		INPUT_VALIDATION_SCHEMA: schemaPath[inputValidationPath],
		OUTPUT_VALIDATION_SCHEMA: swaggerSchema.paths[outputValidationPath].get.responses[200].content['application/json'].schema,
		MESSAGE_TYPES: schemaPath.CreditsafeGlobalDataMessageType.enum.reduce((a, v) => ({ ...a, [v]: v }), {}),
		MESSAGE_CODES: schemaPath.CreditsafeGlobalDataMessageCode.enum.reduce((a, v) => ({ ...a, [v]: v }), {}),
	};
};

export default loadSwaggerDefaults;
