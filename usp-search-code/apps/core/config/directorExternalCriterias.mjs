export default {
	searchCriteria: {
		BE: {
			country: 'BE',
			criteriaSets: [
				{
					localDirectorNumber: {
						required: true,
						minLength: 1,
					},
				},
				{
					peopleId: {
						required: true,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: true,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: true,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: true,
							minLength: 5,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: true,
							minLength: 3,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 10,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: true,
							minLength: 1,
							maxLength: 10,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
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
					localDirectorNumber: {
						required: true,
						minLength: 1,
					},
				},
				{
					peopleId: {
						required: true,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: true,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: true,
							minLength: 1,
						},
						id: {
							required: false,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
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
					localDirectorNumber: {
						required: true,
						minLength: 1,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						regNo: {
							maxLength: 18,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 18,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 18,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: true,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 18,
							required: true,
							minLength: 9,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							maxLength: 18,
							required: false,
							minLength: 9,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
						id: {
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
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
					localDirectorNumber: {
						minLength: 1,
						required: true,
					},
				},
				{
					peopleId: {
						required: true,
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
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: true,
					},
					lastName: {
						minLength: 1,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
							required: false,
						},
						province: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 1,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: true,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
							required: false,
						},
						province: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: true,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
							required: false,
						},
						province: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
							required: true,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
					},
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
							required: false,
						},
						province: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: true,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
							required: false,
						},
						province: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: true,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
						],
						required: false,
					},
				},
				{
					address: {
						city: {
							required: true,
						},
						postCode: {
							required: true,
						},
						province: {
							required: false,
						},
						street: {
							required: true,
						},
					},
					ageMax: {
						required: false,
					},
					ageMin: {
						required: false,
					},
					company: {
						id: {
							required: false,
						},
						companyName: {
							minLength: 2,
							required: false,
						},
						companyNumber: {
							minLength: 1,
							required: false,
						},
						regNo: {
							maxLength: 8,
							minLength: 8,
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
					dateOfBirth: {
						required: false,
					},
					firstName: {
						minLength: 2,
						required: false,
					},
					lastName: {
						minLength: 2,
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
							'Active',
							'Inactive',
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
					localDirectorNumber: {
						required: true,
						minLength: 1,
					},
				},
				{
					peopleId: {
						required: true,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: true,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: true,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: true,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: false,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: true,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
						required: false,
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					address: {
						houseNo: {
							required: false,
						},
						postCode: {
							required: true,
						},
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
					ageMin: {
						required: false,
					},
					ageMax: {
						required: false,
					},
					company: {
						regNo: {
							maxLength: 8,
							required: false,
							minLength: 2,
						},
						safeNo: {
							required: false,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					status: {
						allowedValues: [
							'Current',
							'Former',
						],
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
					localDirectorNumber: {
						required: true,
						minLength: 1,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: true,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: true,
							minLength: 1,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: false,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 2,
					},
					company: {
						regNo: {
							required: false,
							minLength: 1,
						},
						id: {
							required: false,
						},
						companyNumber: {
							required: true,
							minLength: 1,
						},
						type: {
							allowedValues: [
								'Ltd',
								'NonLtd',
								'NonLtdNonReg',
							],
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					dateOfBirth: {
						required: false,
					},
					address: {
						city: {
							required: false,
						},
						postCode: {
							required: false,
						},
						street: {
							required: false,
						},
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
					peopleId: {
						required: true,
					},
				},
				{
					firstName: {
						required: true,
						minLength: 2,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						safeNo: {
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: true,
						minLength: 2,
					},
					company: {
						safeNo: {
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						safeNo: {
							required: true,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						safeNo: {
							required: false,
						},
						companyName: {
							required: true,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: false,
						},
						street: {
							required: false,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						safeNo: {
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: false,
						},
						street: {
							required: true,
							minLength: 5,
						},
					},
				},
				{
					firstName: {
						required: false,
						minLength: 1,
					},
					lastName: {
						required: false,
						minLength: 1,
					},
					company: {
						safeNo: {
							required: false,
						},
						companyName: {
							required: false,
							minLength: 2,
						},
					},
					address: {
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
						city: {
							required: true,
							minLength: 3,
						},
						street: {
							required: false,
						},
					},
				},
			],
			languages: [
				'EN',
			],
		},
	},
};
