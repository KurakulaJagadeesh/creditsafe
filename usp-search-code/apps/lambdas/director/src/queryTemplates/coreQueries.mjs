export const defaultCore = {
	must: [],
	should: [
	],
};

export const BE = {
	must: [],
	should: [
		{
			term: {
				'companies.status': {
					value: 'Current',
					boost: 2,
				},
			},
		},
		{
			term: {
				'companies.status': {
					value: 'Former',
				},
			},
		},
	],
};

export const DE = {
	must: [],
	should: [
		{
			term: {
				'companies.status': {
					value: 'Current',
					boost: 2,
				},
			},
		},
		{
			term: {
				'companies.status': {
					value: 'Former',
				},
			},
		},
	],
};

export const coreQueryTemplates = {
	defaultCore,
	BE,
	DE,
};
