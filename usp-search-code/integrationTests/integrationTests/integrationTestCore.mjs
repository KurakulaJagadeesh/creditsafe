import assert from 'node:assert';
import axios from 'axios';
import axiosRetry from 'axios-retry';

/**
 * Retrieves the base URL for the API based on the current NODE_ENV.
 * @returns {string} The base URL for the API.
 * @example
 * // returns "https://api.usp.searchdev.creditsafe.com/companies" when NODE_ENV is 'dev'
 * retrieveBaseUrl();
 */const retrieveBaseUrl = () => {
	const replaceString = 'stage';
	const template = `https://api.usp.search${replaceString}.creditsafe.com`;

	let modifiedUrl = '';
	switch (process.env.NODE_ENV) {
		case 'dev':
			modifiedUrl = template.replace(replaceString, 'dev');
			break;
		case 'test':
			modifiedUrl = template.replace(replaceString, 'test');
			break;
		case 'staging':
			modifiedUrl = template.replace(replaceString, 'stage');
			break;
		case 'prod':
			modifiedUrl = template.replace(replaceString, '');
			break;
		default:
			modifiedUrl = template;
	}

	console.log(`Modified URL: ${modifiedUrl}`);
	return modifiedUrl;
};

// Configure axios-retry
axiosRetry(axios, {
	retries: 3,
	retryDelay: axiosRetry.exponentialDelay,
	shouldResetTimeout: true,
	onRetry: (err) => {
		console.log(`Retry attempt #${err}`);
	},
	retryCondition: (error) => error.expectedStatusCode === 200 && error.response.status !== 200,
});

// Function to perform GET with retry
const getWithRetry = async (url, expectedStatusCode = 200) => {
	try {
		const response = await axios.get(url, { expectedStatusCode });
		if (response.status === expectedStatusCode) {
			return response;
		}
		throw new Error(
			`Expected status code ${expectedStatusCode}, but received ${response.status}`,
		);
	} catch (error) {
		if (error.response) {
			if (error.response.status === expectedStatusCode) {
				// If the received status matches the expected, return the response
				return error.response;
			}
			// For other status codes, rethrow to let axios-retry handle it based on retryCondition
		}
		// For network or other errors, rethrow to let axios-retry handle it
		console.log(`Error: ${error}`);
		assert.equal(error.response.status, 200);

		return null; // Ensure a value is returned at the end
	}
};

export { retrieveBaseUrl, getWithRetry };
