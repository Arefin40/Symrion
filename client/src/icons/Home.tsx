import { cn } from "@/utils";
import React from "react";

const Home: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 sm:size-6 fill-current", className)}
      >
         <path
            className="fill"
            d="M12 1.61c-.607 0-1.214.177-1.744.536L2.984 7.054A3.112 3.112 0 0 0 1.61 9.637v9.638c0 1.718 1.399 3.117 3.118 3.117h14.545c1.718 0 3.117-1.399 3.117-3.117V9.637a3.11 3.11 0 0 0-1.372-2.583l-7.274-4.908A3.104 3.104 0 0 0 12 1.61z"
         />

         <path d="M18.999 24H5.002c-2.757 0-5-2.243-5-5V9.728a4.99 4.99 0 0 1 2.204-4.145L9.204.86a4.98 4.98 0 0 1 5.593 0l6.999 4.723a4.991 4.991 0 0 1 2.203 4.145V19c0 2.756-2.243 4.999-5 4.999zM12 2.001c-.584 0-1.168.172-1.677.517l-7 4.722a2.992 2.992 0 0 0-1.32 2.486V19c0 1.654 1.345 3 2.998 3h13.997c1.654 0 3-1.347 3-3V9.726c0-.998-.494-1.928-1.32-2.485l-7-4.723A2.989 2.989 0 0 0 12 2z" />
         <path
            className="invert"
            d="M8 17a1 1 0 0 0-1 1 1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 1 1 0 0 0-1-1H8z"
         />
      </svg>
   );
};
export default Home;
