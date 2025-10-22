"use client"
import React, { useState } from 'react';
import { HiPlusSmall, HiMinusSmall  } from "react-icons/hi2";

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is There A Free Trial Available?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor mi sed dui suscipit, eu vehicula urna elementum.'
    },
    {
      question: 'Can I Manage Multiple Businesses?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor mi sed dui suscipit, eu vehicula urna elementum.'
    },
    {
      question: 'How Secure Is My Financial Data?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor mi sed dui suscipit, eu vehicula urna elementum.'
    },
    {
      question: 'What Kind Of Documents Can The AI Read?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor mi sed dui suscipit, eu vehicula urna elementum.'
    },
    {
      question: 'Can I Collaborate With My Team Or Accountant?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor mi sed dui suscipit, eu vehicula urna elementum.'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col py-3 md:py-[50px] items-start gap-3 md:gap-[50px]">
        <p className="text-2xl md:text-[52px] heading_letter_space satoshi_regular text-[#000000] text-start">
         Clear Answers, Smooth <br /> Sailing, Find your FAQ fix here
        </p>
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border-b  border-[#D4D4D8]">
            <button
              onClick={() => toggle(index)}
              className="w-full satoshi_regular three_letter_space py-4 text-left text-[#000000] flex justify-between items-center cursor-pointer text-lg md:text-[24px]"
            >
              {faq.question}
              {open === index ? <HiMinusSmall  /> : <HiPlusSmall />}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                open === index ? 'max-h-[1000px] py-4' : 'max-h-0 p-0'
              }`}
            >
              {open === index && (
                    <div className="text-[#000000CC] satoshi_regular three_letter_space ">{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
