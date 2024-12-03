"use client"
import React from 'react';
import { useState } from 'react';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isOpen: false,
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      isOpen: false,
    },
    {
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      isOpen: false,
    },
    {
      question: 'Where can I get some?',
      answer:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => (i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }))
    );
  };

  return (
    <div className="h-max bg-blue-50 py-12 px-4 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-white px-6 py-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform transform ${faq.isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={faq.isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {faq.isOpen && (
              <div className="bg-white px-6 py-4 mt-2 rounded-lg shadow-md">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
