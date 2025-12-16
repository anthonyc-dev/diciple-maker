const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] text-sm font-medium mb-4">
            MOMENTS AND MOVEMENTS
          </p>
          
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Guiding Humanity Into Meaningful Encounters With Jesus
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We aim to guide humanity into meaningful encounters with Jesus by combining 
              the Great Commandment and the Great Commission. This approach, which we call 
              "Moments to Movements," is rooted in Jesus' disciple-making process outlined 
              in scripture.
            </p>
            
            <p>
              Our focus is on capturing those divine encounters and personal moments with 
              Christ that propel us toward our mission of making disciples of all nations. 
              We've witnessed the transformative power of authentic intimacy with God across 
              the globe.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">01</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Encounter</h3>
              <p className="text-muted-foreground text-sm">
                Experience genuine moments with Christ that transform your heart
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">02</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Equip</h3>
              <p className="text-muted-foreground text-sm">
                Learn practical methods to share your faith and disciple others
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">03</span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Multiply</h3>
              <p className="text-muted-foreground text-sm">
                Create movements that make a lasting impact on the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
