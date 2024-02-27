import { ChangeEvent } from "react";
import useNavbarType from "../../../hooks/layout/useNavbarType";
import { NavbarType } from "../../../state/layout/layoutAtom";
import Radio from "../../form/Radio";

function NavbarTypeView() {
  const [navbarType, setNavbarType] = useNavbarType();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNavbarType(e.target.value as NavbarType);
  };
  const navTypes = [
    {
      label: "Sticky",
      value: "sticky",
    },
    {
      label: "Static",
      value: "static",
    },
    {
      label: "Floating",
      value: "floating",
    },
    {
      label: "Hidden",
      value: "hidden",
    },
  ];

  return (
    <div>
      <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
        Navbar Type
      </h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {navTypes?.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            name="navbarType"
            value={item.value}
            checked={navbarType === item.value}
            onChange={handleChange}
            className="w-4 h-4"
          />
        ))}
      </div>
    </div>
  );
}

export default NavbarTypeView;
