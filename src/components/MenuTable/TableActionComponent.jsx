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
import { useTableFiltersStore } from '@services/state/store';
import { KbdComponent } from '../ui';
import { useMenuStore } from '../../services/state/store';
import { exportToCsv } from '../../utils/utils';

const TableActionComponent = ({ setActiveDisplay, activeDisplay }) => {
  const setSearchQuery = useTableFiltersStore((state) => state.setSearchQuery);
  const setSortOrder = useTableFiltersStore((state) => state.setSortOrder);

  const setPriceRange = useTableFiltersStore((state) => state.setPriceRange);
  const priceRange = useTableFiltersStore((state) => state.priceRange);
  const setCostRange = useTableFiltersStore((state) => state.setCostRange);
  const costRange = useTableFiltersStore((state) => state.costRange);
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
      <div className="md:flex-row flex flex-col items-center w-full gap-6">
        <KbdComponent onChange={(e) => debouncedSetSearchQuery(e.target.value)} />
        <div className="md:flex md:flex-row grid items-center w-full grid-cols-2 gap-2">
          <Menu
            dismiss={{
              itemPress: false,
            }}
            placement="bottom-start"
          >
            <MenuHandler>
              <Button variant="text" size="md" className="md:w-fit w-full col-span-1">
                <Icon icon="ph:funnel-duotone" className="text-primary-500 w-5 h-5" />
                Filter
              </Button>
            </MenuHandler>
            <MenuList>
              <Select label="Select Version" value={'asc'} onChange={(val) => setSortOrder(val)} color="gray">
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
              </Select>

              <div className="flex flex-col gap-2 mt-3">
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
              <div className="flex flex-col gap-2 mt-3">
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

          <Button variant="text" size="md" className="md:w-fit w-full col-span-1" onClick={handleExport}>
            <Icon icon="ph:export-duotone" className="text-primary-500 w-5 h-5" />
            Export
          </Button>
          <Button variant="text" size="md" color="red" className="md:col-span-1 md:w-fit w-full col-span-3">
            <Icon icon="ph:trash-duotone" className="w-5 h-5" />
            Delete (20)
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
