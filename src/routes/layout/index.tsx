import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex w-full h-full bg-primary">
      <Sidebar open={true} />
      <main className="w-full h-full ml-[300px] flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
