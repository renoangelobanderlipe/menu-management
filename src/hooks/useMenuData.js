// @services/hooks/useMenuData.js
import { useState, useEffect } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { app } from '@services/provider/firebaseConfig';

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'menus');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const menuItems = Object.values(snapshot.val());
        setMenuItems(menuItems);
      } else {
        setMenuItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return { menuItems };
};
