import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { KbdComponent } from '../ui';
import { Input } from '@material-tailwind/react';

const profileMenuItems = [
  {
    label: 'Settings',
    icon: 'ph:gear-six-duotone',
  },
  {
    label: 'Sign Out',
    icon: 'ph:sign-out-duotone',
  },
];

const TableActionComponent = ({ setActiveDisplay, activeDisplay }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => setOpenFilter((cur) => !cur);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-6 md:flex-row">
        <KbdComponent />
        <div className="grid w-full grid-cols-2 items-center gap-2 md:flex md:flex-row">
          <Menu
            dismiss={{
              itemPress: false,
            }}
          >
            <MenuHandler>
              <Button variant="text" size="md" className="col-span-1 w-full md:w-fit" onClick={handleOpenFilter}>
                <Icon icon="ph:funnel-duotone" className="h-5 w-5 text-primary-500" />
                Filter
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Input type="text" />
                <Input type="text" />
                <Input type="text" />
              </MenuItem>
            </MenuList>
          </Menu>
          <Button variant="text" size="md" className="col-span-1 w-full md:w-fit">
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
