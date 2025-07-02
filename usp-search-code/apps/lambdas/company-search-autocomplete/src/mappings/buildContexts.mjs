/* eslint-disable import/prefer-default-export */

export const buildContexts = (countryCode, contextField, contextValue) => {
	// Override logic for FR and NL
	if (['FR', 'NL'].includes(countryCode)) {
		return {
			officeType: 'headoffice',
			...(contextField && contextValue ? { [contextField]: contextValue.toLowerCase() } : {}),
		};
	}

	// Default logic
	return contextField && contextValue
		? { [contextField]: contextValue.toLowerCase() }
		: { country: countryCode.toLowerCase() };
};
