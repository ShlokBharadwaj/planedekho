import React from 'react';
import Image from 'next/image';

import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Image
            src="/logos.png"
            alt="PlaneDekho Logo"
            width={130}
            height={40}
          />
        </Link>
        <Button 
          variant="default"
          size="sm"
          title="Sign In"
          btnType="button"
          className="min-w-[80px]"
        />
      </nav>
    </header>
  )
}

export default Navbar;