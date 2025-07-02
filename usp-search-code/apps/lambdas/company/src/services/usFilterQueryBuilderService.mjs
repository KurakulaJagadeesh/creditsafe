import constants from '../constants.mjs';
import SEARCH_MODE from '../models/searchMode.mjs';

const generateUSfilterQuery = (countryCode, searchMode) => {
	if (countryCode === 'US') {
		const status = searchMode === SEARCH_MODE.INCLUDETHINRECORDS || searchMode === SEARCH_MODE.INCLUDECOEFFICIENT_INCLUDETHINRECORDS ? ['A', 'S'] : ['A'];
		return { terms: { [constants.RECORD_STATUS]: status } };
	}
	return null;
};

export default generateUSfilterQuery;
