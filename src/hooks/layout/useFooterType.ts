import { SetterOrUpdater, useRecoilState } from "recoil";
import { FooterType, footerTypeState } from "../../state/layout/layoutAtom";

function useFooterType(): [FooterType, SetterOrUpdater<FooterType>] {
  const [footerType, setFooterType] = useRecoilState(footerTypeState);
  return [footerType, setFooterType];
}

export default useFooterType;
