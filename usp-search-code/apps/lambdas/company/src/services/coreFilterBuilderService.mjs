// eslint-disable-next-line import/extensions
import pick from 'lodash/pick.js';
import { apiRequestFilterFields, apiRequestFilterFieldMappings } from '../mappings/apiRequestFilterMappings.mjs';
import SEARCH_MODE from '../models/searchMode.mjs';
import generateUSfilterQuery from './usFilterQueryBuilderService.mjs';

export const generateFilterQueries = (filterParams, countryCode, filterMappings, searchMode = SEARCH_MODE.DEFAULT) => {
	// Generate the US-specific filter query if applicable
	const usFilterQuery = countryCode === 'US' ? generateUSfilterQuery(countryCode, searchMode) : null;

	const generatedQuery = Object.entries(filterParams).map(([key, value]) => {
		// If the value is a CSV, generate a terms query; otherwise, generate a term query
		const valueArray = value.replace(' ', '').split(',');
		return valueArray.length > 1
			? {
				terms: {
					[filterMappings[countryCode]?.[key] || filterMappings.default[key]]: [...valueArray],
				},
			}
			: {
				term: {
					[filterMappings[countryCode]?.[key] || filterMappings.default[key]]: {
						value,
					},
				},
			};
	});

	return usFilterQuery ? [usFilterQuery, ...generatedQuery] : generatedQuery;
};

export const coreFilterBuilder = (inputObj) => {
	const { countryCode, searchMode } = inputObj;
	// get the available filter fields for the country specified
	// check if a filter param has been supplied to the API
	// generate filter query using corresponding index field e.g. type => regType
	// map value to elastic equivalent e.g. Ltd => Limited
	const filterParams = pick(inputObj, apiRequestFilterFields[countryCode] || apiRequestFilterFields.default);
	const filters = generateFilterQueries(filterParams, countryCode, apiRequestFilterFieldMappings, searchMode);

	return filters;
};
