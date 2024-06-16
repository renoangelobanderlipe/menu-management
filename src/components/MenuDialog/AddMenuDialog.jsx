import { Button, Dialog, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { menuItemSchema } from '@utils/validations';
import { unicodeCurrency } from '@utils/formatter';
import { useAddMenuItem } from '@hooks/useAddMenuItem';
import FormInput from './../Input/FormInput';
import AddImageUploader from '../AddImageUploader';

const AddMenuDialog = ({ handleOpen, open }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(menuItemSchema),
  });

  const { selectedImage, handleImageChange, handleRemoveImage, addMenuItem } = useAddMenuItem();

  const onSubmit = (data) => addMenuItem(data, handleOpen, reset);

  return (
    <Dialog size="sm" open={open} handler={handleOpen} className="overflow-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography variant="h3" className="font-bold" color="black">
              Add Menu Item
            </Typography>
            <Typography variant="paragraph" color="gray">
              Easily add items to your menu with just a few clicks.
            </Typography>
          </div>

          <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
            <AddImageUploader
              selectedImage={selectedImage}
              handleImageChange={handleImageChange}
              handleRemoveImage={handleRemoveImage}
              setValue={setValue}
              errors={errors}
            />
            <FormInput label="Item Name" register={register} name="itemName" errors={errors} />
            <FormInput label="Select A Category" register={register} name="category" errors={errors} />
            <FormInput label={`Price (${unicodeCurrency()})`} register={register} name="price" errors={errors} />
            <FormInput label={`Cost (${unicodeCurrency()})`} register={register} name="cost" errors={errors} />
            <FormInput label="Amount in Stock" register={register} name="amountInStock" errors={errors} />
            <FormInput label="Options Available" register={register} name="options" errors={errors} />
          </div>

          <div className="flex w-full flex-row justify-end gap-3 p-0">
            <Button onClick={handleOpen} className="" variant="text" color="gray">
              Cancel
            </Button>
            <Button className="w-full lg:w-fit" disabled={isSubmitting} type="submit">
              {isSubmitting ? <Icon icon="svg-spinners:6-dots-scale" style={{ color: '#fff' }} /> : 'Add Menu Item'}
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default AddMenuDialog;
