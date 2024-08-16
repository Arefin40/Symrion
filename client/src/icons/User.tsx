import { cn } from "@/utils";
import React from "react";

const User: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 sm:size-6 fill-current", className)}
      >
         <path
            className="fill"
            d="M12 1.867c-3.683 0-5.526 4.452-2.922 7.055 2.603 2.604 7.055.76 7.055-2.922A4.133 4.133 0 0 0 12 1.867zM19.35 24v-5.095a3.108 3.108 0 0 0-3.105-3.105h-8.49a3.108 3.108 0 0 0-3.105 3.105V24z"
         />
         <path d="M12 12a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm9 22h-2v-5.043A2.96 2.96 0 0 0 16.043 16H7.957A2.96 2.96 0 0 0 5 18.957V24H3v-5.043A4.963 4.963 0 0 1 7.957 14h8.086A4.963 4.963 0 0 1 21 18.957z" />
      </svg>
   );
};
export default User;
