import React from 'react';
import Join from '../../assets/join.jpg';
// import { HiUserGroup } from 'react-icons/hi';
// import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JoinUs = () => {
  // const socials = [
  //   {
  //     id: 1,
  //     url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
  //     icon: <FaInstagram size={30} />,
  //     text: 'Instagram',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://www.tiktok.com/@shoes4smiles',
  //     icon: <FaTiktok size={30} />,
  //     text: 'TikTok',
  //   },
  //   {
  //     id: 4,
  //     url: 'https://www.youtube.com/@Shoes4Smiles',
  //     icon: <FaYoutube size={30} />,
  //     text: 'YouTube',
  //   },
  // {
  //   id: 5,
  //   url: 'mailto:ufshoes4smiles@gmail.com',
  //   icon: <HiOutlineMail size={30} />,
  //   text: 'Email',
  // },
  //   {
  //     id: 6,
  //     url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
  //     icon: <HiUserGroup size={30} />,
  //     text: 'GroupMe',
  //   },
  // ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="join"
      className="w-[100vw] h-[100vh] bg-[#060229] flex justify-center items-center mt-10"
    >
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 mb-8 md:mx-16 m-0 grid-col-reverse  mx-2 p-2">
        <div className="flex flex-col justify-center px-4 md:max-w-[65%] max-w-full pt-8 mt-3">
          <h1 className="lg:text-6xl text-4xl text-[#EAE3D2] font-bold py-3 pb-4">
            Join Us
          </h1>
          <p className="md:py-3 py-1 font-bold text-[#EAE3D2] md:text-2xl lg:text-3xl text-xl">
            Looking to get involved?
          </p>
          <p className="text-sm md:text-lg text-[#EAE3D2] lg:text-2xl">
            We are always looking for new and dedicated members to join our
            organization! If you are interested in giving back to the community
            then follow our socials to stay up to date on our events and
            fundraisers. There are no requirements to join, you are welcome to
            join at any time!
          </p>
          {/* <div className="w-full flex items-center justify-center ">
            <ul className="md:w-[250px] w-[150px] flex md:p-6 p-4 bg-[#f7aa80] mt-4 md:mt-8 text-blue-700 rounded-full justify-between items-center duration-300 hover:scale-110 shadow-xl">
              {socials.map(({ id, url, icon, text }) => {
                return (
                  <li
                    className="hover:scale-125 hover:text-orange-600 duration-500"
                    key={id}
                  >
                    <a href={url} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
        <div className="flex justify-center items-center py-4">
          <img
            src={Join}
            alt="about1"
            className="lg:w-[690px] lg:h-[550px] md:w-[345px] md:h-[312px] w-[230px] h-[220px] md:mt-8  m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default JoinUs;
