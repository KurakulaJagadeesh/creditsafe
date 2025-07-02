import assert from 'node:assert';
import { describe, it } from 'node:test';
import { apiRequestPartialFilterFieldMappings } from '../src/mappings/apiRequestPartialFilterMappings.mjs';
import { normalizationAnalyzer } from '../src/mappings/apiRequestPartialIdentifierMappings.mjs';

describe('apiRequestPartialIdentifierMappings', () => {
	describe('normalizationAnalyzer', () => {
		it('should normalize the input string by performing ASCII folding, lowercasing, and removing whitespace and non-word characters', () => {
			const input = 'Héllö Wörld! 123';
			const expectedOutput = 'helloworld123';

			const result = normalizationAnalyzer(input);

			assert.strictEqual(result, expectedOutput);
		});
	});
});

describe('apiRequestPartialFilterFieldMappings', () => {
	it('BE.postCode should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.BE.postCode.generateQueries('1000');
		assert.strictEqual(result.length, 3);
	});

	it('BE.regNo should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.BE.regNo.generateQueries('1000');
		assert.strictEqual(result.length, 3);
	});

	it('DE.postCode should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.DE.postCode.generateQueries('DE123456');
		assert.strictEqual(result.length, 3);
	});

	it('DE.regNo should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.DE.regNo.generateQueries('DE123456');
		assert.strictEqual(result.length, 5);
	});

	it('FR.regNo should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.FR.regNo.generateQueries('FR987654');
		assert.strictEqual(result.length, 3);
	});

	it('GB.postCode should return query objects', () => {
		const result = apiRequestPartialFilterFieldMappings.GB.postCode.generateQueries('SW1A 1AA');
		assert.strictEqual(result.length, 3);
	});

	it('IE.postCode should return areaCode variations for dublin 2', () => {
		const result = apiRequestPartialFilterFieldMappings.IE.postCode.generateQueries('dublin 2');
		const areaCodeQueries = result.filter((q) => q.generateQueryPartial().term['address.postCode.areaCode']);
		assert.ok(areaCodeQueries.length > 0);
	});

	it('US.postCode should return full, raw, and prefix queries', () => {
		const result = apiRequestPartialFilterFieldMappings.US.postCode.generateQueries('90210');
		assert.strictEqual(result.length, 3);
	});
});
