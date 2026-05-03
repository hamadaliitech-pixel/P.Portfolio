import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 h-16 rounded-b-3xl bg-[#C6AC8F] flex justify-between items-center">
      <div className="Logo ml-6 flex justify-center text-3xl">
        <span className="galada-regular px-3 py-1">Thahamad</span>
      </div>
      
      <div className="Nav-Section2 flex justify-evenly items-center gap-10 w-1/3">
        <div className=" bg-[#EAE0D5] px-4 flex items-center h-10 rounded-3xl">
          <button className="font-['IM_Fell_English']">Home</button>
        </div>
        <div className=" bg-[#EAE0D5] px-4 flex items-center h-10 rounded-3xl">
          <button className="font-['IM_Fell_English']">About</button>
        </div>
        <div className=" bg-[#EAE0D5] px-4 flex items-center h-10 rounded-3xl">
          <button className="font-['IM_Fell_English']">Contact Us</button>
        </div>
        <div className=" bg-[#EAE0D5] px-4 flex items-center h-10 rounded-3xl">
          <button className="font-['IM_Fell_English']">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
