import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">À propos</h2>
      <p>
          Avenor Agency is an agency specialized in managing OnlyFans models.
          We highlight elegance, performance, and the sustainable growth of our talents.
      </p>
    </motion.div>
  );
}
