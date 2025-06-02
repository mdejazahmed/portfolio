// Footer Component
import { Mail, Linkedin } from "lucide-react";
export const Footer = ({ name, contact }) => (
    <footer className="py-12 bg-slate-100 dark:bg-slate-950 text-center border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={`mailto:${contact.email}`}
            className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
          Crafted with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );