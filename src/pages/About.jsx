import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">À propos</h2>
      <p>
        Avenor Agency est une agence spécialisée dans la gestion de modèles OnlyFans. 
        Nous mettons en avant l’élégance, la performance et la croissance durable de nos talents.
      </p>
    </motion.div>
  );
}
