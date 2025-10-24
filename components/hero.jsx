"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Add the spotlight animation CSS
const spotlightStyles = `
@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}

.animate-spotlight {
  animation: spotlight 2s ease 0.1s forwards;
}

.gradient-blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* New animation for sliding images */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.slide {
  display: inline-block;
  vertical-align: top;
  height: 3.2em;
  overflow: hidden;
}

.wrapper {
  display: inline-block;
  animation: slide 18s infinite ease-in-out;
}

@keyframes slide {
  0%, 10% { transform: translateY(0); }
  12.5%, 22.5% { transform: translateY(-11.11%); }
  25%, 35% { transform: translateY(-22.22%); }
  37.5%, 47.5% { transform: translateY(-33.33%); }
  50%, 60% { transform: translateY(-44.44%); }
  62.5%, 72.5% { transform: translateY(-55.55%); }
  75%, 85% { transform: translateY(-66.66%); }
  87.5%, 97.5% { transform: translateY(-77.77%); }
  100% { transform: translateY(-88.88%); }
}
`;

// Spotlight component defined in the same file
const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="373.501"
          rx="1424.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.40"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

// Individual animated image component
const AnimatedImageItem = ({ text, imgPath, index, isVisible }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(true);
      }, index * 300); // Stagger the animation by 300ms for each item
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <span
      className={cn(
        "flex items-center pb-2 max-md:py-4 max-md:ml-2  opacity-0",
        show && "animate-slide-up"
      )}
      style={show ? { animationDelay: `${index * 0.1}s` } : {}}
    >
      <img
        src={imgPath}
        alt={text}
        className="xl:size-12 md:size-10 size-6 md:p-2 p-1  rounded-full bg-white-50"
      />
      <span>{text}</span>
    </span>
  );
};

export default function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  const images = [
    { text: "React", imgPath: "react.png" },
    { text: "React Native", imgPath: "react.png" },
    { text: "Tailwind CSS", imgPath: "tailwind.png" },
    { text: "FastAPI", imgPath: "fastapi.png" },
    { text: "MySQL", imgPath: "mysql.png" },
    { text: "Hugging Face", imgPath: "hugging.png" },
    { text: "LangChaing", imgPath: "langchain.png" },
    { text: "LangGrap", imgPath: "langgraph.png" },
    { text: "AWS", imgPath: "aws.png" },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Inject the styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = spotlightStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            // Start the image animations after a short delay
            setTimeout(() => {
              setImagesVisible(true);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-2 sm:px-2 lg:px-8 pt-16 opacity-0 relative overflow-hidden  bg-teal-500/[0.08] antialiased max-md:pb-10"
    >
      <div
        className="gradient-blur w-72 h-72 bg-cyan-500 top-10 right-20"
        style={{ animationDelay: "1s" }}
      ></div>
      {/* Spotlight effects - positioned to highlight the image */}
      <Spotlight className="top-40 left-0 md:top-20 md:left-40" fill="cyan" />

      <div className="container xl:mx-auto max-xl:mx-2  relative z-10">
        <div className="flex flex-row max-lg:flex-col max-md:justify-center items-center  max-xl:px-2 xl:px-24">
          {/*  image */}
          <div className=" flex justify-center w-[40%] max-lg:w-full  mt-20">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="image.png"
                  alt="Mahbubul Hasan"
                  className="relative rounded-[10px] border-r-4 border-b-4 border-teal-800 w-60 h-60 md:w-80 md:h-80 object-cover "
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="max-lg:text-center w-[60%] max-lg:w-full text">
            <div className="">
              <div className="flex flex-row items-end max-lg:justify-center">
                <p className="text-primary text-[25px] max-md:text-[18px] pr-4 max-md:pr-2 font-mono">
                  Heyoo, meet
                </p>
                <h1 className="relative text-3xl sm:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent inline-block">
                  Mahbub!
                </h1>
              </div>
              <div className="flex flex-row items-center max-lg:justify-center">
                <h2 className="max-md:text-[10px] md:max-lg:text-[16px] xl:text-xl">
                  your Full-Stack Developer, skilled in{" "}
                </h2>
                <span className="slide">
                  <span className="wrapper text-4xl max-lg:text-2xl max-md:text-[17px]">
                    {images.map((item, index) => (
                      <AnimatedImageItem
                        key={index}
                        text={item.text}
                        imgPath={item.imgPath}
                        index={index}
                        isVisible={imagesVisible}
                      />
                    ))}
                  </span>
                </span>
              </div>
            </div>
            <p className="max-md:text-[13px] md:max-lg:text-[16px] xl:text-xl">
              A AI powered Web & Mobile Application Developer with 4+ years of
              experience, specializing in Real Estate, Restauran, portfolios,
              business websites, e-commerce solutions, and applications.
            </p>
            <div className="flex flex-wrap gap-4 max-lg:justify-center mt-3">
              <button className="Btn">
                <a href="#contact">Get In Touch</a>
              </button>
              <Button asChild variant="outline" size="sm" className="py-4">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4 max-lg:justify-center">
              <a
                href="https://github.com/hasan-mahbub766"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <img src="git.png" alt="GitHub" className="size-11" />
              </a>
              <a
                href="https://www.linkedin.com/in/hasan-mahbubul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <img src="in.png" alt="Linkedin" className="size-10" />
              </a>
              <a
                href="mailto:hasan.mahbub009@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <img src="mail.png" alt="Gmail" className="size-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          /* From Uiverse.io by vinodjangid07 */
          .Btn {
            width: 140px;
            height: 40px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(
              to right,
              oklch(27.7% 0.046 192.524),
              oklch(44.3% 0.11 240.79),
              oklch(60% 0.118 184.704),
              oklch(52% 0.105 223.128),
              oklch(38.6% 0.063 188.416),
              #77530a
            );
            background-size: 250%;
            background-position: left;
            color: oklch(44.3% 0.11 240.79);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: 1s;
            overflow: hidden;
          }

          .Btn::before {
            position: absolute;
            content: "Get In Touch";
            color: oklch(85.5% 0.138 181.071);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 97%;
            height: 90%;
            border-radius: 8px;
            transition-duration: 1s;
            background-color: rgba(0, 0, 0, 0.842);
            background-size: 200%;
          }

          .Btn:hover {
            background-position: right;
            transition-duration: 1s;
          }

          .Btn:hover::before {
            background-position: right;
            transition-duration: 1s;
          }

          .Btn:active {
            transform: scale(0.95);
          }
        `}
      </style>
    </section>
  );
}
