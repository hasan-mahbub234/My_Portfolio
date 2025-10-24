import React from "react";
import { projects } from "./constant.jsx";

function Projects() {
  return (
    <section id="projects" className="bg-teal-500/[0.08] antialiased py-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
        My Projects
      </h2>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        A collection of my latest work and creative endeavors
      </p>

      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky flex items-center justify-center py-8"
            style={{
              top: `${40 + index * 30}px`,
            }}
          >
            <div className="max-w-4xl w-full mx-auto px-4">
              {/* Enhanced Card Design */}
              <div
                className={`group relative ${project.color} rounded-2xl overflow-hidden border border-emerald-500/20  transition-all duration-500`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-contain max-lg:object-contain "
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent lg:bg-gradient-to-r lg:from-slate-900/60 lg:via-slate-900/20 lg:to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-6 lg:p-8 relative z-10">
                    <h3 className="text-2xl lg:text-3xl max-md:text-[18px] font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6 max-md:text-[12px]">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700 text-gray-300 hover:bg-slate-700/60 hover:border-slate-600 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Progress/Status Bar */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Completed</span>
                      <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-16 h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-bl-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-teal-400/10 to-transparent rounded-tr-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
