import React from "react";
import { topics } from "../../data/constant";
import { Link } from "react-router-dom";

const Domains = () => {
  return (
    <div className="w-[90vw] mx-auto rounded-lg border text-white border-neutral-500 bg-blue-700 -mt-10">
      <div className="flex flex-col items-center">
        <h1 className="pt-10 text-5xl  font-bold ">What we offer</h1>
        {/* <div className="bg-gradient-to-r from-black via-white to-black h-[1px] w-[75vw] mt-[2vh] "></div> */}

        {topics.map((item) => (
          <div className="flex gap-20 pt-10 pb-10">
            <div className="flex flex-col w-[30vw]  p-[1px]  bg-gradient-to-tl from-white via-black to-white rounded-lg ">
              <div className="bg-gradient-to-tr from-black via-black to-neutral-700   shadow-md shadow-slate-300 flex flex-col items-center p-4 rounded-lg">
                <h1 className="text-center pb-10 text-xl font-semibold">
                  Domains
                </h1>
                {item.domains.map((it) => (
                  <ul className="pb-4">
                    <Link >
                     <p className="font-thin hover:scale-110 transition-all ease-in-out duration-500">{it.topic} </p>
                    </Link>
                    {/* <div className="bg-gradient-to-tr from-slate-100/10 via-slate-100/40 to-slate-100/10 h-[1px] w-[20vw] mt-1 "></div> */}
                  </ul>
                ))}
                <button className="button mt-5">Explore all Domains </button>
              </div>
            </div>

            <div className="flex flex-col w-[30vw] p-[0.9px]  bg-gradient-to-tl from-white via-black to-white rounded-lg ">
              <div className="bg-gradient-to-tl from-black via-black to-neutral-700 shadow-md shadow-slate-300 flex flex-col items-center p-4 rounded-lg">
                <h1 className="text-center pb-10 text-xl font-semibold">
                  Some Topics
                </h1>
                {item.main_topics.map((it) => (
                  <ul className="pb-4">
                    <Link >
                     <p className="font-thin hover:scale-110 transition-all ease-in-out duration-500">{it.topic} </p>
                    </Link>
                    {/* <div className="bg-gradient-to-tr from-slate-100/10 via-slate-100/40 to-slate-100/10 h-[1px] w-[20vw] mt-1 "></div> */}
                  </ul>
                ))}
                <button className="button mt-5">Explore all Topics </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
