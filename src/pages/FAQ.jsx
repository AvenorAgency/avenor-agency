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
    {
      question: "Who can join your agency?",
      answer:
        "We work with motivated models, whether they are beginners or already active on OnlyFans. We prioritize quality over quantity: we do not aim to recruit as many models as possible, but to provide personalized support to maximize each model’s chances of success.",
    },
    {
      question: "Do I need to already have an OnlyFans account to join?",
      answer:
        "No. We can assist you from the creation of your account or help optimize an existing one.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We handle account management, marketing strategy, content creation, revenue optimization, and even subscriber message management.",
    },
    {
      question: "How much does it cost to work with you?",
      answer:
        "We mainly work on a percentage basis: we only earn if you earn. This ensures transparent collaboration with no hidden fees.",
    },
    {
      question: "Do I have to show my face?",
      answer:
        "Not necessarily. Many models succeed with partial or anonymous identities. We adapt the strategy according to your boundaries and comfort.",
    },
    {
      question: "How do you protect my privacy?",
      answer:
        "We strictly respect our models’ privacy. All data is secured and no personal information is shared without your consent.",
    },
    {
      question: "Where are you based?",
      answer:
        "Our agency is based in Switzerland, but we work with models from all over the world.",
    },
    {
      question: "How can I apply to join the agency?",
      answer:
        "You just need to fill out the application form on our website or contact us directly via [your contact method]. We receive many applications, but each profile is carefully reviewed.",
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
        <h2 className="logo-box text-3xl text-gold mb-4">FAQ</h2>
        <br />
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
                <p className="Kugile-nav faq-answer mt-2 text-white">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
