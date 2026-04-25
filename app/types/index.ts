export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface IconProps {
  name: string;
  className?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'primary';
}

export interface ProgressBarProps {
  value: number;
  className?: string;
}

export interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  isLast?: boolean;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  link?: string;
}

export interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
}

export interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export interface HeroProps {
  name: string;
  title: string;
  description: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface ContactProps {
  title: string;
  description: string;
  email: string;
  socials: SocialLink[];
}

export interface FooterProps {
  copyright: string;
  tagline: string;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export interface GradientBackgroundProps {
  variant?: 'top-right' | 'bottom-left' | 'both';
}

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export interface TechTagProps {
  name: string;
}

export interface HighlightListProps {
  items: string[];
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface PulseDotProps {
  color?: 'red' | 'green' | 'blue';
}

export interface SocialIconProps {
  href: string;
  icon: string;
  label?: string;
  variant?: 'default' | 'large';
}

export interface StatsCardProps {
  value: string;
  label: string;
  icon?: string;
}

export interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export interface ProjectGridProps {
  projects: Project[];
}

export interface SkillsGridProps {
  skills: Skill[];
}

export interface ExperienceListProps {
  experiences: Experience[];
}

export interface ContactButtonsProps {
  email: string;
  socials: SocialLink[];
}

export interface HeroContentProps {
  hero: HeroProps;
}

export interface PageContainerProps {
  children: React.ReactNode;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}

export interface PortfolioData {
  meta: MetaData;
  hero: HeroProps;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contact: ContactProps;
  footer: FooterProps;
}
