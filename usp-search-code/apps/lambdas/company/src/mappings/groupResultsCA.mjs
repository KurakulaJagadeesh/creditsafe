/* eslint-disable no-underscore-dangle */
const filterResults = (mergedResults) => {
	const groupedResults = mergedResults.reduce((acc, { result, avgScore, queryInfo }) => {
		const {
			_id, _index, _score, _source,
		} = result;
		const { groupId } = _source;

		// Helper function to extract and rename only the required fields from _source
		const extractRequiredFields = ({
			safeNo, name, status, address,
		}) => ({
			safeNo,
			name,
			status,
			simpleValue: address?.simpleValue,
			street: address?.line1,
			city: address?.city,
			province: address?.province,
			groupId,
		});

		if (!acc[groupId]) {
			// Initialize the result object with alternatives array inside _source
			acc[groupId] = {
				avgScore,
				queryInfo,
				result: {
					_id,
					_index,
					_score,
					_source: {
						..._source,
						alternative: [],
					},
				},
			};
		} else if (acc[groupId].result._source.alternative.length < 50) {
			// Limit the alternatives to be 50 for each same groupId(same as v3 logic)
			// There is no boosting/order implemented for alternative records
			acc[groupId].result._source.alternative.push(
				extractRequiredFields(_source),
			);
		}

		return acc;
	}, {});

	// Convert groupedResults object into an array of values
	return Object.values(groupedResults);
};

export default filterResults;
