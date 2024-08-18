import { useBrands } from "@/api/useProduct";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

const SelectBrand = ({
   value,
   category,
   onChange,
}: {
   category?: string;
   value?: string;
   onChange: (value: string) => void;
}) => {
   const brands = useBrands(category);

   return (
      <Select value={value} onValueChange={onChange}>
         <SelectTrigger className="min-w-32 lg:h-12 lg:px-4 lg:text-base text-gray-800">
            <SelectValue placeholder="Brand" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectItem value="all" className="p-3 lg:text-base">
                  All
               </SelectItem>
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
export default SelectBrand;
