import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="logo text-5xl font-bold text-gold mb-6">Avenor Agency</h1>
      <p className="Kugile max-w-2xl text-lg">
        We propel OnlyFans models careers through professional management and tailored marketing.
      </p>
    </motion.div>
  );
}
