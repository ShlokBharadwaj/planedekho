import Image from "next/image";

import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchPlanes } from "@/utils";

export default async function Home() {

  const planes = await fetchPlanes({ manufacturer: 'Boeing', limit: 1 });

  const isDataEmpty = planes.length === 0 || !planes || planes === undefined || !Array.isArray(planes) || planes === null;

  console.log(planes);

  return (
    <main>
      <Hero />
      <div className="mt-12 p-6 max-w-[1440px] mx-auto" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5">
          <h1 className="text-4xl font-extrabold">Planes</h1>
          <p className="font-extralight">Discover the world's top planes</p>
        </div>
        <div className="mt-12 w-full flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-5">
          <SearchBar className="w-full md:w-auto" />

          <div className="flex justify-start flex-wrap items-center gap-2 mt-5 md:mt-0">
            <CustomFilter title="Range" />
            <CustomFilter title="Speed" />
          </div>
        </div>


        {isDataEmpty ? (
          <div className="flex justify-center items-center w-full h-[50vh]">
            <p className="text-2xl font-bold">No data found</p>
          </div>
        ) : (
          <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {planes.map((plane, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg shadow-md p-5">
                <div className="w-full h-[200px] relative">
                  <Image src={plane.image} alt={plane.name} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">{plane.name}</h1>
                  <p className="text-sm font-light mt-2">{plane.manufacturer}</p>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </main>
  );
}
