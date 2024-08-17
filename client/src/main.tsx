import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouterProvider from "./pages/RouterProvider";
import "react-range-slider-input/dist/style.css";
import "./index.css";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 5,
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Toaster />
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <RouterProvider />
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
