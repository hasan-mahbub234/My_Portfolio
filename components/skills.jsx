"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { VscArrowDown } from "react-icons/vsc";

export default function Skills() {
  const containerRef = useRef(null);
  const trunkRef = useRef(null);
  const [visibleBranches, setVisibleBranches] = useState([]);
  const [trunkProgress, setTrunkProgress] = useState(0);
  const [currentActiveBranch, setCurrentActiveBranch] = useState(-1);

  useEffect(() => {
    let maxScrollProgress = 0;

    const handleScroll = () => {
      if (!trunkRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const trunk = trunkRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollTop - containerTop + windowHeight * 0.5) / containerHeight
        )
      );

      if (scrollProgress > maxScrollProgress) {
        maxScrollProgress = scrollProgress;
        trunk.style.height = `${maxScrollProgress * 100}%`;
        setTrunkProgress(maxScrollProgress);

        // Update current active branch based on trunk progress
        const branchPositions = skillCategories.map((_, index) => {
          return (index + 0.5) / skillCategories.length;
        });

        let activeIndex = -1;
        for (let i = branchPositions.length - 1; i >= 0; i--) {
          if (maxScrollProgress >= branchPositions[i]) {
            activeIndex = i;
            break;
          }
        }
        setCurrentActiveBranch(activeIndex);
      }
    };

    const branchPositions = skillCategories.map((_, index) => {
      return (index + 0.5) / skillCategories.length;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const branchIndex = parseInt(entry.target.dataset.index);

            const checkTrunkPosition = () => {
              if (trunkProgress >= branchPositions[branchIndex]) {
                setVisibleBranches((prev) => {
                  if (!prev.includes(branchIndex)) {
                    return [...prev, branchIndex].sort((a, b) => a - b);
                  }
                  return prev;
                });
              } else {
                setTimeout(checkTrunkPosition, 100);
              }
            };

            checkTrunkPosition();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    const branchElements = document.querySelectorAll(".skill-branch");
    branchElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trunkProgress]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "React JS",
        "Next JS",
        "React Native",
        "Tailwind CSS",
        "GSAP",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "FastAPI"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "Artificial Intelligence",
      skills: [
        "Generative AI",
        "Prompt Engineering",
        "Large Language Models (LLMs)",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Model Fine-tuning",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "GitHub",
        "Project Management",
        "SEO Optimization",
        "API Development",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
    },
  ];

  const hasTrunkReachedBranch = (branchIndex) => {
    const branchPositions = skillCategories.map((_, index) => {
      return (index + 0.5) / skillCategories.length;
    });
    return trunkProgress >= branchPositions[branchIndex];
  };

  // Check if a circle should have light effect
  const shouldCircleLightUp = (branchIndex) => {
    return (
      hasTrunkReachedBranch(branchIndex) && branchIndex < currentActiveBranch
    );
  };

  // Get light color based on branch index
  const getLightColor = (branchIndex) => {
    const colors = [
      "#22c55e", // Green
      "#3b82f6", // Blue
      "#a855f7", // Purple
      "#ec4899", // Pink
      "#f59e0b", // Amber
      "#06b6d4", // Cyan
    ];
    return colors[branchIndex % colors.length];
  };

  // Get gradient colors for the connection line
  const getLineGradient = (branchIndex) => {
    const gradients = [
      "from-green-400/80 to-emerald-300/80",
      "from-blue-400/80 to-sky-300/80",
      "from-purple-400/80 to-fuchsia-300/80",
      "from-pink-400/80 to-rose-300/80",
      "from-amber-400/80 to-yellow-300/80",
      "from-cyan-400/80 to-teal-300/80",
    ];
    return gradients[branchIndex % gradients.length];
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen py-5 px-4 sm:px-6 lg:px-8 overflow-hidden bg-teal-500/[0.08] antialiased"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white">
        Skills & <span className="text-lime-400">Expertise</span>
      </h2>

      {/* Growing Trunk Effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 h-full">
        <div
          ref={trunkRef}
          className="w-[2px] bg-gradient-to-b from-lime-400 via-cyan-400 to-purple-400 transition-all duration-100 relative shadow-lg"
          style={{ height: `${trunkProgress * 100}%` }}
        >
          {/* Light effect around trunk */}
          <div
            className="absolute inset-0 blur-sm bg-gradient-to-b from-lime-400/30 via-cyan-400/30 to-purple-400/30"
            style={{ height: `${trunkProgress * 100}%` }}
          ></div>

          {/* Down Arrow at the tip of the trunk */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 z-30"
            style={{
              opacity: trunkProgress > 0 && trunkProgress < 1 ? 1 : 0,
            }}
          >
            <div className="relative">
              <VscArrowDown className="text-white text-2xl animate-bounce drop-shadow-lg" />
              <div className="absolute inset-0 text-lime-300 animate-pulse blur-sm">
                <VscArrowDown className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="relative">
          {skillCategories.map((category, index) => {
            const isBranchVisible = visibleBranches.includes(index);
            const hasTrunkReached = hasTrunkReachedBranch(index);
            const shouldLightUp = shouldCircleLightUp(index);
            const lightColor = getLightColor(index);
            const lineGradient = getLineGradient(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`skill-branch relative mb-2 transition-all duration-700 ease-out ${
                  isBranchVisible && hasTrunkReached
                    ? index % 2 === 1
                      ? "translate-x-0 opacity-100"
                      : "translate-x-0 opacity-100"
                    : index % 2 === 1
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }`}
                style={{
                  transitionDelay:
                    isBranchVisible && hasTrunkReached
                      ? `${index * 100}ms`
                      : "0ms",
                }}
              >
                {/* Branch Connection to Trunk with Light Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  {/* Light spread effect */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                      shouldLightUp ? "" : ""
                    }`}
                    style={{
                      width: shouldLightUp ? "4rem" : "0rem",
                      height: shouldLightUp ? "4rem" : "0rem",
                      backgroundColor: shouldLightUp
                        ? lightColor
                        : "transparent",
                      opacity: shouldLightUp ? 0.15 : 0,
                      filter: "blur(8px)",
                      transitionDelay: hasTrunkReached
                        ? `${index * 100 + 50}ms`
                        : "0ms",
                    }}
                  ></div>

                  {/* Main circle with light shadow */}
                  <div
                    className={`w-4 h-4 rounded-full transform transition-all duration-500 border-2 ${
                      hasTrunkReached
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    } ${
                      shouldLightUp
                        ? `border-white bg-white shadow-2xl`
                        : "border-lime-300 bg-lime-500 shadow-lg"
                    }`}
                    style={{
                      transitionDelay: hasTrunkReached
                        ? `${index * 100 + 150}ms`
                        : "0ms",
                      boxShadow: shouldLightUp
                        ? `0 0 25px 8px ${lightColor}, 
                           0 0 45px 15px ${lightColor}80,
                           0 0 60px 20px ${lightColor}40,
                           0 4px 20px rgba(0,0,0,0.3)`
                        : "0 4px 12px rgba(0,0,0,0.3)",
                    }}
                  ></div>
                </div>

                {/* Animated Border Line from Circle to Card with Gradient */}
                <div
                  className={`absolute top-1/2 h-[1px] transition-all duration-1000 ease-out ${
                    index % 2 === 1
                      ? "left-1/2 right-0 origin-left"
                      : "left-0 right-1/2 origin-right"
                  } ${
                    isBranchVisible && hasTrunkReached
                      ? "scale-x-100 opacity-80"
                      : "scale-x-0 opacity-0"
                  } bg-gradient-to-r ${lineGradient}`}
                  style={{
                    transitionDelay:
                      isBranchVisible && hasTrunkReached
                        ? `${index * 100 + 300}ms`
                        : "0ms",
                  }}
                ></div>

                {/* Skill Card with Light Effect */}
                <div className={`relative ${index % 2 === 1 ? "" : ""}`}>
                  <div
                    className={`md:p-2 p-1 backdrop-blur-lg border-[1px] bg-black/60 hover:shadow-2xl transition-all duration-700 transform ${
                      isBranchVisible && hasTrunkReached
                        ? "translate-y-0 opacity-100 hover:scale-105"
                        : index % 2 === 1
                        ? "-translate-y-10 opacity-0"
                        : "translate-y-10 opacity-0"
                    } ${
                      index % 2 === 1 ? "ml-auto mr-0" : "mr-auto ml-0"
                    } max-w-md max-md:w-40 border-2 relative overflow-hidden`}
                    style={{
                      transitionDelay:
                        isBranchVisible && hasTrunkReached
                          ? `${index * 100 + 800}ms`
                          : "0ms",
                      borderColor: shouldLightUp
                        ? lightColor
                        : "rgba(34, 197, 94, 0.5)",
                      boxShadow: shouldLightUp
                        ? `0 8px 30px ${lightColor}40, 
                           0 4px 15px rgba(0,0,0,0.4),
                           inset 0 1px 0 ${lightColor}20`
                        : "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Card background light */}
                    {shouldLightUp && (
                      <div
                        className="absolute inset-0 blur-lg opacity-15 transition-all duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${lightColor} 0%, transparent 70%)`,
                        }}
                      ></div>
                    )}

                    <div className="relative z-10">
                      <h3
                        className="text-sm md:text-xl font-bold mb-1 md:4 transition-all duration-500 transform"
                        style={{
                          color: shouldLightUp ? lightColor : "#86efac",
                          textShadow: shouldLightUp
                            ? `0 0 15px ${lightColor}`
                            : "none",
                        }}
                      >
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 md:2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-1 py-[2px] md:px-3 md:py-1 rounded-full md:text-sm text-[7px] border transition-all duration-500 hover:scale-105 transform backdrop-blur-sm"
                            style={{
                              transitionDelay:
                                isBranchVisible && hasTrunkReached
                                  ? `${index * 100 + 900 + skillIndex * 80}ms`
                                  : "0ms",
                              opacity:
                                isBranchVisible && hasTrunkReached ? 1 : 0,
                              transform:
                                isBranchVisible && hasTrunkReached
                                  ? "scale(1)"
                                  : "scale(0.8)",
                              backgroundColor: shouldLightUp
                                ? `${lightColor}15`
                                : "rgba(34, 197, 94, 0.2)",
                              borderColor: shouldLightUp
                                ? `${lightColor}40`
                                : "rgba(34, 197, 94, 0.3)",
                              color: shouldLightUp ? "white" : "#dcfce7",
                              textShadow: shouldLightUp
                                ? `0 0 8px ${lightColor}80`
                                : "none",
                              boxShadow: shouldLightUp
                                ? `0 2px 10px ${lightColor}30`
                                : "none",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
