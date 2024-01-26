import { atom } from "recoil";
import { recoilPersist } from "./persist";

const { persistAtom } = recoilPersist()

export const demoState = atom<number>({
  key: "demoState",
  default: 0,
  effects_UNSTABLE: [persistAtom]
});
