// Navbar Component
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { AnimatePresence} from "framer-motion";
import { Moon, Sun ,Menu} from "lucide-react";
export const Navbar = ({ sections, darkTheme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              // Ensure more than half the section is visible
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5, rootMargin: "-40% 0px -40% 0px" }
      );
  
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) observer.observe(el);
      });
  
      return () =>
        sections.forEach((sectionId) => {
          const el = document.getElementById(sectionId);
          if (el) observer.unobserve(el);
        });
    }, [sections]);
  
    const navItemClass = (id) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
        activeSection === id
          ? "text-sky-600 dark:text-sky-400"
          : "text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
      }`;
  
    const activeIndicator = (id) =>
      activeSection === id ? (
        <motion.div
          layoutId="activePill"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-400 rounded-full"
        />
      ) : null;
  
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent dark:bg-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                className="flex-shrink-0 text-2xl font-bold text-sky-600 dark:text-sky-400 hover:opacity-80 transition-opacity"
              >
                <img
                  src="dev.png"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsOpen(false)}
                    className={navItemClass(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeIndicator(section)}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 mr-2 ${
                  isScrolled || isOpen
                    ? "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    isScrolled || isOpen
                      ? "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      : "text-white hover:bg-white/20"
                  }`}
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-700"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsOpen(false)}
                    className={`${navItemClass(
                      section
                    )} block text-base py-3 text-center`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeIndicator(section)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  };