import { Collapse } from "react-collapse";
import {
  MenuItemChildMultiType,
  MenuItemChildType,
} from "../../constants/data";
import Badge from "../badge/Badge";

const LockLink = ({
  children,
  item,
  handleTabOpen,
}: {
  children: React.ReactNode;
  item: MenuItemChildMultiType;
  handleTabOpen: (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => void;
}) => {
  const { multiTitle, badge, multiLink, multiElement } = item;

  return (
    <>
      {item.badge ? (
        <span
          className={`text-slate-600 dark:text-slate-300 opacity-50
             text-sm flex space-x-3 rtl:space-x-reverse items-center cursor-pointer`}
          onClick={() => {
            handleTabOpen(multiTitle, multiLink, multiElement ?? null);
          }}
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
        <div
          className="cursor-pointer"
          onClick={() => {
            handleTabOpen(multiTitle, multiLink, multiElement ?? null);
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

const Multilevel = ({
  activeMultiMenu,
  j,
  subItem,
  activeTab,
  handleTabOpen,
}: {
  subItem: MenuItemChildType;
  j: number;
  activeMultiMenu: number | null;
  activeTab: string;
  handleTabOpen: (
    name: string,
    href: string,
    element: React.ComponentType | null,
    e?: any
  ) => void;
}) => {
  return (
    <Collapse isOpened={activeMultiMenu === j}>
      <ul className="space-y-[14px] pl-4">
        {subItem?.multi_menu?.map((item, i) => (
          <li key={i} className=" first:pt-[14px]">
            <LockLink item={item} handleTabOpen={handleTabOpen}>
              <span
                className={`${
                  item.multiTitle === activeTab
                    ? " text-black dark:text-white font-medium"
                    : "text-slate-600 dark:text-slate-300"
                } text-sm flex space-x-3 rtl:space-x-reverse items-center transition-all duration-150`}
              >
                <span
                  className={`${
                    item.multiTitle === activeTab
                      ? " bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20"
                      : ""
                  } h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none`}
                ></span>
                <span className="flex-1">{item.multiTitle}</span>
              </span>
            </LockLink>
          </li>
        ))}
      </ul>
    </Collapse>
  );
};

export default Multilevel;
