// Section Title Component
import { motion } from "framer-motion";
import React from "react";
export const SectionTitle = ({ title, icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center space-x-3 mb-10 md:mb-16 justify-center"
    >
      {React.cloneElement(icon, {
        className: `${icon.props.className} text-indigo-500 dark:text-indigo-400`,
      })}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
        {title}
      </h2>
    </motion.div>
  );