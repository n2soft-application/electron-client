import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../state/layout/layoutAtom";

const useDarkMode = () => {
  const [isDark, setDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    // ** Get Body Tag
    const body = window.document.body;
    // define classNames
    const classNames = {
      dark: "dark",
      light: "light",
    };
    // ** Check if dark mode is enabled
    if (isDark) {
      body.classList.add(classNames.dark);
      body.classList.remove(classNames.light);
    } else {
      body.classList.add(classNames.light);
      body.classList.remove(classNames.dark);
    }
  }, [isDark]);

  return [isDark, setDarkMode];
};

export default useDarkMode;
