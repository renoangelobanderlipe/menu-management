import { Button } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

import HeaderComponent from './ui/HeaderComponent';
import AddMenuDialog from './MenuDialog/AddMenuDialog';

const MenuHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <HeaderComponent>
        <Button className="bg-primary-500" onClick={handleOpen}>
          <Icon icon="ph:fork-knife-duotone" className="h-5 w-5 text-white" />
          Add Menu Item
        </Button>
      </HeaderComponent>

      <AddMenuDialog handleOpen={handleOpen} open={open} />
    </>
  );
};

export default MenuHeader;
