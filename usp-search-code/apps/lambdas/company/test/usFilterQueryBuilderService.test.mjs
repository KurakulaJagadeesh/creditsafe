import assert from 'assert';
import { describe, it } from 'node:test';
import generateUSfilterQuery from '../src/services/usFilterQueryBuilderService.mjs';
import SEARCH_MODE from '../src/models/searchMode.mjs';
import constants from '../src/constants.mjs';

describe('usFilterQueryBuilderServiceTest', () => {
	describe('generateUSfilterQuery', () => {
		it('should generate filter Query on "A" status when countryCode is US and searchMode is Default', () => {
			const expectedOutput = { terms: { [constants.RECORD_STATUS]: ['A'] } };
			const actualOutput = generateUSfilterQuery('US', SEARCH_MODE.DEFAULT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should generate filter Query on "A" status when countryCode is US and searchMode is IncludeCoefficient', () => {
			const expectedOutput = { terms: { [constants.RECORD_STATUS]: ['A'] } };
			const actualOutput = generateUSfilterQuery('US', SEARCH_MODE.INCLUDECOEFFICIENT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should generate filter Query on "A", "S" status when countryCode is US and searchMode is IncludeCoefficient_IncludeThinRecords', () => {
			const expectedOutput = { terms: { [constants.RECORD_STATUS]: ['A', 'S'] } };
			const actualOutput = generateUSfilterQuery('US', SEARCH_MODE.INCLUDECOEFFICIENT_INCLUDETHINRECORDS);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should generate filter Query on "A", "S" status when countryCode is US and searchMode is IncludeThinRecords', () => {
			const expectedOutput = { terms: { [constants.RECORD_STATUS]: ['A', 'S'] } };
			const actualOutput = generateUSfilterQuery('US', SEARCH_MODE.INCLUDETHINRECORDS);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return null when countryCode is other than US', () => {
			const expectedOutput = null;
			const actualOutput = generateUSfilterQuery('GB', SEARCH_MODE.DEFAULT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
	});
});
