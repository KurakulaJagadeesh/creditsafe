export const exactTermQueryBuilder = (exactTerms) => {
	const exactTermQueries = [];
	exactTerms.forEach((exactTerm) => {
		exactTermQueries.push({
			match_phrase: {
				'name.synonyms': {
					query: exactTerm,
					slop: 0,
				},
			},
		});
	});

	const query = {
		bool: {
			must: exactTermQueries,
		},
	};
	return query;
};

export default exactTermQueryBuilder;
