import { atom, selector } from "recoil";

type UserType = {};

export const userState = atom({
  key: "userState",
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => !!get(userState),
});
