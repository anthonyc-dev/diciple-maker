import { motion } from "framer-motion";

const JesusSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={"/JESUS.jpg"}
              alt="Jesus Christ"
              className="rounded-lg shadow-lg w-3/4 max-w-xs h-auto mx-auto"
              style={{ display: "block", height: "500px", objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Message from the Master
            </h2>
            <blockquote className="text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 mb-6">
              "Come, follow me, and I will make you fishers of men."
            </blockquote>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Jesus's call to discipleship is a call to a transformed life. It's
              an invitation to a journey of faith, where we learn from Him, live
              like Him, and lead others to Him. Our course is designed to help
              you answer that call and become an effective disciple-maker in
              your community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JesusSection;
