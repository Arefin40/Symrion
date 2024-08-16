import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layouts/Layout";
import ErrorPage from "@/pages/ErrorPage";
import Register from "@/pages/auth/Register";
import Home from "@/pages/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ path: "/", element: <Home /> }],
   },
   { path: "/register", element: <Register /> },
]);

export default () => {
   return <RouterProvider router={router} />;
};
