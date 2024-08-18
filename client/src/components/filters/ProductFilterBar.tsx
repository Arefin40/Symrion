import { Filter } from "lucide-react";
import { Filters } from "@/types";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import SelectBrand from "@/components/filters/SelectBrand";
import PriceRangeFilter from "@/components/filters/PriceRange";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

const CATEGORIES = ["All", "Sneaker", "Sandal", "Polo", "Backpack"].sort();

interface ProductFilterBarProps {
   sort?: string | null;
   category?: string | null;
   brand?: string | null;
   price?: string | null;
   totalProducts?: number;
   showFilters?: boolean;
   toggleFilter: () => void;
   handleFilterChange: (filter: Partial<Filters>) => void;
}

const ProductFilterBar = ({
   sort,
   category,
   brand,
   price,
   totalProducts,
   showFilters = false,
   toggleFilter,
   handleFilterChange,
}: ProductFilterBarProps) => {
   return (
      <>
         <header className="grid sm:flex gap-y-4 sm:items-center sm:justify-between">
            <h3 className="sm:text-lg font-semibold sm:font-bold flex-shrink-0">
               Products ({totalProducts || 0})
            </h3>
            <div className="w-full sm:w-auto grid grid-cols-2 gap-x-2">
               <Button
                  onClick={() => toggleFilter()}
                  variant="outline"
                  className="gap-x-2 justify-center"
               >
                  <Filter className="size-4" />
                  <span>Filter</span>
               </Button>

               <Select
                  onValueChange={(sort) => handleFilterChange({ sort })}
                  defaultValue={sort || undefined}
               >
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
               "grid md:flex lg:items-center lg:justify-center md:gap-x-3 lg:gap-x-6 gap-y-3 overflow-hidden transition-[max-height]",
               showFilters ? "max-h-36 md:max-h-12" : "max-h-0"
            )}
         >
            <Select
               value={category || undefined}
               onValueChange={(category) => handleFilterChange({ category })}
            >
               <SelectTrigger className="min-w-32 lg:h-12 lg:px-4 lg:text-base text-gray-800">
                  <SelectValue placeholder="Category" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     {CATEGORIES.map((_category) => (
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

            <SelectBrand
               value={brand || undefined}
               category={category && category !== "all" ? category : undefined}
               onChange={(brand) => handleFilterChange({ brand })}
            />

            <PriceRangeFilter
               defaultValue={price}
               category={category && category !== "all" ? category : undefined}
               brand={brand && brand !== "all" ? brand : undefined}
               onChange={(price) => handleFilterChange({ price })}
            />
         </section>
      </>
   );
};
export default ProductFilterBar;
