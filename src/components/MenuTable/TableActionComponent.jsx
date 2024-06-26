import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, IconButton, Option, Select } from '@material-tailwind/react';
import { KbdComponent } from '../ui';
import { useMenuStore } from '@services/state/store';
import { handleExport } from '@utils/utils';
import useTableFilters from '@hooks/useTableFilter';

const TableActionComponent = ({ setIsListView, isListView }) => {
  const { setSortOrder, debouncedSetSearchQuery } = useTableFilters();
  const menuList = useMenuStore((state) => state.menuList);

  return (
    <>
      <div className="flex w-full flex-col items-start gap-6 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-fit lg:flex-row">
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

        <Button variant="text" size="md" onClick={() => handleExport(menuList, 'menus.csv')}>
          <Icon icon="ph:export-duotone" className="h-5 w-5 text-primary-500" />
          Export
        </Button>
      </div>
      <div className="hidden md:flex">
        <IconButton color={isListView ? 'green' : 'gray'} onClick={() => setIsListView(true)}>
          <Icon icon="ph:rows-duotone" className="h-5 w-5" />
        </IconButton>
        <IconButton color={isListView ? 'gray' : 'green'} onClick={() => setIsListView(false)}>
          <Icon icon="ph:grid-four-duotone" className="h-5 w-5" />
        </IconButton>
      </div>
    </>
  );
};

export default TableActionComponent;
