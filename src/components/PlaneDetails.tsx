'use client';

import { Fragment } from "react";
import Image from 'next/image';

import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlaneResponseProps } from "@/types";

interface PlaneDetailsProps {
  isOpen: boolean;
  closeDetails: () => void;
  plane: PlaneResponseProps;
  photographer?: string;
  photographerUsername?: string;
}

const PlaneDetails = ({ isOpen, closeDetails, plane, photographer, photographerUsername }: PlaneDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDetails}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  {plane.manufacturer} {plane.model}
                </Dialog.Title>
                <div className="mt-2">
                  <Image
                    src={plane.imageRegular || "https://via.placeholder.com/150"}
                    alt="Plane"
                    width={800}
                    height={400}
                    layout="responsive"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    Photo by {photographerUsername && " "}
                    <a
                      href={`https://unsplash.com/@${photographerUsername}?utm_source=planedekho&utm_medium=referral`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white hover:text-blue-400"
                    >
                      {photographer}
                    </a>{" "}
                    on{" "}
                    <a
                      href="https://unsplash.com/?utm_source=planedekho&utm_medium=referral"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white hover:text-blue-400"
                    >
                      Unsplash
                    </a>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Engine Type:</span> {plane.engine_type}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Max Speed:</span> {plane.max_speed_knots} knots
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Ceiling:</span> {plane.ceiling_ft} ft
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Gross Weight:</span> {plane.gross_weight_lbs} lbs
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Length:</span> {plane.length_ft} ft
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Height:</span> {plane.height_ft} ft
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Wing Span:</span> {plane.wing_span_ft} ft
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Range:</span> {plane.range_nautical_miles} nautical miles
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeDetails}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default PlaneDetails