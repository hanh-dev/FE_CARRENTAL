import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import PopularCars from "./components/PopularCars";
import { TfiArrowRight } from "react-icons/tfi";
import { FaPlay, FaApple, FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <PopularCars />
      {/* Why should you choose us */}
      <div className="max-w-[1300px] mx-auto px-4 mb-10">
        <h2 className="text-center text-4xl font-semibold my-8">
          Why Should You <span className="text-blue-600">Choose Us?</span>
        </h2>
        <div className=" grid grid-cols-3 gap-10">
          <div className="border border-gray-100 p-4 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-center font-semibold text-90">
              Easier & Faster Booking
            </h2>
            <p className=" text-left text-gray-600 p-5">
              {/* Description for Easier & Faster Booking */}
              Booking your car has never been easier. With our streamlined
              process, you can reserve your vehicle in just a few clicks.
            </p>
            <div className=" text-blue-600 absolute bottom-7 left-8 z-2 border-10 border-white rounded-full">
              <img
                className=" bg-blue-600 p-5 rounded-full"
                src="./easier.png"
                alt=""
              />
            </div>
            <div className=" absolute left-0 bottom-0 w-full flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:underline p-6 bg-gray-200 rounded-b-2xl">
              <span>View more</span>
              <TfiArrowRight />
            </div>
          </div>
          <div className="border border-gray-100 p-4 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-center font-semibold">
              Too Many Pickup Locations
            </h2>
            <p className="text-left text-gray-600 p-5">
              You’ve selected more pickup locations than allowed. Please remove
              one or more to continue.
            </p>

            <div className=" text-blue-600 absolute bottom-7 left-8 z-2 border-10 border-white rounded-full">
              <img
                className=" bg-blue-600 p-5 rounded-full"
                src="./manyLocation.png"
                alt=""
              />
            </div>
            <div className=" absolute left-0 bottom-0 w-full flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:underline p-6 bg-gray-200 rounded-b-2xl">
              <span>View more</span>
              <TfiArrowRight />
            </div>
          </div>
          <div className=" h-90 border border-gray-100 p-4 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-center font-semibold">
              Customers 100% Satisfied
            </h2>
            <p className="text-left text-gray-600 p-5">
              We take pride in providing top-quality service and products that
              meet every customer’s expectations.
            </p>
            <div className=" text-blue-600 absolute bottom-7 left-8 z-2 border-10 border-white rounded-full">
              <img
                className=" bg-blue-600 p-5 rounded-full"
                src="./satisfied.png"
                alt=""
              />
            </div>
            <div className=" absolute left-0 bottom-0 w-full flex items-center justify-end gap-2 text-blue-600 cursor-pointer hover:underline p-6 bg-gray-200 rounded-b-2xl">
              <span>View more</span>
              <TfiArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* Latest News */}
      <div className=" max-w-[1300px] mx-auto">
        <h2 className=" text-center text-4xl font-semibold">
          What They are Talking{" "}
          <span className=" text-blue-600">About Remons</span>
        </h2>
        <div className=" grid grid-cols-3 gap-12 mt-10">
          {/* 1 */}
          <div className="h-[300px] p-10 bg-white border border-gray-200 rounded-[10px] shadow-md">
            <div className=" relative">
              {/* icon */}
              <div className=" absolute w-[50px] h-[50px] flex justify-center items-center rounded-full bg-blue-600 top-[-62px] left-[44%] mb-10">
                <BiSolidQuoteAltLeft className=" text-2xl text-white" />
              </div>
              {/* content and stars */}
              <span className=" mt-8">
                I was impressed by how smooth the whole process was. The car was
                spotless, the staff were incredibly friendly, and pickup took
                less than five minutes. Definitely the best car rental
                experience I’ve ever had!"
              </span>
              <div className=" flex gap-2 text-orange-400 mt-4 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            {/* Bottom */}
            <div>
              {/* Image */}
              <div></div>
              {/* Info */}
              <div></div>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-amber-400">
            <div>
              {/* icon */}
              <div></div>
              {/* content and stars */}
              <span>I was impressed</span>
              <div></div>
            </div>
            {/* Bottom */}
            <div>
              {/* Image */}
              <div></div>
              {/* Info */}
              <div></div>
            </div>
          </div>
          {/* 3 */}
          <div className="bg-amber-400">
            <div>
              {/* icon */}
              <div></div>
              {/* content and stars */}
              <span>I was impressed</span>
              <div></div>
            </div>
            {/* Bottom */}
            <div>
              {/* Image */}
              <div></div>
              {/* Info */}
              <div></div>
            </div>
          </div>
          {/* 4 */}
          <div className="bg-amber-400">
            <div>
              {/* icon */}
              <div></div>
              {/* content and stars */}
              <span>I was impressed</span>
              <div></div>
            </div>
            {/* Bottom */}
            <div>
              {/* Image */}
              <div></div>
              {/* Info */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className=" w-full bg-blue-600 h-[500px] relative mt-10">
        <div className=" max-w-[1300px] mx-auto flex justify-between items-center">
          <div className=" mt-35">
            <span className=" text-white text-[16px]">
              Faster, easier access to car rental services
            </span>
            <h2 className=" text-5xl text-white font-bold mb-10 mt-4">
              Premium Car Rental
            </h2>
            <div className=" flex gap-4">
              <div className=" flex p-4 justify-center items-center gap-4 w-[200px] rounded-[10px] text-white bg-[#ff3726] hover:bg-[#0c142e] transition duration-300 hover:cursor-pointer">
                <FaPlay className=" text-[18px]" />
                <div className=" flex flex-col">
                  <span>Get in</span>
                  <span className=" font-medium">Google Play</span>
                </div>
              </div>
              <div className=" flex p-4 justify-center items-center gap-4 w-[200px] rounded-[10px] text-gray-400 bg-white hover:bg-[#0c142e] transition duration-300 hover:cursor-pointer hover:text-white">
                <FaApple className=" text-2xl" />
                <div className=" flex flex-col">
                  <span>Get in</span>
                  <span className=" font-medium">Play Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-0 right-30">
            <img src="./image.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
