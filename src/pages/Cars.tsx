import PopularCars from "../components/PopularCars";
import Brands from "../components/Brands";

const Cars = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-4">
        Our <span className="text-blue-600">Cars</span>
      </h1>
      <Brands />
      <PopularCars />
    </div>
  );
};

export default Cars;

