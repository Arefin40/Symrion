import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, InfinityIcon, Search } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { useBrands, useProducts } from "@/api/useProduct";
import LoadingState from "@/components/LoadingState";

const categoris = ["All", "Sneaker", "Sandal", "Polo", "Backpack"].sort();

export default function Products() {
   const navigate = useNavigate();
   const [showFilters, setShowFilters] = useState(false);
   const [searchQuery, setSearchQuery] = useState();

   // filters
   const [currentPage, setCurrentPage] = useState<string>("1");
   const [category, setCategory] = useState<string>("all");
   const [brand, setBrand] = useState<string>("all");
   const [priceRange, setPriceRange] = useState<number[]>();
   const [sort, setSort] = useState<string>();

   const products = useProducts({
      q: searchQuery,
      brand: brand !== "all" ? brand : undefined,
      category: category !== "all" ? category : undefined,
      price: priceRange?.join("-"),
      sort: sort,
      page: currentPage,
   });

   const search = (e: any) => {
      if (e.key === "Enter") {
         const tags = e.target.value.trim().split(" ").join(",");
         navigate(`/products`);
         setSearchQuery(tags);
      }
   };

   const goToPage = (page: number) => setCurrentPage(String(Math.max(1, page)));

   if (products.isLoading) return <LoadingState />;

   console.log(products.data?.products);

   return (
      <section className="container py-3 lg:py-5 grid gap-3 lg:gap-6">
         <div className="h-20 mb-16 relative bg-gradient-to-r from-[#e3f1fd] to-[#fddad8]">
            <div className="px-4 sm:px-6 lg:px-8 absolute -bottom-8 w-full flex justify-center">
               <div className="px-5 h-16 mx-auto w-full max-w-lg flex items-center gap-x-4 rounded-md bg-white shadow-lg shadow-gray-200">
                  <Search />
                  <input
                     type="text"
                     placeholder="Search  e.g: sneaker"
                     enterKeyHint="search"
                     value={searchQuery}
                     onKeyDown={search}
                     className="h-full w-full max-w-lg rounded-md outline-none"
                  />
               </div>
            </div>
         </div>

         <header className="grid sm:flex gap-y-4 sm:items-center sm:justify-between">
            <h3 className="sm:text-lg font-semibold sm:font-bold flex-shrink-0">Products (40)</h3>

            <div className="w-full sm:w-auto grid grid-cols-2 gap-x-2">
               <Button
                  onClick={() => setShowFilters((prev) => !prev)}
                  variant="outline"
                  className="gap-x-2 justify-center"
               >
                  <Filter className="size-4" />
                  <span>Filter</span>
               </Button>

               <Select onValueChange={(s) => setSort(s)}>
                  <SelectTrigger className="min-w-32 text-gray-800">
                     <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectItem value="price_desc">High to Low</SelectItem>
                        <SelectItem value="price_asc">Low to High</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </header>

         <section
            className={cn(
               "grid lg:flex lg:items-center lg:justify-center lg:gap-x-6 gap-y-3 overflow-hidden transition-[max-height]",
               showFilters ? "max-h-10 lg:max-h-12" : "max-h-0"
            )}
         >
            <Select onValueChange={(c) => setCategory(c)}>
               <SelectTrigger className="min-w-32 lg:h-12 lg:px-4 lg:text-base text-gray-800">
                  <SelectValue placeholder="Category" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     {categoris.map((_category) => (
                        <SelectItem
                           key={_category}
                           value={_category.toLowerCase()}
                           className="p-3 lg:text-base"
                        >
                           {_category}
                        </SelectItem>
                     ))}
                  </SelectGroup>
               </SelectContent>
            </Select>

            <SelectBrand category={category} onChange={(b: string) => setBrand(b)} />

            <div className="w-full h-10 lg:h-12 px-3 lg:px-4 flex gap-x-3 items-center border rounded-md">
               <span>{priceRange?.[0] || 0}</span>
               <Slider
                  defaultValue={[0, Infinity]}
                  min={0}
                  step={1}
                  onValueChange={(values) => setPriceRange(values)}
                  className={cn("w-full")}
               />
               <span>{priceRange?.[1] || <InfinityIcon className="size-5" />}</span>
            </div>
         </section>

         <main className="grid lg:grid-cols-4 gap-y-10 lg:gap-x-6 lg:gap-y-14">
            {products.data?.products && products.data?.products.length > 0 ? (
               products.data?.products.map((product: any, i: number) => (
                  <ProductCard key={i} product={product} />
               ))
            ) : (
               <div className="py-6 w-full flex-center col-span-full">No products found</div>
            )}
         </main>

         <footer className="mt-6 lg:mt-10 px-5 flex-center">
            <Pagination
               currentPage={parseInt(currentPage)}
               totalPages={products.data?.pages}
               goToPage={goToPage}
            />
         </footer>
      </section>
   );
}

const SelectBrand = ({ category, onChange }: { category: string; onChange: any }) => {
   const brands = useBrands(category !== "all" ? category : undefined);

   return (
      <Select onValueChange={onChange}>
         <SelectTrigger className="min-w-32 lg:h-12 lg:px-4 lg:text-base text-gray-800">
            <SelectValue placeholder="Brand" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               {(brands.data || []).map((_brand: string) => (
                  <SelectItem
                     key={_brand}
                     value={_brand.split(" ").join("").toLowerCase()}
                     className="p-3 lg:text-base"
                  >
                     {_brand}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
};
