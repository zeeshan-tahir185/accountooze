import React from "react";

const Finance = () => {
  return (
    <div className="max-w-[1440px] relative lg:min-h-[800px] mx-auto px-4 md:px-[90px] flex flex-col lg:flex-row items-center gap-3 lg:gap-0 py-5 w-[95%] md:w-full bg-[#FF4404] rounded-[36px]">
      <div className="flex flex-col gap-2 md:gap-[24px] items-center lg:items-start w-full lg:w-[350px] satoshi_regular text-center lg:text-left">
        <p className="text-[#191923] py-[6px] px-[16px] rounded-[8px] bg-[#F5F5F5]">
          Change the Game
        </p>
        <h1 className="text-xl text-[#FBFEF9] lg:text-[52px] lg:leading-[75px] font-normal heading_letter_space satoshi_regular">
          Ready to Transform Your Finances?
        </h1>
<p className="text-[#FBFEF9] text-lg">Join today and experience the power of an AI co-pilot for your business accounting.</p>
        <div className="flex flex-col sm:flex-row gap-[16px]">
          <button className="cursor-pointer border border-white font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
            Sign Up Now
            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
          </button>
        </div>
      </div>
      <img
        src="/images/finance.svg"
        alt=""
        className="lg:absolute bottom-0 right-0 "
      />
    </div>
  );
};

export default Finance;
