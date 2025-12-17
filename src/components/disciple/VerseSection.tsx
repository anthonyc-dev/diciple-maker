import { motion } from "framer-motion";

const VerseSection = () => {
  return (
    <section
      className="py-32 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(/1.png)` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-6 text-center relative">
        <motion.p
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          "I am the way and the truth and the life. No one comes to the Father
          except through me."
        </motion.p>
        <motion.p
          className="text-xl text-white/80 mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          John 14:6
        </motion.p>
      </div>
    </section>
  );
};

export default VerseSection;
