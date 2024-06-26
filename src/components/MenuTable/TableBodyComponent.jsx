import { useState } from 'react';
import { Avatar, Chip, IconButton, Progress, Tooltip, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useMenuStore } from '@services/state/store';
import { currencyFormatter } from '@utils/formatter';
import { EditMenuDialog, DeleteMenuDialog } from '@components/index';
import { calculateProgressColor } from '@utils/utils';

const TableBodyComponent = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const menuList = useMenuStore((state) => state.menuList);

  const handleOpenEdit = (data) => {
    setEditId(data.id);
    setOpenEdit((cur) => !cur);
  };

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete((cur) => !cur);
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
                  <Avatar src={row?.imageUrl} alt={row.itemName[0]} variant="rounded" size="sm" />
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
                <div className="max-w-48 grid grid-cols-4 gap-4">
                  {row?.options && (
                    <div className="flex flex-wrap col-span-4 gap-4">
                      {row.options.split(',').map((option, index) => (
                        <Chip className="w-fit shrink" key={index} size="sm" value={option.trim()} />
                      ))}
                    </div>
                  )}
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
                  {currencyFormatter.format(row.cost)}
                </Typography>
              </td>
              <td className={classes}>
                <div>
                  <Tooltip content="Delete" placement="left">
                    <IconButton variant="text" color="red" onClick={() => handleOpenDelete(row.id)}>
                      <Icon icon="ph:trash-duotone" className="w-5 h-5" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Edit" placement="right">
                    <IconButton variant="text" color="green" onClick={() => handleOpenEdit(row)}>
                      <Icon icon="ph:note-pencil-duotone" className="w-5 h-5" />
                    </IconButton>
                  </Tooltip>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>

      <EditMenuDialog id={editId} handleOpen={handleOpenEdit} open={openEdit} />
      <DeleteMenuDialog id={deleteId} handleOpen={handleOpenDelete} open={openDelete} />
    </>
  );
};

export default TableBodyComponent;
