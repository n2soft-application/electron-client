import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "../../constants/data";
import useMobileMenu from "../../hooks/layout/useMobileMenu";
import Icon from "../icons/Icon";
import SubMenu from "./SubMenu";

type Props = {
  menus: MenuItemType[];
};

function NavMenu({ menus }: Props) {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const location = useLocation();
  const locationName = location.pathname.replace("/", "");
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);

  const toggleMultiMenu = (index: number) => {
    if (activeMultiMenu === index) {
      setMultiMenu(null);
    } else {
      setMultiMenu(index);
    }
  };

  const isLocationMatch = (targetLocation: string | undefined) => {
    if (targetLocation) {
      return (
        locationName === targetLocation ||
        locationName.startsWith(`${targetLocation}/`)
      );
    }

    return false;
  };

  useEffect(() => {
    let submenuIndex = null;
    let multiMenuIndex = null;
    menus.forEach((item, i) => {
      if (isLocationMatch(item.link)) {
        submenuIndex = i;
      }

      if (item.child) {
        item.child.forEach((childItem, j) => {
          if (isLocationMatch(childItem.childlink)) {
            submenuIndex = i;
          }

          if (childItem.multi_menu) {
            childItem.multi_menu.forEach((nestedItem) => {
              if (isLocationMatch(nestedItem.multiLink)) {
                submenuIndex = i;
                multiMenuIndex = j;
              }
            });
          }
        });
      }
    });
    document.title = `리테일금융시스템 | ${locationName}`;

    setActiveSubmenu(submenuIndex);
    setMultiMenu(multiMenuIndex);
    // dispatch(toggleActiveChat(false));
    if (mobileMenu) {
      setMobileMenu(false);
    }
  }, [location]);

  return (
    <ul>
      {menus.map((item, i) => (
        <li
          key={i}
          className={` single-sidebar-menu
        ${item.child ? "item-has-children" : ""}
        ${activeSubmenu === i ? "open" : ""}
        ${locationName === item.link ? "menu-item-active" : ""}`}
        >
          {/* single menu with no childred*/}
          {!item.child && !item.isHeadr && (
            <NavLink className="menu-link" to={item.link ?? ""}>
              <span className="flex-grow-0 menu-icon">
                <Icon icon={item.icon ?? ""} />
              </span>
              <div className="flex-grow text-box">{item.title}</div>
              {item.badge && <span className="menu-badge">{item.badge}</span>}
            </NavLink>
          )}
          {/* only for menulabel */}
          {item.isHeadr && !item.child && (
            <div className="menulabel">{item.title}</div>
          )}
          {/*    !!sub menu parent   */}
          {item.child && (
            <div
              className={`menu-link ${
                activeSubmenu === i
                  ? "parent_active not-collapsed"
                  : "collapsed"
              }`}
              onClick={() => toggleSubmenu(i)}
            >
              <div className="flex items-start flex-1">
                <span className="menu-icon">
                  <Icon icon={item.icon ?? ""} />
                </span>
                <div className="text-box">{item.title}</div>
              </div>
              <div className="flex-0">
                <div
                  className={`menu-arrow transform transition-all duration-300 ${
                    activeSubmenu === i ? " rotate-90" : ""
                  }`}
                >
                  <Icon icon="heroicons-outline:chevron-right" />
                </div>
              </div>
            </div>
          )}

          <SubMenu
            activeSubmenu={activeSubmenu}
            item={item}
            index={i}
            toggleMultiMenu={toggleMultiMenu}
            activeMultiMenu={activeMultiMenu}
          />
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
