import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    //     {
    //       id: 1,
    //       title: 'Shoe Drive',
    //       date: 'Oct 17th (Monday) to Nov 18th (Friday)',
    //       time: '5:00 PM',
    //       location: 'Shoe Drive Locations',
    //       description: 'Collecting shoes for donations.',
    //     },
    //     {
    //       id: 2,
    //       title: 'Second GBM',
    //       date: 'October 18th, 2022 (Tuesday)',
    //       time: '5:00 PM',
    //       location: 'Reitz Union, Room 2360',
    //       description: 'Second General Body Meeting',
    //     },
    //         {
    //       id: 2,
    //       title: 'Trick-Org-Treat',
    //       date: 'October 26th, 2022 (Wednesday)',
    //       time: '4:00 PM to 8:00 PM',
    //       location: 'Plaza of the Americas',
    //       description: 'Halloween Themed Organization Fair',
    //     },
    //     {
    //       id: 3,
    //       title: 'Volunteering with Project Downtown',
    //       date: 'November 19th, 2022 (Saturday)',
    //       time: '12:30 PM',
    //       location: 'City Hall',
    //       description: 'Serving the homeless population of Gainesville.',
    //     },
    //     {
    //       id: 4,
    //       title: 'Shoe Cleaning Event',
    //       date: 'February 11th, 2023 (Saturday)',
    //       time: '12 PM to 4 PM',
    //       location: 'Depot Park',
    //       description: 'Cleaning shoes for donation.',
    //     },

    {
      id: 5,
      title: 'UF Big Event',
      date: 'March 4th, 2023 (Saturday)',
      time: '9 AM to 12 PM',
      location: 'Flavet Field',
      description: 'Community Service in Gainesville',
    },

    {
      id: 6,
      title: '5th GBM',
      date: 'March 6th, 2023 (Monday)',
      time: '6:30 PM',
      location: 'Room Lit 0217',
      description: '5th General Body Meeting',
    },
    {
      id: 6,
      title: 'Shoe Cleaning Event',
      date: 'March 25th, 2023 (Saturday)',
      time: '12 PM to 4 PM',
      location: 'Reitz Union',
      description: 'Cleaning shoes for donation',
    },

    //     {
    //       id: 5,
    //       title: 'Volunteering with Boys & Girls Club',
    //       date: '0000-00-00 (TBA)',
    //       time: '0:00 AM',
    //       location: 'TBA',
    //       description: 'Spending the day with the youth of Gainesville.',
    //     },
    //     {
    //       id: 6,
    //       title: 'Study Social',
    //       date: '0000-00-00 (TBA)',
    //       time: '0:00 AM',
    //       location: 'TBA',
    //       description: 'Study session with other members of the club.',
    //     },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="calendar"
      className="w-[100vw] h-full grid grid-row-2 py-8 justify-center items-center bg-[#89CFF0] lg:pt-[80px]"
    >
      <div className=" md:mx-0 md:p-0 mx-4 ">
        <h1 className="lg:text-6xl text-5xl text-[#060229] p-6 m-6 font-bold py-4 pb-4 flex justify-center">
          Upcoming Events
        </h1>

        <div className="p-3 m-2 lg:p-6 lg:m-6">
          <div>
            <ul className="grid  grid-cols-1 lg:grid-cols-2 gap-10 ">
              {events.map((event) => (
                <li key={event.id} className="p-2 text-[#060229] text-xl mb-5 ">
                  <h1 className="text-3xl font-bold py-3 px-4 bg-[#060229] text-[#EAE3D2] rounded-2xl mb-2 flex justify-center items-center">
                    {event.title}
                  </h1>
                  <p>
                    <span className="font-bold text-xl">Date: </span>{' '}
                    {event.date}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Time: </span>{' '}
                    {event.time}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Location: </span>{' '}
                    {event.location}
                  </p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>

    // <div
    //   id="calendar"
    //   className="w-[100vw] h-full grid grid-cols-1 md:grid-cols-2 py-10 md:py-14 justify-center items-center bg-[#89CFF0]"
    // >
    //   <div className="md:mx-0 mx-4 p-4 md:p-2">
    //     <h1 className="text-3xl md:text-6xl text-[#060229] text-center md:text-left px-6 md:px-0 m-4 md:m-6 font-bold ">
    //       Upcoming Events
    //     </h1>
    //   </div>
    //   <div className="p-4 md:p-6 m-4 md:m-6">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
    //       {events.map((event) => (
    //         <div key={event.id} className="p-4 md:p-2 text-[#060229]">
    //           <h2 className="text-lg md:text-2xl font-bold py-2 md:py-3 px-4 bg-[#060229] text-[#EAE3D2] rounded-2xl mb-2">
    //             {event.title}
    //           </h2>
    //           <p className="text-base md:text-lg">
    //             <span className="font-bold text-sm md:text-base">Date: </span>
    //             {event.date}
    //           </p>
    //           <p className="text-base md:text-lg">
    //             <span className="font-bold text-sm md:text-base">Time: </span>
    //             {event.time}
    //           </p>
    //           <p className="text-base md:text-lg">
    //             <span className="font-bold text-sm md:text-base">
    //               Location:{' '}
    //             </span>
    //             {event.location}
    //           </p>
    //           <p className="text-base md:text-lg">{event.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Events;
