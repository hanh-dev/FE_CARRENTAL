import CarCard from "./CarCard";
import toyota from "/toyota.png";
import bmw from "/bmw.png";
import rollroy from "/rollroy.png"
import f1n from "/f1n.png"
import f1n2 from "/f1n2.png"
import excar from "/excar.png"
const cars = [
  {
    name: "Toyota Land Cruiser",
    desc: "A powerful SUV",
    image: rollroy,
    price: "$85,000",
    rating: 4.8,
    infor: { door: 2, suitcase: 1, passengers: 3 },
  },
  {
    name: "Nissan GTR Turbo",
    desc: "Compact car available as sedan hatchback, renowned for its all-wheel-drive",
    image: f1n,
    price: "$85,000",
    rating: 4.8,
    infor: { door: 2, suitcase: 1, passengers: 3 },
  },
  {
    name: "BMW 740L Series",
    desc: "Iconic muscle car with the classic, powerful engines, and agile handling",
    image: bmw,
    price: "$85,000",
    rating: 4.8,
    infor: { door: 2, suitcase: 1, passengers: 3 },
  },
  {
    name: "Toyota Land Cruiser",
    desc: "A powerful SUV",
    image: f1n2,
    price: "$85,000",
    rating: 4.8,
    infor: { door: 2, suitcase: 1, passengers: 3 },
  },
  {
    name: "Toyota Land Cruiser",
    desc: "A powerful SUV",
    image: excar,
    price: "$85,000",
    rating: 4.8,
    infor: { door: 2, suitcase: 1, passengers: 3 },
  },
];
function PopularCars() {
  return (
    <section className="">
      <div className=" max-w-[1300px] m-auto">
        <h2 className=" text-4xl font-semibold my-4 text-center">
          Most <span className=" text-blue-600">Popular Cars</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCars;
