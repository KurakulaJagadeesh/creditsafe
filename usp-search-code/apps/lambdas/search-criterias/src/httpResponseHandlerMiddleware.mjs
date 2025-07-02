const httpResponseHeaderHandler = () => ({
	after: (request) => {
		request.response.headers = {
			...request.response.headers,
			'x-cs-searchSource': 'usp',
		};
	},
});

export default httpResponseHeaderHandler;
