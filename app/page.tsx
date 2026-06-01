"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Build from "./components/Build";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/UI/LoadingScreen";

export default function Home() {
  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  // ScrollY Active Section Start
  const [activeSection, setActiveSection] = useState("Hero");

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // SCROLL Y ACTIVE SECTION START

  // Because we get ref after render, we need useMemo to create this array after first render, and useMemo create it only once, useEffect would create it on every render.
  const navSections = useMemo(
    () => [
      { id: "hero", label: "Home", ref: heroRef },
      { id: "about", label: "About", ref: aboutRef },
      { id: "skill", label: "Skills", ref: skillRef },
      { id: "projects", label: "Projects", ref: projectRef },
      { id: "build", label: "Build", ref: buildRef },
      { id: "expertise", label: "Expertise", ref: expertiseRef },
      { id: "contact", label: "Contact", ref: contactRef },
    ],
    [],
  );

  // Because we get ref after render, we need useEffect to create this observer after first render, and useEffect create it only once, because navSections is memoized with useMemo.
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
    );

    navSections.forEach((s) => {
      if (s.ref.current) {
        s.ref.current.id = s.id;
        observer.observe(s.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [navSections, isLoading]);

  // SCROLL Y ACTIVE SECTION END

  // Loading simulation - remove or replace with actual data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content">
            <Navbar active={activeSection} sections={navSections} />
            <main>
              <Hero projectRef={projectRef} heroRef={heroRef} />
              <About aboutRef={aboutRef} />
              <Skill skillRef={skillRef} />
              <Projects projectRef={projectRef} />
              <Build buildRef={buildRef} />
              <Expertise expertiseRef={expertiseRef} />
              <Contact contactRef={contactRef} />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
