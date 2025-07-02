/* eslint-disable import/extensions, no-underscore-dangle, no-restricted-syntax, no-param-reassign */
import get from 'lodash/get.js';
import apiRequestMappings from './mappings/apiRequestMapping.mjs';
import apiResponseMappings from './mappings/apiResponseMapping.mjs';
import weightConfig from './mappings/weightConfig.mjs';

export const calculateWeight = (suggestion, countryCode) => {
	const defaultConfig = weightConfig.default || {};
	const countryConfig = weightConfig[countryCode] || {};

	// Use country-specific enableSortByWeight if defined, else fallback to default
	const enableSortByWeight = countryConfig.enableSortByWeight ?? defaultConfig.enableSortByWeight;

	if (!enableSortByWeight) return 0;

	// Track which fields are overridden by country-specific config
	const countryFields = new Set((countryConfig.rules || []).map((rule) => rule.field));

	// Combine rules: use country rules if they exist, else use default
	const combinedRules = [
		...(defaultConfig.rules || []).filter((rule) => !countryFields.has(rule.field)),
		...(countryConfig.rules || []),
	];

	let totalWeight = 0;

	for (const rule of combinedRules) {
		const fieldValue = get(suggestion, rule.field);

		if (rule.type === 'enum') {
			const valueWeight = rule.weights?.[fieldValue];
			totalWeight += valueWeight != null ? valueWeight : rule.missing ?? 0;
		}

		if (rule.type === 'numeric') {
			if (typeof fieldValue === 'number') {
				totalWeight += fieldValue * rule.multiplier;
			} else {
				totalWeight += rule.missing ?? 0;
			}
		}
	}
	return totalWeight;
};

export const sortSuggestions = (countryCode, inputFields, inputValue, suggestions) => {
	const defaultConfig = weightConfig.default || {};
	const countryConfig = weightConfig[countryCode] || {};
	const isCustomSortEnabled = countryConfig.enableSortByWeight ?? defaultConfig.enableSortByWeight;

	if (isCustomSortEnabled) {
		suggestions.forEach((suggestion) => {
			suggestion._weight ??= calculateWeight(suggestion, countryCode);
		});
		return suggestions.sort((a, b) => b._weight - a._weight);
	}

	const categories = {
		exactMatch: [],
		caseInsensitiveMatch: [],
		alphaNumericMatch: [],
		specialCharMatch: [],
		leftOvers: [],
	};

	suggestions.forEach((suggestion) => {
		const values = inputFields.flatMap((inputKey) => {
			const val = get(suggestion, inputKey);
			if (val == null) return null;
			if (typeof val === 'string') return val;
			if (Array.isArray(val)) {
				const filtered = val.filter((item) => typeof item === 'string');
				return filtered.length > 0 ? filtered[0] : null;
			}
			return null;
		}).filter(Boolean);

		if (values.length === 0) {
			categories.leftOvers.push(suggestion);
			return;
		}

		let categorized = false;
		for (const value of values) {
			if (value === inputValue) {
				categories.exactMatch.push(suggestion);
				categorized = true;
				break;
			} else if (value.toLowerCase() === inputValue.toLowerCase()) {
				categories.caseInsensitiveMatch.push(suggestion);
				categorized = true;
				break;
			} else if (/[a-zA-Z]/.test(value) && /\d/.test(value)) {
				categories.alphaNumericMatch.push(suggestion);
				categorized = true;
				break;
			} else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value)) {
				categories.specialCharMatch.push(suggestion);
				categorized = true;
				break;
			}
		}

		if (!categorized) {
			categories.leftOvers.push(suggestion);
		}
	});

	return [
		...categories.exactMatch,
		...categories.caseInsensitiveMatch,
		...categories.leftOvers,
		...categories.alphaNumericMatch,
		...categories.specialCharMatch,
	];
};

export const flattenSuggestions = (suggestions) => {
	const flattenedSuggestions = [];
	Object.values(suggestions.body.suggest).forEach((suggestionsArray) => {
		suggestionsArray.forEach((suggestObj) => {
			suggestObj.options.forEach((option) => {
				flattenedSuggestions.push(option._source);
			});
		});
	});
	return flattenedSuggestions;
};

export const deDuplicateSuggestions = (suggestions) => {
	const uniqueMap = new Map();
	Object.values(suggestions).flat().forEach((item) => {
		const key = item.safeNo;
		if (!uniqueMap.has(key)) {
			uniqueMap.set(key, item);
		}
	});
	return Array.from(uniqueMap.values());
};

export const getSuggestions = async (path, countryCode, input, contexts, size) => {
	const route = path.split('/');
	const searchType = route[route.length - 2] === 'companies' ? 'cs-company-search' : 'cs-director-search';
	const suggestName = route[route.length - 1];
	const inputKey = Object.keys(input)[0];
	const inputValue = Object.values(input)[0];
	const inputFieldMap = apiRequestMappings[countryCode]?.[inputKey] ?? apiRequestMappings.default[inputKey];
	const defaultMapping = apiResponseMappings.default ?? {};
	const countryMapping = apiResponseMappings[countryCode] ?? {};
	const mergedMapping = { ...defaultMapping, ...countryMapping };
	const responseFields = Object.values(mergedMapping);

	const inputFields = Array.isArray(inputFieldMap) ? inputFieldMap : [inputFieldMap];
	const _sourceFields = [...new Set([...inputFields, ...responseFields])];

	// Construct suggestors for each field
	const suggest = {};
	inputFields.forEach((field) => {
		const suggestFieldName = `${field}-${suggestName}`;
		suggest[suggestFieldName] = {
			prefix: inputValue,
			completion: {
				field: `${field}.${suggestName}`,
				contexts,
				size: Math.min(size * 100, 10000),
			},
		};
	});

	const suggestions = await global.client.search({
		index: `${searchType}-${countryCode.toLowerCase()}`,
		body: {
			_source: _sourceFields,
			suggest,
		},
	});

	const flattenedSuggestions = flattenSuggestions(suggestions);
	const uniqueSuggestions = deDuplicateSuggestions(flattenedSuggestions);
	const sortedSuggestions = sortSuggestions(countryCode, inputFields, inputValue, uniqueSuggestions);
	return sortedSuggestions.slice(0, size);
};
