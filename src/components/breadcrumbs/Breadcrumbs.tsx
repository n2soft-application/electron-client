import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/data";

function Breadcrumbs() {
  const location = useLocation();
  const locationName = location.pathname.replace("/", "");

  const [isHide, setIsHide] = useState<boolean | undefined>(false);
  const [groupTitle, setGroupTitle] = useState("");
  const [title, setTitle] = useState(locationName);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    const currentMenuGroup = menuItems.find(
      (item) => item.link === locationName
    );

    const currentMenu = menuItems.find((item) =>
      item.child?.find((e) => e.childlink === locationName)
    );

    if (currentMenuGroup) {
      setIsHide(currentMenuGroup.isHide);
    } else if (currentMenu) {
      const menus = menuItems.filter((item) =>
        item.child?.find((e) => e.childlink === locationName)
      );
      if (!!menus.length) {
        const menu = menus[0];
        const child = menu.child && menu.child[0];
        setTitle(child?.childtitle ?? locationName);
      }

      setIsHide(currentMenu?.isHide || false);
      setGroupTitle(currentMenu?.title);
    }
  }, [location, locationName]);

  return (
    <>
      {!isHide ? (
        <div className="flex mb-4 space-x-3 md:mb-6 rtl:space-x-reverse">
          <ul className="breadcrumbs">
            <li className="text-primary-500">
              <NavLink to="/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </NavLink>
              <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                <Icon icon="heroicons:chevron-right" />
              </span>
            </li>
            {groupTitle && (
              <li className="text-primary-500">
                <button type="button" className="capitalize">
                  {groupTitle}
                </button>
                <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                  <Icon icon="heroicons:chevron-right" />
                </span>
              </li>
            )}
            <li className="capitalize text-slate-500 dark:text-slate-400">
              {title}

              <span
                className="relative lg:h-[32px] lg:w-[32px] lg:dark:bg-slate-900 dark:text-white text-slate-400 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
                onClick={() => setFav(!fav)}
              >
                {fav ? (
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
