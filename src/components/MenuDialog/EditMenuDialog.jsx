import { Icon } from '@iconify/react/dist/iconify.js';
import { Avatar, Button, Dialog, IconButton, Input, Typography } from '@material-tailwind/react';
import { menuItemSchema } from '../../utils/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { unicodeCurrency } from '../../utils/formatter';
import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { app } from '@services/provider/firebaseConfig';
import { toast } from 'sonner';
import {
  deleteObject,
  getDownloadURL,
  ref as refStorage,
  uploadBytes,
} from 'firebase/storage';
import { storage } from '@services/provider/firebaseConfig';
import { v4 } from 'uuid';

const EditMenuDialog = ({ itemId, handleOpen, open }) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(menuItemSchema),
  });

  // Combined image state
  const [imageData, setImageData] = useState({
    url: null,
    file: null,
  });

  useEffect(() => {
    const db = getDatabase(app);
    const itemRef = ref(db, `menus/${itemId}`);

    const unsubscribe = onValue(itemRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        reset({
          itemName: data.itemName || '',
          category: data.category || '',
          price: data.price || '',
          cost: data.cost || '',
          amountInStock: data.amountInStock || '',
          options: data.options || '',
        });

        setImageData({
          url: data.imageUrl || null,
          file: null,
        });
      }
    });

    return unsubscribe;
  }, [itemId, reset]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageData({ url: URL.createObjectURL(file), file });
    }
  };

  const handleRemoveImage = async (itemImage) => {
    try {
      if (itemImage) {
        // Check if there's an image to delete
        const storageRef = refStorage(storage, itemImage); // Get the reference to the image in storage

        // Delete the image from Firebase Storage
        await deleteObject(storageRef);
        toast.success('Image deleted successfully!');
      } else {
        toast.info('No image to remove.');
      }
    } catch (error) {
      console.error('Error deleting image from storage:', error);
      setError('root', {
        message: 'Failed to delete image from storage.',
      });
    }
    // Clear the imageData state to remove it from the UI
    setImageData({ url: null, file: null });
  };

  const onSubmit = async (data) => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, `menus/${itemId}`);

      let imageUrl = imageData.url;
      let image = imageData.file;

      if (image) {
        const storageRef = refStorage(storage, `menu-items/${image.name + v4()}`);
        const snapshot = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      update(dbRef, {
        ...data,
        imageUrl: imageUrl,
        itemName: data.itemName,
        category: data.category,
        price: parseFloat(data.price),
        cost: parseFloat(data.cost),
        amountInStock: parseInt(data.amountInStock, 10) || 0,
        options: data.options,
      }).then(() => {
        handleOpen(true);
        toast.success('Success Updated');
      });
    } catch (error) {
      console.log('err', error);
      setError('root', {
        message: error,
      });
    }
  };

  return (
    <>
      <Dialog size="sm" open={open} handler={handleOpen} className="overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold" color="black">
                Edit Menu Item
              </Typography>
              <Typography variant="paragraph" color="gray">
                Easily edit items from your menu with just a few clicks.
              </Typography>
            </div>

            <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
              {!imageData.url ? (
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
                    {/* Display either the fetched or newly selected image */}
                    <Avatar src={imageData.url} alt="avatar" variant="rounded" size="sm" />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Typography variant="h5" color="black">
                        {/* Show filename or 'item-1.jpg' placeholder */}
                        {imageData.file?.name}
                      </Typography>
                      <Typography variant="small" color="gray">
                        {/* Show file size (approximate if from Firebase) */}
                        {imageData.file?.size ? (imageData.file.size / 1024).toFixed(2) : 140} KB
                      </Typography>
                    </div>
                    <IconButton variant="text" color="red" onClick={() => handleRemoveImage(imageData.url)}>
                      <Icon icon="ph:trash-duotone" className="w-5 h-5" />
                    </IconButton>
                  </label>
                  {/* ... your hidden file input ... */}
                </div>
              )}
              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
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
              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
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

              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
                <Typography variant="h5" color="black">
                  Price
                </Typography>
                <Input {...register('price')} placeholder={unicodeCurrency()} size="lg" />
                {errors.price && (
                  <Typography variant="small" color="red">
                    {errors.price.message}
                  </Typography>
                )}
              </div>

              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
                <Typography variant="h5" color="black">
                  Cost
                </Typography>
                <Input {...register('cost')} placeholder={unicodeCurrency()} size="lg" />
                {errors.cost && (
                  <Typography variant="small" color="red">
                    {errors.cost.message}
                  </Typography>
                )}
              </div>

              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
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

              <div className="md:col-span-1 flex flex-col col-span-2 gap-2">
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

            {/*  */}
            <div className="flex flex-row justify-end w-full gap-3 p-0">
              <Button onClick={handleOpen} variant="text" color="gray">
                Cancel
              </Button>
              <Button className="md:w-fit w-full" type="submit">
                {isSubmitting ? <Icon icon="svg-spinners:6-dots-scale" style={{ color: '#fff' }} /> : 'Save Menu Item'}
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default EditMenuDialog;
