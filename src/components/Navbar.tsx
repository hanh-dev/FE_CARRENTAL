import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3.5 lg:px-14">
      <div>
        <img className="h-26" src="/logo.png" alt="logo" />
      </div>
      <nav className=" flex gap-5">
        <Link
          to="/"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Our Cars
        </Link>
        <Link
          to="/pricing"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Pricing
        </Link>
        <Link
          to="/blog"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Contact Us
        </Link>
      </nav>

      <button>Sign In</button>
    </header>
  );
};

export default Navbar;
