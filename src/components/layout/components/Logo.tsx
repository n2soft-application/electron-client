import { Link } from "react-router-dom";
import useDarkMode from "../../../hooks/layout/useDarkMode";
import useWidth from "../../../hooks/layout/useWidth";

import MobileLogoWhite from "../../../assets/images/logo/logo-c-white.svg";
import MobileLogo from "../../../assets/images/logo/logo-c.svg";
import LogoWhite from "../../../assets/images/logo/logo-white.svg";
import MainLogo from "../../../assets/images/logo/logo.svg";

function Logo() {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();
  return (
    <div>
      <Link to="/dashboard">
        {width >= breakpoints.xl ? (
          <img src={isDark ? LogoWhite : MainLogo} alt="" />
        ) : (
          <img src={isDark ? MobileLogoWhite : MobileLogo} alt="" />
        )}
      </Link>
    </div>
  );
}

export default Logo;
