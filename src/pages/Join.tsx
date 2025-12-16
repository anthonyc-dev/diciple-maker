import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Join = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for joining! We'll be in touch soon.",
    });

    setFormData({ firstName: "", lastName: "", phone: "", email: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <p className="text-hero-foreground/70 text-sm tracking-widest uppercase mb-4">
            Begin your journey
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6">
            Join the <span className="text-hero-accent">Movement</span>
          </h1>
          <p className="text-xl text-hero-foreground/80 max-w-2xl mx-auto">
            Take the first step in becoming a disciple who makes disciples. Fill
            out the form below to get started.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Registration Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="09xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-border"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold text-lg py-6"
                >
                  {isSubmitting ? "Submitting..." : "Join Now"}
                </Button>
              </form>

              <p className="text-muted-foreground text-sm text-center mt-6">
                By submitting this form, you agree to be contacted about the
                discipleship course.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
