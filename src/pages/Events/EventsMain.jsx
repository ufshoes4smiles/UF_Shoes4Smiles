import React from 'react';
import EventsPic from './EventsPic';
import Events from './Events';
import { motion } from 'framer-motion';

const EventsMain = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <EventsPic />
      <Events />
    </motion.section>
  );
};

export default EventsMain;
