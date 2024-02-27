import { useRecoilState } from "recoil";
import { sidebarState } from "../../state/sidebar/sidebarAtom";

const useSidebar = () => {
  const [collapsed, setCollapsed] = useRecoilState(sidebarState);

  return [collapsed, setCollapsed];
};

export default useSidebar;
