import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuItems } from "../../constants/data";
import { FavMenuType, favMenuTypeState } from "../../state/layout/layoutAtom";

function Breadcrumbs({ activeTab }: { activeTab: string }) {
  //   const location = useLocation();
  //   const locationName = location.pathname.replace("/", "");
  const [favMenu, setFavMenu] = useRecoilState<FavMenuType>(favMenuTypeState);

  const [isHide, setIsHide] = useState<boolean | undefined>(false);
  const [groupTitle, setGroupTitle] = useState("");
  const [title, setTitle] = useState("");

  //   useEffect(() => {
  //     const currentMenuGroup = menuItems.find(
  //       (item) => item.link === locationName
  //     );

  //     const currentMenu = menuItems.find((item) =>
  //       item.child?.find((e) => e.childlink === locationName)
  //     );

  //     if (currentMenuGroup) {
  //       setIsHide(currentMenuGroup.isHide);
  //     } else if (currentMenu) {
  //       const menus = menuItems.filter((item) =>
  //         item.child?.find((e) => e.childlink === locationName)
  //       );
  //       if (!!menus.length) {
  //         const menu = menus[0];
  //         const child = menu.child && menu.child[0];
  //         setTitle(child?.childtitle ?? locationName);
  //       }

  //       setIsHide(currentMenu?.isHide || false);
  //       setGroupTitle(currentMenu?.title);
  //     }
  //   }, [location, locationName]);

  useEffect(() => {
    setTitle(findTitle(activeTab));
  }, [activeTab]);

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

  return (
    <>
      {!isHide ? (
        <div className="flex mb-2 space-x-3 md:mb-2 rtl:space-x-reverse">
          <ul className="breadcrumbs">
            <li className="text-primary-500">
              <NavLink to="/home/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </NavLink>
              <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                <Icon icon="heroicons:chevron-right" />
              </span>
            </li>
            {/* {groupTitle && (
              <li className="text-primary-500">
                <button type="button" className="capitalize">
                  {groupTitle}
                </button>
                <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                  <Icon icon="heroicons:chevron-right" />
                </span>
              </li>
            )} */}
            <li className="capitalize text-slate-500 dark:text-slate-400">
              {title}
              <span
                className="relative lg:h-[32px] lg:w-[32px] lg:dark:bg-slate-900 dark:text-white text-slate-400 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
                onClick={() => {
                  if (favMenu.every((f) => f.href !== activeTab)) {
                    // 즐겨찾기 추가
                    setFavMenu(() => [
                      ...favMenu,
                      { name: title, href: activeTab },
                    ]);
                  } else {
                    // 즐겨찾기 삭제
                    const newFavs = favMenu.filter((f) => f.href !== activeTab);
                    setFavMenu(newFavs);
                  }
                }}
              >
                {favMenu.find((item) => item.href === activeTab) ? (
                  <Icon
                    icon="heroicons:star-20-solid"
                    className="text-xl leading-[1] cursor-pointer text-[#FFCE30]"
                  />
                ) : (
                  <Icon
                    icon="heroicons:star"
                    className="text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"
                  />
                )}
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Breadcrumbs;
