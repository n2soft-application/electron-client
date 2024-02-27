import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Gn from "../../../assets/images/flags/gn.png";
import Usa from "../../../assets/images/flags/usa.png";

const months = [
  { name: "En", image: Usa },
  { name: "Gn", image: Gn },
];

function Language() {
  const [selected, setSelected] = useState(months[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative z-[22]">
          <Listbox.Button className="relative w-full flex items-center cursor-pointer space-x-[6px] rtl:space-x-reverse">
            <span className="inline-block w-4 h-4 rounded-full md:h-6 md:w-6">
              <img
                src={selected.image}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </span>
            <span className="hidden text-sm font-medium md:block text-slate-600 dark:text-slate-300">
              {selected.name}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute min-w-[100px] ltr:right-0 rtl:left-0 md:top-[50px] top-[38px] w-auto max-h-60 overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 mt-1 ">
              {months.map((item, i) => (
                <Listbox.Option key={i} value={item} as={Fragment}>
                  {({ active }) => (
                    <li
                      className={`
                  w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b
                    ${
                      active
                        ? "bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 bg-opacity-50 dark:text-white "
                        : "text-slate-600 dark:text-slate-300"
                    }
                    `}
                    >
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="flex-none">
                          <span className="inline-block w-4 h-4 rounded-full lg:w-6 lg:h-6">
                            <img
                              src={item.image}
                              alt=""
                              className="relative object-cover w-full h-full rounded-full top-1"
                            />
                          </span>
                        </span>
                        <span className="flex-1 text-sm capitalize lg:text-base">
                          {item.name}
                        </span>
                      </div>
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Language;
