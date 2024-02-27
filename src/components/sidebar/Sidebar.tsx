import { useEffect, useRef, useState } from "react";
import useSidebar from "../../hooks/layout/useSidebar";

function Sidebar() {
  const scrollableNodeRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(false);
  const [collapsed] = useSidebar();
  const [menuHover, setMenuHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ((scrollableNodeRef.current?.scrollTop ?? 0) > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current?.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  return (
    <div>
      <div
        className="bg-white w-[248px]"
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
      >
        <div
          className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
            scroll ? " opacity-100" : " opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
