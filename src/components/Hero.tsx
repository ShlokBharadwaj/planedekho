'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {

    const handleScroll = () => {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="relative bg-cover bg-center h-screen flex items-center justify-center">
            <Image
                src="https://images.unsplash.com/uploads/14114640960629b5c3fa0/116dc05a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Image"
                quality={100}
                width={2560}
                height={2083}
                className="z-0 object-cover w-full h-full absolute inset-0"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center p-4">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Find your right airplane — Swiftly and Seamlessly!</h1>
                <p className="text-white text-xl md:text-2xl lg:text-3xl mb-8">Find the perfect wings to take you to new heights.</p>
                <Button
                    variant={"default"}
                    title="Explore Planes"
                    size={"default"}
                    containerStyles={""}
                    handleClick={handleScroll}>
                </Button>
            </div>
        </div>
    )
}

export default Hero;