import React from 'react';

const BannerMain = () => {
  return (
    <div
      className={`relative w-full md:w-3/4 h-[300px] md:h-[456px] order-1 md:order-2`}
    >
      <img
        src="/banner-main.png"
        alt="Grocery deals"
        className="absolute inset-0 w-full h-full object-cover lg:rounded-2xl"
      />

      <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 md:w-3/4 pt-6">
        <h1 className="lg:text-xl md:text-l text-l text-left text-white mb-4 leading-none font-display-quicksand font-semibold">
          Don't miss amazing grocery deals
        </h1>
        <h2 className="lg:text-l md:text-m text-s text-left md:text-m text-white">
          Sign up for the daily newsletter
        </h2>

        <div className="flex  sm:flex-row justify-start items-center gap-4 text-left mt-10">
          <div className="relative flex gap-2 items-center w-full sm:w-auto">
            <img
              src="src/assets/icons/send.svg"
              alt="Send icon"
              className="absolute left-3 h-4 w-4"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="h-12  w-full sm:w-64 pl-10 pr-4 text-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
            />
          </div>
          <button className="h-12 px-8 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors w-1/2  sm:w-auto">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          <p className="h-3 bg-primary rounded-full w-3"></p>
          <p className="h-3 bg-transparent border rounded-full w-3"></p>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
