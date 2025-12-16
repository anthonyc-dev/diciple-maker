import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <motion.section
      className="py-24 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] text-sm font-medium mb-4">
            BEGIN TODAY
          </p>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Become a Disciple Who Makes Disciples?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of believers worldwide who are transforming their
            communities through intentional discipleship. Your journey starts
            here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/join"}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 group"
              >
                Join Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold text-base px-10"
            >
              Contact Us
            </Button>
          </div>

          <p className="mt-8 text-muted-foreground text-sm">
            Free introductory module available • No credit card required
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
