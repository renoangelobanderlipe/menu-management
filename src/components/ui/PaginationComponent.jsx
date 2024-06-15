import { Icon } from '@iconify/react/dist/iconify.js';
import { IconButton, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const PaginationComponent = () => {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton size="sm" variant="outlined" onClick={prev} disabled={active === 1}>
        <Icon icon="ph:arrow-left-duotone" className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page
        <strong className="text-light-headings dark:text-dark-headings">{active}</strong>
        of
        <strong className="text-light-headings dark:text-dark-headings">10</strong>
      </Typography>
      <IconButton size="sm" variant="outlined" onClick={next} disabled={active === 10}>
        <Icon icon="ph:arrow-right-duotone" className="h-4 w-4" />
      </IconButton>
    </div>
  );
};

export default PaginationComponent;
