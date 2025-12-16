import { motion } from "framer-motion";
import BgImage from "@/assets/hero-disciples.jpg"; // Placeholder

const GodMakesDisciples = () => {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It is God Who Makes Disciples
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            While we are called to go and make disciples, we must remember that
            it is God who ultimately does the work of transformation. We are His
            vessels, His instruments of grace. Our role is to faithfully plant
            and water the seeds of the Gospel, but it is God who gives the
            growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GodMakesDisciples;
