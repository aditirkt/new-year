"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Is the New Year Celebration open to everyone?",
      answer: "Yes, it's open to all individuals and families.",
    },
    {
      question: "What is special about the celebrations?",
      answer:
        "Interactive activities, cultural performances, and midnight Aarti.",
    },
    {
      question: "What should I wear?",
      answer:
        "Comfortable, modest attire suitable for a spiritual setting.",
    },
    {
      question: "Are children allowed?",
      answer: "Yes, the event includes family-friendly activities.",
    },
    {
      question: "Is there an admission fee?",
      answer: "Yes, please purchase tickets in advance.",
    },
  ];

  return (
    <div className="container px-6 py-10 mx-auto">
      <div data-aos="fade-in" >
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full focus:outline-none"
            >
              <div className="flex items-center">
                <svg
                  className={`flex-shrink-0 w-6 h-6 text-rose-500 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={activeIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  {faq.question}
                </h1>
              </div>
            </button>

            {activeIndex === index && (
              <div className="mt-4 pl-10">
                <p className="text-gray-500 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
