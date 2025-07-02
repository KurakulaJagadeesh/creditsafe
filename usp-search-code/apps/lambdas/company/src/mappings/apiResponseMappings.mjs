import constants from '../constants.mjs';

const apiResponseMapping = {
	AT: {
		statusDescription: constants.STATUS_DESCRIPTION_EN,
		legalForm: constants.LEGAL_FORM_EN,
	},
	BE: {
		street: constants.ADDRESS_STREET,
		dateOfLatestAccounts: constants.LATEST_ACCOUNTS,
	},
	DE: {
		registeredCity: constants.ADDRESS_REGISTERED_CITY,
	},
	DK: {
		statusDescription: constants.STATUS_DESCRIPTION_EN,
	},
	ES: {
		isOffline: constants.IS_OFFLINE,
	},
	GB: {
		regNo: constants.REG_NUMBER,
	},
	IE: {
		website: constants.WEBSITE_URLS_RAW,
	},
	SE: {
		statusDescription: constants.STATUS_DESCRIPTION_EN,
		// Agreed to include line 1 in street field to satisfy data services requirements
		street: constants.ADDRESS_LINE_1,
		// Don't use regNo.raw as it is not indexed in OS
		regNo: constants.REG_NO,
	},
	US: {
		vatNo: constants.VAT_NO,
		website: { arrayPath: 'urls', field: 'raw' },
	},
};

export default apiResponseMapping;
