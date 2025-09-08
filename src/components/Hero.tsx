import React from "react";

function Hero() {
  return (
    <section className=" bg-[#3B82F6] py-10 lg:py-20 px-5 lg:px-14">
      <div className=" max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* left side content */}
        <div className=" flex-1 text-white space-y-6">
          <h3 className=" font-semibold uppercase text-sm">
            Welcome to Our Car Rental Service
          </h3>
          <h1 className=" text-4xl lg:text-5xl font-bold leading-tight">
            Rent the best Quality <span className="font-bold">Cars</span> with
            us
          </h1>
          <p>
            Discover the freedom of the open road with our premium car rental
            service. Whether you need a vehicle for business, leisure, or a
            special occasion, we offer a wide selection of well-maintained,
            high-quality cars to suit every need and budget. Enjoy flexible
            rental options, transparent pricing, and exceptional customer
            support.
          </p>
            <div>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                Get Started
                </button>
                <p className="mt-4 text-sm text-gray-300">
                Experience the best car rental service with us.
                </p>
            </div>
        </div>
        <div className="mt-8 lg:mt-0 flex-1 flex justify-center">
          <img
            src="/hero.png"
            alt="car"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
