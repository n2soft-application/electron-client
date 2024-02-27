import useRtl from "../../../hooks/layout/useRtl";
import Switch from "../../form/Switch";

function RtlSwicth() {
  const [isRtl, setRtl] = useRtl();
  return (
    <div className="flex justify-between">
      <div className="text-base text-slate-600 dark:text-slate-300">Rtl</div>
      <Switch
        value={isRtl}
        onChange={() => setRtl(!isRtl)}
        id="rtl_nav_tools"
      />
    </div>
  );
}

export default RtlSwicth;
