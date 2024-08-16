import React from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "./pages/RouterProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider />
   </React.StrictMode>
);
