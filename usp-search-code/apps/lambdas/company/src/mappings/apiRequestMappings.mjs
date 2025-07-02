import constants from '../constants.mjs';

const apiRequestMappings = {
	default: {
		acronym: [constants.ACRONYM],
		city: [constants.ADDRESS_CITY],
		companyType: [constants.COMPANY_TYPE],
		houseNo: [constants.ADDRESS_HOUSE_NUMBER],
		id: [constants.CONNECT_ID],
		name: [constants.NAME],
		officeType: [constants.OFFICE_TYPE],
		orgNo: [constants.ORG_NO],
		phoneNo: [constants.PHONE_NO],
		postCode: [constants.ADDRESS_POST_CODE],
		province: [constants.ADDRESS_PROVINCE],
		regNo: [constants.REG_NO_RAW],
		safeNo: [constants.SAFE_NO],
		simpleValue: [constants.ADDRESS_SIMPLE_VALUE],
		status: [constants.STATUS],
		street: [constants.ADDRESS_LINE_1],
		tradeName: [constants.TRADING_NAMES],
		tradingNames: [constants.TRADING_NAMES],
		type: [constants.REG_TYPE],
		vatNo: [constants.VAT_NO],
		website: [constants.WEBSITE_URLS],
	},
	AT: {
		houseNo: [constants.ADDRESS_LINE_1],
		phoneNo: [constants.ADDRESS_TELEPHONE_RAW],
		regNo: [constants.REG_NO],
		vatNo: [constants.VAT_NO_RAW],
	},
	AU: {
		vatNo: [constants.VAT_NO_RAW],
	},
	BE: {
		street: [constants.ADDRESS_STREET],
		vatNo: [constants.VAT_NO_RAW],
		regNo: [constants.REG_NO],
	},
	CA: {
		houseNo: [constants.ADDRESS_LINE_1],
		fileNo: [constants.FILE_NO],
		regNo: [constants.REG_NO],
	},
	DE: {
		houseNo: [constants.ADDRESS_LINE_1],
		phoneNo: [constants.PHONE_NOS],
		regNo: [constants.REG_NO],
	},
	DK: {
		vatNo: [constants.VAT_NO_RAW],
	},
	FI: {
		vatNo: [constants.VAT_NO_RAW],
	},
	FR: {
		postCode: [constants.ADDRESS_POST_CODE_RAW],
		vatNo: [constants.VAT_NO_RAW],
		activityCodes: [constants.ACTIVITY_CODES],
		regNo: [constants.REG_NO],
	},
	GB: {
		phoneNo: [constants.PHONE_NUMBERS],
		province: [constants.COUNTY],
		street: [constants.ADDRESS_LINE_2],
	},
	IE: {
		county: [constants.ADDRESS_COUNTY],
		street: [constants.ADDRESS_LINE_2],
	},
	IT: {
		houseNo: [constants.ADDRESS_LINE_2],
		postCode: [constants.ADDRESS_POST_CODE_RAW],
	},
	KR: {
		vatNo: [constants.VAT_NO_RAW],
	},
	NL: {
		houseNo: [constants.ADDRESS_LINE_1],
		postCode: [constants.ADDRESS_POST_CODE_RAW],
		street: [constants.ADDRESS_LINE_2],
		vatNo: [constants.VAT_NO_RAW],
	},
	NO: {
		houseNo: [constants.ADDRESS_LINE_3],
		phoneNo: [constants.PHONE_NUMBERS],
	},
	SE: {
		houseNo: [constants.ADDRESS_LINE_1],
		phoneNo: [constants.ADDRESS_TELEPHONE_RAW],
		regNo: [constants.REG_NO],
		vatNo: [constants.VAT_NO_RAW],
	},
	US: {
		regNo: [constants.REG_NO],
		website: [constants.WEBSITE_URLS],
	},
};

export default apiRequestMappings;
