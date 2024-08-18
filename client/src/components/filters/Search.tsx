import { Search } from "lucide-react";

interface SearchBarProps {
   searchQuery: string | null;
   onChange: (value: string) => void;
}

const ProductSearchBar = ({ searchQuery, onChange }: SearchBarProps) => {
   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") onChange(e.currentTarget.value.trim());
   };

   return (
      <div className="h-20 mb-16 relative bg-gradient-to-r from-[#e3f1fd] to-[#fddad8]">
         <div className="px-4 sm:px-6 lg:px-8 absolute -bottom-8 w-full flex justify-center">
            <div className="px-5 h-16 mx-auto w-full max-w-lg flex items-center gap-x-4 rounded-md bg-white shadow-lg shadow-gray-200">
               <Search />
               <input
                  type="text"
                  placeholder="Search  e.g: sneaker"
                  enterKeyHint="search"
                  defaultValue={searchQuery || undefined}
                  onKeyDown={handleSearch}
                  className="h-full w-full max-w-lg rounded-md outline-none"
               />
            </div>
         </div>
      </div>
   );
};
export default ProductSearchBar;
