import { useRecoilState } from "recoil";
import { menuTypeState } from "../state/layout/layoutAtom";

function useMenuHidden() {
  const [menuHidden, _setMenuHidden] = useRecoilState(menuTypeState);

  const setMenuHidden = (hidden: boolean) => {
    _setMenuHidden((prev) => {
      return { ...prev, isHidden: hidden };
    });
  };

  return [menuHidden.isHidden, setMenuHidden];
}

export default useMenuHidden;
