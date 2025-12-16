import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BibleVerse from "@/components/about/BibleVerse";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/021/902/036/small/mountain-majesty-artistic-silhouette-of-crucifix-cross-against-sunset-sky-photo.jpg"
            }
            alt="Disciples gathering together"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-hero/60 to-hero" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 text-center relative z-10 pt-20"
        >
          <p className="text-hero-foreground/70 text-sm md:text-base tracking-widest uppercase mb-6 animate-fade-in">
            There is a global movement of disciples of Christ rising in the
            earth
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-hero-foreground mb-8 leading-tight">
            Making <span className="text-hero-accent">Disciples</span>
            <br />
            Who Make Disciples
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/80 max-w-2xl mx-auto mb-12">
            Join a transformative journey of faith, community, and purpose. We
            equip believers to reach the lost and build movements that change
            nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discipling">
              <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold text-lg px-8 py-6">
                Explore the Course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button className="border border-hero-foreground/30 text-hero-foreground bg-transparent hover:bg-hero-foreground/10 font-semibold text-lg px-8 py-6">
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
        {/* Torn Paper Effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{
            clipPath:
              "polygon(0 60%, 5% 55%, 10% 70%, 15% 50%, 20% 65%, 25% 45%, 30% 60%, 35% 40%, 40% 55%, 45% 35%, 50% 50%, 55% 30%, 60% 45%, 65% 25%, 70% 40%, 75% 20%, 80% 35%, 85% 15%, 90% 30%, 95% 10%, 100% 25%, 100% 100%, 0 100%)",
          }}
        />

        {/* Decorative elements */}
      </section>

      {/* Features Section */}
      <motion.section
        className="py-24 bg-muted"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Equipping believers around the world to make disciples in every
              nation, tribe, and tongue.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-hero-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Practical Training
              </h3>
              <p className="text-muted-foreground">
                Learn Jesus' disciple-making process through real-world
                application.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-hero-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground">
                Connect with a global network of disciples committed to the
                Great Commission.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-hero-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Global Impact
              </h3>
              <p className="text-muted-foreground">
                Active in 71+ countries, reaching the unreached in hostile
                environments.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-hero-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Transformation
              </h3>
              <p className="text-muted-foreground">
                Experience spiritual awakening that has the potential to shake
                nations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-24 bg-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-5xl md:text-6xl font-bold text-hero-accent mb-2">
                71+
              </p>
              <p className="text-hero-foreground/80 text-lg">
                Countries Reached
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-5xl md:text-6xl font-bold text-hero-accent mb-2">
                3,000+
              </p>
              <p className="text-hero-foreground/80 text-lg">People Rescued</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-5xl md:text-6xl font-bold text-hero-accent mb-2">
                829
              </p>
              <p className="text-hero-foreground/80 text-lg">
                Churches Planted
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-muted"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Take the first step in becoming a disciple who makes disciples. Join
            our practical course and be part of a global movement.
          </p>
          <Link to="/join">
            <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold text-lg px-10 py-6">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
