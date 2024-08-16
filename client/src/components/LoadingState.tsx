import { LoaderCircle } from "lucide-react";

const LoadingState = () => {
   return (
      <div className="my-12 flex-grow w-full flex-center gap-x-2 sm:gap-x-3 text-lg sm:text-xl font-semibold">
         <LoaderCircle className="animate-spin" />
         <span>Loading ...</span>
      </div>
   );
};
export default LoadingState;
