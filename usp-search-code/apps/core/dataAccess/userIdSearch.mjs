import { executeQuery } from './opensearchDAO.mjs';

/**
 * Fetch user's activityCodeDescription by userId from OpenSearch.
 * @param {string} userId - BackOfficeID of the user.
 * @returns {Promise<string|null>} Promise that resolves to activityCodeDescription or null.
 */
export const getUserById = async (userId) => {
	const index = 'cs-users-company-search';

	const query = {
		query: {
			term: {
				userId: {
					value: userId,
				},
			},
		},
	};

	const response = await executeQuery(query, null, index);
	if (response.total === 0 || !response.results.length) {
		return null;
	}
	// eslint-disable-next-line no-underscore-dangle
	const results = response.results[0].result._source;
	return results.activityCodeDescription || null;
};

export default getUserById;
