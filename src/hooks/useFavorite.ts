import { useRecoilState } from "recoil";
import { favoriteState } from "../state/preferences/favoriteAtom";

function useFavorite() {
  const [favorite, setFavorite] = useRecoilState(favoriteState);
  return [favorite, setFavorite];
}

export default useFavorite;
