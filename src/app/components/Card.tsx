import React from "react";
interface CardInfo {
  imageUrl: string;
  name: string;
  events: number;
  sports: string;
}
function Card({ data, mode }: { data: CardInfo; mode: boolean }) {
  const styles = {
    "bg-color": mode === true ? "bg-card" : "bg-white",
    "bg-secondary-color": mode === true ? "bg-darkMedium" : "bg-whiteMedium",
    "font-col": mode === true ? "text-cardFont" : "text-cardFont-light",
  };
  return (
    <div className={`w-full md:p-3 ${styles["bg-color"]} md:h-[511px] shadow-xl`}>
      <img
        className="w-full h-[385px]"
        alt="Sacramento River Cats"
        src={data.imageUrl}
      />
      <div className="">
        <h3 className="text-lg leading-5 font-medium py-3 px-2 capitalize">{data.name}</h3>
        <div className={`p-2  h-14 flex ${styles["bg-secondary-color"]}`}>
          <div className="w-1/2 flex flex-col gap-1">
            <span className={`text-xs font-normal ${styles["font-col"]}`}>
              Total Events
            </span>
            <span className="text-sm font-medium">{data.events} Events</span>
          </div>
          <div className="w-1/2 flex flex-col gap-1">
          <span className={`text-xs font-normal ${styles["font-col"]}`}>
Sports</span>
            <span className="text-sm capitalize">{data.sports}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
