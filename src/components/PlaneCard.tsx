'use client';

import { PlaneResponseProps } from "@/types";
import { useState } from "react"
import { Button } from "./ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTachometerAlt, faRulerVertical, faRulerHorizontal, faWeightHanging, faMapMarkedAlt, faRulerCombined, faCogs, faMountain } from '@fortawesome/free-solid-svg-icons';

interface PlaneCardProps {
    plane: PlaneResponseProps;
}

const PlaneCard = ({ plane }: PlaneCardProps) => {

    const { manufacturer, model, engine_type, max_speed_knots, ceiling_ft, gross_weight_lbs, length_ft, height_ft, wing_span_ft, range_nautical_miles } = plane;
    return (
        <div className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-lg text-white w-full">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPlane} className="text-xl mr-2" />
                <h2 className="text-xl font-bold">{manufacturer} {model}</h2>
            </div>
            <img src="https://via.placeholder.com/150" alt="Plane" className="w-full h-auto object-cover mb-4 rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                <p><FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-white" /><span className="font-bold text-white">Max Speed:</span> {max_speed_knots} knots</p>
                <p><FontAwesomeIcon icon={faRulerVertical} className="mr-2 text-white" /><span className="font-bold text-white">Height:</span> {height_ft} ft</p>
                <p><FontAwesomeIcon icon={faRulerHorizontal} className="mr-2 text-white" /><span className="font-bold text-white">Wing Span:</span> {wing_span_ft} ft</p>
                <p><FontAwesomeIcon icon={faWeightHanging} className="mr-2 text-white" /><span className="font-bold text-white">Gross Weight:</span> {gross_weight_lbs} lbs</p>
                <p><FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2 text-white" /><span className="font-bold text-white">Range:</span> {range_nautical_miles} nautical miles</p>
                <p><FontAwesomeIcon icon={faRulerCombined} className="mr-2 text-white" /><span className="font-bold text-white">Length:</span> {length_ft} ft</p>
                <p><FontAwesomeIcon icon={faCogs} className="mr-2 text-white" /><span className="font-bold text-white">Engine Type:</span> {engine_type}</p>
                <p><FontAwesomeIcon icon={faMountain} className="mr-2 text-white" /><span className="font-bold text-white">Ceiling:</span> {ceiling_ft} ft</p>
            </div>
        </div>
    );
}

export default PlaneCard