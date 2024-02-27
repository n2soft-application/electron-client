import { SetterOrUpdater, useRecoilState } from "recoil";
import { NavbarType, navbarTypeState } from "../../state/layout/layoutAtom";

function useNavbarType(): [NavbarType, SetterOrUpdater<NavbarType>] {
  const [navbarType, setNavbarType] = useRecoilState(navbarTypeState);
  return [navbarType, setNavbarType];
}

export default useNavbarType;
