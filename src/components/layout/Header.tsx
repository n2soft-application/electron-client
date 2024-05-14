import { useRecoilValue } from "recoil";
import useMenuLayout from "../../hooks/layout/useMenuLayout";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import useRtl from "../../hooks/layout/useRtl";
import useSidebar from "../../hooks/layout/useSidebar";
import useSkin from "../../hooks/layout/useSkin";
import useWidth from "../../hooks/layout/useWidth";
import { navbarTypeState } from "../../state/layout/layoutAtom";
import Icon from "../icons/Icon";
import Favorite from "./components/Favorite";
import HorizentalMenu from "./components/HorizentalMenu";
import Logo from "./components/Logo";
import MonoChrome from "./components/MonoChrome";
import Profile from "./components/Profile";
import SearchModal from "./components/SearchModal";
import SwitchDark from "./components/SwitchDark";

type Props = {
  className?: string | undefined;
  handleTabOpen: (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => void;
};

function Header({ className, handleTabOpen }: Props) {
  const [collapsed, setCollapsed] = useSidebar();
  const { width, breakpoints } = useWidth();
  const navbarType = useRecoilValue(navbarTypeState);
  const [skin] = useSkin();
  const [isRtl] = useRtl();
  const [menuType] = useMenuLayout();

  const [mobileMenu, setMobileMenu] = useMobileMenu();

  const navbarTypeClass = () => {
    switch (navbarType) {
      case "floating":
        return "floating  has-sticky-header";
      case "sticky":
        return "sticky top-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
      default:
        return "sticky top-0";
    }
  };

  const borderSwicthClass = () => {
    if (skin === "bordered" && navbarType !== "floating") {
      return "border-b border-slate-200 dark:border-slate-700";
    } else if (skin === "bordered" && navbarType === "floating") {
      return "border border-slate-200 dark:border-slate-700";
    } else {
      return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
    }
  };

  return (
    <header className={`${className} ${navbarTypeClass()}`}>
      <div
        className={` app-header md:px-6 px-[15px]  dark:bg-slate-800 shadow-base dark:shadow-base3 bg-white
        ${borderSwicthClass()}
             ${
               menuType === "horizontal" && width > breakpoints.xl
                 ? "py-1"
                 : "md:py-6 py-3"
             }
        `}
      >
        <div className="flex items-center justify-between h-full">
          {/* For Vertical  */}

          {menuType === "vertical" && (
            <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
              {collapsed && width >= breakpoints.xl && (
                <button
                  className="text-xl text-slate-900 dark:text-white"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {isRtl ? (
                    <Icon icon="akar-icons:arrow-left" />
                  ) : (
                    <Icon icon="akar-icons:arrow-right" />
                  )}
                </button>
              )}
              {width < breakpoints.xl && <Logo />}
              {/* open mobile menu handlaer*/}
              {width < breakpoints.xl && width >= breakpoints.md && (
                <div
                  className="text-2xl cursor-pointer text-slate-900 dark:text-white"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  <Icon icon="heroicons-outline:menu-alt-3" />
                </div>
              )}
              <SearchModal />
            </div>
          )}
          {/* For Horizontal  */}
          {menuType === "horizontal" && (
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Logo />
              {/* open mobile menu handlaer*/}
              {width <= breakpoints.xl && (
                <div
                  className="text-2xl cursor-pointer text-slate-900 dark:text-white"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  <Icon icon="heroicons-outline:menu-alt-3" />
                </div>
              )}
            </div>
          )}
          {/*  Horizontal  Main Menu */}
          {menuType === "horizontal" && width >= breakpoints.xl ? (
            <HorizentalMenu />
          ) : null}
          {/* Nav Tools  */}
          <div className="flex items-center space-x-3 nav-tools lg:space-x-6 rtl:space-x-reverse">
            {/* <Language /> */}
            <SwitchDark />
            <MonoChrome />
            {/* <HeaderCart /> */}
            {width >= breakpoints.md && (
              <Favorite handleTabOpen={handleTabOpen} />
            )}
            {/* {width >= breakpoints.md && <Message />} */}
            {/* {width >= breakpoints.md && <Notification />} */}
            {width >= breakpoints.md && <Profile />}
            {width <= breakpoints.md && (
              <div
                className="text-2xl cursor-pointer text-slate-900 dark:text-white"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <Icon icon="heroicons-outline:menu-alt-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
