import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" 
             style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
            <div className="text-center">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Find your right airplane — Swiftly and Seamlessly!</h1>
                <p className="text-white text-xl md:text-2xl lg:text-3xl mb-8">Find the perfect wings to take you to new heights.</p>
                <Button variant={"default"}>New ShadDN Button</Button>
            </div>
        </div>
    )
}

export default Hero;