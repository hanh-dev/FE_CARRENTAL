import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
