import { NavLink } from "react-router-dom";
// import Type from "./partials/Type";
import Particle from "./partials/Particles";
// import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
    <div className="container mx-auto flex justify-end items-center bg-transparent">
          <button className="btn rounded-full"><NavLink to="/n">日本語</NavLink></button>
        </div>
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        <Particle />
            <NavLink 
              to="/resume" 
              className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Resume dan Portofolio
            </NavLink>
      </div>
    </>
  );
};

export default Homepage;