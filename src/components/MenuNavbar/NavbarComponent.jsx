import { Typography, IconButton } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ProfileMenuComponent } from '@components/ui';
import { useThemeStore } from '@services/state/store';
import { utakPhLogo } from '@utils/constants';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const logout = useThemeStore((state) => state.logout);

  const handleLogout = () => {
    logout(navigate);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between text-white lg:flex-wrap lg:items-center lg:gap-y-4">
        <div className="flex items-center">
          <img src={utakPhLogo} alt="logo" loading="lazy" decoding="async" className="h-10" />
          <Typography href="#" variant="h4" className="ml-2 mr-4 cursor-pointer py-1.5 text-primary-500">
            UTAK PH
          </Typography>
        </div>
        <div className="flex">
          <div className="relative flex w-full gap-6 md:w-max">
            <IconButton variant="text" color="green" onClick={() => toggleTheme()}>
              {isDarkMode ? (
                <Icon icon="ph:sun-duotone" style={{ color: '#286cbf' }} className="h-6 w-6" />
              ) : (
                <Icon icon="ph:moon-stars-duotone" className="h-6 w-6" />
              )}
            </IconButton>

            {/* Profile Menu */}
            <ProfileMenuComponent onLogout={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
