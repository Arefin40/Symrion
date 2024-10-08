import React from "react";
import { cn } from "@/utils";

const Twitter: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("p-px fill-current size-5", className)}
      >
         <path d="M14.234 10.162 22.976 0h-2.071l-7.591 8.824L7.25 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993l-9.509-13.838zm-2.838 3.298-.929-1.328L3.077 1.56h3.181l5.965 8.532.93 1.329 7.753 11.09h-3.182l-6.328-9.05z" />
      </svg>
   );
};
export default Twitter;
