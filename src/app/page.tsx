import Image from "next/image";

import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
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
      </div>
    </main>
  );
}
