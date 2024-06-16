import { useState } from 'react';
import { v4 } from 'uuid';
import { getDatabase, push, ref as refRtd, set } from 'firebase/database';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@services/provider/firebaseConfig';
import { toast } from 'sonner';

export const useAddMenuItem = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event, setValue) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
      setValue('image', file);
    }
  };

  const handleRemoveImage = (setValue) => {
    setSelectedImage(null);
    setValue('image', null);
  };

  const uploadImage = async (image) => {
    const storageRef = ref(storage, `menu-items/${image.name + v4()}`);
    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);
  };

  const addMenuItem = async (data, handleOpen, reset) => {
    try {
      const db = getDatabase();

      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadImage(data.image);
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

  return {
    selectedImage,
    handleImageChange,
    handleRemoveImage,
    addMenuItem,
  };
};
