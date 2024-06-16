import { getDatabase, onValue, ref } from 'firebase/database';
import { app } from '@services/provider/firebaseConfig';

const useFetchEditData = (itemId, reset, setImageData) => {
  const db = getDatabase(app);
  const itemRef = ref(db, `menus/${itemId}`);

  return onValue(itemRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      reset(data);
      setImageData({ url: data.imageUrl || null, file: null });
    }
  });
};

export default useFetchEditData;
