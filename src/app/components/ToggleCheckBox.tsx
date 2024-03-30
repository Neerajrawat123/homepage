import { Dispatch, SetStateAction } from "react";

type ToggleCheckboxProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

    const ToggleCheckbox:( React.FC<ToggleCheckboxProps> ) = ({isDarkMode, setIsDarkMode}) => {

  const handleCheckboxChange = (e: React.MouseEvent<HTMLButtonElement >) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={(e) => {handleCheckboxChange(e)}} className={`relative ${isDarkMode? 'bg-black' : 'bg-blue'} overflow-hidden rounded-3xl  w-28 h-14`}>
      
      <div
        className={`block absolute right-0 bottom-0  m-auto `}>
        <div
          id="star"
          className={`absolute bottom-3 right-16 w-8 h-8 bg-yellow-400 rounded-full transform ${isDarkMode ? 'scale-[40%] bottom-6 translate-x-11' : 'scale-100'} transition-all  duration-300 ease-in-out z-10`}
        >s
          <div className="relative">
            <div className=" left-[3px] top-[-18px]  absolute text-yellow-400 text-6xl line-height-7 transform -translate-x-3 transition duration-300 ease-in-out">
              ★
            </div>
          </div>
          <div
            id="star-2"
            className="absolute  bg-yellow-100 rounded-full transform rotate-[36deg] transition duration-300 ease-in-out"
          >
            <div className="w-2 h-2 left-[9px] top-[-29px] absolute text-yellow-400 text-6xl line-height-7 transform -translate-x-3 transition duration-300 ease-in-out">
              ★
            </div>
          </div>
        </div>
        <div
          id="moon"
          className={`absolute  right-2  w-10 h-10 bg-white rounded-full transition duration-300 ease-in-out ${!isDarkMode ? 'bottom-[-55px]' : 'bottom-3'}`}
        >
          <div
            className={`absolute  right-3 bottom-3 w-10 h-10 rounded-full transition duration-300 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-blue-400'}`}
          ></div>
        </div>
      </div>
    </button>
  );
};

export default ToggleCheckbox;
