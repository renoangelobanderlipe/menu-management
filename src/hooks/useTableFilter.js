import { useCallback } from 'react';
import { useTableFiltersStore } from '@services/state/store';
import { debounce } from 'lodash';

const useTableFilters = () => {
  const setSearchQuery = useTableFiltersStore((state) => state.setSearchQuery);
  const setSortOrder = useTableFiltersStore((state) => state.setSortOrder);

  const debouncedSetSearchQuery = useCallback(debounce(setSearchQuery, 300), [setSearchQuery]);

  return {
    setSortOrder,
    debouncedSetSearchQuery,
  };
};

export default useTableFilters;
