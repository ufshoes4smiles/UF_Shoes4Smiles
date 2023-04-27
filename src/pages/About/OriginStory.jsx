import React from 'react';
import FounderPic from '../../assets/founder.jpeg';
import { motion } from 'framer-motion';

const OriginStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100vw] h-full bg-[#060229] flex justify-center items-center md:pt-[60px] pt-[30px]"
    >
      <div className=" md:flex md:grid-cols-2 md:p-8 md:mx-16 m-8 grid-col-1 rounded-2xl mx-4 p-2">
        {/* Large Screen Picture */}
        <div className="flex justify-center items-center">
          <img
            src={FounderPic}
            alt="founder"
            className="lg:w-[550px] lg:h-[680px] flex   md:mt-8 m-5 rounded-2xl shadow-lg shadow-orange-500 hover:scale-110 duration-300"
          />
        </div>

        {/* Content: lg:text-6xl  md:text-4xl text-3xl */}
        <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[55%] max-w-full mb-5">
          <h1 className=" lg:text-6xl md:text-4xl text-3xl text-[#EAE3D2]  font-bold py-6 pb-8 flex justify-center items-center">
            Origin Story
          </h1>
          <p className=" text-sm md:text-lg lg:text-xl text-[#F9F5EB] ">
            The origins of Shoes 4 Smiles are rooted in a personal experience
            that touched the heart of our founder, Artem Dadamyan. In 2016,
            during a visit to Moscow, he encountered two barefoot children in a
            metro tunnel who asked him for a pair of shoes. This encounter left
            a lasting impression on him and inspired him to start an
            organization dedicated to providing shoes to those in need.
            <br />
            <br />
            Determined to make a difference, Artem researched the high cost of
            shoes in comparison to other clothing items and was motivated to
            create an organization that fundraises and provides shoes to
            low-income families and communities. Shoes 4 Smiles was born out of
            this experience, and we're committed to carrying on this mission
            with passion and dedication.
            <br />
            <br />
            The memory of those two children has stayed with us and fuels our
            desire to make a real impact in the lives of disadvantaged
            communities. We're proud to have donated over 1200 pairs of shoes
            and thousands of dollars, but we won't stop there. With our
            continued efforts, we hope to make a meaningful difference in the
            world and inspire others to join us on this journey.
            <br />
            <br />
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default OriginStory;

// Our Origin Story
// The origins of Shoes 4 Smiles are rooted in a personal experience that touched the heart of our founder, Artem Dadamyan. In 2016, during a visit to Moscow, he encountered two barefoot children in a metro tunnel who asked him for a pair of shoes. This encounter left a lasting impression on him and inspired him to start an organization dedicated to providing shoes to those in need.

// Determined to make a difference, Artem researched the high cost of shoes in comparison to other clothing items and was motivated to create an organization that fundraises and provides shoes to low-income families and communities. Shoes 4 Smiles was born out of this experience, and we're committed to carrying on this mission with passion and dedication.

// The memory of those two children has stayed with us and fuels our desire to make a real impact in the lives of disadvantaged communities. We're proud to have donated over 1200 pairs of shoes and thousands of dollars, but we won't stop there. With our continued efforts, we hope to make a meaningful difference in the world and inspire others to join us on this journey.
