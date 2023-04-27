import React from 'react';
import DonationStat from '../assets/Stats/DonationStat.jpg';
import MoneyStat from '../assets/Stats/MoneyStat.jpeg';
import OrgStat from '../assets/Stats/OrgStat.jpg';

// import headset from '../assets/examplePics/headset.svg';

const Stats = () => {
  const stats = [
    {
      id: 2,
      title: 'Raised',
      value: '$5000+',
      unit: '',
      image: MoneyStat,
    },
    {
      id: 1,
      title: 'Donated',
      value: '1800+',
      unit: 'pairs',
      image: DonationStat,
    },

    {
      id: 3,
      title: 'Worked with',
      value: '25+',
      unit: 'Orgs',
      image: OrgStat,
    },
  ];

  return (
    <section className="w-[100vw] h-full bg-[#89CFF0] pt-10  pb-28 -z-10 overflow-x-hidden">
      <h1 className="flex justify-center items-center text-4xl md:text-5xl  lg:text-6xl text-[#060229] font-bold py-4">
        Achievements
      </h1>
      <div className="w-full max-w-screen-lg mx-auto mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-4 ">
        {stats.map(({ id, image, title, value, unit }) => (
          <div
            key={id}
            className="relative h-[480px] overflow-hidden rounded-3xl shadow-blue-500 shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full  object-cover object-center transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl rounded-3xl"
            />
            <div className="absolute bottom-0 p-6 w-full flex flex-col bg-black bg-opacity-50 rounded-b-3xl">
              <p className="font-normal text-4xl text-white uppercase">
                {title}
              </p>
              <h2 className="mt-2 font-semibold text-4xl  text-white">
                {`${value} ${unit}`}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
