import { motion } from "framer-motion";

const menOfFaith = [
  {
    name: "Abraham",
    title: "The Father of Faith",
    image: "https://ac3.org/wp-content/uploads/2019/02/abraham.png", // Placeholder
    description:
      "Known for his unwavering faith in God's promises, even when they seemed impossible.",
  },
  {
    name: "Moses",
    title: "The Lawgiver",
    image:
      "https://cms-imgp.jw-cdn.org/img/p/502012484/univ/art/502012484_univ_lsr_lg.jpg", // Placeholder
    description:
      "Led the Israelites out of slavery in Egypt and received the Ten Commandments from God.",
  },
  {
    name: "David",
    title: "The Shepherd King",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrV_0-p2FeseUj2l-sfKzLTAeLrI-BWlOCg&s", // Placeholder
    description:
      "A man after God's own heart, who defeated Goliath and became a great king of Israel.",
  },
  {
    name: "Paul",
    title: "The Apostle to the Gentiles",
    image:
      "https://media.swncdn.com/via/13071-probablyvalentindeboulogne-saintpaulwritinghi.jpg", // Placeholder
    description:
      "Transformed from a persecutor of Christians to one of the most influential apostles.",
  },
];

const FaithGallery = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          A Legacy of Faith
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menOfFaith.map((man, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={man.image}
                alt={man.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {man.name}
                </h3>
                <p className="text-sm text-primary mb-4">{man.title}</p>
                <p className="text-muted-foreground text-sm">
                  {man.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaithGallery;
