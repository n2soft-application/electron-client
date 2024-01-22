type Props = {
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
};

function Sidebar({ open, onClose }: Props) {
  return (
    <div className="fixed h-screen p-4 w-[300px]">
      <div
        className={`relative h-full w-full duration-175 rounded-[20px] bg-white transition-all ${
          open ? "translate-x-0" : "-translate-x-96"
        }`}
      ></div>
    </div>
  );
}

export default Sidebar;
