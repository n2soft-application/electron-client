import { useRecoilState } from "recoil";
import {
  TabMenuType,
  activeTabType,
  activeTabTypeState,
  tabMenuTypeState,
} from "../../state/layout/layoutAtom";

function useTabMenu() {
  const [tabMenu, setTabMenu] = useRecoilState<TabMenuType>(tabMenuTypeState);
  const [activeTab, setActiveTab] =
    useRecoilState<activeTabType>(activeTabTypeState);

  // 탭 열기
  const handleTabOpen = (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => {
    if (tabMenu.every((t) => t.href !== href)) {
      // 탭메뉴에 없는 새로운 메뉴라면
      if (tabMenu.length >= 10) {
        // 10개 넘으면 추가 X
        alert("탭은 최대 10개까지 추가 가능합니다.");
        e.preventDefault();
      } else {
        // 10개 안넘으면 추가 O
        setTabMenu(() => [
          ...tabMenu,
          { name: name, href: href, component: element },
        ]);
      }
    }
  };

  // 탭 닫기
  const handleTabClose = (tab: { name: string; href: string }) => {
    let updatedTabs = [...tabMenu];
    if (tab.href === activeTab) {
      const currentIndex = updatedTabs.findIndex((t) => t.href === tab.href);
      if (updatedTabs[currentIndex + 1]) {
        setActiveTab(updatedTabs[currentIndex + 1].href);
      } else if (updatedTabs[updatedTabs.length - 2]) {
        setActiveTab(updatedTabs[updatedTabs.length - 2].href);
      }
    }
    updatedTabs = updatedTabs.filter((t) => t.href !== tab.href);
    setTabMenu(updatedTabs);
  };

  return { tabMenu, handleTabOpen, handleTabClose };
}

export default useTabMenu;
