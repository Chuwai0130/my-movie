import React, { useState } from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [menuOn, setMenuOn] = useState(false);
  const handleMenu = () => {
    setMenuOn(!menuOn)
  }

  return (
    <div>
      <div className="menu-card h-24 bg-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-primary w-full mx-4 my-8 text-3xl font-bold">
              MOVIE NOW.
            </h1>
          </div>
          {/* Menu when above md screen*/}
          <div>
            <ul className="hidden md:flex justify-between mx-4">
              <li className="p-6 text-white font-semibold text-xl hover:scale-125 hover:shadow-2xl duration-300 ease-in-out cursor-pointer">
                Sign In
              </li>
              <li className="p-6 text-white font-semibold text-xl hover:scale-125 hover:shadow-2xl duration-300 ease-in-out cursor-pointer">
                Sign Up
              </li>
            
            </ul>
            {/* Hamburger when below md screen */}
            <div>
              <IoEllipsisHorizontalSharp onClick={handleMenu} className="md:hidden text-2xl text-gray-400 m-6 hover:text-white hover:scale-125 duration-300 ease-in-out cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* md screen overlay menu */}
      <div className={menuOn? "absolute z-50 top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center" : 'ease-in-out fixed bottom-[-100%] duration-500'}>
        <ul>
          <li className="py-4 text-3xl font-semibold text-gray-500 hover:text-gray-300 hover:scale-110 duration-300 cursor-pointer">Home</li>
          <li className="py-4 text-3xl font-semibold text-gray-500 hover:text-gray-300 hover:scale-110 duration-300 cursor-pointer">Movie</li>
          <li className="py-4 text-3xl font-semibold text-gray-500 hover:text-gray-300 hover:scale-110 duration-300 cursor-pointer">Series</li>
          <li className="py-4 text-3xl font-semibold text-gray-500 hover:text-gray-300 hover:scale-110 duration-300 cursor-pointer">Anime</li>
        </ul>
        <IoIosClose onClick={handleMenu} size={60} className='cursor-pointer text-gray-500 hover:rotate-90 hover:text-gray-300 duration-200' />
      </div>
    </div>
  );
}

export default Navbar;
