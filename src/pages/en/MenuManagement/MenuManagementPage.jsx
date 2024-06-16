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
  const [activeDisplay, setActiveDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const setMenuList = useMenuStore((state) => state.setMenuList);
  const sortOrder = useTableFiltersStore((state) => state.sortOrder);
  const pageSize = useTableFiltersStore((state) => state.pageSize);
  const searchQuery = useTableFiltersStore((state) => state.searchQuery);
  const costRange = useTableFiltersStore((state) => state.costRange);
  const priceRange = useTableFiltersStore((state) => state.priceRange);

  console.log('cost range', costRange);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'menus');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const menuItems = Object.values(snapshot.val());
        setAllMenuItems(menuItems); // Store all items in state
      } else {
        setAllMenuItems([]);
      }
    });

    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once to fetch all data initially

  useEffect(() => {
    let itemsToFilter = [...allMenuItems];

    // Apply sort order (if not searching)
    if (!searchQuery) {
      itemsToFilter = sortOrder === 'asc' ? itemsToFilter.slice().reverse() : itemsToFilter;
    }

    // Apply filters (cost and price)
    if (costRange.start !== null && costRange.end !== null) {
      itemsToFilter = itemsToFilter.filter(
        (item) => parseFloat(item.cost) >= costRange.start && parseFloat(item.cost) <= costRange.end,
      );
    }

    if (priceRange.start !== null && priceRange.end !== null) {
      itemsToFilter = itemsToFilter.filter(
        (item) => parseFloat(item.price) >= priceRange.start && parseFloat(item.price) <= priceRange.end,
      );
    }

    // Apply fuzzy search (if searchQuery is present)
    if (searchQuery) {
      const fuse = new Fuse(itemsToFilter, {
        keys: searchFields,
        threshold: 0.4,
      });
      itemsToFilter = fuse.search(searchQuery).map((result) => result.item);
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const filteredItemsForPage = itemsToFilter.slice(startIndex, endIndex);

    setFilteredItems(filteredItemsForPage);
    setMenuList(filteredItemsForPage);
  }, [setMenuList, allMenuItems, sortOrder, searchQuery, pageSize, costRange, priceRange, currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const totalPages = Math.ceil(allMenuItems.length / pageSize);

  return (
    <>
      <MenuContainer>
        {/* Navbar */}
        <NavbarComponent />

        <div className="flex flex-col justify-between gap-8 lg:gap-12">
          <MenuHeader />
          {/* Table */}
          <Card
            className="min-h-[450px] gap-6 p-6 md:min-h-[500px] lg:min-h-[300px] 2xl:min-h-[650px]"
            color="transparent"
          >
            <div className="flex flex-col justify-between md:flex-row">
              {/* Display Table Actions */}
              <TableActionComponent setActiveDisplay={setActiveDisplay} activeDisplay={activeDisplay} />
            </div>

            {/* Table Display */}
            <div className={`${activeDisplay ? 'hidden' : 'block'} w-full overflow-scroll p-0 lg:overflow-auto`}>
              <table className="overflow-x lg: min-h-[100px] w-full min-w-max table-auto scroll-auto rounded-t-lg text-left md:min-h-[300px] lg:min-h-[200px] 2xl:min-h-[450px]">
                <TableHeaderComponent />
                <TableBodyComponent />
              </table>
            </div>

            {/* For Grid View */}
            <GridDisplayComponent activeDisplay={activeDisplay} />

            <CardFooter className="flex items-center justify-end border-t border-neutrals-200 p-0 pt-4 dark:border-neutrals-700">
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={goToNextPage}
                onPrev={goToPrevPage}
              />
            </CardFooter>
          </Card>
        </div>
      </MenuContainer>
    </>
  );
};

export default MenuManagementPage;
