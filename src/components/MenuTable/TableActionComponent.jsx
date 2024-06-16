import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, IconButton, Option, Select } from '@material-tailwind/react';
import { KbdComponent } from '../ui';
import { useMenuStore } from '@services/state/store';
import { handleExport } from '@utils/utils';
import useTableFilters from '@hooks/useTableFilter';

const TableActionComponent = ({ setActiveDisplay, activeDisplay }) => {
  const { setSortOrder, debouncedSetSearchQuery } = useTableFilters();
  const menuList = useMenuStore((state) => state.menuList);

  return (
    <>
      <div className="md:flex-row flex flex-col items-center w-full gap-6">
        <div className="lg:flex-row flex flex-col gap-6">
          <KbdComponent onChange={(e) => debouncedSetSearchQuery(e.target.value)} />
          <Select
            size="lg"
            containerProps={{
              className: '!col-span-3 w-full',
            }}
            label="Select Version"
            value={'asc'}
            onChange={(val) => setSortOrder(val)}
            color="gray"
          >
            <Option value="asc">Ascending</Option>
            <Option value="desc">Descending</Option>
          </Select>
        </div>
        <div className="md:flex md:flex-row grid items-center w-full grid-cols-2 gap-2">
          <Button
            variant="text"
            size="md"
            className="md:w-fit w-full col-span-1"
            onClick={() => handleExport(menuList, 'menus.csv')}
          >
            <Icon icon="ph:export-duotone" className="text-primary-500 w-5 h-5" />
            Export
          </Button>
        </div>
      </div>
      <div className="md:flex hidden">
        <IconButton color={activeDisplay ? 'gray' : 'green'} onClick={() => setActiveDisplay(!activeDisplay)}>
          <Icon icon="ph:rows-duotone" className="w-5 h-5" />
        </IconButton>
        <IconButton color={activeDisplay ? 'green' : 'gray'} onClick={() => setActiveDisplay(!activeDisplay)}>
          <Icon icon="ph:grid-four-duotone" className="w-5 h-5" />
        </IconButton>
      </div>
    </>
  );
};

export default TableActionComponent;
