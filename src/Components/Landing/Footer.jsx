import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-y-10 pb-8">
        <div className="text-[180px] text-center font-bold">PROJECT X</div>
        <div className="flex font-medium mx-auto gap-x-20">
          <Link>Product</Link>
          <Link>Privacy</Link>
          <Link>Premium</Link>
          <Link>Terms</Link>
          <Link>Developers</Link>
          <Link>Career</Link>
          <Link>Support</Link>
        </div>
        <div className="text-sm font-semibold text-center">C 2024. ProjectX.inc . v0.1</div>
      </div>
    </div>
  );
};

export default Footer;
