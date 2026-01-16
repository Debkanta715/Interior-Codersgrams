import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src="bannerImage.jpg"
          alt="banner"
          className="h-100 md:h-160 w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10 md:pb-20">
          <h2 className="text-white font-bold text-2xl md:text-5xl">
            Interior Design that Speaks of You
          </h2>
          <p className="text-white mt-3 md:text-lg max-w-xl">
            From foundations to furnishings, we style your home like our own.
          </p>
          <button className="bg-[#eb5976] text-white py-2 px-6 md:py-3 md:px-10 rounded-md mt-5">
            Book Your Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
