import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { app } from '@services/provider/firebaseConfig';
import { toast } from 'sonner';
import { deleteObject, getDownloadURL, ref as refStorage, uploadBytes } from 'firebase/storage';
import { storage } from '@services/provider/firebaseConfig';
import { v4 } from 'uuid';

export const useMenuItem = (itemId) => {
  const [imageData, setImageData] = useState({ url: null, file: null });
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const itemRef = ref(db, `menus/${itemId}`);

    const unsubscribe = onValue(itemRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setItemData(data);
        setImageData({
          url: data.imageUrl || null,
          file: null,
        });
      }
    });

    return unsubscribe;
  }, [itemId]);

  const uploadImage = async (image) => {
    const storageRef = refStorage(storage, `menu-items/${image.name + v4()}`);
    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);
  };

  const updateItem = async (data) => {
    const db = getDatabase(app);
    const dbRef = ref(db, `menus/${itemId}`);
    await update(dbRef, data);
    toast.success('Success Updated');
  };

  const deleteImage = async (itemImage) => {
    if (itemImage) {
      const storageRef = refStorage(storage, itemImage);
      await deleteObject(storageRef);
      toast.success('Image deleted successfully!');
    } else {
      toast.info('No image to remove.');
    }
    setImageData({ url: null, file: null });
  };

  return { itemData, imageData, setImageData, uploadImage, updateItem, deleteImage };
};
