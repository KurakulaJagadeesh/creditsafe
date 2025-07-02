import constants from '../constants.mjs';

const apiRequestMappings = {
	default: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
	},
	AT: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		regNo: constants.REG_NO_RAW,
		vatNo: constants.VAT_NO_RAW,
	},
	DE: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		regNo: constants.REG_NO_RAW,
		vatNo: constants.VAT_NO_RAW,
	},
	DK: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
	},
	FR: {
		name: [constants.NAME, constants.TRADING_NAMES],
		city: constants.ADDRESS_CITY,
	},
	GB: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		vatNo: constants.VAT_NO_RAW,
	},
	IE: {
		name: constants.NAME,
		postCode: constants.ADDRESS_POST_CODE_RAW,
	},
	IT: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		vatNo: constants.VAT_NO_RAW,
	},
	NL: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		regNo: constants.REG_NO_RAW,
		vatNo: constants.VAT_NO_RAW,
	},
	NO: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
	},
	SE: {
		name: constants.NAME,
		city: constants.ADDRESS_CITY,
		postCode: constants.ADDRESS_POST_CODE_RAW,
		regNo: constants.REG_NO_RAW,
	},
};

export default apiRequestMappings;
