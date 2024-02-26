import { useEffect, useState } from "react";

const useDarkMode = () => {
  const isDark = useState(false);

  const setDartMode = () => {};

  useEffect(() => {}, [isDark]);

  return [isDark, setDartMode];
};

export default useDarkMode;
