import useDarkMode from "../../../hooks/layout/useDarkMode";
import Radio from "../../form/Radio";

function Theme() {
  const [isDark, setDarkMode] = useDarkMode();

  return (
    <div>
      <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
        Theme
      </h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Radio
          label="Light"
          name="theme"
          value="light"
          checked={!isDark}
          onChange={() => setDarkMode(!isDark)}
          className="w-4 h-4"
        />
        <Radio
          label="Dark"
          name="theme"
          value="dark"
          checked={isDark}
          onChange={() => setDarkMode(!isDark)}
          className="w-4 h-4"
        />
      </div>
    </div>
  );
}

export default Theme;
