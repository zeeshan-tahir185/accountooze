import React from "react";

const AIPowered = () => {
  return (
    <div className="bg-[#F5F5F5] relative">
      <div className="max-w-[1440px]  lg:min-h-[800px] mx-auto px-4 md:px-[90px] flex flex-col lg:flex-row items-center gap-3 lg:gap-0 py-5">
        <div className="flex flex-col gap-2 md:gap-[24px] items-center lg:items-start w-full lg:w-[550px] satoshi_regular text-center lg:text-left">
          <p className="text-[#737373] py-[6px] px-[16px] rounded-[8px] border border-[#737373]">
            Stilll making manual entries?
          </p>
          <h1 className="text-4xl text-[#000000] lg:text-[72px] lg:leading-[75px] font-normal heading_letter_space satoshi_regular">
            Use AI powered Accountooze app to save time etc.
          </h1>

          <div className="flex flex-col sm:flex-row gap-[16px]">
            <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
              Get Started
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
            <button className="cursor-pointer bg-transparent border border-[#262626] font-bold text-[#191923] rounded-[12px] w-[158px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
              Book a Demo
              <span className="w-[6px] h-[6px] bg-[#FF5D00E0] rounded-full"></span>
            </button>
          </div>
        </div>
        <img src="/images/account.svg" alt="" className="lg:absolute bottom-0 right-0 " />
      </div>
    </div>
  );
};

export default AIPowered;
