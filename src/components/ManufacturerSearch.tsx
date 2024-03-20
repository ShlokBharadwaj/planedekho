'use client';

import { useState, Fragment } from 'react'

import { Combobox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

import { ManufacturerSearchProps } from "@/types"
import { manufacturers } from "@/constants";

const ManufacturerSearch = ({ manufacturer, setManufacturer }: ManufacturerSearchProps) => {

  const [selected, setSelected] = useState('');

  const filterManuf =
    selected === ""
      ? manufacturers
      : manufacturers.filter((item) => (
        item.value.toLowerCase()
          .replace(/\s+/g, "")
          .includes(selected.toLowerCase().replace(/\s+/g, "")
          ))
      );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button
            className="w-full p-3 text-left text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
          >
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Boeing, Airbus, etc."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full p-3 text-left text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
          />
          <Transition
            as={Fragment}
            show={selected.length > 0}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            afterLeave={() => setSelected('')}
          >
            <Combobox.Options>
              {filterManuf.map((item) => (
                <Combobox.Option
                  key={item.value}
                  value={item.value}
                  className="p-3 text-gray-600 bg-white border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </Combobox.Option>
              ))}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox >
    </div>
  )
}

export default ManufacturerSearch