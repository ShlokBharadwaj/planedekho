'use client';

import React, { useState } from 'react'
import { ManufacturerSearch } from ".";
import { SearchBarProps } from "@/types";
import { useRouter } from "next/navigation";
// import ModelSearch from "./ModelSearch";

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {

  const router = useRouter();

  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '') {
      return alert('Please enter a manufacturer');
    }

    updateSearchParams(manufacturer.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string) => {
    const params = new URLSearchParams(window.location.search);

    if (manufacturer) {
      params.set('manufacturer', manufacturer);
    } else {
      params.delete('manufacturer');
    }

    const newPath = `${window.location.pathname}?${params.toString()}`;

    router.push(newPath, { scroll: false });
  };

  return (
    <form className={`flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl ${className}`} onSubmit={handleSearch} >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative gap-2">
        <ManufacturerSearch
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        {/* <ModelSearch
          setManufacturer={setManufacturer}
        /> */}
      </div>
    </form >
  )
}

export default SearchBar