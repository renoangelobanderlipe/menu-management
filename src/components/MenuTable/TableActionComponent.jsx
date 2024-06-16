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
      <div className="flex w-full flex-col items-center gap-6 md:flex-row">
        <div className="flex flex-col gap-6 lg:flex-row">
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
          <KbdComponent onChange={(e) => debouncedSetSearchQuery(e.target.value)} />
        </div>
        <div className="grid w-full grid-cols-2 items-center gap-2 md:flex md:flex-row">
          <Button
            variant="text"
            size="md"
            className="col-span-1 w-full md:w-fit"
            onClick={() => handleExport(menuList, 'menus.csv')}
          >
            <Icon icon="ph:export-duotone" className="h-5 w-5 text-primary-500" />
            Export
          </Button>
        </div>
      </div>
      <div className="hidden md:flex">
        <IconButton color={activeDisplay ? 'gray' : 'green'} onClick={() => setActiveDisplay(!activeDisplay)}>
          <Icon icon="ph:rows-duotone" className="h-5 w-5" />
        </IconButton>
        <IconButton color={activeDisplay ? 'green' : 'gray'} onClick={() => setActiveDisplay(!activeDisplay)}>
          <Icon icon="ph:grid-four-duotone" className="h-5 w-5" />
        </IconButton>
      </div>
    </>
  );
};

export default TableActionComponent;
