import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  menuId: null,
  menuList: [],
  editData: [],
  sortBy: 'desc',

  setMenuId: (menuId) => set({ menuId }),
  setMenuList: (menuList) => set({ menuList }),
  setEditData: (editData) => set({ editData }),
  setSortBy: (sortOrder) => set({ sortOrder }),
  clearMenuId: () => set({ menuId: null }),
}));

export const useTableFiltersStore = create((set) => ({
  searchQuery: '',
  sortOrder: 'asc',
  pageSize: 5,
  currentPage: 1,

  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setPageSize: (pageSize) => set({ pageSize }),
  setCurrentPage: (currentPage) => set({ currentPage }),
}));
