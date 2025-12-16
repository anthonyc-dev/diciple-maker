import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const timeline = [
    {
      year: "May 2014",
      title: "Disciple Launches",
      description:
        "Starting under extreme religious persecution, God's movement grew into Afghanistan.",
    },
    {
      year: "Dec 2019",
      title: "Sheep Among Wolves 2",
      description:
        "Studio produced film highlighting GCM's team in volatile regions of the world.",
    },
    {
      year: "Jan 2021",
      title: "Going Worldwide",
      description: "Coaching made available worldwide, from East to the West.",
    },
    {
      year: "Aug 2021",
      title: "Afghanistan Rescue Operations",
      description:
        "GCM helps rescue over 3,000 people, while evading Taliban detection.",
    },
    {
      year: "Dec 2023",
      title: "Providing Safety",
      description:
        "Officially moved our last safe house family out of harm's way in Afghanistan.",
    },
    {
      year: "Feb 2024",
      title: "Moments to Movements",
      description:
        "A fresh message to build intimate moments with God that catalyze global disciple-making movements. Now in 71 countries and growing.",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <p className="text-hero-foreground/70 text-sm tracking-widest uppercase mb-4">
            There is a global movement of disciples of Christ rising in the
            earth
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6">
            About <span className="text-hero-accent">DISCIPLE</span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-3xl mx-auto">
            We don't just tell stories of the underground church,
            <br />
            <span className="text-hero-accent font-semibold">
              we are the underground church
            </span>
          </p>
        </div>
      </section>

      {/* Roots Section */}
      <section className="py-20 bg-muted">
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
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How We Started
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0 w-24">
                  <span className="text-hero-accent font-bold text-sm">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-hero-accent/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-hero-accent rounded-full" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Statements of Faith */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Statements of Faith
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {statements.map((statement, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <p className="font-bold text-hero-accent mb-2 text-sm">
                  {statement.bold}
                </p>
                <p className="text-muted-foreground text-sm">
                  {statement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-background">
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
      </section>

      <Footer />
    </div>
  );
};

export default About;
