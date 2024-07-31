import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="w-[80vw] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl pt-20 pb-5 font-semibold">Supercharge your career with</h1>
          <h1 className="text-5xl text-blue-800 pb-10 font-extrabold">
            Long Term Mentorship
          </h1>
          <p>
            Land your dream job, role, and company faster than ever with 1:1
            long term mentorship.
          </p>
          <div className="flex gap-8 pt-10 pb-10">
            <button className="border border-black/30 p-3 rounded-lg text-neutral-500 hover:scale-[1.2] transition-all duration-700">
              Book a free trial
            </button>
            <button className="button">Start Practicing </button>
          </div>
        </div>

        <div className="pb-20">
          <ul className="flex flex-wrap gap-5 items-center justify-center">
            <li className="flex items-center gap-2">
              <FaCheckCircle color="0096C7" />{" "}
              <p className="text-sm">Multiple Subjects</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle color="0096C7" />
              <p className="text-sm">
                1000+ Question on each topic
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle color="0096C7" />
              <p className="text-sm">Prepare for Companies </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
