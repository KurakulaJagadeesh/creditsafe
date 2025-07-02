import constants from '../constants.mjs';

const commonFilters = [constants.COUNTRY_CODE, constants.DATE_OF_BIRTH, constants.STATUS];

export const apiRequestFilterFields = {
	default: [...commonFilters],
	BE: [constants.DIRECTOR_COMPANY_ID],
	DE: [constants.DIRECTOR_COMPANY_ID, constants.TYPE],
	FR: [constants.DIRECTOR_COMPANY_ID],
	GB: [constants.AGE_MAX, constants.AGE_MIN, constants.COMPANY_NUMBER, constants.DIRECTOR_COMPANY_ID,
		constants.REG_NO, constants.TYPE],
	IE: [constants.AGE_MAX, constants.AGE_MIN, constants.COMPANY_NUMBER, constants.DIRECTOR_COMPANY_ID,
		constants.REG_NO, constants.SAFE_NO, constants.TYPE],
	NO: [constants.COMPANY_NUMBER, constants.DIRECTOR_COMPANY_ID, constants.REG_NO, constants.TYPE],
	US: [constants.PROVINCE, constants.SAFE_NO],
};

export const apiRequestFilterFieldMappings = {
	default: {
		companyNumber: constants.COMPANIES_REG_NO,
		countryCode: constants.COUNTRY_CODE,
		dateOfBirth: constants.DATE_OF_BIRTH,
		id: constants.COMPANIES_CONNECT_ID,
		regNo: constants.COMPANIES_REG_NO,
		status: constants.COMPANIES_STATUS,
		type: constants.COMPANIES_REG_TYPE,
	},
	GB: {
		ageMax: constants.AGE_MAX,
		ageMin: constants.AGE_MIN,
	},
	IE: {
		ageMax: constants.AGE_MAX,
		ageMin: constants.AGE_MIN,
		safeNo: constants.COMPANIES_SAFE_NO,
	},
	NO: {
		companyNumber: constants.COMPANIES_REG_NO_RAW,
		regNo: constants.COMPANIES_REG_NO_RAW,
	},
	US: {
		province: constants.ADDRESS_PROVINCE,
		safeNo: constants.COMPANIES_SAFE_NO,
	},
};
