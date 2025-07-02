import constants from '../constants.mjs';

const apiRequestMappings = {
	default: {
		city: [constants.ADDRESS_CITY],
		companyName: [constants.COMPANY_NAME],
		companyNumber: [constants.COMPANY_NUMBER],
		dateOfBirth: [constants.DATE_OF_BIRTH],
		firstName: [constants.FIRST_NAME],
		houseNo: [constants.ADDRESS_LINE_1],
		id: [constants.DIRECTOR_COMPANY_ID],
		lastName: [constants.LAST_NAME],
		localDirectorNumber: [constants.DIRECTOR_ID],
		peopleId: [constants.PEOPLE_ID],
		postCode: [constants.POSTCODE],
		province: [constants.ADDRESS_PROVINCE],
		regNo: [constants.REG_NO],
		safeNo: [constants.SAFE_NO],
		status: [constants.STATUS],
		street: [constants.ADDRESS_LINE_2],
		type: [constants.REG_TYPE],
	},
	DE: {
		street: [constants.ADDRESS_LINE_1],
	},
	GB: {
		ageMax: [constants.AGE_MAX],
		ageMin: [constants.AGE_MIN],
	},
	IE: {
		ageMax: [constants.AGE_MAX],
		ageMin: [constants.AGE_MIN],
		safeNo: [constants.SAFE_NO],
	},
	NO: {
		postCode: [constants.ADDRESS_POST_CODE],
	},
	US: {
		safeNo: [constants.SAFE_NO],
		street: [constants.ADDRESS_LINE_1],
	},
};

export default apiRequestMappings;
