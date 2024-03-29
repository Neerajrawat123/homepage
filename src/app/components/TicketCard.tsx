import Image from 'next/image'
import React from 'react'
interface CardInfo {
    imageUrl: string;
    name: string;
    time: string[];
    place: string;
    buttonName: string;
}

function TicketCard({data, isDarkMode}:{data:CardInfo, isDarkMode: boolean}) {
  return (
    <div className='bg-inherit relative'>

    <div className={`px-4 pt-4 w-[257px]  shadow-2xl ${isDarkMode? 'bg-card': 'bg-whiteMedium'} `}>
            <Image
              alt="Sacramento River Cats"
              height="401"
              src={data.imageUrl}
              style={{
                objectFit: "cover",
                backgroundColor: 'red',
              }}
              width="257"
            />
            <hr className={`mt-7 mx-2 border-dashed border-t-[1.8px] ${isDarkMode? 'text-card-bg' : 'text-black'} `} />
            <div className="py-3 flex flex-col justify-center items-center">
              <span className="text-lg font-medium ">{data.name}</span>
              <div className="text-sm divide-x font-normal py-3">
                <span className="px-1">{data.time[0]}</span>
                <span className="px-1">{data.time[1]}</span>
                <span className="px-1">{data.time[2]} PM</span>
                </div>

              <p className={`text-sm ${isDarkMode? 'text-cardFont': 'text-cardFont-light'}  text-center mb-3`}>
              {data.place}
              </p>
              <button className=' text-white h-9 w-full  bg-black font-medium text-xs'>{data.buttonName}</button>
            </div>
          </div>
        <div className={`w-3 h-6  absolute shadow-inner right-[-6px] top-[430px]   rounded-s-full bg-white-grad-col-2`}></div>
            <div className={`w-3 h-6 rounded-e-full shadow-inner absolute left-0 bg-white-grad-col-1 top-[430px]`}></div>
          </div>

  )
}

export default TicketCard