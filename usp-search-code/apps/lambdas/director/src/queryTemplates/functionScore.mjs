const templateFooter = {
	score_mode: 'sum',
};

const fieldValueFactorTemplate = {
	factor: 1.1,
	modifier: 'log1p',
	missing: 1,
};

const aggregatedCommonFunctions = [
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'aggregatedTurnovers',
		},
	},
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'aggregatedEmployeeCounts',
		},
	},
];

const commonFunctions = [
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'companies.turnover_to',
		},
	},
	{
		field_value_factor: {
			...fieldValueFactorTemplate,
			field: 'companies.employeeCount_to',
		},
	},
];

const functionScoreTemplate = {
	BE: {
		functions: [
			...commonFunctions,
		],
		...templateFooter,
	},
	DE: {
		functions: [
			...commonFunctions,
		],
		...templateFooter,
	},
	FR: {
		functions: [
			...aggregatedCommonFunctions,
		],
		...templateFooter,
	},
	GB: {
		functions: [
			...aggregatedCommonFunctions,
		],
		...templateFooter,
	},
	IE: {
		functions: [
			...aggregatedCommonFunctions,
		],
		...templateFooter,
	},
	NO: {
		functions: [
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'companies.creditLimit',
				},
			},
		],
		...templateFooter,
	},
	US: {
		functions: [
			{
				filter: {
					terms: {
						'title.keyword': [
							'CHIEF EXECUTIVE OFFICER',
							'DIRECTOR',
							'PRESIDENT',
							'CEO',
						],
					},
				},
				weight: 5,
			},
			{
				filter: {
					term: {
						'title.keyword': 'OTHER',
					},
				},
				weight: 0.2,
			},
			{
				field_value_factor: {
					...fieldValueFactorTemplate,
					field: 'companies.creditLimit',
				},
			},
		],
		...templateFooter,
	},
};

export default functionScoreTemplate;
