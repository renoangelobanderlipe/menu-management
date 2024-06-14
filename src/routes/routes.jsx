import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@components/ui/NotFound";

const LoginPage = lazy(() => import("@pages/en/Auth/LoginPage"));
const MenuManagementPage = lazy(() => import("@pages/en/MenuManagement/MenuManagementPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MenuManagementPage />
      </Suspense>
    ),
    errorElement: (<NotFound />),
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: (<NotFound />),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
