import assert from 'node:assert';
import { describe, it } from 'node:test';
import { coreQueryBuilder } from '../src/services/coreQueryBuilderService.mjs';

describe('coreQueryBuilder', () => {
	it('should return the correct query for AT', () => {
		const inputObjAT = { countryCode: 'AT' };
		const expectedQueryAT = {
			bool: {
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
							status: ['NonActive', 'Pending', 'Other'],
						},
					},
				],
			},
		};
		assert.deepStrictEqual(coreQueryBuilder(inputObjAT), expectedQueryAT);
	});
	it('should return the correct query for BE', () => {
		const inputObjBE = { countryCode: 'BE' };
		const expectedQueryBE = {
			bool: {
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
							status: ['nonactive'],
						},
					},
				],
			},
		};
		assert.deepStrictEqual(coreQueryBuilder(inputObjBE), expectedQueryBE);
	});
	it('should return the correct query for GB if userid is present users.json', () => {
		const inputObjGB = { countryCode: 'GB', activityCodeDescription: 'Section F - Construction' };
		const expectedQueryGB = {
			bool: {
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
					{
						term: {
							activityCodeDescription: {
								value: 'Section F - Construction',
								boost: 7,
							},
						},
					},
					{
						term: {
							activityCodeDescription: {
								value: 'Section U - Activities of Extraterritorial Organisations and Bodies',
								boost: 4,
							},
						},
					},
					{
						term: {
							activityCodeDescription: {
								value: 'Section E - Water Supply; Sewerage; Waste Mgmt and Remediation',
								boost: 2,
							},
						},
					},
				],
			},
		};
		assert.deepStrictEqual(coreQueryBuilder(inputObjGB), expectedQueryGB);
	});
	it('should return the correct query for GB if userid is empty', () => {
		const inputObjGB = { countryCode: 'GB', activityCodeDescription: '' };
		const expectedQueryGB = {
			bool: {
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
			},
		};
		assert.deepStrictEqual(coreQueryBuilder(inputObjGB), expectedQueryGB);
	});
	it('should return the correct query for GB if userid is not present in file', () => {
		const inputObjGB = { countryCode: 'GB', activityCodeDescription: '1235' };
		const expectedQueryGB = {
			bool: {
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
			},
		};
		assert.deepStrictEqual(coreQueryBuilder(inputObjGB), expectedQueryGB);
	});
});
