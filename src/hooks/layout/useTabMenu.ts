import { useRecoilState } from "recoil";
import { TabMenuType, tabMenuTypeState } from "../../state/layout/layoutAtom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../constants/data";

function useTabMenu() {
  const [tabMenu, setTabMenu] = useRecoilState<TabMenuType>(tabMenuTypeState);
  const location = useLocation();
  const navigate = useNavigate();
  const locationName = location.pathname.replace("/", "");

  useEffect(() => {
    handleTabOpen(findTitle(locationName), locationName);
  }, [location]);

  const findTitle = (link: string) => {
    let title = "";
    menuItems.map((item) => {
      if (item.child) {
        item.child.map((i) => {
          if (i.multi_menu) {
            i.multi_menu.map((m) => {
              if (m.multiLink === link) {
                title = m.multiTitle;
              }
            });
          } else if (i.childlink === link) {
            title = i.childtitle ?? "";
          }
        });
      } else if (item.link === link) {
        title = item.title;
      }
    });
    return title;
  };

  // 탭 열기
  const handleTabOpen = (name: string, href: string) => {
    if (tabMenu.every((t) => t.href !== href)) {
      setTabMenu(() => [...tabMenu, { name: name, href: href }]);
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
