import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky z-40 p-2 top-4 rounded-xl bg-white/10 backdrop-blur-xl ">
      <nav className="flex justify-between">
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

        <div className="relative mt-[3px] flex h-[61px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:flex-grow-0 md:gap-1  xl:gap-2">
          <div className="flex h-full items-center rounded-full bg-background text-navy-700 xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="w-4 h-4 text-gray-400" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-background text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
            />
          </div>
          <span
            className="flex text-xl text-gray-600 cursor-pointer xl:hidden"
            // onClick={onOpenSidenav}
          >
            <FiAlignJustify className="w-5 h-5" />
          </span>
          {/* start Notification */}
          {/* <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="w-4 h-4 text-gray-600 dark:text-white" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            children={
              <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-navy-700 dark:text-white">
                    Notification
                  </p>
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    Mark all read
                  </p>
                </div>

                <button className="flex items-center w-full">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="flex flex-col justify-center w-full h-full px-1 ml-2 text-sm rounded-lg">
                    <p className="mb-1 text-base font-bold text-left text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="text-xs text-left text-gray-900 font-base dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>

                <button className="flex items-center w-full">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="flex flex-col justify-center w-full h-full px-1 ml-2 text-sm rounded-lg">
                    <p className="mb-1 text-base font-bold text-left text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="text-xs text-left text-gray-900 font-base dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>
              </div>
            }
            classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
          /> */}
          {/* start Horizon PRO */}
          {/* <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdInformationCircleOutline className="w-4 h-4 text-gray-600 dark:text-white" />
              </p>
            }
            children={
              <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full mb-2 rounded-lg aspect-video"
                />
                <a
                  target="blank"
                  href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >
                  Buy Horizon UI PRO
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                >
                  See Documentation
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                  className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                >
                  Try Horizon Free
                </a>
              </div>
            }
            classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
            animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          /> */}
          <div
            className="text-gray-600 cursor-pointer"
            onClick={() => {
             
            }}
          >
           
          </div>
          {/* Profile & Dropdown */}
          {/* <Dropdown
            button={
              <img
                className="w-10 h-10 rounded-full"
                src={avatar}
                alt="Elon Musk"
              />
            }
            children={
              <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="mt-3 ml-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, Adela
                    </p>{" "}
                  </div>
                </div>
                <div className="w-full h-px mt-3 bg-gray-200 dark:bg-white/20 " />

                <div className="flex flex-col mt-3 ml-4">
                  <a
                    href=" "
                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Profile Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          /> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;