import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '@services/provider/firebaseConfig';

const AuthLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If user is NOT authenticated, redirect to login, preserving the intended destination
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthLayout;
