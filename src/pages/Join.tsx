import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

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

    // Insert into Supabase users table, let unique constraint handle duplicates
    const { error } = await supabase.from("users").insert([
      {
        name: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        number: formData.phone,
      },
    ]);

    if (error) {
      // Check for duplicate key violation and show a formal validation message
      if (
        error.code === "23505" ||
        (typeof error.message === "string" &&
          error.message.toLowerCase().includes("duplicate key value"))
      ) {
        toast({
          title: "Duplicate Registration",
          description:
            "This email address or data has already been used to join. Please use a different email address.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description:
            error.message ||
            "An error occurred while submitting. Please try again.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
      return;
    }

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
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-hero-foreground/70 text-sm tracking-widest uppercase mb-4"
          >
            Begin your journey
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Join the <span className="text-hero-accent">Movement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-hero-foreground/80 max-w-2xl mx-auto"
          >
            Take the first step in becoming a disciple who makes disciples. Fill
            out the form below to get started.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <motion.section
        className="py-20 bg-muted"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
                      placeholder="First name"
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
                      placeholder="Last name"
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
                    placeholder="your@example.com"
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
      </motion.section>

      <Footer />
    </div>
  );
};

export default Join;
