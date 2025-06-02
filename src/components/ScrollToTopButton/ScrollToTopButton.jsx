// Scroll To Top Button
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";
export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    );
  };