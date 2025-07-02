const city = 'city';
const country = 'country';
const postCode = 'postCode';
const province = 'province';
const regNo = 'regNo';
const status = 'status';
const vatNo = 'vatNo';

const apiContextMappings = {
	default: {
		name: [city, country, status],
		city: [country, status],
	},
	AT: {
		name: [city, country, postCode, status],
		city: [country, postCode, status],
		postCode: [city, country, status],
		regNo: [city, country, postCode, status],
		vatNo: [city, country, postCode, status],
	},
	DE: {
		name: [city, country, postCode, regNo, status, vatNo],
		city: [country, postCode, regNo, status, vatNo],
		postCode: [city, country, regNo, status, vatNo],
		regNo: [city, country, postCode, status, vatNo],
		vatNo: [city, country, postCode, regNo, status],
	},
	DK: {
		name: [city, country, postCode, status],
		city: [country, postCode, status],
		postCode: [city, country, status],
	},
	FR: {
		name: [city, country, postCode, province],
		city: [country, postCode, province, status],
	},
	GB: {
		name: [country, status, postCode, city, vatNo],
		city: [country, status, postCode, vatNo],
		postCode: [country, status, city, vatNo],
		vatNo: [country, status, postCode, city],
	},
	IE: {
		name: [country, postCode, status],
		postCode: [country, status],
	},
	IT: {
		name: [city, country, postCode, province, status, vatNo],
		city: [country, postCode, province, status, vatNo],
		postCode: [city, country, province, status, vatNo],
		vatNo: [city, country, postCode, province, status],
	},
	NL: {
		name: [city, country, postCode, status, vatNo],
		city: [country, postCode, status, vatNo],
		postCode: [city, country, status, vatNo],
		regNo: [city, country, postCode, status, vatNo],
		vatNo: [city, country, postCode, status],
	},
	NO: {
		name: [city, country, postCode, status],
		city: [country, postCode, status],
		postCode: [city, country, status],
	},
	SE: {
		name: [country, city, postCode, status],
		city: [country, postCode, status],
		postCode: [country, city, status],
		regNo: [country, city, postCode, status],
	},
};

export default apiContextMappings;
