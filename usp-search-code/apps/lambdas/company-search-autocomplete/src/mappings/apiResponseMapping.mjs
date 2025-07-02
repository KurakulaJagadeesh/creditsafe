import constants from '../constants.mjs';

const apiResponseMappings = {
	default: {
		city: constants.ADDRESS_CITY,
		connectId: constants.CONNECT_ID,
		creditLimit: constants.CREDIT_LIMIT,
		employeeTo: constants.EMPLOYEES_TO,
		name: constants.NAME,
		safeNo: constants.SAFE_NO,
		status: constants.STATUS,
		turnoverTo: constants.TURNOVER_TO,
	},
	AT: {
		companyType: constants.COMPANY_TYPE,
		regType: constants.REG_TYPE,
	},
	BE: {
		legalForm: constants.LEGAL_FORM,
		regType: constants.REG_TYPE,
	},
	DE: {
		regType: constants.REG_TYPE,
		statusDescription: constants.STATUS_DESCRIPTION,
	},
	DK: {
		officeType: constants.OFFICE_TYPE,
		organizationFormDescriptionEnglish: constants.ORGANIZATION_FORM_DESCRIPTION_EN,
		statusDescription: constants.STATUS_DESCRIPTION_EN,
	},
	FR: {
		alternateName: constants.ALTERNATE_NAME,
		countryCode: constants.COUNTRY_CODE,
		legalForm: constants.LEGAL_FORM,
		officeType: constants.OFFICE_TYPE,
		shareCapital: constants.SHARE_CAPITAL,
		tradingNames: constants.TRADING_NAMES,
	},
	GB: {
		county: constants.ADDRESS_COUNTY,
		regType: constants.REG_TYPE,
		statusDescription: constants.STATUS_DESCRIPTION,
	},
	IE: {
		county: constants.ADDRESS_COUNTY,
		regType: constants.REG_TYPE,
		statusDescription: constants.STATUS_DESCRIPTION,
	},
	IT: {
		legalForm: constants.LEGAL_FORM,
		officeType: constants.OFFICE_TYPE,
	},
	NL: {
		officeType: constants.OFFICE_TYPE,
		statusDescription: constants.STATUS_DESCRIPTION,
	},
	NO: {
		legalForm: constants.LEGAL_FORM,
		officeType: constants.OFFICE_TYPE,
	},
	SE: {
		legalGroup: constants.LEGAL_GROUP,
	},
};

export default apiResponseMappings;
