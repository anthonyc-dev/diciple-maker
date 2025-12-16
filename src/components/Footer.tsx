import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-hero-foreground font-bold text-2xl mb-4">
              <span className="text-hero-accent">D</span>ISCIPLING
            </h3>
            <p className="text-hero-foreground/60 leading-relaxed max-w-md">
              A practical course in becoming a disciple who makes disciples.
              Transforming lives and creating movements across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-hero-foreground font-semibold mb-4 text-sm tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-hero-foreground/60 hover:text-hero-accent transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#course"
                  className="text-hero-foreground/60 hover:text-hero-accent transition-colors text-sm"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-hero-foreground/60 hover:text-hero-accent transition-colors text-sm"
                >
                  Global Impact
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-hero-foreground/60 hover:text-hero-accent transition-colors text-sm"
                >
                  Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-hero-foreground font-semibold mb-4 text-sm tracking-wider">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-hero-foreground/60 text-sm">
                <Mail className="w-4 h-4 text-hero-accent" />
                info@discipling.org
              </li>
              <li className="flex items-center gap-3 text-hero-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-hero-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-hero-foreground/60 text-sm">
                <MapPin className="w-4 h-4 text-hero-accent mt-0.5" />
                Global Ministry Network
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/40 text-sm">
            © 2024 Discipling Disciples. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-hero-foreground/40 hover:text-hero-accent transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-hero-foreground/40 hover:text-hero-accent transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
