import { Avatar, Chip, IconButton, Progress, Tooltip, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { useMenuStore } from '@services/state/store';
import { currencyFormatter } from '@utils/formatter';
import { EditMenuDialog, DeleteMenuDialog } from '@components/index';

const TableBodyComponent = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  // Store the ID to the state
  const setMenuId = useMenuStore((state) => state.setMenuId);
  // access the menu list in the state
  const menuList = useMenuStore((state) => state.menuList);

  const handleOpenEdit = (data) => {
    setMenuId(data.id);
    setOpenEdit((cur) => !cur);
  };

  const handleOpenDelete = (id) => {
    setMenuId(id);
    setOpenDelete((cur) => !cur);
  };

  const calculateProgressColor = (amountInStock) => {
    const percentageInStock = (amountInStock / 100) * 100;

    if (percentageInStock === 0) return 'red';
    if (percentageInStock <= 25) return 'pink';
    if (percentageInStock <= 50) return 'yellow';
    if (percentageInStock <= 75) return 'blue';
    return 'green';
  };

  return (
    <>
      <tbody>
        {menuList?.map((row, index) => {
          const classes = 'p-4';
          const amountInStock = row.amountInStock || 0;
          const progressColor = calculateProgressColor(amountInStock);
          return (
            <tr key={index} className="hover:bg-primary-100/20 dark:hover:bg-primary-800/10">
              <td className={classes}>
                <div className="flex items-center gap-3">
                  <Avatar src={row?.imageUrl} alt="avatar" variant="rounded" size="sm" />
                  <Typography variant="h5" color="black">
                    {row.itemName}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Chip size="sm" color={row.category_color} value={row.category} />
                </div>
              </td>
              <td className={classes}>
                <div className="flex w-max gap-2">
                  {row?.options &&
                    row.options.split(',').map((option, index) => <Chip key={index} size="sm" value={option.trim()} />)}
                </div>
              </td>
              <td className={classes}>
                <Progress
                  value={amountInStock}
                  size="sm"
                  color={progressColor}
                  className={`${amountInStock === 0 ? 'hidden' : 'block'} mb-2`}
                />
                <div className="flex gap-1">
                  <Typography
                    variant="small"
                    color={progressColor}
                    className={`${amountInStock === 0 ? 'hidden' : 'block'} font-bold`}
                  >
                    {amountInStock}
                  </Typography>
                  <Typography variant="small" color="gray" className={`${amountInStock === 0 ? 'hidden' : 'block'}`}>
                    in stock
                  </Typography>
                  <Chip
                    value="out of stock"
                    size="sm"
                    color="red"
                    className={`${amountInStock === 0 ? 'block' : 'hidden'} rounded-full text-[10px]`}
                  />
                </div>
              </td>
              <td className={classes}>
                <Typography variant="h5" color="black">
                  {currencyFormatter.format(row.price)}
                </Typography>
              </td>
              <td className={classes}>
                <Typography variant="h5" color="black">
                  {row.cost}
                </Typography>
              </td>
              <td className={classes}>
                <div>
                  <Tooltip content="Delete" placement="left">
                    <IconButton variant="text" color="red" onClick={() => handleOpenDelete(row.id)}>
                      <Icon icon="ph:trash-duotone" className="h-5 w-5" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Edit" placement="right">
                    <IconButton variant="text" color="green" onClick={() => handleOpenEdit(row)}>
                      <Icon icon="ph:note-pencil-duotone" className="h-5 w-5" />
                    </IconButton>
                  </Tooltip>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>

      <EditMenuDialog handleOpen={handleOpenEdit} open={openEdit} />
      <DeleteMenuDialog handleOpen={handleOpenDelete} open={openDelete} />
    </>
  );
};

export default TableBodyComponent;
