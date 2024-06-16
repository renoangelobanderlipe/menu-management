// @utils/helpers/menuHelpers.js
import Fuse from 'fuse.js';
import { searchFields } from '@utils/constants';

const filterAndPaginateMenuItems = (menuItems, sortOrder, searchQuery, pageSize, currentPage = 1) => {
  let itemsToFilter = [...menuItems];

  // 1. Sort Order
  if (!searchQuery) {
    itemsToFilter = sortOrder === 'asc' ? menuItems.slice().reverse() : menuItems;
  }

  // 2. Fuzzy Search
  if (searchQuery) {
    const fuse = new Fuse(itemsToFilter, { keys: searchFields, threshold: 0.4 });
    itemsToFilter = fuse.search(searchQuery).map((result) => result.item);
  }

  // 3. Pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const filteredItems = itemsToFilter.slice(startIndex, endIndex);
  const totalPages = Math.ceil(itemsToFilter.length / pageSize);

  return { filteredItems, totalPages, itemsToFilter };
};

const initializeTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    return true;
  } else {
    // Default to light mode if no theme is stored or it's 'light'
    document.documentElement.classList.remove('dark');
    return false;
  }
};

export { filterAndPaginateMenuItems, initializeTheme };
