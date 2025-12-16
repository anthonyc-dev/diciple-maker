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

const Discipling = () => {
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
      <FaithGallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Discipling;
