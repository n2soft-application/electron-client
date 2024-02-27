import { useRecoilState } from "recoil";
import { semiDarkModeState } from "../../state/layout/layoutAtom";

function useSemiDark() {
  const [isSemiDark, setSemiDark] = useRecoilState(semiDarkModeState);
  return [isSemiDark, setSemiDark];
}

export default useSemiDark;
