import { Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['Item Name', 'Category', 'Options Available', 'Amount In Stock', 'Price', 'Cost', 'Action'];

const TableHeaderComponent = () => {
  return (
    <thead className="sticky top-0 z-10">
      <tr>
        {TABLE_HEAD.map((row, index) => (
          <th key={index} className="h-[60px] items-center border-b border-neutrals-200 p-4 dark:border-neutrals-700">
            <Typography variant="h5" color="gray" className="flex w-full items-center justify-between gap-2">
              {row}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaderComponent;
