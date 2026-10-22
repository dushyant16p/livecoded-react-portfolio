// ============================================================
// portfolioData.js
// All personal content lives in this one file.
// To personalize the portfolio, edit ONLY this file.
// Components import data from here and render it.
// This is called "separating data from UI".
// ============================================================

export const personalInfo = {
  brand: "Alex.dev",
  name: "Alex",
  role: "Developer",
  availability: "Available for opportunities",
  heroHeading: "Hi, I'm Alex — a Developer who loves building for the web.",
  heroIntro:
    "I'm a student developer learning to build clean, useful web applications with modern tools like React. I enjoy turning small ideas into real projects and learning something new with every build.",
  email: "hello@example.com", // REPLACE: add your real email address here
  // REPLACE: Add your real profile URLs below. "#" is just a placeholder.
  githubUrl: "#", // REPLACE with your GitHub profile URL
  linkedinUrl: "#", // REPLACE with your LinkedIn profile URL
};

export const aboutInfo = {
  heading: "About Me",
  subheading: "A little bit about my journey so far.",
  paragraph:
    "I started learning web development with HTML, CSS, and JavaScript, building small pages to understand how the web works. Over time I got curious about how bigger apps are structured, which led me to React. Now I focus on building projects, reading other people's code, and improving one step at a time. Outside of coding, I enjoy exploring new tools, helping other beginners, and sharing what I learn.",
};

export const aboutCards = [
  {
    id: 1,
    title: "Current Focus",
    text: "Building responsive web apps with React and getting comfortable with components, props, and state.",
  },
  {
    id: 2,
    title: "Learning Mindset",
    text: "Learn by building. I try to make a small project for every new concept instead of only watching tutorials.",
  },
  {
    id: 3,
    title: "Career Goal",
    text: "To grow into a frontend developer role where I can build products that are simple, fast, and easy to use.",
  },
];

export const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    id: 3,
    title: "Currently Learning",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

// Projects data
// Each project is an object. The Projects component renders
// this array using .map() and passes each object as props
// to the ProjectCard component.
//
// REPLACE links: demoUrl and codeUrl are "#" placeholders.
// Replace them with your real Live Demo and GitHub URLs.
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "This website. A responsive personal portfolio built with React to showcase my skills, projects, and contact information.",
    tech: ["React", "CSS", "Vite"],
    category: "react",
    initials: "PP",
    demoUrl: "#", // REPLACE with your live demo URL
    codeUrl: "#", // REPLACE with your GitHub repo URL
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "A simple task app where you can add, complete, and delete tasks. Built to practice state management and list rendering in React.",
    tech: ["React", "JavaScript", "CSS"],
    category: "react",
    initials: "TM",
    demoUrl: "#", // REPLACE with your live demo URL
    codeUrl: "#", // REPLACE with your GitHub repo URL
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that shows current conditions for a city. Built with plain JavaScript to practice working with data and the DOM.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "javascript",
    initials: "WD",
    demoUrl: "#", // REPLACE with your live demo URL
    codeUrl: "#", // REPLACE with your GitHub repo URL
  },
];

export const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Skills", href: "#skills" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
];
