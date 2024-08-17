import React from "react";
import usePagination from "@/hooks/usePagination";
import { cn } from "@/utils";
import { Button } from "./ui/button";

const PaginationDot = ({ size = "size-8" }) => {
   return (
      <div className={`${size} rounded-md flex items-center justify-center text-gray-500`}>
         <svg viewBox="0 0 24 24" className="mt-0.5 w-4 h-4 fill-current">
            <circle cx="2.2" cy="12" r="2.2" />
            <circle cx="12" cy="12" r="2.2" />
            <circle cx="21.8" cy="12" r="2.2" />
         </svg>
      </div>
   );
};

interface PaginationItemProps {
   pageIndex: number;
   currentPage: number;
   className?: string;
   onClick?: any;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
   onClick,
   pageIndex,
   currentPage,
   className,
}) => {
   return (
      <Button
         onClick={onClick}
         className={cn(
            "size-8 flex items-center justify-center rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900",
            {
               "bg-secondary text-primary hover:bg-secondary hover:text-primary":
                  currentPage === pageIndex,
            },
            className
         )}
      >
         {pageIndex}
      </Button>
   );
};

const PaginationNavigationButton: React.FC<{
   onClick: () => void;
   size?: string;
   className?: string;
}> = ({ onClick, className }) => {
   return (
      <button
         onClick={onClick}
         className={cn(
            "size-8 flex items-center justify-center bg-gray-100 cursor-pointer select-none focus:outline-none transform active:scale-95 rounded font-medium hover:bg-gray-200",
            className
         )}
      >
         <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 flex-shrink-0 fill-current transform rounded-180 repeated"
         >
            <path d="M18.2 11.2L7.5.4C7-.1 6.3-.1 5.8.3c0 0-.1 0-.1.1-.4.4-.4 1.1 0 1.6 0 0 0 .1.1.1l9.9 9.9-9.9 10c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l10.8-10.8c.4-.5.4-1.2-.1-1.7.1 0 .1 0 0 0z" />
         </svg>
      </button>
   );
};

interface PaginationProps {
   goToPage: (page: number) => void;
   edge?: number;
   siblings?: number;
   totalPages?: number;
   currentPage?: number;
   hideDots?: boolean;
   buttonClass?: string;
   className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
   goToPage,
   edge = 1,
   siblings = 1,
   totalPages = 10,
   currentPage = 1,
   hideDots = false,
   buttonClass,
   className,
}) => {
   currentPage = currentPage || 1;
   const pattern = usePagination({ currentPage, totalPages, edge, siblings, hideDots });

   return (
      <div className="inline-grid grid-flow-col justify-center items-center gap-x-3 text-sm">
         <PaginationNavigationButton
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            className={cn(
               "size-8 rotate-180 rounded-lg font-medium hover:bg-gray-200 bg-gray-100 text-gray-600",
               buttonClass
            )}
         />

         <div className={cn("hidden sm:grid grid-flow-col gap-x-1.5 text-gray-700", className)}>
            {pattern.map((key, i) => {
               return key !== null ? (
                  <PaginationItem
                     key={i}
                     onClick={() => goToPage(key)}
                     pageIndex={key}
                     currentPage={currentPage}
                  />
               ) : (
                  <PaginationDot key={i} />
               );
            })}
         </div>

         <PaginationNavigationButton
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            className={buttonClass}
         />
      </div>
   );
};
export default Pagination;
