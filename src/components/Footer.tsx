import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import { MdEmail, MdLocalPhone } from "react-icons/md";
function Footer() {
  return (
    <div className=" bg-[#0C142E] h-100">
      <div className=" relative max-w-[1300px] mx-auto">
        <div className=" w-full absolute mt-5 flex items-center justify-between">
          {/* Top */}
          <div className=" flex gap-30 items-center justify-between">
            <div className=" text-white flex gap-20">
              <img
                className="h-14 p-1"
                src="https://pixydrops.com/remons/assets/img/logo/white-logo.svg"
                alt="logo"
              />
            </div>
            {/* Content */}
            <span className=" text-white font-semibold italic border-l pl-12 border-[#29314a]">Save Big With Our Cheap Car Rental</span>
          </div>
          {/* Icons */}
          <div className=" flex gap-2">
            <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:cursor-pointer">
              <FaFacebookF />
            </div>
            <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:cursor-pointer">
              <FaTwitter />
            </div>
            <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className=" absolute mt-30 text-white flex w-full justify-between">
          <div className=" flex flex-col">
            <h2 className=" font-bold">Info</h2>
            <div className=" mt-6 flex flex-col gap-2 text-gray-400">
              <span>Le Huu Trac Street, DaNang, VietNam</span>
              <div className=" flex gap-2 items-center">
                <MdEmail className=" text-blue-600"/>
                <span>hanhnewed@gmail.com</span>
              </div>
                <div className=" flex gap-2 items-center">
                <MdLocalPhone className=" text-blue-600"/>
                <span>+8434425921</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" font-bold">Contact</h2>
            <div className=" mt-6 text-gray-400">
              <ul className=" flex flex-col gap-2">
                <li className=" hover:text-blue-500 transition duration-300 hover:cursor-pointer hover:translate-x-2">About Us</li>
                <li className=" hover:text-blue-500 transition duration-300 hover:cursor-pointer hover:translate-x-2">New Cars</li>
                <li className=" hover:text-blue-500 transition duration-300 hover:cursor-pointer hover:translate-x-2">Latest News</li>
                <li className=" hover:text-blue-500 transition duration-300 hover:cursor-pointer hover:translate-x-2">Gallery</li>
                <li className=" hover:text-blue-500 transition duration-300 hover:cursor-pointer hover:translate-x-2">Contact</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className=" font-bold">Gallery</h2>
            <div className=" mt-6 flex gap-2 flex-wrap w-[300px]">
              <img src="./bmw.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
              <img src="./car2.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
              <img src="./car3.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
              <img src="./car4.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
              <img src="./car5.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
              <img src="./car7.png" alt="" className=" h-[45px] w-[80px] rounded-[5px] object-obtain duration-300 hover:scale-110"/>
            </div>
          </div>
          <div>
            <h2 className=" font-bold">Newsletter</h2>
            <div className=" text-gray-400 max-w-[250px] mt-6 flex gap-4 flex-col">
              <span>Subscribe our newsletter to get our latest update & news</span>
              <div className=" flex bg-white p-3 rounded-[5px]">
                <input type="text" placeholder="Email address" className=" outline-0 w-[90%]"/>
                <div className=" h-[40px] w-[50px] bg-blue-600 ml-2 rounded-[50px] flex justify-center items-center">
                  <IoMdPaperPlane className=" text-white text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
