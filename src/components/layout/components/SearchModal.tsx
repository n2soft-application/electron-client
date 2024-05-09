import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Icon from "../../icons/Icon";

function SearchModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [query, setQuery] = useState(" ");
  const searchList = [
    {
      id: 1,
      name: "What is THE NEXT ?",
    },
    {
      id: 2,
      name: "Our Services",
    },
    {
      id: 3,
      name: "Our Team",
    },
    {
      id: 4,
      name: "Our Clients",
    },
    {
      id: 5,
      name: "Our Partners",
    },
    {
      id: 6,
      name: "Our Blog",
    },
    {
      id: 7,
      name: "Our Contact",
    },
  ];
  const filteredsearchList = searchList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div>
        <button
          className="flex items-center px-1 space-x-3 text-lg xl:text-sm xl:text-slate-400 text-slate-800 dark:text-slate-300 rtl:space-x-reverse"
          onClick={openModal}
        >
          <Icon icon="heroicons-outline:search" />
          <span className="hidden xl:inline-block">검색... </span>
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999] overflow-y-auto p-4 md:pt-[25vh] pt-20"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/60 backdrop-filter backdrop-blur-sm backdrop-brightness-10" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              <Combobox>
                <div className="relative">
                  <div className="relative max-w-xl mx-auto bg-white divide-y rounded-md shadow-2xl dark:bg-slate-800 ring-1 ring-gray-500-500 dark:ring-light divide-gray-500-300 dark:divide-light">
                    <div className="flex items-center px-3 py-3 bg-white rounded-md dark:bg-slate-800">
                      <div className="text-lg flex-0 text-slate-700 dark:text-slate-300 ltr:pr-2 rtl:pl-2">
                        <Icon icon="heroicons-outline:search" />
                      </div>
                      <Combobox.Input
                        className="flex-1 w-full bg-transparent border-none outline-none focus:outline-none dark:placeholder:text-slate-300 dark:text-slate-200"
                        placeholder="검색..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>
                    <Transition
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Combobox.Options className="py-2 overflow-y-auto text-sm max-h-40">
                        {filteredsearchList.length === 0 && query !== "" && (
                          <div>
                            <div className="px-4 py-2 text-base ">
                              <p className="text-base text-slate-500 dark:text-white">
                                No result found
                              </p>
                            </div>
                          </div>
                        )}

                        {filteredsearchList.map((item, i) => (
                          <Combobox.Option value={i} key={i}>
                            {({ active }) => (
                              <div
                                className={`px-4 text-[15px] font-normal capitalize py-2 ${
                                  active
                                    ? "bg-slate-900 dark:bg-slate-600 dark:bg-opacity-60 text-white"
                                    : "text-slate-900 dark:text-white"
                                }`}
                              >
                                <span>{item.name}</span>
                              </div>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default SearchModal;
