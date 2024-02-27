import { useRecoilState } from "recoil";
import { navbarTypeState } from "../state/layout/layoutAtom";

function useNavbarType() {
  const [navbarType, setNavbarType] = useRecoilState(navbarTypeState);
  return [navbarType, setNavbarType];
}

export default useNavbarType;
