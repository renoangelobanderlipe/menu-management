import { useEffect } from 'react';
import { getDatabase, limitToFirst, onValue, query, ref } from 'firebase/database';

import { app } from '@services/provider/firebaseConfig';
import { useMenuStore } from '@services/state/store';

import { MenuContainer, NavbarComponent, MenuHeader, TableMenuComponent } from '@components/index';

const MenuManagementPage = () => {
  const setMenuList = useMenuStore((state) => state.setMenuList);
  const sortOrder = 'asc';

  const pageSize = 5;

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'menus');

    const initialQuery = query(dbRef, limitToFirst(pageSize));
    // onValue for real-time updates
    onValue(initialQuery, (snapshot) => {
      if (snapshot.exists()) {
        let items = Object.values(snapshot.val());
        if (sortOrder === 'asc') {
          items.reverse();
        }
        setMenuList(items);
      } else {
        setMenuList([]);
      }
    });
  }, [setMenuList, sortOrder]);

  return (
    <>
      <MenuContainer>
        {/* Navbar */}
        <NavbarComponent />

        <div className="flex flex-col justify-between gap-8 lg:gap-12">
          <MenuHeader />
          {/* Table */}
          <TableMenuComponent />
        </div>
      </MenuContainer>
    </>
  );
};

export default MenuManagementPage;
