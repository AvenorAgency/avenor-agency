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
        <ul className="list-disc ml-6 space-y-2 Kugile-nav">
          Full account management<br />
          Marketing and fan acquisition<br />
          Content creation and optimization<br />
          24/7 support for creators<br />
        </ul>
      </div>
    </motion.div>
  );
}
