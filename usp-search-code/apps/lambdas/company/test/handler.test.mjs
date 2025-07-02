import assert from 'node:assert';
import { describe, it } from 'node:test';
import esmock from 'esmock';

const awsRequestTemplate = {
	httpMethod: 'GET',
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	body: null,
	headers: {},
};

const esMultiQueryMockOutput = {
	body: {
		took: 20,
		responses: [
			{
				took: 3,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 0,
						relation: 'eq',
					},
					max_score: null,
					hits: [],
				},
				status: 200,
			},
			{
				took: 10,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 328,
						relation: 'eq',
					},
					max_score: 127.143715,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 127.143715,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE10607665',
							_score: 119.23125,
							_source: {
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								tradingNames: [
									'Audi Zentrum Limburg-Diez',
								],
								'noEmployees.to': 4,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 4000,
								incorporationDate: '2005-01-08T00:00:00.000000Z',
								riskScore: 51,
								connectId: 'DE-1-DE10607665',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								address: {
									province: 'Rheinland-Pfalz',
									city: 'Diez',
									simpleValue: 'Limburger Str. 154-156, Diez',
									postCode: {
										prefix: '65',
										raw: '65582',
										full: '65582',
									},
									line1: 'Limburger Str. 154-156',
								},
								activityCodes: [
									'947',
								],
								safeNo: 'DE10607665',
								legalForm: 'Sole Trader',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE10607665',
								'@timestamp': '2023-05-30T18:19:23.325Z',
								'noEmployees.from': 4,
								phoneNos: {
									raw: [
										'+49643291910',
									],
									exPrefix: [
										'643291910',
									],
									full: [
										'49643291910',
									],
								},
								previousNames: [
									'Audi Zentrum',
									'Audi Zentrum Limburg-Diez',
								],
								name: 'Audi Zentrum Limburg-Diez',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 119.045975,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 118.26703,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 118.11738,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 118.11738,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 115.24772,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02450304',
							_score: 109.14788,
							_source: {
								regNo: {
									exSuffix: 'hrb74111',
									raw: 'HRB 74111 B',
									numeric: '74111',
									exPrefix: '74111b',
									full: 'hrb74111b',
								},
								vatNo: {
									raw: [
										'DE243910616',
									],
									exPrefix: [
										'243910616',
									],
									full: [
										'de243910616',
									],
								},
								lastUpdateDate: '2023-04-03T21:41:20.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 74111 B 14057',
								tradingNames: [
									'Audi Berlin GmbH',
								],
								urls: [
									'www.audizentrum-berlin.de',
								],
								orgNo: '74111',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2000-01-20T00:00:00.000000Z',
								riskScore: 80,
								connectId: 'DE-0-DE02450304',
								turnover: {
									to: 50000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2008-12-31T00:00:00.000000Z',
								address: {
									city: 'Berlin',
									registeredCity: 'Berlin-Charlottenburg',
									simpleValue: 'Franklinstraße 24, Berlin',
									postCode: {
										prefix: '10',
										raw: '10587',
										full: '10587',
									},
									line1: 'Franklinstraße 24',
								},
								safeNo: 'DE02450304',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02450304',
								'@timestamp': '2023-05-30T17:07:01.365Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4930666077800',
									],
									exPrefix: [
										'30666077800',
									],
									full: [
										'4930666077800',
									],
								},
								previousNames: [
									'Audi Zentrum Berlin GmbH',
									'Audi Berlin GmbH',
								],
								name: 'Audi Berlin GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01119153',
							_score: 106.73378,
							_source: {
								regNo: {
									exSuffix: 'hrb100107',
									raw: 'HRB 100107',
									numeric: '100107',
								},
								vatNo: {
									raw: [
										'DE177001183',
									],
									exPrefix: [
										'177001183',
									],
									full: [
										'de177001183',
									],
								},
								lastUpdateDate: '2022-11-01T05:40:22.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 100107 38100',
								tradingNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								urls: [
									'www.audi-zentrum-wolfsburg.de',
								],
								orgNo: '100107',
								'noEmployees.to': 49,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 255000,
								incorporationDate: '1924-05-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01119153',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2015-09-30T00:00:00.000000Z',
								address: {
									city: 'Wolfsburg',
									registeredCity: 'Braunschweig',
									simpleValue: 'Heinrich-Nordhoff-Straße 129, Wolfsburg',
									postCode: {
										prefix: '38',
										raw: '38440',
										full: '38440',
									},
									line1: 'Heinrich-Nordhoff-Straße 129',
								},
								safeNo: 'DE01119153',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01119153',
								'@timestamp': '2023-05-30T17:16:05.033Z',
								'noEmployees.from': 20,
								phoneNos: {
									raw: [
										'+49536120430',
									],
									exPrefix: [
										'536120430',
									],
									full: [
										'49536120430',
									],
								},
								previousNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								name: 'AUDI Zentrum Wolfsburg GmbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
			{
				took: 13,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 0,
						relation: 'eq',
					},
					max_score: null,
					hits: [],
				},
				status: 200,
			},
			{
				took: 13,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 328,
						relation: 'eq',
					},
					max_score: 127.143715,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 127.143715,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 119.23125,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE10607665',
							_score: 119.23125,
							_source: {
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								tradingNames: [
									'Audi Zentrum Limburg-Diez',
								],
								'noEmployees.to': 4,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 4000,
								incorporationDate: '2005-01-08T00:00:00.000000Z',
								riskScore: 51,
								connectId: 'DE-1-DE10607665',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								address: {
									province: 'Rheinland-Pfalz',
									city: 'Diez',
									simpleValue: 'Limburger Str. 154-156, Diez',
									postCode: {
										prefix: '65',
										raw: '65582',
										full: '65582',
									},
									line1: 'Limburger Str. 154-156',
								},
								activityCodes: [
									'947',
								],
								safeNo: 'DE10607665',
								legalForm: 'Sole Trader',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE10607665',
								'@timestamp': '2023-05-30T18:19:23.325Z',
								'noEmployees.from': 4,
								phoneNos: {
									raw: [
										'+49643291910',
									],
									exPrefix: [
										'643291910',
									],
									full: [
										'49643291910',
									],
								},
								previousNames: [
									'Audi Zentrum',
									'Audi Zentrum Limburg-Diez',
								],
								name: 'Audi Zentrum Limburg-Diez',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 119.045975,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 118.26703,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 118.11738,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 118.11738,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 117.81668,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 115.24772,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02450304',
							_score: 109.14788,
							_source: {
								regNo: {
									exSuffix: 'hrb74111',
									raw: 'HRB 74111 B',
									numeric: '74111',
									exPrefix: '74111b',
									full: 'hrb74111b',
								},
								vatNo: {
									raw: [
										'DE243910616',
									],
									exPrefix: [
										'243910616',
									],
									full: [
										'de243910616',
									],
								},
								lastUpdateDate: '2023-04-03T21:41:20.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 74111 B 14057',
								tradingNames: [
									'Audi Berlin GmbH',
								],
								urls: [
									'www.audizentrum-berlin.de',
								],
								orgNo: '74111',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2000-01-20T00:00:00.000000Z',
								riskScore: 80,
								connectId: 'DE-0-DE02450304',
								turnover: {
									to: 50000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2008-12-31T00:00:00.000000Z',
								address: {
									city: 'Berlin',
									registeredCity: 'Berlin-Charlottenburg',
									simpleValue: 'Franklinstraße 24, Berlin',
									postCode: {
										prefix: '10',
										raw: '10587',
										full: '10587',
									},
									line1: 'Franklinstraße 24',
								},
								safeNo: 'DE02450304',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02450304',
								'@timestamp': '2023-05-30T17:07:01.365Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4930666077800',
									],
									exPrefix: [
										'30666077800',
									],
									full: [
										'4930666077800',
									],
								},
								previousNames: [
									'Audi Zentrum Berlin GmbH',
									'Audi Berlin GmbH',
								],
								name: 'Audi Berlin GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01119153',
							_score: 106.73378,
							_source: {
								regNo: {
									exSuffix: 'hrb100107',
									raw: 'HRB 100107',
									numeric: '100107',
								},
								vatNo: {
									raw: [
										'DE177001183',
									],
									exPrefix: [
										'177001183',
									],
									full: [
										'de177001183',
									],
								},
								lastUpdateDate: '2022-11-01T05:40:22.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 100107 38100',
								tradingNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								urls: [
									'www.audi-zentrum-wolfsburg.de',
								],
								orgNo: '100107',
								'noEmployees.to': 49,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 255000,
								incorporationDate: '1924-05-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01119153',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2015-09-30T00:00:00.000000Z',
								address: {
									city: 'Wolfsburg',
									registeredCity: 'Braunschweig',
									simpleValue: 'Heinrich-Nordhoff-Straße 129, Wolfsburg',
									postCode: {
										prefix: '38',
										raw: '38440',
										full: '38440',
									},
									line1: 'Heinrich-Nordhoff-Straße 129',
								},
								safeNo: 'DE01119153',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01119153',
								'@timestamp': '2023-05-30T17:16:05.033Z',
								'noEmployees.from': 20,
								phoneNos: {
									raw: [
										'+49536120430',
									],
									exPrefix: [
										'536120430',
									],
									full: [
										'49536120430',
									],
								},
								previousNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								name: 'AUDI Zentrum Wolfsburg GmbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
			{
				took: 14,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 447,
						relation: 'eq',
					},
					max_score: 129.90953,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01415364',
							_score: 129.90953,
							_source: {
								regNo: {
									exSuffix: 'hrb11024',
									raw: 'HRB 11024',
									numeric: '11024',
								},
								vatNo: {
									raw: [
										'DE814218971',
									],
									exPrefix: [
										'814218971',
									],
									full: [
										'de814218971',
									],
								},
								lastUpdateDate: '2023-01-27T05:37:50.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 11024 41061',
								tradingNames: [
									'Audis GmbH',
								],
								urls: [
									'www.audis.eu',
								],
								orgNo: '11024',
								'noEmployees.to': 49,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 165000,
								incorporationDate: '2005-01-06T00:00:00.000000Z',
								riskScore: 64,
								connectId: 'DE-0-DE01415364',
								turnover: {
									from: 2000001,
									to: 5000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Erkelenz',
									registeredCity: 'Mönchengladbach',
									simpleValue: 'Kölner Straße 90, Erkelenz',
									postCode: {
										prefix: '41',
										raw: '41812',
										full: '41812',
									},
									line1: 'Kölner Straße 90',
								},
								safeNo: 'DE01415364',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE01415364',
								'@timestamp': '2023-05-30T16:43:45.854Z',
								'noEmployees.from': 20,
								phoneNos: {
									raw: [
										'+49243180960',
									],
									exPrefix: [
										'243180960',
									],
									full: [
										'49243180960',
									],
								},
								previousNames: [
									'Audis GmbH',
								],
								name: 'Audis GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 123.53621,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 115.703316,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 114.81076,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 114.81076,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 114.47541,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 113.56875,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE08181788',
							_score: 113.0745,
							_source: {
								address: {
									province: 'Baden-Württemberg',
									city: 'Esslingen',
									simpleValue: 'Rotenackerstr. 43, Esslingen',
									postCode: {
										prefix: '73',
										raw: '73732',
										full: '73732',
									},
									line1: 'Rotenackerstr. 43',
								},
								lastUpdateDate: '2022-03-13T14:29:33.000Z',
								activityCodes: [
									'1307',
								],
								safeNo: 'DE08181788',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Rita Zeisel-Audy - Rita Zeisel- Audy',
								],
								statusDescription: 'Active',
								companyId: 'DE08181788',
								'@timestamp': '2023-05-30T19:24:59.755Z',
								'noEmployees.from': 10,
								'noEmployees.to': 10,
								phoneNos: {
									raw: [
										'0711373060',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audy-Design',
									'Rita Zeisel-Audy - Rita Zeisel- Audy',
								],
								'@version': '1',
								name: 'Rita Zeisel- Audy',
								creditLimit: 2000,
								riskScore: 30,
								connectId: 'DE-1-DE08181788',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00899803',
							_score: 111.56087,
							_source: {
								regNo: {
									exSuffix: 'hrb85305',
									raw: 'HRB 85305',
									numeric: '85305',
								},
								vatNo: {
									raw: [
										'DE237910966',
									],
									exPrefix: [
										'237910966',
									],
									full: [
										'de237910966',
									],
								},
								lastUpdateDate: '2023-01-06T05:39:27.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 85305 64293',
								tradingNames: [
									'audis Zertifizierungsgesellschaft mbH',
								],
								urls: [
									'www.audis-zert.de',
								],
								orgNo: '85305',
								'noEmployees.to': 2,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 18500,
								incorporationDate: '2004-08-02T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE00899803',
								turnover: {
									from: 100001,
									to: 200000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Viernheim',
									registeredCity: 'Darmstadt',
									simpleValue: 'Rathausstraße 24, Viernheim',
									postCode: {
										prefix: '68',
										raw: '68519',
										full: '68519',
									},
									line1: 'Rathausstraße 24',
								},
								safeNo: 'DE00899803',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE00899803',
								'@timestamp': '2023-05-30T16:53:58.568Z',
								'noEmployees.from': 1,
								phoneNos: {
									raw: [
										'+4962069510210',
									],
									exPrefix: [
										'62069510210',
									],
									full: [
										'4962069510210',
									],
								},
								previousNames: [
									'audis Zertifizierungsgesellschaft mbH',
								],
								name: 'audis Zertifizierungsgesellschaft mbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
			{
				took: 11,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 447,
						relation: 'eq',
					},
					max_score: 129.90953,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01415364',
							_score: 129.90953,
							_source: {
								regNo: {
									exSuffix: 'hrb11024',
									raw: 'HRB 11024',
									numeric: '11024',
								},
								vatNo: {
									raw: [
										'DE814218971',
									],
									exPrefix: [
										'814218971',
									],
									full: [
										'de814218971',
									],
								},
								lastUpdateDate: '2023-01-27T05:37:50.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 11024 41061',
								tradingNames: [
									'Audis GmbH',
								],
								urls: [
									'www.audis.eu',
								],
								orgNo: '11024',
								'noEmployees.to': 49,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 165000,
								incorporationDate: '2005-01-06T00:00:00.000000Z',
								riskScore: 64,
								connectId: 'DE-0-DE01415364',
								turnover: {
									from: 2000001,
									to: 5000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Erkelenz',
									registeredCity: 'Mönchengladbach',
									simpleValue: 'Kölner Straße 90, Erkelenz',
									postCode: {
										prefix: '41',
										raw: '41812',
										full: '41812',
									},
									line1: 'Kölner Straße 90',
								},
								safeNo: 'DE01415364',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE01415364',
								'@timestamp': '2023-05-30T16:43:45.854Z',
								'noEmployees.from': 20,
								phoneNos: {
									raw: [
										'+49243180960',
									],
									exPrefix: [
										'243180960',
									],
									full: [
										'49243180960',
									],
								},
								previousNames: [
									'Audis GmbH',
								],
								name: 'Audis GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 123.53621,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 116.10028,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 115.703316,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 115.59502,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 114.81076,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 114.81076,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 114.47541,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 113.56875,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE08181788',
							_score: 113.0745,
							_source: {
								address: {
									province: 'Baden-Württemberg',
									city: 'Esslingen',
									simpleValue: 'Rotenackerstr. 43, Esslingen',
									postCode: {
										prefix: '73',
										raw: '73732',
										full: '73732',
									},
									line1: 'Rotenackerstr. 43',
								},
								lastUpdateDate: '2022-03-13T14:29:33.000Z',
								activityCodes: [
									'1307',
								],
								safeNo: 'DE08181788',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Rita Zeisel-Audy - Rita Zeisel- Audy',
								],
								statusDescription: 'Active',
								companyId: 'DE08181788',
								'@timestamp': '2023-05-30T19:24:59.755Z',
								'noEmployees.from': 10,
								'noEmployees.to': 10,
								phoneNos: {
									raw: [
										'0711373060',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audy-Design',
									'Rita Zeisel-Audy - Rita Zeisel- Audy',
								],
								'@version': '1',
								name: 'Rita Zeisel- Audy',
								creditLimit: 2000,
								riskScore: 30,
								connectId: 'DE-1-DE08181788',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00899803',
							_score: 111.56087,
							_source: {
								regNo: {
									exSuffix: 'hrb85305',
									raw: 'HRB 85305',
									numeric: '85305',
								},
								vatNo: {
									raw: [
										'DE237910966',
									],
									exPrefix: [
										'237910966',
									],
									full: [
										'de237910966',
									],
								},
								lastUpdateDate: '2023-01-06T05:39:27.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 85305 64293',
								tradingNames: [
									'audis Zertifizierungsgesellschaft mbH',
								],
								urls: [
									'www.audis-zert.de',
								],
								orgNo: '85305',
								'noEmployees.to': 2,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 18500,
								incorporationDate: '2004-08-02T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE00899803',
								turnover: {
									from: 100001,
									to: 200000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Viernheim',
									registeredCity: 'Darmstadt',
									simpleValue: 'Rathausstraße 24, Viernheim',
									postCode: {
										prefix: '68',
										raw: '68519',
										full: '68519',
									},
									line1: 'Rathausstraße 24',
								},
								safeNo: 'DE00899803',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE00899803',
								'@timestamp': '2023-05-30T16:53:58.568Z',
								'noEmployees.from': 1,
								phoneNos: {
									raw: [
										'+4962069510210',
									],
									exPrefix: [
										'62069510210',
									],
									full: [
										'4962069510210',
									],
								},
								previousNames: [
									'audis Zertifizierungsgesellschaft mbH',
								],
								name: 'audis Zertifizierungsgesellschaft mbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
			{
				took: 13,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 437,
						relation: 'eq',
					},
					max_score: 124.56577,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 124.56577,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 117.18632,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 117.18632,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 117.18632,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 117.044334,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 117.044334,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 116.66023,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 115.98413,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 115.98413,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 115.75006,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 114.6311,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02450304',
							_score: 106.82499,
							_source: {
								regNo: {
									exSuffix: 'hrb74111',
									raw: 'HRB 74111 B',
									numeric: '74111',
									exPrefix: '74111b',
									full: 'hrb74111b',
								},
								vatNo: {
									raw: [
										'DE243910616',
									],
									exPrefix: [
										'243910616',
									],
									full: [
										'de243910616',
									],
								},
								lastUpdateDate: '2023-04-03T21:41:20.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 74111 B 14057',
								tradingNames: [
									'Audi Berlin GmbH',
								],
								urls: [
									'www.audizentrum-berlin.de',
								],
								orgNo: '74111',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2000-01-20T00:00:00.000000Z',
								riskScore: 80,
								connectId: 'DE-0-DE02450304',
								turnover: {
									to: 50000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2008-12-31T00:00:00.000000Z',
								address: {
									city: 'Berlin',
									registeredCity: 'Berlin-Charlottenburg',
									simpleValue: 'Franklinstraße 24, Berlin',
									postCode: {
										prefix: '10',
										raw: '10587',
										full: '10587',
									},
									line1: 'Franklinstraße 24',
								},
								safeNo: 'DE02450304',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02450304',
								'@timestamp': '2023-05-30T17:07:01.365Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4930666077800',
									],
									exPrefix: [
										'30666077800',
									],
									full: [
										'4930666077800',
									],
								},
								previousNames: [
									'Audi Zentrum Berlin GmbH',
									'Audi Berlin GmbH',
								],
								name: 'Audi Berlin GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01119153',
							_score: 104.959526,
							_source: {
								regNo: {
									exSuffix: 'hrb100107',
									raw: 'HRB 100107',
									numeric: '100107',
								},
								vatNo: {
									raw: [
										'DE177001183',
									],
									exPrefix: [
										'177001183',
									],
									full: [
										'de177001183',
									],
								},
								lastUpdateDate: '2022-11-01T05:40:22.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 100107 38100',
								tradingNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								urls: [
									'www.audi-zentrum-wolfsburg.de',
								],
								orgNo: '100107',
								'noEmployees.to': 49,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 255000,
								incorporationDate: '1924-05-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01119153',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2015-09-30T00:00:00.000000Z',
								address: {
									city: 'Wolfsburg',
									registeredCity: 'Braunschweig',
									simpleValue: 'Heinrich-Nordhoff-Straße 129, Wolfsburg',
									postCode: {
										prefix: '38',
										raw: '38440',
										full: '38440',
									},
									line1: 'Heinrich-Nordhoff-Straße 129',
								},
								safeNo: 'DE01119153',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01119153',
								'@timestamp': '2023-05-30T17:16:05.033Z',
								'noEmployees.from': 20,
								phoneNos: {
									raw: [
										'+49536120430',
									],
									exPrefix: [
										'536120430',
									],
									full: [
										'49536120430',
									],
								},
								previousNames: [
									'AUDI Zentrum Wolfsburg GmbH',
								],
								name: 'AUDI Zentrum Wolfsburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00965778',
							_score: 104.959526,
							_source: {
								regNo: {
									exSuffix: 'hrb19461',
									raw: 'HRB 19461',
									numeric: '19461',
								},
								vatNo: {
									raw: [
										'DE218658923',
									],
									exPrefix: [
										'218658923',
									],
									full: [
										'de218658923',
									],
								},
								lastUpdateDate: '2022-12-16T05:41:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 19461 09112',
								tradingNames: [
									'AUDI ZENTRUM ZWICKAU GmbH',
								],
								urls: [
									'www.audi-zentrum-zwickau.de',
								],
								orgNo: '19461',
								'noEmployees.to': 99,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 44500,
								incorporationDate: '2001-08-10T00:00:00.000000Z',
								riskScore: 59,
								connectId: 'DE-0-DE00965778',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-09-30T00:00:00.000000Z',
								address: {
									city: 'Zwickau',
									registeredCity: 'Chemnitz',
									simpleValue: 'Oskar-Arnold-Straße 30, Zwickau',
									postCode: {
										prefix: '08',
										raw: '08056',
										full: '08056',
									},
									line1: 'Oskar-Arnold-Straße 30',
								},
								safeNo: 'DE00965778',
								legalForm: 'Private limited company',
								riskRating: 'C',
								statusDescription: 'Active',
								companyId: 'DE00965778',
								'@timestamp': '2023-05-30T16:32:17.412Z',
								'noEmployees.from': 50,
								phoneNos: {
									raw: [
										'+49375560860',
									],
									exPrefix: [
										'375560860',
									],
									full: [
										'49375560860',
									],
								},
								previousNames: [
									'Auto Forum Zwickau GmbH',
									'AUDI ZENTRUM ZWICKAU GmbH',
								],
								name: 'AUDI ZENTRUM ZWICKAU GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 104.959526,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
			{
				took: 9,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 0,
						relation: 'eq',
					},
					max_score: null,
					hits: [],
				},
				status: 200,
			},
			{
				took: 13,
				timed_out: false,
				_shards: {
					total: 5,
					successful: 5,
					skipped: 0,
					failed: 0,
				},
				hits: {
					total: {
						value: 2102,
						relation: 'eq',
					},
					max_score: 450.76508,
					hits: [
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12912509',
							_score: 450.76508,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Hattersheim',
									simpleValue: 'Schulstr. 45, Hattersheim',
									postCode: {
										prefix: '65',
										raw: '65795',
										full: '65795',
									},
									line1: 'Schulstr. 45',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12912509',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Glöckler',
								],
								statusDescription: 'Active',
								companyId: 'DE12912509',
								'@timestamp': '2023-05-30T19:48:41.513Z',
								'noEmployees.from': 2,
								'noEmployees.to': 2,
								phoneNos: {
									raw: [
										'+49619072741',
									],
									exPrefix: [
										'619072741',
									],
									full: [
										'49619072741',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Glöckler',
								],
								'@version': '1',
								name: 'Audi Glöckler',
								creditLimit: 1000,
								riskScore: 38,
								connectId: 'DE-1-DE12912509',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE25183402',
							_score: 433.45728,
							_source: {
								regNo: {
									exSuffix: 'hrb106821',
									raw: 'HRB 106821',
									numeric: '106821',
								},
								vatNo: {
									raw: [
										'DE811138559',
									],
									exPrefix: [
										'811138559',
									],
									full: [
										'de811138559',
									],
								},
								lastUpdateDate: '2022-09-06T21:43:14.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 106821 70190',
								tradingNames: [
									'Audi Sport GmbH',
								],
								urls: [
									'www.audi-mediacenter.com',
								],
								orgNo: '106821',
								'noEmployees.to': 1999,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 440000,
								incorporationDate: '1983-10-14T00:00:00.000000Z',
								riskScore: 78,
								connectId: 'DE-0-DE25183402',
								turnover: {
									from: 500000001,
									to: 1000000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Neckarsulm',
									registeredCity: 'Stuttgart',
									simpleValue: 'NSU-Straße 24 - 32, Neckarsulm',
									postCode: {
										prefix: '74',
										raw: '74172',
										full: '74172',
									},
									line1: 'NSU-Straße 24 - 32',
								},
								safeNo: 'DE25183402',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE25183402',
								'@timestamp': '2023-05-30T17:20:31.348Z',
								'noEmployees.from': 1000,
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'quattro GmbH',
									'Audi Sport GmbH',
								],
								name: 'Audi Sport GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02092112',
							_score: 427.63733,
							_source: {
								regNo: {
									exSuffix: 'hrb165596',
									raw: 'HRB 165596',
									numeric: '165596',
								},
								vatNo: {
									raw: [
										'DE252255554',
									],
									exPrefix: [
										'252255554',
									],
									full: [
										'de252255554',
									],
								},
								lastUpdateDate: '2021-12-09T23:42:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 165596 80333',
								tradingNames: [
									'Audi München GmbH',
								],
								urls: [
									'www.audi-partner.de',
								],
								orgNo: '165596',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 11500,
								incorporationDate: '2006-12-06T00:00:00.000000Z',
								riskScore: 66,
								connectId: 'DE-0-DE02092112',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'München',
									registeredCity: 'München',
									simpleValue: 'Albrechtstraße 16, München',
									postCode: {
										prefix: '80',
										raw: '80636',
										full: '80636',
									},
									line1: 'Albrechtstraße 16',
								},
								safeNo: 'DE02092112',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02092112',
								'@timestamp': '2023-05-30T17:11:37.932Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+498151272860',
									],
									exPrefix: [
										'8151272860',
									],
									full: [
										'498151272860',
									],
								},
								previousNames: [
									'Autohaus Leonrodstraße GmbH',
									'Audi München GmbH',
								],
								name: 'Audi München GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02377293',
							_score: 420.0028,
							_source: {
								regNo: {
									exSuffix: 'hrb24202',
									raw: 'HRB 24202',
									numeric: '24202',
								},
								vatNo: {
									raw: [
										'DE258398906',
									],
									exPrefix: [
										'258398906',
									],
									full: [
										'de258398906',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:28.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24202 04275',
								tradingNames: [
									'Audi Leipzig GmbH',
								],
								urls: [
									'www.audizentrumleipzig.de',
								],
								orgNo: '24202',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2008-01-21T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02377293',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Leipzig',
									registeredCity: 'Leipzig',
									simpleValue: 'Richard-Lehmann-Str. 124, Leipzig',
									postCode: {
										prefix: '04',
										raw: '04277',
										full: '04277',
									},
									line1: 'Richard-Lehmann-Str. 124',
								},
								safeNo: 'DE02377293',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02377293',
								'@timestamp': '2023-05-30T17:19:02.677Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49341226600',
									],
									exPrefix: [
										'341226600',
									],
									full: [
										'49341226600',
									],
								},
								previousNames: [
									'Audi Zentrum Leipzig GmbH',
									'Audi Leipzig GmbH',
								],
								name: 'Audi Leipzig GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02086044',
							_score: 419.816,
							_source: {
								regNo: {
									exSuffix: 'hrb103922',
									raw: 'HRB 103922',
									numeric: '103922',
								},
								vatNo: {
									raw: [
										'DE257678842',
									],
									exPrefix: [
										'257678842',
									],
									full: [
										'de257678842',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:39.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 103922 20355',
								tradingNames: [
									'Audi Hamburg GmbH',
								],
								urls: [
									'www.audizentrum-hamburg.de',
								],
								orgNo: '103922',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-09-12T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02086044',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								address: {
									city: 'Hamburg',
									registeredCity: 'Hamburg',
									simpleValue: 'Kollaustr. 41-63, Hamburg',
									postCode: {
										prefix: '22',
										raw: '22529',
										full: '22529',
									},
									line1: 'Kollaustr. 41-63',
								},
								safeNo: 'DE02086044',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02086044',
								'@timestamp': '2023-05-30T16:29:34.804Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+4940548000',
									],
									exPrefix: [
										'40548000',
									],
									full: [
										'4940548000',
									],
								},
								previousNames: [
									'Audi Zentrum Hamburg GmbH',
									'Audi Hamburg GmbH',
								],
								name: 'Audi Hamburg GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02543254',
							_score: 419.816,
							_source: {
								regNo: {
									exSuffix: 'hrb4937',
									raw: 'HRB 4937',
									numeric: '4937',
								},
								vatNo: {
									raw: [
										'DE815040079',
									],
									exPrefix: [
										'815040079',
									],
									full: [
										'de815040079',
									],
								},
								lastUpdateDate: '2023-02-21T05:42:04.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4937 85049',
								tradingNames: [
									'Audi Planung GmbH',
								],
								urls: [
									'audi-planung.de',
								],
								orgNo: '4937',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 260000,
								incorporationDate: '2008-12-04T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE02543254',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Gaimersheim',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Neuhartshöfe 3, Gaimersheim',
									postCode: {
										prefix: '85',
										raw: '85080',
										full: '85080',
									},
									line1: 'Neuhartshöfe 3',
								},
								safeNo: 'DE02543254',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02543254',
								'@timestamp': '2023-05-30T16:49:17.856Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+498418948591',
									],
									exPrefix: [
										'8418948591',
									],
									full: [
										'498418948591',
									],
								},
								previousNames: [
									'PN - Planungs GmbH',
									'Audi Planung GmbH',
								],
								name: 'Audi Planung GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01406696',
							_score: 414.66644,
							_source: {
								regNo: {
									exSuffix: 'hrb1707',
									raw: 'HRB 1707',
									numeric: '1707',
								},
								vatNo: {
									raw: [
										'DE811298376',
									],
									exPrefix: [
										'811298376',
									],
									full: [
										'de811298376',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:17.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 1707 30175',
								tradingNames: [
									'Audi Hannover GmbH',
								],
								urls: [
									'www.audizentrum-hannover.de',
								],
								orgNo: '1707',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 40500,
								incorporationDate: '1949-01-01T00:00:00.000000Z',
								riskScore: 82,
								connectId: 'DE-0-DE01406696',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Hannover',
									registeredCity: 'Hannover',
									simpleValue: 'Vahrenwalderstraße 303, Hannover',
									postCode: {
										prefix: '30',
										raw: '30179',
										full: '30179',
									},
									line1: 'Vahrenwalderstraße 303',
								},
								safeNo: 'DE01406696',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01406696',
								'@timestamp': '2023-05-30T17:23:33.866Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49511860560',
									],
									exPrefix: [
										'511860560',
									],
									full: [
										'49511860560',
									],
								},
								previousNames: [
									'Audi Zentrum Hannover GmbH',
									'Audi Hannover GmbH',
								],
								name: 'Audi Hannover GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02067582',
							_score: 409.85947,
							_source: {
								regNo: {
									exSuffix: 'hrb79839',
									raw: 'HRB 79839',
									numeric: '79839',
								},
								vatNo: {
									raw: [
										'DE254183870',
									],
									exPrefix: [
										'254183870',
									],
									full: [
										'de254183870',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:15.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 79839 60313',
								tradingNames: [
									'Audi Frankfurt GmbH',
								],
								urls: [
									'www.audizentrum-frankfurt.de',
								],
								orgNo: '79839',
								'noEmployees.to': 199,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2007-03-28T00:00:00.000000Z',
								riskScore: 81,
								connectId: 'DE-0-DE02067582',
								turnover: {
									from: 50000001,
									to: 100000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Frankfurt am Main',
									registeredCity: 'Frankfurt am Main',
									simpleValue: 'Hanauer Landstraße 144, Frankfurt am Main',
									postCode: {
										prefix: '60',
										raw: '60314',
										full: '60314',
									},
									line1: 'Hanauer Landstraße 144',
								},
								safeNo: 'DE02067582',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE02067582',
								'@timestamp': '2023-05-30T17:31:46.370Z',
								'noEmployees.from': 100,
								phoneNos: {
									raw: [
										'+49699511440',
									],
									exPrefix: [
										'699511440',
									],
									full: [
										'49699511440',
									],
								},
								previousNames: [
									'Audi Zentrum Frankfurt GmbH',
									'Audi Frankfurt GmbH',
								],
								name: 'Audi Frankfurt GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE00835249',
							_score: 409.7272,
							_source: {
								regNo: {
									exSuffix: 'hrb24103',
									raw: 'HRB 24103',
									numeric: '24103',
								},
								vatNo: {
									raw: [
										'DE239666736',
									],
									exPrefix: [
										'239666736',
									],
									full: [
										'de239666736',
									],
								},
								lastUpdateDate: '2023-04-03T21:43:19.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 24103 70190',
								tradingNames: [
									'Audi Stuttgart GmbH',
								],
								urls: [
									'www.audi-stuttgart.de',
								],
								orgNo: '24103',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28500,
								incorporationDate: '2003-07-21T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE00835249',
								turnover: {
									from: 100000001,
									to: 200000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2009-12-31T00:00:00.000000Z',
								address: {
									city: 'Stuttgart',
									registeredCity: 'Stuttgart',
									simpleValue: 'Heilbronner Straße 340, Stuttgart',
									postCode: {
										prefix: '70',
										raw: '70469',
										full: '70469',
									},
									line1: 'Heilbronner Straße 340',
								},
								safeNo: 'DE00835249',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE00835249',
								'@timestamp': '2023-05-30T17:29:51.095Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+49711890810',
									],
									exPrefix: [
										'711890810',
									],
									full: [
										'49711890810',
									],
								},
								previousNames: [
									'Audi Zentrum Stuttgart GmbH',
									'Audi Stuttgart GmbH',
								],
								name: 'Audi Stuttgart GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01964409',
							_score: 399.1379,
							_source: {
								regNo: {
									exSuffix: 'hrb16964',
									raw: 'HRB 16964 P',
									numeric: '16964',
									exPrefix: '16964p',
									full: 'hrb16964p',
								},
								vatNo: {
									raw: [
										'DE229951821',
									],
									exPrefix: [
										'229951821',
									],
									full: [
										'de229951821',
									],
								},
								lastUpdateDate: '2022-07-28T04:40:40.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 16964 P 14467',
								tradingNames: [
									'Audi Interaction GmbH',
								],
								urls: [
									'www.audi.com',
								],
								orgNo: '16964',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 370000,
								incorporationDate: '2003-07-16T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE01964409',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Potsdam',
									registeredCity: 'Potsdam',
									simpleValue: 'Zeppelinstraße 48, Potsdam',
									postCode: {
										prefix: '14',
										raw: '14471',
										full: '14471',
									},
									line1: 'Zeppelinstraße 48',
								},
								safeNo: 'DE01964409',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01964409',
								'@timestamp': '2023-05-30T16:41:17.367Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4933160030',
									],
									exPrefix: [
										'33160030',
									],
									full: [
										'4933160030',
									],
								},
								previousNames: [
									'CC WellCom GmbH',
									'Audi Interaction GmbH',
								],
								name: 'Audi Interaction GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE16384976',
							_score: 395.22968,
							_source: {
								regNo: {
									exSuffix: 'hrb6693',
									raw: 'HRB 6693',
									numeric: '6693',
								},
								vatNo: {
									raw: [
										'DE811115368',
									],
									exPrefix: [
										'811115368',
									],
									full: [
										'de811115368',
									],
								},
								lastUpdateDate: '2023-04-03T21:42:09.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 6693 85049',
								tradingNames: [
									'Audi Real Estate GmbH',
								],
								urls: [
									'https://www.audi.de/de/brand/de.html',
								],
								orgNo: '6693',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 29000,
								incorporationDate: '2013-02-05T00:00:00.000000Z',
								riskScore: 86,
								connectId: 'DE-0-DE16384976',
								turnover: {
									from: 5000001,
									to: 10000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2021-12-31T00:00:00.000000Z',
								address: {
									city: 'Ingolstadt',
									registeredCity: 'Ingolstadt',
									simpleValue: 'Auto-Union-Straße 1, Ingolstadt',
									postCode: {
										prefix: '85',
										raw: '85057',
										full: '85057',
									},
									line1: 'Auto-Union-Straße 1',
								},
								safeNo: 'DE16384976',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE16384976',
								'@timestamp': '2023-05-30T16:46:29.294Z',
								phoneNos: {
									raw: [
										'+49841890',
									],
									exPrefix: [
										'841890',
									],
									full: [
										'49841890',
									],
								},
								previousNames: [
									'Audi Real Estate GmbH',
								],
								name: 'Audi Real Estate GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE02450304',
							_score: 391.0382,
							_source: {
								regNo: {
									exSuffix: 'hrb74111',
									raw: 'HRB 74111 B',
									numeric: '74111',
									exPrefix: '74111b',
									full: 'hrb74111b',
								},
								vatNo: {
									raw: [
										'DE243910616',
									],
									exPrefix: [
										'243910616',
									],
									full: [
										'de243910616',
									],
								},
								lastUpdateDate: '2023-04-03T21:41:20.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 74111 B 14057',
								tradingNames: [
									'Audi Berlin GmbH',
								],
								urls: [
									'www.audizentrum-berlin.de',
								],
								orgNo: '74111',
								'noEmployees.to': 499,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 28000,
								incorporationDate: '2000-01-20T00:00:00.000000Z',
								riskScore: 80,
								connectId: 'DE-0-DE02450304',
								turnover: {
									to: 50000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2008-12-31T00:00:00.000000Z',
								address: {
									city: 'Berlin',
									registeredCity: 'Berlin-Charlottenburg',
									simpleValue: 'Franklinstraße 24, Berlin',
									postCode: {
										prefix: '10',
										raw: '10587',
										full: '10587',
									},
									line1: 'Franklinstraße 24',
								},
								safeNo: 'DE02450304',
								legalForm: 'Private limited company',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE02450304',
								'@timestamp': '2023-05-30T17:07:01.365Z',
								'noEmployees.from': 200,
								phoneNos: {
									raw: [
										'+4930666077800',
									],
									exPrefix: [
										'30666077800',
									],
									full: [
										'4930666077800',
									],
								},
								previousNames: [
									'Audi Zentrum Berlin GmbH',
									'Audi Berlin GmbH',
								],
								name: 'Audi Berlin GmbH',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE12906097',
							_score: 387.77985,
							_source: {
								address: {
									province: 'Hessen',
									city: 'Gießen',
									simpleValue: 'Frankfurter Str. 171, Gießen',
									postCode: {
										prefix: '35',
										raw: '35392',
										full: '35392',
									},
									line1: 'Frankfurter Str. 171',
								},
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								activityCodes: [
									'947',
								],
								safeNo: 'DE12906097',
								noEmployees: {
									from: 0,
									to: 0,
								},
								legalForm: 'Sole Trader',
								riskRating: 'C',
								tradingNames: [
									'Audi Autohaus Scheller',
								],
								statusDescription: 'Active',
								companyId: 'DE12906097',
								'@timestamp': '2023-05-30T19:35:10.737Z',
								'noEmployees.from': 4,
								'noEmployees.to': 4,
								phoneNos: {
									raw: [
										'+4964192300',
									],
									exPrefix: [
										'64192300',
									],
									full: [
										'4964192300',
									],
								},
								countryCode: 'DE',
								previousNames: [
									'Audi Autohaus Scheller',
								],
								'@version': '1',
								name: 'Audi Autohaus Scheller',
								creditLimit: 2000,
								riskScore: 38,
								connectId: 'DE-1-DE12906097',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE10607665',
							_score: 378.65613,
							_source: {
								lastUpdateDate: '2018-10-25T09:00:00.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								tradingNames: [
									'Audi Zentrum Limburg-Diez',
								],
								'noEmployees.to': 4,
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 4000,
								incorporationDate: '2005-01-08T00:00:00.000000Z',
								riskScore: 51,
								connectId: 'DE-1-DE10607665',
								turnover: {
									from: 500000,
									to: 2499999,
								},
								regType: 'NonLtd',
								address: {
									province: 'Rheinland-Pfalz',
									city: 'Diez',
									simpleValue: 'Limburger Str. 154-156, Diez',
									postCode: {
										prefix: '65',
										raw: '65582',
										full: '65582',
									},
									line1: 'Limburger Str. 154-156',
								},
								activityCodes: [
									'947',
								],
								safeNo: 'DE10607665',
								legalForm: 'Sole Trader',
								riskRating: 'B',
								statusDescription: 'Active',
								companyId: 'DE10607665',
								'@timestamp': '2023-05-30T18:19:23.325Z',
								'noEmployees.from': 4,
								phoneNos: {
									raw: [
										'+49643291910',
									],
									exPrefix: [
										'643291910',
									],
									full: [
										'49643291910',
									],
								},
								previousNames: [
									'Audi Zentrum',
									'Audi Zentrum Limburg-Diez',
								],
								name: 'Audi Zentrum Limburg-Diez',
								status: 'Active',
							},
						},
						{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE01328477',
							_score: 372.14673,
							_source: {
								regNo: {
									exSuffix: 'hrb4473',
									raw: 'HRB 4473',
									numeric: '4473',
								},
								vatNo: {
									raw: [
										'DE815584601',
									],
									exPrefix: [
										'815584601',
									],
									full: [
										'de815584601',
									],
								},
								lastUpdateDate: '2022-12-20T05:41:20.000Z',
								noEmployees: {
									from: 0,
									to: 0,
								},
								registrationKey: 'HRB 4473 54516',
								tradingNames: [
									'Audi Zentrum Trier GmbH',
								],
								urls: [
									'www.audi-zentrum-trier.de',
								],
								orgNo: '4473',
								countryCode: 'DE',
								'@version': '1',
								creditLimit: 115000,
								incorporationDate: '2000-12-04T00:00:00.000000Z',
								riskScore: 84,
								connectId: 'DE-0-DE01328477',
								turnover: {
									from: 20000001,
									to: 50000000,
								},
								regType: 'Ltd',
								lastAccountsDate: '2014-12-31T00:00:00.000000Z',
								address: {
									city: 'Trier',
									registeredCity: 'Wittlich',
									simpleValue: 'Rudolf-Diesel-Straße 17, Trier',
									postCode: {
										prefix: '54',
										raw: '54292',
										full: '54292',
									},
									line1: 'Rudolf-Diesel-Straße 17',
								},
								safeNo: 'DE01328477',
								legalForm: 'Private limited company',
								riskRating: 'A',
								statusDescription: 'Active',
								companyId: 'DE01328477',
								'@timestamp': '2023-05-30T17:45:59.325Z',
								phoneNos: {
									raw: [
										'+4965117010',
									],
									exPrefix: [
										'65117010',
									],
									full: [
										'4965117010',
									],
								},
								previousNames: [
									'AZT Verwaltungsgesellschaft mbH',
									'Audi Zentrum Trier GmbH',
								],
								name: 'Audi Zentrum Trier GmbH',
								status: 'Active',
							},
						},
					],
				},
				status: 200,
			},
		],
	},

};

describe('USP Handler', () => {
	it('should return bad request if no body present in event', async () => {
		const input = { ...awsRequestTemplate };
		const expectedOutput = 'Bad Request';

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({}),
			},
		});

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
		assert.equal(JSON.parse(actualOutput.body).message, expectedOutput);
	});

	it('should return a x-cs-searchSource header in the response', async () => {
		const esMockOutput = {
			body: {
				hits: {
					total: { value: 1, relation: 'eq' },
					max_score: 14.291256,
					hits: [{
						_index: 'cs-company-search-de.2023-08-03.12-30-00',
						_id: 'DE21189317',
						_score: 14.291256,
						_source: {
							vatNo: {
								raw: ['DE147530438'],
								exPrefix: ['147530438'],
								full: ['de147530438'],
							},
							address: {
								province: 'Baden-Württemberg',
								city: 'Stuttgart',
								simpleValue: 'Leobener Straße 104, Stuttgart',
								postCode: { prefix: '70', raw: '70469', full: '70469' },
								line1: 'Leobener Straße 104',
							},
							lastUpdateDate: '2022-04-25T12:13:29.000Z',
							activityCodes: ['3039'],
							safeNo: 'DE21189317',
							noEmployees: { from: 0, to: 0 },
							legalForm: 'Trade and Liberal Professions',
							riskRating: 'C',
							tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
							statusDescription: 'Active',
							companyId: 'DE21189317',
							'@timestamp': '2023-05-30T19:28:07.446Z',
							'noEmployees.from': 1,
							'noEmployees.to': 1,
							phoneNos: {
								raw: ['+49711325009'],
								exPrefix: ['711325009'],
								full: ['49711325009'],
							},
							countryCode: 'DE',
							previousNames: ['Günther Jänchen Spedition und Lagerung'],
							'@version': '1',
							name: 'Günther Jänchen Spedition und Lagerung',
							creditLimit: 1000,
							riskScore: 30,
							connectId: 'DE-1-DE21189317',
							regType: 'NonLtd',
							status: 'Active',
						},
					}],
				},
			},
		};
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: (esQuery) => {
						assert.equal(esQuery.index, 'cs-company-search-de');
						const expected = {
							query: {
								bool: {
									should: [
										{
											match: {
												connectId: {
													query: 'DE-1-DE21189317',
												},
											},
										},
									],
									minimum_should_match: 1,
									filter: {
										bool: {
											must: [
												{
													term: {
														countryCode: {
															value: 'DE',
														},
													},
												},
											],
										},
									},
								},
							},
						};
						assert.equal(JSON.stringify(esQuery.body), JSON.stringify(expected));
						return esMockOutput;
					},
				}),
			},
		});

		const expectedHeaders = {
			'Content-Type': 'application/json',
			'x-cs-searchSource': 'usp',
			'Access-Control-Allow-Origin': 'https://usp-swagger-ui.s3.eu-west-1.amazonaws.com',
			'Access-Control-Allow-Methods': 'GET',
		};

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '15', id: 'DE-1-DE21189317',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(JSON.stringify(actualOutput.headers), JSON.stringify(expectedHeaders));
	});

	it('should generate unique identifier query if input param is ID for country:DE', async () => {
		const esMockOutput = {
			body: {
				took: 1,
				timed_out: false,
				_shards: {
					total: 5, successful: 5, skipped: 0, failed: 0,
				},
				hits: {
					total: { value: 1, relation: 'eq' },
					max_score: 14.291256,
					hits: [{
						_index: 'cs-company-search-de.2023-08-03.12-30-00',
						_id: 'DE21189317',
						_score: 14.291256,
						_source: {
							vatNo: {
								raw: ['DE147530438'],
								exPrefix: ['147530438'],
								full: ['de147530438'],
							},
							address: {
								province: 'Baden-Württemberg',
								city: 'Stuttgart',
								simpleValue: 'Leobener Straße 104, Stuttgart',
								postCode: { prefix: '70', raw: '70469', full: '70469' },
								line1: 'Leobener Straße 104',
							},
							lastUpdateDate: '2022-04-25T12:13:29.000Z',
							activityCodes: ['3039'],
							safeNo: 'DE21189317',
							noEmployees: { from: 0, to: 0 },
							legalForm: 'Trade and Liberal Professions',
							riskRating: 'C',
							tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
							statusDescription: 'Active',
							companyId: 'DE21189317',
							'@timestamp': '2023-05-30T19:28:07.446Z',
							'noEmployees.from': 1,
							'noEmployees.to': 1,
							phoneNos: {
								raw: ['+49711325009'],
								exPrefix: ['711325009'],
								full: ['49711325009'],
							},
							countryCode: 'DE',
							previousNames: ['Günther Jänchen Spedition und Lagerung'],
							'@version': '1',
							name: 'Günther Jänchen Spedition und Lagerung',
							creditLimit: 1000,
							riskScore: 30,
							connectId: 'DE-1-DE21189317',
							regType: 'NonLtd',
							status: 'Active',
						},
					}],
				},
			},
		};
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: (esQuery) => {
						assert.equal(esQuery.index, 'cs-company-search-de');
						const expected = {
							query: {
								bool: {
									should: [
										{
											match: {
												connectId: {
													query: 'DE-1-DE21189317',
												},
											},
										},
									],
									minimum_should_match: 1,
									filter: {
										bool: {
											must: [
												{
													term: {
														countryCode: {
															value: 'DE',
														},
													},
												},
											],
										},
									},
								},
							},
						};
						assert.equal(JSON.stringify(esQuery.body), JSON.stringify(expected));
						return esMockOutput;
					},
				}),
			},
		});

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '15', id: 'DE-1-DE21189317',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		assert.equal(JSON.parse(actualOutput.body).maxScore, 100);
	});

	it('should generate non unique identifier query if input param is a postcode for country:DE', async () => {
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-de');

						// Account for the empty braces separator for the mulity query
						const filters = [
							'',
							'address.postCode.full',
							'',
							'address.postCode.raw.keyword',
							'',
							'address.postCode.prefix',
						];
						const generateExpectedFilter = (field) => ({
							bool: {
								must: [
									{ term: { countryCode: { value: 'DE' } } },
									{ term: { [field]: { value: '1234' } } },
								],
								should: [],
								minimum_should_match: 0,
							},
						});

						filters.forEach((filter, index) => {
							if (index % 2 !== 0) {
								const expectedFilter = generateExpectedFilter(filter);
								assert.equal(JSON.stringify(esMsquery.body[index].query.function_score.query.bool.filter), JSON.stringify(expectedFilter));
							}
						});

						return {
							body: {
								responses: [
									{
										hits: {
											total: {
												value: 1,
												relation: 'eq',
											},
											hits: [
												{
													_id: 'DE12912509',
													_score: 127.143715,
													_source: {
														address: {
															province: 'Hessen',
															city: 'Hattersheim',
															simpleValue: 'Schulstr. 45, Hattersheim',
															postCode: {
																prefix: '65',
																raw: '65795',
																full: '65795',
															},
															line1: 'Schulstr. 45',
														},
														lastUpdateDate: '2018-10-25T09:00:00.000Z',
														activityCodes: [
															'947',
														],
														safeNo: 'DE12912509',
														noEmployees: {
															from: 0,
															to: 0,
														},
														legalForm: 'Sole Trader',
														riskRating: 'C',
														tradingNames: [
															'Audi Glöckler',
														],
														statusDescription: 'Active',
														companyId: 'DE12912509',
														'@timestamp': '2023-05-30T19:48:41.513Z',
														'noEmployees.from': 2,
														'noEmployees.to': 2,
														phoneNos: {
															raw: [
																'+49619072741',
															],
															exPrefix: [
																'619072741',
															],
															full: [
																'49619072741',
															],
														},
														countryCode: 'DE',
														previousNames: [
															'Audi Glöckler',
														],
														'@version': '1',
														name: 'Audi Glöckler',
														creditLimit: 1000,
														riskScore: 38,
														connectId: 'DE-1-DE12912509',
														turnover: {
															from: 500000,
															to: 2499999,
														},
														regType: 'NonLtd',
														status: 'Active',
													},
												},
											],
										},
									},
								],
							},
						};
					},
				}),
			},
		});

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '15', postCode: '1234',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
	});

	it('should map address query parameter to simple value for DE', async () => {
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-de');

						return esMultiQueryMockOutput;
					},
				}),
			},
		});

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '15', address: 'test street',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
	});

	it('should generate multi search query if input param is Name for country:DE', async () => {
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-de');

						return esMultiQueryMockOutput;
					},
				}),
			},
		});

		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '15', name: 'audi',
			},
		};

		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
	});

	it('should return "NoResults" message if no companies are found for the query', async () => {
		const esMockOutput = {
			body: {
				responses: [
					{
						hits: {
							total: { value: 0, relation: 'eq' },
							max_score: null,
							hits: [],
						},
					},
				],

			},
		};

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-gb');
						const expectedFilters = {
							bool: {
								must: [
									{ term: { countryCode: { value: 'GB' } } },
									{ term: { 'vatNo.raw': { value: 'GB315706121' } } },
								],
								should: [],
								minimum_should_match: 0,
							},
						};

						assert.equal(JSON.stringify(esMsquery.body[1].query.function_score.query.bool.filter), JSON.stringify(expectedFilters));
						return esMockOutput;
					},
				}),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'GB', page: '1', pageSize: '15', vatNo: 'GB315706121',
			},
		};

		const expectedRequestBody = {
			messages: [
				{
					type: 'Information',
					code: 'NoResults',
					text: 'No companies matching specified search criteria found.',
				},
			],
			totalSize: 0,
			companies: [],
		};

		const actualOutput = await handler(input);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepStrictEqual(JSON.parse(actualOutput.body), expectedRequestBody);
	});

	it('should run fallback query if increase recall flag is true', async () => {
		let esQueryCounter = 0;
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-gb');
						esQueryCounter += 1;

						const expectedQueries = [
							{},
							{
								from: 0,
								size: 15,
								query: {
									function_score: {
										query: {
											bool: {
												must: [
													{
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
													},
													{
														multi_match: {
															query: 'Creditsafe',
															fields: [
																'name.*',
															],
															type: 'most_fields',
															slop: 2,
															prefix_length: 0,
															max_expansions: 50,
															lenient: true,
															zero_terms_query: 'NONE',
															auto_generate_synonyms_phrase_query: true,
															fuzzy_transpositions: true,
															boost: 1,
															operator: 'OR',
														},
													},
													{
														multi_match: {
															query: 'London',
															fields: [
																'address.city',
															],
															type: 'most_fields',
															slop: 2,
															prefix_length: 0,
															max_expansions: 50,
															lenient: true,
															zero_terms_query: 'NONE',
															auto_generate_synonyms_phrase_query: true,
															fuzzy_transpositions: true,
															boost: 1,
															operator: 'AND',
														},
													},
												],
												filter: {
													bool: {
														must: [
															{
																term: {
																	countryCode: {
																		value: 'GB',
																	},
																},
															},
														],
														should: [],
														minimum_should_match: 0,
													},
												},
											},
										},
										functions: [
											{
												field_value_factor: {
													factor: 1.1,
													modifier: 'log1p',
													missing: 1,
													field: 'noEmployees.to',
												},
											},
											{
												field_value_factor: {
													factor: 1.1,
													modifier: 'log1p',
													missing: 1,
													field: 'creditLimit',
												},
											},
											{
												field_value_factor: {
													factor: 1.1,
													modifier: 'log1p',
													missing: 1,
													field: 'turnover.to',
												},
											},
										],
										score_mode: 'sum',
									},
								},
							},
						];

						if (esQueryCounter === 2) {
							try {
								assert.deepEqual(esMsquery.body, expectedQueries);
							} catch (e) {
								console.log('error');
								console.error(e);
							}
						}

						return {
							body: {
								responses: [
									{
										hits: {
											total: {
												value: 1,
												relation: 'eq',
											},
											hits: [
												{
													_index: 'cs-company-search-gb.2024-09-07.11-05-20',
													_id: 'UK08186390',
													_score: 18.952835,
													_source: {
														riskRating: 'E',
														lastUpdateDate: '2024-09-09T21:14:48.000Z',
														turnover: {
															from: 0,
															to: 0,
														},
														companyId: 'UK08186390',
														creditLimit: 0,
														incorporationDate: '2012-02-08T00:00:00.000000Z',
														regNo: {
															raw: '07941364',
														},
														address: {
															county: 'SOUTH GLAMORGAN',
															line2: 'PIERHEAD STREET',
															postCode: {
																outCode: 'cf10',
																full: 'cf104ph',
																inCode: '4ph',
																raw: 'CF10 4PH',
															},
															line1: ' CASPIAN POINT ONE',
															city: 'CARDIFF',
															simpleValue: 'CASPIAN POINT ONE, PIERHEAD STREET, CARDIFF, SOUTH GLAMORGAN, CF10 4PH',
														},
														noEmployees: {
															from: 0,
															to: 0,
														},
														previousNames: [
															'SAFECREDIT LIMITED',
														],
														tpsFlag: 'N',
														'@timestamp': '2024-09-10T08:37:01.385Z',
														regType: 'Ltd',
														connectId: 'GB-0-07941364',
														name: 'CREDITSAFE LIMITED',
														statusDescription: 'Non trading',
														urls: [
															'www.creditsafeuk.com',
														],
														phoneNumbers: {
															raw: [
																'02920886500',
															],
															full: [
																'02920886500',
															],
														},
														lastAccountsDate: '2023-12-31T00:00:00.000000Z',
														riskScore: -34,
														status: 'Active',
														safeNo: 'UK08186390',
														activityCodes: [
															'7415',
														],
														'@version': '1',
														countryCode: 'GB',
													},
												},
											],
										},
									},
								],
							},
						};
					},
				}),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'GB', page: '1', pageSize: '15', name: 'Creditsafe', city: 'London', increaseRecall: 'true',
			},
		};

		const actualOutput = await handler(input);
		assert.equal(actualOutput.statusCode, 200);

		// Expect opensearch to be called twice, second time being the fallback query
		assert.equal(esQueryCounter, 2);
	});

	it('should NOT run fallback query if whole input is wrapped in quotes which makes exact set to true', async () => {
		let esQueryCounter = 0;
		let actualQuery = {};
		const expectedQueries = [
			{},
			{
				from: 0,
				size: 15,
				query: {
					function_score: {
						query: {
							bool: {
								must: [
									{
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
									},
									{
										bool: {
											must: [
												{
													match_phrase: {
														'name.synonyms': {
															query: 'Creditsafe',
															slop: 0,
														},
													},
												},
											],
										},
									},
								],
								filter: {
									bool: {
										must: [
											{
												term: {
													countryCode: {
														value: 'GB',
													},
												},
											},
										],
										should: [],
										minimum_should_match: 0,
									},
								},
							},
						},
						functions: [
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'noEmployees.to',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'creditLimit',
								},
							},
							{
								field_value_factor: {
									factor: 1.1,
									modifier: 'log1p',
									missing: 1,
									field: 'turnover.to',
								},
							},
						],
						score_mode: 'sum',
					},
				},
			},
		];
		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					msearch: (esMsquery) => {
						assert.equal(esMsquery.index, 'cs-company-search-gb');
						esQueryCounter += 1;
						actualQuery = esMsquery.body;
						return {
							body: {
								responses: [
									{
										hits: {
											total: {
												value: 0,
												relation: 'eq',
											},
											hits: [],
										},
									},
								],
							},
						};
					},
				}),
			},
		});
		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'GB', page: '1', pageSize: '15', name: '"Creditsafe"',
			},
		};

		const actualOutput = await handler(input);
		assert.equal(actualOutput.statusCode, 200);
		assert.deepStrictEqual(actualQuery, expectedQueries);

		// Expect opensearch to be called once, as exact set to true
		assert.equal(esQueryCounter, 1);
	});

	it('should use default page size of 10 if not provided', async () => {
		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE',
			},
		};

		// Use mock output to ensure handler returns successfully
		// we aren't interested in doing anything with the output
		const esMockOutput = {
			body: {
				took: 1,
				timed_out: false,
				_shards: {
					total: 5, successful: 5, skipped: 0, failed: 0,
				},
				hits: {
					total: { value: 1, relation: 'eq' },
					max_score: 14.291256,
					hits: [{
						_index: 'cs-company-search-de.2023-08-03.12-30-00',
						_id: 'DE21189317',
						_score: 14.291256,
						_source: {
							vatNo: {
								raw: ['DE147530438'],
								exPrefix: ['147530438'],
								full: ['de147530438'],
							},
							address: {
								province: 'Baden-Württemberg',
								city: 'Stuttgart',
								simpleValue: 'Leobener Straße 104, Stuttgart',
								postCode: { prefix: '70', raw: '70469', full: '70469' },
								line1: 'Leobener Straße 104',
							},
							lastUpdateDate: '2022-04-25T12:13:29.000Z',
							activityCodes: ['3039'],
							safeNo: 'DE21189317',
							noEmployees: { from: 0, to: 0 },
							legalForm: 'Trade and Liberal Professions',
							riskRating: 'C',
							tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
							statusDescription: 'Active',
							companyId: 'DE21189317',
							'@timestamp': '2023-05-30T19:28:07.446Z',
							'noEmployees.from': 1,
							'noEmployees.to': 1,
							phoneNos: {
								raw: ['+49711325009'],
								exPrefix: ['711325009'],
								full: ['49711325009'],
							},
							countryCode: 'DE',
							previousNames: ['Günther Jänchen Spedition und Lagerung'],
							'@version': '1',
							name: 'Günther Jänchen Spedition und Lagerung',
							creditLimit: 1000,
							riskScore: 30,
							connectId: 'DE-1-DE21189317',
							regType: 'NonLtd',
							status: 'Active',
						},
					}],
				},
			},
		};

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: () => esMockOutput,
				}),
			},
		});
		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
	});

	it('should use the correlation id if x-cid header is present', async () => {
		const input = {
			...awsRequestTemplate,
			headers: {
				'x-cid': 'test-correlation-id',
			},
			queryStringParameters: {
				countries: 'DE',
			},
		};

		// Use mock output to ensure handler returns successfully
		// we aren't interested in doing anything with the output
		const esMockOutput = {
			body: {
				took: 1,
				timed_out: false,
				_shards: {
					total: 5, successful: 5, skipped: 0, failed: 0,
				},
				hits: {
					total: { value: 1, relation: 'eq' },
					max_score: 14.291256,
					hits: [{
						_index: 'cs-company-search-de.2023-08-03.12-30-00',
						_id: 'DE21189317',
						_score: 14.291256,
						_source: {
							vatNo: {
								raw: ['DE147530438'],
								exPrefix: ['147530438'],
								full: ['de147530438'],
							},
							address: {
								province: 'Baden-Württemberg',
								city: 'Stuttgart',
								simpleValue: 'Leobener Straße 104, Stuttgart',
								postCode: { prefix: '70', raw: '70469', full: '70469' },
								line1: 'Leobener Straße 104',
							},
							lastUpdateDate: '2022-04-25T12:13:29.000Z',
							activityCodes: ['3039'],
							safeNo: 'DE21189317',
							noEmployees: { from: 0, to: 0 },
							legalForm: 'Trade and Liberal Professions',
							riskRating: 'C',
							tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
							statusDescription: 'Active',
							companyId: 'DE21189317',
							'@timestamp': '2023-05-30T19:28:07.446Z',
							'noEmployees.from': 1,
							'noEmployees.to': 1,
							phoneNos: {
								raw: ['+49711325009'],
								exPrefix: ['711325009'],
								full: ['49711325009'],
							},
							countryCode: 'DE',
							previousNames: ['Günther Jänchen Spedition und Lagerung'],
							'@version': '1',
							name: 'Günther Jänchen Spedition und Lagerung',
							creditLimit: 1000,
							riskScore: 30,
							connectId: 'DE-1-DE21189317',
							regType: 'NonLtd',
							status: 'Active',
						},
					}],
				},
			},
		};

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: () => esMockOutput,
				}),
			},
		});
		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		// assert that the correlation id is present in the response
		assert.equal(JSON.parse(actualOutput.body).correlationId, 'test-correlation-id');
	});

	it('should use the x ray trace id for correlation id if x-cid header is NOT present', async () => {
		const input = {
			...awsRequestTemplate,
			headers: {
				'X-Amzn-Trace-Id': 'Root=1-67407546-5585496715e3e8db737ec247',
			},
			queryStringParameters: {
				countries: 'DE',
			},
		};

		// Use mock output to ensure handler returns successfully
		// we aren't interested in doing anything with the output
		const esMockOutput = {
			body: {
				took: 1,
				timed_out: false,
				_shards: {
					total: 5, successful: 5, skipped: 0, failed: 0,
				},
				hits: {
					total: { value: 1, relation: 'eq' },
					max_score: 14.291256,
					hits: [{
						_index: 'cs-company-search-de.2023-08-03.12-30-00',
						_id: 'DE21189317',
						_score: 14.291256,
						_source: {
							vatNo: {
								raw: ['DE147530438'],
								exPrefix: ['147530438'],
								full: ['de147530438'],
							},
							address: {
								province: 'Baden-Württemberg',
								city: 'Stuttgart',
								simpleValue: 'Leobener Straße 104, Stuttgart',
								postCode: { prefix: '70', raw: '70469', full: '70469' },
								line1: 'Leobener Straße 104',
							},
							lastUpdateDate: '2022-04-25T12:13:29.000Z',
							activityCodes: ['3039'],
							safeNo: 'DE21189317',
							noEmployees: { from: 0, to: 0 },
							legalForm: 'Trade and Liberal Professions',
							riskRating: 'C',
							tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
							statusDescription: 'Active',
							companyId: 'DE21189317',
							'@timestamp': '2023-05-30T19:28:07.446Z',
							'noEmployees.from': 1,
							'noEmployees.to': 1,
							phoneNos: {
								raw: ['+49711325009'],
								exPrefix: ['711325009'],
								full: ['49711325009'],
							},
							countryCode: 'DE',
							previousNames: ['Günther Jänchen Spedition und Lagerung'],
							'@version': '1',
							name: 'Günther Jänchen Spedition und Lagerung',
							creditLimit: 1000,
							riskScore: 30,
							connectId: 'DE-1-DE21189317',
							regType: 'NonLtd',
							status: 'Active',
						},
					}],
				},
			},
		};

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({
					search: () => esMockOutput,
				}),
			},
		});
		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 200);
		// assert that the correlation id is present in the response
		assert.equal(JSON.parse(actualOutput.body).correlationId, '1-67407546-5585496715e3e8db737ec247');
	});
});

describe('Handler Validation', () => {
	['Active', 'active', 'NonActive', 'nonactive'].forEach((status) => {
		it(`should allow case insensitive input for status: ${status}`, async () => {
			const input = {
				...awsRequestTemplate,
				queryStringParameters: {
					countries: 'DE', page: '1', pageSize: '15', status,
				},
			};

			// Use mock output to ensure handler returns successfully
			// we aren't interested in doing anything with the output
			const esMockOutput = {
				body: {
					took: 1,
					timed_out: false,
					_shards: {
						total: 5, successful: 5, skipped: 0, failed: 0,
					},
					hits: {
						total: { value: 1, relation: 'eq' },
						max_score: 14.291256,
						hits: [{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE21189317',
							_score: 14.291256,
							_source: {
								vatNo: {
									raw: ['DE147530438'],
									exPrefix: ['147530438'],
									full: ['de147530438'],
								},
								address: {
									province: 'Baden-Württemberg',
									city: 'Stuttgart',
									simpleValue: 'Leobener Straße 104, Stuttgart',
									postCode: { prefix: '70', raw: '70469', full: '70469' },
									line1: 'Leobener Straße 104',
								},
								lastUpdateDate: '2022-04-25T12:13:29.000Z',
								activityCodes: ['3039'],
								safeNo: 'DE21189317',
								noEmployees: { from: 0, to: 0 },
								legalForm: 'Trade and Liberal Professions',
								riskRating: 'C',
								tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
								statusDescription: 'Active',
								companyId: 'DE21189317',
								'@timestamp': '2023-05-30T19:28:07.446Z',
								'noEmployees.from': 1,
								'noEmployees.to': 1,
								phoneNos: {
									raw: ['+49711325009'],
									exPrefix: ['711325009'],
									full: ['49711325009'],
								},
								countryCode: 'DE',
								previousNames: ['Günther Jänchen Spedition und Lagerung'],
								'@version': '1',
								name: 'Günther Jänchen Spedition und Lagerung',
								creditLimit: 1000,
								riskScore: 30,
								connectId: 'DE-1-DE21189317',
								regType: 'NonLtd',
								status: 'Active',
							},
						}],
					},
				},
			};

			const { handler } = await esmock('../src/handler.mjs', {
				'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
					default: () => ({
						search: () => esMockOutput,
					}),
				},
			});
			const actualOutput = await handler(input);

			assert.equal(actualOutput.statusCode, 200);
		});
	});

	['Ltd', 'ltd', 'NonLtd', 'nonltd'].forEach((type) => {
		it(`should allow case insensitive input for reg type: ${type}`, async () => {
			const input = {
				...awsRequestTemplate,
				queryStringParameters: {
					countries: 'DE', page: '1', pageSize: '15', type,
				},
			};

			// Use mock output to ensure handler returns successfully
			// we aren't interested in doing anything with the output
			const esMockOutput = {
				body: {
					took: 1,
					timed_out: false,
					_shards: {
						total: 5, successful: 5, skipped: 0, failed: 0,
					},
					hits: {
						total: { value: 1, relation: 'eq' },
						max_score: 14.291256,
						hits: [{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE21189317',
							_score: 14.291256,
							_source: {
								vatNo: {
									raw: ['DE147530438'],
									exPrefix: ['147530438'],
									full: ['de147530438'],
								},
								address: {
									province: 'Baden-Württemberg',
									city: 'Stuttgart',
									simpleValue: 'Leobener Straße 104, Stuttgart',
									postCode: { prefix: '70', raw: '70469', full: '70469' },
									line1: 'Leobener Straße 104',
								},
								lastUpdateDate: '2022-04-25T12:13:29.000Z',
								activityCodes: ['3039'],
								safeNo: 'DE21189317',
								noEmployees: { from: 0, to: 0 },
								legalForm: 'Trade and Liberal Professions',
								riskRating: 'C',
								tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
								statusDescription: 'Active',
								companyId: 'DE21189317',
								'@timestamp': '2023-05-30T19:28:07.446Z',
								'noEmployees.from': 1,
								'noEmployees.to': 1,
								phoneNos: {
									raw: ['+49711325009'],
									exPrefix: ['711325009'],
									full: ['49711325009'],
								},
								countryCode: 'DE',
								previousNames: ['Günther Jänchen Spedition und Lagerung'],
								'@version': '1',
								name: 'Günther Jänchen Spedition und Lagerung',
								creditLimit: 1000,
								riskScore: 30,
								connectId: 'DE-1-DE21189317',
								regType: 'NonLtd',
								status: 'Active',
							},
						}],
					},
				},
			};

			const { handler } = await esmock('../src/handler.mjs', {
				'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
					default: () => ({
						search: () => esMockOutput,
					}),
				},
			});
			const actualOutput = await handler(input);

			assert.equal(actualOutput.statusCode, 200);
		});
	});

	// Should return 400 if max page size of 200 is exceeded
	it('should return 400 if page size exceeds 200', async () => {
		const input = {
			...awsRequestTemplate,
			queryStringParameters: {
				countries: 'DE', page: '1', pageSize: '201',
			},
		};

		const { handler } = await esmock('../src/handler.mjs', {
			'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
				default: () => ({}),
			},
		});
		const actualOutput = await handler(input);

		assert.equal(actualOutput.statusCode, 400);
	});

	// Should bypass validation if isGGS flag is true
	['true', 'false'].forEach((isGGS) => {
		it(`should bypass validation if isGGS flag is ${isGGS}`, async () => {
		// Use an ID and name parameter which is normally an invalid combination
			const input = {
				...awsRequestTemplate,
				queryStringParameters: {
					countries: 'DE', id: 'DE1234', name: 'creditsafe', isGGS,
				},
			};

			// Use mock output to ensure handler returns successfully
			// we aren't interested in doing anything with the output
			const esMockOutput = {
				body: {
					took: 1,
					timed_out: false,
					_shards: {
						total: 5, successful: 5, skipped: 0, failed: 0,
					},
					hits: {
						total: { value: 1, relation: 'eq' },
						max_score: 14.291256,
						hits: [{
							_index: 'cs-company-search-de.2023-08-03.12-30-00',
							_id: 'DE21189317',
							_score: 14.291256,
							_source: {
								vatNo: {
									raw: ['DE147530438'],
									exPrefix: ['147530438'],
									full: ['de147530438'],
								},
								address: {
									province: 'Baden-Württemberg',
									city: 'Stuttgart',
									simpleValue: 'Leobener Straße 104, Stuttgart',
									postCode: { prefix: '70', raw: '70469', full: '70469' },
									line1: 'Leobener Straße 104',
								},
								lastUpdateDate: '2022-04-25T12:13:29.000Z',
								activityCodes: ['3039'],
								safeNo: 'DE21189317',
								noEmployees: { from: 0, to: 0 },
								legalForm: 'Trade and Liberal Professions',
								riskRating: 'C',
								tradingNames: ['Günther Jänchen - Günther Jänchen Spedition und Lagerung'],
								statusDescription: 'Active',
								companyId: 'DE21189317',
								'@timestamp': '2023-05-30T19:28:07.446Z',
								'noEmployees.from': 1,
								'noEmployees.to': 1,
								phoneNos: {
									raw: ['+49711325009'],
									exPrefix: ['711325009'],
									full: ['49711325009'],
								},
								countryCode: 'DE',
								previousNames: ['Günther Jänchen Spedition und Lagerung'],
								'@version': '1',
								name: 'Günther Jänchen Spedition und Lagerung',
								creditLimit: 1000,
								riskScore: 30,
								connectId: 'DE-1-DE21189317',
								regType: 'NonLtd',
								status: 'Active',
							},
						}],
					},
				},
			};

			const { handler } = await esmock('../src/handler.mjs', {
				'@usp-monorepo/usp-core/repositories/opensearchClient.mjs': {
					default: () => ({
						search: () => esMockOutput,
					}),
				},
			});
			const actualOutput = await handler(input);

			assert.equal(actualOutput.statusCode, isGGS === 'true' ? 200 : 400);
		});
	});
});
