import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#C6AC8F] h-20 flex justify-center items-center text-center">
        <span className="w-1/2 flex justify-center items-center text-white">
          This is a personalized portfolio website designed for a professional
          photographer to showcase artistic vision, highlight exceptional
          photography work, and present a visually engaging digital experience
          that reflects creativity, professionalism, and storytelling through
          captured moments.
        </span>
      </div>
      <div className="bg-[#5E503F] text-white h-20 flex justify-end items-center text-center">
        <span className="w-1/6 flex p-3">
          Registered Brand™ | Unauthorized Use or Reproduction of Content is
          Strictly Prohibited.
        </span>
      </div>
      <div className="bg-[#3b3228] text-white p-1">
        <span className="">© 2026 All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
