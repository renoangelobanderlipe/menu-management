import { signOut } from 'firebase/auth';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { auth } from '@services/provider/firebaseConfig';
import { initializeTheme } from '@utils/helpers';

export const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: initializeTheme(),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.isDarkMode ? 'light' : 'dark';
          localStorage.setItem('theme', newTheme);
          document.documentElement.classList.remove(state.isDarkMode ? 'dark' : 'light');
          document.documentElement.classList.add(newTheme);
          return { isDarkMode: !state.isDarkMode };
        }),
      logout: (navigate) => {
        signOut(auth)
          .then(() => {
            toast.success('Successfully Log out!');
            navigate('/login');
          })
          .catch((error) => {
            toast.error("Something Wen't Wrong!");
          });
      },
    }),
    {
      name: 'navbar-storage',
    },
  ),
);

export const useMenuStore = create((set) => ({
  menuList: [],
  editData: [],

  setMenuList: (menuList) => set({ menuList }),
  setEditData: (editData) => set({ editData }),
  clearMenuId: () => set({ menuId: null }),
}));

export const useTableFiltersStore = create((set) => ({
  searchQuery: '',
  sortOrder: 'asc',
  pageSize: 5,

  setSearchQuery: (searchQuery) => set({ searchQuery: searchQuery }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setPageSize: (pageSize) => set({ pageSize: pageSize }),
}));
