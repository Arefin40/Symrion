import React from "react";
import { cn } from "@/utils";

const Star: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-3.5 fill-current text-primary/80", className)}
      >
         <path d="M23.937 9.191a1.273 1.273 0 0 0-1.098-.877l-6.927-.629-2.74-6.411a1.276 1.276 0 0 0-2.345.001l-2.74 6.41-6.928.63a1.275 1.275 0 0 0-1.097.876 1.274 1.274 0 0 0 .373 1.355l5.236 4.592-1.544 6.802a1.275 1.275 0 0 0 1.897 1.378L12 19.746l5.973 3.572a1.27 1.27 0 0 0 1.402-.061 1.276 1.276 0 0 0 .496-1.317l-1.544-6.802 5.236-4.59a1.276 1.276 0 0 0 .374-1.357z" />
      </svg>
   );
};
export default Star;
