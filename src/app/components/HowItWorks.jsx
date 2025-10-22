import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col py-5 md:py-[50px] gap-3 md:gap-[50px]">
      <div className="flex flex-col gap-2 md:gap-[24px] items-center md:items-start text-center md:text-left w-full md:w-[610px]">
        <p className="text-[#191923] py-[6px] px-[16px] satoshi_regular heading_letter_space bg-[#F5F5F5] rounded-[8px]">
          How It Works
        </p>
        <p className="satoshi_regular heading_letter_space text-xl md:text-[52px] text-black md:leading-[56px]">
          Helps users quickly understand the workflow
        </p>
      </div>
      <div className="flex flex-col gap-[40px] satoshi_regular three_letter_space">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-3 md:gap-[24px] items-center md:items-start text-center md:text-start">
            <p className="flex items-center gap-[5px]">
              <span className="w-[6px] h-[6px] bg-[#FF5D00E0] rounded-full"></span>
              <span className="text-xl font-bold satoshi_bold text-[#00000080]">
                Steps 1
              </span>
            </p>
            <p className="text-lg md:text-[32px] ">Upload Documents</p>
            <p className="text-[#000000CC]">
              Upload your PDF bank statements, invoices, or bills securely to
              Accountooze.ai.
            </p>
            <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px]">
              Get Started
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
          </div>
          <div className="w-full md:w-[520px] bg-[#F5F5F5] flex justify-center items-center rounded-[18px] min-h-[400px]">
            <img src="/images/work1.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-3 md:gap-[24px] items-center md:items-start text-center md:text-start">
            <p className="flex items-center gap-[5px]">
              <span className="w-[6px] h-[6px] bg-[#FF5D00E0] rounded-full"></span>
              <span className="text-xl font-bold satoshi_bold text-[#00000080]">
                Steps 2
              </span>
            </p>
            <p className="text-lg md:text-[32px] ">AI Does the Heavy Lifting</p>
            <p className="text-[#000000CC]">
             Our AI scans, reads, and categorizes every transaction with 99% accuracy.
            </p>
            <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px]">
              Get Started
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
          </div>
          <div className="w-full md:w-[520px] bg-[#F5F5F5] flex justify-center items-center rounded-[18px] min-h-[400px]">
            <img src="/images/work2.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-3 md:gap-[24px] items-center md:items-start text-center md:text-start">
            <p className="flex items-center gap-[5px]">
              <span className="w-[6px] h-[6px] bg-[#FF5D00E0] rounded-full"></span>
              <span className="text-xl font-bold satoshi_bold text-[#00000080]">
                Steps 3
              </span>
            </p>
            <p className="text-lg md:text-[32px] ">Export & Share</p>
            <p className="text-[#000000CC]">
             Download reports instantly in Excel or PDF, or share directly with your accountant.
            </p>
            <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px]">
              Get Started
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
          </div>
          <div className="w-full md:w-[520px] bg-[#F5F5F5] flex justify-center items-center rounded-[18px] min-h-[400px]">
            <img src="/images/work3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
