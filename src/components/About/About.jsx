// About Section
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { User } from "lucide-react";
export const About = ({ summary, creativeStatement }) => (
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