"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-md bg-black/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-0 lg:px-8">
        <div className="flex items-center md:justify-start justify-between h-16">
          <a href="#home" className="text-xl font-bold text-primary">
            <img src="/portl-log-2.png" className=" w-15 h-10 " />
          </a>

          {/* Desktop Navigation with Uiverse Style */}
          <div className="hidden md:flex md:ml-10 lg:ml-32 xl:ml-88">
            <div className="radio-input">
              {navLinks.map((link) => (
                <label key={link.href} className="label">
                  <input
                    type="radio"
                    name="navbar"
                    checked={active === link.href}
                    onChange={() => setActive(link.href)}
                    onClick={() => (window.location.hash = link.href)}
                  />
                  <span className="text">{link.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Uiverse Style */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border flex  ">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <label
                  key={link.href}
                  className={`py-2 ${
                    active === link.href
                      ? "text-primary text-shadow-lg text-shadow-white/20 text-[17px]"
                      : "text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="navbar-mobile"
                    checked={active === link.href}
                    onChange={() => {
                      setActive(link.href);
                      setIsMobileMenuOpen(false);
                      window.location.hash = link.href;
                    }}
                    className="hidden"
                  />
                  <span className=" ">{link.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
       .radio-input {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1px;
  background-color: #0891B2;
  padding: 1px;
  border-radius: 6px;
}

.radio-input input {
  display: none;
}

.radio-input .label {
  width: 110px;
  height: 40px;
  background: linear-gradient(to bottom, #047857, rgb(36, 35, 35));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.1s linear;
  border-top: 1px solid #4e4d4d;
  background-color: #333333;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0.2);
}

.label:has(input[type="radio"]:checked) {
  box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0);
  background: linear-gradient(to bottom, #1d1d1d, #1d1d1d);
  border-top: none;
}

.label:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.label:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 103%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    transparent 10%,
    transparent,
    transparent 90%
  );
  transition: all 0.1s linear;
  z-index: -1;
}

.label:has(input[type="radio"]:checked)::before {
  background: linear-gradient(
    to bottom,
    transparent 10%,
    #cae2fd63,
    transparent 90%
  );
}

.label .text {
  color: black;
  font-size: 15px;
  line-height: 12px;
  padding: 0px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.1s linear;
  text-shadow:
    -1px -1px 1px rgb(224, 224, 224, 0.1),
    0px 2px 3px rgb(0, 0, 0, 0.3);
}

.label input[type="radio"]:checked + .text {
  color: rgb(202, 226, 253);
  text-shadow: 0px 0px 12px #cae2fd;
}

        }
      `}</style>
    </nav>
  );
}
