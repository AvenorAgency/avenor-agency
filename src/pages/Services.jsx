import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">Our Services</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Full account management</li>
        <li>Marketing and fan acquisition</li>
        <li>Content creation and optimization</li>
        <li>24/7 support for creators</li>
      </ul>
    </motion.div>
  );
}
