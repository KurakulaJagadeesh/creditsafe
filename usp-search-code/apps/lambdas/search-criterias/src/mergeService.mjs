// eslint-disable-next-line import/extensions
import isEqual from 'lodash/isEqual.js';
// eslint-disable-next-line import/extensions
import differenceWith from 'lodash/differenceWith.js';

const isObject = (value) => value && typeof (value) === 'object' && !Array.isArray(value);

const isRequired = (item) => {
	if (!item || item.required === undefined) {
		return false;
	}
	return item.required;
};

const isSubSet = (element, reference) => {
	const elementKeys = Object.keys(element);
	for (let index = 0; index < elementKeys.length; index += 1) {
		if (reference[elementKeys[index]] === undefined) {
			return false;
		}
		if (!isEqual(reference[elementKeys[index]], element[elementKeys[index]])) {
			if (!isObject(reference[elementKeys[index]]) || !isObject(element[elementKeys[index]])) {
				return false;
			}
			const entryRequired = isRequired(element[elementKeys[index]]);
			const referenceRequired = isRequired(reference[elementKeys[index]]);

			const entryMap = { ...element[elementKeys[index]] };
			const referenceMap = { ...reference[elementKeys[index]] };

			delete entryMap.required;
			delete referenceMap.required;

			if (!isEqual(entryMap, referenceMap)) {
				return false;
			}

			if (!entryRequired && referenceRequired) {
				return false;
			}
		}
	}
	return true;
};

const isUnique = (element, references) => !references.some((ref) => isSubSet(element, ref));

const getNonUnique = (elements, reference) => elements.filter((elem) => !isUnique(elem, reference));

const getRequiredItems = (mapping) => Object.keys(mapping).filter((e) => isRequired(mapping[e]));

const getAllowedValues = (propertiesMap) => {
	if (!propertiesMap || !propertiesMap.allowedValues) {
		return undefined;
	}
	const value = propertiesMap.allowedValues;
	return Array.isArray(value) ? value : undefined;
};

const importSchema = (payload) => payload.criteriaSets.map((item) => {
	const tempItem = item;
	if (item.id) {
		if (item.id.minLength) {
			tempItem.id.minLength += 3;
		}
		if (item.id.maxLength) {
			tempItem.id.maxLength += 6;
		}
	}
	if (item.address) {
		if (item.address.postalCode) {
			tempItem.address.postCode = item.address.postalCode;
			delete tempItem.address.postalCode;
		}
	}
	return item;
});

const getRequiredItemsFlat = (mapping) => {
	const temp = {};
	if (mapping && Object.keys(mapping).length > 0) {
		Object.keys(mapping).forEach((key) => {
			if (mapping[key] && isObject(mapping[key])) {
				temp[key] = mapping[key];
			}
		});
	}
	return getRequiredItems(temp);
};

const outputIntersection = (key, value, reference) => {
	if (isObject(value)) {
		if (reference[key] === undefined) {
			return undefined;
		}
		const temp = reference[key];
		if (!isObject(temp)) {
			return undefined;
		}
		const subReferenceRequired = getRequiredItemsFlat(temp);
		const outputValue = {};
		for (let idx = 0; idx < Object.keys(value).length; idx += 1) {
			const subKey = Object.keys(value)[idx];
			const partialOutput = outputIntersection(subKey, value[subKey], temp);
			if (partialOutput !== undefined && partialOutput !== null) {
				outputValue[subKey] = partialOutput;
			}
		}
		if (isRequired(temp) && outputValue.required === undefined) {
			outputValue.required = true;
		}
		if (!subReferenceRequired.every((item) => outputValue[item] !== undefined && outputValue[item] !== null)) {
			return undefined;
		}
		const subReferenceAllowedValues = getAllowedValues(temp);
		if (subReferenceAllowedValues && outputValue.allowedValues === undefined) {
			outputValue.allowedValues = subReferenceAllowedValues;
		}
		if (outputValue.allowedValues) {
			const outputAllowedValues = getAllowedValues(outputValue);
			if (!outputAllowedValues || outputAllowedValues.length < 1) {
				return undefined;
			}
		}
		return Object.keys(outputValue).length > 0 ? outputValue : null;
	}
	if (key === 'required') {
		return (value !== undefined && (value === true || value === 'true')) || isRequired(reference);
	}
	if (key === 'allowedValues') {
		const allowedValues = value;
		const referenceAllowedValues = getAllowedValues(reference);

		if (allowedValues && referenceAllowedValues) {
			return allowedValues.filter((x) => referenceAllowedValues.includes(x));
		}
		if (allowedValues) {
			return allowedValues;
		}
		return referenceAllowedValues;
	}

	return undefined;
};

const getElementIntersection = (key, value, reference, output) => {
	const temp = { ...reference };
	const tempOutput = output;

	const outputValue = outputIntersection(key, value, temp);
	if (outputValue && isObject(outputValue)) {
		tempOutput[key] = outputValue;
	}

	return tempOutput;
};

const intersectElement = (aCast, bCast) => {
	let result = {};
	const aRequired = getRequiredItems(aCast);
	const bRequired = getRequiredItems(bCast);

	// if any of the sets contains required elements that are not available in the other, intersection is not possible
	if (!aRequired.every((e) => bCast[e] !== undefined) || !bRequired.every((e) => aCast[e] !== undefined)) {
		return undefined;
	}
	// intersecting every "a" element with all elements in "b"
	Object.keys(aCast).forEach((key) => {
		result = { ...getElementIntersection(key, aCast[key], bCast, result) };
	});

	return Object.keys(result).length === 0 ? undefined : result;
};

const intersect = (element, references) => {
	let result = [];
	const output = [];
	for (let index = 0; index < references.length; index += 1) {
		const valueToBeCompared = references[index];
		const resultantValue = intersectElement(element, valueToBeCompared);
		if (resultantValue) {
			output.push(resultantValue);
			references.splice(index, 1);
			break;
		}
	}
	// eslint-disable-next-line no-restricted-syntax
	for (const e of output) {
		if (!isUnique(e, result)) {
			break;
		} else {
			result = differenceWith(result, getNonUnique(result, [e]), isEqual);
			result.push(e);
		}
	}
	return result;
};
const getSchemaInterSection = (resultList, references) => {
	let result = [];
	resultList.forEach((element) => {
		let output = intersect(element, references);
		output = [...new Set(output)].filter((item) => isUnique(item, result));
		result = differenceWith(result, getNonUnique(result, output), isEqual);
		result = [...result, ...output];
	});
	return result;
};

const intersectSchema = (importedCriteriaSets, params = {}) => {
	const { aggregate = [] } = params;

	if (aggregate.length > 0) {
		if (aggregate.length > importedCriteriaSets.length) {
			return getSchemaInterSection(params.aggregate, importedCriteriaSets);
		}
		return getSchemaInterSection(importedCriteriaSets, params.aggregate);
	}
	return [...importedCriteriaSets];
};

const mergeCriteriaSets = (body) => {
	const { countriesCriteria = [] } = body;
	const tempResponse = body;

	countriesCriteria.forEach((payload) => {
		const importedCriteriaSets = importSchema(payload);
		tempResponse.aggregate = intersectSchema(importedCriteriaSets, tempResponse);
	});
	const result = { aggregate: tempResponse.aggregate };
	return result;
};

const flattenCountries = (body) => {
	const { countriesCriteria = [] } = body;
	const countryList = [];
	countriesCriteria.forEach((item) => {
		if (item.countries) {
			if (Array.isArray(item.countries) && item.countries.length > 0) {
				item.countries.forEach((country) => {
					countryList.push(country);
				});
			} else {
				const splitCountries = item.countries.split(',');
				if (splitCountries && splitCountries.length > 0) {
					splitCountries.forEach((country) => {
						countryList.push(country);
					});
				}
			}
		} else {
			countryList.push(item.country);
		}
	});
	return { countries: countryList };
};

export const mergeCriteriasExcLanguages = (body) => {
	const result = {
		...mergeCriteriaSets(body),
		...flattenCountries(body),
	};
	return result;
};

const intersectLanguages = (obj, languageCountries, countriesLanguageList) => {
	let { languagesList = [], mergedLanguageList = [] } = obj;
	languagesList = languagesList.length > 0 ? [...languagesList] : [];
	mergedLanguageList = mergedLanguageList.length > 0 ? [...mergedLanguageList] : [];

	const countries = languageCountries.split(',');

	mergedLanguageList = [...mergedLanguageList, ...new Set(countries)];

	if (mergedLanguageList.length <= 1 && languagesList.length === 0) {
		const result = [...languagesList, ...countriesLanguageList];
		return result;
	}

	const result = languagesList.filter((value) => countriesLanguageList.includes(value));
	return result;
};

export const mergeLanguages = (body, countryCodes = []) => {
	const { countriesCriteria = [] } = body;
	const tempObj = {
		languagesList: [],
		mergedLanguageList: [],
	};
	countriesCriteria.forEach((countryCriteria) => {
		const { languages = [], country = '' } = countryCriteria;

		// If there's more than 1 country, return EN by default
		const countriesLanguageList = !languages.includes('EN') && countryCodes.length > 1 ? ['EN'] : languages;
		const languageCountries = country;
		tempObj.languagesList = intersectLanguages(tempObj, languageCountries, countriesLanguageList);
		console.log('fin');
	});

	return tempObj.languagesList;
};

export const mergeCriterias = (countryCodes, criteriaObject) => {
	// Convert the search criteria objects into correct format e.g.
	// countriesCriteria: [{country:GB, languages: ['EN'], criteriaSets: [{...}]}]
	const { searchCriteria = {} } = criteriaObject;
	const inputObj = {
		// eslint-disable-next-line no-unused-vars
		countriesCriteria: Object.entries(searchCriteria).filter(([key]) => countryCodes.includes(key)).map(([_, value]) => value),
	};
	const mergedResult = mergeCriteriasExcLanguages(inputObj);
	const mergedLanguages = mergeLanguages(inputObj, countryCodes);
	const result = {
		countries: mergedResult.countries,
		languages: mergedLanguages,
		criteriaSets: mergedResult.aggregate,
	};
	return result;
};
