// Enhanced Resume Data (JSON-like structure)
import { Code, Layers, Server, Database, GitMerge, TestTube2, Settings, Brain } from "lucide-react";
export const portfolioData = {
    name: "Ejaz Ahmed",
    title: "Associate Software Developer",
    tagline: "Crafting Digital Experiences, One Line of Code at a Time.",
    avatarPlaceholder: "https://placehold.co/150x150/6366F1/FFFFFF?text=EA", // Placeholder for avatar
    contact: {
      email: "ejaz.ahmed1227@gmail.com",
      phone: "9131700516",
      linkedin: "linkedin.com/in/mdejazahmed",
      linkedinUrl: "https://www.linkedin.com/in/mdejazahmed/",
    },
    summary:
      "Results-driven Frontend Developer with 2+ years of experience building scalable, maintainable web applications with a strong focus on Vue.js ecosystem including Vuex, Pinia, and Vuetify. Adept at crafting responsive UIs, managing application state, and optimizing performance. Experienced in developing ERP and SaaS platforms, integrating third-party APIs, and implementing robust authentication and authorization workflows.",
    creativeStatement:
      "I believe in the power of intuitive design and clean code to create meaningful and engaging user experiences. My passion lies in transforming complex problems into elegant digital solutions.",
    skills: [
      {
        category: "Frontend",
        items: [
          "Vue.js",
          "Nuxt.js",
          "Vuetify",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "SCSS",
          "Bootstrap",
          "MUI",
          "Styled Components",
          "React.js",
        ],
        icon: <Code size={20} />,
      },
      {
        category: "State Management",
        items: ["Pinia", "Vuex", "Context API", "Redux"],
        icon: <Layers size={20} />,
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"],
        icon: <Server size={20} />,
      },
      {
        category: "Databases",
        items: ["MongoDB", "PostgreSQL", "SQLite"],
        icon: <Database size={20} />,
      },
      {
        category: "DevOps & Tools",
        items: [
          "Git",
          "GitHub",
          "Bitbucket",
          "Postman",
          "Cronitor",
          "AWS (Amplify, EC2)",
        ],
        icon: <GitMerge size={20} />,
      },
      {
        category: "Testing & Debugging",
        items: ["Vitest", "Jest", "Chrome DevTools"],
        icon: <TestTube2 size={20} />,
      },
      {
        category: "Integrations",
        items: ["Google Maps API", "Firebase", "Google OAuth", "WebSockets"],
        icon: <Settings size={20} />,
      },
      {
        category: "AI Tools",
        items: ["ChatGPT", "GitHub Copilot", "Windsurf", "Claude"],
        icon: <Brain size={20} />,
      },
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
          "Debugged UI issues and enhanced rendering efficiency by optimizing DOM operations.",
        ],
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
          "Maintained Git workflows and wrote unit tests for frontend components using Vitest.",
        ],
      },
    ],
    projects: [
      {
        name: "AdviceBazar - 1:1 Expert Advice Booking Platform",
        description:
          "Built a Topmate-inspired platform enabling users to book 1:1 video/audio calls with experts across various domains.",
        technologies: ["Vuetify", "Vuex", "Nuxt.js (SSR)"],
        details: [
          "Developed a visually polished UI with Vuetify, ensuring smooth, intuitive user experiences across mobile and desktop.",
          "Managed global state using Vuex, handling user data, booking flow, and call scheduling logic.",
          "Implemented Nuxt.js server-side rendering (SSR) and dynamic meta tag generation for improved SEO performance and crawlability.",
        ],
        imageUrl: "https://placehold.co/600x400/A5B4FC/374151?text=AdviceBazar",
        // link: "#"
      },
      {
        name: "ERP System for Steel Trading (SAP Alternative)",
        duration: "01/2024 - 04/2025",
        description:
          "Architected RBAC-based UI and data views using Vuex for centralized state.",
        technologies: ["Vuex", "Vuetify", "REST APIs"],
        details: [
          "Designed dynamic forms using Vuetify components and integrated inventory APIs.",
          "Ensured secure authentication and seamless data sync via REST endpoints.",
        ],
        imageUrl: "https://placehold.co/600x400/F472B6/374151?text=ERP+System",
        // link: "#"
      },
      {
        name: "Zobiko - Job Referral Platform",
        duration: "09/2023 - 01/2024",
        description:
          "Built a LinkedIn-style interface with Vuetify and global state managed by Pinia.",
        technologies: [
          "Vuetify",
          "Pinia",
          "Google OAuth",
          "WebSockets",
          "AWS Amplify",
          "Cronitor",
        ],
        details: [
          "Integrated Google OAuth and built real-time messaging with WebSockets.",
          "Deployed using AWS Amplify and monitored with Cronitor for uptime and analytics.",
        ],
        imageUrl: "https://placehold.co/600x400/34D399/374151?text=Zobiko",
        // link: "#"
      },
      {
        name: "RED - Real Estate Development Web App",
        duration: "09/2023 - 12/2023",
        description:
          "Integrated Google Maps API and Firebase Auth for secure, responsive property listing.",
        technologies: ["Google Maps API", "Firebase Auth", "Vuetify"],
        details: [
          "Developed UI with Vuetify components to ensure mobile-first experience.",
          "Added map filters and pin markers to enhance location discoverability.",
          "Gained hands-on experience understanding and maintaining complex legacy codebases written by other developers.",
          "Successfully stabilized the app and deployed it to production, ensuring a smooth and bug-free user experience.",
        ],
        imageUrl: "https://placehold.co/600x400/FBBF24/374151?text=RED+App",
        // link: "#"
      },
    ],
    education: [
      {
        degree: "Industry Ready Certification (IRC) in Full Stack Development",
        institution: "NxtWave Disruptive Technologies",
        duration: "2022 - 2023",
        location: "Bangalore, India",
      },
      {
        degree: "B.Sc.",
        institution: "Raipur University", // Made institution more specific
        duration: "2021",
        location: "Raipur, India",
      },
    ],
  };