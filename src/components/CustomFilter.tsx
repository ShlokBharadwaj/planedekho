"use client";

import React, { useState, Fragment } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types"


const CustomFilter: React.FC<CustomFilterProps> = ({ title, options }) => {
  const router = useRouter();

  const [selectedItem, setselectedItem] = useState(options[0]);

  const handleCustomFilter = (option) => {

    console.log("Selected item: ", selectedItem);
    if (!option.value) return;

    const params = new URLSearchParams(window.location.search);

    switch (title) {
      case "Engine":
        params.set('engine_type', option.value);
        break;
      case "Range":
        params.set('range_nautical_miles', option.value);
        break;
      case "Speed":
        params.set('max_speed_knots', option.value);
        break;
    }

    const newPath = `${window.location.pathname}?${params.toString()}`;

    router.push(newPath, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selectedItem}
        onChange={(option) => {
          setselectedItem(option);
          handleCustomFilter(option);
        }}
      >
        <div className="relative w-fit z-50">
          <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-gray-800 py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selectedItem.title}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FontAwesomeIcon icon={faCaretDown} className="w-5 h-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-2 w-full py-1 bg-gray-800 rounded-lg shadow-lg sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option}
                  disabled={!option.value}
                >
                  {({ active, disabled }) => (
                    <div
                      className={`${active ? 'text-gray-900 bg-gray-100' : 'text-gray-300'
                        } cursor-default select-none relative py-2 pl-3 pr-4 ${disabled ? 'opacity-50' : ''}`}
                    >
                      <span className={`${active ? 'font-medium' : 'font-normal'} block truncate`}>
                        {option.title}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter