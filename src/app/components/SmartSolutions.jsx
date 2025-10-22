import React from "react";

const SmartSolutions = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col py-5 md:py-[50px] gap-3 md:gap-[40px] items-center">
      <p className="text-[#191923] py-[6px] px-[16px] bg-[#F5F5F5] rounded-[8px]">
        Fast. Accurate. AI-powered.
      </p>
      <p className="satoshi_regular heading_letter_space text-xl md:text-[52px] text-black md:leading-[56px]">
        Smart Accounting Solutions
      </p>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-[24px] items-center flex-wrap justify-center">
        <div className="flex flex-col gap-[24px] bg-[#F5F5F5] p-[30px] pb-0 w-full md:w-[608px] rounded-[10px] items-center md:items-start text-center md:text-left  md:min-h-[540px]">
          <p className="text-lg md:text-[32px] satoshi_regular">
            PDF Bank statement to Profit and Loss
          </p>
          <p className="text-[#000000CC] text-base satoshi_regular">
            Instantly convert your PDF bank statements into detailed Profit &
            Loss reports with zero manual effort.
          </p>
          <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px] ">
            Get Started
            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
          </button>
          <img src="/images/solution1.svg" alt="" />
        </div>
         <div className="flex flex-col gap-[24px] bg-[#F5F5F5] p-[30px] pb-0 w-full md:w-[608px] rounded-[10px] items-center md:items-start text-center md:text-left md:min-h-[540px]">
          <p className="text-lg md:text-[32px] satoshi_regular">
            Powered by Gemini AI
          </p>
          <p className="text-[#000000CC] text-base satoshi_regular">
           Gemini AI powers smarter, faster, and more accurate accounting, turning complex data into clear, actionable insights.
          </p>
          <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px] ">
            Get Started
            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
          </button>
          <img src="/images/solution2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SmartSolutions;
