import React, { useState } from 'react';
import { BiSmile, BiWinkSmile } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [smile, setSmile] = useState(false);

  // email js functionality
  const form = useRef();
  const [value, setValue] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w5a6z1g',
        'template_8tg0gme',
        form.current,
        'sEEZQsaQOx_rEz2MD'
      )
      .then(
        (result) => {
          console.log(result.text);
          setValue('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // bg-[#f7aa80] rounded-2xl
  // F15412
  //     bg-[#f7aa80]-- orange

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="w-[100vw] h-full bg-[#89CFF0]  flex justify-center items-center p-2 -z-10  "
    >
      {/* <div className="absolute -z-1 w-[50%] h-[50%] left-20 top-20 white__gradient" />
      <div className="absolute -z-2 w-[50%] h-[50%] left-20 top-20 blue__gradient" /> */}
      <div className=" rounded-2xl md:mx-0 md:p-0 mx-4 mt-8 flex">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full my-5 px-8 z-10 "
        >
          <div className="pb-7 group">
            <h1 className="lg:text-5xl md:text-4xl text-[#060229] mt-8  text-3xl font-bold py-7 ">
              Contact Us
            </h1>
            <p className="text-md md:text-lg lg:text-2xl text-[#060229]">
              If you have any questions or would like to get involved, please
              submit the form below or email us at{' '}
              <span className="text-md md:text-lg lg:text-2xl font-bold">
                ufshoes4smiles@gmail.com
              </span>
            </p>
          </div>
          <input
            className="border-2 rounded-lg p-3 flex bg-[#ffb393] mb-4"
            type="text"
            name="user_name"
            value={value}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <input
            className="border-3 border-orange-500 rounded-lg p-3 flex bg-[#ffb393]  mb-4"
            type="email"
            name="user_email"
            value={value}
            placeholder="Email"
          />
          <textarea
            className="bg-[#ffb393] border-2 rounded-lg p-2 flex border-gray-300 mb-4"
            name="message"
            rows="8"
            value={value}
            placeholder="Message"
          ></textarea>
          <button
            // Change smile state on Hover
            onMouseEnter={() => setSmile(true)}
            onMouseLeave={() => setSmile(false)}
            type="submit"
            value="Send"
            className="text-black group md:text-lg border-4 bg-orange-400 px-3 py-2 md:px-3 md:py-4 border-orange-400 my-2 flex items-center justify-center hover:text-white hover:bg-blue-400 hover:font-bold hover:border-blue-900 duration-300 hover:scale-110 rounded-lg shadow-orange-600 shadow-lg hover:shadow-lg hover:shadow-blue-500"
          >
            Let's Collaborate
            <span className="duration-300">
              {smile ? (
                <BiWinkSmile className="ml-3" size={35} />
              ) : (
                <BiSmile className="ml-3" size={35} />
              )}
            </span>
          </button>
        </form>

        {/* <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
    </motion.section>
  );
};

export default Contact;
