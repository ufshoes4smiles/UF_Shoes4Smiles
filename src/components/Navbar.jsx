import React, { useState, useRef, useEffect } from 'react';
// import Donate from '../pages/Donate';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
// import sidebarLogo from '../assets/sidebar-logo.jpeg';

const Navbar = () => {
  // Navbar State
  const [sidebar, setSidebar] = useState(false);

  // navbar hide
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={30} />,
      text: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/ufshoes4smiles',
      icon: <FaFacebook size={30} />,
      text: 'Facebook',
    },
    {
      id: 3,
      url: 'https://www.tiktok.com/@shoes4smiles',
      icon: <FaTiktok size={30} />,
      text: 'TikTok',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/@Shoes4Smiles',
      icon: <FaYoutube size={30} />,
      text: 'YouTube',
    },
    // {
    //   id: 5,
    //   url: 'mailto:ufshoes4smiles@gmail.com',
    //   icon: <HiOutlineMail size={30} />,
    //   text: 'Email',
    // },
    // {
    //   id: 6,
    //   url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
    //   icon: <HiUserGroup size={30} />,
    //   text: 'GroupMe',
    // },
  ];

  const links = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'Who We Are',
      url: 'about',
      dropdown: [
        {
          id: 1,
          title: 'Mission',
          url: 'mission',
        },
        {
          id: 2,
          title: 'Origin Story',
          url: 'origin-story',
        },
        {
          id: 3,
          title: 'Meet the Board',
          url: 'board',
        },
      ],
    },
    {
      id: 3,
      title: 'What We Do',
      url: 'what-we-do',
      dropdown: [
        {
          id: 1,
          title: 'Shoe Drive',
          url: 'shoe-drive',
        },
        {
          id: 2,
          title: 'Kicks 4 Kids',
          url: 'kicks-4-kids',
        },
        {
          id: 3,
          title: 'Procedure',
          url: 'procedure',
        },
      ],
    },
    {
      id: 4,
      title: 'Get Involved',
      url: 'get-involved',
      dropdown: [
        {
          id: 1,
          title: 'Join Our Team',
          url: 'join-us',
        },
        {
          id: 2,
          title: 'Socials',
          url: 'socials',
        },
      ],
    },
    {
      id: 5,
      title: 'Events',
      url: 'events',
      dropdown: [
        {
          id: 1,
          title: 'Upcoming Events',
          url: 'upcoming-events',
        },
        {
          id: 2,
          title: '404',
          url: '404',
        },
      ],
    },
    {
      id: 6,
      title: 'Contact',
      url: 'contact',
    },
  ];

  const mobileLinks = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'Who We Are',
      url: 'about',
    },
    {
      id: 3,
      title: 'What We Do',
      url: 'what-we-do',
    },
    {
      id: 4,
      title: 'Get Involved',
      url: 'get-involved',
    },
    {
      id: 5,
      title: 'Events',
      url: 'events',
    },
    {
      id: 6,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 7,
      title: 'Donate',
      url: 'donate',
    },
    {
      id: 8,
      title: '404',
      url: '404',
    },
  ];

  return (
    // lg screen classes: md:rounded-none md:mt-0  border-[5px] border-orange-600
    <nav
      className="fixed z-front bg-[#060229] shadow-md  h-[80px] flex justify-between w-screen items-center px-2 pr-4 
    text-white font-poppins "
    >
      <Link to="/home">
        <img
          src={logo}
          alt="logo"
          className="w-[220px] lg:ml-5 ml-2 h-[70px] hover:scale-110 duration-500"
        />
      </Link>

      {/* Large Screen Menu */}
      {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}
      <ul className="hidden lg:flex">
        {links.map(({ id, url, title, dropdown }) => {
          return (
            <Link
              to={url}
              // smooth={true}
              // duration={1100}
              // spy={true}
              // exact="true"
              // offset={-80}
            >
              <li
                key={id}
                className="p-4 hover:text-orange-400 lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
              >
                {title}
                {dropdown && (
                  <ul className="absolute bg-[#89CFF0] px-1 w-[140px] rounded-b-3xl border-b-4 border-r-4 border-l-4 border-blue-700">
                    {dropdown.map(({ id, title, url }) => (
                      <li key={id} className="py-1">
                        <Link
                          to={url}
                          className="text-black text-lg hover:text-blue-700 "
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* <Link to={'donate'}> */}
      <Link to={'https://account.venmo.com/u/jakeflothe'} target="_blank">
        <button className="p-3 hidden lg:flex px-7 mx-5 bg-lime-600 font-bold rounded-lg text-blue-900  shadow-md hover:shadow-cyan-500 hover:bg-blue-600 hover:shadow-lg hover:scale-110 hover:text-white duration-300">
          Donate
        </button>
      </Link>

      {/* Social icons */}
      {/* Fixed Media Query for Medium devices */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map((social) => {
            const { id, url, icon, text } = social;
            return (
              <li
                key={id}
                className="w-[180px] h-[60px] flex justify-between items-center ml-[-125px] hover:ml-[-2px] duration-500 rounded-md  bg-cyan-800 "
                // bg-[#f7aa80]
              >
                <a
                  className="flex justify-between text-xl px-2 m-2 items-center w-full font-bold hover:text-orange-300 text-white"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text} {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ********************************* Mobile Screen ********************************* */}
      {/* Hamburger Menu */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="flex lg:hidden z-[100] text-orange-500 cursor-pointer"
      >
        {sidebar ? (
          <AiOutlineClose
            onClick={() => setSidebar(!sidebar)}
            size={30}
            className="cursor-pointer absolute right-4 top-4  mt-1"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setSidebar(!sidebar)}
            size={30}
            className="cursor-pointer absolute right-4 top-4  mt-1"
          />
        )}
      </div>

      {/* Mobile Menu */}

      {/* Overlay */}
      {sidebar ? (
        <div
          onClick={() => setSidebar(!sidebar)}
          className="bg-black/80  fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ' '
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          sidebar
            ? 'bg-[#060229] fixed w-[250px] h-screen z-10 top-0 left-0 duration-500 ease-in-out  overflow-y-scroll'
            : 'bg-[#060229] fixed w-[250px] h-screen z-10 top-0 left-[-100%] duration-500 ease-in-out  overflow-y-scroll'
        }
      >
        <img
          src={logo}
          alt="logo"
          className="w-[220px] mt-8 mx-auto h-[70px]"
        />

        <nav>
          <ul className="flex flex-col p-8 text-black ml-6 ">
            {/* Populating List for Sidebar */}
            {mobileLinks.map(({ id, title, url }) => (
              <Link to={`/${url}`} onClick={() => setSidebar(!sidebar)}>
                <li
                  key={id}
                  className="text-xl font-bold  text-orange-500  py-5 flex duration-300 ease-in-out"
                >
                  {title}

                  {/* <ul className="pl-4">
                  {' '}
                  {dropdown &&
                    dropdown.map(({ id, title, url }) => (
                      <li key={id} className="py-1">
                        <Link to={url} className="text-black text-lg">
                          {title}
                        </Link>
                      </li>
                    ))}
                </ul> */}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
