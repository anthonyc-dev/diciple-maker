import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "This course transformed not just my understanding of discipleship, but my entire approach to following Jesus. I've seen three people come to faith in my own neighborhood.",
    name: "Sarah M.",
    location: "California, USA",
    role: "Homeschool Mom",
  },
  {
    quote:
      "In a region where sharing faith can cost you everything, this training gave me the tools and courage to plant an underground community of believers.",
    name: "Ahmed K.",
    location: "Middle East",
    role: "Underground Church Leader",
  },
  {
    quote:
      "I went from being a consumer of faith to a producer of disciples. The practical methods combined with deep spiritual formation changed everything.",
    name: "David L.",
    location: "Sydney, Australia",
    role: "Business Professional",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm font-medium mb-4">
            STORIES
          </p>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lives Transformed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from disciples around the world who are making disciples.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-lg border border-border relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-foreground font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
                <p className="text-primary text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
