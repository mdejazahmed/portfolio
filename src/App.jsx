import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Code, GraduationCap, Mail, Linkedin, User, Layers, Server, Database, GitMerge, TestTube2, Settings, Brain, MapPin, CalendarDays, ExternalLink, ChevronDown, ChevronUp, Menu, X, Sun, Moon, ArrowUpCircle, Star, Image as ImageIcon } from 'lucide-react';
import "./App.css"
// Helper function to format dates (Month Year - Month Year or Present)
const formatDateRange = (startDate, endDate) => {
  if (!startDate) return 'Date N/A';
  const startParts = startDate.split('/');
  if (startParts.length !== 2) return `${startDate} - ${endDate}`; // Fallback for unexpected format

  const start = new Date(`20${startParts[1]}-${startParts[0]}-01`);
  const options = { year: 'numeric', month: 'short' };
  const formattedStart = start.toLocaleDateString('en-US', options);

  if (endDate && endDate.toLowerCase() === 'present') {
    return `${formattedStart} - Present`;
  }
  if (endDate && endDate.includes('/')) { // Assuming format MM/YYYY
    const endParts = endDate.split('/');
    if (endParts.length !== 2) return `${formattedStart} - ${endDate}`;
    const end = new Date(`20${endParts[1]}-${endParts[0]}-01`);
    const formattedEnd = end.toLocaleDateString('en-US', options);
    return `${formattedStart} - ${formattedEnd}`;
  }
  return endDate ? `${formattedStart} - ${endDate}` : formattedStart; // Fallback for other formats or single date
};


// Enhanced Resume Data (JSON-like structure)
const portfolioData = {
  name: "Ejaz Ahmed",
  title: "Associate Software Developer",
  tagline: "Crafting Digital Experiences, One Line of Code at a Time.",
  avatarPlaceholder: "https://placehold.co/150x150/6366F1/FFFFFF?text=EA", // Placeholder for avatar
  contact: {
    email: "ejaz.ahmed1227@gmail.com",
    phone: "9131700516",
    linkedin: "linkedin.com/in/mdejazahmed",
    linkedinUrl: "https://www.linkedin.com/in/mdejazahmed/"
  },
  summary: "Results-driven Frontend Developer with 2+ years of experience building scalable, maintainable web applications with a strong focus on Vue.js ecosystem including Vuex, Pinia, and Vuetify. Adept at crafting responsive UIs, managing application state, and optimizing performance. Experienced in developing ERP and SaaS platforms, integrating third-party APIs, and implementing robust authentication and authorization workflows.",
  creativeStatement: "I believe in the power of intuitive design and clean code to create meaningful and engaging user experiences. My passion lies in transforming complex problems into elegant digital solutions.",
  skills: [
    { category: "Frontend", items: ["Vue.js", "Nuxt.js", "Vuetify", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS", "Bootstrap", "MUI", "Styled Components", "React.js"], icon: <Code size={20}/> },
    { category: "State Management", items: ["Pinia", "Vuex", "Context API", "Redux"], icon: <Layers size={20}/> },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"], icon: <Server size={20}/> },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite"], icon: <Database size={20}/> },
    { category: "DevOps & Tools", items: ["Git", "GitHub", "Bitbucket", "Postman", "Cronitor", "AWS (Amplify, EC2)"], icon: <GitMerge size={20}/> },
    { category: "Testing & Debugging", items: ["Vitest", "Jest", "Chrome DevTools"], icon: <TestTube2 size={20}/> },
    { category: "Integrations", items: ["Google Maps API", "Firebase", "Google OAuth", "WebSockets"], icon: <Settings size={20}/> },
    { category: "AI Tools", items: ["ChatGPT", "GitHub Copilot", "Windsurf", "Claude"], icon: <Brain size={20}/> }
  ],
  experience: [
    {
      title: "Frontend Developer",
      company: "Codenicely",
      duration: "09/2023 - Present",
      location: "Raipur, India",
      responsibilities: [
        "Developed and maintained Vue.js-based applications, enhancing engagement by 25%.",
        "Created reusable UI components using Vuetify to maintain design consistency across projects.",
        "Managed global state with Vuex and Pinia, improving data flow and performance.",
        "Integrated REST APIs and optimized frontend logic for responsiveness and load performance.",
        "Collaborated closely with designers to translate wireframes into clean, accessible UIs.",
        "Debugged UI issues and enhanced rendering efficiency by optimizing DOM operations."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Remwhack Technologies",
      duration: "03/2023 - 08/2023",
      location: "Raipur, India",
      responsibilities: [
        "Contributed to full-stack feature development using MERN stack.",
        "Designed REST APIs and implemented JWT-based authentication.",
        "Participated in Vue-to-React migrations and ensured smooth state management integration.",
        "Maintained Git workflows and wrote unit tests for frontend components using Vitest."
      ]
    }
  ],
  projects: [
    {
      name: "AdviceBazar - 1:1 Expert Advice Booking Platform",
      description: "Built a Topmate-inspired platform enabling users to book 1:1 video/audio calls with experts across various domains.",
      technologies: ["Vuetify", "Vuex", "Nuxt.js (SSR)"],
      details: [
        "Developed a visually polished UI with Vuetify, ensuring smooth, intuitive user experiences across mobile and desktop.",
        "Managed global state using Vuex, handling user data, booking flow, and call scheduling logic.",
        "Implemented Nuxt.js server-side rendering (SSR) and dynamic meta tag generation for improved SEO performance and crawlability."
      ],
      imageUrl: "https://placehold.co/600x400/A5B4FC/374151?text=AdviceBazar",
      // link: "#" 
    },
    {
      name: "ERP System for Steel Trading (SAP Alternative)",
      duration: "01/2024 - 04/2025",
      description: "Architected RBAC-based UI and data views using Vuex for centralized state.",
      technologies: ["Vuex", "Vuetify", "REST APIs"],
      details: [
        "Designed dynamic forms using Vuetify components and integrated inventory APIs.",
        "Ensured secure authentication and seamless data sync via REST endpoints."
      ],
      imageUrl: "https://placehold.co/600x400/F472B6/374151?text=ERP+System",
      // link: "#"
    },
    {
      name: "Zobiko - Job Referral Platform",
      duration: "09/2023 - 01/2024",
      description: "Built a LinkedIn-style interface with Vuetify and global state managed by Pinia.",
      technologies: ["Vuetify", "Pinia", "Google OAuth", "WebSockets", "AWS Amplify", "Cronitor"],
      details: [
        "Integrated Google OAuth and built real-time messaging with WebSockets.",
        "Deployed using AWS Amplify and monitored with Cronitor for uptime and analytics."
      ],
      imageUrl: "https://placehold.co/600x400/34D399/374151?text=Zobiko",
      // link: "#"
    },
    {
      name: "RED - Real Estate Development Web App",
      duration: "09/2023 - 12/2023",
      description: "Integrated Google Maps API and Firebase Auth for secure, responsive property listing.",
      technologies: ["Google Maps API", "Firebase Auth", "Vuetify"],
      details: [
        "Developed UI with Vuetify components to ensure mobile-first experience.",
        "Added map filters and pin markers to enhance location discoverability.",
        "Gained hands-on experience understanding and maintaining complex legacy codebases written by other developers.",
        "Successfully stabilized the app and deployed it to production, ensuring a smooth and bug-free user experience."
      ],
      imageUrl: "https://placehold.co/600x400/FBBF24/374151?text=RED+App",
      // link: "#"
    }
  ],
  education: [
    {
      degree: "Industry Ready Certification (IRC) in Full Stack Development",
      institution: "NxtWave Disruptive Technologies",
      duration: "2022 - 2023",
      location: "Bangalore, India"
    },
    {
      degree: "B.Sc.",
      institution: "Raipur University", // Made institution more specific
      duration: "2021",
      location: "Raipur, India"
    }
  ]
};

// Typing Animation Component
const TypingText = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, speed, currentIndex]);

  return <span className={className}>{displayedText}</span>;
};


// Section Title Component
const SectionTitle = ({ title, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex items-center space-x-3 mb-10 md:mb-16 justify-center"
  >
    {React.cloneElement(icon, { className: `${icon.props.className} text-indigo-500 dark:text-indigo-400`})}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">{title}</h2>
  </motion.div>
);

// Hero Section
const Hero = ({ name, title, tagline, contact, avatarPlaceholder }) => (
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

// About Section
const About = ({ summary, creativeStatement }) => (
  <section id="about" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
    <div className="container mx-auto px-6 md:px-10">
      <SectionTitle title="About Me" icon={<User size={40} />} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
          {summary}
        </p>
        <p className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 italic font-medium leading-relaxed">
          {creativeStatement}
        </p>
      </motion.div>
    </div>
  </section>
);

// Skills Section
const Skills = ({ skills }) => {
  const baseIconClass = "text-indigo-500 dark:text-indigo-400";
  const iconMap = {
    "Frontend": <Code size={28} className={baseIconClass} />,
    "State Management": <Layers size={28} className={baseIconClass} />,
    "Backend": <Server size={28} className={baseIconClass} />,
    "Databases": <Database size={28} className={baseIconClass} />,
    "DevOps & Tools": <GitMerge size={28} className={baseIconClass} />,
    "Testing & Debugging": <TestTube2 size={28} className={baseIconClass} />,
    "Integrations": <Settings size={28} className={baseIconClass} />,
    "AI Tools": <Brain size={28} className={baseIconClass} />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle title="My Toolkit" icon={<Star size={40} />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-5">
                {iconMap[skillCategory.category] || <Code size={28} className={baseIconClass} />}
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 ml-4">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.span 
                    key={itemIndex} 
                    className="text-sm text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-700/50 px-3 py-1.5 rounded-full shadow-sm font-medium"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)', color: '#3730a3' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = ({ experience }) => (
  <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
    <div className="container mx-auto px-6 md:px-10">
      <SectionTitle title="Career Journey" icon={<Briefcase size={40} />} />
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-0 h-full w-1 bg-indigo-200 dark:bg-indigo-700 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
        
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`mb-12 md:mb-16 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="hidden md:block w-1/2"></div> {/* Spacer for timeline effect */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                {/* Dot on timeline */}
                <div className={`hidden md:block absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-slate-50 dark:border-slate-800 ${index % 2 === 0 ? '-ml-[calc(2rem+2px)] left-0' : '-mr-[calc(2rem+2px)] right-0'}`}></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400">{job.title}</h3>
                  <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 whitespace-nowrap">
                    {formatDateRange(job.duration.split(' - ')[0], job.duration.split(' - ')[1])}
                  </span>
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300 mb-4 text-sm md:text-base">
                  <Briefcase size={18} className="mr-2 opacity-75" />
                  <span>{job.company}</span>
                  <MapPin size={18} className="ml-4 mr-2 opacity-75" />
                  <span>{job.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Projects Section
const Projects = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle title="My Creations" icon={<Layers size={40} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => e.target.src='https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Error'}/>
                ) : (
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <ImageIcon size={48} className="text-slate-400 dark:text-slate-500" />
                  </div>
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-2">{project.name}</h3>
                {project.duration && (
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <CalendarDays size={14} className="mr-1.5" />
                    <span>{project.duration.includes('-') ? formatDateRange(project.duration.split(' - ')[0], project.duration.split(' - ')[1]) : project.duration}</span>
                  </div>
                )}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1.5 tracking-wider">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-full font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                {project.details && project.details.length > 0 && (
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-semibold flex items-center transition-colors duration-200"
                    >
                      {expandedProject === index ? 'Show Less' : 'More Details'}
                      {expandedProject === index ? <ChevronUp size={20} className="ml-1" /> : <ChevronDown size={20} className="ml-1" />}
                    </button>
                  </div>
                )}
              </div>

              <AnimatePresence>
                {expandedProject === index && project.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-slate-100 dark:bg-slate-700/50 px-6 pb-6 pt-3"
                  >
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {project.link && (
                <div className="p-6 pt-0 mt-auto">
                   <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-sky-500 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-semibold group/link transition-colors duration-200"
                  >
                    View Project <ExternalLink size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Education Section
const Education = ({ education }) => (
  <section id="education" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
    <div className="container mx-auto px-6 md:px-10">
      <SectionTitle title="Learning Path" icon={<GraduationCap size={40} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center md:items-start md:text-left"
          >
            <GraduationCap size={32} className="text-sky-500 dark:text-sky-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 dark:text-sky-400">{edu.degree}</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">{edu.institution}</p>
            <div className="flex items-center text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
              <CalendarDays size={16} className="mr-2 opacity-75" />
              <span>{edu.duration}</span>
              {edu.location && (
                <>
                  <MapPin size={16} className="ml-4 mr-2 opacity-75" />
                  <span>{edu.location}</span>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
const Contact = ({ email, linkedinUrl }) => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-800 dark:from-sky-800 dark:via-indigo-900 dark:to-purple-950 text-white">
    <div className="container mx-auto px-6 md:px-10 text-center">
      <SectionTitle title="Let's Connect" icon={<Mail size={40} className="text-white"/>} />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl mb-10 max-w-xl mx-auto"
      >
        I'm excited to discuss new projects, innovative ideas, or opportunities to contribute to your vision. Feel free to reach out!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-base font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-indigo-700 dark:hover:text-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
        >
          <Mail size={22} className="mr-2.5" /> Email Me
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-sky-300 text-base font-semibold rounded-lg text-sky-300 bg-transparent hover:bg-sky-300 hover:text-indigo-700 dark:hover:text-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
        >
          <Linkedin size={22} className="mr-2.5" /> LinkedIn Profile
        </a>
      </motion.div>
    </div>
  </section>
);

// Navbar Component
const Navbar = ({ sections, darkTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) { // Ensure more than half the section is visible
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-40% 0px -40% 0px" } 
    );

    sections.forEach(sectionId => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => sections.forEach(sectionId => {
      const el = document.getElementById(sectionId);
      if (el) observer.unobserve(el);
    });
  }, [sections]);


  const navItemClass = (id) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
      activeSection === id 
        ? 'text-sky-600 dark:text-sky-400' 
        : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400'
    }`;
  
  const activeIndicator = (id) => activeSection === id ? 
    <motion.div layoutId="activePill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-400 rounded-full" /> : null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent dark:bg-transparent shadow-none'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 text-2xl font-bold text-sky-600 dark:text-sky-400 hover:opacity-80 transition-opacity">
            <img src="dev.png" alt="" style={{width: "50px", height: "50px"}}/>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {sections.map(section => (
                <a key={section} href={`#${section}`} onClick={() => setIsOpen(false)} className={navItemClass(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeIndicator(section)}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 mr-2 ${isScrolled || isOpen ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700' : 'text-white hover:bg-white/20'}`}
              aria-label="Toggle dark mode"
            >
              {darkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${isScrolled || isOpen ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700' : 'text-white hover:bg-white/20'}`}
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-700"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className={`${navItemClass(section)} block text-base py-3 text-center`}
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

// Footer Component
const Footer = ({ name, contact }) => (
  <footer className="py-12 bg-slate-100 dark:bg-slate-950 text-center border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-6">
      <div className="flex justify-center space-x-6 mb-6">
          <a href={`mailto:${contact.email}`} className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
        Crafted with <span role="img" aria-label="heart">❤️</span> using React, Tailwind CSS, and Framer Motion.
      </p>
    </div>
  </footer>
);

// Scroll To Top Button
const ScrollToTopButton = () => {
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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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


// Main App Component
export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];

  return (
    <div className={`${darkTheme ? 'dark' : ''} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-300 selection:text-sky-900`}>
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-sky-500 dark:bg-sky-400 origin-left z-[100]" style={{ scaleX }} />
      <Navbar sections={sections} darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <main className="pt-16"> {/* Padding top to offset fixed navbar */}
        <Hero name={portfolioData.name} title={portfolioData.title} tagline={portfolioData.tagline} contact={portfolioData.contact} avatarPlaceholder={portfolioData.avatarPlaceholder} />
        <About summary={portfolioData.summary} creativeStatement={portfolioData.creativeStatement} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
        <Contact email={portfolioData.contact.email} linkedinUrl={portfolioData.contact.linkedinUrl} />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
      <ScrollToTopButton />
    </div>
  );
}
