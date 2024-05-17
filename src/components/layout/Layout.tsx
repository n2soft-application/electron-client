import { useEffect, useState } from "react";
import useContentWidth from "../../hooks/layout/useContentWidth";
import useMenuHidden from "../../hooks/layout/useMenuHidden";
import useMenuLayout from "../../hooks/layout/useMenuLayout";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import useSidebar from "../../hooks/layout/useSidebar";
import useWidth from "../../hooks/layout/useWidth";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Setting from "../setting/Setting";
import MobileMenu from "../sidebar/MobileMenu";
import Sidebar from "../sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Icon from "../icons/Icon";
import useTabMenu from "../../hooks/layout/useTabMenu";
import { TabMenuListType } from "../../state/layout/layoutAtom";

function Layout() {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenuLayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const [tabMenu, setTabMenu] = useState<TabMenuListType>([]);

  const {
    activeTab,
    setActiveTab,
    tabMenuState,
    setTabMenuState,
    findElement,
    handleTabClose,
  } = useTabMenu();

  useEffect(() => {
    setTabMenu(
      tabMenuState.map(({ name, href }) => ({
        name,
        href,
        component: findElement(href),
      }))
    );
  }, []);

  useEffect(() => {
    if (tabMenu.length) {
      setTabMenuState(tabMenu.map(({ name, href }) => ({ name, href })));
    }
  }, [tabMenu]);

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
      <Header
        className={width > breakpoints.xl ? switchHeaderClass() : ""}
        tabMenu={tabMenu}
        setTabMenu={setTabMenu}
      />
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
        <Sidebar tabMenu={tabMenu} setTabMenu={setTabMenu} />
      )}

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100 z-[9999]"
            : "left-[-300px] invisible opacity-0 z-[-999]"
        }`}
        tabMenu={tabMenu}
        setTabMenu={setTabMenu}
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
            <div className="overflow-x-auto bg-white dark:bg-slate-800">
              <div className="flex border-r divide-x w-fit border-slate-200 dark:border-slate-700 dark:divide-slate-700">
                {tabMenu.map((tab, index) => (
                  <button key={index} onClick={() => setActiveTab(tab.href)}>
                    <div
                      className={`flex items-center h-full gap-2 px-4 ${
                        tab.href === activeTab
                          ? "bg-slate-100 dark:bg-secondary-900 border-b-0"
                          : "bg-transparent hover:bg-slate-100 dark:hover:bg-secondary-900 border-b border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <p className="whitespace-nowrap">{tab.name}</p>
                      {tab.href !== "home/dashboard" && (
                        <div
                          className="p-0.5 rounded-full"
                          onClick={() => {
                            handleTabClose(tabMenu, setTabMenu, tab.href);
                          }}
                        >
                          <Icon icon="heroicons:x-mark-16-solid" width="20px" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <Breadcrumbs activeTab={activeTab} />
              {tabMenu.map((tab) => (
                <div
                  key={tab.href}
                  style={{
                    display: activeTab === tab.href ? "block" : "none",
                  }}
                >
                  {tab.component ? <tab.component /> : <>none</>}
                </div>
              ))}
            </div>
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
