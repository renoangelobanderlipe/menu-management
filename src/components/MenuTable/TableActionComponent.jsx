import { useCallback } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import { debounce } from 'lodash';
import { useTableActionsStore } from '@services/state/store';
import { KbdComponent } from '../ui';
import { useMenuStore } from '../../services/state/store';
import { exportToCsv } from '../../utils/utils';

const TableActionComponent = ({ setActiveDisplay, activeDisplay }) => {
  const setSearchQuery = useTableActionsStore((state) => state.setSearchQuery);
  const setSortOrder = useTableActionsStore((state) => state.setSortOrder);

  const setPriceRange = useTableActionsStore((state) => state.setPriceRange);
  const priceRange = useTableActionsStore((state) => state.priceRange);
  const setCostRange = useTableActionsStore((state) => state.setCostRange);
  const costRange = useTableActionsStore((state) => state.costRange);
  const menuList = useMenuStore((state) => state.menuList);

  const debouncedSetSearchQuery = useCallback(debounce(setSearchQuery, 300), []);

  const handlePriceRangeChange = (e, field) => {
    setPriceRange((prev) => ({ ...prev, [field]: parseInt(e.target.value, 10) || 0 }));
  };
  const handleCostRangeChange = (e, field) => {
    setCostRange((prev) => ({ ...prev, [field]: parseInt(e.target.value, 10) || 0 }));
  };

  const handleExport = () => {
    exportToCsv(menuList, 'menu_items.csv');
  };
  return (
    <>
      <div className="flex w-full flex-col items-center gap-6 md:flex-row">
        <KbdComponent onChange={(e) => debouncedSetSearchQuery(e.target.value)} />
        <div className="grid w-full grid-cols-2 items-center gap-2 md:flex md:flex-row">
          <Menu
            dismiss={{
              itemPress: false,
            }}
            placement="bottom-start"
          >
            <MenuHandler>
              <Button variant="text" size="md" className="col-span-1 w-full md:w-fit">
                <Icon icon="ph:funnel-duotone" className="h-5 w-5 text-primary-500" />
                Filter
              </Button>
            </MenuHandler>
            <MenuList>
              <Select label="Select Version" value={'asc'} onChange={(val) => setSortOrder(val)} color="gray">
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
              </Select>

              <div className="mt-3 flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Price Range
                </Typography>
                <div className="flex items-center gap-2">
                  <Input
                    label="Start"
                    value={priceRange.start}
                    onChange={(e) => handlePriceRangeChange(e, 'start')}
                    containerProps={{
                      className: '!min-w-[100px]',
                    }}
                    className="focus-within:"
                  />
                  to
                  <Input
                    label="End"
                    value={priceRange.end}
                    onChange={(e) => handlePriceRangeChange(e, 'end')}
                    containerProps={{
                      className: '!min-w-[100px]',
                    }}
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Cost Range
                </Typography>
                <div className="flex items-center gap-2">
                  <Input
                    label="Start"
                    value={costRange.start}
                    onChange={(e) => handleCostRangeChange(e, 'start')}
                    containerProps={{
                      className: '!min-w-[100px]',
                    }}
                  />
                  to
                  <Input
                    label="End"
                    value={costRange.end}
                    onChange={(e) => handleCostRangeChange(e, 'end')}
                    containerProps={{
                      className: '!min-w-[100px]',
                    }}
                  />
                </div>
              </div>
            </MenuList>
          </Menu>

          <Button variant="text" size="md" className="col-span-1 w-full md:w-fit" onClick={handleExport}>
            <Icon icon="ph:export-duotone" className="h-5 w-5 text-primary-500" />
            Export
          </Button>
          <Button variant="text" size="md" color="red" className="col-span-3 w-full md:col-span-1 md:w-fit">
            <Icon icon="ph:trash-duotone" className="h-5 w-5" />
            Delete (20)
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
