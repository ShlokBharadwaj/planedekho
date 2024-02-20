import React from 'react';
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find your right airplane — Swiftly and Seamlessly!</h1>

                <p className="hero__subtitle">Find the perfect wings to take you to new heights.</p>

                <CustomButton />
            </div>
        </div>
    )
}

export default Hero;