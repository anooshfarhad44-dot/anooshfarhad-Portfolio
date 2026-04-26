import { PortfolioData, SocialLink, NavItem } from '../types';

export const meta: PortfolioData['meta'] = {
  title: "Anoosh Farhad | Full Stack Developer",
  description: "Software Developer with 3+ years specialising in Laravel & PHP backend engineering alongside full-stack, mobile and API development.",
  keywords: ["Laravel", "PHP", "React", "Next.js", "Node.js", ".NET Core", "React Native", "Full Stack Developer"],
  author: "Anoosh Farhad",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero: PortfolioData['hero'] = {
  name: "Anoosh Farhad",
  title: "Laravel & PHP · Full Stack · React · MERN · Next.js",
  description: "Software Developer with 3+ years specialising in Laravel & PHP backend engineering alongside full-stack, mobile and API development. Expert in RBAC, Stripe payment flows, and real-time systems.",
  cta: {
    primary: { label: "Contact Me", href: "#contact" },
    secondary: { label: "View Projects", href: "#projects" },
  },
};

export const skills: PortfolioData['skills'] = [
  { name: "Laravel (PHP)", level: 95, icon: "layers" },
  { name: "React / Next.js", level: 90, icon: "react" },
  { name: ".NET Core", level: 85, icon: "terminal" },
  { name: "Node.js", level: 82, icon: "nodejs" },
  { name: "React Native", level: 80, icon: "smartphone" },
  { name: "MySQL / PostgreSQL", level: 88, icon: "database" },
  { name: "MongoDB", level: 80, icon: "mongodb" },
  { name: "Stripe / Socket.IO", level: 85, icon: "zap" },
  { name: "Git & Docker", level: 85, icon: "gitBranch" },
];

export const projects: PortfolioData['projects'] = [
  {
    title: "PharmaPaws",
    description: "Multi-vendor pharmacy marketplace with RBAC, Stripe integration, real-time pharmacist-customer chat, and Chart.js analytics.",
    tech: ["Laravel 12", "MySQL", "Tailwind CSS", "Socket.IO", "Stripe"],
    icon: "shoppingCart",
    link: "https://github.com/anooshfarhad44-dot/PharmaPaws-laravel",
  },
  {
    title: "WorkZen Pro",
    description: "Enterprise SaaS workforce platform with multi-tenant RBAC, attendance, payroll, recruitment (ATS), and Stripe billing.",
    tech: ["Laravel PHP", "Next.js 16", "TypeScript", "Tailwind CSS", "Stripe"],
    icon: "briefcase",
    link: "https://workzenpro.com/",
  },
  {
    title: "Now Saffer",
    description: "Ride-hailing app (Uber replica) with driver/rider matching, real-time GPS tracking, surge pricing, and Stripe Connect.",
    tech: ["Laravel PHP", "REST APIs", "GPS Tracking", "Stripe Connect"],
    icon: "mapPin",
  },
  {
    title: "Online Pharmacy UK",
    description: "E-commerce platform with prescription management, NHS-compliant data handling, and GDPR-ready authentication.",
    tech: ["Laravel PHP", "MySQL", "E-commerce", "GDPR"],
    icon: "activity",
    link: "https://onlinepharmacy-4u.co.uk/",
  },
  {
    title: "Quick Crave",
    description: "Full-stack food delivery platform with live order tracking, user/admin dashboards, and cart management.",
    tech: ["MERN Stack", "Node.js", "Express", "MongoDB", "React"],
    icon: "truck",
    link: "https://quick-crave-frontend.onrender.com/",
  },
  {
    title: "Plannza",
    description: "SaaS project management platform featuring real-time task collaboration, Stripe billing, and drag-and-drop interfaces.",
    tech: ["Node.js", "Express", "MongoDB", "Next.js 15", "Socket.IO"],
    icon: "zap",
    link: "https://plannza.com/",
  },
  {
    title: "Job Portal",
    description: "Full-stack job portal with multi-step application tracking, employer/candidate dashboards, and admin approval system.",
    tech: ["Laravel PHP", "MySQL", "Tailwind CSS", "RBAC"],
    icon: "users",
  },
  {
    title: "Monitoring Dashboard",
    description: "Real-time institutional analytics platform with interactive maps, data visualization, and complex filtering.",
    tech: ["Angular", ".NET Core", "SQL Server", "Chart.js"],
    icon: "trendingUp",
  },
];

export const experience: PortfolioData['experience'] = [
  {
    role: "Laravel & MERN Developer",
    company: "Tech Solution Pro",
    period: "Dec 2025 - Present",
    highlights: [
      "Architected PharmaPaws, a multi-role RBAC marketplace with Laravel 12 & Socket.IO chat",
      "Built WorkZen Pro, an enterprise SaaS with 10+ modules and Next.js 16 frontend",
      "Developed Now Saffer ride-hailing app with real-time GPS tracking and Stripe Connect",
      "Engineered Media Mace & TSP Site using React 19, Vite, and Tailwind CSS 4",
    ],
  },
  {
    role: "MERN | Angular | Laravel | .NET Developer",
    company: "Innovcyte Technologies",
    period: "Nov 2023 - Sep 2025",
    highlights: [
      "Built a full-featured Job Portal with multi-step application tracking and admin panel",
      "Developed a Registration Portal with OTP verification and document submission workflows",
      "Created a Full-Stack Monitoring App with real-time analytics and data visualization in Angular & .NET",
      "Implemented Skilling Pakistan data scraping and reporting pipelines",
    ],
  },
  {
    role: "React Native Developer",
    company: "Develo IT Solutions",
    period: "Jul 2023 - Nov 2023",
    highlights: [
      "Developed cross-platform mobile apps using Redux, Firebase, and Firestore",
      "Integrated real-time order tracking and push notifications",
      "Utilized Cloudinary for multimedia and React Native Maps for location services",
    ],
  },
];

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/anooshfarhad44-dot", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anoosh-farhad-4b3088389", icon: "linkedin" },
];

export const contact: PortfolioData['contact'] = {
  title: "Get In Touch",
  description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  email: "anooshfarhad4.4@gmail.com",
  phone: "+92 348 5153978",
  location: "Islamabad, Pakistan",
  socials,
};

export const education: PortfolioData['education'] = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "COMSATS University, Islamabad",
    period: "Sep 2019 - Jun 2023",
    details: "FYP: Outpost Steer (React Native, Node.js, Flask, FastAPI)",
  },
];

export const achievements: PortfolioData['achievements'] = [
  {
    title: "Gold Medalist",
    description: "Regional Weightlifting Championship, COMSATS",
  },
  {
    title: "JavaScript Certification",
    description: "Frontend Development",
  },
];

export const footer: PortfolioData['footer'] = {
  copyright: `2026 Anoosh Farhad. Built with passion.`,
  tagline: "Laravel & PHP · Full Stack · React · MERN · Next.js",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "SaaS & UK Projects" },
  { value: "100+", label: "API Endpoints Built" },
  { value: "10+", label: "Modules in WorkZen Pro" },
];

export const techStack = [
  "Laravel (PHP)",
  "React / Next.js",
  "Node.js",
  ".NET Core",
  "React Native",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "TypeScript",
  "Python",
  "Stripe",
  "Socket.IO",
  "Docker",
  "Git",
];

export const portfolioData: PortfolioData = {
  meta,
  hero,
  skills,
  projects,
  experience,
  education,
  achievements,
  contact,
  footer,
};

export default portfolioData;
