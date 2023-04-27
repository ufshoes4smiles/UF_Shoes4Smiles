import React from 'react';
import { motion } from 'framer-motion';

const Donate = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100vw] h-[100vh] flex justify-center items-center"
    >
      <button className="p-24 px-24 mx-5 text-9xl bg-lime-600 font-bold rounded-3xl text-blue-900  shadow-md hover:shadow-cyan-500 hover:bg-blue-600 hover:shadow-lg hover:scale-125 hover:text-white duration-300">
        Donate
      </button>
    </motion.section>
  );
};

export default Donate;
