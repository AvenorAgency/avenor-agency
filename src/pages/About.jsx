import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="central-container">
        <h2 className="logo-box text-3xl text-gold mb-4">About Us</h2><br />
        <section className="mb-6">
          <h3 className="section-title">What Makes Us Different</h3>
          <p className="Kugile-nav">
            At Avenor Agency, we focus on elegance, professionalism, and sustainable growth. 
            Our team is dedicated to providing tailored strategies that maximize your potential.
          </p>
        </section>
        <section className="mb-6">
          <h3 className="section-title">Our Mission</h3>
          <p className="Kugile-nav">
            Our mission is to empower creators by offering world-class management and marketing services.
          </p>
        </section>
        <section>
          <h3 className="section-title">Who We Work With</h3>
          <p className="Kugile-nav">
            We collaborate with OnlyFans models who are passionate about their craft and ready to elevate their careers.
          </p>
        </section>
      </div>
    </motion.div>
  );
}