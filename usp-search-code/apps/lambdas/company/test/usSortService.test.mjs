import assert from 'assert';
import { describe, it } from 'node:test';
import { isUSsortEnabled, applyUSSortLogic } from '../src/services/usSortService.mjs';
import SEARCH_MODE from '../src/models/searchMode.mjs';
import constants from '../src/constants.mjs';

describe('usSortServiceTest', () => {
	describe('isUSsortEnabled', () => {
		it('should return false if countryCode is US and searchMode is Default', () => {
			const expectedOutput = false;
			const actualOutput = isUSsortEnabled('US', SEARCH_MODE.DEFAULT);
			assert.strictEqual(actualOutput, expectedOutput);
		});
		it('should return true if countryCode is US and searchMode is IncludeCoefficient', () => {
			const expectedOutput = true;
			const actualOutput = isUSsortEnabled('US', SEARCH_MODE.INCLUDECOEFFICIENT);
			assert.strictEqual(actualOutput, expectedOutput);
		});
		it('should return true if countryCode is US and searchMode is IncludeCoefficient_IncludeThinRecords', () => {
			const expectedOutput = true;
			const actualOutput = isUSsortEnabled('US', SEARCH_MODE.INCLUDECOEFFICIENT_INCLUDETHINRECORDS);
			assert.strictEqual(actualOutput, expectedOutput);
		});
		it('should return false if countryCode is US and searchMode is IncludeThinRecords', () => {
			const expectedOutput = false;
			const actualOutput = isUSsortEnabled('US', SEARCH_MODE.INCLUDETHINRECORDS);
			assert.strictEqual(actualOutput, expectedOutput);
		});
		it('should return false when countryCode is other than US', () => {
			const expectedOutput = false;
			const actualOutput = isUSsortEnabled('GB', SEARCH_MODE.DEFAULT);
			assert.strictEqual(actualOutput, expectedOutput);
		});
	});

	describe('applyUSSortLogic', () => {
		it('should return null if search mode is Default', () => {
			const expectedOutput = null;
			const actualOutput = applyUSSortLogic('US', SEARCH_MODE.DEFAULT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return sort object if search mode is IncludeCoefficient', () => {
			const expectedOutput = { sort: [{ [constants.COEFFICIENT_LINEAR]: { order: 'desc' } }] };
			const actualOutput = applyUSSortLogic('US', SEARCH_MODE.INCLUDECOEFFICIENT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return sort object if search mode is IncludeCoefficient_IncludeThinRecords', () => {
			const expectedOutput = { sort: [{ [constants.COEFFICIENT_LINEAR]: { order: 'desc' } }] };
			const actualOutput = applyUSSortLogic('US', SEARCH_MODE.INCLUDECOEFFICIENT_INCLUDETHINRECORDS);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return null if search mode is IncludeThinRecords', () => {
			const expectedOutput = null;
			const actualOutput = applyUSSortLogic('US', SEARCH_MODE.INCLUDETHINRECORDS);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return null when countryCode is other than US', () => {
			const expectedOutput = null;
			const actualOutput = applyUSSortLogic('GB', SEARCH_MODE.DEFAULT);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
	});
});
