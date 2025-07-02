const weightConfig = {
	default: {
		enableSortByWeight: String(process.env.COMPANY_SEARCH_AUTOCOMPLETE_ENABLE_SORT_BY_WEIGHT).toLowerCase() === 'true',
		rules: [
			{
				field: 'status',
				type: 'enum',
				weights: {
					Active: 1000,
					NonActive: 1,
					Pending: 1,
					Other: 1,
				},
				missing: 0,
			},
			{
				field: 'turnover.to',
				type: 'numeric',
				multiplier: 0.01,
				missing: 0,
			},
			{
				field: 'creditLimit',
				type: 'numeric',
				multiplier: 0.1,
				missing: 0,
			},
			{
				field: 'noEmployees.to',
				type: 'numeric',
				multiplier: 0.1,
				missing: 0,
			},
		],
	},
	AT: {
		rules: [
			{
				field: 'companyType',
				type: 'enum',
				weights: {
					Company: 1000,
				},
				missing: 0,
			},
		],
	},
	BE: {
		rules: [
			{
				field: 'legalForm',
				type: 'enum',
				weights: {
					'PRIVATE COMPANY': 1000,
					'PHYSICAL PERSON': -1000,
				},
				missing: 0,
			},
		],
	},
	DK: {
		rules: [
			{
				field: 'organizationFormDescriptionEnglish',
				type: 'enum',
				weights: {
					'Limited company': 1000,
					'Sole proprietorship': -1000,
					'Small sole proprietorship': -1000,
					'Voluntarily association': -1000,
				},
				missing: 0,
			},
		],
	},
	FR: {
		enableSortByWeight: true,
		rules: [
			{
				field: 'officeType',
				type: 'enum',
				weights: {
					headOffice: 1000,
					branch: -500,
				},
				missing: 0,
			},
			{
				field: 'shareCapital',
				type: 'numeric',
				multiplier: 100,
				missing: 0,
			},
			{
				field: 'legalForm',
				type: 'enum',
				weights: {
					NCO: 1000,
					INC: -1000,
					LIP: -1000,
				},
				missing: 0,
			},
		],
	},
	GB: {
		enableSortByWeight: true,
		rules: [
			{
				field: 'statusDescription',
				type: 'enum',
				weights: {
					'Active - Accounts Filed': 1000,
				},
				missing: 0,
			},
		],
	},
	IT: {
		rules: [
			{
				field: 'officeType',
				type: 'enum',
				weights: {
					headOffice: 1000,
					other: 1,
				},
				missing: 0,
			},
			{
				field: 'legalForm',
				type: 'enum',
				weights: {
					SR: 1000,
					AS: -1000,
					DI: -1000,
				},
				missing: 0,
			},
		],
	},
	NO: {
		rules: [
			{
				field: 'legalForm',
				type: 'enum',
				weights: {
					AS: 1000,
					ENK: -1000,
					FLI: -1000,
				},
				missing: 0,
			},
		],
	},
	US: {
		rules: [
			{
				field: 'legalForm',
				type: 'enum',
				weights: {
					Incorporated: 1000,
					Public: 1000,
					'Limited Liability': -1000,
				},
				missing: 0,
			},
		],
	},
};

export default weightConfig;
