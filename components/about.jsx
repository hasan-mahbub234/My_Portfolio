"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid-bg opacity-50"></div>
      <div className="gradient-blur w-72 h-72 bg-cyan-500 top-10 right-20" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <Card className="p-6 sm:p-8 bg-card/80 backdrop-blur-sm border-border">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Software Developer from Chittagong, Bangladesh, with expertise in building modern web
              applications using cutting-edge technologies. My journey in software development has been driven by a
              desire to create pixel-perfect, user-centric solutions that make a real impact.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize in creating seamless
              full-stack applications. My experience spans from building responsive React applications to developing
              robust APIs with Django and FastAPI.
            </p>
            <p>
              I hold a Master's degree (M.S.S.) in Communication & Journalism from the University of Chittagong, which
              has given me a unique perspective on user experience and effective communication in digital products.
            </p>
            <p>
              As a freelancer on Fiverr since May 2022, I've had the opportunity to work on diverse projects, from NGO
              platforms focused on education to complex eCommerce applications, always striving to deliver excellence
              and exceed client expectations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
