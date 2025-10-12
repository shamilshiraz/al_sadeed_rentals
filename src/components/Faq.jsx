import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question:
      "Can I Request A Driver Who Speaks A Specific Language Other Than English And Arabic?",
    answer:
      "Yes. We can arrange drivers fluent in other languages upon request, subject to availability.",
  },
  {
    question: "Are There Eco-Friendly Or Electric Vehicle Options Available?",
    answer: "Yes. We provide eco-friendly and electric vehicle options on request.",
  },
  {
    question: "Can I Hire A Chauffeur For Photography Or Filming Purposes In Doha?",
    answer: "Yes. We offer chauffeurs for photography, filming, and production support.",
  },
  {
    question: "Do You Offer Services Tailored To Cultural Or Culinary Tours?",
    answer: "Yes. We provide tailored cultural and culinary tours with knowledgeable chauffeurs.",
  },
  {
    question: "Can I Request A Female Driver For Privacy Or Cultural Considerations?",
    answer: "Yes. Female chauffeurs can be arranged upon request for your comfort and privacy.",
  },
  {
    question: "Do You Provide Child Car Seats Or Booster Seats?",
    answer: "Yes. Child car seats and booster seats are available to ensure family safety.",
  },
  {
    question:
      "Can I Book Luxury Cars For Weddings, VIP Events, Or Desert Excursions?",
    answer:
      "Yes. We provide luxury cars and chauffeurs for weddings, VIP events, and private excursions.",
  },
  {
    question:
      "Do You Provide Airport Concierge Or Fast-Track Immigration Assistance?",
    answer:
      "Yes. We offer concierge services, meet-and-greet, and fast-track immigration assistance.",
  },
  {
    question: "What Payment Methods Are Accepted?",
    answer:
      "Yes. We accept multiple payment methods including credit cards, online transfers, and cash.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-[#cdaf8c] font-medium">
            NEED ANSWERS?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full text-left text-gray-900 font-medium text-base md:text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm md:text-base text-[#cdaf8c]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
