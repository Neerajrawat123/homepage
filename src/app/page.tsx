/**
 * v0 by Vercel.
 * @see https://v0.dev/t/An9Rv7Uxcz3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

'use client'

import Card from "./components/Card";
import { SportsCardData, ticketData } from "./util";
import TicketCard from "./components/TicketCard";
import { useState } from "react";
import ToggleCheckbox from "./components/ToggleCheckBox";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
    <div className ={isDarkMode? 'bg-dark text-white' : 'bg-whiteMedium text-black'}>
      <div className="py-16 md:ps-8 px-4 md:px-24 lg:px-20">
        <div className="flex w-full justify-between ">

        <h2 className="text-2xl leading-9 font-bold mb-6 border-b-2 w-20 border-blue">
          Sports
        </h2>
        
          <ToggleCheckbox isDarkMode={isDarkMode} setIsDarkMode ={setIsDarkMode}/>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-12 ">
          {SportsCardData.map((card, index) => (
            <Card data={card} key={index} mode={isDarkMode} />
          ))}

          <div className={`p-2 ${isDarkMode? 'bg-card': 'bg-white'} bg-card space-y-2`}>
            <div className="text-xs  tracking-widest relative">
              <span className="bg-black font-semibold text-white px-4 py-1 absolute right-0">
                Ad
              </span>
              <img
                alt="Advertisement"
                className="w-full"
                src="/addPic.png"
                width="218"
              />
            </div>
            <div className="py-6 px-2">
              <h3 className="text-xl leading-6 font-semibold">
                Advertisement title
              </h3>
              <p className={`text-xs font-normal  leading-5 mt-3 ${isDarkMode?'text-cardFont' : 'text-cardFont-light'} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-4 flex justify-center">
          <button className="bg-blue md:py-[10px] md:px-[30px] rounded-sm">
            See More
          </button>
        </div>

        <div className={` bg-gradient-to-b ${isDarkMode ? ' from-dark-grad-col-1 to-dark-grad-col-2' : 'from-white-grad-col-1 to-white-grad-col-2'} pb-12  mt-2 flex items-center justify-center `}>
          <div className="">
            <div className="flex justify-center flex-col  mt-2 items-center md:gap-8 md:px-24 md:pt-14 md:pb-6 ">
              <h2 className="text-2xl md:text-5xl font-bold text-center">
                Collection Spotlight
              </h2>

              <p className="text-sm hidden md:block mb-6 text-center">
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </p>
            </div>

            <div className="flex items-center  md:px-20 md:gap-[77px]">
              <div className="border-[1px] hidden md:block border-blue px-2 py-2">
                <img className="h-5 w-3" src="/right.svg" alt="" />
              </div>
              <div className="grid grid-cols-1 pt-6 md:grid-cols-3 gap-12 md:w-[850px]">
                {ticketData.map((card, index) => (
                  <TicketCard data={card} key={index} isDarkMode={isDarkMode} />
                ))}
              </div>
              <div className="border-[1px] hidden md:block border-blue px-2 py-2">
                <img className="h-5 w-3" src="/left.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
