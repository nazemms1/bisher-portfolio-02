import {
  IconBrandFlutter,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandPython,
  IconDatabase,
  IconBrandGit,
  IconCode,
  IconDeviceMobile,
  IconBriefcase,
  IconBrandGooglePlay,
  IconBrandApple,
  IconCalendar,
  IconSchool,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconWorld,
  IconDownload,
} from "@tabler/icons-react";

export const skillIcons = {
  mobile: IconDeviceMobile,
  web: IconBrandReact,
  database: IconDatabase,
  tools: IconCode,
  design: IconBrandJavascript,
  security: IconBrandGit,
  management: IconBriefcase,
  flutter: IconBrandFlutter,
  react: IconBrandReact,
  javascript: IconBrandJavascript,
  python: IconBrandPython,
  git: IconBrandGit,
} as const;

export const generalIcons = {
  briefcase: IconBriefcase,
  playStore: IconBrandGooglePlay,
  appStore: IconBrandApple,
  website: IconWorld,
  calendar: IconCalendar,
  school: IconSchool,
  mail: IconMail,
  phone: IconPhone,
  location: IconMapPin,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  download: IconDownload,
} as const;

export const icons = {
  ...skillIcons,
  ...generalIcons,
} as const;
