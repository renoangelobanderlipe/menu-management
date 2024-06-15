import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { useState } from 'react';
import { KbdComponent } from '../ui';

const profileMenuItems = [
  {
    label: "Settings",
    icon: "ph:gear-six-duotone",
  },
  {
    label: "Sign Out",
    icon: "ph:sign-out-duotone",
  },
];

const TableActionComponent = ({ setActiveDisplay, activeDisplay }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => setOpenFilter((cur) => !cur)

  return (
    <>
      <div className="md:flex-row flex flex-col items-center w-full gap-6">
        <KbdComponent />
        <div className="md:flex md:flex-row grid items-center w-full grid-cols-2 gap-2">

          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                size="md"
                className="md:w-fit w-full col-span-1"
                onClick={handleOpenFilter}
              >
                <Icon
                  icon="ph:funnel-duotone"
                  className="text-primary-500 w-5 h-5"
                />
                Filter
              </Button>
            </MenuHandler>
            <MenuList>
              {profileMenuItems.map((item, index) => {
                const isLastItem = index === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={index}
                    className={`${isLastItem
                      ? "hover:bg-danger-500/10 focus:bg-danger-500/10 active:bg-danger-500/10"
                      : "hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-100 active:bg-primary-100"
                      }`}
                  >
                    <Icon
                      icon={item.icon}
                      className={`h-5 w-5 ${isLastItem ? "text-danger-500" : "text-inherit"}`}
                    />
                    <Typography
                      variant="paragraph"
                      className="font-semibold"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {item.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          <Button
            variant="text"
            size="md"
            className="md:w-fit w-full col-span-1"
          >
            <Icon
              icon="ph:export-duotone"
              className="text-primary-500 w-5 h-5"
            />
            Export
          </Button>
          <Button
            variant="text"
            size="md"
            color="red"
            className="md:col-span-1 md:w-fit w-full col-span-3"
          >
            <Icon icon="ph:trash-duotone" className="w-5 h-5" />
            Delete (20)
          </Button>
        </div>
      </div>
      <div className="md:flex hidden">
        <IconButton
          color={activeDisplay ? "gray" : "green"}
          onClick={() => setActiveDisplay(!activeDisplay)}
        >
          <Icon icon="ph:rows-duotone" className="w-5 h-5" />
        </IconButton>
        <IconButton
          color={activeDisplay ? "green" : "gray"}
          onClick={() => setActiveDisplay(!activeDisplay)}
        >
          <Icon icon="ph:grid-four-duotone" className="w-5 h-5" />
        </IconButton>
      </div>

    </>
  )
}

export default TableActionComponent
