import { motion, Variants } from "framer-motion";

const About = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary tracking-[0.3em] text-sm font-medium mb-4"
          >
            MOMENTS AND MOVEMENTS
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            Guiding Humanity Into Meaningful Encounters With Jesus
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              We aim to guide humanity into meaningful encounters with Jesus by
              combining the Great Commandment and the Great Commission. This
              approach, which we call "Moments to Movements," is rooted in
              Jesus' disciple-making process outlined in scripture.
            </p>
            <p>
              Our focus is on capturing those divine encounters and personal
              moments with Christ that propel us toward our mission of making
              disciples of all nations. We've witnessed the transformative power
              of authentic intimacy with God across the globe.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">01</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                Encounter
              </h3>
              <p className="text-muted-foreground text-sm">
                Experience genuine moments with Christ that transform your heart
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">02</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                Equip
              </h3>
              <p className="text-muted-foreground text-sm">
                Learn practical methods to share your faith and disciple others
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">03</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                Multiply
              </h3>
              <p className="text-muted-foreground text-sm">
                Create movements that make a lasting impact on the world
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
