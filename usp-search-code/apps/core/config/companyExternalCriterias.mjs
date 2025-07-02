export default {
	searchCriteria: {
		AF: {
			country: 'AF',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'AF\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		AT: {
			country: 'AT',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'AT\\d{8}',
					},
				},
				{
					vatNo: {
						maxLength: 11,
						minLength: 8,
						required: true,
						validationRegExp: '^(ATU)?[0-9]{8}$',
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
				},
				{
					regNo: {
						maxLength: 11,
						minLength: 1,
						required: true,
						validationRegExp: '^(?:[A-Za-z]+\\s?)?(\\d{1,6})(?:\\s?[A-Za-z]+)?$',
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
					phoneNo: {
						minLength: 2,
						maxLength: 21,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		AU: {
			country: 'AU',
			criteriaSets: [
				{
					id: {
						required: true,
						minLength: 13,
						maxLength: 19,
						validationRegExp: '(0|1)-((\\w{8,9})|(\\d{9,11}))',
					},
				},
				{
					safeNo: {
						required: true,
						validationRegExp: 'AU\\d{10}',
					},
				},
				{
					regNo: {
						required: false,
						minLength: 9,
						maxLength: 9,
						validationRegExp: '\\d{9}',
					},
				},
				{
					vatNo: {
						required: false,
						minLength: 11,
						maxLength: 11,
						validationRegExp: '\\d{11}',
					},
				},
				{
					address: {
						postCode: {
							required: false,
						},
						province: {
							required: false,
							allowedValues: [
								'ACT',
								'NSW',
								'NT',
								'QLD',
								'SA',
								'TAS',
								'VIC',
								'WA',
							],
						},
					},
					name: {
						required: false,
					},
				},
			],
		},
		BE: {
			country: 'BE',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'BE\\d{8}',
					},
				},
				{
					regNo: {
						maxLength: 14,
						minLength: 9,
						required: true,
						validationRegExp: '^[0-9.]{9,14}$',
					},
				},
				{
					vatNo: {
						maxLength: 14,
						minLength: 10,
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						houseNo: {
							required: false,
						},
						postCode: {
							minLength: 1,
							maxLength: 10,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
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
			languages: [
				'EN',
			],
		},
		BR: {
			country: 'BR',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 12,
						minLength: 10,
						required: true,
						validationRegExp: 'BR\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							allowedValues: [
								'AC',
								'AL',
								'AM',
								'AP',
								'BA',
								'CE',
								'DF',
								'ES',
								'GO',
								'MA',
								'MG',
								'MS',
								'MT',
								'PA',
								'PB',
								'PE',
								'PI',
								'PR',
								'RJ',
								'RN',
								'RO',
								'RR',
								'RS',
								'SC',
								'SE',
								'SP',
								'TO',
							],
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						required: true,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
				},
			],
			languages: [
				'PT',
			],
		},
		CA: {
			country: 'CA',
			criteriaSets: [
				{
					groupResults: {
						required: false,
					},
					id: {
						required: true,
					},
					type: {
						allowedValues: [
							'ltd',
							'nonltd',
							'nonltdnonreg',
						],
						required: false,
					},
				},
				{
					groupResults: {
						required: false,
					},
					safeNo: {
						maxLength: 10,
						minLength: 8,
						required: true,
						validationRegExp: '^(CA)?\\d{8}$',
					},
				},
				{
					groupResults: {
						required: false,
					},
					regNo: {
						required: true,
					},
				},
				{
					groupResults: {
						required: false,
					},
					fileNo: {
						required: true,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
				},
				{
					groupResults: {
						required: false,
					},
					name: {
						required: true,
					},
					address: {
						postCode: {
							required: false,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: false,
							minLength: 2,
						},
						city: {
							required: false,
							minLength: 2,
						},
						street: {
							required: false,
							minLength: 2,
						},
					},
					phoneNo: {
						maxLength: 14,
						required: false,
						minLength: 4,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
				{
					groupResults: {
						required: false,
					},
					name: {
						required: false,
					},
					address: {
						postCode: {
							required: false,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: false,
							minLength: 2,
						},
						city: {
							required: false,
							minLength: 2,
						},
						street: {
							required: false,
							minLength: 2,
						},
					},
					phoneNo: {
						maxLength: 14,
						required: true,
						minLength: 4,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
				{
					groupResults: {
						required: false,
					},
					name: {
						required: false,
					},
					address: {
						postCode: {
							required: false,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: true,
							minLength: 2,
						},
						city: {
							required: true,
							minLength: 2,
						},
						street: {
							required: true,
							minLength: 2,
						},
					},
					phoneNo: {
						maxLength: 14,
						required: false,
						minLength: 4,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
				{
					address: {
						city: {
							required: false,
							minLength: 2,
						},
						postCode: {
							required: false,
							minLength: 2,
						},
						street: {
							required: false,
							minLength: 2,
						},
					},
				},
				{
					address: {
						postCode: {
							required: true,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: true,
							minLength: 2,
						},
						city: {
							required: false,
							minLength: 2,
						},
						street: {
							required: false,
							minLength: 2,
						},
					},
				},
				{
					address: {
						postCode: {
							required: false,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: true,
							minLength: 2,
						},
						city: {
							required: true,
							minLength: 2,
						},
						street: {
							required: false,
							minLength: 2,
						},
					},
				},
				{
					address: {
						postCode: {
							required: false,
							minLength: 2,
						},
						province: {
							allowedValues: [
								'AB',
								'BC',
								'MB',
								'NB',
								'NL',
								'NT',
								'NS',
								'NU',
								'ON',
								'PE',
								'QC',
								'SK',
								'YK',
							],
							required: true,
							minLength: 2,
						},
						city: {
							required: false,
							minLength: 2,
						},
						street: {
							required: true,
							minLength: 2,
						},
					},
				},
			],
			languages: [
				'EN',
			],
		},
		CH: {
			country: 'CH',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'CH\\d{8}',
					},
				},
				{
					regNo: {
						minLength: 9,
						maxLength: 23,
						required: true,
						validationRegExp: '(?:CHE|CH)?[-.\\s/]*\\d{3}[-.\\s/]*\\d{3}[-.\\s/]*\\d{3}(?=\\b|[^0-9])',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: true,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
			languages: [
				'EN',
			],
		},
		DE: {
			country: 'DE',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'DE\\d{8}',
					},
				},
				{
					vatNo: {
						maxLength: 11,
						minLength: 9,
						required: true,
						validationRegExp: '^(DE)?\\d{9}$',
					},
				},
				{
					vatNo: {
						maxLength: 11,
						minLength: 9,
						required: true,
						validationRegExp: '^(DE)?\\d{9}$',
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
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
					tradeName: {
						minLength: 2,
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
					},
					regNo: {
						minLength: 1,
						required: true,
						validationRegExp: '^(?!^\\s*HR\\s*$)(?!^\\s*HRB\\s*$)(?!^\\s*HRA\\s*$)(?!^\\s*GnR\\s*$)(?!^\\s*PR\\s*$)(?!^\\s*IN\\s*$).*$',
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 1,
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
					tradeName: {
						minLength: 2,
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		DK: {
			country: 'DK',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'DK\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
			languages: [
				'EN',
			],
		},
		ES: {
			country: 'ES',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'ES\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							allowedValues: [
								'ES-A',
								'ES-AB',
								'ES-AL',
								'ES-AV',
								'ES-B',
								'ES-BA',
								'ES-BI',
								'ES-BU',
								'ES-C',
								'ES-CA',
								'ES-CC',
								'ES-CE',
								'ES-CO',
								'ES-CR',
								'ES-CS',
								'ES-CU',
								'ES-GC',
								'ES-GI',
								'ES-GR',
								'ES-GU',
								'ES-H',
								'ES-HU',
								'ES-J',
								'ES-L',
								'ES-LE',
								'ES-LO',
								'ES-LU',
								'ES-M',
								'ES-MA',
								'ES-ML',
								'ES-MU',
								'ES-NA',
								'ES-O',
								'ES-OR',
								'ES-P',
								'ES-PM',
								'ES-PO',
								'ES-S',
								'ES-SA',
								'ES-SE',
								'ES-SG',
								'ES-SO',
								'ES-SS',
								'ES-T',
								'ES-TE',
								'ES-TF',
								'ES-TO',
								'ES-V',
								'ES-VA',
								'ES-VI',
								'ES-Z',
								'ES-ZA',
							],
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		FI: {
			country: 'FI',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'FI\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: true,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
			languages: [
				'EN',
			],
		},
		FR: {
			country: 'FR',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'FR\\d{8}',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							maxLength: 10,
							validationRegExp: '^[0-9 ]{2,10}$',
							required: false,
						},
						province: {
							allowedValues: [
								'GUADELOUPE',
								'MARTINIQUE',
								'GUYANE',
								'LA REUNION',
								'MAYOTTE',
								'ILE DE FRANCE',
								'CENTRE VAL DE LOIRE',
								'BOURGOGNE FRANCHE COMTE',
								'NORMANDIE',
								'HAUTS DE FRANCE',
								'GRAND EST',
								'PAYS DE LA LOIRE',
								'BRETAGNE',
								'NOUVELLE AQUITAINE',
								'OCCITANIE',
								'AUVERGNE RHONE ALPES',
								'PROVENCE ALPES COTE D AZUR',
								'CORSE',
							],
							required: false,
						},
						street: {
							required: false,
						},
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Branch',
						],
						required: false,
					},
					regNo: {
						maxLength: 18,
						minLength: 9,
						required: true,
						validationRegExp: '^(\\d\\s?){9}$|^(\\d\\s?){14}$',
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
				},
				{
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Branch',
						],
						required: false,
					},
					vatNo: {
						maxLength: 14,
						minLength: 11,
						required: true,
						validationRegExp: '^(?:FR\\s*)?\\d{11}$',
					},
				},
				{
					acronym: {
						minLength: 2,
						required: false,
					},
					activityCodes: {
						minLength: 2,
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						houseNo: {
							required: false,
							validationRegExp: '^\\d*$',
						},
						postCode: {
							minLength: 2,
							maxLength: 10,
							validationRegExp: '^[0-9 ]{2,10}$',
							required: false,
						},
						province: {
							allowedValues: [
								'GUADELOUPE',
								'MARTINIQUE',
								'GUYANE',
								'LA REUNION',
								'MAYOTTE',
								'ILE DE FRANCE',
								'CENTRE VAL DE LOIRE',
								'BOURGOGNE FRANCHE COMTE',
								'NORMANDIE',
								'HAUTS DE FRANCE',
								'GRAND EST',
								'PAYS DE LA LOIRE',
								'BRETAGNE',
								'NOUVELLE AQUITAINE',
								'OCCITANIE',
								'AUVERGNE RHONE ALPES',
								'PROVENCE ALPES COTE D AZUR',
								'CORSE',
							],
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Branch',
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
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		GB: {
			country: 'GB',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'UK\\d{8}',
					},
				},
				{
					regNo: {
						maxLength: 8,
						minLength: 2,
						required: true,
					},
				},
				{
					vatNo: {
						maxLength: 11,
						minLength: 9,
						required: true,
						validationRegExp: '^(GB)?\\d{9}$',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
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
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		ID: {
			country: 'ID',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'ID\\d{8}',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		IE: {
			country: 'IE',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'IE\\d{8}',
					},
				},
				{
					regNo: {
						maxLength: 8,
						minLength: 2,
						required: true,
					},
				},
				{
					vatNo: {
						maxLength: 11,
						minLength: 10,
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
						county: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					includePreviousName: {
						required: false,
					},
					name: {
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
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
					website: {
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		IT: {
			country: 'IT',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'IT\\d{8}',
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
				},
				{
					regNo: {
						required: true,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
				},
				{
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Other',
						],
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						houseNo: {
							required: false,
						},
						postCode: {
							minLength: 2,
							maxLength: 10,
							validationRegExp: '^[0-9 ]{2,10}$',
							required: false,
						},
						province: {
							allowedValues: [
								'AG',
								'AL',
								'AN',
								'AO',
								'AP',
								'AQ',
								'AR',
								'AT',
								'AV',
								'BA',
								'BG',
								'BI',
								'BL',
								'BN',
								'BO',
								'BR',
								'BS',
								'BZ',
								'CA',
								'CB',
								'CE',
								'CH',
								'CL',
								'CN',
								'CO',
								'CR',
								'CS',
								'CT',
								'CZ',
								'EN',
								'FE',
								'FG',
								'FI',
								'FM',
								'FO',
								'FR',
								'GE',
								'GO',
								'GR',
								'IM',
								'IS',
								'KR',
								'LC',
								'LE',
								'LI',
								'LO',
								'LT',
								'LU',
								'MB',
								'MC',
								'ME',
								'MI',
								'MN',
								'MO',
								'MS',
								'MT',
								'NA',
								'NO',
								'NU',
								'OR',
								'PA',
								'PC',
								'PD',
								'PE',
								'PG',
								'PI',
								'PN',
								'PO',
								'PR',
								'PS',
								'PT',
								'PV',
								'PZ',
								'RA',
								'RC',
								'RE',
								'RG',
								'RI',
								'RM',
								'RN',
								'RO',
								'SA',
								'SI',
								'SO',
								'SP',
								'SR',
								'SS',
								'SV',
								'TA',
								'TE',
								'TN',
								'TO',
								'TP',
								'TR',
								'TS',
								'TV',
								'UD',
								'VA',
								'VB',
								'VC',
								'VE',
								'VI',
								'VR',
								'VT',
								'VV',
							],
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Other',
						],
						required: false,
					},
					phoneNo: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		JP: {
			country: 'JP',
			criteriaSets: [
				{
					id: {
						required: true,
						validationRegExp: '(X)-JP\\d{9}',
					},
					type: {
						allowedValues: [
							'ltd',
							'nonltd',
							'nonltdnonreg',
						],
						required: false,
					},
				},
				{
					safeNo: {
						maxLength: 11,
						minLength: 11,
						required: true,
						validationRegExp: 'JP\\d{9}',
					},
				},
				{
					vatNo: {
						minLength: 2,
						required: true,
					},
				},
				{
					regNo: {
						minLength: 2,
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							required: false,
						},
					},
					industryCode: {
						required: false,
					},
					name: {
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'HeadOffice, Branch',
						],
						required: false,
					},
					phoneNo: {
						required: false,
					},
					regStatus: {
						allowedValues: [
							'Reg',
							'NonReg',
							'Reg,NonReg',
						],
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
							'Active,NonActive',
						],
						required: false,
					},
					website: {
						required: false,
					},
				},
			],
			languages: [
				'EN',
				'JA',
			],
		},
		KH: {
			country: 'KH',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'KH\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		KR: {
			country: 'KR',
			criteriaSets: [
				{
					id: {
						required: false,
						validationRegExp: '(0|1)-.+',
					},
					type: {
						allowedValues: [
							'ltd',
							'nonltd',
							'nonltdnonreg',
						],
						required: false,
					},
				},
				{
					regNo: {
						required: false,
					},
				},
				{
					vatNo: {
						required: false,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'KR\\d{8}',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						province: {
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
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
			languages: [
				'EN',
			],
		},
		LA: {
			country: 'LA',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'LA\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		LI: {
			country: 'LI',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'LI\\d{8}',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: true,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
			languages: [
				'EN',
			],
		},
		LU: {
			country: 'LU',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'LU\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: true,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
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
			languages: [
				'EN',
			],
		},
		MM: {
			country: 'MM',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'MM\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		MX: {
			country: 'MX',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'MX\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: true,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		MY: {
			country: 'MY',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'MY\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		NL: {
			country: 'NL',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
						minLength: 7,
						maxLength: 14,
						validationRegExp: '^(?:NL)?\\d{7,9}(?:B\\d{2})?$',
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'NL\\d{8}',
					},
				},
				{
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Branch',
						],
						required: false,
					},
					regNo: {
						maxLength: 12,
						minLength: 8,
						required: true,
						validationRegExp: '(\\d{8}|\\d{12})',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						houseNo: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Branch',
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
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		NO: {
			country: 'NO',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 11,
						minLength: 10,
						required: true,
						validationRegExp: 'NO\\d{8,9}',
					},
				},
				{
					regNo: {
						minLength: 1,
						required: true,
						validationRegExp: '\\d+',
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
							'NonLtdNonReg',
						],
						required: false,
					},
				},
				{
					address: {
						city: {
							minLength: 2,
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							minLength: 2,
							required: false,
						},
					},
					exact: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
							'NonLtdNonReg',
						],
						required: false,
					},
					phoneNo: {
						maxLength: 14,
						minLength: 3,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		SE: {
			country: 'SE',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'SE\\d{8}',
					},
				},
				{
					regNo: {
						maxLength: 14,
						minLength: 6,
						required: true,
						validationRegExp: '^(\\d+|\\d+-\\d+)$',
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							minLength: 3,
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							minLength: 3,
							required: false,
						},
					},
					name: {
						minLength: 1,
						required: false,
					},
					status: {
						required: false,
						allowedValues: [
							'Active',
							'NonActive',
							'Pending',
							'Other',
							'Active, NonActive',
						],
					},
					type: {
						allowedValues: [
							'Ltd',
							'NonLtd',
						],
						required: false,
					},
					phoneNo: {
						maxLength: 14,
						minLength: 3,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		TH: {
			country: 'TH',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'TH\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		US: {
			country: 'US',
			criteriaSets: [
				{
					id: {
						required: true,
						validationRegExp: '(X)-US.+',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					vatNo: {
						required: true,
					},
				},
				{
					safeNo: {
						required: true,
						validationRegExp: 'US.+',
					},
					searchMode: {
						allowedValues: [
							'Default',
							'IncludeCoefficient',
							'IncludeThinRecords',
							'IncludeCoefficient_IncludeThinRecords',
						],
						required: false,
					},
				},
				{
					safeNo: {
						required: true,
						validationRegExp: 'US.+',
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						province: {
							allowedValues: [
								'AA',
								'AE',
								'AK',
								'AL',
								'AP',
								'AR',
								'AS',
								'AZ',
								'CA',
								'CO',
								'CT',
								'DC',
								'DE',
								'FL',
								'FM',
								'GA',
								'GU',
								'HI',
								'IA',
								'ID',
								'IL',
								'IN',
								'KS',
								'KY',
								'LA',
								'MA',
								'MD',
								'ME',
								'MH',
								'MI',
								'MN',
								'MO',
								'MP',
								'MS',
								'MT',
								'NC',
								'ND',
								'NE',
								'NH',
								'NJ',
								'NM',
								'NV',
								'NY',
								'OH',
								'OK',
								'OR',
								'PA',
								'PR',
								'PW',
								'RI',
								'SC',
								'SD',
								'TN',
								'TT',
								'TX',
								'UT',
								'VA',
								'VI',
								'VT',
								'WA',
								'WI',
								'WV',
								'WY',
							],
							required: false,
						},
						street: {
							required: false,
						},
					},
					incTradingAddresses: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					incTradingNames: {
						allowedValues: [
							true,
							false,
						],
						required: false,
					},
					name: {
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
							'Trading',
							'Branch',
							'Franchise',
							'Trading,Branch',
							'Branch,Franchise',
							'Trading,Franchise',
							'Trading,Branch,Franchise',
						],
						required: false,
					},
					phoneNo: {
						required: false,
					},
					searchMode: {
						allowedValues: [
							'Default',
							'IncludeCoefficient',
							'IncludeThinRecords',
							'IncludeCoefficient_IncludeThinRecords',
						],
						required: false,
					},
					status: {
						allowedValues: [
							'Active',
							'NonActive',
						],
						required: false,
					},
					website: {
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
		VN: {
			country: 'VN',
			criteriaSets: [
				{
					id: {
						required: true,
					},
				},
				{
					safeNo: {
						maxLength: 10,
						minLength: 10,
						required: true,
						validationRegExp: 'VN\\d{8}',
					},
				},
				{
					regNo: {
						required: true,
					},
				},
				{
					address: {
						city: {
							required: false,
						},
						postCode: {
							minLength: 2,
							required: false,
						},
						simpleValue: {
							minLength: 2,
							required: false,
						},
						street: {
							required: false,
						},
					},
					name: {
						minLength: 2,
						required: false,
					},
					officeType: {
						allowedValues: [
							'HeadOffice',
						],
						required: false,
					},
					tradeName: {
						minLength: 2,
						required: false,
					},
				},
			],
			languages: [
				'EN',
			],
		},
	},
};
