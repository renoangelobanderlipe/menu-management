import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@components/ui/NotFound";
import LoginPage from "../pages/en/Auth/LoginPage";

export const router = createBrowserRouter([
   {
    path: "/login",
    element: <LoginPage />,
    errorElement: (
      <Suspense fallback={<div>Loading</div>}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
