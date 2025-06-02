// Hero Section
import { motion } from "framer-motion";
import { Mail,Linkedin,ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Typing Animation Component
const TypingText = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, speed, currentIndex]);

  return <span className={className}>{displayedText}</span>;
};

export const Hero = ({ name, title, tagline, contact, avatarPlaceholder }) => (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-800 dark:from-sky-800 dark:via-indigo-900 dark:to-purple-950 text-white p-6 md:p-10 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="relative z-10"
      >
        <motion.img 
          src={avatarPlaceholder} 
          alt={name} 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white/50"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 120 }}
        />
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <TypingText text={name} speed={120} className="block" />
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light mb-4 text-sky-200 dark:text-sky-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {title}
        </motion.p>
        <motion.p
          className="text-md sm:text-lg md:text-xl italic text-indigo-200 dark:text-indigo-300 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          "{tagline}"
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <a href={`mailto:${contact.email}`} className="text-white hover:text-sky-300 transition-colors duration-300 p-3 rounded-full hover:bg-white/20 transform hover:scale-110">
            <Mail size={30} />
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300 transition-colors duration-300 p-3 rounded-full hover:bg-white/20 transform hover:scale-110">
            <Linkedin size={30} />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  );