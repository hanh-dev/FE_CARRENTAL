import { IoIosSearch } from "react-icons/io";

function HeroForm() {
  return (
    <div
      className=" bg-white shadow-lg p-10 mt-28 flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* Pick location */}
      <div className=" flex flex-col gap-2">
        <label htmlFor="pick-location">Pick Location</label>
        <select id="pick-location" className=" outline-none border-b w-full">
          <option value="location1">Danang City</option>
          <option value="location2">Hanoi</option>
          <option value="location3">Ho Chi Minh City</option>
        </select>
      </div>
      {/* Pick up date */}
      <div className=" flex flex-col gap-2">
        <label htmlFor="pick-up-date">Pick-up Date</label>
        <input
          type="date"
          id="pick-up-date"
          className=" outline-none border-b w-full"
        />
      </div>
      {/* Drop off date & time */}
      <div className=" flex flex-col gap-2">
        <label htmlFor="return-date">Return Date</label>
        <input
          type="date"
          id="return-date"
          className=" outline-none border-b w-full"
        />
      </div>
      {/* Search button */}
      <div className=" flex items-center gap-3 cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        <IoIosSearch /> Search
      </div>
    </div>
  );
}

export default HeroForm;
