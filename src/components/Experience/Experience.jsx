// Experience Section
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Briefcase, MapPin } from "lucide-react";
import { formatDateRange } from "../../helper/formatDateRange";
export const Experience = ({ experience }) => (
    <section
      id="experience"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800"
    >
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
              className={`mb-12 md:mb-16 flex md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-1/2"></div>{" "}
              {/* Spacer for timeline effect */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                  {/* Dot on timeline */}
                  <div
                    className={`hidden md:block absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-slate-50 dark:border-slate-800 ${
                      index % 2 === 0
                        ? "-ml-[calc(2rem+2px)] left-0"
                        : "-mr-[calc(2rem+2px)] right-0"
                    }`}
                  ></div>
  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400">
                      {job.title}
                    </h3>
                    <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 whitespace-nowrap">
                      {formatDateRange(
                        job.duration.split(" - ")[0],
                        job.duration.split(" - ")[1]
                      )}
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