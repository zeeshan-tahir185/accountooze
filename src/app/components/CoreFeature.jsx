import Image from "next/image";
import React from "react";

const CoreFeature = () => {
  return (
    <div className=" bg-[#191923]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col gap-3 md:gap-[50px] pt-3 md:pt-[50px]">
        <p className="text-2xl md:text-[52px] heading_letter_space satoshi_regular text-[#FBFEF9] text-center">
          Core Features which can <br /> save your 100+ hours
        </p>
        <img src="/images/feature_img.svg" alt="feature image" />
      </div>
    </div>
  );
};

export default CoreFeature;
