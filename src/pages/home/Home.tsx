import { useRecoilState } from "recoil";
import { demoState } from "../../state/demoAtom";
import Widget from "../../components/widget/Widget";
import {
  MdBarChart,
  MdCancel,
  MdCheckCircle,
  MdOutlineError,
} from "react-icons/md";
import Card from "../../components/card";
import Dropdown from "../../components/dropdown";
import Checkbox from "../../components/checkbox";
import { BsThreeDots } from "react-icons/bs";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import Switch from "../../components/switch";
import Progress from "../../components/progress";

function Home() {
  const [value, setValue] = useRecoilState(demoState);
  const [open, setOpen] = React.useState(false);
  const [darkmode, setDarkmode] = React.useState(false);
  const [percent, setPercent] = React.useState(50);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title="Widget"
          subtitle={"12,000명"}
        />
      </div>
      <Card extra="flex flex-col gap-4 p-6 rounded-[20px] mt-5">
        {/* Status Icon */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">Status Icon</p>
          <div className="flex items-center">
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
            <MdOutlineError className="text-amber-500 me-1 dark:text-amber-300" />
          </div>
        </div>
        {/* Button */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">Button</p>
          <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            Click
          </button>
        </div>
        {/* CheckBox */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">CheckBox</p>
          <div className="w-fit">
            <Checkbox
              defaultChecked={false}
              colorScheme="brandScheme"
              me="10px"
            />
          </div>
        </div>
        {/* Switch */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">Switch</p>
          <div className="flex items-center gap-3">
            <Switch
              id="switch"
              checked={darkmode}
              onClick={() => setDarkmode((mode) => !mode)}
            />
            <label htmlFor="switch">
              {darkmode ? (
                <RiSunFill className="w-4 h-4 text-gray-600 dark:text-white" />
              ) : (
                <RiMoonFill className="w-4 h-4 text-gray-600 dark:text-white" />
              )}
            </label>
          </div>
        </div>
        {/* Dropdown */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">Dropdown</p>
          <div className="w-fit">
            <Dropdown
              button={
                <button
                  onClick={() => setOpen(!open)}
                  className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200`}
                >
                  <BsThreeDots className="w-6 h-6" />
                </button>
              }
              animation="origin-top-right transition-all duration-300 ease-in-out"
              classNames="top-11 right-0 w-max"
              children={
                <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#000000] duration-100">
                    menu 1
                  </p>
                  <p className="flex items-center gap-2 pt-1 mt-2 text-gray-600 cursor-pointer hover:text-[#000000] duration-100">
                    menu 2
                  </p>
                </div>
              }
            />
          </div>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-6">
          <p className="text-lg font-semibold">Progress bar</p>
          <div>
            <div className="flex items-center gap-2">
              <Progress width="w-[108px] duration-200" value={percent} />
              <p className="text-sm font-medium">{percent}%</p>
            </div>
            <div className="flex gap-1 text-xl">
              <button
                disabled={!(percent > 0)}
                onClick={() => {
                  percent > 0 && setPercent((prev) => prev - 10);
                }}
                className="flex items-center justify-center w-5 h-5 border rounded disabled:bg-gray-100 disabled:border-none disabled:text-gray-500"
              >
                -
              </button>
              <button
                disabled={!(percent < 100)}
                onClick={() => {
                  percent < 100 && setPercent((prev) => prev + 10);
                }}
                className="flex items-center justify-center w-5 h-5 border rounded disabled:bg-gray-100 disabled:border-none disabled:text-gray-500"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Card extra="p-6 rounded-[20px] mt-5">
        Home
        <div>
          <div className="flex gap-4">
            <div>{value}</div>
            <button
              onClick={() => {
                setValue((prev) => prev + 1);
              }}
              className="text-3xl"
            >
              +
            </button>
            <button
              onClick={() => {
                setValue((prev) => prev - 1);
              }}
              className="text-3xl"
            >
              -
            </button>
          </div>
          <button
            onClick={() => {
              window.open("/");
            }}
          >
            새창열기1
          </button>
          <a href="/" target="_blank">
            새창열기2
          </a>
          {Array(100)
            .fill(0)
            .map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        </div>
      </Card>
    </div>
  );
}

export default Home;
