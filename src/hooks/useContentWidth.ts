import { useRecoilState } from "recoil";
import { contentWidthState } from "../state/layout/layoutAtom";

function useContentWidth() {
  const [contentWidth, setContentWidth] = useRecoilState(contentWidthState);
  return [contentWidth, setContentWidth];
}

export default useContentWidth;
