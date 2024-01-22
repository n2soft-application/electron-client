import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky z-40 flex flex-row flex-wrap items-center justify-between p-2 top-4 rounded-xl bg-white/10 backdrop-blur-xl ">
      <nav>
        <div className="ml-[6px]">
          <div className="h-6 w-[224px] pt-1">
            <a
              className="text-sm font-normal text-navy-700 hover:underline"
              href=" "
            >
              Pages
              <span className="mx-1 text-sm text-navy-700 hover:text-navy-700">
                {" "}
                /{" "}
              </span>
            </a>
            <Link
              className="text-sm font-normal capitalize text-navy-700 hover:underline"
              to="#"
            >
              {"brandText"}
            </Link>
          </div>
          <p className="shrink text-[33px] capitalize text-navy-700">
            <Link to="#" className="font-bold capitalize hover:text-navy-700">
              {"brandText"}
            </Link>
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
