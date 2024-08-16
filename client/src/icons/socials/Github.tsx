import React from "react";
import { cn } from "@/utils";

const Github: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("fill-current size-5", className)}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.788 0C5.397 0 .255 5.117.255 11.478c0 5.07 3.316 9.374 7.881 10.904.577.096.769-.239.769-.574v-1.96c-3.22.717-3.892-1.53-3.892-1.53-.53-1.34-1.298-1.675-1.298-1.675-1.057-.717.096-.717.096-.717 1.153.096 1.778 1.196 1.778 1.196 1.01 1.77 2.691 1.243 3.364.956.096-.765.384-1.243.72-1.53-2.546-.287-5.237-1.292-5.237-5.692 0-1.243.432-2.295 1.201-3.06-.096-.287-.528-1.435.096-3.061 0 0 .961-.287 3.172 1.195.913-.239 1.922-.382 2.883-.382.961 0 1.97.143 2.884.382 2.21-1.482 3.171-1.195 3.171-1.195.625 1.578.24 2.726.096 3.06.721.814 1.202 1.818 1.202 3.061 0 4.4-2.691 5.357-5.286 5.644.432.335.768 1.052.768 2.104v3.157c0 .287.193.67.818.573 4.565-1.482 7.88-5.786 7.88-10.856C23.322 5.118 18.18 0 11.789 0Z"
         />
      </svg>
   );
};
export default Github;
