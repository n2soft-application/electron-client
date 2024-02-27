import { useRecoilValue } from "recoil";
import useSidebar from "../../hooks/useSidebar";
import useWidth from "../../hooks/useWidth";
import { navbarTypeState } from "../../state/layout/layoutAtom";

function Header() {
  const [collapsed, setCollapsed] = useSidebar();
  const { width, breakpoints } = useWidth();
  const navbarType = useRecoilValue(navbarTypeState);

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

  return <header>Header</header>;
}

export default Header;
