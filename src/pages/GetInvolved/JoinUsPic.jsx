import React from 'react';
import pic from '../../assets/pic5.jpg';

const JoinUsPic = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="relative">
        <img
          src={pic}
          alt="pic"
          className=" object-cover h-screen w-[100vw] mt-36 "
        />

        <div className="absolute hidden md:block  text-2xl md:text-7xl text-white  bottom-40 left-20  opacity-90  ">
          <h1 className=" lg:px-10 lg:py-7 px-6 py-4  bg-black text-white lg:text-6xl text-4xl rounded-2xl mb-24 font-poppins">
            Get Involved
          </h1>
        </div>
        <div className="absolute text-3xl mt-80 md:hidden text-white opacity-90 inset-0 flex justify-center items-center">
          <h1 className="px-6 py-4 bg-black text-white text-4xl md:text-6xl lg:text-7xl rounded-2xl font-poppins">
            Get Involved
          </h1>
        </div>
      </div>
    </section>
  );
};

export default JoinUsPic;
