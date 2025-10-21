import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col lg:flex-row justify-between items-center gap-[30px]">
      <div className="flex flex-col gap-2 md:gap-[24px] items-center lg:items-start w-full lg:w-[500px] satoshi_regular text-center lg:text-left">
        <p className="text-[#191923] py-[6px] px-[16px] bg-[#F5F5F5] rounded-[8px]">
          Your AI-Powered Accounting Software
        </p>
        <h1 className="text-4xl text-[#000000] lg:text-[72px] lg:leading-[75px] font-normal heading_letter_space">
          AI Powered Accounting No More Data Entry
        </h1>
        <p className="text-[#000000CC]">
          From PDF Bank statement to Profit and Loss. Accountooze can do
          everything at one place. Automates the tedious work, so you can focus
          on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px]">
          <button className="bg-[#FF4404] font-bold text-white rounded-[12px] w-[150px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
            Get Started
            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
          </button>
          <button className="bg-transparent border border-[#262626] font-bold text-[#191923] rounded-[12px] w-[158px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
            Book a Demo
            <span className="w-[6px] h-[6px] bg-[#FF5D00E0] rounded-full"></span>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[610px] min-h-[500px] md:h-[634px] bg-[#F5F5F5] flex justify-center items-center rounded-[18px] px-3 ">
        <Image src="/images/hero_img.svg" alt="hero image" width={333} height={438} />
      </div>
    </div>
  );
};

export default HeroSection;
