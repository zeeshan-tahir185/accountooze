"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] ">
      <div className="max-w-[1440px] mx-auto p-3 md:p-[36px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <div className="flex flex-col justify-between items-center md:items-start gap-3 md:gap-[36px]">
            <h1 className="text-4xl md:text-[96px] text-[#050505]">
              Accountooze
            </h1>
            <button className="bg-[#FF4404] text-white px-[24px] py-[12px] rounded-[12px] font-medium hover:bg-[#e64d00] transition flex items-center gap-[10px]">
              Contact Us
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
          </div>

          {/* Middle Badges */}
          <div className="flex flex-wrap gap-[10px] w-full md:w-[550px] justify-center md:justify-end">
            {[
              "AI Powered",
              "No More Data Entry",
              "Secure & Private",
              "Save 100+ Hours",
              "Export Ready",
            ].map((item, index) => (
              <div
                key={index}
                className="w-[172px] h-[34px] text-[12px] rounded-[8px] text-[#000000CC] satoshi_regular three_letter_space flex justify-center items-center bg-[#0000000D]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <p className="text-[#000000] text-[24px] mt-3 md:mt-[30px] text-center md:text-left">
          hello@sansbrothers.com
        </p>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-sm text-center md:text-left">
          <div>
            <p className="text-[#000000] satoshi_bold mb-3 font-bold text-[24px]">
              Services
            </p>
            <ul className="space-y-1 font-bold text-xl text-[#000000B2]">
              <li>Cleaning</li>
              <li>Move in/out cleaning</li>
              <li>Post renovation</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] satoshi_bold mb-3 font-bold text-[24px]">
              Our Company
            </p>
            <ul className="space-y-1 font-bold text-xl text-[#000000B2]">
              <li>Our Mission</li>
              <li>Career</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] satoshi_bold mb-3 font-bold text-[24px]">
              Social Media
            </p>
            <ul className="space-y-1 font-bold text-xl text-[#000000B2]">
              <li>Instagram @omahresik</li>
              <li>X @omahresik__</li>
              <li>Tiktok : Omah Resik</li>
            </ul>
          </div>

          <div>
            <p className="text-[#000000] satoshi_bold mb-3 font-bold text-[24px]">
              Omah Resik
            </p>
            <ul className="space-y-1 font-bold text-xl text-[#000000B2]">
              <li>+12 345 678 9</li>
              <li>Ponorogo, Indonesia</li>
              <li>09.00 AM - 05.00 PM</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-xs text-gray-500 pt-4">
          <p className="text-[#444444] font-medium underline text-center md:text-left">
            Copyright 2025 omahresik all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
