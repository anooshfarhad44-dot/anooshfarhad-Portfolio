import { PortfolioData, SocialLink, NavItem } from '../types';

export const meta: PortfolioData['meta'] = {
  title: "Anoosh Farhad | Full Stack Developer",
  description: "Experienced Full Stack Developer with 3+ years specializing in Laravel, Next.js, React, Node.js, and modern web applications. Building scalable full-stack solutions.",
  keywords: ["Laravel", "Next.js", "React", "Node.js", "MongoDB", "MySQL", "PHP", "Full Stack Developer", "Web Development"],
  author: "Anoosh Farhad",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero: PortfolioData['hero'] = {
  name: "Anoosh Farhad",
  title: "Full Stack Developer",
  description: "3+ years of experience building scalable web applications with Laravel, Next.js, React, and Node.js. Specialized in full-stack development, REST APIs, and modern database solutions.",
  cta: {
    primary: { label: "Hire Me", href: "#contact" },
    secondary: { label: "View Projects", href: "#projects" },
  },
};

export const skills: PortfolioData['skills'] = [
  { name: "Laravel", level: 95, icon: "layers" },
  { name: "PHP", level: 90, icon: "terminal" },
  { name: "Next.js", level: 88, icon: "nextjs" },
  { name: "React", level: 85, icon: "react" },
  { name: "Node.js", level: 82, icon: "nodejs" },
  { name: "MySQL", level: 88, icon: "database" },
  { name: "MongoDB", level: 80, icon: "mongodb" },
  { name: "REST APIs", level: 92, icon: "server" },
  { name: "Git & CI/CD", level: 85, icon: "gitBranch" },
];

export const projects: PortfolioData['projects'] = [
  {
    title: "Anoosh Fitness",
    description: "High-conversion fitness brand website built around coaching offers, body calculators, client transformations, championship highlights, and certifications.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    icon: "globe",
    link: "https://anooshfitness.vercel.app/",
  },
  {
    title: "AAF Solutions",
    description: "Modern digital agency website showcasing web, app, UI/UX, and marketing services with polished storytelling, testimonials, and strong lead-generation CTAs.",
    tech: ["Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
    icon: "shield",
    link: "https://aaf-sols.vercel.app/",
  },
  {
    title: "WorkZen Pro",
    description: "Enterprise-grade multi-tenant workforce management SaaS with RBAC, attendance, payroll, recruitment, e-learning, analytics dashboards, and Stripe billing.",
    tech: ["Next.js 16", "TypeScript", "Redux Toolkit", "Stripe"],
    icon: "cpu",
    link: "https://workzenpro.com/",
  },
  {
    title: "Plannza",
    description: "Full-stack project management SaaS featuring multi-tenant workspaces, JWT auth, RBAC, recurring billing, real-time collaboration, and background job processing.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
    icon: "zap",
    link: "https://plannza.com/",
  },
  {
    title: "Media Mace",
    description: "Production-ready digital marketing agency SPA with package booking, add-on customization, real-time pricing, and smooth animated interactions.",
    tech: ["React 19", "Vite", "Tailwind CSS 4", "EmailJS"],
    icon: "trendingUp",
    link: "https://mediamace.com/",
  },
  {
    title: "TSP Site",
    description: "Responsive corporate website with dynamic routing, SEO improvements, mega-menu navigation, testimonial flows, and performance-focused frontend architecture.",
    tech: ["React 19", "Vite 6", "Tailwind CSS 4", "REST APIs"],
    icon: "briefcase",
    link: "https://tech-solutionspro.com/",
  },
];

export const experience: PortfolioData['experience'] = [
  {
    role: "Backend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    highlights: [
      "Built 15+ REST APIs serving 50K+ daily requests",
      "Reduced database query time by 40% through optimization",
      "Led migration from monolith to microservices architecture",
    ],
  },
  {
    role: "Laravel Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    highlights: [
      "Developed 8 custom CMS solutions for enterprise clients",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 2 junior developers on Laravel best practices",
    ],
  },
];

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/anooshfarhad44-dot", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anoosh-farhad-4b3088389/", icon: "linkedin" },
];

export const contact: PortfolioData['contact'] = {
  title: "Let's Work Together",
  description: "Looking for a Full Stack developer for your next project? I'm available for freelance work and full-time opportunities.",
  email: "anooshfarhad4.4@gmail.com",
  socials,
};

export const footer: PortfolioData['footer'] = {
  copyright: "2024 Anoosh Farhad. Built with Full Stack expertise.",
  tagline: "Full Stack Developer",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "REST APIs Integrated" },
  { value: "10+", label: "Projects Delivered" },
  { value: "50+", label: "Reusable Pages & Modules" },
];

export const techStack = [
  "Laravel",
  "PHP",
  "Next.js",
  "React",
  "Node.js",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Docker",
  "AWS",
  "Git",
  "CI/CD",
];

export const portfolioData: PortfolioData = {
  meta,
  hero,
  skills,
  projects,
  experience,
  contact,
  footer,
};

export default portfolioData;
