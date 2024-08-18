import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "@/hooks/axios";

// Get all products
export const useProducts = (query: any) => {
   return useQuery({
      queryKey: ["products", query],
      queryFn: async () => {
         const response = await axios.get("/products", {
            params: { ...query },
         });
         return response.data;
      },
      placeholderData: keepPreviousData,
   });
};

// Get all available brands
export const useBrands = (category?: string) => {
   return useQuery({
      queryKey: ["brands", { category }],
      queryFn: async () => {
         const response = await axios.get("/products/brands", { params: { category } });
         return response.data;
      },
   });
};
