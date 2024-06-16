import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';

import { app } from '@services/provider/firebaseConfig';
import { useMenuStore } from '@services/state/store';

import { MenuContainer, NavbarComponent, MenuHeader } from '@components/index';
import Fuse from 'fuse.js';
import { useTableFiltersStore } from '@services/state/store';
import { Card, CardFooter } from '@material-tailwind/react';
import TableActionComponent from '@components/MenuTable/TableActionComponent';
import TableHeaderComponent from '@components/MenuTable/TableHeaderComponent';
import TableBodyComponent from '@components/MenuTable/TableBodyComponent';
import { GridDisplayComponent, PaginationComponent } from '@components/ui';
import { searchFields } from '@utils/constants';

const MenuManagementPage = () => {
  const setMenuList = useMenuStore((state) => state.setMenuList);
  const sortOrder = useTableFiltersStore((state) => state.sortOrder);
  const pageSize = useTableFiltersStore((state) => state.pageSize);
  const [allMenuItems, setAllMenuItems] = useState([]);
  const searchQuery = useTableFiltersStore((state) => state.searchQuery);
  const [activeDisplay, setActiveDisplay] = useState(false);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'menus');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const menuItems = Object.values(snapshot.val());
        setAllMenuItems(menuItems);

        let filteredItems = menuItems;

        // Apply sort order (if not searching)
        if (!searchQuery) {
          filteredItems = sortOrder === 'asc' ? menuItems.slice().reverse() : menuItems;
        }

        // Apply fuzzy search (if searchQuery is present)
        if (searchQuery) {
          const fuse = new Fuse(menuItems, {
            keys: searchFields,
            threshold: 0.4,
          });
          filteredItems = fuse.search(searchQuery).map((result) => result.item);
        }

        // Limit to page size
        filteredItems = filteredItems.slice(0, pageSize);

        setMenuList(filteredItems);
      } else {
        setMenuList([]);
      }
    });

    return () => unsubscribe();
  }, [setMenuList, sortOrder, searchQuery, pageSize]);
  return (
    <>
      <MenuContainer>
        {/* Navbar */}
        <NavbarComponent />

        <div className="lg:gap-12 flex flex-col justify-between gap-8">
          <MenuHeader />
          {/* Table */}
          <Card className="gap-6 p-6" color="transparent">
            <div className="md:flex-row flex flex-col justify-between">
              {/* Display Table Actions */}
              <TableActionComponent setActiveDisplay={setActiveDisplay} activeDisplay={activeDisplay} />
            </div>

            {/* Table Display */}
            <div className={`${activeDisplay ? 'hidden' : 'block'} w-full overflow-scroll p-0 lg:overflow-auto`}>
              <table className="overflow-x min-w-max scroll-auto w-full text-left rounded-t-lg table-auto">
                <TableHeaderComponent />
                <TableBodyComponent />
              </table>
            </div>

            {/* For Grid View */}
            <GridDisplayComponent activeDisplay={activeDisplay} />

            <CardFooter className="border-neutrals-200 dark:border-neutrals-700 flex items-center justify-end p-0 pt-4 border-t">
              <PaginationComponent />
            </CardFooter>
          </Card>
        </div>
      </MenuContainer>
    </>
  );
};

export default MenuManagementPage;
