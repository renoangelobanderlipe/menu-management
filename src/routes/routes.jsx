import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFoundComponent from '@components/ui/NotFoundComponent';

const LoginPage = lazy(() => import('@pages/en/Auth/LoginPage'));
const MenuManagementPage = lazy(() => import('@pages/en/MenuManagement/MenuManagementPage'));

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <MenuManagementPage />
//       </Suspense>
//     ),
//     errorElement: <NotFoundComponent />,
//   },
//   {
//     path: '/login',
//     element: <LoginPage />,
//     errorElement: <NotFoundComponent />,
//   },
//   {
//     path: '*',
//     element: <NotFoundComponent />,
//   },
// ]);
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>}><NotFoundComponent /></Suspense>,
    errorElement: <NotFoundComponent />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<div>Loading...</div>}><MenuManagementPage /></Suspense>,
      },
      {
        path: 'login',
        element: <Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundComponent />,
  },
]);
