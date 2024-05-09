import { NavLink } from "react-router-dom";
import { menuItems } from "../../../constants/data";
import Icon from "../../icons/Icon";

function HorizentalMenu() {
  return (
    <div className="main-menu">
      <ul>
        {menuItems?.map((item, i) => (
          <li
            key={i}
            className={
              item.child ? "menu-item-has-children has-megamenu"
                : ""
            }
          >
            {/* has dropdown*/}
            {(item.child && item.isMultiple) && (
              <a href="#">
                <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                  <span className="icon-box">
                    <Icon icon={item.icon ?? ""} />
                  </span>
                  <div className="text-box">{item.title}</div>
                </div>
                <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                  <Icon icon="heroicons-outline:chevron-down" />
                </div>
              </a>
            )}

            {/* Megamenu*/}
            {item.child && (
              <div className="rt-mega-menu">
                <div className="flex flex-wrap justify-between space-x-8 rtl:space-x-reverse">
                  {item.child.map((m_item, m_i) => (
                    <div key={m_i}>
                      {/* mega menu title*/}
                      <div className="flex items-center mb-2 space-x-1 text-sm font-medium text-slate-900 dark:text-white">
                        {/* <Icon icon={m_item.megamenuicon} /> */}
                        <span> {m_item.childtitle}</span>
                      </div>
                      {/* single menu item*/}
                      {m_item.multi_menu?.map((ms_item, ms_i) => (
                        <NavLink to={ms_item.multiLink} key={ms_i}>
                          {({ isActive }) => (
                            <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                              <span
                                className={`h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none ${
                                  isActive ? " bg-slate-900 dark:bg-white" : ""
                                }`}
                              ></span>
                              <span
                                className={`capitalize ${
                                  isActive
                                    ? " text-slate-900 dark:text-white font-medium"
                                    : "text-slate-600 dark:text-slate-300"
                                }`}
                              >
                                {ms_item.multiTitle}
                              </span>
                            </div>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HorizentalMenu;
