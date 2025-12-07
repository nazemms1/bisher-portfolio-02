import type { Icon } from "@tabler/icons-react";

export interface Project {
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
  playStore: string | null;
  appStore: string | null;
  website?: string | null;
  current: boolean;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  current: boolean;
}

export interface SkillCategory {
  title: string;
  icon: Icon;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  resumePath?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: Icon;
}
