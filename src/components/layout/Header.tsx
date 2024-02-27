import { useRecoilValue } from "recoil";
import useRtl from "../../hooks/useRtl";
import useSidebar from "../../hooks/useSidebar";
import useSkin from "../../hooks/useSkin";
import useWidth from "../../hooks/useWidth";
import { navbarTypeState } from "../../state/layout/layoutAtom";

type Props = {
  className?: string | undefined;
};

function Header({ className }: Props) {
  const [collapsed, setCollapsed] = useSidebar();
  const { width, breakpoints } = useWidth();
  const navbarType = useRecoilValue(navbarTypeState);
  const [skin] = useSkin();
  const [isRtl] = useRtl();

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
      <div className="md:px-6 px-[15px]"></div>
    </header>
  );
}

export default Header;
