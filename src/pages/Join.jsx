import { motion } from "framer-motion";

export default function Join() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">Join the Agency</h2>
      <p>
        To join the agency, please fill out our form{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSczh6CMPtdDJD2urSw71jvoRaOVRnX840fyZ4arIrRYtjSQdA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          here
        </a>.
      </p>
    </motion.div>
  );
}
