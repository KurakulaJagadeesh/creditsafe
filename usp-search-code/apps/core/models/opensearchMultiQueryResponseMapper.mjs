const createOpensearchMultiQueryResponse = (response) => {
	const responseDTO = response.body.responses.map((item) => {
		const { total: { value: total }, hits } = item.hits;
		return {
			total,
			resultsArray: hits,
		};
	});

	return responseDTO;
};

export default createOpensearchMultiQueryResponse;
