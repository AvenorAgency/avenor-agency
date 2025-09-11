import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="central-container">
        <h2 className="logo-box text-3xl text-gold mb-4">Our Services</h2><br />
        <ul className="list-disc list-inside text-gold Kugile-nav">
          <li>Full Account Management</li>
          <li>Marketing Strategy & Fan Acquisition</li>
          <li>Content Creation & Optimization</li>
          <li>Revenue Optimization</li>
          <li>Privacy & Security Management</li>
          <li>Analytics & Custom Reporting</li>
          <li>Private Messaging Management (DMs)</li>
          <li>24/7 Creator Support</li>
        </ul>
      </div>
    </motion.div>
  );
}