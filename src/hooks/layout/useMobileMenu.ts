import { useRecoilState } from "recoil";
import { mobileMenuTypeState } from "../../state/layout/layoutAtom";

function useMobileMenu() {
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuTypeState);
  return [mobileMenu, setMobileMenu];
}

export default useMobileMenu;
