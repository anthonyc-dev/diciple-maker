import heroImage from "@/assets/hero-disciples.jpg";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Link } from "lucide-react";

const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Disciples gathering together"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/80 to-transparent" />
      </div>

      {/* Torn Paper Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background"
        style={{
          clipPath:
            "polygon(0 60%, 5% 55%, 10% 70%, 15% 50%, 20% 65%, 25% 45%, 30% 60%, 35% 40%, 40% 55%, 45% 35%, 50% 50%, 55% 30%, 60% 45%, 65% 25%, 70% 40%, 75% 20%, 80% 35%, 85% 15%, 90% 30%, 95% 10%, 100% 25%, 100% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="text-hero-accent text-sm md:text-base tracking-[0.3em] mb-4 font-medium"
          >
            MOVEMENT IS RISING
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-hero-foreground text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
          >
            Making <span className="text-hero-accent">Disciples</span>
            <br />
            Who Make Disciples
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-hero-foreground/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Join a transformative journey of faith, community, and purpose. We
            equip believers to reach the lost and build movements that change
            nations.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/join">
              <Button
                size="lg"
                className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold text-base px-8 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-hero-foreground/50 text-hero-foreground bg-hero-foreground/5 hover:bg-hero-foreground/80 font-semibold text-base px-8"
              >
                Learn More About us
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Side Text for design */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-right"
        >
          <p className="text-hero-foreground/60 text-sm tracking-[0.2em] max-w-xs leading-relaxed">
            THERE IS A GROUP MOVEMENT OF DISCIPLES OF CHRIST RISING IN THE EARTH
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
