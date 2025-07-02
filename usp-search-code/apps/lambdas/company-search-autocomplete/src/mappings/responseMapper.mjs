// eslint-disable-next-line import/extensions
import get from 'lodash/get.js';
import constants from '../constants.mjs';

const apiResponseMapping = {
	DK: {
		statusDescription: constants.STATUS_DESCRIPTION_EN,
	},
	FR: {
		status: (status) => {
			const statusValue = status?.toLowerCase();
			return ['nonactive', 'inactive'].includes(statusValue) ? 'inactive' : statusValue;
		},
	},
};

/**
 * Maps a list of suggestions to a standardized response model based on the country code.
 * Removes undefined fields and empty objects from the resulting company data.
 * @param {Array<object>} suggestions - The list of suggestion objects to map.
 * @param {string} countryCode - The ISO country code used to determine country-specific mappings.
 * @returns {Array<object>} - A list of companies mapped to the standardized response model.
 */
const mapToResponseModel = (suggestions, countryCode) => {
	let companies = suggestions.map((x) => {
		const resultObj = x;

		return {
			additionalData: {
				alternateName: resultObj?.alternateName,
			},
			address: {
				city: resultObj?.address?.city,
				county: resultObj?.address?.county,
			},
			connectId: resultObj?.connectId,
			countryCode: resultObj?.countryCode,
			legalGroup: resultObj?.legalGroup,
			name: resultObj?.name,
			officeType: resultObj?.officeType,
			regNo: resultObj?.regNo?.raw,
			regType: resultObj?.regType,
			safeNo: resultObj?.safeNo,
			status: apiResponseMapping[countryCode]?.status?.(resultObj?.status) ?? resultObj?.status,
			statusDescription: get(resultObj, apiResponseMapping[countryCode]?.statusDescription) ?? resultObj?.statusDescription,
			tradingNames: resultObj?.tradingNames,
			vatNo: resultObj?.vatNo?.raw,
		};
	});

	// Parse and stringify to remove undefined fields
	companies = JSON.parse(JSON.stringify(companies));
	// To remove undefined objects like "additionalData": {}
	companies = companies.map((company) => Object.fromEntries(
		Object.entries(company).filter(
			// eslint-disable-next-line no-unused-vars
			([key, value]) => !(typeof value === 'object' && Object.values(value).length === 0),
		),
	));

	return companies;
};

export default mapToResponseModel;
