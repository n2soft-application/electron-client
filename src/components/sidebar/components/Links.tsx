/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "../../icons/DashIcon";
// chakra imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

export const routes = [
  {
    name: "메인",
    path: "dashboard",
    icon: <MdHome className="w-6 h-6" />,
  },
  {
    name: "기준관리(중앙회)",
    path: "admin1",
    icon: <MdBarChart className="w-6 h-6" />,
  },
  {
    name: "기준관리",
    path: "admin2",
    icon: <MdBarChart className="w-6 h-6" />,
  },
  {
    name: "사용자",
    path: "admin3",
    icon: <MdPerson className="w-6 h-6" />,
  },
  {
    name: "메뉴권한",
    path: "admin4",
    icon: <MdLock className="w-6 h-6" />,
  },
];

export const SidebarLinks = (): JSX.Element => {
  // Chakra color mode
  let location = useLocation();

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname === "/" + routeName;
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => (
      <Link key={index} to={"/" + route.path}>
        <div className="relative flex mb-3 hover:cursor-pointer">
          <li
            className="my-[3px] flex cursor-pointer items-center px-8"
            key={index}
          >
            <span
              className={`${
                activeRoute(route.path) === true
                  ? "font-bold text-brand-500 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.icon ? route.icon : <DashIcon />}{" "}
            </span>
            <p
              className={`leading-1 ml-4 flex ${
                activeRoute(route.path) === true
                  ? "font-bold text-navy-700 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.name}
            </p>
          </li>
          {activeRoute(route.path) ? (
            <div className="absolute right-0 w-1 rounded-lg top-px h-9 bg-brand-500 dark:bg-brand-400" />
          ) : null}
        </div>
      </Link>
    ));
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
