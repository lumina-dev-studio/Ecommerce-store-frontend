'use client';
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const YouMayBeInterestedInPartTwo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqData: FAQItem[] = [
    {
      question: "My order hasn’t arrived yet. Where is it?",
      answer:
        "How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight.",
    },
    {
      question: "Do you deliver on public holidays?",
      answer: "No, we do not deliver on public holidays. Delivery will resume the next working day.",
    },
    {
      question: "Do you deliver to my postcode?",
      answer: "Yes, we deliver to most postcodes. You can check your eligibility at checkout.",
    },
    {
      question: "Is next-day delivery available on all orders?",
      answer: "Next-day delivery is available on select products. Please check the product page for availability.",
    },
    {
      question: "Do I need to be there to sign for delivery?",
      answer: "Yes, someone needs to be available to sign for the delivery, unless specified otherwise.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery & Return</h2>
      <div className="divide-y divide-gray-200">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`py-4 rounded-lg `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full text-left font-medium focus:outline-none ${
                activeIndex === index ? "text-blue-600" : "text-gray-800"
              }`}
            >
              <span className="font-semibold">{item.question}</span>
              <span>{activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
            </button>
            {activeIndex === index && (
              <p className="my-5 text-gray-500 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayBeInterestedInPartTwo;
