import activityCodeLookup from './activityCodeLookup.mjs';

const generateDescriptionQuery = (sections) => {
	if (!sections) return [];
	return Object.entries(sections).map(([key, boost]) => ({
		term: {
			activityCodeDescription: {
				value: key,
				boost,
			},
		},
	}));
};

/**
 * Main function to generate personalisation query based on user and country.
 * @param {object} event - Input containing countryCode and userId.
 * @param {string} event.countryCode - Country code (e.g. "ie").
 * @param event.activityCodeDescription
 * @returns {object} Object containing `descriptionQueries` array.
 */
export const personalisationQuery = ({ countryCode, activityCodeDescription }) => {
	if (!activityCodeDescription) {
		return { descriptionQueries: [] };
	}

	const lookupData = activityCodeLookup[countryCode] || {};
	const sections = lookupData[activityCodeDescription] || null;
	const descriptionQueries = generateDescriptionQuery(sections);

	return { descriptionQueries };
};

export default personalisationQuery;
