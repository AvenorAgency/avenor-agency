import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I join the agency?",
      answer: "Simply fill out the form in the Join section.",
    },
    {
      question: "What services do you offer?",
      answer: "We provide full management, marketing, and content creation.",
    },
    {
      question: "Are there any entry fees?",
      answer: "No, our model works on revenue sharing.",
    },
  ];

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="central-container">
        <h2 className="logo-box text-3xl text-gold mb-4">FAQ</h2><br />
        <div className="space-y-4 Kugile-nav">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-gold pb-4">
              <div
                className="faq-question flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <span
                  className={`faq-arrow transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ᐳ
                </span>
              </div>
              {openIndex === index && (
                <p className="Kugile-nav faq-answer mt-2 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}