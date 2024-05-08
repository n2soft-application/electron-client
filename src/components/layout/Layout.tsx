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
import { menuItems } from "../../constants/data";
import { useRecoilState } from "recoil";
import { activeTabTypeState } from "../../state/layout/layoutAtom";
import Dashboard from "../../pages/dashboard/Dashboard";

function Layout() {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenuLayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const [tabMenu, setTabMenu] = useState<
    Array<{
      name: string;
      href: string;
      component: React.ComponentType | null;
    }>
  >([]);
  const [activeTab, setActiveTab] = useState<string>("home/dashboard");
  //   const [activeTab, setActiveTab] = useRecoilState(activeTabTypeState);

  useEffect(() => {
    if (activeTab === "home/dashboard") {
      handleTabOpen("대시보드", "home/dashboard", Dashboard);
    }
  }, [activeTab]);

  //   useEffect(() => {
  //     handleTabOpen(findTitle(activeTab), activeTab, findElement(activeTab));
  //   }, [activeTab]);

  const findTitle = (link: string) => {
    let title = "";
    menuItems.map((item) => {
      if (item.child) {
        item.child.map((i) => {
          if (i.multi_menu) {
            i.multi_menu.map((m) => {
              if (m.multiLink === link) {
                title = m.multiTitle;
              }
            });
          } else if (i.childlink === link) {
            title = i.childtitle ?? "";
          }
        });
      } else if (item.link === link) {
        title = item.title;
      }
    });
    return title;
  };

  const findElement = (link: string) => {
    let element = null;
    menuItems.map((item) => {
      if (item.child) {
        item.child.map((i) => {
          if (i.multi_menu) {
            i.multi_menu.map((m) => {
              if (m.multiLink === link) {
                element = m.multiElement;
              }
            });
          } else if (i.childlink === link) {
            element = i.childElement;
          }
        });
      } else if (item.link === link) {
        element = item.element;
      }
    });
    return element;
  };

  // 탭 열기
  const handleTabOpen = (
    name: string,
    href: string,
    element: React.ComponentType | null
  ) => {
    if (tabMenu.every((t: { href: string }) => t.href !== href)) {
      // 탭메뉴에 없는 새로운 메뉴라면
      if (tabMenu.length >= 10) {
        // 10개 넘으면 추가 X
        alert("탭은 최대 10개까지 추가 가능합니다.");
      } else {
        // 10개 안넘으면 추가 O
        setActiveTab(href);
        setTabMenu([
          ...tabMenu,
          { name: name, href: href, component: element },
        ]);
      }
    }
  };

  // 탭 닫기
  const handleTabClose = (tab: { name: string; href: string }) => {
    let updatedTabs = [...tabMenu];
    if (tab.href === activeTab) {
      const currentIndex = updatedTabs.findIndex((t) => t.href === tab.href);
      if (updatedTabs[currentIndex + 1]) {
        setActiveTab(updatedTabs[currentIndex + 1].href);
      } else if (updatedTabs[updatedTabs.length - 2]) {
        setActiveTab(updatedTabs[updatedTabs.length - 2].href);
      }
    }
    updatedTabs = updatedTabs.filter((t) => t.href !== tab.href);
    setTabMenu(updatedTabs);
  };

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
        <Sidebar activeTab={activeTab} handleTabOpen={handleTabOpen} />
      )}

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100 z-[9999]"
            : "left-[-300px] invisible opacity-0 z-[-999]"
        }`}
        activeTab={activeTab}
        handleTabOpen={handleTabOpen}
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
              <div className="flex h-10 border-r divide-x w-fit border-slate-200 dark:border-slate-700 dark:divide-slate-700">
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
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleTabClose(tab);
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
              {/* <Breadcrumbs /> */}
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
