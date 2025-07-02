import Ajv from 'ajv';
import { ERROR_MESSAGE } from '../responseMessages.mjs';
import { mergeCriterias } from './searchCriteriaMergeService.mjs';

const ajv = new Ajv({ allErrors: true });

export const convertToPropertyType = (obj, props) => {
	const result = {};
	// eslint-disable-next-line no-restricted-syntax
	for (const key of Object.keys(obj)) {
		if (!Number.isNaN(obj[key]) && props[key]?.type === 'integer') {
			result[key] = Number(obj[key]);
		} else if (props[key]?.type === 'boolean') {
			const lowerCasedValue = obj[key].toLowerCase();
			if (lowerCasedValue === 'true') {
				result[key] = true;
			} else if (lowerCasedValue === 'false') {
				result[key] = false;
			} else {
				result[key] = lowerCasedValue;
			}
		} else {
			result[key] = obj[key];
		}
	}
	return result;
};

export const executeValidationRules = (criteriaSubset, input) => {
	const errors = [];
	Object.keys(criteriaSubset).forEach((subsetParentKey) => {
		Object.keys(criteriaSubset[subsetParentKey]).forEach((subSetKey) => {
			const value = input[subsetParentKey];
			if (value) {
				switch (subSetKey) {
					case 'required':
						if (!value) {
							errors.push(`${subsetParentKey} missing a value`);
						}
						break;
					case 'minLength': {
						const { minLength } = criteriaSubset[subsetParentKey];
						if (value.length < minLength) {
							errors.push(`${subsetParentKey} is shorter than the required minimum length of ${parseInt(minLength, 10)}`);
						}
						break;
					}
					case 'maxLength': {
						const { maxLength } = criteriaSubset[subsetParentKey];
						if (value.length > maxLength) {
							errors.push(`${subsetParentKey} is longer than the required maximum length of ${parseInt(maxLength, 10)}`);
						}
						break;
					}
					case 'allowedValues': {
						const { allowedValues } = criteriaSubset[subsetParentKey];
						// Normalise the allowed value enums to be case insensitive
						if (!allowedValues.map((allowedValue) => allowedValue.toLowerCase()).includes(value.toString().toLowerCase())) {
							errors.push(`${subsetParentKey} has an invalid value. Needs to be one of [${allowedValues.join(',')}]`);
						}
						break;
					}
					case 'validationRegExp': {
						const { validationRegExp } = criteriaSubset[subsetParentKey];
						if (!RegExp(validationRegExp.toString().toLowerCase()).test(value.toString().toLowerCase())) errors.push(`${subsetParentKey} has failed regular expression`);
						break;
					}
					default: {
						break;
					}
				}
			}
		});
	});
	return errors;
};

export const hasAllRequiredCriteria = (schema, params) => Object.keys(schema)
	.filter((schemaKey) => (schema[schemaKey].required !== undefined && schema[schemaKey].required === true))
	.every((schemaKey) => params[schemaKey] !== undefined);

export const validatesetCombinations = (input, criteriaSets) => {
	const paramKeys = Object.keys(input);
	let subSet = criteriaSets.filter((schema) => paramKeys.every((key) => schema[key] !== undefined));

	if (!subSet || subSet.length === 0) {
		global.logger.error('Specified criteria combination is not allowed', { input, criteriaSets, subSet });
		return ['Specified criteria combination is not allowed'];
	}
	subSet = subSet.filter((schema) => hasAllRequiredCriteria(schema, input));
	if (!subSet || subSet.length === 0) {
		global.logger.error('There are required criteria missing from the query', { input, criteriaSets, subSet });
		return ['There are required criteria missing from the query'];
	}

	let errors = [];
	subSet.forEach((schema) => {
		const subsetErrors = executeValidationRules(schema, input);
		if (subsetErrors.length > 0) errors = errors.concat(subsetErrors);
	});
	return errors;
};

export const validateSearchCriteria = (input, searchCriteria) => {
	const {
		page, pageSize, countries, exact, includePreviousName, increaseRecall, isGGS, ...relevantParams
	} = input;

	const criteriaSets = countries.length > 1 ? mergeCriterias(countries, searchCriteria).criteriaSets : searchCriteria[countries].criteriaSets;
	if (Object.keys(relevantParams).length > 0) {
		const errors = validatesetCombinations(relevantParams, criteriaSets);
		if (errors.length > 0) {
			throw new SyntaxError(JSON.stringify({ errorType: ERROR_MESSAGE.BAD_REQUEST, errors }));
		}
		return errors.length === 0;
	}
	return true;
};

export const validateInput = (schema, obj, searchCriteria) => {
	const parsedObj = { ...obj };
	const { isGGS = false } = parsedObj;

	parsedObj.countries = obj.countries && obj.countries.split(',');

	const validateSchema = ajv.compile(schema);
	const isValid = validateSchema(parsedObj);

	if (!isValid) {
		if (validateSchema.errors && validateSchema.errors.length > 0) {
			validateSchema.errors[0].errorType = ERROR_MESSAGE.BAD_REQUEST;
			throw new SyntaxError(JSON.stringify(validateSchema.errors[0]));
		}
		throw new SyntaxError(JSON.stringify(validateSchema.errors));
	}

	// Bypass the search criteria validation if the request is for GGS
	const searchCriteriaValidationResult = (isGGS && isGGS === true) || validateSearchCriteria(parsedObj, searchCriteria);
	return searchCriteriaValidationResult;
};

export const validateOutput = (schema, obj) => {
	const validateSchema = ajv.compile(schema);
	const isValid = validateSchema(obj);
	if (!isValid) {
		if (validateSchema.errors && validateSchema.errors.length > 0) {
			validateSchema.errors[0].errorType = ERROR_MESSAGE.BAD_RESPONSE;
			throw new SyntaxError(JSON.stringify(validateSchema.errors[0]));
		}
		throw new SyntaxError(JSON.stringify(validateSchema.errors));
	}
	return isValid;
};
