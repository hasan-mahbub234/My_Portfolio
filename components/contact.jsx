"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hasan.mahbub009@gmail.com",
      link: "mailto:hasan.mahbub009@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1629 722365",
      link: "tel:+8801629722365",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chittagong, Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/hasan-mahbub766",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hasan-mahbubul",
    },
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to discussing new
          projects. Whether you have a question or just want to say hi, feel
          free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-border space-y-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-0 mb-0">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <info.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <p className="text-muted-foreground mb-3">
              Follow me on social media to stay updated with my latest projects
              and insights.
            </p>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} className="mr-2" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border space-y-6">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Mahbubul Hasan. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
