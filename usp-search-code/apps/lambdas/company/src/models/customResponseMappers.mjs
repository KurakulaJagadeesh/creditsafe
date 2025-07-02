const customApiResponseMappers = (countryCode, companyObj, resultObj) => {
	switch (countryCode) {
		case 'IT':
			global.logger.debug(`IT_VAT_NO_ENABLED: ${process.env.IT_VAT_NO_ENABLED}`);

			if (String(process.env.IT_VAT_NO_ENABLED).toLowerCase() === 'true') {
				global.logger.debug('Applying custom IT mapping for VAT No');
				return ({
					...companyObj,
					additionalData: {
						...companyObj.additionalData,
						taxCode: resultObj?.taxCode,
						vatGroup: resultObj?.vatGroup,
					},
				});
			}
			return companyObj;
		// ...add more country cases here as needed...
		default:
			return companyObj;
	}
};

export default customApiResponseMappers;
