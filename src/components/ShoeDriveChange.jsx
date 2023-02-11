import React from 'react';
import ShoedrivePic from '../assets/Pics/ShoeDrive.png';
import Shoe1 from '../assets/Pics/shoeDr1.jpg';
import Shoe2 from '../assets/Pics/shoeDr2.jpg';
import Shoe3 from '../assets/Pics/shoeDr3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  {
    id: 1,
    src: Shoe2,
    alt: 'shoe2',
  },
  {
    id: 2,
    src: Shoe1,
    alt: 'shoe1',
  },
  {
    id: 3,
    src: Shoe3,
    alt: 'shoe3',
  },
];

const ShoeDriveChange = () => {
  return (
    <div
      // translateX={['215px', '-235px']}
      // translateY={['-100px', '100px']}
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
      id="shoedrive"
      className="w-full h-full flex justify-center items-center "
    >
      {/* Different card: bg-orange-300 rounded-3xl shadow-xl shadow-orange-200  */}
      <div className="w-full md:flex md:grid-cols-2 md:p-8 md:mx-16 m-0 grid-col-reverse bg-[#f7aa80] rounded-2xl mx-4 p-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="object-contain md:w-[400px] md:h-[540px] w-[200px] h-[310px] mt-10  lg:hidden flex "
        >
          {images.map(({ id, src, alt }) => {
            return (
              <SwiperSlide key={id} className="z-back">
                <div className="z-back">
                  <img
                    src={src}
                    alt={alt}
                    className="object-cover md:mt-20 mt-10 h-full w-full "
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center items-center">
          <img
            src={ShoedrivePic}
            alt="about1"
            className="lg:w-[700px] lg:h-[750px] lg:flex hidden  md:mt-8 m-5 object-contain rounded-2xl  shadow-black"
          />
        </div>
        <div className="flex flex-col justify-center px-10 md:max-w-[55%] max-w-full mb-5">
          <h1 className="lg:text-6xl  md:text-4xl text-blue-500  text-3xl font-bold py-6 pb-4">
            Shoe Drive
          </h1>
          <p className=" text-sm md:text-lg lg:text-2xl">
            Every year, we organize a shoe drive in the Gainesville area. 
            We take the shoes that are collected and make sure they are thoroughly cleaned before distributing them to individuals who are in need.
//             Our shoe
//             drive starts on <span className="text-blue-500">October 17th</span>{' '}
//             and ends on
//             <span className="text-blue-500"> November 18th.</span> <br />
//             <br />
//             We will be collecting shoes at the following drop-off locations:
//             <ul className="list-disc text-blue-500">
//               <li className="px-2 mx-2"><span className="font-semibold">Library West</span> - first floor (by escalator),</li>
//               <li className="list-disc px-2 mx-2"><span className="font-semibold">Marston Science Library</span> - first floor (by elevator),</li>
//               <li className="list-disc px-2 mx-2"><span className="font-semibold">Health Science Library</span> - second floor,</li>
//               <li className="list-disc px-2 mx-2"><span className="font-semibold">Florida Gym</span> - second floor (Dean's Office)</li>
//             </ul>
//             <br />
//             If you are unable to reach the drop off locations, you can also
//             message us on our social media pages to arrange a pickup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoeDriveChange;
