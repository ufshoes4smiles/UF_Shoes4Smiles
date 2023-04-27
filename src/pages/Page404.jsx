/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Page404 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
          class="absolute h-full w-full object-cover"
        />
        <div class="inset-0 bg-black opacity-25 absolute"> </div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here...
            </h1>

            <p class="font-extrabold lg:text-8xl text-6xl lg:my-32 my-10  lg:p-6 p-4 text-white animate-bounce hover:scale-110 hover:bg-black bg-black lg:bg-none  rounded-3xl duration-300">
              404
              {/* this is a test */}
            </p>
            <div class="flex flex-col items-center">
              <Link to="/">
                <button class="bg-white text-black text-3xl font-bold py-4 px-6 rounded-3xl hover:bg-black hover:scale-110 duration-300 hover:text-white group">
                  Back to Home
                  <span className="duration-300 group-hover:rotate-180 flex justify-center items-center">
                    <HiArrowNarrowRight className="ml-2 lg:ml-3" size={30} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page404;
