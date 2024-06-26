import { Avatar, Button, Card, Chip, Progress, Typography } from '@material-tailwind/react';
import DeleteMenuDialog from '../MenuDialog/DeleteMenuDialog';
import { useState } from 'react';
import { useMenuStore } from '../../services/state/store';
import EditMenuDialog from '../MenuDialog/EditMenuDialog';
import { calculateProgressColor } from '@utils/utils';
import { currencyFormatter } from '@utils/formatter';

const GridDisplayComponent = () => {
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
      <div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {menuList?.map((row, index) => {
          const amountInStock = row.amountInStock || 0;
          const progressColor = calculateProgressColor(amountInStock);
          return (
            <Card key={index} color="white" className="group relative flex flex-col justify-between gap-4 p-6">
              <Avatar src={row?.imageUrl} alt="avatar" variant="rounded" className="h-[180px] w-full" size="lg" />
              <div className="flex flex-col gap-4">
                <Chip size="sm" className="w-fit" color={row.category_color} value={row.category} />
                <div className="flex flex-col gap-6">
                  <div className="flex w-fit flex-col gap-3">
                    <Typography variant="h4" color="black">
                      {row.itemName}
                    </Typography>

                    {row?.options && (
                      <div className="col-span-3 flex flex-wrap gap-2 lg:gap-4">
                        {row.options.split(',').map((option, index) => (
                          <Chip className="w-fit shrink" key={index} size="sm" value={option.trim()} />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <Typography variant="paragraph" color="black">
                        Price (USD)
                      </Typography>
                      <Typography variant="paragraph" color="green">
                        {row.price}
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography variant="paragraph" color="black">
                        Cost (USD)
                      </Typography>
                      <Typography variant="paragraph" color="red">
                        {currencyFormatter.format(row.cost)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Progress
                  value={amountInStock}
                  size="sm"
                  color={progressColor}
                  className={`${amountInStock === 0 ? 'hidden' : 'block'} mb-2`}
                />
                <div className="flex gap-1">
                  <Typography
                    variant="small"
                    color={row.amountInStock <= 50 ? 'yellow' : 'green'}
                    className={`${row.amountInStock == 0 ? 'text-danger-500' : 'block'} font-bold`}
                  >
                    {row.amountInStock}
                  </Typography>
                  <Typography variant="small" color="gray">
                    in stock
                  </Typography>
                </div>
              </div>
              <div className="absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center gap-4 rounded-lg px-12 backdrop-blur-sm group-hover:flex group-hover:bg-primary-900/80">
                <Button fullWidth onClick={() => handleOpenEdit(row)}>
                  Edit Menu Item
                </Button>
                <Button
                  fullWidth
                  color="red"
                  className="bg-danger-100 text-danger-500"
                  onClick={() => handleOpenDelete(row.id)}
                >
                  Delete Menu Item
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <EditMenuDialog id={editId} handleOpen={handleOpenEdit} open={openEdit} />
      <DeleteMenuDialog id={deleteId} handleOpen={handleOpenDelete} open={openDelete} />
    </>
  );
};

export default GridDisplayComponent;
