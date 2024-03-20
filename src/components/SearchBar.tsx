'use client';

import React, { useState } from 'react'
import { ManufacturerSearch } from ".";
import { SearchBarProps } from "@/types";

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {

  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('searching...')
  }

  return (
    <form className={`flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl ${className}`} onSubmit={handleSearch} >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <ManufacturerSearch
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form >
  )
}

export default SearchBar