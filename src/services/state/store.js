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

export const useTableActionsStore = create((set) => ({
  searchQuery: '',
  sortOrder: 'asc',
  costRange: { start: null, end: null },
  priceRange: { start: null, end: null },
  pageSize: 5,

  setSearchQuery: (searchQuery) => set({ searchQuery: searchQuery }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setCostRange: (costRange) => set({ costRange: costRange }),
  setPriceRange: (priceRange) => set({ priceRange: priceRange }),
  setPageSize: (pageSize) => set({ pageSize: pageSize }),
}));
