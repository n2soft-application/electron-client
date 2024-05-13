import { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import useSemiDark from "../../hooks/layout/useSemiDark";
import useSidebar from "../../hooks/layout/useSidebar";
import useSkin from "../../hooks/layout/useSkin";
import NavMenu from "./NavMenu";
import SidebarLogo from "./SidebarLogo";

import { menuItems } from "../../constants/data";
import { MenuService } from "../../api/services/menuService";
import { storageKey } from "../../constants/constants";

type Props = {
  activeTab: string;
  handleTabOpen: (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => void;
};

function Sidebar({ activeTab, handleTabOpen }: Props) {
  const scrollableNodeRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(false);
  const [collapsed, setMenuCollapsed] = useSidebar();
  const [menuHover, setMenuHover] = useState(false);

  // semi dark option
  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();

  useEffect(() => {
    const handleScroll = () => {
      if ((scrollableNodeRef.current?.scrollTop ?? 0) > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current?.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  // 메뉴 조회
  useEffect(() => {
    getMenuItems();
    // getMenuItemByCode("bc");
  }, []);

  const getMenuItems = async () => {
    if (!localStorage.getItem(storageKey.menu)) {
      try {
        const response = await MenuService.getMenu();
        if (response.status === "OK") {
          console.log(response.data);
          localStorage.setItem(storageKey.menu, JSON.stringify(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getMenuItemByCode = async (code: string) => {
    try {
      const response = await MenuService.getMenuByCode(code);
      if (response.status === "OK") {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={isSemiDark ? "dark" : ""}>
      <div
        className={`sidebar-wrapper bg-white dark:bg-slate-800 ${
          collapsed ? "w-[72px] close_sidebar" : "w-[248px]"
        }
      ${menuHover ? "sidebar-hovered" : ""}
      ${
        skin === "bordered"
          ? "border-r border-slate-200 dark:border-slate-700"
          : "shadow-base"
      }
      `}
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
      >
        <SidebarLogo menuHover={menuHover} />
        <div
          className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
            scroll ? " opacity-100" : " opacity-0"
          }`}
        ></div>

        <SimpleBar
          className="sidebar-menu px-4 h-[calc(100%-80px)]"
          scrollableNodeProps={{ ref: scrollableNodeRef }}
        >
          <NavMenu
            menus={menuItems}
            activeTab={activeTab}
            handleTabOpen={handleTabOpen}
          />
          {/* {!collapsed && (
            <div className="relative p-4 mt-24 mb-16 text-center text-white bg-slate-900 rounded-2xl">
              <img
                src={svgRabitImage}
                alt=""
                className="mx-auto relative -mt-[73px]"
              />
              <div className="max-w-[160px] mx-auto mt-6">
                <div className="widget-title">Unlimited Access</div>
                <div className="text-xs font-light">
                  Upgrade your system to business plan
                </div>
              </div>
              <div className="mt-6">
                <button className="block w-full bg-white btn hover:bg-opacity-80 text-slate-900 btn-sm">
                  Upgrade
                </button>
              </div>
            </div>
          )} */}
        </SimpleBar>
      </div>
    </div>
  );
}

export default Sidebar;
