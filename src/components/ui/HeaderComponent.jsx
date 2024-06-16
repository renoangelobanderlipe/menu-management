import { Typography } from '@material-tailwind/react';

const HeaderComponent = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
      <div className="flex flex-col gap-2">
        <Typography variant="h2" color="black">
          Menu Management
        </Typography>
        <Typography variant="paragraph" color="gray">
          Manage items in your menu
        </Typography>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default HeaderComponent;
