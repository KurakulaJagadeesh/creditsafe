/* eslint-disable no-underscore-dangle */
import { createObjectCsvWriter } from 'csv-writer';
// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import levenshtein from 'fast-levenshtein';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import querystring from 'node:querystring';
import createClient from '@usp-monorepo/usp-core/repositories/opensearchClient.mjs';
import { runSingleCountrySearch } from '../src/services/companySearchService.mjs';

const methodToRun = process.env.METHOD_TO_RUN;
const inputFile = process.env.INPUT_FILE;

// Initialise the opensearch client here because
// we are bypassing the aws handler entry point
global.client = createClient();

const mapParams = (params, countryCode) => {
	const mapFields = (queryParams) => {
		const replacers = () => {
			switch (countryCode) {
				case 'ca':
				case 'gb':
					return [
						{
							patterns: ['_limit', 'limit'],
							value: 'pageSize',
						},
						{
							patterns: ['country', 'countries'],
							value: 'countryCode',
						},
						{
							patterns: ['_page'],
							value: 'page',
						},
						{
							patterns: ['regNumber'],
							value: 'regNo',
						},
						{
							patterns: ['type=ltd'],
							value: 'type=Ltd',
						},
						{
							patterns: ['sorting=relevance'],
							value: '',
						},
						// Remove unsuported page_ KVP
						{
							patterns: [/&page_1=\d/g],
							value: '',
						},
						// Remove any gunf after page number e.g. &page=1?&test=1 -> &page=1&test=1
						{
							patterns: [/(&page=\d)([^&]+)/g],
							value: '$1',
						},
						{
							patterns: [/&previousName=include/g],
							value: '',

						},
					];
				default:
					return [];
			}
		};

		// Remove the leading ? of url params
		let mappedParams = queryParams.slice(1);

		// Loop through each of the regex patterns and apply them to the param string
		replacers().forEach((replacer) => {
			replacer.patterns.forEach((pattern) => {
				mappedParams = mappedParams.replaceAll(pattern, replacer.value);
			});
		});

		return mappedParams;
	};

	// const paramsArray = params.split('&').reduce((prev, curr) => {
	// 	const [key, value] = curr.split('=');

	// 	return {
	// 		...prev,
	// 		[mapField(key)]: value,
	// 	};
	// }, {});

	// Map incorrect field names
	const mappedParams = mapFields(params);

	const paramsObj = querystring.parse(mappedParams);

	const filteredObj = omit(paramsObj, ['homeCountry', 'groupResults', 'displayBothTypes']);
	console.log(JSON.stringify(filteredObj));

	return filteredObj;
};

const readFile = (filePath) => {
	// Note: we use the crlfDelay option to recognize all instances of CR LF
	// ('\r\n') in input.txt as a single line break.
	const fileStream = fs.createReadStream(filePath);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});
	return rl;
};

const generateFileName = (baseName, extension = 'csv') => {
	const now = new Date();
	const timestamp = now.toISOString().replace(/:/g, '-').replace(/\..+/, '');
	const fileName = `${baseName}-${timestamp}.${extension}`;
	return fileName;
};

const parseRefSet = async (fileName, searchLogic) => {
	const inputFileObj = path.parse(inputFile);

	let isFirstRun = true;
	let csvWriter = {};
	const batchSize = 10;
	let batch = [];

	const safeSearchLogic = async (line) => {
		try {
			return { success: true, data: await searchLogic(line) };
		} catch (error) {
			console.log(error);
			return { success: false, error };
		}
	};

	const processBatch = async (lines) => {
		const results = await Promise.all(lines.map(safeSearchLogic));
		const successfulResults = results.filter((x) => x.success).map((x) => x.data);

		// Initialize CSV writer only once
		if (isFirstRun) {
			csvWriter = createObjectCsvWriter({
				path: generateFileName(inputFileObj.name),
				header: [...Object.keys(successfulResults[0])],
				append: true,
			});
			isFirstRun = false;
		}

		await csvWriter.writeRecords(successfulResults);
	};

	// eslint-disable-next-line no-restricted-syntax
	for await (const line of readFile(inputFile)) {
		batch.push(line);
		if (batch.length === batchSize) {
			await processBatch(batch);
			batch = []; // Reset the batch
		}
	}

	// Process any remaining lines in the last batch
	if (batch.length > 0) {
		await processBatch(batch);
	}

	console.log('csv file finished!');
};

const nonUniqueRefSet = async (paramKey) => {
	const parseLogic = async (line) => {
		// Remove the quotes from the start and end of the string before splitting
		// expected csv format "connectId","search param","uppRank","...
		const [paramValue, recall] = line.slice(1, line.length - 1).split('","');

		const { results, total } = await runSingleCountrySearch({ countryCode: 'DE', [paramKey]: paramValue });
		return {
			avgMatchScore: [results.map((x) => x.avgScore)].join(),
			searchParams: paramValue,
			queryInfo: results.map((x) => JSON.stringify(x.queryInfo)).join('-'),
			uppRecall: recall,
			uspRecall: total,
		};
	};

	await parseRefSet(inputFile, parseLogic);
};

const queryParamRecallRefSet = async () => {
	const parseLogic = async (line) => {
		// Remove the quotes from the start and end of the string before splitting
		// expected csv format "connectId","search param","uppRank","...
		const [params, recall] = line.slice(1, line.length - 1).split('","');

		console.log(params);
		const searchParams = mapParams(params, 'de');
		const { results, total } = await runSingleCountrySearch(searchParams);

		return {
			avgMatchScore: [results.map((x) => x.avgScore)].join(),
			searchParams: params,
			queryInfo: results.map((x) => JSON.stringify(x.queryInfo)).join('-'),
			uppRecall: recall,
			uspRecall: total,
		};
	};

	await parseRefSet(inputFile, parseLogic);
};

const companySearchResultSet = async () => {
	const parseLogic = async (line) => {
		// Remove the quotes from the start and end of the string before splitting
		// expected csv format "connectId","search param","uppRank","...
		const [connectId, uppRank, ...rest] = line.slice(0, line.length - 1).split(',');
		const params = rest.join().replaceAll('""', '"').slice(1);
		console.log(params);

		const searchParams = JSON.parse(params);

		const { results } = await runSingleCountrySearch(searchParams);

		const { name = 'no name supplied' } = searchParams;
		const resultRank = results.findIndex((x) => x.result._source.connectId === connectId);

		return {
			avgMatchScore: [results.map((x) => x.avgScore)].join(),
			searchParams: JSON.stringify(searchParams),
			queryInfo: results.map((x) => JSON.stringify(x.queryInfo)).join('-'),
			name,
			connectId,
			matchedName: resultRank !== -1 ? results[resultRank].result._source.name : 'blank',
			isMatch: resultRank !== -1,
			uppRank,
			uspRank: resultRank + 1,
		};
	};

	await parseRefSet(inputFile, parseLogic);
};

const companySearchRefSet = async () => {
	const parseLogic = async (line) => {
		// Remove the quotes from the start and end of the string before splitting
		// expected csv format "connectId","search param","uppRank","...
		const [connectId, params, uppRank] = line.slice(1, line.length - 1).split('","');

		const getMatchIndex = (results, parsedConnectId) => results.findIndex((x) => x.result._source.connectId === parsedConnectId);
		const checkIfMatch = (resultRank) => resultRank !== -1;

		// const { results } = await runSingleCountrySearch({ countryCode: 'gb', name, type: connectId.includes('GB-0') ? 'Limited' : 'NonLimited' });
		// const { results } = await runSingleCountrySearch({ countryCode: 'ca', name });
		// const {results} = await runSingleCountrySearch(mapParamsGb(params, connectId));
		// const searchParams = mapParamsCa(params);
		// const test = '?countries=DE&displayBothTypes=true&limit=15&name=KKK%20Spedition%20Kliese%20GmbH&page=1&sorting=relevance&type=ltd';
		// const searchParams = JSON.parse('{"countryCode":"DE","pageSize":"15","name":"Fräsomul","page":"1","postCode":"63679","type":"nonltd"}');
		console.log(params);
		const searchParams = mapParams(params, 'de');

		const { results } = await runSingleCountrySearch(searchParams);

		const { name = 'no name supplied' } = searchParams;
		const resultRank = getMatchIndex(results, connectId);

		let matchedName = 'blank';
		if (checkIfMatch(resultRank)) {
			matchedName = results[resultRank].result._source.name;
		} else {
			const { results: idResults } = await runSingleCountrySearch({ countryCode: searchParams.countryCode, id: connectId });
			const idRank = getMatchIndex(idResults, connectId);

			if (checkIfMatch(idRank)) { matchedName = idResults[idRank].result._source.name; }
		}

		return {
			avgMatchScore: [results.map((x) => x.avgScore)].join(),
			searchParams: JSON.stringify(searchParams),
			queryInfo: results.map((x) => JSON.stringify(x.queryInfo)).join('-'),
			connectId,
			name,
			matchedName,
			levDistance: levenshtein.get(name, matchedName, { useCollator: true }),
			isMatch: checkIfMatch(resultRank),
			uppRank,
			uspRank: resultRank + 1,
			diff: (resultRank + 1) - uppRank,
			results: checkIfMatch(resultRank) ? JSON.stringify({}) : JSON.stringify(results.map((result) => result.result._source)),
		};
	};

	await parseRefSet(inputFile, parseLogic);
};

const personalisationRefSet = async () => {
	const parseLogic = async (line) => {
		// Remove the quotes from the start and end of the string before splitting
		// expected csv format "connectId","search param","uppRank","...
		const [connectId, userid, params, uppRank] = line.slice(0, line.length).split('","');

		const getMatchIndex = (results, parsedConnectId) => results.findIndex((x) => x.result._source.connectId === parsedConnectId);
		const checkIfMatch = (resultRank) => resultRank !== -1;

		// const { results } = await runSingleCountrySearch({ countryCode: 'gb', name, type: connectId.includes('GB-0') ? 'Limited' : 'NonLimited' });
		// const { results } = await runSingleCountrySearch({ countryCode: 'ca', name });
		// const {results} = await runSingleCountrySearch(mapParamsGb(params, connectId));
		// const searchParams = mapParamsCa(params);
		// const test = '?countries=DE&displayBothTypes=true&limit=15&name=KKK%20Spedition%20Kliese%20GmbH&page=1&sorting=relevance&type=ltd';
		// const searchParams = JSON.parse('{"countryCode":"DE","pageSize":"15","name":"Fräsomul","page":"1","postCode":"63679","type":"nonltd"}');
		console.log(params);
		const searchParams = mapParams(params, 'gb');

		const { results } = await runSingleCountrySearch({ ...searchParams, userId: userid });

		const { name = 'no name supplied' } = searchParams;
		const resultRank = getMatchIndex(results, connectId);

		let matchedName = 'blank';
		if (checkIfMatch(resultRank)) {
			matchedName = results[resultRank].result._source.name;
		} else {
			const { results: idResults } = await runSingleCountrySearch({ countryCode: searchParams.countryCode, id: connectId });
			const idRank = getMatchIndex(idResults, connectId);

			if (checkIfMatch(idRank)) { matchedName = idResults[idRank].result._source.name; }
		}

		return {
			avgMatchScore: [results.map((x) => x.avgScore)].join(),
			searchParams: JSON.stringify(searchParams),
			queryInfo: results.map((x) => JSON.stringify(x.queryInfo)).join('-'),
			connectId,
			name,
			matchedName,
			levDistance: levenshtein.get(name, matchedName, { useCollator: true }),
			isMatch: checkIfMatch(resultRank),
			uppRank,
			uspRank: resultRank + 1,
			diff: (resultRank + 1) - uppRank,
			results: checkIfMatch(resultRank) ? JSON.stringify({}) : JSON.stringify(results.map((result) => result.result._source)),
			userid,
		};
	};

	await parseRefSet(inputFile, parseLogic);
};

const main = async () => {
	switch (methodToRun) {
		case 'vatNoRefSet':
			await nonUniqueRefSet('vatNo');
			break;
		case 'regNoRefSet':
			await nonUniqueRefSet('regNo');
			break;
		case 'companySearchRefSet':
			await companySearchRefSet();
			break;
		case 'queryParamRecallRefSet':
			await queryParamRecallRefSet();
			break;
		case 'companySearchResultSet':
			await companySearchResultSet();
			break;
		case 'personalisationRefSet':
			await personalisationRefSet();
			break;
		default:
			console.error('Invalid method specified');
			process.exit(1);
	}
};

main();
