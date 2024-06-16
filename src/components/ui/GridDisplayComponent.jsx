import { Avatar, Button, Card, Chip, Progress, Typography } from '@material-tailwind/react';
import DeleteMenuDialog from '../MenuDialog/DeleteMenuDialog';
import { useState } from 'react';
import { useMenuStore } from '../../services/state/store';
import EditMenuDialog from '../MenuDialog/EditMenuDialog';

const GridDisplayComponent = ({ activeDisplay }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const menuList = useMenuStore((state) => state.menuList);

  const handleOpenEdit = () => setOpenEdit((cur) => !cur);
  const handleOpenDelete = () => setOpenDelete((cur) => !cur);

  return (
    <>
      <div className={`${activeDisplay ? 'hidden md:grid' : 'hidden'} grid-cols-4 gap-6`}>
        {menuList?.map((row, index) => {
          return (
            <Card key={index} color="white" className="group relative flex flex-col gap-4 p-6">
              <Avatar src={row?.imageUrl} alt="avatar" variant="rounded" className="h-[180px] w-full" size="lg" />
              <div className="flex flex-col gap-4">
                <Chip size="sm" className="w-fit" color={row.category_color} value={row.category} />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Typography variant="h4" color="black">
                      {row.itemName}
                    </Typography>
                    <div className="flex gap-2">
                      {row?.options_available?.map((item, index) => (
                        <Chip
                          key={index}
                          size="sm"
                          value={item}
                          color="cyan"
                          className="rounded-full py-0.5 text-[10.5px]"
                        />
                      ))}
                    </div>
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
                        {row.cost}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Progress
                  value={row.amount_in_stock}
                  size="sm"
                  color={row.amount_in_stock <= 50 ? 'yellow' : 'green'}
                  className={`${row.amount_in_stock == 0 ? '!bg-danger-200' : '!bg-blue-gray-50'} mb-2`}
                />
                <div className="flex gap-1">
                  <Typography
                    variant="small"
                    color={row.amount_in_stock <= 50 ? 'yellow' : 'green'}
                    className={`${row.amount_in_stock == 0 ? 'text-danger-500' : 'block'} font-bold`}
                  >
                    {row.amount_in_stock}
                  </Typography>
                  <Typography variant="small" color="gray">
                    in stock
                  </Typography>
                </div>
              </div>
              <div className="absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center gap-4 rounded-lg px-12 backdrop-blur-sm group-hover:flex group-hover:bg-primary-900/80">
                <Button fullWidth onClick={handleOpenEdit}>
                  Edit Menu Item
                </Button>
                <Button fullWidth color="red" className="bg-danger-100 text-danger-500" onClick={handleOpenDelete}>
                  Delete Menu Item
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <EditMenuDialog handleOpen={handleOpenEdit} open={openEdit} />
      <DeleteMenuDialog handleOpen={handleOpenDelete} open={openDelete} />
    </>
  );
};

export default GridDisplayComponent;
