import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "@/icons/socials";
import Logo from "@/icons/Logo";

const Footer = () => {
   return (
      <footer className="border-t py-12 font-medium">
         <footer className="px-5 lg:px-0 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700">
            <Link to="/">
               <Logo />
            </Link>

            <ul className="flex items-center gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-4 text-sm justify-center flex-wrap">
               <Link to="/" className="hover:text-primary-600">
                  Home
               </Link>
               <Link to="/products" className="hover:text-primary-600">
                  Products
               </Link>
               <Link to="/contacts" className="hover:text-primary-600">
                  Contact us
               </Link>
               <Link to="/login" className="hover:text-primary-600">
                  Login
               </Link>
            </ul>

            <div className="flex items-center gap-x-10 text-gray-400">
               <Facebook className="cursor-pointer" />
               <Instagram className="cursor-pointer" />
               <Twitter className="cursor-pointer" />
               <Github className="cursor-pointer" />
            </div>

            <small className="text-gray-500">
               © 2024 {import.meta.env.APP_BRAND_NAME}.com. All rights reserved.
            </small>
         </footer>
      </footer>
   );
};
export default Footer;
