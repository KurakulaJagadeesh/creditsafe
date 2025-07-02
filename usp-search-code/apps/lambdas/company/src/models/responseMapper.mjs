// eslint-disable-next-line import/extensions
import get from 'lodash/get.js';
import apiResponseMapping from '../mappings/apiResponseMappings.mjs';
import customApiResponseMappers from './customResponseMappers.mjs';

const getNestedValue = (obj, path) => {
	if (!path || !obj) return null;
	// Handle arrayPath and field explicitly
	if (typeof path === 'object' && path.arrayPath && path.field) {
		const array = path.arrayPath.split('.').reduce((acc, key) => acc?.[key], obj);
		if (Array.isArray(array)) { return array.map((item) => item[path.field]); }
		return null;
	}
	// Standard nested path resolution for strings
	return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

const mapToResponseModel = (results, correlationId) => {
	let companies = results.results.map((x) => {
		const { result: { _source: resultObj } = { _source: {} } } = x;

		let company = {
			activityCode: resultObj?.activityCodes?.join(','), // comma separated list
			acronym: resultObj?.acronym,
			additionalData: {
				alternateName: resultObj?.alternateName,
				isOffline: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.isOffline),
				registeredCity: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.registeredCity) ?? resultObj?.registeredCity,
			},
			address: {
				city: resultObj?.address?.city,
				county: resultObj?.address?.county,
				houseNo: resultObj?.address?.houseNo,
				postCode: resultObj?.address?.postCode?.raw ?? resultObj?.address?.postCode,
				province: resultObj?.address?.province,
				simpleValue: resultObj?.address?.simpleValue,
				state: resultObj?.address?.state,
				street: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.street) ?? resultObj?.street,
				line1: resultObj?.address?.line1,
				line2: resultObj?.address?.line2,
				line3: resultObj?.address?.line3,
				telephone: resultObj?.address?.telephone?.raw ?? resultObj?.address?.telephone,
			},
			alternatives: resultObj?.alternative,
			coefficient: resultObj?.coefficientLinear,
			country: resultObj?.countryCode,
			dateOfLatestAccounts: resultObj?.dateOfLatestAccounts ?? resultObj?.lastAccountsDate,
			dateOfLatestChange: resultObj?.dateOfLatestChange ?? resultObj?.lastUpdateDate,
			fileNo: resultObj?.fileNo,
			groupId: resultObj?.groupId,
			id: resultObj?.connectId,
			legalForm: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.legalForm) ?? resultObj?.legalForm,
			legalGroup: resultObj?.legalGroup,
			matchScore: x?.avgScore,
			name: resultObj?.name,
			officeType: resultObj?.officeType,
			phoneNumbers: resultObj?.phoneNumbers?.raw,
			previousNames: resultObj?.previousNames,
			regNo: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.regNo) ?? resultObj?.regNo?.raw ?? resultObj?.regNo,
			safeNo: resultObj?.safeNo,
			significantItems: resultObj?.significantItems,
			status: resultObj?.status,
			statusDescription: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.statusDescription) ?? resultObj?.statusDescription,
			tradingNames: resultObj?.tradingNames,
			type: resultObj?.regType,
			vatNo: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.vatNo) ?? resultObj?.vatNo?.raw,
			website: getNestedValue(resultObj, apiResponseMapping[resultObj?.countryCode]?.website) ?? resultObj?.urls,
		};
		// Apply custom response mapping if available
		company = customApiResponseMappers(resultObj?.countryCode, company, resultObj);
		return company;
	});

	// Parse and stringify to remove undefined fields
	companies = JSON.parse(JSON.stringify(companies));

	const { page, pageSize, total } = results;
	const result = {
		correlationId,
		maxScore: companies.length > 0 && companies[0].matchScore,
		totalSize: total,
		page,
		pageSize,
		companies,
	};
	return result;
};

export default mapToResponseModel;
