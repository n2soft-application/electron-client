import { Collapse } from "react-collapse";
import { MenuItemType } from "../../constants/data";
import Icon from "../icons/Icon";
import Multilevel from "./Multilevel";

type Props = {
  activeSubmenu: number | null;
  item: MenuItemType;
  index: number;
  toggleMultiMenu: (index: number) => void;
  activeMultiMenu: number | null;
  activeTab: string;
  setActiveTab: (href: string) => void;
  handleTabOpen: (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => void;
};

function SubMenu({
  activeSubmenu,
  item,
  index,
  toggleMultiMenu,
  activeMultiMenu,
  activeTab,
  setActiveTab,
  handleTabOpen,
}: Props) {
  return (
    <Collapse isOpened={activeSubmenu === index}>
      <ul className="space-y-4 sub-menu">
        {item.child?.map((subItem, j) => (
          <li key={j} className="block pl-4 pr-1 first:pt-4 last:pb-4">
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
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  handleTabOpen={handleTabOpen}
                />
              </div>
            ) : (
              <div
                onClick={(e) => {
                  setActiveTab(subItem.childlink ?? "");
                  handleTabOpen(
                    subItem.childtitle ?? "",
                    subItem.childlink ?? "",
                    subItem.childElement ?? null,
                    e
                  );
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
