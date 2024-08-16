import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layouts/Layout";
import PrivateRoute from "@/layouts/PrivateRoute";
import ErrorPage from "@/pages/ErrorPage";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/contacts", element: <Contact /> },
         { path: "/shopping-cart", element: <PrivateRoute component={<ShoppingCart />} /> },
         { path: "/profile", element: <PrivateRoute component={<Profile />} /> },
      ],
   },
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },
]);

export default () => {
   return <RouterProvider router={router} />;
};
