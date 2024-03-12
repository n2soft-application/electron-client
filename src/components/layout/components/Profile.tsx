import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../../../assets/images/all-img/user.png";
import Dropdown from "../../dropdown";
import Icon from "../../icons/Icon";

const profileLabel = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
        <div className="rounded-full lg:h-8 lg:w-8 h-7 w-7">
          <img
            src={UserAvatar}
            alt=""
            className="block object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="items-center flex-none hidden overflow-hidden text-sm font-normal text-slate-600 dark:text-white lg:flex text-ellipsis whitespace-nowrap">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
          스마트 사원
        </span>
        <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
          <Icon icon="heroicons-outline:chevron-down"></Icon>
        </span>
      </div>
    </div>
  );
};

function Profile() {
  const navigate = useNavigate();
  const ProfileMenu: {
    label: string;
    icon: string;
    hasDivider?: boolean;
    action: () => void;
  }[] = [
    {
      label: "프로필",
      icon: "heroicons-outline:user",

      action: () => {
        navigate("/profile");
      },
    },
    {
      label: "채팅",
      icon: "heroicons-outline:chat",
      action: () => {
        navigate("/chat");
      },
    },
    {
      label: "이메일",
      icon: "heroicons-outline:mail",
      action: () => {
        navigate("/email");
      },
    },
    {
      label: "할일",
      icon: "heroicons-outline:clipboard-check",
      action: () => {
        navigate("/todo");
      },
    },
    {
      label: "설정",
      icon: "heroicons-outline:cog",
      action: () => {
        navigate("/settings");
      },
    },
    {
      label: "로그아웃",
      icon: "heroicons-outline:login",
      action: () => {
        navigate("/");
      },
    },
  ];
  return (
    <Dropdown label={profileLabel()} classMenuItems="w-[180px] top-[58px]">
      {ProfileMenu.map((item, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <div
              onClick={() => item.action()}
              className={`${
                active
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                  : "text-slate-600 dark:text-slate-300"
              } block     ${
                item.hasDivider
                  ? "border-t border-slate-100 dark:border-slate-700"
                  : ""
              }`}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className="flex items-center">
                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                    <Icon icon={item.icon} />
                  </span>
                  <span className="block text-sm">{item.label}</span>
                </div>
              </div>
            </div>
          )}
        </Menu.Item>
      ))}
    </Dropdown>
  );
}

export default Profile;
