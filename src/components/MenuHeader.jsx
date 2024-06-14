import Header from './ui/Header'
import { Button } from '@material-tailwind/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react';
import AddMenuDialog from './AddMenuDialog';

const MenuHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Header >
        <Button className="bg-primary-500" onClick={handleOpen}>
          <Icon
            icon="ph:fork-knife-duotone"
            className="w-5 h-5 text-white"
          />
          Add Menu Item
        </Button>
      </Header>

      <AddMenuDialog handleOpen={handleOpen} open={open} />
    </>
  )
}

export default MenuHeader
