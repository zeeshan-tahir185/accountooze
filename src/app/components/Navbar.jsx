"use client";
import React, { useState } from "react";
import Image from "next/image"; // For optimized image loading
import Link from "next/link"; // Importing Link component from next/link
import { FiMenu } from "react-icons/fi"; // React Icon for the menu icon

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle mobile menu toggle

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Featured", link: "#featured" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "#blog" },
    { name: "Testimonial", link: "#testimonial" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] h-[90px] flex justify-center items-center w-full satoshi_bold">
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div>
          <Image src="/images/logo.svg" alt="Logo" width={54} height={42} />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center cursor-pointer font-bold text-base px-[16px] py-[10px] rounded-[8px] ${
                activeTab === item.name
                  ? "text-[#000000CC] active_tab_bg"
                  : "text-[#00000080] bg-transparent"
              }`}
            >
              {/* Active Dot */}
              {activeTab === item.name && (
                <span className="w-[8px] h-[8px] bg-[#FF5D00] rounded-full mr-2"></span>
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Button for Desktop */}
        <div className="hidden md:block relative cursor-pointer font-bold">
          <button className="bg-[#FF4404] text-white rounded-[12px] cursor-pointer flex items-center justify-center gap-[10px] w-[116px] h-[44px]">
            Login
            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FiMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu - Full screen */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] border-t border-gray-300 bg-white flex flex-col items-center justify-start pt-[20px] z-50">
          <div className="flex flex-col space-y-6 justify-center items-center">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMenuOpen(false); // Close menu after selection
                }}
                className={`text-2xl font-bold px-4 py-2 ${
                  activeTab === item.name
                    ? "text-[#FF5D00]"
                    : "text-[#000000]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)} // Close menu
              className="bg-[#FF4404] text-white rounded-[12px] w-[116px] h-[44px] flex items-center justify-center gap-[10px] mx-auto"
            >
              Login
              <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
