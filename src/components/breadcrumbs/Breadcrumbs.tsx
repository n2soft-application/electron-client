import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuItems } from "../../constants/data";
import { FavMenuType, favMenuTypeState } from "../../state/layout/layoutAtom";

function Breadcrumbs({ activeTab }: { activeTab: string }) {
  const [favMenu, setFavMenu] = useRecoilState<FavMenuType>(favMenuTypeState);

  const [isHide, setIsHide] = useState<boolean | undefined>(false);
  const [title, setTitle] = useState<Array<string>>([]);

  useEffect(() => {
    setTitle(findTitle(activeTab));
  }, [activeTab]);

  const findTitle = (link: string) => {
    let title: Array<string> = [];
    if (link) {
      menuItems.forEach((item) => {
        if (item.child) {
          item.child.forEach((i) => {
            if (i.multi_menu) {
              i.multi_menu.forEach((m) => {
                if (m.multiLink === link) {
                  title.push(item.title);
                  title.push(i.childtitle ?? "");
                  title.push(m.multiTitle);
                }
              });
            } else if (i.childlink === link) {
              title.push(item.title);
              title.push(i.childtitle ?? "");
            }
          });
        } else if (item.link === link) {
          title.push(item.title);
        }
      });
    }
    return title;
  };

  return (
    <>
      {title.length && !isHide ? (
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
            {title.map((item, i) => (
              <li
                key={i}
                className={
                  title.length - 1 !== i ? "text-slate-400" : "text-primary-500"
                }
              >
                <button type="button" className="capitalize">
                  {item}
                </button>
                {title.length - 1 !== i && (
                  <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                    <Icon icon="heroicons:chevron-right" />
                  </span>
                )}
              </li>
            ))}
            <span
              className="relative lg:h-[32px] lg:w-[32px] lg:dark:bg-slate-900 dark:text-white text-slate-400 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
              onClick={() => {
                if (favMenu.every((f) => f.href !== activeTab)) {
                  // 즐겨찾기 추가
                  setFavMenu(() => [
                    ...favMenu,
                    { name: title.at(-1) ?? "", href: activeTab },
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
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Breadcrumbs;
