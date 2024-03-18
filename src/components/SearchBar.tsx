'use client';

import React from 'react'
import { ManufacturerSearch } from ".";

const SearchBar = () => {

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('searching...')
  }

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <ManufacturerSearch />
      </div>
    </form>
  )
}

export default SearchBar