import { cn } from "@/utils";
import React from "react";

const Products: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 sm:size-6 fill-current", className)}
      >
         <path
            d="M3.926 1.826a2.1 2.1 0 0 0-2.1 2.1v3.148a2.1 2.1 0 0 0 2.1 2.1h3.148a2.1 2.1 0 0 0 2.1-2.1V3.926a2.1 2.1 0 0 0-2.1-2.1H3.926zm13 0a2.1 2.1 0 0 0-2.1 2.1v3.148a2.1 2.1 0 0 0 2.1 2.1h3.148a2.1 2.1 0 0 0 2.1-2.1V3.926a2.1 2.1 0 0 0-2.1-2.1h-3.148zm-13 13a2.1 2.1 0 0 0-2.1 2.1v3.148a2.1 2.1 0 0 0 2.1 2.1h3.148a2.1 2.1 0 0 0 2.1-2.1v-3.148a2.1 2.1 0 0 0-2.1-2.1H3.926zm13 0a2.1 2.1 0 0 0-2.1 2.1v3.148a2.1 2.1 0 0 0 2.1 2.1h3.148a2.1 2.1 0 0 0 2.1-2.1v-3.148a2.1 2.1 0 0 0-2.1-2.1h-3.148z"
            className="fill"
         />
         <path d="M4 0a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm13 0a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zM4 2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm13 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 13a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zm13 0a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zM4 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm13 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
      </svg>
   );
};
export default Products;
