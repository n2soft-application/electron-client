import { Icon as IConify, IconifyIcon } from "@iconify/react";

type Props = {
  width?: string | number;
  rotate?: number;
  hFlip?: boolean;
  icon: IconifyIcon | string;
  className?: string | undefined;
  vFlip?: boolean | undefined;
};

function Icon({ width, rotate, hFlip, icon, className, vFlip }: Props) {
  return (
    <IConify
      width={width}
      rotate={rotate}
      hFlip={hFlip}
      icon={icon}
      className={className}
      vFlip={vFlip}
    />
  );
}

export default Icon;
