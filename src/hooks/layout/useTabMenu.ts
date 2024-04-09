import { useRecoilState } from "recoil";
import { TabMenuType, tabMenuTypeState } from "../../state/layout/layoutAtom";
import { useLocation, useNavigate } from "react-router-dom";

function useTabMenu() {
  const [tabMenu, setTabMenu] = useRecoilState<TabMenuType>(tabMenuTypeState);
  const location = useLocation();
  const navigate = useNavigate();
  const locationName = location.pathname.replace("/", "");

  // 탭 열기
  const handleTabOpen = (name: string, href: string, e?: any) => {
    if (tabMenu.every((t) => t.href !== href)) {
      // 탭메뉴에 없는 새로운 메뉴라면
      if (tabMenu.length >= 10) {
        // 10개 넘으면 추가 X
        alert("탭은 최대 10개까지 추가 가능합니다.");
        e.preventDefault();
      } else {
        // 10개 안넘으면 추가 O
        setTabMenu(() => [...tabMenu, { name: name, href: href }]);
      }
    }
  };

  // 탭 닫기
  const handleTabClose = (tab: { name: string; href: string }) => {
    let updatedTabs = [...tabMenu];
    if (tab.href === locationName) {
      const currentIndex = updatedTabs.findIndex((t) => t.href === tab.href);
      if (updatedTabs[currentIndex + 1]) {
        navigate("/" + updatedTabs[currentIndex + 1].href);
      } else if (updatedTabs[updatedTabs.length - 2]) {
        navigate("/" + updatedTabs[updatedTabs.length - 2].href);
      }
    }
    updatedTabs = updatedTabs.filter((t) => t.href !== tab.href);
    setTabMenu(updatedTabs);
  };

  return { tabMenu, handleTabOpen, handleTabClose };
}

export default useTabMenu;
