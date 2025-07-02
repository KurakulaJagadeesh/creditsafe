const searchFields = {
	criteriaSets: [
		{
			id: {
				required: true,
			},
		},
		{
			safeNo: {
				validationRegExp: 'GB\\d{8}',
				maxLength: 10,
				required: true,
				minLength: 10,
			},
		},
		{
			regNo: {
				maxLength: 8,
				required: true,
				minLength: 2,
			},
		},
		{
			vatNo: {
				validationRegExp: 'GB\\d{9}',
				maxLength: 11,
				required: true,
				minLength: 11,
			},
		},
		{
			name: {
				required: false,
			},
			address: {
				simpleValue: {
					required: false,
					minLength: 2,
				},
				postCode: {
					required: false,
					minLength: 2,
				},
				city: {
					required: false,
				},
				street: {
					required: false,
				},
			},
			type: {
				allowedValues: [
					'Ltd',
					'NonLtd',
				],
				required: false,
			},
			phoneNo: {
				required: false,
			},
			status: {
				allowedValues: [
					'Active',
					'NonActive',
				],
				required: false,
			},
		},
	],
};

export default searchFields;
