import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3.5 lg:px-14">
      <div>
        <img className="h-26" src="/logo.png" alt="logo" />
      </div>
      <nav className=" hidden lg:flex gap-8">
        <Link
          to="/"
          className=" font-medium hover:text-blue-400 transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" font-medium hover:text-blue-500 transition-all"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className=" font-medium hover:text-blue-500 transition-all"
        >
          Our Cars
        </Link>
        <Link
          to="/pricing"
          className=" font-medium hover:text-blue-500 transition-all"
        >
          Pricing
        </Link>
        <Link
          to="/blog"
          className=" font-medium hover:text-blue-500 transition-all"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className=" font-medium hover:text-blue-500 transition-all"
        >
          Contact Us
        </Link>
      </nav>

      <SignedOut>
        <SignInButton mode="redirect">
            <button className=" bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              Login
            </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
