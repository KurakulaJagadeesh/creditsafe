const httpResponseHeaderHandler = () => ({
	after: (request) => {
		request.response.headers = {
			...request.response.headers,
			'x-cs-searchSource': 'usp',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
		};
	},
});

export default httpResponseHeaderHandler;
