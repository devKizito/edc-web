import React from "react";
// import hero from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-h-screen flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="bg-white md:h-screen flex-1 flex items-center md:pt-10">
        <div className="px-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">
            Payment Collection for Examination Development Centre
            <div className="mt-10 text-green-500 text-xl md:text-2xl lg:text-3xl font-black">
              (EDC - Imo State Government)
            </div>
          </h1>
        </div>
      </div>
      <div
        className="md:min-h-screen w-full md:w-2/5 object-contain p-6 flex flex-col gap-5 items-center justify-center"
        // style={{ backgroundImage: `url(${hero})` }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #00954e 0%, #f9fffd 0%, #00954e 100%)",
        }}
      >
        <>
          <div className="bg-white shadow-sm rounded-md w-full h-[100px] flex items-center justify-center">
            <Link
              to="/single"
              className="flex gap-5 items-center justify-center text-black hover:text-green-500 text-xl md:text-2xl lg:text-3xl font-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Single Payment
            </Link>
          </div>
          <div className="bg-white shadow-sm rounded-md w-full h-[100px] flex items-center justify-center">
            <Link
              to="/bulk"
              className="flex gap-5 items-center justify-center text-black hover:text-green-500 text-xl md:text-2xl lg:text-3xl font-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Bulk Payment
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Hero;
