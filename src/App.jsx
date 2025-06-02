import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "./constants/portfolioData.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { About } from "./components/About/About.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Education } from "./components/Education/Education.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import { CursorFollower } from "./components/CursorFollower/CursorFollower.jsx";

// Main App Component
export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  return (
    <div
      className={`${
        darkTheme ? "dark" : ""
      } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-300 selection:text-sky-900 cursor-none`}
    >
      <CursorFollower />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-sky-500 dark:bg-sky-400 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar
        sections={sections}
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      />
      <main className="pt-16">
        {" "}
        {/* Padding top to offset fixed navbar */}
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          tagline={portfolioData.tagline}
          contact={portfolioData.contact}
          avatarPlaceholder={portfolioData.avatarPlaceholder}
        />
        <About
          summary={portfolioData.summary}
          creativeStatement={portfolioData.creativeStatement}
        />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
        <Contact
          email={portfolioData.contact.email}
          linkedinUrl={portfolioData.contact.linkedinUrl}
        />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
      <ScrollToTopButton />
    </div>
  );
}
