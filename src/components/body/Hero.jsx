import React from "react";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="md:h-screen flex-1 flex items-center mt-10 md:-mt-32">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">
            Payment Collection for Examination Development Centre
            <div className="text-green-500 text-xl md:text-2xl lg:text-3xl font-black">
              (EDC - Imo State Government)
            </div>
          </h1>
        </div>
      </div>
      <div
        className="md:min-h-screen w-full md:w-2/5 object-contain"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
    </div>
  );
};

export default Hero;
