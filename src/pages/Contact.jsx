import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">Contact</h2>
      <p>
        For any questions, write to us at{" "}
        <a href="mailto:contact@avenoragency.com" className="text-gold underline">
          contact@avenoragency.com
        </a>
      </p>
    </motion.div>
  );
}
