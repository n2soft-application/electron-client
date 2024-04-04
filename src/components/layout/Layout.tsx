import { motion } from "framer-motion";
import { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useContentWidth from "../../hooks/layout/useContentWidth";
import useMenuHidden from "../../hooks/layout/useMenuHidden";
import useMenuLayout from "../../hooks/layout/useMenuLayout";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import useSidebar from "../../hooks/layout/useSidebar";
import useWidth from "../../hooks/layout/useWidth";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Loading from "../loading/Loading";
import Setting from "../setting/Setting";
import MobileMenu from "../sidebar/MobileMenu";
import Sidebar from "../sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import { useRecoilState } from "recoil";
import { tabMenuTypeState } from "../../state/layout/layoutAtom";
import { NavLink } from "react-router-dom";
import Icon from "../icons/Icon";

function Layout() {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenuLayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const [tabMenu, setTabMenu] = useRecoilState(tabMenuTypeState);

  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  // 탭 닫기
  const handleTabClose = (tab: { name: string; href: string }) => {
    let updatedTabs = tabMenu;
    if ("/" + tab.href === location.pathname) {
      const currentIndex = updatedTabs.findIndex((t) => t.href === tab.href);
      if (updatedTabs[currentIndex + 1]) {
        navigate("/" + updatedTabs[currentIndex + 1].href);
      } else if (updatedTabs[updatedTabs.length - 2]) {
        navigate("/" + updatedTabs[updatedTabs.length - 2].href);
      }
    }
    updatedTabs = updatedTabs.filter((t) => t.href !== tab.href);
    setTabMenu(updatedTabs);
  };

  return (
    <div className="">
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
        <Sidebar />
      )}

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100 z-[9999]"
            : "left-[-300px] invisible opacity-0 z-[-999]"
        }`}
      />
      {/* mobile menu overlay*/}
      {width < breakpoints.xl && mobileMenu && (
        <div
          className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <Setting />

      <main
        className={`content-wrapper transition-all duration-150 ${
          width > 1280 ? switchHeaderClass() : ""
        }`}
      >
        <div className="page-min-height">
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
                    // y: 50,
                  },
                  pageAnimate: {
                    opacity: 1,
                    // y: 0,
                  },
                  pageExit: {
                    opacity: 0,
                    // y: -50,
                  },
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                {/* <Breadcrumbs /> */}
                <div className="overflow-x-auto bg-white dark:bg-slate-800">
                  <div className="flex h-10 border-r divide-x w-fit border-slate-200 dark:border-slate-700 dark:divide-slate-700">
                    {tabMenu.map((tab, index) => (
                      <NavLink key={index} to={tab.href ?? ""}>
                        {({ isActive }) => (
                          <div
                            className={`flex items-center h-full gap-2 px-4 ${
                              isActive
                                ? "bg-slate-100 dark:bg-secondary-900 border-b-0"
                                : "bg-transparent hover:bg-slate-100 dark:hover:bg-secondary-900 border-b border-slate-200 dark:border-slate-700"
                            }`}
                          >
                            <p className="whitespace-nowrap">{tab.name}</p>
                            {tab.href !== "home/dashboard" && (
                              <div
                                className="p-0.5 rounded-full"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleTabClose(tab);
                                }}
                              >
                                <Icon
                                  icon="heroicons:x-mark-16-solid"
                                  width="20px"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="p-6">{<Outlet />}</div>
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
