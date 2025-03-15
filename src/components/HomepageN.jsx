import { NavLink } from "react-router-dom";
// import Type_n from "./partials/Type_n";
import Particle from "./partials/Particles";
// import { motion } from "framer-motion";

const HomepageN = () => {
  return (
    <>
    <div className="container mx-auto flex justify-end items-center">
          <button className="btn rounded-full"><NavLink to="/">Indonesia</NavLink></button>
        </div>
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        <Particle />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-400 drop-shadow-lg">
            <Type_n />
          </h1>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          > */}
            <NavLink 
              to="/resumen" 
              className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              履歴書とポートフォリオ
            </NavLink>
          {/* </motion.div>
        </motion.div> */}
      </div>
    </>
  );
};

export default HomepageN;