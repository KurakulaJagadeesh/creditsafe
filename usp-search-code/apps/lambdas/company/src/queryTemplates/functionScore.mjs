const templateFooter = {
	score_mode: 'sum',
};

const fieldValueFactorTemplate = {
	factor: 1.1,
	modifier: 'log1p',
	missing: 1,
};

const commonFunctions = [
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'noEmployees.to',
		},
	},
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'creditLimit',
		},
	}];

const functionScoreTemplate = {
	AT: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	BE: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	CA: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	DE: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	FI: {
		functions: [
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'creditLimit',
				},
			},
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	FR: {
		functions: [
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'shareCapital',
				},
			},
		],
		...templateFooter,
	},
	GB: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	IE: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	IT: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	NL: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	NO: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	SE: {
		functions: [
			...commonFunctions,
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
	US: {
		functions: [
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'turnover.to',
				},
			},
		],
		...templateFooter,
	},
};

export default functionScoreTemplate;
