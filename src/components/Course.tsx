import { BookOpen, Users, Globe, Heart, MessageCircle, Compass } from "lucide-react";

const courseModules = [
  {
    icon: Heart,
    title: "Intimacy with God",
    description: "Develop a deeper personal relationship with Christ as the foundation for all ministry."
  },
  {
    icon: BookOpen,
    title: "Biblical Foundations",
    description: "Study Jesus' disciple-making methods and apply them in your context."
  },
  {
    icon: Users,
    title: "Relational Discipleship",
    description: "Learn to build authentic relationships that lead to spiritual transformation."
  },
  {
    icon: MessageCircle,
    title: "Gospel Conversations",
    description: "Master the art of sharing your faith naturally and effectively."
  },
  {
    icon: Compass,
    title: "Leadership Development",
    description: "Grow as a leader who empowers others to lead."
  },
  {
    icon: Globe,
    title: "Movement Multiplication",
    description: "Understand how movements form and how to catalyze them in your community."
  }
];

const Course = () => {
  return (
    <section id="course" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm font-medium mb-4">
            THE COURSE
          </p>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Disciple-Making in the Real World
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive course goes beyond merely imparting methods—it aims to 
            ignite a spiritual awakening that has the potential to shake nations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseModules.map((module, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-xl mb-3">
                {module.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
