// Contact Section
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle/SectionTitle";
export const Contact = ({ email, linkedinUrl }) => (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-800 dark:from-sky-800 dark:via-indigo-900 dark:to-purple-950 text-white"
    >
      <div className="container mx-auto px-6 md:px-10 text-center">
        <SectionTitle
          title="Let's Connect"
          icon={<Mail size={40} className="text-white" />}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          I'm excited to discuss new projects, innovative ideas, or opportunities
          to contribute to your vision. Feel free to reach out!
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