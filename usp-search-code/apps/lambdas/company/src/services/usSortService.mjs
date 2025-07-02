import SORT_ORDER from '@usp-monorepo/usp-core/dataAccess/opensearchSortOrder.mjs';
import SEARCH_MODE from '../models/searchMode.mjs';
import applySort from './sortService.mjs';
import constants from '../constants.mjs';

export const isUSsortEnabled = (countryCode, searchMode) => countryCode === 'US' && (searchMode === SEARCH_MODE.INCLUDECOEFFICIENT || searchMode === SEARCH_MODE.INCLUDECOEFFICIENT_INCLUDETHINRECORDS);

export const applyUSSortLogic = (countryCode, searchMode) => (isUSsortEnabled(countryCode, searchMode) ? applySort(constants.COEFFICIENT_LINEAR, SORT_ORDER.DESC) : null);
