import { Button, Dialog, Typography } from '@material-tailwind/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { menuItemSchema } from '@utils/validations';
import { Icon } from '@iconify/react';
import { useMenuItem } from '@hooks/useMenuItem';
import { useEffect } from 'react';
import FormInput from '../Input/FormInput';
import ImageUploader from '../ImageUploader';
import { unicodeCurrency } from '@utils/formatter';
import { toast } from 'sonner';

const EditMenuDialog = ({ id, handleOpen, open }) => {
  const { itemData, imageData, setImageData, uploadImage, updateItem, deleteImage } = useMenuItem(id);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(menuItemSchema),
  });

  useEffect(() => {
    if (itemData) {
      reset({
        itemName: itemData.itemName || '',
        category: itemData.category || '',
        price: itemData.price || '',
        cost: itemData.cost || '',
        amountInStock: itemData.amountInStock || '',
        options: itemData.options || '',
      });
    }
  }, [itemData, reset]);

  // Handle Image Selection
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageData({ url: URL.createObjectURL(file), file });
    }
  };

  // Form Submission Handler
  const onSubmit = async (data) => {
    try {
      const imageUrl = imageData.file ? await uploadImage(imageData.file) : imageData.url;
      const formattedData = {
        ...data,
        imageUrl,
        price: parseFloat(data.price),
        cost: parseFloat(data.cost),
        amountInStock: parseInt(data.amountInStock, 10) || 0,
      };
      await updateItem(formattedData);
      toast.success('Menu item updated successfully!');
      handleOpen(false);
    } catch (error) {
      console.error('Error updating menu item:', error);
      setError('root', {
        message: 'Error updating menu item. Please try again.',
      });
    }
  };

  return (
    <Dialog size="sm" open={open} handler={handleOpen} className="overflow-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography variant="h3" className="font-bold" color="black">
              Edit Menu Item
            </Typography>
            <Typography variant="paragraph" color="gray">
              Easily edit items from your menu with just a few clicks.
            </Typography>
          </div>

          <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
            <ImageUploader
              imageData={imageData}
              handleImageChange={handleImageChange}
              handleRemoveImage={deleteImage}
              errors={errors}
            />
            <FormInput label="Item Name" register={register} name="itemName" errors={errors} />
            <FormInput
              label="Select A Category"
              register={register}
              name="category"
              errors={errors}
              placeholder="Add up to 3 categories, separated by commas"
            />
            <FormInput
              label={`Price (${unicodeCurrency()})`}
              register={register}
              name="price"
              errors={errors}
              placeholder="Price"
            />
            <FormInput
              label={`Cost (${unicodeCurrency()})`}
              register={register}
              name="cost"
              errors={errors}
              placeholder="Cost"
            />
            <FormInput label="Amount in Stock" register={register} name="amountInStock" errors={errors} />
            <FormInput
              label="Options Available"
              register={register}
              name="options"
              errors={errors}
              placeholder="Add up to 4 options, separated by commas"
            />
          </div>

          <div className="flex w-full flex-row justify-end gap-3 p-0">
            <Button onClick={handleOpen} variant="text" color="gray">
              Cancel
            </Button>
            <Button className="w-full md:w-fit" type="submit">
              {isSubmitting ? <Icon icon="svg-spinners:6-dots-scale" style={{ color: '#fff' }} /> : 'Save Menu Item'}
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default EditMenuDialog;
