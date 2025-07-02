// eslint-disable-next-line import/extensions
import pick from 'lodash/pick.js';
import { apiRequestFilterFields, apiRequestFilterFieldMappings } from '../mappings/apiRequestFilterMappings.mjs';

export const generateFilterQueries = (filterParams, countryCode, filterMappings) => Object.entries(filterParams).map(([key, value]) => {
	// If the key is either 'ageMax' or 'ageMin', generate a range query
	if (key === 'ageMax' || key === 'ageMin') {
		const rangeKey = key === 'ageMax' ? 'gte' : 'lte';
		return {
			range: {
				dateOfBirth: {
					[rangeKey]: `now-${value}y/d`,
				},
			},
		};
	}
	if (key === 'dateOfBirth') {
		return {
			range: {
				dateOfBirth: {
					lt: `${value}||/M+1M`,
					gte: `${value}||/M`,
				},
			},
		};
	}
	// If the value is a CSV, generate a terms query; otherwise, generate a term query
	// E.g. status = "Active, NonActive" => terms: { status: ["Active", "NonActive"] }
	const valueArray = value.replace(' ', '').split(',');
	const generatedQuery = valueArray.length > 1 ? {
		terms: {
			[filterMappings[countryCode]?.[key] || filterMappings.default[key]]: [...valueArray],
		},
	} : {
		term: {
			[filterMappings[countryCode]?.[key] || filterMappings.default[key]]: {
				value,
			},
		},
	};
	return generatedQuery;
});

export const coreFilterBuilder = (inputObj) => {
	const { countryCode } = inputObj;
	// get the available filter fields for the country specified
	// check if a filter param has been supplied to the API
	// generate filter query using corresponding index field e.g. type => regType
	// map value to elastic equivalent e.g. Ltd => Limited
	const filterParams = pick(inputObj, [...new Set([...apiRequestFilterFields[countryCode] ?? [], ...apiRequestFilterFields.default ?? []])]);
	const filters = generateFilterQueries(filterParams, countryCode, apiRequestFilterFieldMappings);

	return filters;
};
