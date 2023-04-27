import React from 'react';
import about1 from '../../assets/about1.jpg';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="  w-[100vw] lg:h-[100vh] h-full bg-[#89CFF0] flex justify-center items-center  -z-10 md:pt-[60px] pt-[40px]"
    >
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse  mx-4 p-2 pt-3 pb-8 lg:pt-0">
        <div className="flex flex-col justify-center md:px-10 px-8 md:max-w-[65%] max-w-full z-10">
          <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-4xl font-bold py-6 pb-4 flex justify-center items-center">
            Mission
          </h1>
          <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
            Shoes 4 Smiles is on a mission to improve the lives of disadvantaged
            communities in our local area by providing basic necessities like
            shoes. Through our annual shoe drive, we work with local
            organizations to distribute donations directly to those who need
            them most. With the support of our dedicated volunteers and
            partners, we're making a real impact in our community, one step at a
            time.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[200px] h-[240px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black hover:scale-110 duration-300"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;

// Mission Statement
// Shoes 4 Smiles is on a mission to improve the lives of disadvantaged communities in our local area by providing basic necessities like shoes. Through our annual shoe drive, we work with local organizations to distribute donations directly to those who need them most. With the support of our dedicated volunteers and partners, we're making a real impact in our community, one step at a time.
