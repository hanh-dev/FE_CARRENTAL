import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiAudi,
  SiBmw,
  SiChevrolet,
  SiFord,
  SiHyundai,
  SiMercedes,
  SiTesla,
  SiVolkswagen,
} from "react-icons/si";

const brands = [
  { name: "BMW", icon: <SiBmw /> },
  { name: "Mercedes Benz", icon: <SiMercedes /> },
  { name: "Ford", icon: <SiFord /> },
  { name: "Volkswagen", icon: <SiVolkswagen /> },
  { name: "Tesla", icon: <SiTesla /> },
  { name: "Audi", icon: <SiAudi /> },
  { name: "Chevrolet", icon: <SiChevrolet /> },
  { name: "Hyundai", icon: <SiHyundai /> },
  { name: "Hyundai", icon: <SiHyundai /> },
  { name: "Hyundai", icon: <SiHyundai /> },
  { name: "Hyundai", icon: <SiHyundai /> },
];
function Brands() {
  const brandRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    brandRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    brandRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className=" max-w-[1300px] mx-auto my-2 overflow-hidden scrollbar-hide py-12 w-max" data-aos="fade-up" data-aos-delay="200">
      {/* Brand Head */}
      <div>
        <h2 className=" text-2xl font-semibold text-center">
          Explore Our <span className=" text-blue-600">Premium Brands</span>
        </h2>
      </div>
      {/* Brand List */}
      <div className=" flex relative mt-4 items-center gap-3  ">
        {/* Left */}
        <button
          onClick={scrollLeft}
          className=" absolute w-10 h-10 flex items-center justify-center cursor-pointer text-blue-300 border rounded-full hover:bg-blue-600 transition duration-300 hover:text-white"
        >
          <FaChevronLeft />
        </button>
        {/* List */}
        <div
          className=" flex gap-8 text-blue-600 overflow-x-auto scrollbar-hide"
          ref={brandRef}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-[160px] h-30 flex flex-col items-center justify-center border gap-3 
             bg-white shadow-sm hover:shadow-lg"
            >
              <div className="text-4xl text-blue-600">{brand.icon}</div>
              <h3 className="text-gray-800">{brand.name}</h3>
            </div>
          ))}
        </div>
        {/* Right */}
        <button
          onClick={scrollRight}
          className="absolute w-10 h-10 flex items-center justify-center cursor-pointer text-blue-300 border rounded-full hover:bg-blue-600 transition duration-300 hover:text-white right-0"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Brands;
