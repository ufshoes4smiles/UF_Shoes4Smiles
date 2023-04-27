import React from 'react';
import Kicks4Kids from '../../assets/kicks4kids.JPG';
import { motion } from 'framer-motion';

const Kicks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100vw] lg:h-[100vh] h-full bg-[#89CFF0] flex justify-center items-center pt-10 -z-10"
    >
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse  mx-4 p-2 pt-3 pb-8 lg:pt-0">
        <div className="flex flex-col justify-center md:px-10 px-8 md:max-w-[65%] max-w-full z-10">
          <h1 className="lg:text-6xl text-[#060229]  text-4xl font-bold py-6 pb-4 flex justify-center items-center">
            Kicks 4 Kids
          </h1>
          <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
            Kick 4 Kids is a new initiative that aims to provide custom shoes to
            children going through regular medical treatments for chronic
            diseases. We gift these children with custom pairs of Vans and Air
            Forces based on their own interests and values. Our goal is to bring
            a sense of joy and normalcy to children in the hospital, and giving
            them a reminder that they are not alone. By collaborating with
            student organizations such as UF Footprints and Dream Team, we can
            bring a smile to the faces of children who truly deserve the best.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Kicks4Kids}
            alt="about1"
            className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[200px] h-[240px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black hover:scale-110 duration-300"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Kicks;

// Mission Statement
// Shoes 4 Smiles is on a mission to improve the lives of disadvantaged communities in our local area by providing basic necessities like shoes. Through our annual shoe drive, we work with local organizations to distribute donations directly to those who need them most. With the support of our dedicated volunteers and partners, we're making a real impact in our community, one step at a time.
