import constants from '../constants.mjs';

const queryFieldMappings = () => {
	const queryFieldMappingsObj = {
		default: {
			address: {
				city: {
					default: [constants.ADDRESS_CITY],
					fallback: [constants.ADDRESS_CITY],
					plain: [constants.ADDRESS_CITY],
					synonym: [constants.ADDRESS_CITY_SYNONYMS],
					raw: [constants.ADDRESS_CITY_RAW],
					substr: [constants.ADDRESS_CITY],
				},
				line1: {
					default: [constants.ADDRESS_LINE_1],
					fallback: [constants.ADDRESS_LINE_1],
					plain: [constants.ADDRESS_LINE_1],
					synonym: [constants.ADDRESS_LINE_1],
					raw: [constants.ADDRESS_LINE_1_RAW],
					substr: [constants.ADDRESS_LINE_1],
				},
				line2: {
					default: [constants.ADDRESS_LINE_2],
					fallback: [constants.ADDRESS_LINE_2],
					plain: [constants.ADDRESS_LINE_2],
					synonym: [constants.ADDRESS_LINE_2],
					raw: [constants.ADDRESS_LINE_2_RAW],
					substr: [constants.ADDRESS_LINE_2],
				},
				simpleValue: {
					default: [constants.ADDRESS_SIMPLE_VALUE],
					fallback: [constants.ADDRESS_SIMPLE_VALUE],
					plain: [constants.ADDRESS_SIMPLE_VALUE],
					synonym: [constants.ADDRESS_SIMPLE_VALUE],
					raw: [constants.ADDRESS_SIMPLE_VALUE_KEYWORD],
					substr: [constants.ADDRESS_SIMPLE_VALUE],
				},
			},
			company: {
				name: {
					default: [constants.COMPANIES_NAME],
					fallback: [constants.COMPANIES_NAME_WILDCARD],
					plain: [constants.COMPANIES_NAME_PLAIN],
					synonym: [constants.COMPANIES_NAME_SYNONYMS],
					raw: [constants.COMPANIES_NAME_RAW],
					substr: [constants.COMPANIES_NAME_PLAIN],
				},
			},
			firstName: {
				default: [constants.FIRST_NAME],
				fallback: [constants.FIRST_NAME_WILDCARD],
				plain: [constants.FIRST_NAME_PLAIN],
				synonym: [constants.FIRST_NAME_SYNONYMS],
				raw: [constants.FIRST_NAME_RAW],
				substr: [constants.FIRST_NAME_PLAIN],
			},
			lastName: {
				default: [constants.LAST_NAME],
				fallback: [constants.LAST_NAME_WILDCARD],
				plain: [constants.LAST_NAME_PLAIN],
				synonym: [constants.LAST_NAME_SYNONYMS],
				raw: [constants.LAST_NAME_RAW],
				substr: [constants.LAST_NAME_PLAIN],
			},
		},
		GB: {
			address: {
				province: {
					default: [constants.ADDRESS_PROVINCE],
					fallback: [constants.ADDRESS_PROVINCE_WILDCARD],
					plain: [constants.ADDRESS_PROVINCE],
					synonym: [constants.ADDRESS_PROVINCE],
					raw: [constants.ADDRESS_PROVINCE_RAW],
					substr: [constants.ADDRESS_PROVINCE_NGRAM],
				},
			},
		},
		NO: {
			address: {
				postCode: {
					default: [constants.ADDRESS_POST_CODE],
					fallback: [constants.ADDRESS_POST_CODE_WILDCARD],
					plain: [constants.ADDRESS_POST_CODE],
					synonym: [constants.ADDRESS_POST_CODE],
					raw: [constants.ADDRESS_POST_CODE_RAW],
					substr: [constants.ADDRESS_POST_CODE_NGRAM],
				},
			},
		},
	};

	return queryFieldMappingsObj;
};

export default queryFieldMappings;
