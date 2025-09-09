import { motion } from "framer-motion";

export default function Join() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="central-container">
        <h2 className="logo-box text-3xl text-gold mb-4">Join the Agency</h2><br />
        <p className="Kugile-nav mb-4">
          Are you ready to take your content creation to the next level? Our agency is always looking for talented creators to collaborate with. By joining us, you'll gain access to expert guidance, marketing support, and a community that helps you grow your audience and maximize your potential.
        </p>
        <p className="Kugile-nav mb-4">
          To become part of our team, simply fill out our application form{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSczh6CMPtdDJD2urSw71jvoRaOVRnX840fyZ4arIrRYtjSQdA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-bold underline"
        >
          here
        </a>. We can’t wait to see what you’ll bring to the agency!
        </p>
      </div>
    </motion.div>
  );
}
