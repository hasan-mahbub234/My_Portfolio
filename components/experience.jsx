"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { SlArrowDown } from "react-icons/sl";

export default function Experience() {
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: "work",
      title: "Freelancer",
      company: "Fiverr",
      period: "May 2022 - Present",
      description: [
        "Developed custom websites and web applications for clients worldwide",
        "Specialized in React.js, Next.js, and full-stack development",
        "Implemented pixel-perfect designs from Figma/XD prototypes",
        "Integrated APIs, payment gateways, and third-party services",
        "Delivered SEO-optimized solutions with server-side rendering",
      ],
    },
  ];

  const education = [
    {
      degree: "Masters (M.S.S.)",
      field: "Communication & Journalism",
      institution: "University of Chittagong",
      period: "2023 - 2024",
    },
    {
      degree: "Honors (B.S.S.)",
      field: "Communication & Journalism",
      institution: "University of Chittagong",
      period: "2019 - 2023",
    },
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="pb-20 px-4 sm:px-6 lg:px-8 opacity-0 bg-teal-500/[0.08] antialiased"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary">{edu.field}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
