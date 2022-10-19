import React from 'react';

const CalendarFeature = () => {
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
        {
      id: 2,
      title: 'Trick-Org-Treat',
      date: 'October 26th, 2022 (Wednesday)',
      time: '4:00 PM to 8:00 PM',
      location: 'Plaza of the Americas',
      description: 'Halloween Themed Organization Fair',
    },
    {
      id: 3,
      title: 'Volunteering with Project Downtown',
      date: 'November 19th, 2022 (Saturday)',
      time: '2:00 PM',
      location: 'City Hall',
      description: 'Serving the homeless population of Gainesville.',
    },

    {
      id: 4,
      title: 'Volunteering with Boys & Girls Club',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Spending the day with the youth of Gainesville.',
    },
    {
      id: 5,
      title: 'Study Social',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Study session with other members of the club.',
    },
  ];

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
      // translateX={['-100px', '100px']}
      id="calendar"
      className="w-full h-full grid grid-row-2 py-14 justify-center items-center "
    >
      <div className="bg-blue-200 rounded-2xl md:mx-0 md:p-0 mx-4 p-2">
        <h1 className="lg:text-6xl md:text-4xl text-blue-500 md:px-0  text-3xl font-bold py-6 pb-4 flex justify-center">
          Shoes4Smiles Events
        </h1>
        <div className="lg:flex hidden ">
          <iframe
            title="calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
            width="900"
            height="600"
            style={{
              border: '0',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
              margin: '2.5rem',
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div className="md:flex lg:hidden hidden">
          <iframe
            title="calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
            width="600"
            height="400"
            style={{
              border: '0',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
              margin: '1.5rem',
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div className="flex lg:hidden md:hidden">
          <div>
            <ul className="">
              
               <h1 className="text-xl font-bold">Shoe Drive</h1>
                  <p>
                    <span className="font-bold">Date: </span> Oct 17th (Monday) to Nov 18th (Friday)
                  </p>
                  <p>
                    <span className="font-bold">Time: </span> Anytime
                  </p>
                    <p>Collecting shoes for donations.</p>
                  <p>
                    <ul>
                    <li className="list-disc"><span className="font-bold">Drop-Off Location: </span></li>
                    <li className="list-disc"><span className="font-semibold">Library West</span> - first floor (by escalator),</li>
                    <li className="list-disc"><span className="font-semibold">Marston Science Library</span> - first floor (by elevator),</li>
                    <li className="list-disc"><span className="font-semibold">Health Science Library</span> - second floor,</li>
                    <li className="list-disc"><span className="font-semibold">Florida Gym</span> - second floor (Dean's Office)</li>
                    </ul>
                  </p>
                 
              {events.map((event) => (
                <li key={event.id} className="p-2 my-3">
                  <h1 className="text-xl font-bold">{event.title}</h1>
                  <p>
                    <span className="font-bold">Date: </span> {event.date}
                  </p>
                  <p>
                    <span className="font-bold">Time: </span> {event.time}
                  </p>
                  <p>
                    <span className="font-bold">Location: </span>{' '}
                    {event.location}
                  </p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFeature;
