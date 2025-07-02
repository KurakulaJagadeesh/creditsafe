import constants from '../constants.mjs';

const commonFilters = [constants.COUNTRY_CODE, constants.STATUS];

export const apiRequestFilterFields = {
	default: [...commonFilters, constants.OFFICE_TYPE],
	AT: [...commonFilters, constants.OFFICE_TYPE, constants.TYPE, constants.COMPANY_TYPE],
	BE: [...commonFilters, constants.OFFICE_TYPE, constants.TYPE],
	CA: [...commonFilters, constants.PROVINCE, constants.OFFICE_TYPE],
	DE: [...commonFilters, constants.PROVINCE, constants.OFFICE_TYPE, constants.TYPE],
	DK: [...commonFilters, constants.PROVINCE, constants.OFFICE_TYPE],
	FR: [...commonFilters, constants.OFFICE_TYPE, constants.PROVINCE, constants.TYPE],
	GB: [...commonFilters, constants.TYPE],
	IE: [...commonFilters, constants.TYPE],
	IT: [...commonFilters, constants.PROVINCE, constants.OFFICE_TYPE, constants.TYPE],
	NL: [...commonFilters, constants.OFFICE_TYPE, constants.TYPE],
	NO: [...commonFilters, constants.OFFICE_TYPE, constants.TYPE],
	SE: [...commonFilters, constants.OFFICE_TYPE, constants.TYPE],
	US: [...commonFilters, constants.OFFICE_TYPE, constants.PROVINCE],
};

export const apiRequestFilterFieldMappings = {
	default: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		type: constants.REG_TYPE,
		status: constants.STATUS,
	},
	AT: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
		companyType: constants.COMPANY_TYPE,
	},
	BE: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	CA: {
		province: constants.ADDRESS_PROVINCE,
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
	},
	DE: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	DK: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		province: constants.ADDRESS_PROVINCE_RAW,
		status: constants.STATUS,
	},
	FR: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		province: constants.ADDRESS_PROVINCE_RAW,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	GB: {
		countryCode: constants.COUNTRY_CODE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	IT: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		province: constants.ADDRESS_PROVINCE_RAW,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	NL: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	NO: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	SE: {
		countryCode: constants.COUNTRY_CODE,
		officeType: constants.OFFICE_TYPE,
		status: constants.STATUS,
		type: constants.REG_TYPE,
	},
	US: {
		countryCode: constants.COUNTRY_CODE,
		status: constants.STATUS,
		province: constants.ADDRESS_PROVINCE_KEYWORD,
		officeType: constants.OFFICE_TYPE,
	},
};
