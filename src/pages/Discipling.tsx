import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Course from "@/components/Course";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Discipling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Course />
      <Impact />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Discipling;
