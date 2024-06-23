"use client";

import React, { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types"


const CustomFilter: React.FC<CustomFilterProps> = ({ title, options }) => {
  return (
    <div>{title}</div>
  )
}

export default CustomFilter