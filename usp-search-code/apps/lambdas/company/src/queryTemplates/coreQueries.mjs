export const defaultCore = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'Active',
					boost: 2,

				},
			},
		},
		{
			term: {
				officeType: {
					value: 'headOffice',
					boost: 5,
				},
			},
		},
		{
			term: {
				companyType: {
					value: 'Company',
					boost: 5,

				},
			},
		},
		{
			terms: {
				status: [
					'NonActive',
					'Pending',
					'Other',
				],
			},
		},
	],
};

export const AT = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'Active',
					boost: 2,

				},
			},
		},
		{
			term: {
				companyType: {
					value: 'Company',
					boost: 5,

				},
			},
		},
		{
			terms: {
				status: [
					'NonActive',
					'Pending',
					'Other',
				],
			},
		},
	],
};

export const BE = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'PRIVATE COMPANY',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'PHYSICAL PERSON',
					boost: 0.5,
				},
			},
		},
		{
			terms: {
				status: [
					'nonactive',
				],
			},
		},
	],
};

export const CA = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'Active',
					boost: 2,

				},
			},
		},
		{
			term: {
				status: {
					value: 'NonActive',
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
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
	],
};

export const DK = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,
				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
		{
			term: {
				organizationFormDescriptionEnglish: {
					value: 'Limited company',
					boost: 2,
				},
			},
		},
		{
			term: {
				organizationFormDescriptionEnglish: {
					value: 'Sole proprietorship',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				organizationFormDescriptionEnglish: {
					value: 'Small sole proprietorship',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				organizationFormDescriptionEnglish: {
					value: 'Voluntarily association',
					boost: 0.5,
				},
			},
		},
	],
};

export const FR = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 5,
				},
			},
		},
		{
			term: {
				officeType: {
					value: 'headOffice',
					boost: 10,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'NCO',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'INC',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'LIP',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
					boost: 0,
				},
			},
		},
		{
			term: {
				officeType: {
					value: 'branch',
					boost: 0,
				},
			},
		},
	],
};

export const GB = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				statusDescription: {
					value: 'Active - Accounts Filed',
					boost: 5,
				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
	],
};

export const IE = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
	],
};

export const IT = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,
				},
			},
		},
		{
			term: {
				officeType: {
					value: 'headOffice',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'SR',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'AS',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'DI',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
		{
			term: {
				officeType: {
					value: 'other',
				},
			},
		},
	],
};

export const NL = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
	],
};

export const NO = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'active',
					boost: 2,

				},
			},
		},
		{
			term: {
				status: {
					value: 'nonactive',
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'AS',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'ENK',
					boost: 0.5,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'FLI',
					boost: 0.5,
				},
			},
		},
	],
};

export const SE = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'Active',
					boost: 2,

				},
			},
		},
		{
			terms: {
				status: [
					'NonActive',
					'Pending',
					'Other',
				],
			},
		},
	],
};

export const US = {
	must: [],
	should: [
		{
			term: {
				status: {
					value: 'Active',
					boost: 2,
				},
			},
		},
		{
			terms: {
				status: [
					'NonActive',
				],
			},
		},
		{
			term: {
				legalForm: {
					value: 'Incorporated',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'Public',
					boost: 2,
				},
			},
		},
		{
			term: {
				legalForm: {
					value: 'Limited Liability',
					boost: 0.5,
				},
			},
		},
	],
};

export const coreQueryTemplates = {
	defaultCore,
	AT,
	BE,
	CA,
	DE,
	DK,
	FR,
	GB,
	IE,
	IT,
	NL,
	NO,
	SE,
	US,
};
