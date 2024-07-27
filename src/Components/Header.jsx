import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="flex justify-between max-w-[1200px] mx-auto py-3 px-3 font-medium">
        <div className="font-bold">ProjectX</div>
        <div className="flex gap-x-10">
          <Link>OA Practice</Link>
          <Link>Mock Interview</Link>
          <Link>Resume Builder</Link>
        </div>
        <div className="flex gap-x-3">
          <Link>Login</Link>
          <Link>SignUp</Link>
        </div>
      </div>
      <div className="text-center text-white text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 py-2">
      We've made it even easier to refer qualified candidates to your company with the referral marketplace 🎉
      </div>

    </>
  );
};

export default Header;
