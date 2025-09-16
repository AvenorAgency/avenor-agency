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
            At <span className="text-gold font-semibold">Avenor Agency</span>, we redefine what it means to grow 
            in the digital creator economy. Beyond numbers and trends, we build 
            brands with elegance, professionalism, and vision.  
            Every strategy we craft is <span className="font-semibold">tailored to highlight your unique strengths</span>, 
            ensuring sustainable growth and long-lasting impact.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="section-title">Our Mission</h3>
          <p className="Kugile-nav">
            Our mission is simple yet powerful:  
            <span className="font-semibold">to empower creators</span> by providing world-class management, 
            marketing, and brand development services.  
            We combine data-driven strategies with creative storytelling to help 
            our partners <span className="text-gold">reach new levels of success</span> while staying authentic to who they are.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="section-title">Who We Work With</h3>
          <p className="Kugile-nav">
            We collaborate with ambitious <span className="font-semibold">OnlyFans creators</span> who are passionate about their craft 
            and determined to elevate their careers. Whether you’re just starting out 
            or already established, our role is to transform your vision into 
            a <span className="text-gold">profitable and sustainable brand</span>.
          </p>
        </section>

        <section>
          <h3 className="section-title">Our Philosophy</h3>
          <p className="Kugile-nav">
            Success is not accidental — it’s the result of structure, consistency, 
            and a clear growth strategy. At <span className="text-gold font-semibold">Avenor Agency</span>, we see our creators 
            as long-term partners. We grow together, innovate together, 
            and celebrate every milestone as a team.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
