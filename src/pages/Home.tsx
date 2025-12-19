import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/disciple/Hero";
import About from "@/components/disciple/About";
import Course from "@/components/disciple/Course";
import Impact from "@/components/disciple/Impact";
import Testimonials from "@/components/disciple/Testimonials";
import CTA from "@/components/disciple/CTA";
import JesusSection from "@/components/disciple/JesusSection";
import VerseSection from "@/components/disciple/VerseSection";
import GodMakesDisciples from "@/components/disciple/GodMakesDisciples";
import FaithGallery from "@/components/disciple/FaithGallery";
import { motion, Variants } from "framer-motion";

const howToDisciple = [
  {
    title: "Pray for Guidance",
    step: "Step 1",
    description:
      "Begin with seeking God’s direction. Pray for your own heart, the person you’ll reach out to, and for opportunities to share the gospel.",
  },
  {
    title: "Build Relationships",
    step: "Step 2",
    description:
      "Form genuine connections. Show unconditional love and interest in people’s lives. True discipleship flows out of authentic relationships.",
  },
  {
    title: "Share Your Story",
    step: "Step 3",
    description:
      "Be ready to share how Jesus changed your life. Your testimony can open doors to spiritual conversations without pressure or arguments.",
  },
  {
    title: "Explain the Good News",
    step: "Step 4",
    description:
      "Share the simple gospel: God loves us, sin separates us, Jesus died and rose to save us, and everyone can receive forgiveness through faith in Him.",
  },
  {
    title: "Read the Bible Together",
    step: "Step 5",
    description:
      "Open scripture and discover what it says together. Let God’s Word speak. Ask questions, listen, and encourage personal discovery.",
  },
  {
    title: "Model and Invite Obedience",
    step: "Step 6",
    description:
      "Show what it looks like to follow Jesus in daily life. Walk beside the person as they obey God’s teaching and grow spiritually.",
  },
  {
    title: "Empower Them to Multiply",
    step: "Step 7",
    description:
      "Encourage and equip them to share their own faith and disciple others. The goal is not to make converts, but disciple-makers!",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Course />
      {/* <Impact /> */}
      <JesusSection />
      <VerseSection />
      <GodMakesDisciples />
      {/* Timeline Section */}
      <motion.section
        className="py-20 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How To Disciple
          </h2>
          <div className="max-w-4xl mx-auto">
            {howToDisciple.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-hero-accent font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-hero-accent/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-hero-accent rounded-full" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <FaithGallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
