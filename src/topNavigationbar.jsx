import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Topnavigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className="flex flex-wrap items-center justify-between p-3"
        style={{ backgroundColor: '#ff0000' }}
      >
        <div className="text-xl text-white" 
        style={
          {
            fontFamily: 'Orbitron , sans-serif'
          }
        }
        >web3&cryptovybes</div>

        {/* Menu Toggle for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <img
              className={`toggle block ${isOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={`toggle ${isOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>

        {/* Links */}
        <div className={`toggle w-full md:w-auto md:flex text-right text-bold ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a className="block md:inline-block hover:text-gray-300 px-3 py-3 text-white"
           style={{
             fontFamily: 'Roboto, sans-serif'
           }}
          >
          <NavLink
                exact
                to="/"
              >
                Home
              </NavLink>
          </a>
          <a  className="block md:inline-block hover:text-gray-300 px-3 py-3 text-white"
          style={{
            fontFamily: 'Roboto, sans-serif'
          }}
          >

          <NavLink
                exact
                to="/CryptoNews"
              >
                CryptoNews
              </NavLink>
          </a>
          
          <a href="#aboutus" className="block md:inline-block hover:text-gray-300 px-3 py-3 text-white"
          style={{
            fontFamily: 'Roboto, sans-serif'
          }}
          >Web3 Events</a>
          <a href="#gallery" className="block md:inline-block hover:text-gray-300 px-3 py-3 text-white"
          style={{
            fontFamily: 'Roboto, sans-serif'
          }}
          >Airdrop Section</a>
        </div>

        {/* SignIn, SignUp, and WhatsApp */}
        <div className={`w-full text-end ${isOpen ? 'block' : 'hidden'} md:flex md:w-auto px-2 py-2 md:rounded`}>
          <div className="flex flex-col md:flex-row justify-end space-x-0 md:space-x-4 space-y-4 md:space-y-0">
           

            {/* Sign In Button */}
            <a href="/signup" className="flex items-center h-10 px-4 rounded-md bg-white text-red-600 font-medium justify-center">
              Login
            </a>

            {/* Signup Button */}
            <a href="/signup" className="flex items-center h-10 px-4 rounded-md bg-white text-red-600 font-medium justify-center">
              Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topnavigationbar;
