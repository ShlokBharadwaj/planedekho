import Image from "next/image";

import { CustomFilter, Hero, PlaneCard, SearchBar } from "@/components";
import { fetchPlaneImage, fetchPlanes } from "@/utils";

export default async function Home() {

  // const planes1 = await fetchPlanes({ manufacturer: 'Boeing' });
  // const planes2 = await fetchPlanes({ model: '747' });
  // const planes3 = await fetchPlanes({ engine_type: 'jet' });
  // const planes4 = await fetchPlanes({ min_speed: 10 });
  // const planes5 = await fetchPlanes({ max_speed: 600 });
  // const planes6 = await fetchPlanes({ min_range: 1000, max_range: 2000 });
  // const planes7 = await fetchPlanes({ min_length: 100, max_length: 200 });
  // const planes8 = await fetchPlanes({ min_height: 20, max_height: 30 });
  // const planes9 = await fetchPlanes({ min_wingspan: 100, max_wingspan: 200 });
  // const planes10 = await fetchPlanes({ min_range: 1, limit: 3});

  const planes = await fetchPlanes({ manufacturer: 'Boeing', limit: 12 });

  const isDataEmpty = planes.length === 0 || !planes || planes === undefined || !Array.isArray(planes) || planes === null;

  const images = fetchPlaneImage('Boeing', '777-200ER')
    .then(response => console.log(response))
    .catch(error => console.error(error));

  // console.log("Planes 1: ", planes1);
  // console.log("Planes 2: ", planes2);
  // console.log("Planes 3: ", planes3);
  // console.log("Planes 4: ", planes4);
  // console.log("Planes 5: ", planes5);
  // console.log("Planes 6: ", planes6);
  // console.log("Planes 7: ", planes7);
  // console.log("Planes 8: ", planes8);
  // console.log("Planes 9: ", planes9);
  // console.log("Planes 10: ", planes10);

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
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {planes?.map((plane, key) => (
                <PlaneCard key={key} plane={plane} />
              ))}
            </div>
          </section>
        )}


      </div>
    </main>
  );
}
