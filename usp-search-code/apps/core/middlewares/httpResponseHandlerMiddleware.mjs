const httpResponseHeaderHandler = () => ({
	after: (request) => {
		request.response.headers = {
			...request.response.headers,
			'x-cs-searchSource': 'usp',
			'Access-Control-Allow-Origin': 'https://usp-swagger-ui.s3.eu-west-1.amazonaws.com',
			'Access-Control-Allow-Methods': 'GET',
		};
	},
});

export default httpResponseHeaderHandler;
