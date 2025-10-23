import { GiCarDoor } from "react-icons/gi";
import { FaChair } from "react-icons/fa";
function CarCard({
  car,
}: {
  car: {
    name: string;
    desc: string;
    image: string;
    price: string;
    rating: number;
    infor: { door: number; suitcase: number; passengers: number };
  };
}) {
  return (
    <div className=" bg-[#f5f5f5] p-6 h-auto flex flex-col gap-4 relative">
      <div>
        <img
          src={car.image}
          alt={car.name}
          className=" w-full h-48 object-cover rounded-lg hover:scale-101 transition-all duration-200"
        />
      </div>
      <div>
        <h3 className=" text-lg font-semibold mt-2">{car.name}</h3>
        <p className=" text-blue-600 font-bold">{car.price}</p>
        <p className="">{car.desc}</p>
      </div>
      <div className=" relative gap-4 mb-12">
        <div className=" flex flex-col">
          <div className=" flex items-center gap-1">
            <GiCarDoor />
            <span>{car.infor.door} Doors</span>
          </div>
          <div className=" flex items-center gap-1">
            <FaChair />
            <span>{car.infor.suitcase} Suitcases</span>
          </div>
          <div className=" flex items-center gap-1">
            <GiCarDoor />
            <span>{car.infor.passengers} Passengers</span>
          </div>
        </div>
        <button className=" border border-blue-300 p-4 w-full left-0 bottom-0 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 cursor-pointer">
          Rent now
        </button>
      </div>
    </div>
  );
}

export default CarCard;
