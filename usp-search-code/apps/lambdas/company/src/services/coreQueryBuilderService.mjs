import { coreQueryTemplates } from '../queryTemplates/coreQueries.mjs';
import { personalisationQuery } from '../personalisation/handler.mjs';

export const coreQueryBuilder = (inputObj) => {
	const { countryCode, activityCodeDescription } = inputObj;

	const query = {
		bool: {
			...(coreQueryTemplates[countryCode] || coreQueryTemplates.defaultCore),
		},
	};

	if (activityCodeDescription) {
		const { descriptionQueries } = personalisationQuery(inputObj);
		if (descriptionQueries.length) {
			query.bool.should = [...(query.bool.should || []), ...descriptionQueries];
		}
	}

	return query;
};

export default coreQueryBuilder;
