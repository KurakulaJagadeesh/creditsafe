// eslint-disable-next-line import/extensions
import omit from 'lodash/omit.js';

const parseSchema = (schema, parent = '') => {
	let flatSchema = {};
	Object.keys(schema).forEach((entryKey) => {
		const value = schema[entryKey];

		flatSchema = typeof (value) === 'object' && !Array.isArray(value)
			? { ...flatSchema, ...parseSchema(value, entryKey) }
			: { ...flatSchema, [parent]: schema };
	});
	return flatSchema;
};

const executeValidationRules = (criteriaSubset, input) => {
	const errors = [];
	Object.keys(criteriaSubset).forEach((subsetParentKey) => {
		console.log(`evaluating ${subsetParentKey}`);
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
						if (!allowedValues.includes(value)) {
							errors.push(`${subsetParentKey} has an invalid value. Needs to be one of [${allowedValues.join(',')}]`);
						}
						break;
					}
					case 'validationRegExp': {
						const { validationRegExp } = criteriaSubset[subsetParentKey];
						if (!RegExp(validationRegExp).test(value)) errors.push(`${subsetParentKey} has failed regular expression`);
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

const hasAllRequiredCriteria = (schema, params) => Object.keys(schema)
	.filter((schemaKey) => (schema[schemaKey].required !== undefined && schema[schemaKey].required === true))
	.every((schemaKey) => params[schemaKey] !== undefined);

const flattenSchema = (schemaSet) => schemaSet
	.map((schema) => parseSchema(schema, {}))
	.filter((schema) => schema !== undefined);

const validatesetCombinations = (input, criteriaSets) => {
	const paramKeys = Object.keys(input);
	let subSet = criteriaSets.filter((schema) => paramKeys.every((key) => schema[key] !== undefined));

	if (!subSet || subSet.length === 0) {
		return ['Specified criteria combination is not allowed'];
	}
	subSet = subSet.filter((schema) => hasAllRequiredCriteria(schema, input));
	if (!subSet || subSet.length === 0) {
		return ['There are required criteria missing from the query'];
	}

	let errors = [];
	subSet.forEach((schema) => {
		const subsetErrors = executeValidationRules(schema, input);
		if (subsetErrors.length > 0) errors = errors.concat(subsetErrors);
	});
	return errors;
};

const validateSearchCriteria = (input, criteriaSets) => {
	const {
		page, pageSize, countryCode, exact, ...inputObj
	} = input;
	const relevantParams = omit(inputObj, page, pageSize, countryCode, exact);
	if (Object.keys(relevantParams).length > 0) {
		const flattenedSets = flattenSchema(criteriaSets);
		const errors = validatesetCombinations(relevantParams, flattenedSets);
		return errors;
	}
	return [];
};

export default validateSearchCriteria;
