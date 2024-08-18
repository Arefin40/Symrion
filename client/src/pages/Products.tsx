import React from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/api/useProduct";
import LoadingState from "@/components/LoadingState";
import { Filters, Product } from "@/types";
import ProductSearchBar from "@/components/filters/Search";
import ProductFilterBar from "@/components/filters/ProductFilterBar";

interface ProductGridProps {
   isLoading: boolean;
   products: Product[];
}

const ProductGrid = ({ isLoading = false, products = [] }: ProductGridProps) => {
   if (isLoading) return <LoadingState />;
   if (products.length === 0)
      return <div className="py-6 w-full flex-center col-span-full">No products found</div>;

   return (
      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-10 gap-x-5 lg:gap-x-6 lg:gap-y-14">
         {products.map((product) => (
            <ProductCard key={product._id} product={product} />
         ))}
      </main>
   );
};

export default function Products() {
   const [showFilters, setShowFilters] = React.useState(false);
   const [searchParams, setSearchParams] = useSearchParams();
   const productsQuery = useProducts(Object.fromEntries([...searchParams]));

   const handleFilterChange = (filter: Partial<Record<keyof Filters, string>>) => {
      setSearchParams((prevFilters) => {
         const updatedParams = new URLSearchParams(prevFilters);

         // Remove the 'price' and brand key if 'category' or 'brand' are being updated
         if (filter.category || filter.brand) {
            updatedParams.delete("brand");
            updatedParams.delete("price");
         }

         // Update the search parameters based on the new filter values
         Object.entries(filter).forEach(([key, value]) =>
            value && value !== "all" ? updatedParams.set(key, value) : updatedParams.delete(key)
         );
         return updatedParams;
      });
   };

   const goToPage = (page: number) => {
      const updatedParams = new URLSearchParams(searchParams);
      page > 1 ? updatedParams.set("page", String(page)) : updatedParams.delete("page");
      setSearchParams(updatedParams);
   };

   return (
      <section className="container py-3 lg:py-5 grid gap-3 lg:gap-6">
         <ProductSearchBar
            searchQuery={searchParams.get("q")}
            onChange={(q) => setSearchParams(q !== "" ? { q } : {})}
         />

         <ProductFilterBar
            key={JSON.stringify(searchParams.size)}
            showFilters={showFilters}
            toggleFilter={() => setShowFilters((prev) => !prev)}
            sort={searchParams.get("sort")}
            category={searchParams.get("category")}
            brand={searchParams.get("brand")}
            price={searchParams.get("price")}
            totalProducts={productsQuery.data?.total}
            handleFilterChange={handleFilterChange}
         />

         <ProductGrid
            isLoading={productsQuery.isLoading}
            products={productsQuery?.data?.products}
         />

         <footer className="mt-6 lg:mt-10 px-5 flex-center">
            <Pagination
               currentPage={parseInt(searchParams.get("page") || "1")}
               totalPages={productsQuery.data?.pages || 1}
               goToPage={goToPage}
            />
         </footer>
      </section>
   );
}
