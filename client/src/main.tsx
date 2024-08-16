import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import RouterProvider from "./pages/RouterProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Toaster />
         <AuthProvider>
      <RouterProvider />
         </AuthProvider>
   </React.StrictMode>
);
