import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import Location from "@/components/about/Location";

const About = () => {
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

  const statements = [
    {
      bold: "WE ARE SHEEP AMONG WOLVES.",
      text: "We are servants who seek the altar, not the stage.",
    },
    {
      bold: "WE OFFER OUR BODIES.",
      text: "To love Him so much that nothing else matters. He is worth it all.",
    },
    {
      bold: "WE WILL DO WHATEVER IT TAKES TO REACH THE UNREACHED.",
      text: "To reach people no one is reaching, we'll have to do things no one is doing.",
    },
    {
      bold: "WE ARE HOLY THROUGH THE POWER OF THE SPIRIT.",
      text: "To be set apart with integrity honors God and inspires people.",
    },
    {
      bold: "WE GIVE UP THINGS WE LOVE FOR THINGS WE LOVE EVEN MORE.",
      text: "It's an honor to sacrifice for Christ.",
    },
    {
      bold: "WE EXIST FOR GOD AND PEOPLE.",
      text: "If we don't love God radically, we have nothing.",
    },
    {
      bold: "WE ARE FAITH-FILLED, MULTIPLYING, OBEDIENT RISK-TAKERS FOR JESUS.",
      text: "We won't insult God with small thinking and safe living.",
    },
    {
      bold: "WE WILL LEAD THE WAY WITH PROFOUND GENEROSITY.",
      text: "Unconditional love is the heartbeat. Unconditional generosity is the blood flow.",
    },
    {
      bold: "WE THRIVE IN ALL CIRCUMSTANCES.",
      text: "Whether well fed or hungry, rich or poor, in persecution or freedom, east or the west, we will be content in Jesus and make disciples.",
    },
    {
      bold: "WE MAKE FAMILY, NOT DESTROY THEM.",
      text: "Family is not an important thing. It's everything.",
    },
    {
      bold: "WE WOULD RATHER NOT MOVE IF HIS PRESENCE ISN'T WITH US.",
      text: "Everything we do is guided by continual, heartfelt communication with God, shaping our life and guiding our journey.",
    },
    {
      bold: "WE WILL PUT PEOPLE BEFORE OURSELVES.",
      text: "We'll forgo seeking human validation and selfish gains, living in faith, and trusting God to provide all we need.",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-hero-foreground/70 text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            There is a Group movement of disciples of Christ rising in the earth
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About <span className="text-hero-accent">DISCIPLE</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-hero-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            We don't just tell stories of the underground church,
            <br />
            <span className="text-hero-accent font-semibold">
              we are the underground church
            </span>
          </motion.p>
        </motion.div>
      </section>

      {/* Roots Section */}
      <motion.section
        className="py-20 bg-muted"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Roots of the Movement
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our journey begins under the oppressive rule of a strict regime,
                expands within the grip of the Taliban in Afghanistan, and now,
                at the heart of Islam a bold cry of Maranatha resounds. Here
                lies our greatest challenge, where the radical influence of
                Wahhabism took root, presenting a modern-day Goliath.
              </p>
              <p>
                Our determination to spread discipleship in this hostile
                environment is a courageous act—a declaration that no
                stronghold, no matter how daunting, is beyond the transformative
                power of Jesus.
              </p>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This mission requires courage akin to a sheep among wolves,
                defying conventional wisdom. We live among enemies, turning even
                persecutors into disciples through the power of sacrificial
                love. This is not a call to arms but a call to worship.
              </p>
              <p>
                Driven by our intimacy with God and our belief in the redemption
                of every soul, His Kingdom extends to every nation, tribe, and
                tongue.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Visionaries Behind the Movement Section */}
      {/* <motion.section
        className="py-20 bg-muted"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The Visionaries Behind the Movement
          </h2>

          <motion.div
            className="flex flex-col lg:flex-row items-center bg-card rounded-lg shadow-lg border border-border p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 lg:pr-8">
              <motion.img
                src="/JESUS.jpg"
                alt="Joshua"
                className="w-56 h-56 rounded-full object-cover border-4 border-hero-accent shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Joshua
              </h3>
              <p className="text-hero-accent font-semibold text-xl mb-4">
                Founder & Lead Disciple-Maker
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Joshua's journey began with a profound calling to reach the
                unreached. With unwavering faith and relentless dedication, he
                established this movement to ignite a passion for discipleship
                across the globe. His vision is to see every nation transformed
                by the power of Christ, fostering communities of believers who
                fearlessly spread the Gospel. He is a beacon of hope, inspiring
                countless individuals to embrace their faith and become active
                participants in the great commission.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center bg-card rounded-lg shadow-lg border border-border p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 lg:pl-8">
              <motion.img
                src="/JESUS.jpg"
                alt="Sarah"
                className="w-56 h-56 rounded-full object-cover border-4 border-hero-accent shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-right">
              <h3 className="text-3xl font-bold text-foreground mb-2">Sarah</h3>
              <p className="text-hero-accent font-semibold text-xl mb-4">
                Co-Founder & Strategic Director
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Sarah brings a strategic mind and compassionate heart to the
                movement. Working alongside Joshua, she has been instrumental in
                developing innovative approaches to disciple-making,
                particularly in challenging environments. Her commitment to
                empowering local leaders and building sustainable ministries has
                been pivotal in expanding the movement's reach and impact
                worldwide. Her leadership ensures the movement's longevity and
                effectiveness in its global mission.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Timeline Section */}
      {/* <motion.section
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
      </motion.section> */}

      {/* Mission Statement */}
      {/* <section className="py-20 bg-hero">
        <motion.div
          className="container mx-auto px-6"
          variants={sectionVariants}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-8 text-center">
            Fueling the Pursuit of Disciple-Making
          </h2>
          <p className="text-hero-foreground/80 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Global Catalytic Ministries (GCM) is an impactful disciple-making
            nonprofit organization with an active presence as the underground
            church among many countries. Our mission is to make disciples in
            some of the world's most challenging places and beyond. Through
            ministry strategies, we focus on meeting needs and building
            relationships with the lost, and guiding them to salvation in
            Christ.
          </p>
        </motion.div>
      </section> */}

      {/* Statements of Faith */}
      <motion.section
        className="py-20 bg-muted"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Statements of Faith
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {statements.map((statement, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="font-bold text-hero-accent mb-2 text-sm">
                  {statement.bold}
                </p>
                <p className="text-muted-foreground text-sm">
                  {statement.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Beliefs */}
      <motion.section
        className="py-20 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Beliefs
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-hero-accent mb-3">
                Scriptures and God
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe the Scriptures, both the Old and New Testaments, are
                inspired by God and serve as the infallible, authoritative rule
                of faith and conduct. We believe in one eternally existent God
                who reveals Himself as Father, Son, and Holy Spirit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-hero-accent mb-3">
                Jesus Christ and Salvation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the deity of Jesus Christ, His virgin birth,
                sinless life, miracles, atoning death, bodily resurrection,
                ascension, intercession for us, His present rule as Head of the
                Church, and His personal return in power and glory. We believe
                that salvation is received through repentance toward God and
                faith in Jesus Christ.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-hero-accent mb-3">
                Humanity and Eternity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the creation of mankind in God's image, the fall
                of man, resulting in universal guilt, and the necessity of
                redemption through Christ. We believe in the resurrection of
                both the saved and the lost; the saved to eternal life with the
                Lord, and the lost to eternal punishment. We also believe in the
                spiritual unity of believers as the body of Christ, the Church,
                tasked with preaching the Gospel to every person.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Location />
      <Footer />
    </div>
  );
};

export default About;
