import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Comment rejoindre l’agence ?</h3>
          <p>Remplissez simplement le formulaire dans la section Rejoindre.</p>
        </div>
        <div>
          <h3 className="font-semibold">Quels services proposez-vous ?</h3>
          <p>Nous couvrons la gestion complète, le marketing et la création de contenu.</p>
        </div>
        <div>
          <h3 className="font-semibold">Y a-t-il des frais d’entrée ?</h3>
          <p>Non, notre modèle fonctionne sur un partage des revenus.</p>
        </div>
      </div>
    </motion.div>
  );
}
