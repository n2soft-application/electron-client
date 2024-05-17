import { Collapse } from "react-collapse";
import { MenuItemType } from "../../constants/data";
import Icon from "../icons/Icon";
import Multilevel from "./Multilevel";
import { TabMenuListType } from "../../state/layout/layoutAtom";
import useTabMenu from "../../hooks/layout/useTabMenu";

type Props = {
  activeSubmenu: number | null;
  item: MenuItemType;
  index: number;
  toggleMultiMenu: (index: number) => void;
  activeMultiMenu: number | null;
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function SubMenu({
  activeSubmenu,
  item,
  index,
  toggleMultiMenu,
  activeMultiMenu,
  tabMenu,
  setTabMenu,
}: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();

  return (
    <Collapse isOpened={activeSubmenu === index}>
      <ul className="space-y-2 sub-menu">
        {item.child?.map((subItem, j) => (
          <li key={j} className="block pl-4 pr-1 first:pt-2 last:pb-2">
            {subItem?.multi_menu ? (
              <div>
                <div
                  onClick={() => toggleMultiMenu(j)}
                  className={`${
                    activeMultiMenu
                      ? " text-black dark:text-white font-medium"
                      : "text-slate-600 dark:text-slate-300"
                  } text-sm flex space-x-3 items-center transition-all duration-150 cursor-pointer rtl:space-x-reverse`}
                >
                  <span
                    className={`${
                      activeMultiMenu === j
                        ? " bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20"
                        : ""
                    } h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none `}
                  ></span>
                  <span className="flex-1">{subItem.childtitle}</span>
                  <span className="flex-none">
                    <span
                      className={`menu-arrow transform transition-all duration-300 ${
                        activeMultiMenu === j ? " rotate-90" : ""
                      }`}
                    >
                      <Icon icon="ph:caret-right" />
                    </span>
                  </span>
                </div>
                <Multilevel
                  activeMultiMenu={activeMultiMenu}
                  j={j}
                  subItem={subItem}
                  tabMenu={tabMenu}
                  setTabMenu={setTabMenu}
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  handleTabOpen(tabMenu, setTabMenu, {
                    name: subItem.childtitle ?? "",
                    href: subItem.childlink ?? "",
                    component: subItem.childElement ?? null,
                  });
                }}
              >
                <span
                  className={`${
                    subItem.childlink === activeTab
                      ? "text-black dark:text-white font-medium"
                      : "text-slate-600 dark:text-slate-300"
                  } text-sm flex space-x-3 items-center transition-all duration-150 rtl:space-x-reverse cursor-pointer`}
                >
                  <span
                    className={`${
                      subItem.childlink === activeTab
                        ? " bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20"
                        : ""
                    } h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none`}
                  ></span>
                  <span className="flex-1">{subItem.childtitle}</span>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Collapse>
  );
}

export default SubMenu;
