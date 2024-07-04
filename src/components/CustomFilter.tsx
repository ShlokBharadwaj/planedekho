"use client";

import React, { useState, Fragment } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types"


const CustomFilter: React.FC<CustomFilterProps> = ({ title, options }) => {

  const [selectedItem, setselectedItem] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selectedItem}
        onChange={(value) => setselectedItem(value)}
      >
        <div className="relative w-fit z-50">
          <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-gray-800 py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selectedItem.title}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FontAwesomeIcon icon={faCaretDown} className="w-5 h-5 text-gray-400" />
            </span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter