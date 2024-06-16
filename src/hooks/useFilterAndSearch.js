import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useTableActionsStore } from '@services/state/store';

const useFilterAndSearch = (menuItems, columnFieldsArray = []) => {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const sortOrder = useTableActionsStore((state) => state.sortOrder);
  const searchQuery = useTableActionsStore((state) => state.searchQuery);
  const priceRange = useTableActionsStore((state) => state.priceRange);
  const costRange = useTableActionsStore((state) => state.costRange);
  const pageSize = useTableActionsStore((state) => state.pageSize);

  useEffect(() => {
    let itemsToFilter = [...menuItems];

    // 1. Sort
    if (!searchQuery) {
      itemsToFilter = sortOrder === 'asc' ? menuItems.slice().reverse() : menuItems;
    }

    // 2. Filter by cost and price range (combined for efficiency)
    if (
      (costRange.start !== null && costRange.end !== null) ||
      (priceRange.start !== null && priceRange.end !== null)
    ) {
      itemsToFilter = itemsToFilter.filter((item) => {
        const cost = parseFloat(item.cost);
        const price = parseFloat(item.price);

        return (
          (costRange.start === null || cost >= costRange.start) &&
          (costRange.end === null || cost <= costRange.end) &&
          (priceRange.start === null || price >= priceRange.start) &&
          (priceRange.end === null || price <= priceRange.end)
        );
      });
    }

    // 3. Fuzzy Search
    if (searchQuery) {
      const fuse = new Fuse(itemsToFilter, {
        keys: columnFieldsArray,
        threshold: 0.4,
      });
      itemsToFilter = fuse.search(searchQuery).map((result) => result.item);
    }

    // 4. Paginate
    itemsToFilter = itemsToFilter.slice(0, pageSize);

    setFilteredItems(itemsToFilter);
  }, [menuItems, sortOrder, searchQuery, pageSize, costRange, priceRange, columnFieldsArray]);

  return filteredItems;
};

export default useFilterAndSearch;
