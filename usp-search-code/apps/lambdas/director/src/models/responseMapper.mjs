// eslint-disable-next-line import/extensions
import get from 'lodash/get.js';
import apiResponseMapping from '../mappings/apiResponseMappings.mjs';

const mapToResponseModel = (results) => {
	let directors = results.results.map((x) => {
		const { result: { _source: resultObj } = { _source: {} } } = x;

		return {
			address: {
				city: resultObj?.address?.city,
				county: resultObj?.address?.county,
				houseNo: resultObj?.address?.houseNo,
				line1: resultObj?.address?.line1,
				line2: resultObj?.address?.line2,
				line3: resultObj?.address?.line3,
				postCode: resultObj?.address?.postCode?.raw,
				province: resultObj?.address?.province,
				simpleValue: resultObj?.address?.simpleValue,
				state: resultObj?.address?.state,
				street: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.street) ?? resultObj?.street,
				telephone: resultObj?.address?.telephone?.raw,
			},
			companyCount: resultObj?.companyCount,
			country: resultObj?.countryCode,
			dateOfBirth: resultObj?.dateOfBirth,
			dateOfLatestChange: resultObj?.companies?.[0]?.lastUpdateDate,
			firstName: resultObj?.firstName,
			lastName: resultObj?.lastName,
			localDirectorNumber: resultObj?.localDirectorNumber,
			matchScore: x?.avgScore,
			peopleId: resultObj?.peopleId,
			representativeCompany: {
				appointmentStatus: resultObj?.companies?.[0]?.status,
				charterNumber: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.charterNumber),
				connectId: resultObj?.companies?.[0]?.connectId,
				limit: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.limit),
				name: resultObj?.companies?.[0]?.name,
				regNo: resultObj?.companies?.[0]?.regNo?.raw ?? resultObj?.companies?.[0]?.regNo,
				safeNo: resultObj?.companies?.[0]?.safeNo,
			},
			title: get(resultObj, apiResponseMapping[resultObj?.countryCode]?.title),
		};
	});

	// Parse and stringify to remove undefined fields
	directors = JSON.parse(JSON.stringify(directors));

	const { page, pageSize, total } = results;
	const result = {
		correlationId: '', // Need to map it with connect request id
		maxScore: directors.length > 0 && directors[0].matchScore,
		totalSize: total,
		page,
		pageSize,
		directors,
	};
	return result;
};

export default mapToResponseModel;
