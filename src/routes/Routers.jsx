import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from '../components/Home';
import AboutMain from '../pages/About/AboutMain';
import Contact from '../pages/Contact';
import EventsMain from '../pages/Events/EventsMain';
import GetInvolved from '../pages/GetInvolved/GetInvolved';
import WhatWeDo from '../pages/ShoeDrive/WhatWeDo';
import Mission from '../pages/About/Mission';
import OriginStory from '../pages/About/OriginStory';
import Board from '../pages/About/Board';
import ShoeDrive from '../pages/ShoeDrive/ShoeDrive';
import Kicks from '../pages/ShoeDrive/Kicks';
import Procedure from '../pages/ShoeDrive/Procedure';
import JoinUs from '../pages/GetInvolved/JoinUs';
import Socials from '../pages/GetInvolved/Socials';
import Events from '../pages/Events/Events';
import Donate from '../pages/Donate';
import Page404 from '../pages/Page404';

import { AnimatePresence } from 'framer-motion';

function Routers() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of the page on location change
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<EventsMain />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/origin-story" element={<OriginStory />} />
        <Route path="/board" element={<Board />} />
        <Route path="/shoe-drive" element={<ShoeDrive />} />
        <Route path="/kicks-4-kids" element={<Kicks />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/upcoming-events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        {/* <Route
          path="https://account.venmo.com/u/jakeflothe"
          element={<Donate />}
        /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
