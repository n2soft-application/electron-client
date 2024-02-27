import useSemiDark from "../../../hooks/layout/useSemiDark";
import Switch from "../../form/Switch";

function Semidark() {
    const [isSemiDark, setSemiDark] = useSemiDark();
    return (
      <div className="flex justify-between ">
        <div className="text-base font-normal text-slate-600 dark:text-slate-300">
          Semi Dark
        </div>
        <Switch
          value={isSemiDark}
          onChange={() => setSemiDark(!isSemiDark)}
          id="semi_nav_tools"
        />
      </div>
    );
}

export default Semidark