import { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import NavMenu from "./NavMenu";

import { Link } from "react-router-dom";
import MobileLogoWhite from "../../assets/images/logo/logo-white.png";
import MobileLogo from "../../assets/images/logo/logo.png";
import svgRabitImage from "../../assets/images/svg/rabit.svg";
import { menuItems } from "../../constants/data";
import useDarkMode from "../../hooks/layout/useDarkMode";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import useSemiDark from "../../hooks/layout/useSemiDark";
import useSkin from "../../hooks/layout/useSkin";
import Icon from "../icons/Icon";

const MobileMenu = ({ className = "custom-class" }) => {
  const scrollableNodeRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current?.scrollTop ?? 0 > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current?.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  const [isDark] = useDarkMode();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  return (
    <div
      className={`${className} fixed  top-0 bg-white dark:bg-slate-800 shadow-lg  h-full   w-[248px]`}
    >
      <div className="logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] h-[85px] px-4 ">
        <Link to="/dashboard">
          <div className="flex items-center space-x-4">
            <div className="logo-icon">
              {!isDark && !isSemiDark ? (
                <img className="border rounded shadow" src={MobileLogo} alt="" />
              ) : (
                <img className="border rounded shadow" src={MobileLogoWhite} alt="" />
              )}
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              리테일금융시스템
              </h1>
            </div>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-2xl cursor-pointer text-slate-900 dark:text-white"
        >
          <Icon icon="heroicons:x-mark" />
        </button>
      </div>

      <div
        className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
          scroll ? " opacity-100" : " opacity-0"
        }`}
      ></div>
      <SimpleBar
        className="sidebar-menu px-4 h-[calc(100%-80px)]"
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        <NavMenu menus={menuItems} />
        <div className="relative p-4 mt-24 mb-24 text-center text-white bg-slate-900 lg:mb-10 rounded-2xl">
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
      </SimpleBar>
    </div>
  );
};

export default MobileMenu;
