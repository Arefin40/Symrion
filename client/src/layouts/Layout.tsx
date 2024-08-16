import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const Layout = () => {
   return (
      <section className="pb-[4.75rem] sm:pb-[5.625rem] lg:pb-0">
         <Header />

         <main className="main-container font-medium flex flex-col">
            <Outlet />
         </main>

         <Footer />
      </section>
   );
};
export default Layout;
