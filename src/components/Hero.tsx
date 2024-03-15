import React from 'react';
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find your right airplane — Swiftly and Seamlessly!</h1>

                <p className="hero__subtitle">Find the perfect wings to take you to new heights.</p>

                <Button variant={"default"}> New ShadDN Button</Button>
            </div>
        </div>
    )
}

export default Hero;