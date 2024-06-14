import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@components/ui/NotFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <>Login Page</>,
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
