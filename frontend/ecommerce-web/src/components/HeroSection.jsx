import React from "react";

function HeroSection() {
  return (
    <div class=" bg-cover bg-center h-screen">
      <div class=" h-full flex items-center justify-between px-6 md:px-40">
        <div class="text-white max-w-xl space-y-5">
          <p class="uppercase tracking-widest text-red-500 font-semibold">
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
          <button class="bg-red-600 hover:bg-red-700 transition py-3 px-8 rounded-md font-semibold">
            SHOP NOW
          </button>
        </div>

        <div className="h-[70%]">
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
