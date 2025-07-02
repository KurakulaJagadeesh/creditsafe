import assert from 'node:assert';
import { describe, it } from 'node:test';

import { retrieveBaseUrl, getWithRetry } from '../integrationTests/integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('Company Autocomplete API Integration Tests', () => {
	const testCases = [
		{ countryCode: 'FI', name: 'cre' },
		{ countryCode: 'ES', name: 'test' },
		{ countryCode: 'MX', name: 'TEST SOURCING SA DE CV' },
		{ countryCode: 'CH', name: 'team' },
		{ countryCode: 'LI', name: 'credit' },
		{ countryCode: 'KR', name: 'info' },
		{ countryCode: 'LU', name: 'goo' },
		{ countryCode: 'AU', name: 'creditsafe' },
		{ countryCode: 'ID', name: 'wat' },
		{ countryCode: 'VN', name: 'the' },
		{ countryCode: 'TH', name: 'tcs' },
		{ countryCode: 'MY', name: 'acc' },
		{ countryCode: 'AF', name: 'Aus' },
		{ countryCode: 'KH', name: 'kine' },
		{ countryCode: 'MM', name: 'credit' },
	];
	testCases.forEach(({ countryCode, name }) => {
		it(`should return results for countryCode=${countryCode} and name=${name}`, async () => {
			const queryString = `?countryCode=${countryCode}&name=${name}`;
			const response = await getWithRetry(`${baseUrl}/companies/autocomplete${queryString}`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			response.data.companies.forEach((company) => {
				assert.ok(company.name.toLowerCase().startsWith(name.toLowerCase()), true);
			});
		});
	});
});
