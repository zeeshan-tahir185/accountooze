import React from "react";

const SmartAccounting = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col gap-3 md:gap-[30px] py-5 md:py-[70px] items-center">
      <p className="text-[#191923] satoshi_regular heading_letter_space bg-[#F5F5F5] px-[16px] py-[6px] rounded-[8px]">
        Core Feature
      </p>
      <p className="satoshi_regular heading_letter_space text-xl md:text-[52px] ">
        Smart Accounting Solutions
      </p>
      <div className="flex flex-col md:flex-row flex-wrap gap-[20px] items-center justify-center">
        <div className="w-full sm:w-[295px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature1.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
            AI Bank Statement Converter
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Instantly converts bank statements into easy-to-read formats.
          </p>
        </div>

        <div className="w-full sm:w-[295px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature2.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
           AI Check Reader
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Accurately scans and reads checks, extracting all essential data for efficient financial management.
          </p>
        </div>

        <div className="w-full sm:w-[295px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature3.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
            AI Bill Reader
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Automatically scans and categorizes bills, helping you track expenses and stay organized effortlessly.
          </p>
        </div>

        <div className="w-full sm:w-[295px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature4.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
            AI Bank Transaction Categorization
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Classifies bank transactions into categories for smoother financial tracking.
          </p>
        </div>


        
        <div className="w-full sm:w-[400px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature5.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
           Full Suite Accounting Application
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Comprehensive accounting tool for managing finances seamlessly.
          </p>
        </div>

        <div className="w-full sm:w-[400px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature6.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
            Real-time Reports Generation
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
           Generate up-to-the-minute financial reports, ensuring your business always has accurate, real-time data.
          </p>
        </div>

        <div className="w-full sm:w-[400px] flex flex-col gap-[10px] px-[42px] py-[40px] rounded-[18px] bg-[#F5F5F5] items-start">
          <img src="/images/feature7.svg" alt="" />
          <h2 className="text-2xl font-medium text-[#000000] three_letter_space satoshi_regular">
            Easy Data Export/Import
          </h2>
          <p className="text-[#000000CC] three_letter_space satoshi_regular">
            Seamlessly export and import data in Excel format, making it easy to work with financial data across platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartAccounting;
