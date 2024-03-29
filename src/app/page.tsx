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

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  return (
    <div className ={isDarkMode? 'bg-dark text-white' : 'bg-whiteMedium text-black'}>
      <div className="py-16 ps-8 md:px-32 lg:px-24">
        <h2 className="text-2xl leading-9 font-bold mb-6 border-b-2 w-20 border-blue">
          Sports
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-12 ">
          {SportsCardData.map((card, index) => (
            <Card data={card} key={index} mode={isDarkMode} />
          ))}

          <div className="p-2 bg-card space-y-2">
            <div className="text-xs  tracking-widest relative">
              <span className="bg-black font-semibold text-white px-4 py-1 absolute right-0">
                Ad
              </span>
              <img
                alt="Advertisement"
                height="200"
                src="/unnamed (1) 1.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="py-6 px-2">
              <h3 className="text-xl leading-6 font-semibold">
                Advertisement title
              </h3>
              <p className="text-xs font-normal leading-5 mt-3 text-cardFont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-4 flex justify-center">
          <button className="bg-blue py-[10px] md:px-[30px] rounded-sm">
            See More
          </button>
        </div>

        <div className={` bg-gradient-to-b ${isDarkMode ? ' from-dark-grad-col-1 to-dark-grad-col-2' : 'from-white-grad-col-1 to-white-grad-col-2'} pb-12  mt-2 flex items-center justify-center `}>
          <div className="">
            <div className="flex justify-center flex-col  mt-2 items-center gap-8 px-24 pt-14 pb-6 ">
              <h2 className="text-3xl md:text-5xl font-bold text-center">
                Collection Spotlight
              </h2>

              <p className="text-sm mb-6 text-center">
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </p>
            </div>

            <div className="flex items-center px-20 gap-[77px]">
              <div className="border-[1px] border-blue px-2 py-2">
                <img className="h-5 w-3" src="/right.svg" alt="" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[850px]">
                {ticketData.map((card, index) => (
                  <TicketCard data={card} key={index} />
                ))}
              </div>
              <div className="border-[1px] border-blue px-2 py-2">
                <img className="h-5 w-3" src="/left.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
