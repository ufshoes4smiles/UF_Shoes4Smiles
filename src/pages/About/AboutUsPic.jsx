import React from 'react';
import pic from '../../assets/Board/Who_we_Are.jpg';

const AboutUsPic = () => {
  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="relative">
        <img
          src={pic}
          alt="pic"
          className="object-cover h-screen w-full mt-20 "
        />

        <div className="absolute hidden md:block  text-2xl md:text-7xl text-white  bottom-40 left-20  opacity-90  ">
          <h1 className=" lg:px-10 lg:py-7 px-6 py-4  bg-black text-white lg:text-6xl text-4xl rounded-2xl mb-24 font-poppins">
            Who We Are
          </h1>
        </div>
        <div className="absolute text-3xl mt-36 md:hidden text-white opacity-90 inset-0 flex justify-center items-center">
          <h1 className="px-6 py-4 bg-black text-white text-4xl md:text-6xl lg:text-7xl rounded-2xl font-poppins">
            Who We Are
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPic;
