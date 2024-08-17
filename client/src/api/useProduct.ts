import { useQuery } from "@tanstack/react-query";
import axios from "@/hooks/axios";

// Get all products
export const useProducts = (query: any) => {
   console.log(query);

   return useQuery({
      queryKey: ["products", query],
      queryFn: async () => {
         const response = await axios.get("/products", {
            params: { ...query },
         });
         return response.data;
      },
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

// Get available max price
export const useMaxBrandsPrice = (category: string, brand?: string) => {
   return useQuery({
      queryKey: ["max-price", { category, brand }],
      queryFn: async () => {
         const response = await axios.get("/products/max-price", { params: { category, brand } });
         return response.data;
      },
      enabled: !!category,
   });
};
