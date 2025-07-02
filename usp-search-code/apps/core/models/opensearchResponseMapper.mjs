const createOpensearchResponse = (elasticResponseObj, avgScore) => {
	// Below is the correct map for Opensearch
	const { total: { value: total }, hits } = elasticResponseObj.body.hits;

	const responseDTO = {
		total,
		results: hits.map((hit) => ({ avgScore, result: { ...hit } })),
	};

	return responseDTO;
};

export default createOpensearchResponse;
