import React from 'react';
import Shoe1 from '../../assets/shoeDr1.jpg';
import Shoe2 from '../../assets/shoeDr2.jpg';
import Shoe3 from '../../assets/shoeDr3.jpg';
import { motion } from 'framer-motion';

const procedureData = [
  {
    id: 1,
    src: Shoe1,
    alt: 'about1',
    title: 'Collection',
    desc: 'Distribute donation bins on campus and promote the shoe drive to students, encouraging them to donate any gently-used shoes they no longer need. Store the donated shoes in a secure location until they are ready to be cleaned and sorted.',
  },
  {
    id: 2,
    src: Shoe3,
    alt: 'about2',
    title: 'Cleaning',
    desc: 'Clean and refurbish the donated shoes, removing any dirt or debris and polishing them to restore their appearance. Dry the shoes thoroughly before moving on to the assembly phase.',
  },
  {
    id: 3,
    src: Shoe3,
    alt: 'about3',
    title: 'Assembly',
    desc: 'Inspect each cleaned shoe for any defects or issues, label them by size, gender, and condition, and sort them accordingly. Package the shoes into groups by size, gender, and condition, making them easier to distribute to the local charities and organizations.',
  },
  {
    id: 4,
    src: Shoe2,
    alt: 'about4',
    title: 'Donation',
    desc: 'Deliver the packaged shoes to local charities and organizations, making sure to document the type and quantity of shoes donated. Thank the volunteers and donors for their contributions, and consider soliciting feedback to improve the shoe drive for future iterations.',
  },
];

const Procedure = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Small Screen Content */}
      <section className="w-full h-full bg-[#060229] pb-10 block md:hidden ">
        <h1 className=" text-5xl text-[#EAE3D2]  font-bold py-6 pb-8 mt-10 flex justify-center items-center">
          Procedure
        </h1>
        {procedureData.map(({ id, src, alt, title, desc }) => (
          <section
            key={id}
            className="w-full h-full bg-[#060229] flex justify-center items-center  -z-10"
          >
            <div className=" w-full md:flex  md:px-8 md:mx-16 md:py-4 md:my-4 grid grid-col-reverse rounded-2xl  mx-4 p-2 py-6 ">
              <div className="flex justify-center items-center">
                <img
                  src={src}
                  alt={alt}
                  className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[210px] h-[250px] md:mt-8 m-2 object-cover rounded-2xl shadow-lg shadow-blue-900"
                />
              </div>
              <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[65%] max-w-full z-10">
                <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2] text-3xl font-bold py-6 pb-2 flex justify-center items-center">
                  {title}
                </h1>
                <p className="text-sm md:text-lg my-2 text-[#EAE3D2] lg:text-2xl z-10 px-1">
                  {desc}
                </p>
              </div>
            </div>
          </section>
        ))}
      </section>
      {/* Large Screen Content */}
      <section className="w-full h-full bg-[#060229] pb-10 hidden md:block  pt-[100px]">
        <h1 className=" lg:text-6xl md:text-4xl text-3xl text-[#EAE3D2]  font-bold py-6 pb-8 flex justify-center items-center">
          Procedure
        </h1>
        {/* Collection Section */}
        <section className="w-full h-full bg-[#060229] flex justify-center items-center  -z-10">
          <div className=" w-full md:flex  md:px-8 md:mx-16 md:py-4 md:my-4 grid grid-col-reverse rounded-2xl   mx-4 p-2 ">
            <div className="flex justify-center items-center">
              <img
                src={Shoe1}
                alt="about1"
                className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-blue-900"
              />
            </div>
            <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[65%] max-w-full z-10">
              <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2] text-3xl font-bold py-6 pb-2 flex justify-center items-center">
                Collection
              </h1>
              <p className="text-sm md:text-lg my-2 text-[#EAE3D2] lg:text-2xl z-10 px-1">
                Distribute donation bins on campus and promote the shoe drive to
                students, encouraging them to donate any gently-used shoes they
                no longer need. Store the donated shoes in a secure location
                until they are ready to be cleaned and sorted.
              </p>
            </div>
          </div>
        </section>

        {/* Cleaning Section */}
        <section className="w-full h-full bg-[#060229] flex justify-center items-center flex-col-reverse -z-10">
          <div className=" w-full md:flex md:px-8 md:mx-16 md:py-4 md:my-4 m-0 grid  grid-col-reverse  rounded-2xl mx-4 p-2 ">
            <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[65%] max-w-full z-10">
              <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2]  text-3xl font-bold py-6 pb-2 flex justify-center items-center">
                Cleaning
              </h1>
              <p className="text-sm md:text-lg my-2 text-[#EAE3D2] lg:text-2xl z-10 px-1">
                Clean and refurbish the donated shoes, removing any dirt or
                debris and polishing them to restore their appearance. Dry the
                shoes thoroughly before moving on to the assembly phase.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Shoe3}
                alt="about1"
                className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-blue-900"
              />
            </div>
          </div>
        </section>

        {/* Assembly Section */}
        <section className="w-full h-full bg-[#060229] flex justify-center items-center  -z-10">
          <div className=" w-full md:flex  md:px-8 md:mx-16 md:py-4 md:my-4 grid grid-col-reverse rounded-2xl  mx-4 p-2 ">
            <div className="flex justify-center items-center">
              <img
                src={Shoe3}
                alt="about1"
                className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-blue-900"
              />
            </div>
            <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[65%] max-w-full z-10">
              <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2]  text-3xl font-bold py-6 pb-2 flex justify-center items-center">
                Assembly
              </h1>
              <p className="text-sm md:text-lg my-2 text-[#EAE3D2] lg:text-2xl z-10 px-1">
                Inspect each cleaned shoe for any defects or issues, label them
                by size, gender, and condition, and sort them accordingly.
                Package the shoes into groups by size, gender, and condition,
                making them easier to distribute to the local charities and
                organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="w-full h-full bg-[#060229] flex justify-center items-center  -z-10">
          <div className=" w-full md:flex m md:px-8 md:mx-16 md:py-4 md:my-4 m-0 grid grid-col-reverse rounded-2xl   mx-4 p-2 ">
            <div className="flex flex-col justify-center md:px-10 px-6 md:max-w-[65%] max-w-full z-10">
              <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2]  text-3xl font-bold py-6 pb-2 flex justify-center items-center">
                Donation
              </h1>
              <p className="text-sm md:text-lg my-2 text-[#EAE3D2] lg:text-2xl z-10 px-1">
                Deliver the packaged shoes to local charities and organizations,
                making sure to document the type and quantity of shoes donated.
                Thank the volunteers and donors for their contributions, and
                consider soliciting feedback to improve the shoe drive for
                future iterations.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Shoe2}
                alt="about1"
                className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-blue-900"
              />
            </div>
          </div>
        </section>
      </section>
      ;
    </motion.section>
  );
};

export default Procedure;
