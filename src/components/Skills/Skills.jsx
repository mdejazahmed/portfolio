// Skills Section
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Code, Layers, Server, Database, GitMerge, TestTube2, Settings, Brain, Star } from "lucide-react";
export const Skills = ({ skills }) => {
    const baseIconClass = "text-indigo-500 dark:text-indigo-400";
    const iconMap = {
      Frontend: <Code size={28} className={baseIconClass} />,
      "State Management": <Layers size={28} className={baseIconClass} />,
      Backend: <Server size={28} className={baseIconClass} />,
      Databases: <Database size={28} className={baseIconClass} />,
      "DevOps & Tools": <GitMerge size={28} className={baseIconClass} />,
      "Testing & Debugging": <TestTube2 size={28} className={baseIconClass} />,
      Integrations: <Settings size={28} className={baseIconClass} />,
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
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-5">
                  {iconMap[skillCategory.category] || (
                    <Code size={28} className={baseIconClass} />
                  )}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 ml-4">
                    {skillCategory.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      className="text-sm text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-700/50 px-3 py-1.5 rounded-full shadow-sm font-medium"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(99, 102, 241, 0.3)",
                        color: "#3730a3",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
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