import { Icon } from '@iconify/react/dist/iconify.js';
import { Input, Typography } from '@material-tailwind/react';

const KbdComponent = () => {
  return (
    <Input
      containerProps={{
        className: 'md:!w-[200px] lg:max-w-[250px]',
      }}
      type="text"
      placeholder="Search"
      size="lg"
      icon={
        <div className="absolute !right-0 top-0 hidden gap-2 lg:flex">
          <kbd className="rounded-[8px] border border-b-2 border-[#1f293741] bg-[#F2F2F2] dark:border-neutrals-800/80 dark:bg-neutrals-600">
            <Icon icon="ph:command-duotone" className="h-5 w-5 text-light-body-text dark:text-dark-body-text" />
          </kbd>
          <kbd className="flex h-6 w-6 items-center justify-center rounded-[8px] border border-b-2 border-[#1f293741] bg-[#F2F2F2] px-1 py-0.5 dark:border-neutrals-800/80 dark:bg-neutrals-600">
            <Typography variant="h6" color="gray">
              K
            </Typography>
          </kbd>
        </div>
      }
    />
  );
};

export default KbdComponent;
