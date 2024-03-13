import { atom } from "recoil";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

type FavoriteType = {
  title: string;
  path: string;
};

export const favoriteState = atom<FavoriteType[]>({
  key: "favoriteState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
