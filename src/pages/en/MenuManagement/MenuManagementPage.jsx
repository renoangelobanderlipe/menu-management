import { useEffect, useState } from 'react';
import { useMenuStore } from '@services/state/store';
import { MenuContainer, NavbarComponent, PageHeader } from '@components/index';
import { useTableFiltersStore } from '@services/state/store';
import { Card, CardFooter } from '@material-tailwind/react';
import { TableActionComponent, TableHeaderComponent, TableBodyComponent } from '@components/index.js';
import { GridDisplayComponent, PaginationComponent } from '@components/ui';
import AuthLayout from '../Layout/AuthLayout';
import { filterAndPaginateMenuItems } from '@utils/helpers';
import { useMenuData } from '@hooks/useMenuData';

const MenuManagementPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { menuItems } = useMenuData();
  const setMenuList = useMenuStore((state) => state.setMenuList);
  const { sortOrder, pageSize, searchQuery } = useTableFiltersStore();
  const { filteredItems, totalPages } = filterAndPaginateMenuItems(
    menuItems,
    sortOrder,
    searchQuery,
    pageSize,
    currentPage,
  );

  useEffect(() => {
    setMenuList(filteredItems);
  }, [filteredItems, setMenuList]);

  return (
    <AuthLayout>
      <MenuContainer>
        {/* Navbar */}
        <NavbarComponent />
        <PageHeader />

        {/* Table Render */}
        <RenderView currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </MenuContainer>
    </AuthLayout>
  );
};

const RenderView = ({ currentPage, totalPages, setCurrentPage }) => {
  const [isListView, setIsListView] = useState(true);
  return (
    <>
      <div className="justiftyy-between flex flex-col gap-8 lg:gap-12">
        <Card
          className="min-h-[450px] gap-6 p-6 md:min-h-[500px] lg:min-h-[300px] 2xl:min-h-[650px]"
          color="transparent"
        >
          <div className="flex flex-col justify-between md:flex-row">
            {/* Display Table Actions */}
            <TableActionComponent setIsListView={setIsListView} isListView={isListView} />
          </div>
          {isListView ? (
            <div
              className={`min-h-[100px] w-full overflow-scroll p-0 lg:min-h-[200px] lg:overflow-auto 2xl:min-h-[450px]`}
            >
              <table className="overflow-x min-h-[100px] w-full min-w-max table-auto scroll-auto rounded-t-lg text-left">
                <TableHeaderComponent />
                <TableBodyComponent />
              </table>
            </div>
          ) : (
            <GridDisplayComponent />
          )}
          <CardFooter className="flex items-center justify-end border-t border-neutrals-200 p-0 pt-4 dark:border-neutrals-700">
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default MenuManagementPage;
