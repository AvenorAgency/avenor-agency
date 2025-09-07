import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">Nos Prestations</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Gestion complète du compte</li>
        <li>Marketing et acquisition de fans</li>
        <li>Création et optimisation de contenu</li>
        <li>Support 24/7 pour les modèles</li>
      </ul>
    </motion.div>
  );
}
