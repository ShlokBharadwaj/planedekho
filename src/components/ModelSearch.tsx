// 'use client';

// import { useState } from 'react';
// import { Combobox } from '@headlessui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

// const ModelSearch = ({ setManufacturer }) => {
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <div className="relative flex-1 max-sm:w-full flex justify-start items-center">
//             <Combobox value={inputValue} onChange={setManufacturer}>
//                 <div className="relative w-full">
//                     <Combobox.Input
//                         placeholder="G400, G550, A320 etc."
//                         autoComplete="off"
//                         onChange={(e) => setInputValue(e.target.value)}
//                         className="w-full p-3 text-left dark:text-white text-gray-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:border-blue-300 dark:focus:border-blue-600 pl-10"
//                     />
//                     <FontAwesomeIcon icon={faPlaneArrival} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
//                 </div>
//             </Combobox>
//         </div>
//     );
// };

// export default ModelSearch;