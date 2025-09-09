import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">How can I join the agency?</h3>
          <p>Simply fill out the form in the Join section.</p>
        </div>
        <div>
          <h3 className="font-semibold">What services do you offer?</h3>
          <p>We provide full management, marketing, and content creation.</p>
        </div>
        <div>
          <h3 className="font-semibold">Are there any entry fees?</h3>
          <p>No, our model works on revenue sharing.</p>
        </div>
      </div>
    </motion.div>
  );
}
