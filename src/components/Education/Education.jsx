// Education Section
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

export const Education = ({ education }) => (
    <section
      id="education"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800"
    >
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
              <GraduationCap
                size={32}
                className="text-sky-500 dark:text-sky-400 mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-sky-600 dark:text-sky-400">
                {edu.degree}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                {edu.institution}
              </p>
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