import React from 'react';
// import Facebook from '../../assets/Socials/facebook.png';
// import Instagram from '../../assets/Socials/instagram.png';
// import TikTok from '../../assets/Socials/tiktok.png';
// import YouTube from '../../assets/Socials/youtube.png';
// import GroupMe from '../../assets/Socials/groupme.png';

import { HiUserGroup, HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socials = [
  {
    id: 1,
    url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
    icon: <FaInstagram size={80} />,
    text: 'Instagram',
  },
  {
    id: 2,
    url: 'https://www.facebook.com/ufshoes4smiles',
    icon: <FaFacebook size={80} />,
    text: 'Facebook',
  },
  {
    id: 3,
    url: 'https://www.tiktok.com/@shoes4smiles',
    icon: <FaTiktok size={80} />,
    text: 'TikTok',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/@Shoes4Smiles',
    icon: <FaYoutube size={80} />,
    text: 'YouTube',
  },
  {
    id: 5,
    url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
    icon: <HiUserGroup size={80} />,
    text: 'GroupMe',
  },
  {
    id: 5,
    url: 'mailto:ufshoes4smiles@gmail.com',
    icon: <HiOutlineMail size={80} />,
    text: 'Email',
  },
];

const Socials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100vw] lg:h-[100vh] h-full bg-[#89CFF0] flex justify-center items-center py-14 pt-14 -z-10"
    >
      <div className="flex flex-col justify-center px-10 lg:pt-10 pt-0">
        <h1 className="lg:text-6xl md:text-4xl text-[#060229] text-3xl font-bold md:mb-10 mb-0">
          Connect With Us on our{' '}
          <span className="lg:text-6xl md:text-4xl text-4xl">Socials!</span>
        </h1>
        <ul className="">
          <li className="grid md:grid-cols-3 grid-cols-2 gap-20 m-10  ">
            {socials.map(({ id, url, icon, text, color }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-blue-500 text-2xl flex flex-col items-center hover:scale-110 hover:text-blue-800 duration-300 "
                >
                  {icon}
                  <p className="md:text-2xl text-xl font-bold text-[#060229] pt-4 flex justify-center items-center">
                    {text}
                  </p>
                </a>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Socials;
