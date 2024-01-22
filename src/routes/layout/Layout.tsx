import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const location = useLocation();

  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
}

export default Layout;
