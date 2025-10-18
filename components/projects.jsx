"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import ProjectModal from "./project-modal";

export default function Projects() {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Wemasomo - NGO Platform",
      category: "Web Application",
      description:
        "Developed a comprehensive web application for an NGO focused on female health and education. Features topic descriptions with multimedia content and AI assistance for enhanced user support.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solve1-kZFsT5e9IpcmZT8sHbXgN1soMVCYe4.png",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "AI Integration"],
      link: "https://wemasomo.com",
      features: [
        "Comprehensive topic descriptions with graphical images and videos",
        "AI-powered assistance for user queries",
        "Firebase backend for real-time data management",
        "Responsive design for all devices",
        "Content management system for easy updates",
      ],
      challenges:
        "The main challenge was integrating AI assistance seamlessly while maintaining fast load times and ensuring the platform remained accessible to users with varying internet speeds.",
      results:
        "Successfully launched a platform that serves thousands of users, providing valuable health and education resources with an intuitive interface and AI-powered support.",
    },
    {
      title: "Bullman Equipments - eCommerce",
      category: "Mobile Application",
      description:
        "Built a mobile eCommerce application frontend from Figma prototypes. Managed 1,000+ products with API integration, implemented Stripe payment gateway, and streamlined order management.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bull2-4pgeaMmW35Bwc1nPK3d9deNJVTpwEF.png",
      technologies: [
        "React Native",
        "Stripe",
        "API Integration",
        "Mobile Development",
      ],
      link: "#",
      features: [
        "Efficient management of 1,000+ products",
        "Stripe payment gateway integration",
        "Streamlined order management system",
        "Product search and filtering",
        "User authentication and profile management",
        "Shopping cart and wishlist functionality",
      ],
      challenges:
        "Managing a large product catalog while maintaining smooth performance on mobile devices required careful optimization of API calls and implementing efficient caching strategies.",
      results:
        "Delivered a high-performance mobile app that handles thousands of products seamlessly with secure payment processing and excellent user experience.",
    },
    {
      title: "EG Gold - Product Showcase",
      category: "Web Application",
      description:
        "Created an elegant product showcase website with responsive design, featuring premium gold products with sophisticated UI/UX and smooth animations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minimalist%20Neutral%20Multi%20Device%20Computer%20Mockup%20Website%20Launch%20Instagram%20Post%20%282%29-PQ616OOuIHnFc6ghMdf6AlSFP4P1Nw.png",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design", "GSAP"],
      link: "#",
      features: [
        "Elegant product showcase with high-quality imagery",
        "Smooth animations using GSAP",
        "Fully responsive design",
        "Product detail pages with zoom functionality",
        "Contact form integration",
      ],
      challenges:
        "Creating a luxurious feel while maintaining fast load times required optimizing images and implementing lazy loading strategies.",
      results:
        "Built a visually stunning website that effectively showcases premium products with smooth animations and excellent performance across all devices.",
    },
    {
      title: "Multi-Vendor eCommerce Platform",
      category: "Full-Stack Application",
      description:
        "Developed a full-featured eCommerce platform with shopping cart, user authentication, product management, and secure checkout process.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minimalist%20Neutral%20Multi%20Device%20Computer%20Mockup%20Website%20Launch%20Instagram%20Post%20%289%29-4izgjOlQ0bAM3Ak0UohG6SS3nogC2V.png",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Authentication",
        "Payment Integration",
      ],
      link: "#",
      features: [
        "Multi-vendor support with separate dashboards",
        "Advanced product management",
        "Secure user authentication",
        "Shopping cart with real-time updates",
        "Order tracking and management",
        "Admin panel for platform management",
      ],
      challenges:
        "Building a scalable multi-vendor system required careful database design and implementing role-based access control for different user types.",
      results:
        "Created a robust eCommerce platform that supports multiple vendors with comprehensive management tools and secure payment processing.",
    },
    {
      title: "FitZone Gym Management App",
      category: "Mobile Application",
      description:
        "Built a comprehensive gym management mobile application with partner management, membership tracking, and real-time updates.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eastgold2-DXx5qicNTVmHsIcF2Rb7DfxJnZzxKc.png",
      technologies: [
        "React Native",
        "Firebase",
        "Real-time Database",
        "Mobile UI",
      ],
      link: "#",
      features: [
        "Partner and gym management",
        "Membership tracking and renewals",
        "Real-time notifications",
        "Workout plans and scheduling",
        "Payment processing",
        "Analytics dashboard",
      ],
      challenges:
        "Implementing real-time synchronization across multiple devices while maintaining data consistency required careful Firebase configuration and offline support.",
      results:
        "Delivered a feature-rich gym management app that streamlines operations and improves member engagement with real-time updates and comprehensive tracking.",
    },
    {
      title: "Bullman Fitness Equipment Store",
      category: "eCommerce Website",
      description:
        "Created a professional fitness equipment e-commerce site with product categories, equipment like dumbbells, weight plates, and gym mats.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minimalist%20Neutral%20Multi%20Device%20Computer%20Mockup%20Website%20Launch%20Instagram%20Post%20%284%29-7lmSaXFpfUVgBUgasFcqZkMGHR9Ome.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "API Development",
        "Responsive Design",
      ],
      link: "#",
      features: [
        "Organized product categories",
        "Advanced filtering and search",
        "Product comparison feature",
        "Customer reviews and ratings",
        "Wishlist functionality",
        "Responsive design for all devices",
      ],
      challenges:
        "Creating an intuitive navigation system for a large product catalog while maintaining a clean, professional design required careful UX planning.",
      results:
        "Built a user-friendly fitness equipment store with excellent product discovery features and smooth shopping experience.",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-grid-bg opacity-50"></div>
        <div
          className="gradient-blur w-80 h-80 bg-teal-500 top-20 left-10"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="gradient-blur w-72 h-72 bg-cyan-500 bottom-20 right-20"
          style={{ animationDelay: "5s" }}
        ></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:shadow-cyan-600/30 hover:shadow-xl transition-all duration-300 group cursor-pointer gap-0 py-0"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden aspect-video mt-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-tl-xl rounded-tr-xl"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
