import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 bg-gray-800">
      <div className="">
        <Image
          src="/logosssss.png"
          alt="Website Logo"
          width={130}
          height={40}
        />
      </div>
      <div>
        <a href="#home" className="text-white mx-2">Home</a>
        <a href="#about" className="text-white mx-2">About</a>
        <a href="#contact" className="text-white mx-2">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;