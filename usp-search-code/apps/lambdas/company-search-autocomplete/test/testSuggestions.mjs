import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
	calculateWeight, sortSuggestions, flattenSuggestions, deDuplicateSuggestions,
} from '../src/suggestions.mjs';
import weightConfig from '../src/mappings/weightConfig.mjs';
import { buildContexts } from '../src/mappings/buildContexts.mjs';

describe('calculateWeight', () => {
	it('should return 0 if weight config is not enabled or rules are missing', () => {
		weightConfig.default.enableSortByWeight = true;
		const suggestion = { safeNo: '123' };
		assert.strictEqual(calculateWeight(suggestion, 'US'), 0);
	});

	it('should calculate weight correctly for enum type rules', () => {
		weightConfig.default.enableSortByWeight = true;
		const suggestion = { safeNo: '123', officeType: 'headOffice' };
		assert.strictEqual(calculateWeight(suggestion, 'FR'), 1000);
	});

	it('should calculate weight correctly for numeric type rules', () => {
		weightConfig.default.enableSortByWeight = true;
		const suggestion = { safeNo: '123', shareCapital: 500 };
		assert.strictEqual(calculateWeight(suggestion, 'FR'), 50000);
	});
});

describe('sortSuggestions', () => {
	it('should sort suggestions by weight when custom sort is enabled', () => {
		weightConfig.default.enableSortByWeight = true;
		const countryCode = 'FR';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'Test Company 1', _weight: 100 },
			{ name: 'Test Company 2', _weight: 200 },
			{ name: 'Test Company 3', _weight: 150 },
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		assert.deepEqual(result, [
			{ name: 'Test Company 2', _weight: 200 },
			{ name: 'Test Company 3', _weight: 150 },
			{ name: 'Test Company 1', _weight: 100 },
		]);
	});

	it('should categorize and sort suggestions when custom sort is disabled', () => {
		weightConfig.default.enableSortByWeight = false;
		const countryCode = 'AT';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'test', safeNo: '1' },
			{ name: 'test company', safeNo: '2' },
			{ name: 'TEST COMPANY', safeNo: '3' },
			{ name: 'test123', safeNo: '4' },
			{ name: 'test@company', safeNo: '5' },
			{ name: 'other company', safeNo: '6' },
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		assert.deepEqual(result.map((s) => s.safeNo), ['1', '2', '3', '6', '4', '5']);
	});

	it('should use country-specific enableSortByWeight=true and sort by weight', () => {
		weightConfig.default.enableSortByWeight = false;
		const countryCode = 'FR';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'Test Company 1', _weight: 10 },
			{ name: 'Test Company 2', _weight: 30 },
			{ name: 'Test Company 3', _weight: 20 },
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		assert.deepEqual(result, [
			{ name: 'Test Company 2', _weight: 30 },
			{ name: 'Test Company 3', _weight: 20 },
			{ name: 'Test Company 1', _weight: 10 },
		]);
	});

	it('should use country-specific enableSortByWeight=false and NOT sort by weight', () => {
		weightConfig.default.enableSortByWeight = true;
		weightConfig.FR = { enableSortByWeight: false };
		const countryCode = 'FR';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'test', safeNo: '1' },
			{ name: 'test company', safeNo: '2' },
			{ name: 'TEST COMPANY', safeNo: '3' },
			{ name: 'test123', safeNo: '4' },
			{ name: 'test@company', safeNo: '5' },
			{ name: 'other company', safeNo: '6' },
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		assert.deepEqual(result.map((s) => s.safeNo), ['1', '2', '3', '6', '4', '5']);
	});
});

describe('flattenSuggestions', () => {
	it('should flatten nested suggestion structure', () => {
		const suggestions = {
			body: {
				suggest: {
					'name-autocomplete': [
						{
							options: [
								{ _source: { name: 'Company 1', safeNo: '1' } },
								{ _source: { name: 'Company 2', safeNo: '2' } },
							],
						},
					],
					'city-autocomplete': [
						{
							options: [
								{ _source: { name: 'Company 3', safeNo: '3' } },
							],
						},
					],
				},
			},
		};

		const result = flattenSuggestions(suggestions);
		assert.deepEqual(result, [
			{ name: 'Company 1', safeNo: '1' },
			{ name: 'Company 2', safeNo: '2' },
			{ name: 'Company 3', safeNo: '3' },
		]);
	});

	it('should handle empty suggestions', () => {
		const suggestions = {
			body: {
				suggest: {},
			},
		};

		const result = flattenSuggestions(suggestions);
		assert.deepEqual(result, []);
	});
});

describe('deDuplicateSuggestions', () => {
	it('should remove duplicate suggestions based on safeNo', () => {
		const suggestions = [
			{ name: 'Company 1', safeNo: '1' },
			{ name: 'Company 1 Duplicate', safeNo: '1' },
			{ name: 'Company 2', safeNo: '2' },
			{ name: 'Company 2 Duplicate', safeNo: '2' },
		];

		const result = deDuplicateSuggestions(suggestions);
		assert.deepEqual(result, [
			{ name: 'Company 1', safeNo: '1' },
			{ name: 'Company 2', safeNo: '2' },
		]);
	});

	it('should handle empty suggestions array', () => {
		const result = deDuplicateSuggestions([]);
		assert.deepEqual(result, []);
	});
});

describe('suggestions processing', () => {
	it('should process the suggestions with valid input', () => {
		// Test data simulating OpenSearch response
		const suggestions = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{ _source: { name: 'test company', safeNo: '1' } },
							{ _source: { name: 'test company', safeNo: '1' } }, // Duplicate
							{ _source: { name: 'TEST COMPANY', safeNo: '2' } },
							{ _source: { name: 'test123', safeNo: '3' } },
						],
					}],
					'city-autocomplete': [{
						options: [
							{ _source: { name: 'test company', safeNo: '1' } }, // Duplicate
							{ _source: { name: 'test@company', safeNo: '4' } },
						],
					}],
				},
			},
		};

		const countryCode = 'US';
		const inputFields = ['name'];
		const inputValue = 'test';

		// Step 1: Flatten suggestions
		const flattened = flattenSuggestions(suggestions);
		assert.deepEqual(flattened, [
			{ name: 'test company', safeNo: '1' },
			{ name: 'test company', safeNo: '1' },
			{ name: 'TEST COMPANY', safeNo: '2' },
			{ name: 'test123', safeNo: '3' },
			{ name: 'test company', safeNo: '1' },
			{ name: 'test@company', safeNo: '4' },
		]);

		// Step 2: Remove duplicates
		const unique = deDuplicateSuggestions(flattened);
		assert.deepEqual(unique, [
			{ name: 'test company', safeNo: '1' },
			{ name: 'TEST COMPANY', safeNo: '2' },
			{ name: 'test123', safeNo: '3' },
			{ name: 'test@company', safeNo: '4' },
		]);

		// Step 3: Sort suggestions
		const sorted = sortSuggestions(countryCode, inputFields, inputValue, unique);
		assert.deepEqual(sorted.map((s) => s.safeNo), ['1', '2', '3', '4']);
	});

	it('should handle empty suggestions', () => {
		const suggestions = {
			body: {
				suggest: {},
			},
		};

		const countryCode = 'US';
		const inputFields = ['name'];
		const inputValue = 'test';

		// Step 1: Flatten suggestions
		const flattened = flattenSuggestions(suggestions);
		assert.deepEqual(flattened, []);

		// Step 2: Remove duplicates
		const unique = deDuplicateSuggestions(flattened);
		assert.deepEqual(unique, []);

		// Step 3: Sort suggestions
		const sorted = sortSuggestions(countryCode, inputFields, inputValue, unique);
		assert.deepEqual(sorted, []);
	});

	it('should handle uncategorized items in sortSuggestions', () => {
		weightConfig.default.enableSortByWeight = false;
		const countryCode = 'US';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'test company', safeNo: '1' },
			{ name: 'TEST COMPANY', safeNo: '2' },
			{ name: 'test123', safeNo: '3' },
			{ name: 'test@company', safeNo: '4' },
			{ name: 'other company', safeNo: '5' },
			{ name: null, safeNo: '6' }, // Should be uncategorized
			{ name: undefined, safeNo: '7' }, // Should be uncategorized
			{ name: [], safeNo: '8' }, // Should be uncategorized
			{ name: [null], safeNo: '9' }, // Should be uncategorized
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		// All uncategorized items should be in leftOvers category
		assert.deepEqual(result.map((s) => s.safeNo), ['1', '2', '5', '6', '7', '8', '9', '3', '4']);
	});

	it('should maintain correct category order in sortSuggestions', () => {
		const countryCode = 'US';
		const inputFields = ['name'];
		const inputValue = 'test';
		const suggestions = [
			{ name: 'test', safeNo: '1' }, // exact match
			{ name: 'TEST', safeNo: '2' }, // case insensitive match
			{ name: 'other', safeNo: '3' }, // left over
			{ name: 'test123', safeNo: '4' }, // alphanumeric
			{ name: 'test@company', safeNo: '5' }, // special char
		];

		const result = sortSuggestions(countryCode, inputFields, inputValue, suggestions);
		// Order should be: exactMatch -> caseInsensitiveMatch -> leftOvers -> alphaNumericMatch -> specialCharMatch
		assert.deepEqual(result.map((s) => s.safeNo), ['1', '2', '3', '4', '5']);
	});

	it('should limit results based on size parameter', () => {
		const suggestions = {
			body: {
				suggest: {
					'name-autocomplete': [{
						options: [
							{ _source: { name: 'test1', safeNo: '1' } },
							{ _source: { name: 'test2', safeNo: '2' } },
							{ _source: { name: 'test3', safeNo: '3' } },
							{ _source: { name: 'test4', safeNo: '4' } },
							{ _source: { name: 'test5', safeNo: '5' } },
						],
					}],
				},
			},
		};

		const countryCode = 'US';
		const inputFields = ['name'];
		const inputValue = 'test';

		// Process through the pipeline
		const flattened = flattenSuggestions(suggestions);
		const unique = deDuplicateSuggestions(flattened);
		const sorted = sortSuggestions(countryCode, inputFields, inputValue, unique);

		// Test different size limits
		assert.deepEqual(sorted.slice(0, 2).map((s) => s.safeNo), ['1', '2']);
		assert.deepEqual(sorted.slice(0, 3).map((s) => s.safeNo), ['1', '2', '3']);
		assert.deepEqual(sorted.slice(0, 0).map((s) => s.safeNo), []);
	});
});

describe('buildContexts', () => {
	it('should return officeType context for FR', () => {
		const result = buildContexts('FR');
		assert.deepStrictEqual(result, { officeType: 'headoffice' });
	});

	it('should return officeType status context for FR', () => {
		const result = buildContexts('FR', 'status', 'Active');
		assert.deepStrictEqual(result, { officeType: 'headoffice', status: 'active' });
	});

	it('should return officeType context for NL', () => {
		const result = buildContexts('NL');
		assert.deepStrictEqual(result, { officeType: 'headoffice' });
	});

	it('should return officeType context for NL', () => {
		const result = buildContexts('NL', 'postCode', '20250');
		assert.deepStrictEqual(result, { officeType: 'headoffice', postCode: '20250' });
	});

	it('should return context with valid field from country-specific mapping', () => {
		const result = buildContexts('DE', 'city', 'Berlin');
		assert.deepStrictEqual(result, { city: 'berlin' });
	});

	it('should return context with valid field from default mapping for default country', () => {
		const result = buildContexts('LU', 'status', 'Active');
		assert.deepStrictEqual(result, { status: 'active' });
	});

	it('should return default context with country code when no context is provided', () => {
		const result = buildContexts('DE');
		assert.deepStrictEqual(result, { country: 'de' });
	});
});
