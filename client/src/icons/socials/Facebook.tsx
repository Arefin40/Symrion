import React from "react";
import { cn } from "@/utils";

const Facebook: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("fill-current size-5", className)}
      >
         <path
            fillRule="evenodd"
            d="M12 0q3.353.038 6.057 1.648a12.094 12.094 0 0 1 4.305 4.33Q23.962 8.7 24 12.074q-.095 4.615-2.911 7.883c-1.878 2.18-4.282 3.527-6.771 4.044v-8.626h2.353l.532-3.39H13.64v-2.22a1.93 1.93 0 0 1 .41-1.275q.427-.545 1.506-.573h2.151v-2.97q-.046-.014-.878-.117a17.469 17.469 0 0 0-1.897-.118q-2.152.01-3.403 1.214-1.252 1.204-1.28 3.483v2.576H7.539v3.39h2.712V24c-3.057-.517-5.461-1.865-7.339-4.044C1.034 17.777.064 15.15.001 12.073Q.037 8.7 1.637 5.979a12.094 12.094 0 0 1 4.305-4.331Q8.648.038 12 0z"
         />
      </svg>
   );
};
export default Facebook;
