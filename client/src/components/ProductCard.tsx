import Star from "@/icons/Star";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
   const { user } = useAuth();
   const navigate = useNavigate();

   const addToCart = () => {
      if (!user) {
         navigate("/login");
         return;
      }
   };

   return (
      <div className="p-2 lg:p-4 space-y-4 border border-gray-100 rounded-md">
         <img
            src={product?.image}
            className="aspect-square bg-gray-100 flex-center rounded-md overflow-hidden"
         />

         <div className="space-y-1.5">
            <div className="text-sm flex items-center justify-between">
               <p>{product?.brand}</p>
               <div className="flex items-center gap-x-1">
                  <Star />
                  <span>{product?.rating}</span>
               </div>
            </div>
            <h3 className="text-gray-800 font-semibold line-clamp-2">{product?.name}</h3>

            <div className="flex items-center justify-between">
               <h2 className="text-gray-900 text-lg font-semibold">${product?.price}</h2>
               <Button onClick={addToCart} variant="outline" size="icon">
                  <ShoppingCart className="size-4" />
               </Button>
            </div>
         </div>
      </div>
   );
};
export default ProductCard;
