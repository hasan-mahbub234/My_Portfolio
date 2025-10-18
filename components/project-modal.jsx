"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-lg shadow-2xl border border-border animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <X size={20} className="text-foreground" />
        </button>

        {/* Project Image */}
        <div className="relative w-full h-64 sm:h-120 overflow-hidden rounded-t-lg">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {project.title}
            </h2>
            <p className="text-primary font-mono text-sm">{project.category}</p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Challenges & Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Results */}
          {project.results && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.link && project.link !== "#" && (
              <Button asChild size="lg" className="flex-1 min-w-[200px]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project <ExternalLink size={18} className="ml-2" />
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 min-w-[200px] bg-transparent"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code <Github size={18} className="ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
