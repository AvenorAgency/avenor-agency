import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    {
      name: "Alessandro Rossi",
      phone: "+41 78 353 51 90",
    },
    {
      name: "Luca Moretti",
      phone: "+41 78 213 95 56",
    },
  ];

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const closeOptions = () => {
    setSelectedContact(null);
  };

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="central-container">
        <h2 className="logo-box text-3xl text-gold mb-4">Contact</h2>
        <br />
        <p className="Kugile-nav mb-4 text-center">
          For any questions, write to us at{" "}
          <a href="mailto:contact@avenoragency.com" className="text-red-500 underline">
            contact@avenoragency.com
          </a>
        </p>
        <div className="flex justify-center space-x-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="contact-block bg-gold p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold cursor-pointer"
              onClick={() => handleContactClick(contact)}
            >
              <h3 className="Kugile-nav text-black font-bold">{contact.name}</h3>
              <p className="text-black">{contact.phone}</p>
            </div>
          ))}
        </div>

        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-black p-6 rounded-lg shadow-lg text-center">
              <h3 className="Kugile-nav text-lg font-bold mb-4">{selectedContact.name}</h3>
              <p className="mb-4">{selectedContact.phone}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={`tel:${selectedContact.phone}`}
                  className=" Kugile-nav bg-gold text-black px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-gold"
                >
                  Call
                </a>
                <a
                  href={`sms:${selectedContact.phone}`}
                  className="Kugile-nav bg-gold text-black px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-gold"
                >
                  Message
                </a>
              </div>
              <button
                onClick={closeOptions}
                className="Kugile-nav mt-4 text-red-500 underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}