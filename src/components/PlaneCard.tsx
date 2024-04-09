'use client';

import { PlaneResponseProps } from "@/types";
import { useState } from "react"
import { Button } from "./ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTachometerAlt, faRulerVertical, faRulerHorizontal, faWeightHanging, faMapMarkedAlt, faRulerCombined, faCogs, faMountain } from '@fortawesome/free-solid-svg-icons';

interface PlaneCardProps {
    plane: PlaneResponseProps;
    photographer: string;
    photographerUsername: string;
}

const PlaneCard = ({ plane }: PlaneCardProps) => {

    const { manufacturer, model, engine_type, max_speed_knots, ceiling_ft, gross_weight_lbs, length_ft, height_ft, wing_span_ft, range_nautical_miles } = plane;

    return (
        <div className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-lg text-white w-full transition-transform duration-200 ease-in transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faPlane} className="text-xl mr-2 text-blue-500" />
                    <h2 className="text-xl font-bold">{manufacturer} {model}</h2>
                </div>
                <div>
                    <Button variant={"outline"} size={"default"} title={"Details"}>

                    </Button>
                </div>
            </div>
            <div className="relative bg-white rounded-md shadow-md overflow-hidden">
                <img src={plane.image || "https://via.placeholder.com/150"} alt="Plane" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p className="text-sm">Photo by <a href={`https://unsplash.com/@${plane.photographerUsername}?utm_source=planedekho&utm_medium=referral `} target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-blue-400">{plane.photographer}</a> on <a href="https://unsplash.com/?utm_source=planedekho&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-blue-400">Unsplash</a></p>
                </div>
            </div>
            <div className="relative flex flex-row w-full text-gray-400 mt-4 justify-between gap-2 text-center">
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faTachometerAlt} className="h-12 w-12 mb-2" />
                    {/* <span className="font-bold text-white text-center">Max Speed</span> */}
                    <span className="text-sm">{max_speed_knots} knots</span>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="h-12 w-12 mb-2" />
                    {/* <span className="font-bold text-white text-center">Range</span> */}
                    <span className="text-sm">{range_nautical_miles} nautical miles</span>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faCogs} className="h-12 w-12 mb-2" />
                    {/* <span className="font-bold text-white text-center">Engine Type</span> */}
                    <span className="text-sm">{engine_type}</span>
                </div>
            </div>
        </div>
    );
}

export default PlaneCard