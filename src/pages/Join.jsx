import { motion } from "framer-motion";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSczh6CMPtdDJD2urSw71jvoRaOVRnX840fyZ4arIrRYtjSQdA/viewform?usp=header";

export default function Join() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-3xl text-gold mb-4">Rejoindre l’agence</h2>
      <iframe src={FORM_URL} width="100%" height="600" frameBorder="0" title="Formulaire"></iframe>
      <p className="mt-4">
        Si le formulaire ne s’affiche pas, cliquez{" "}
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline">ici</a>.
      </p>
    </motion.div>
  );
}
