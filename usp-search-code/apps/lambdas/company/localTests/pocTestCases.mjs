/* eslint-disable no-underscore-dangle */
import runSearch from '../src/services/companySearchService.mjs';

export const outputResults = (searchParams, results) => {
	console.log(JSON.stringify(searchParams));
	console.log(`Total: ${results.total}`);

	const resultsTable = results.results.map((x) => ({
		matchScore: x.avgScore,
		elasticScore: x.result._score,
		name: x.result._source.name,
		companyNumber: x.result._source.regNumber,
		safeNumber: x.result._source.safeNo,
		connectId: x.result._source.connectId,
		address: x.result._source.address.simpleValue,
		status: x.result._source.status,
		statusDesc: x.result._source.statusDescription,
	}));

	console.table(resultsTable);
};

export const main = async () => {
	// // Identifier search
	// const test1 = {
	// 	countries: 'gb',
	// 	safeNo: 'UK08186666',
	// };
	// const results1 = await runSearch(test1);
	// outputResults(test1, results1);

	// // Exact company name search
	// const test2 = {
	// 	countries: 'gb',
	// 	name: 'CREDITSAFE INFORMATION SERVICES LIMITED',
	// };
	// const results2 = await runSearch(test2);
	// outputResults(test2, results2);

	// // Exact company name search with partial postcode
	// const test3 = {
	// 	countries: 'gb',
	// 	name: 'CREDITSAFE INFORMATION SERVICES LTD',
	// 	postCode: 'CF10',
	// };
	// const results3 = await runSearch(test3);
	// outputResults(test3, results3);

	// const test4 = {
	// 	countries: 'gb',
	// 	name: 'Bear Hugs Day Nursery Ltd',
	// };
	// const results4 = await runSearch(test4);
	// outputResults(test4, results4);

	// const test5 = {
	// 	countries: 'gb',
	// 	name: 'henry construction',
	// };
	// const results5 = await runSearch(test5);
	// outputResults(test5, results5);

	// const test6 = {
	// 	countries: 'gb',
	// 	name: 'sharma transport',
	// };
	// const results6 = await runSearch(test6);
	// outputResults(test6, results6);

	// const test7 = {
	// 	countries: 'gb',
	// 	name: 'engie',
	// };
	// const results7 = await runSearch(test7);
	// outputResults(test7, results7);

	// const test8 = {
	// 	countries: 'gb',
	// 	name: 'creditsafe',
	// };
	// const results8 = await runSearch(test8);
	// outputResults(test8, results8);

	// Identifier search
	// const deTest1 = {
	// 	countries: 'de',
	// 	safeNo: 'DE30077026',
	// };
	// const deResults1 = await runSearch(deTest1);
	// outputResults(deTest1, deResults1);

	// Exact company name search
	// const deTest2 = {
	// 	countries: 'de',
	// 	name: 'Schäfner GmbH',
	// };
	// const results2 = await runSearch(deTest2);
	// outputResults(deTest2, results2);

	// // Exact company name search with partial postcode
	// const deTest3 = {
	// 	countries: 'de',
	// 	name: 'Schäfner GmbH',
	// 	postCode: '97520',
	// };
	// const deResults3 = await runSearch(deTest3);
	// outputResults(deTest3, deResults3);

	const deTest4 = {
		countries: 'DE,GB',
		// regNo: 'HRA 1234 A',
		// city: 'Berlin',
		// safeNo: 'DE07757873',
		name: 'creditsafe',
	};
	const deResults4 = await runSearch(deTest4);
	outputResults(deTest4, deResults4);

	// const deTest41 = {
	// 	countries: 'de',
	// 	regNo: 'HRB12380NP',
	// };
	// const deResults41 = await runSearch(deTest41);
	// outputResults(deTest41, deResults41);

	// const deTest5 = {
	// 	countries: 'de',
	// 	regNo: 'HRB 23307 KI',
	// };
	// const deResults5 = await runSearch(deTest5);
	// outputResults(deTest5, deResults5);

	// const deTest51 = {
	// 	countries: 'de',
	// 	regNo: 'HRB23307KI',
	// };
	// const deResults51 = await runSearch(deTest51);
	// outputResults(deTest51, deResults51);

	// const deTest6 = {
	// 	countries: 'de',
	// 	name: 'sharma transport',
	// };
	// const deResults6 = await runSearch(deTest6);
	// outputResults(deTest6, deResults6);

	// const deTest7 = {
	// 	countries: 'de',
	// 	name: 'engie',
	// };
	// const deResults7 = await runSearch(deTest7);
	// outputResults(deTest7, deResults7);

	// const deTest8 = {
	// 	countries: 'de',
	// 	name: 'creditsafe',
	// };
	// const deResults8 = await runSearch(deTest8);
	// outputResults(deTest8, deResults8);

	// const failedCompaniesArray = [
	// 	["BARNARDO'S", 'UK12040351'],
	// 	['BIFFA', 'UK16105410'],
	// 	['RHONDDA CYNON TAFF', 'UK19932292'],
	// 	['VIDENDUM PRODUCTION SOLUTIONS LIMITED', 'UK01405474'],
	// 	['Turners Distribution', 'UK10511501'],
	// 	['DECORA', 'UK10512034'],
	// 	['VITALITY CBD CUSTOMER SERVICE DETAILS', 'UK19572689'],
	// 	['COSTELLO MEDICAL', 'UK19767960'],
	// 	['EAZY HEAT', 'UK19789257'],
	// 	['DICTATE 2 US', 'UK19859178'],
	// 	['AXIOM CARE RECRUITMENT', 'UK19862853'],
	// 	['COSTA COFFEE', 'UK16892960'],
	// 	['THE CARD SHOP', 'UK16892903'],
	// 	['HOLLAND & BARRETT', 'UK16892970'],
	// 	['B-WIZE HOME IMPROVEMENTS', 'UK16893020'],
	// 	['RUBY FOOD NEWS & OFF LICENCE', 'UK16894906'],
	// 	['VIDENDUM PRODUCTION SOLUTIONS LIMITED', 'UK01405474'],
	// 	['Turners Distribution', 'UK10511501'],
	// ];

	// for (const company of failedCompaniesArray) {
	// 	const params = { countries: 'gb', name: company[0] };
	// 	// eslint-disable-next-line no-await-in-loop
	// 	const results = await runSearch(params);
	// 	outputResults(params, results);
	// }
};

main();
