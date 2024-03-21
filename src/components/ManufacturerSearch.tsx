'use client';

import { useState, Fragment } from 'react'

import { Combobox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

import { ManufacturerSearchProps } from "@/types"
import { manufacturers } from "@/constants";

const ManufacturerSearch = ({ manufacturer, setManufacturer }: ManufacturerSearchProps) => {

  const [selectedItem, setselectedItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filterManuf =
    selectedItem === ""
      ? manufacturers
      : manufacturers.filter((item) => (
        item.value.toLowerCase()
          .replace(/\s+/g, "")
          .includes(selectedItem.toLowerCase().replace(/\s+/g, "")
          ))
      );

  return (
    <div className="relative flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={(value) => { setManufacturer(value); setIsOpen(false); }}>
        <div className="relative w-full">
          <Combobox.Input
            placeholder="Boeing, Airbus, etc."
            autoComplete="off"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => { 
              setselectedItem(e.target.value); 
              setIsOpen(true); 
              if (e.target.value === '') {
                setManufacturer('');
              }
            }}
            className="w-full p-3 text-left dark:text-white text-gray-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:border-blue-300 dark:focus:border-blue-600 pl-10"
          />
          <FontAwesomeIcon icon={faPlaneDeparture} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          {manufacturer && <FontAwesomeIcon icon={faCheck} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-300" />}
          <Transition
            as={Fragment}
            show={isOpen && selectedItem.length > 0}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            afterLeave={() => setselectedItem('')}
          >
            <div className="absolute z-50 w-full max-h-64 overflow-auto bg-white dark:bg-gray-800">
              <Combobox.Options>
                {filterManuf.map((item) => (
                  <Combobox.Option
                    key={item.value}
                    value={item.value}
                    className="p-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {item.value}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Transition>
        </div>
      </Combobox >
    </div>
  )
}

export default ManufacturerSearch