import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';

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

const ProfileMenuComponent = ({ items, onLogout }) => {
  const [randomValue, setRandomValue] = useState(1);

  const handleRandomVal = () => {
    setRandomValue(Math.floor(Math.random() * 11) + 1);
  };

  useEffect(() => {
    handleRandomVal();
  }, []);

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          size="sm"
          alt="profile"
          className="cursor-pointer rounded-[8px] p-0.5 hover:border hover:border-primary-500"
          src={`https://www.gravatar.com/avatar/${randomValue}?&s=256&d=robohash`}
        />
      </MenuHandler>
      <MenuList>
        {profileMenuItems.map((item, index) => {
          const isLastItem = index === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={index}
              onClick={isLastItem ? onLogout : null}
              className={`${
                isLastItem
                  ? 'hover:bg-danger-500/10 focus:bg-danger-500/10 active:bg-danger-500/10'
                  : 'hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-100 active:bg-primary-100'
              }`}
            >
              <Icon icon={item.icon} className={`h-5 w-5 ${isLastItem ? 'text-danger-500' : 'text-inherit'}`} />
              <Typography variant="paragraph" className="font-semibold" color={isLastItem ? 'red' : 'inherit'}>
                {item.label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenuComponent;
