// Projects Section
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Layers, ImageIcon, CalendarDays } from "lucide-react";
import { formatDateRange } from "../../helper/formatDateRange";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
export const Projects = ({ projects }) => {
    const [expandedProject, setExpandedProject] = useState(null);
  
    return (
      <section
        id="projects"
        className="py-20 md:py-28 bg-white dark:bg-slate-900"
      >
        <div className="container mx-auto px-6 md:px-10">
          <SectionTitle title="My Creations" icon={<Layers size={40} />} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Error")
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      <ImageIcon
                        size={48}
                        className="text-slate-400 dark:text-slate-500"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
  
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-2">
                    {project.name}
                  </h3>
                  {project.duration && (
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <CalendarDays size={14} className="mr-1.5" />
                      <span>
                        {project.duration.includes("-")
                          ? formatDateRange(
                              project.duration.split(" - ")[0],
                              project.duration.split(" - ")[1]
                            )
                          : project.duration}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1.5 tracking-wider">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
  
                  {project.details && project.details.length > 0 && (
                    <div className="mt-auto pt-2">
                      <button
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === index ? null : index
                          )
                        }
                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-semibold flex items-center transition-colors duration-200"
                      >
                        {expandedProject === index ? "Show Less" : "More Details"}
                        {expandedProject === index ? (
                          <ChevronUp size={20} className="ml-1" />
                        ) : (
                          <ChevronDown size={20} className="ml-1" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
  
                <AnimatePresence>
                  {expandedProject === index && project.details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
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
                      View Project{" "}
                      <ExternalLink
                        size={16}
                        className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-200"
                      />
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