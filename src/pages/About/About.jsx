import React from 'react';
import about1 from '../../assets/about1.jpg';

const About = () => {
  return (
    //  md:mt-6 mt-4 issue
    // text-[#EAE3D2]
    <div
      id="about"
      className="w-[100vw] h-[100vh] bg-[#89CFF0] mb-8 md:mb-0 mt-4  py-5 flex justify-center items-center -z-10 "
    >
      {/* gradients
      <div className="absolute -z-1 w-[50%] h-[50%] left-20 top-20 white__gradient" />
      <div className="absolute -z-2 w-[50%] h-[50%] left-20 top-20 blue__gradient" /> */}
      {/* content */}
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse rounded-2xl   mx-4 p-2 z-10">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full ">
          <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
            About Us
          </h1>
          <p className="text-sm md:text-lg text-[#060229] lg:text-2xl z-10">
            Shoes 4 Smiles is a student organization dedicated to fundraising
            and providing shoes and other basic necessities to people in local,
            disadvantaged communities. We were founded in 2018 and have donated
            over 1200 pairs of shoes and thousands of dollars to people in the
            Gainesville community.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
        {/* <div className="absolute -z-1 w-[50%] h-[50%] right-20 bottom-20 pink__gradient" /> */}
      </div>
    </div>
  );
};

export default About;

// Mission Statement
// Shoes 4 Smiles is on a mission to improve the lives of disadvantaged communities in our local area by providing basic necessities like shoes. Through our annual shoe drive, we work with local organizations to distribute donations directly to those who need them most. With the support of our dedicated volunteers and partners, we're making a real impact in our community, one step at a time.

// Our Origin Story
// The origins of Shoes 4 Smiles are rooted in a personal experience that touched the heart of our founder, Artem Dadamyan. In 2016, during a visit to Moscow, he encountered two barefoot children in a metro tunnel who asked him for a pair of shoes. This encounter left a lasting impression on him and inspired him to start an organization dedicated to providing shoes to those in need.

// Determined to make a difference, Artem researched the high cost of shoes in comparison to other clothing items and was motivated to create an organization that fundraises and provides shoes to low-income families and communities. Shoes 4 Smiles was born out of this experience, and we're committed to carrying on this mission with passion and dedication.

// The memory of those two children has stayed with us and fuels our desire to make a real impact in the lives of disadvantaged communities. We're proud to have donated over 1200 pairs of shoes and thousands of dollars, but we won't stop there. With our continued efforts, we hope to make a meaningful difference in the world and inspire others to join us on this journey.

// Meet the Team
