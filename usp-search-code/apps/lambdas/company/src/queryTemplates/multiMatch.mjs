const multiMatchTemplate = {
	query: '',
	fields: [],
	type: 'most_fields',
	slop: 2,
	prefix_length: 0,
	max_expansions: 50,
	lenient: true,
	zero_terms_query: 'NONE',
	auto_generate_synonyms_phrase_query: true,
	fuzzy_transpositions: true,
	boost: 1,
};

export default multiMatchTemplate;
