import * as React from "react";
import axios from "@/hooks/axios";
import { Slider } from "../ui/slider";
import { cn } from "@/utils";

interface PriceRangeFilterProps {
   defaultValue?: string | null;
   category?: string;
   brand?: string;
   onChange: (value: string) => void;
}

const PriceRangeFilter = ({ category, brand, defaultValue, onChange }: PriceRangeFilterProps) => {
   const initialValue = defaultValue
      ? [
           parseInt(defaultValue?.split("-")[0] || "0"),
           parseInt(defaultValue?.split("-")[1] || "100"),
        ]
      : [0, 100];
   const [value, setValue] = React.useState(initialValue);
   const [max, setMax] = React.useState(100);

   React.useEffect(() => {
      (async () => {
         const { data } = await axios.get("/products/max-price", {
            params: {
               category: category !== "all" ? category : undefined,
               brand: brand !== "all" ? brand : undefined,
            },
         });
         if (data) {
            setMax(data.maxPrice);
            if (!defaultValue) setValue([0, data.maxPrice]);
         }
      })();
   }, [category, brand]);

   return (
      <div className="w-full h-10 lg:h-12 px-3 lg:px-4 grid grid-cols-[3.5rem,1fr,3.5rem] gap-x-3 justify-center items-center border rounded-md">
         <span className="flex justify-end">{value[0]}</span>
         <Slider
            min={0}
            max={max}
            step={1}
            value={value}
            onValueChange={(v: number[]) => setValue(v)}
            onValueCommit={(v: number[]) => onChange(v.join("-"))}
            className={cn("w-full")}
         />
         <span>{value[1]}</span>
      </div>
   );
};

export default PriceRangeFilter;
