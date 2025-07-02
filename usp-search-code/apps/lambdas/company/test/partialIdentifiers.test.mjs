import assert from 'node:assert';
import { describe, it } from 'node:test';
import {
	normilizationAnalyzer,
	apiRequestPartialIdentifierFieldMappings,
} from '../src/mappings/apiRequestPartialIdentifierMappings.mjs';

describe('apiRequestPartialIdentifierFieldMappings', () => {
	describe('normilizationAnalyzer', () => {
		it('should normalize the input string by performing ASCII folding, lowercasing, and removing whitespace and non-word characters', () => {
			const input = 'Héllö Wörld! 123';
			const expectedOutput = 'helloworld123';

			const result = normilizationAnalyzer(input);

			assert.strictEqual(result, expectedOutput);
		});
	});

	describe('AT', () => {
		describe('regNo', () => {
			it('should generate the correct queries for the given regNo', () => {
				const regNo = 'ABCD1234';
				const expectedQueries = [
					{ key: 'regNo.full', value: 'abcd1234' },
					{ key: 'regNo.raw', value: 'abcd1234' },
					{ key: 'regNo.exPrefix', value: 'abcd1234' },
					{ key: 'regNo.exSuffix', value: 'abcd1234' },
					{ key: 'regNo.numeric', value: 'abcd1234' },
				];

				const result = apiRequestPartialIdentifierFieldMappings.AT.regNo.generateQueries(regNo);

				assert.deepStrictEqual(result, expectedQueries);
			});
		});

		describe('vatNo', () => {
			it('should generate the correct queries for the given vatNo', () => {
				const vatNo = 'ABCD1234';
				const expectedQueries = [
					{ key: 'vatNo.full', value: 'abcd1234' },
					{ key: 'vatNo.exPrefix', value: 'abcd1234' },
				];

				const result = apiRequestPartialIdentifierFieldMappings.AT.vatNo.generateQueries(vatNo);

				assert.deepStrictEqual(result, expectedQueries);
			});
		});
	});

	describe('SE', () => {
		describe('regNo', () => {
			it('should generate the correct queries for the given regNo (apply sole trader rule variations, 200 prefix and 01 suffix)', () => {
				const regNo = '200320653501';
				const expectedQueries = [
					{
						key: 'regNo',
						value: '200320653501',
					},
					{
						key: 'regNo',
						value: '2003206535',
					},
					{
						key: 'regNo',
						value: '320653501',
					},
					{
						key: 'regNo',
						value: '200320653501',
					},
					{
						key: 'regNo',
						value: '3206535',
					},
					{
						key: 'regNo',
						value: '2003206535',
					},
				];

				const result = apiRequestPartialIdentifierFieldMappings.SE.regNo.generateQueries(regNo);

				assert.deepStrictEqual(result, expectedQueries);
			});

			it('should generate the correct queries for the given regNo (apply sole trader rule variations, 0 padding and 01 suffix)', () => {
				const regNo = '000228436201';
				const expectedQueries = [
					{
						key: 'regNo',
						value: '228436201',
					},
					{
						key: 'regNo',
						value: '2284362',
					},
					{
						key: 'regNo',
						value: '228436201',
					},
					{
						key: 'regNo',
						value: '228436201',
					},
					{
						key: 'regNo',
						value: '2284362',
					},
					{
						key: 'regNo',
						value: '2284362',
					},
				];

				const result = apiRequestPartialIdentifierFieldMappings.SE.regNo.generateQueries(regNo);

				assert.deepStrictEqual(result, expectedQueries);
			});
		});
	});

	describe('CH', () => {
		describe('regNo', () => {
			it('should generate the correct queries for all allowed CH regNo values', () => {
				const testCases = [
					'CHE106832407',
					'CH106832407',
					'106832407',
					'CHE-106-832-407',
					'CH-106-832-407',
					'106-832-407',
					'CHE.106.832.407',
					'CH.106.832.407',
					'106.832.407',
					'CHE 106 832 407',
					'CH 106 832 407',
					'106 832 407',
					'CHE/106/832/407',
					'CH/106/832/407',
					'106/832/407',
					'CHE-106.832/407',
					'CH-106.832/407',
					'106.832/407',
					'CHE106832407 HR/MWST',
					'CH106832407 HR/MWST',
					'106832407 HR/MWST',
					'CHE106832407HR/MWST',
					'CH106832407HR/MWST',
					'106832407HR/MWST',
				];
				const expectedQueries = [
					{ key: 'regNo.raw', value: 'CHE106832407' },
				];

				testCases.forEach((regNo) => {
					const result = apiRequestPartialIdentifierFieldMappings.CH.regNo.generateQueries(regNo);
					assert.deepStrictEqual(result, expectedQueries);
				});
			});
		});
	});
});
