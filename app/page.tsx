"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Contact from "./components/Contact";

export default function Home() {
  // ScrollY Active Section Start

  const [activeSection, setActiveSection] = useState("Hero");

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // SCROLL Y ACTIVE SECTION START

  // Because we get ref after render, we need useMemo to create this array after first render, and useMemo create it only once, useEffect would create it on every render.
  const navSections = useMemo(
    () => [
      { id: "hero", label: "Home", ref: heroRef },
      { id: "about", label: "About", ref: aboutRef },
      { id: "skill", label: "Skills", ref: skillRef },
      { id: "projects", label: "Projects", ref: projectRef },
      { id: "tools", label: "Tools", ref: toolsRef },
      { id: "contact", label: "Contact", ref: contactRef },
    ],
    [],
  );

  // Because we get ref after render, we need useEffect to create this observer after first render, and useEffect create it only once, because navSections is memoized with useMemo.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 },
    );

    // Here we add observer to each section, and when section is intersecting with viewport, we set activeSection to that section id.
    navSections.forEach((s) => {
      if (s.ref.current) {
        s.ref.current.id = s.id;
        observer.observe(s.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [navSections]);

  // SCROLL Y ACTIVE SECTION END

  return (
    <div>
      <Navbar active={activeSection} sections={navSections} />
      <Hero projectRef={projectRef} heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skill skillRef={skillRef} />
      <Projects projectRef={projectRef} />
      <Tools toolsRef={toolsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}
