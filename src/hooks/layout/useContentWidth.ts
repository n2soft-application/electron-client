import { SetterOrUpdater, useRecoilState } from "recoil";
import { ContentWidthType, contentWidthState } from "../../state/layout/layoutAtom";

function useContentWidth(): [ContentWidthType, SetterOrUpdater<ContentWidthType>] {
  const [contentWidth, setContentWidth] = useRecoilState(contentWidthState);
  return [contentWidth, setContentWidth];
}

export default useContentWidth;
