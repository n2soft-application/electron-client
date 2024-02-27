import { useRecoilState } from "recoil";
import { footerTypeState } from "../state/layout/layoutAtom";

function useFooterType() {
  const [footerType, setFooterType] = useRecoilState(footerTypeState);
  return [footerType, setFooterType];
}

export default useFooterType;
