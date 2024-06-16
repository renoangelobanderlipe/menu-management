import { useState } from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Avatar, Button, Dialog, IconButton, Input, Typography } from '@material-tailwind/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { menuItemSchema } from '@utils/validations';
import { toast } from 'sonner';
import { v4 } from 'uuid';

import { storage } from '@services/provider/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { getDatabase, push, ref as refRtd, set } from 'firebase/database';
import { unicodeCurrency } from '../../utils/formatter';

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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
      setValue('image', file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setValue('image', null);
  };

  const onSubmit = async (data) => {
    try {
      const db = getDatabase();

      let imageUrl = null;
      if (data.image) {
        const storageRef = ref(storage, `menu-items/${data.image.name + v4()}`);
        const snapshot = await uploadBytes(storageRef, data.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const newMenuItemRef = push(refRtd(db, 'menus'));
      await set(newMenuItemRef, {
        id: newMenuItemRef.key,
        ...data,
        imageUrl: imageUrl,
      });

      toast.success('Menu item added successfully!');
      handleOpen(null);
      setSelectedImage(null);
      reset();
    } catch (error) {
      console.error('Error adding menu item:', error);
      toast.error('An error occurred while adding the menu item.');
    }
  };

  return (
    <>
      <Dialog size="sm" open={open} handler={handleOpen} className="overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold" color="black">
                Add Menu Item
              </Typography>
              <Typography variant="paragraph" color="gray">
                Easily add items to your menu with just a few clicks.
              </Typography>
            </div>

            <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
              {!selectedImage ? (
                <div className="flex flex-col col-span-2 gap-2">
                  <Typography variant="h5" color="black">
                    Item Image
                  </Typography>
                  <label
                    htmlFor="item-image"
                    className="border-neutrals-500 dark:border-neutrals-600 2xl:flex-col 2xl:py-12 flex items-center h-full gap-4 px-4 py-4 border border-dashed rounded-lg"
                  >
                    <Icon icon="ph:upload-duotone" className="text-primary-500 w-8 h-8" />
                    <div className="2xl:items-center 2xl:justify-center 2xl:text-center flex flex-col gap-2">
                      <Typography variant="h5" color="black">
                        Drag and Drop or Choose a Local File
                      </Typography>
                      <Typography variant="small" color="gray">
                        Supported formats: .png, .jpg, .svg
                      </Typography>
                    </div>
                  </label>
                  <input onChange={handleImageChange} id="item-image" type="file" size="lg" className="hidden" />
                  {errors.image && (
                    <Typography variant="small" color="red">
                      {errors.image.message}
                    </Typography>
                  )}
                </div>
              ) : (
                <div className="flex flex-col col-span-2 gap-2">
                  <Typography variant="h5" color="black">
                    Item Image
                  </Typography>
                  <label
                    htmlFor="item-image"
                    className="flex h-full w-fit flex-row items-center gap-4 rounded-lg border border-solid border-neutrals-500 px-4 py-3.5 dark:border-neutrals-600"
                  >
                    <Avatar src={selectedImage} alt="avatar" variant="rounded" size="sm" />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Typography variant="h5" color="black">
                        item-1.jpg
                      </Typography>
                      <Typography variant="small" color="gray">
                        140 KB
                      </Typography>
                    </div>
                    <IconButton variant="text" color="red" onClick={handleRemoveImage}>
                      <Icon icon="ph:trash-duotone" className="w-5 h-5" />
                    </IconButton>
                  </label>
                  <input id="item-image" type="file" size="lg" className="hidden" />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Item Name
                </Typography>
                <Input {...register('itemName')} size="lg" />
                {errors.itemName && (
                  <Typography variant="small" color="red">
                    {errors.itemName.message}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Select A Category
                </Typography>
                <Input {...register('category')} size="lg" placeholder="Add up to 3 categories, separated by commas" />
                {errors.category && (
                  <Typography variant="small" color="red">
                    {errors.category.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  {unicodeCurrency()} Price
                </Typography>
                <Input {...register('price')} placeholder={unicodeCurrency()} size="lg" />
                {errors.price && (
                  <Typography variant="small" color="red">
                    {errors.price.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  {unicodeCurrency()} Cost
                </Typography>
                <Input {...register('cost')} placeholder={unicodeCurrency()} size="lg" />
                {errors.cost && (
                  <Typography variant="small" color="red">
                    {errors.cost.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Amount in Stock
                </Typography>
                <Input {...register('amountInStock')} size="lg" />
                {errors.amountInStock && (
                  <Typography variant="small" color="red">
                    {errors.amountInStock.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Options Available
                </Typography>
                <Input {...register('options')} size="lg" placeholder="Add up to 4 options, separated by commas" />
                {errors.options && (
                  <Typography variant="small" color="red">
                    {errors.options.message}
                  </Typography>
                )}
              </div>
            </div>

            <div className="flex flex-row justify-end w-full gap-3 p-0">
              <Button onClick={handleOpen} className="" variant="text" color="gray">
                Cancel
              </Button>
              <Button className="lg:w-fit w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? <Icon icon="svg-spinners:6-dots-scale" style={{ color: '#fff' }} /> : 'Add Menu Item'}
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddMenuDialog;
