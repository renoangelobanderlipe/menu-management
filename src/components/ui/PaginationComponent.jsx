import { Icon } from '@iconify/react/dist/iconify.js';
import { IconButton, Typography } from '@material-tailwind/react';

const PaginationComponent = ({ currentPage, totalPages, setCurrentPage }) => {
  const onNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onPrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };
  return (
    <div className="flex items-center gap-8">
      <IconButton size="sm" variant="outlined" color="blue" onClick={onPrev} disabled={currentPage === 1}>
        <Icon icon="ph:arrow-left-duotone" className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-light-headings dark:text-dark-headings">{currentPage}</strong> of{' '}
        <strong className="text-light-headings dark:text-dark-headings">{totalPages}</strong>
      </Typography>
      <IconButton size="sm" variant="outlined" color="blue" onClick={onNext} disabled={currentPage === totalPages}>
        <Icon icon="ph:arrow-right-duotone" className="h-4 w-4" />
      </IconButton>
    </div>
  );
};

export default PaginationComponent;
