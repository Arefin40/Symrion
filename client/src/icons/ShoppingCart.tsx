import { cn } from "@/utils";
import React from "react";

const ShoppingCart: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 sm:size-6 fill-current", className)}
      >
         <path
            className="fill"
            d="m4.25 4.753.997 8.494h12.996a3.186 3.186 0 0 0 3.14-2.621l.836-4.623a1.062 1.062 0 0 0-1.052-1.25z"
         />
         <path d="M23.007 4.077A2.993 2.993 0 0 0 20.704 3H4.536l-.042-.351A3 3 0 0 0 1.516 0h-.222a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.851 19h10.443a1 1 0 0 0 0-2H8.851a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456zm-1.313 2.101-.786 4.354A3 3 0 0 1 17.951 13H5.713l-.941-8h15.932a1 1 0 0 1 .99 1.178z" />
         <circle cx="7.295" cy="22" r="2" />
         <circle cx="17.294" cy="22" r="2" />
      </svg>
   );
};
export default ShoppingCart;
