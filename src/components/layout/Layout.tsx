import { motion } from "framer-motion";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useContentWidth from "../../hooks/layout/useContentWidth";
import useMenuHidden from "../../hooks/layout/useMenuHidden";
import useMenuLayout from "../../hooks/layout/useMenuLayout";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import useSidebar from "../../hooks/layout/useSidebar";
import useWidth from "../../hooks/layout/useWidth";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Loading from "../loading/Loading";
import Sidebar from "../sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const location = useLocation();
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenuLayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu, setMobileMenu] = useMobileMenu();

  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  return (
    <div className="">
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
        <Sidebar />
      )}

      {/* <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100  z-[9999]"
            : "left-[-300px] invisible opacity-0  z-[-999] "
        }`}
      /> */}
      {/* mobile menu overlay*/}
      {width < breakpoints.xl && mobileMenu && (
        <div
          className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <main
        className={`content-wrapper transition-all duration-150 ${
          width > 1280 ? switchHeaderClass() : ""
        }`}
      >
        <div className="page-content page-min-height ">
          <div
            className={
              contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
            }
          >
            <Suspense fallback={<Loading />}>
              <motion.div
                key={location.pathname}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 50,
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0,
                  },
                  pageExit: {
                    opacity: 0,
                    y: -50,
                  },
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                <Breadcrumbs />
                {<Outlet />}
              </motion.div>
            </Suspense>
          </div>
        </div>
      </main>
      {width > breakpoints.md && (
        <Footer className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      )}
    </div>
  );
}

export default Layout;
