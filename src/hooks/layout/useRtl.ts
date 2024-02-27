import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { rtlState } from "../../state/layout/layoutAtom";

function useRtl() {
  const [isRtl, setRtl] = useRecoilState(rtlState);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];

    if (isRtl) {
      element.setAttribute("dir", "rtl");
    } else {
      element.setAttribute("dir", "ltr");
    }
  }, [isRtl]);

  return [isRtl, setRtl];
}

export default useRtl;
