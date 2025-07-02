import { coreQueryTemplates } from '../queryTemplates/coreQueries.mjs';

export const coreQueryBuilder = (inputObj) => {
	const { countryCode } = inputObj;

	const query = {
		bool: {
			...(coreQueryTemplates[countryCode] || coreQueryTemplates.defaultCore),
		},
	};

	return query;
};

export default coreQueryBuilder;
