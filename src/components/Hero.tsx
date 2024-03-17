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
                src="https://source.unsplash.com/random/?airplane,airline,aircraft,plane"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
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