import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { abbreviate } from "@/utils";

export default function Profile() {
   const { user, signOut } = useAuth();

   return (
      <section className="h-full flex-center flex-grow">
         <div className="px-6 py-3 w-full max-w-xl grid gap-y-2 content-start justify-items-center">
            <Avatar className="size-28 lg:size-40">
               <AvatarImage src={user?.image} alt="profile-picture" />
               <AvatarFallback>{abbreviate(user?.name) || "you"}</AvatarFallback>
            </Avatar>

            <h4 className="text-gray-800 text-lg font-semibold">{user?.name}</h4>

            <Button
               onClick={signOut}
               size="sm"
               className="mt-2 px-4 sm:px-5 h-8 sm:h-10 rounded-full bg-gray-900 hover:bg-gray-800 text-sm"
            >
               Logout
            </Button>
         </div>
      </section>
   );
}
