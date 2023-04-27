import React from 'react';
import ShoeDrivePic from './ShoeDrivePic';
import ShoeDrive from './ShoeDrive';
import Procedure from './Procedure';
import Kicks from './Kicks';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShoeDrivePic />
      <ShoeDrive />
      <Kicks />
      <Procedure />
    </motion.section>
  );
};

export default WhatWeDo;

// Procedure:

// Collection: Distribute donation bins on campus, promote to students, and store shoes.
// Cleaning: Clean and refurbish shoes, and dry all shoes.
// Assembly: Inspect, label, sort, and package shoes by size, gender, and condition.
// Donation: Deliver shoes to local charities and organizations.

// Here are brief descriptions for each procedure:

// Collection: Distribute donation bins on campus and promote the shoe drive to students, encouraging them to donate any gently-used shoes they no longer need. Store the donated shoes in a secure location until they are ready to be cleaned and sorted.
// Cleaning: Clean and refurbish the donated shoes, removing any dirt or debris and polishing them to restore their appearance. Dry the shoes thoroughly before moving on to the assembly phase.
// Assembly: Inspect each cleaned shoe for any defects or issues, label them by size, gender, and condition, and sort them accordingly. Package the shoes into groups by size, gender, and condition, making them easier to distribute to the local charities and organizations.
// Donation: Deliver the packaged shoes to local charities and organizations, making sure to document the type and quantity of shoes donated. Thank the volunteers and donors for their contributions, and consider soliciting feedback to improve the shoe drive for future iterations.
