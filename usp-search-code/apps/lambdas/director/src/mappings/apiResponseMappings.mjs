import constants from '../constants.mjs';

const apiResponseMapping = {
	US: {
		charterNumber: constants.COMPANIES_CHARTER_NUMBER,
		limit: constants.COMPANIES_CREDIT_LIMIT,
		title: constants.TITLE,
	},
};

export default apiResponseMapping;
