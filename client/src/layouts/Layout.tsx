import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <section className="h-screen flex flex-col">
            <header className="p-6 border-b flex-center">Header</header>

            <main className="flex-grow flex-center">
               <Outlet />
            </main>

            <footer className="p-6 border-y flex-center">Footer</footer>
         </section>
      </>
   );
};
export default Layout;
