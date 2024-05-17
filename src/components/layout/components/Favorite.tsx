import { Menu } from "@headlessui/react";
import Dropdown from "../../dropdown/Dropdown";
import Icon from "../../icons/Icon";
import {
  FavMenuType,
  TabMenuListType,
  favMenuTypeState,
} from "../../../state/layout/layoutAtom";
import { useRecoilValue } from "recoil";
import useTabMenu from "../../../hooks/layout/useTabMenu";

const favoritelabel = () => {
  return (
    <span className="relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center">
      <Icon icon="heroicons-outline:star" />
    </span>
  );
};

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Favorite({ tabMenu, setTabMenu }: Props) {
  const favMenu = useRecoilValue<FavMenuType>(favMenuTypeState);
  const { activeTab, findElement, handleTabOpen } = useTabMenu();

  return (
    <Dropdown
      classMenuItems="md:w-[200px] w-min top-[58px]"
      label={favoritelabel()}
    >
      <div className="flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600">
        <div className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
          즐겨찾기
        </div>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {favMenu?.map((item, i) => (
          <Menu.Item key={i}>
            <div
              className={`${
                item.href === activeTab
                  ? "bg-slate-100 text-slate-800 dark:bg-slate-600 dark:bg-opacity-70"
                  : "text-slate-600 dark:text-slate-300"
              } block w-full px-4 py-2 text-sm  cursor-pointer`}
              onClick={() => {
                handleTabOpen(tabMenu, setTabMenu, {
                  name: item.name ?? "",
                  href: item.href ?? "",
                  component: findElement(item.href),
                });
              }}
            >
              <div className="flex space-x-3 ltr:text-left rtl:text-right rtl:space-x-reverse">
                <div className="flex-1">
                  <div className="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          </Menu.Item>
        ))}
      </div>
    </Dropdown>
  );
}

export default Favorite;
