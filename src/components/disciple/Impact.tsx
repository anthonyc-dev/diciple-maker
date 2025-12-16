import { motion } from "framer-motion";

const regions = [
  { name: "Middle East", percentage: 85, countries: "20+ countries" },
  { name: "Africa", percentage: 72, countries: "15+ countries" },
  { name: "Asia Pacific", percentage: 65, countries: "12+ countries" },
  { name: "Americas", percentage: 78, countries: "18+ countries" },
  { name: "Europe", percentage: 60, countries: "10+ countries" },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-hero-accent tracking-[0.3em] text-sm font-medium mb-4">
              GLOBAL IMPACT
            </p>
            <h2 className="text-hero-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Changing Lives Despite Persecution
            </h2>
            <p className="text-hero-foreground/70 text-lg mb-8 leading-relaxed">
              We currently have disciple-makers being trained by underground
              church leaders in areas of intense persecution across the globe.
              Our network spans over 70 countries, reaching the unreached.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-hero-accent text-4xl md:text-5xl font-bold">
                  70+
                </p>
                <p className="text-hero-foreground/60 text-sm mt-2">
                  Countries
                </p>
              </div>
              <div className="text-center">
                <p className="text-hero-accent text-4xl md:text-5xl font-bold">
                  5K+
                </p>
                <p className="text-hero-foreground/60 text-sm mt-2">
                  Disciples
                </p>
              </div>
              <div className="text-center">
                <p className="text-hero-accent text-4xl md:text-5xl font-bold">
                  200+
                </p>
                <p className="text-hero-foreground/60 text-sm mt-2">Churches</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-hero-foreground font-medium">
                    {region.name}
                  </span>
                  <span className="text-hero-foreground/60 text-sm">
                    {region.countries}
                  </span>
                </div>
                <div className="h-2 bg-hero-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-hero-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
