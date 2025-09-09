import React, { useEffect, useRef } from "react";
import {
  SiBmw,
  SiFord,
  SiMercedes,
  SiTesla,
  SiVolkswagen,
} from "react-icons/si";
import { Link } from "react-router-dom";
import gsap from "gsap";

const brands = [
  { name: "BMW", icon: <SiBmw /> },
  { name: "Mercedes Benz", icon: <SiMercedes /> },
  { name: "Ford", icon: <SiFord /> },
  { name: "Volkswagen", icon: <SiVolkswagen /> },
  { name: "Tesla", icon: <SiTesla /> },
];

function Brands() {
  const brandRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".brand-item",
        { xPercent: 0 },
        {
          xPercent: -100 * brands.length,
          duration: 10,
          ease: "linear",
          repeat: -1,
        }
      );
    }, brandRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="bg-[#f9fafb] py-14 px-5 lg:px-14"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Explore Our <span className="text-blue-600">Premium Brands</span>
          </h2>
          <Link to="/brands">View All Brands</Link>
        </div>

        {/* Brands car */}
        <div className="overflow-hidden mt-10">
          <div ref={brandRef} className="flex gap-6 w-max">
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="brand-item flex flex-col items-center justify-center 
             gap-3 min-w-[160px] h-[120px] border-none
             bg-white shadow-sm 
             hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl text-blue-600">{brand.icon}</div>
                <h3 className="text-base font-semibold text-gray-700">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
