import { atom, selector } from "recoil";

type UserType = {};

export const userState = atom<UserType | null>({
  key: "userState",
  default: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!),
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => !!get(userState),
});
