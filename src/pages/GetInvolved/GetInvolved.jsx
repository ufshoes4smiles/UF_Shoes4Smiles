import React from 'react';
import JoinUsPic from './JoinUsPic';
import JoinUs from './JoinUs';
import Socials from './Socials';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <JoinUsPic />
      <JoinUs />
      <Socials />
    </motion.section>
  );
};

export default GetInvolved;
