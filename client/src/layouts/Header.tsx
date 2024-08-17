import { Link, NavLink } from "react-router-dom";
import { abbreviate, cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Home, User, Products, ShoppingCart } from "@/icons";
import { useAuth } from "@/contexts/AuthContext";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/icons/Logo";

const navigations = [
   { label: "Home", path: "/" },
   { label: "Products", path: "/products" },
   { label: "Contacts", path: "/contacts" },
];

const mobileNavigations = [
   { label: "Home", path: "/", icon: <Home /> },
   { label: "Products", path: "/products", icon: <Products /> },
   { label: "Cart", path: "/shopping-cart", icon: <ShoppingCart /> },
   { label: "Profile", path: "/profile", icon: <User /> },
];

const Header = () => {
   const { user, signOut } = useAuth();
   return (
      <>
         <header className="sticky top-0 border-b font-medium text-gray-900 bg-white z-50">
            <section className="h-16 lg:h-20 container flex lg:grid lg:grid-cols-[16rem,1fr,16rem] items-center justify-center lg:justify-normal gap-x-10">
               <Link to="/">
                  <Logo />
               </Link>

               <nav className="hidden lg:block">
                  <ul className="flex items-center justify-center gap-x-10 font-semibold">
                     {navigations.map(({ label, path }) => (
                        <li key={path}>
                           <NavLink
                              to={path}
                              className={({ isActive }) => cn({ "text-primary": isActive })}
                           >
                              {label}
                           </NavLink>
                        </li>
                     ))}
                  </ul>
               </nav>

               <div className="hidden lg:flex items-center justify-end gap-x-3">
                  {!user ? (
                     <>
                        <Button variant="secondary" asChild>
                           <Link to="/register">Sign Up</Link>
                        </Button>
                        <Button asChild>
                           <Link to="/login">Login</Link>
                        </Button>
                     </>
                  ) : (
                     <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                           <Avatar className="border">
                              <AvatarImage src={user?.image} alt="profile-picture" />
                              <AvatarFallback>{abbreviate(user?.name) || "you"}</AvatarFallback>
                           </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                           <DropdownMenuLabel>{user?.name || "My Account"}</DropdownMenuLabel>
                           <DropdownMenuSeparator />
                           <DropdownMenuItem asChild>
                              <Link to="/profile">My Profile</Link>
                           </DropdownMenuItem>
                           <DropdownMenuItem asChild>
                              <button onClick={signOut} className="w-full">
                                 Logout
                              </button>
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  )}
               </div>
            </section>
         </header>

         <nav className="lg:hidden px-4 h-[4.625rem] sm:h-[5.25rem] flex items-center text-xs sm:text-sm fixed bottom-0 inset-x-0 border bg-white">
            <ul className="w-full grid grid-cols-4 gap-x-5 text-center text-gray-800 font-semibold">
               {mobileNavigations.map(({ label, path, icon }) => (
                  <li key={path}>
                     <NavLink
                        to={path}
                        className={({ isActive }) =>
                           cn("w-full grid gap-y-1", isActive ? "active-nav" : "nav-icon")
                        }
                     >
                        <div className="icon p-1 sm:py-1.5 rounded-full bg-gray-100 flex-center">
                           {icon}
                        </div>
                        <span>{label}</span>
                     </NavLink>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};
export default Header;
