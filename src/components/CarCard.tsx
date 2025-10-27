import { GiCarDoor } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { BsSuitcase, BsPersonCheckFill} from "react-icons/bs";
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
    <div className=" p-6 h-auto flex flex-col gap-4 relative mb-12 shadow-md rounded-[10px] overflow-hidden">
      <div className=" relative">
        <img
          src={car.image}
          alt={car.name}
          className=" w-full h-48 object-cover rounded-lg hover:scale-101 transition-all duration-200"
        />
        <div className=" absolute top-1 right-1 bg-white px-4 py-1 rounded-[24px]">
          <p className=" text-[#FF9013] font-bold">
            {car.price} <span className=" text-gray-400 font-medium">/day</span>
          </p>
        </div>
      </div>
      <div>
        <div className=" flex justify-between items-center">
          <h3 className=" text-lg font-semibold mt-2 text-blue-600">
            {car.name}
          </h3>
          <div className=" ring ring-amber-500 rounded-[15px] flex justify-center items-center h-6 px-2">
            <div className=" flex justify-center items-center gap-1">
              <FaStar className=" text-amber-500" />
              {car.rating}
            </div>
          </div>
        </div>
        <p className="">{car.desc}</p>
      </div>
      <div className=" gap-4 mb-12 mt-2">
        <div className=" flex justify-between">
          <div className=" flex items-center gap-1">
            <GiCarDoor className=" text-amber-500"/>
            <span>{car.infor.door} Doors</span>
          </div>
          <div className=" flex items-center gap-1">
            <BsSuitcase className=" text-amber-500"/>
            <span>{car.infor.suitcase} Suitcases</span>
          </div>
          <div className=" flex items-center gap-1">
            <BsPersonCheckFill className=" text-amber-500"/>
            <span>{car.infor.passengers} Passengers</span>
          </div>
        </div>
        <button className=" absolute overflow-hidden border border-blue-300 p-4 w-full left-0 bottom-0 text-white font-semibold cursor-pointer bg-blue-600 transition-colors duration-200 before:content-[''] before:absolute before:inset-0 before:bg-blue-700 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0">
          <span className="relative z-10">Rent now</span>
        </button>
      </div>
    </div>
  );
}

export default CarCard;
