import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { monoChromeState } from "../../state/layout/layoutAtom";

function useMonoChrome() {
  const [isMonoChrome, setMonoChrome] = useRecoilState(monoChromeState);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];

    if (isMonoChrome) {
      element.classList.add("grayscale");
    } else {
      element.classList.remove("grayscale");
    }
  }, [isMonoChrome]);

  return [isMonoChrome, setMonoChrome];
}

export default useMonoChrome;
