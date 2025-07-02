import SORT_ORDER from '@usp-monorepo/usp-core/dataAccess/opensearchSortOrder.mjs';

const applySort = (field, sortOrder) => {
	if (!Object.values(SORT_ORDER).includes(sortOrder)) {
		throw new Error(`Invalid sortOrder: ${sortOrder}. Must be one of ${Object.values(SORT_ORDER).join(', ')}`);
	}

	return { sort: [{ [field]: sortOrder }] };
};

export default applySort;
