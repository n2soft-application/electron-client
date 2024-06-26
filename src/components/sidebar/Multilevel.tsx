import { Collapse } from "react-collapse";
import { NavLink, To } from "react-router-dom";
import {
  MenuItemChildMultiType,
  MenuItemChildType,
} from "../../constants/data";
import useTabMenu from "../../hooks/layout/useTabMenu";
import Badge from "../badge/Badge";

const LockLink = ({
  to,
  children,
  item,
}: {
  to: To;
  children:
    | React.ReactNode
    | ((props: { isActive: boolean; isPending: boolean }) => React.ReactNode);
  item: MenuItemChildMultiType;
}) => {
  const { multiTitle, badge, multiLink } = item;
  const { handleTabOpen } = useTabMenu();

  return (
    <>
      {item.badge ? (
        <span
          className={`text-slate-600 dark:text-slate-300 opacity-50 cursor-not-allowed
             text-sm flex space-x-3 rtl:space-x-reverse items-center `}
        >
          <span className="flex-none inline-block w-2 h-2 border rounded-full border-slate-600 dark:border-white"></span>
          <span className="flex flex-1 space-x-2 truncate rtl:space-x-reverse">
            <span className="truncate grow">{multiTitle}</span>
            <span className="grow-0">
              <Badge className="bg-slate-900 px-2 py-[3px]  font-normal text-xs rounded-full text-slate-100  capitalize">
                {badge}
              </Badge>
            </span>
          </span>
        </span>
      ) : (
        <NavLink
          replace
          to={to}
          onClick={(e) => {
            handleTabOpen(multiTitle, multiLink, e);
          }}
        >
          {children}
        </NavLink>
      )}
    </>
  );
};

const Multilevel = ({
  activeMultiMenu,
  j,
  subItem,
}: {
  subItem: MenuItemChildType;
  j: number;
  activeMultiMenu: number | null;
}) => {
  return (
    <Collapse isOpened={activeMultiMenu === j}>
      <ul className="pl-4 space-y-2">
        {subItem?.multi_menu?.map((item, i) => (
          <li key={i} className=" first:pt-2">
            <LockLink to={item.multiLink} item={item}>
              {({ isActive }: { isActive: boolean }) => (
                <span
                  className={`${
                    isActive
                      ? " text-black dark:text-white font-medium"
                      : "text-slate-600 dark:text-slate-300"
                  } text-sm flex space-x-3 rtl:space-x-reverse items-center transition-all duration-150`}
                >
                  <span
                    className={`${
                      isActive
                        ? " bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20"
                        : ""
                    } h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none`}
                  ></span>
                  <span className="flex-1">{item.multiTitle}</span>
                </span>
              )}
            </LockLink>
          </li>
        ))}
      </ul>
    </Collapse>
  );
};

export default Multilevel;
