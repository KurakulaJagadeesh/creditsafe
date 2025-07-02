const synonyms = 'synonyms';
const synStopStem = 'synStopStem';
const all = 'all';

// Create empty fields for each possible multi field mapping
const defaultMultiFieldMappings = [synonyms, synStopStem, all].reduce((prev, curr) => ({
	...prev,
	[curr]: [],
}));

const multiFieldMappings = {
	companyName: {
		synonyms: [synonyms],
		synStopStem: [synonyms, 'stopwords', 'stemmers', synStopStem],
		all: ['raw', 'keyword', 'en', 'plain'],
	},
	previousNames: {
		...defaultMultiFieldMappings,
	},
	address: [
		'simpleValue',
		'line1',
	],
	province: [
		'pr',
	],
	regNo: [

	],
};

export default multiFieldMappings;
