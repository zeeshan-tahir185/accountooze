import React from "react";

const AIMagic = () => {
  return (
    <div className="satoshi_regular md:max-w-[610px] mx-auto px-4 md:px-0 flex flex-col py-5 md:py-[80px] gap-3 md:gap-[24px] items-center text-center">
      <p className="text-[#191923] py-[6px] px-[16px] bg-[#F5F5F5] rounded-[8px]">
        AI + Human = Magic
      </p>
      <p className="text-2xl md:text-[52px] heading_letter_space satoshi_regular text-[#000000] text-center heading_letter_space">
        AI isn't perfect, neither are humans, but together they are unstoppable.
      </p>
      <p className="text-[#000000CC] text-base three_letter_space">
        While our AI provides powerful automation, the nuanced expertise of a
        human accountant is irreplaceable for strategic financial guidance.
      </p>
      <button className="cursor-pointer bg-[#FF4404] font-bold text-white rounded-[12px] w-[248px] h-[43px] flex items-center justify-center gap-[10px] mx-auto">
        Hire a Humam Accoutant
        <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
      </button>
    </div>
  );
};

export default AIMagic;
