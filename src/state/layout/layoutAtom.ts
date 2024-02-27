import { atom } from "recoil";

type NavbarType = "floating" | "sticky" | "static" | "hidden";

export const navbarTypeState = atom<NavbarType>({
  key: "naverTypState",
  default: "sticky",
});
