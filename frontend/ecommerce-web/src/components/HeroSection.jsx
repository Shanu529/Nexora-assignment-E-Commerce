import React from "react";

function HeroSection() {
  return (
    <div class=" bg-cover bg-center h-screen">
      <div class=" h-full flex-col md:flex-row  flex items-center justify-between px-6 md:px-40">
        <div class="text-white max-w-xl flex flex-col gap-3">
          <p class="uppercase tracking-widest text-cyan-500 font-semibold mt-2">
            Summer Collection
          </p>
          <h1 class=" text-black text-4xl md:text-6xl font-bold leading-tight">
            FULL WINTER COLLECTION 2030
          </h1>
          <p class=" text-black text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero, nobis!
          </p>
          <button class="bg-cyan-700 hover:bg-cyan-500 transition md:py-3 md:px-8 py-2 text-sm rounded-md font-semibold max-w-32 md:max-w-44">
            SHOP NOW
          </button>
        </div>

        <div className="h-[70%] my-5">
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full bg-cover bg-center "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
