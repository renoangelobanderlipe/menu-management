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
  const costRange = useTableFiltersStore((state) => state.costRange);
  const setCostRange = useTableFiltersStore((state) => state.setCostRange);
  const menuList = useMenuStore((state) => state.menuList);

  const debouncedSetSearchQuery = useCallback(debounce(setSearchQuery, 300), []);

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
            <MenuList className="grid grid-cols-3 items-center gap-3">
              <Select
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
              <Typography className="col-span-3 mt-3" variant="h5" color="black">
                Price Range
              </Typography>
              <Input
                placeholder="Start"
                className="col-span-2"
                value={priceRange.start || ''}
                onChange={(e) =>
                  setPriceRange({
                    ...costRange,
                    start: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                containerProps={{
                  className: '!min-w-[100px]',
                }}
              />
              <Typography className="text-center" variant="paragraph" color="gray">
                to
              </Typography>
              <Input
                placeholder="End"
                value={priceRange.end || ''}
                onChange={(e) =>
                  setPriceRange({
                    ...costRange,
                    start: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                containerProps={{
                  className: '!min-w-[100px]',
                }}
              />
              <Typography className="col-span-3" variant="h5" color="black">
                Cost Range
              </Typography>
              <Input
                placeholder="Start"
                value={costRange.start || ''}
                onChange={(e) =>
                  setCostRange({
                    ...costRange,
                    start: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                containerProps={{
                  className: '!min-w-[100px]',
                }}
              />
              <Typography className="text-center" variant="paragraph" color="gray">
                to
              </Typography>
              <Input
                placeholder="End"
                value={costRange.end || ''}
                onChange={(e) =>
                  setCostRange({
                    ...costRange,
                    start: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                containerProps={{
                  className: '!min-w-[100px]',
                }}
              />
            </MenuList>
          </Menu>

          <Button variant="text" size="md" className="col-span-1 w-full md:w-fit" onClick={handleExport}>
            <Icon icon="ph:export-duotone" className="h-5 w-5 text-primary-500" />
            Export
          </Button>
          {/* <Button variant="text" size="md" color="red" className="md:col-span-1 md:w-fit w-full col-span-3">
            <Icon icon="ph:trash-duotone" className="w-5 h-5" />
            Delete (20)
          </Button> */}
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
