import assert from 'node:assert';
import { describe, it } from 'node:test';
import { retrieveBaseUrl, getWithRetry } from './integrationTestCore.mjs';

const baseUrl = retrieveBaseUrl();

describe('US Regression Tests', async () => {
	describe('US companysearch with countryCode', async () => {
		it('return US companies', async () => {
			const response = await getWithRetry(`${baseUrl}/companies?countries=US`);

			assert.equal(response.status, 200);
			assert.equal(response.data.companies.length > 0, true);
			assert.equal(response.data.companies.every((company) => company.country === 'US'), true);
		});
	});

	describe('US id Searches', () => {
		const idtestCases = ['US-X-US18339410'];
		idtestCases.forEach(async (testCase) => {
			it(`US company search with id:${testCase}`, async () => {
				const queryString = `?countries=US&id=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.id === `${testCase}`), true);
			});
		});
		const idregNotestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					regNo: '07350102',
				},
			},
		];
		idregNotestCases.forEach(async (testCase) => {
			it('US company search with id and regNo', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&regNo=${testCase.params.regNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idvatNotestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					vatNo: '860781195',
				},
			},
		];
		idvatNotestCases.forEach(async (testCase) => {
			it('US company search with id and vatNo', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsafeNotestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					safeNo: 'US18339410',
				},
			},
		];
		idsafeNotestCases.forEach(async (testCase) => {
			it('US company search with id and safeNo', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idsearchModetestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					searchMode: 'Default',
				},
			},
		];
		idsearchModetestCases.forEach(async (testCase) => {
			it('US company search with id and searchMode', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idcitytestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					city: 'ORO VALLEY',
				},
			},
		];
		idcitytestCases.forEach(async (testCase) => {
			it('US company search with id and city', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idpostCodetestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					postCode: '85755',
				},
			},
		];
		idpostCodetestCases.forEach(async (testCase) => {
			it('US company search with id and postCode', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idprovincetestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					province: 'AZ',
				},
			},
		];
		idprovincetestCases.forEach(async (testCase) => {
			it('US company search with id and province', async () => {
				const queryString = `?countries=&id=${testCase.params.id}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstreettestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
			},
		];
		idstreettestCases.forEach(async (testCase) => {
			it('US company search with id and street', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idnametestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					name: 'MICHAEL LANG DDS PC',
				},
			},
		];
		idnametestCases.forEach(async (testCase) => {
			it('US company search with id and name', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idofficeTypetestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					officeType: 'headOffice',
				},
			},
		];
		idofficeTypetestCases.forEach(async (testCase) => {
			it('US company search with id and officeType', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idphoneNotestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					phoneNo: '5209890074',
				},
			},
		];
		idphoneNotestCases.forEach(async (testCase) => {
			it('US company search with id and phoneNo', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idstatustestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					status: 'Active',
				},
			},
		];
		idstatustestCases.forEach(async (testCase) => {
			it('US company search with id and status', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const idwebsitetestCases = [
			{
				params: {
					id: 'US-X-US18339410',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
			},
		];
		idwebsitetestCases.forEach(async (testCase) => {
			it('US company search with id and website', async () => {
				const queryString = `?countries=US&id=${testCase.params.id}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('US regNo Searches', () => {
		const regNotestCases = ['07350102'];
		regNotestCases.forEach(async (testCase) => {
			it(`US company search with regNo:${testCase}`, async () => {
				const queryString = `?countries=US&regNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.regNo === `${testCase}`), true);
			});
		});
		const regNovatNotestCases = [
			{
				params: {
					regNo: '07350102',
					vatNo: '860781195',
				},
			},
		];
		regNovatNotestCases.forEach(async (testCase) => {
			it('US company search with regNo and vatNo', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&vatNo=${testCase.params.vatNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosafeNotestCases = [
			{
				params: {
					regNo: '07350102',
					safeNo: 'US18339410',
				},
			},
		];
		regNosafeNotestCases.forEach(async (testCase) => {
			it('US company search with regNo and safeNo', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNosearchModetestCases = [
			{
				params: {
					regNo: '07350102',
					searchMode: 'Default',
				},
			},
		];
		regNosearchModetestCases.forEach(async (testCase) => {
			it('US company search with regNo and searchMode', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNocitytestCases = [
			{
				params: {
					regNo: '07350102',
					city: 'ORO VALLEY',
				},
			},
		];
		regNocitytestCases.forEach(async (testCase) => {
			it('US company search with regNo and city', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNopostCodetestCases = [
			{
				params: {
					regNo: '07350102',
					postCode: '85755',
				},
			},
		];
		regNopostCodetestCases.forEach(async (testCase) => {
			it('US company search with regNo and postCode', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoprovincetestCases = [
			{
				params: {
					regNo: '07350102',
					province: 'AZ',
				},
			},
		];
		regNoprovincetestCases.forEach(async (testCase) => {
			it('US company search with regNo and province', async () => {
				const queryString = `?countries=&regNo=${testCase.params.regNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostreettestCases = [
			{
				params: {
					regNo: '07350102',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
			},
		];
		regNostreettestCases.forEach(async (testCase) => {
			it('US company search with regNo and street', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNonametestCases = [
			{
				params: {
					regNo: '07350102',
					name: 'MICHAEL LANG DDS PC',
				},
			},
		];
		regNonametestCases.forEach(async (testCase) => {
			it('US company search with regNo and name', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNoofficeTypetestCases = [
			{
				params: {
					regNo: '07350102',
					officeType: 'headOffice',
				},
			},
		];
		regNoofficeTypetestCases.forEach(async (testCase) => {
			it('US company search with regNo and officeType', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNophoneNotestCases = [
			{
				params: {
					regNo: '07350102',
					phoneNo: '5209890074',
				},
			},
		];
		regNophoneNotestCases.forEach(async (testCase) => {
			it('US company search with regNo and phoneNo', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNostatustestCases = [
			{
				params: {
					regNo: '07350102',
					status: 'Active',
				},
			},
		];
		regNostatustestCases.forEach(async (testCase) => {
			it('US company search with regNo and status', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const regNowebsitetestCases = [
			{
				params: {
					regNo: '07350102',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
			},
		];
		regNowebsitetestCases.forEach(async (testCase) => {
			it('US company search with regNo and website', async () => {
				const queryString = `?countries=US&regNo=${testCase.params.regNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('US vatNo Searches', () => {
		const vatNotestCases = ['860781195'];
		vatNotestCases.forEach(async (testCase) => {
			it(`US company search with vatNo:${testCase}`, async () => {
				const queryString = `?countries=US&vatNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.vatNo[0] === `${testCase}`), true);
			});
		});
		const vatNosafeNotestCases = [
			{
				params: {
					vatNo: '860781195',
					safeNo: 'US18339410',
				},
			},
		];
		vatNosafeNotestCases.forEach(async (testCase) => {
			it('US company search with vatNo and safeNo', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&safeNo=${testCase.params.safeNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNosearchModetestCases = [
			{
				params: {
					vatNo: '860781195',
					searchMode: 'Default',
				},
			},
		];
		vatNosearchModetestCases.forEach(async (testCase) => {
			it('US company search with vatNo and searchMode', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNocitytestCases = [
			{
				params: {
					vatNo: '860781195',
					city: 'ORO VALLEY',
				},
			},
		];
		vatNocitytestCases.forEach(async (testCase) => {
			it('US company search with vatNo and city', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNopostCodetestCases = [
			{
				params: {
					vatNo: '860781195',
					postCode: '85755',
				},
			},
		];
		vatNopostCodetestCases.forEach(async (testCase) => {
			it('US company search with vatNo and postCode', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoprovincetestCases = [
			{
				params: {
					vatNo: '860781195',
					province: 'AZ',
				},
			},
		];
		vatNoprovincetestCases.forEach(async (testCase) => {
			it('US company search with vatNo and province', async () => {
				const queryString = `?countries=&vatNo=${testCase.params.vatNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostreettestCases = [
			{
				params: {
					vatNo: '860781195',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
			},
		];
		vatNostreettestCases.forEach(async (testCase) => {
			it('US company search with vatNo and street', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNonametestCases = [
			{
				params: {
					vatNo: '860781195',
					name: 'MICHAEL LANG DDS PC',
				},
			},
		];
		vatNonametestCases.forEach(async (testCase) => {
			it('US company search with vatNo and name', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNoofficeTypetestCases = [
			{
				params: {
					vatNo: '860781195',
					officeType: 'headOffice',
				},
			},
		];
		vatNoofficeTypetestCases.forEach(async (testCase) => {
			it('US company search with vatNo and officeType', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNophoneNotestCases = [
			{
				params: {
					vatNo: '860781195',
					phoneNo: '5209890074',
				},
			},
		];
		vatNophoneNotestCases.forEach(async (testCase) => {
			it('US company search with vatNo and phoneNo', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNostatustestCases = [
			{
				params: {
					vatNo: '860781195',
					status: 'Active',
				},
			},
		];
		vatNostatustestCases.forEach(async (testCase) => {
			it('US company search with vatNo and status', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const vatNowebsitetestCases = [
			{
				params: {
					vatNo: '860781195',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
			},
		];
		vatNowebsitetestCases.forEach(async (testCase) => {
			it('US company search with vatNo and website', async () => {
				const queryString = `?countries=US&vatNo=${testCase.params.vatNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('US safeNo Searches', () => {
		const safeNotestCases = ['US18339410'];
		safeNotestCases.forEach(async (testCase) => {
			it(`US company search with safeNo:${testCase}`, async () => {
				const queryString = `?countries=US&safeNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase}`), true);
			});
		});
		const safeNosearchModetestCases = [
			{
				params: {
					safeNo: 'US18339410',
					searchMode: 'Default',
				},
			},
		];
		safeNosearchModetestCases.forEach(async (testCase) => {
			it('US company search with safeNo and searchMode', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const safeNocitytestCases = [
			{
				params: {
					safeNo: 'US18339410',
					city: 'ORO VALLEY',
				},
			},
		];
		safeNocitytestCases.forEach(async (testCase) => {
			it('US company search with safeNo and city', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&city=${testCase.params.city}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNopostCodetestCases = [
			{
				params: {
					safeNo: 'US18339410',
					postCode: '85755',
				},
			},
		];
		safeNopostCodetestCases.forEach(async (testCase) => {
			it('US company search with safeNo and postCode', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&postCode=${testCase.params.postCode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoprovincetestCases = [
			{
				params: {
					safeNo: 'US18339410',
					province: 'AZ',
				},
			},
		];
		safeNoprovincetestCases.forEach(async (testCase) => {
			it('US company search with safeNo and province', async () => {
				const queryString = `?countries=&safeNo=${testCase.params.safeNo}&province=${testCase.params.province}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostreettestCases = [
			{
				params: {
					safeNo: 'US18339410',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
			},
		];
		safeNostreettestCases.forEach(async (testCase) => {
			it('US company search with safeNo and street', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNonametestCases = [
			{
				params: {
					safeNo: 'US18339410',
					name: 'MICHAEL LANG DDS PC',
				},
			},
		];
		safeNonametestCases.forEach(async (testCase) => {
			it('US company search with safeNo and name', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNoofficeTypetestCases = [
			{
				params: {
					safeNo: 'US18339410',
					officeType: 'headOffice',
				},
			},
		];
		safeNoofficeTypetestCases.forEach(async (testCase) => {
			it('US company search with safeNo and officeType', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&officeType=${testCase.params.officeType}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNophoneNotestCases = [
			{
				params: {
					safeNo: 'US18339410',
					phoneNo: '5209890074',
				},
			},
		];
		safeNophoneNotestCases.forEach(async (testCase) => {
			it('US company search with safeNo and phoneNo', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&phoneNo=${testCase.params.phoneNo}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNostatustestCases = [
			{
				params: {
					safeNo: 'US18339410',
					status: 'Active',
				},
			},
		];
		safeNostatustestCases.forEach(async (testCase) => {
			it('US company search with safeNo and status', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&status=${testCase.params.status}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
		const safeNowebsitetestCases = [
			{
				params: {
					safeNo: 'US18339410',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
			},
		];
		safeNowebsitetestCases.forEach(async (testCase) => {
			it('US company search with safeNo and website', async () => {
				const queryString = `?countries=US&safeNo=${testCase.params.safeNo}&website=${testCase.params.website}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`, 400);

				assert.equal(response.status, 400);
				console.log(`${response.status}${response.data.message}`);
			});
		});
	});

	describe('US city Searches', () => {
		const citytestCases = ['ORO VALLEY'];
		citytestCases.forEach(async (testCase) => {
			it(`US company search with city:${testCase}`, async () => {
				const queryString = `?countries=US&city=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.city === `${testCase}`), true);
			});
		});
		const citysearchModetestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		citysearchModetestCases.forEach(async (testCase) => {
			it('US company search with city and searchMode', async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const citypostCodetestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					postCode: '85755',
				},
				expected: {
					key: 'safeNo',
					value: 'US88747816',
				},
			},
		];
		citypostCodetestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and postCode: ${testCase.params.postCode}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&postCode=${testCase.params.postCode}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityprovincetestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					province: 'AZ',
				},
				expected: {
					key: 'safeNo',
					value: 'US88747816',
				},
			},
		];
		cityprovincetestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystreettestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		citystreettestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citynametestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					name: 'MICHAEL LANG DDS PC',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		citynametestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const cityofficeTypetestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					officeType: 'headOffice',
				},
			},
		];
		cityofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLowerCase()), true);
			});
		});
		const cityphoneNotestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					phoneNo: '5209890074',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		cityphoneNotestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const citystatustestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					status: 'Active',
				},
			},
		];
		citystatustestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				// Check all companies have the correct city
				assert.equal(response.data.companies.every((company) => company.address.city.toLowerCase() === testCase.params.city.toLowerCase()), true);
			});
		});
		const citywebsitetestCases = [
			{
				params: {
					city: 'ORO VALLEY',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		citywebsitetestCases.forEach(async (testCase) => {
			it(`US company search with city: ${testCase.params.city} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&city=${testCase.params.city}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US postCode Searches', () => {
		const postCodetestCases = ['85755'];
		postCodetestCases.forEach(async (testCase) => {
			it(`US company search with postCode:${testCase}`, async () => {
				const queryString = `?countries=US&postCode=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.postCode === `${testCase}`), true);
			});
		});
		const postCodesearchModetestCases = [
			{
				params: {
					postCode: '85755',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		postCodesearchModetestCases.forEach(async (testCase) => {
			it('US company search with postCode and searchMode', async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const postCodeprovincetestCases = [
			{
				params: {
					postCode: '85755',
					province: 'AZ',
				},
				expected: {
					key: 'safeNo',
					value: 'US88747816',
				},
			},
		];
		postCodeprovincetestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and province: ${testCase.params.province}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&province=${testCase.params.province}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestreettestCases = [
			{
				params: {
					postCode: '85755',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		postCodestreettestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodenametestCases = [
			{
				params: {
					postCode: '85755',
					name: 'MICHAEL LANG DDS PC',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		postCodenametestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodeofficeTypetestCases = [
			{
				params: {
					postCode: '85755',
					officeType: 'headOffice',
				},
			},
		];
		postCodeofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct postCode
				assert.equal(response.data.companies.every((company) => company.address.postCode === testCase.params.postCode), true);
			});
		});
		const postCodephoneNotestCases = [
			{
				params: {
					postCode: '85755',
					phoneNo: '5209890074',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		postCodephoneNotestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const postCodestatustestCases = [
			{
				params: {
					postCode: '85755',
					status: 'Active',
				},
			},
		];
		postCodestatustestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				// Check all companies have the correct postCode
				assert.equal(response.data.companies.every((company) => company.address.postCode.toLowerCase() === testCase.params.postCode.toLowerCase()), true);
			});
		});
		const postCodewebsitetestCases = [
			{
				params: {
					postCode: '85755',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		postCodewebsitetestCases.forEach(async (testCase) => {
			it(`US company search with postCode: ${testCase.params.postCode} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&postCode=${testCase.params.postCode}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US province Searches', () => {
		const provincetestCases = ['AZ'];
		provincetestCases.forEach(async (testCase) => {
			it(`US company search with province:${testCase}`, async () => {
				const queryString = `?countries=US&province=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.province === `${testCase}`), true);
			});
		});
		const provincesearchModetestCases = [
			{
				params: {
					province: 'AZ',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		provincesearchModetestCases.forEach(async (testCase) => {
			it('US company search with province and searchMode', async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const provincestreettestCases = [
			{
				params: {
					province: 'AZ',
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		provincestreettestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and street: ${testCase.params.street}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&street=${testCase.params.street}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincenametestCases = [
			{
				params: {
					province: 'AZ',
					name: 'MICHAEL LANG DDS PC',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		provincenametestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provinceofficeTypetestCases = [
			{
				params: {
					province: 'AZ',
					officeType: 'headOffice',
				},
			},
		];
		provinceofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct province
				assert.equal(response.data.companies.every((company) => company.address.province === testCase.params.province), true);
			});
		});
		const provincephoneNotestCases = [
			{
				params: {
					province: 'AZ',
					phoneNo: '5209890074',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		provincephoneNotestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const provincestatustestCases = [
			{
				params: {
					province: 'AZ',
					status: 'Active',
				},
			},
		];
		provincestatustestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				// Check all companies have the correct province
				assert.equal(response.data.companies.every((company) => company.address.province.toLowerCase() === testCase.params.province.toLowerCase()), true);
			});
		});
		const provincewebsitetestCases = [
			{
				params: {
					province: 'AZ',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		provincewebsitetestCases.forEach(async (testCase) => {
			it(`US company search with province: ${testCase.params.province} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&province=${testCase.params.province}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US street Searches', () => {
		const streettestCases = ['1171 E RANCHO VISTOSO BLVD STE 157'];
		streettestCases.forEach(async (testCase) => {
			it(`US company search with street:${testCase}`, async () => {
				const queryString = `?countries=US&street=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1 === `${testCase}`), true);
			});
		});
		const streetsearchModetestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		streetsearchModetestCases.forEach(async (testCase) => {
			it('US company search with street and searchMode', async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const streetnametestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					name: 'MICHAEL LANG DDS PC',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		streetnametestCases.forEach(async (testCase) => {
			it(`US company search with street: ${testCase.params.street} and name: ${testCase.params.name}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&name=${testCase.params.name}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetofficeTypetestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					officeType: 'headOffice',
				},
			},
		];
		streetofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with street: ${testCase.params.street} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct street
				assert.equal(response.data.companies.every((company) => company.address.line1 === testCase.params.street), true);
			});
		});
		const streetphoneNotestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					phoneNo: '5209890074',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		streetphoneNotestCases.forEach(async (testCase) => {
			it(`US company search with street: ${testCase.params.street} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetstatustestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		streetstatustestCases.forEach(async (testCase) => {
			it(`US company search with street: ${testCase.params.street} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const streetwebsitetestCases = [
			{
				params: {
					street: '1171 E RANCHO VISTOSO BLVD STE 157',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		streetwebsitetestCases.forEach(async (testCase) => {
			it(`US company search with street: ${testCase.params.street} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US name Searches', () => {
		const nametestCases = ['MICHAEL LANG DDS PC'];
		nametestCases.forEach(async (testCase) => {
			it(`US company search with name:${testCase}`, async () => {
				const queryString = `?countries=US&name=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.name === `${testCase}`), true);
			});
		});
		const namesearchModetestCases = [
			{
				params: {
					name: 'MICHAEL LANG DDS PC',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		namesearchModetestCases.forEach(async (testCase) => {
			it('US company search with name and searchMode', async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const nameofficeTypetestCases = [
			{
				params: {
					name: 'MICHAEL LANG DDS PC',
					officeType: 'headOffice',
				},
			},
		];
		nameofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with name: ${testCase.params.name} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct name
				assert.equal(response.data.companies.every((company) => company.name === testCase.params.name), true);
			});
		});
		const namephoneNotestCases = [
			{
				params: {
					name: 'MICHAEL LANG DDS PC',
					phoneNo: '5209890074',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		namephoneNotestCases.forEach(async (testCase) => {
			it(`US company search with name: ${testCase.params.name} and phoneNo: ${testCase.params.phoneNo}`, async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&phoneNo=${testCase.params.phoneNo}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namestatustestCases = [
			{
				params: {
					name: 'MICHAEL LANG DDS PC',
					status: 'Active',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		namestatustestCases.forEach(async (testCase) => {
			it(`US company search with name: ${testCase.params.name} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
		const namewebsitetestCases = [
			{
				params: {
					name: 'MICHAEL LANG DDS PC',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		namewebsitetestCases.forEach(async (testCase) => {
			it(`US company search with name: ${testCase.params.name} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US phoneNo Searches', () => {
		const phoneNotestCases = ['5209890074'];
		phoneNotestCases.forEach(async (testCase) => {
			it(`US company search with phoneNo:${testCase}`, async () => {
				const queryString = `?countries=US&phoneNo=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.phoneNumbers[0] === `${testCase}`), true);
			});
		});
		const phoneNosearchModetestCases = [
			{
				params: {
					phoneNo: '5209890074',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		phoneNosearchModetestCases.forEach(async (testCase) => {
			it('US company search with phoneNo and searchMode', async () => {
				const queryString = `?countries=US&phoneNo=${testCase.params.phoneNo}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const phoneNoofficeTypetestCases = [
			{
				params: {
					phoneNo: '5209890074',
					officeType: 'headOffice',
				},
			},
		];
		phoneNoofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with phoneNo: ${testCase.params.phoneNo} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&phoneNo=${testCase.params.phoneNo}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct phoneNo
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === testCase.params.phoneNo), true);
			});
		});
		const phoneNostatustestCases = [
			{
				params: {
					phoneNo: '5209890074',
					status: 'Active',
				},
			},
		];
		phoneNostatustestCases.forEach(async (testCase) => {
			it(`US company search with phoneNo: ${testCase.params.phoneNo} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&phoneNo=${testCase.params.phoneNo}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				// Check all companies have the correct phoneNo
				assert.equal(response.data.companies.every((company) => company.phoneNumbers[0] === testCase.params.phoneNo), true);
			});
		});
		const phoneNowebsitetestCases = [
			{
				params: {
					phoneNo: '5209890074',
					website: 'RANCHOVISTOSODENTAL.COM',
				},
				expected: {
					key: 'safeNo',
					value: 'US18339410',
				},
			},
		];
		phoneNowebsitetestCases.forEach(async (testCase) => {
			it(`US company search with phoneNo: ${testCase.params.phoneNo} and website: ${testCase.params.website}`, async () => {
				const queryString = `?countries=US&phoneNo=${testCase.params.phoneNo}&website=${testCase.params.website}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.value}`), true);
			});
		});
	});

	describe('US website Searches', () => {
		const websitetestCases = ['RANCHOVISTOSODENTAL.COM'];
		websitetestCases.forEach(async (testCase) => {
			it(`US company search with website:${testCase}`, async () => {
				const queryString = `?countries=US&website=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.website[0] === `${testCase}`), true);
			});
		});
		const websitesearchModetestCases = [
			{
				params: {
					website: 'RANCHOVISTOSODENTAL.COM',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		websitesearchModetestCases.forEach(async (testCase) => {
			it('US company search with website and searchMode', async () => {
				const queryString = `?countries=US&website=${testCase.params.website}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const websiteofficeTypetestCases = [
			{
				params: {
					website: 'RANCHOVISTOSODENTAL.COM',
					officeType: 'headOffice',
				},
			},
		];
		websiteofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with website: ${testCase.params.website} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&website=${testCase.params.website}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct website
				assert.equal(response.data.companies.every((company) => company.website[0] === testCase.params.website), true);
			});
		});
		const websitestatustestCases = [
			{
				params: {
					website: 'RANCHOVISTOSODENTAL.COM',
					status: 'Active',
				},
			},
		];
		websitestatustestCases.forEach(async (testCase) => {
			it(`US company search with website: ${testCase.params.website} and status: ${testCase.params.status}`, async () => {
				const queryString = `?countries=US&website=${testCase.params.website}&status=${testCase.params.status}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.status === `${testCase.params.status}`), true);
				// Check all companies have the correct website
				assert.equal(response.data.companies.every((company) => company.website[0] === testCase.params.website), true);
			});
		});
	});

	describe('US officeType, status Searches', () => {
		const officeTypetestCases = ['headOffice'];
		officeTypetestCases.forEach(async (testCase) => {
			it(`US company search with officeType:${testCase}`, async () => {
				const queryString = `?countries=US&officeType=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.officeType === `${testCase}`), true);
			});
		});
		const statustestCases = ['Active'];
		statustestCases.forEach(async (testCase) => {
			it(`US company search with status:${testCase}`, async () => {
				const queryString = `?countries=US&status=${testCase}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.status === `${testCase}`), true);
			});
		});
		const officeTypesearchModetestCases = [
			{
				params: {
					officeType: 'headOffice',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		officeTypesearchModetestCases.forEach(async (testCase) => {
			it('US company search with officeType and searchMode', async () => {
				const queryString = `?countries=US&officeType=${testCase.params.officeType}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const statussearchModetestCases = [
			{
				params: {
					status: 'active',
					searchMode: 'IncludeCoefficient_IncludeThinRecords',
				},
			},
		];
		statussearchModetestCases.forEach(async (testCase) => {
			it('US company search with status and searchMode', async () => {
				const queryString = `?countries=US&status=${testCase.params.status}&searchMode=${testCase.params.searchMode}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
			});
		});
		const statusofficeTypetestCases = [
			{
				params: {
					status: 'Active',
					officeType: 'headOffice',
				},
			},
		];
		statusofficeTypetestCases.forEach(async (testCase) => {
			it(`US company search with website: ${testCase.params.website} and officeType: ${testCase.params.officeType}`, async () => {
				const queryString = `?countries=US&website=${testCase.params.website}&officeType=${testCase.params.officeType}&pageSize=200`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				// Check all companies have the correct status
				assert.equal(response.data.companies.every((company) => company.officeType === `${testCase.params.officeType}`), true);
				// Check all companies have the correct website
				assert.equal(response.data.companies.every((company) => company.status === testCase.params.status), true);
			});
		});
	});

	describe('US synonyms', () => {
		const namesynonymtestCases = [
			{
				params: {
					name: 'environ',
					street: '3323 W ADDISON ST',
				},
				expected: {
					safeNo: 'US157231007',
				},
			},
			{
				params: {
					name: 'u s s',
					street: '111 S 10TH ST 20TH FL',
				},
				expected: {
					safeNo: 'US70602389',
				},
			},
			{
				params: {
					name: 'co PEPSI BOTTLING GROUP',
					street: '5733 CITRUS BLVD',
				},
				expected: {
					safeNo: 'US89276155',
				},
			},
		];
		namesynonymtestCases.forEach(async (testCase) => {
			it(`US company search with namesynonym: ${testCase.params.name}`, async () => {
				const queryString = `?countries=US&name=${testCase.params.name}&street=${testCase.params.street}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.safeNo === `${testCase.expected.safeNo}`), true);
			});
		});
		const streetsynonymtestCases = [
			{
				params: {
					street: '3744 anx AVEnu',
					name: 'EXTRA SPACE STORAGE',
				},
				expected: {
					street: '3744 ANNEX AVE',
				},
			},
			{
				params: {
					street: '141 COUNTRY mnr road',
					name: 'MASTEC',
				},
				expected: {
					street: '141 COUNTRY MANOR RD',
				},
			},
		];
		streetsynonymtestCases.forEach(async (testCase) => {
			it(`US company search with streetsynonym: ${testCase.params.street}`, async () => {
				const queryString = `?countries=US&street=${testCase.params.street}&name=${testCase.params.name}`;
				const response = await getWithRetry(`${baseUrl}/companies${queryString}`);

				assert.equal(response.status, 200);
				assert.equal(response.data.companies.length > 0, true);
				assert.equal(response.data.companies.some((company) => company.address.line1.toLowerCase() === testCase.expected.street.toLowerCase()), true);
			});
		});
	});
});
