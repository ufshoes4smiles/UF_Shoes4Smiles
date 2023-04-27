import React from 'react';
// import Hero from '../pages/Hero';
import Hero2 from '../pages/Hero2';
// import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import Stats from '../pages/Stats';
import OriginStory from '../pages/About/OriginStory';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero2 />
      <Stats />
      <OriginStory />
      <Events />
    </motion.section>
  );
};

export default Home;
