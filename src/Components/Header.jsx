import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const activeLink='bg-neutral-600 border-zinc-700 bg-opacity-60 backdrop-blur-[5px] w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'
  const inactiveLink='hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'

  return (
    <>
        <div className="fixed z-[999] text-white text-[15px]">
          <div className="flex gap-x-2 fixed left-0 right-0 my-4 mx-auto px-2 py-[2px] w-[400px] justify-between border border-neutral-700 bg-neutral-800 bg-opacity-40 backdrop-blur-[6px] items-center rounded-full">
            <NavLink
              to="/work"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >Work
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >About
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >Contact
            </NavLink>
          </div>
        </div>
    </>
  );
};

export default Header;
