import { useRecoilState } from "recoil";
import { typeState } from "../state/layout/layoutAtom";

function useMenuLayout() {
  const [menuType, setMenuType] = useRecoilState(typeState);
  return [menuType, setMenuType];
}

export default useMenuLayout;
