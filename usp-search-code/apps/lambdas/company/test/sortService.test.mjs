import assert from 'assert';
import { describe, it } from 'node:test';
import SORT_ORDER from '@usp-monorepo/usp-core/dataAccess/opensearchSortOrder.mjs';
import sortService from '../src/services/sortService.mjs';

describe('sortServiceTest', () => {
	describe('sortService', () => {
		it('should return sort object in desc', () => {
			const field = 'coefficientLinear';
			const expectedOutput = { sort: [{ [field]: { order: 'desc' } }] };
			const actualOutput = sortService(field, SORT_ORDER.DESC);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
		it('should return sort object in asc', () => {
			const field = 'coefficientLinear';
			const expectedOutput = { sort: [{ [field]: { order: 'asc' } }] };
			const actualOutput = sortService(field, SORT_ORDER.ASC);
			assert.deepStrictEqual(actualOutput, expectedOutput);
		});
	});
});
