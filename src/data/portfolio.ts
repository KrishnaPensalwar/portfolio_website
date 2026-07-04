import voyageVirtuoso from "@/assets/voyage_virtuoso.png";
import cleanCity from "@/assets/clean_city.png";
import aiPlugin from "@/assets/ai_plugin.png";
import { skillIcons, type SkillIcon } from "@/data/skillIcons";

export const siteConfig = {
  name: "Krishna Pensalwar",
  title: "Krishna Pensalwar | Portfolio",
  description:
    "Android Developer specializing in Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, and building modern, scalable mobile applications.",
  email: "krishnapensalwar4@gmail.com",
  github: "https://github.com/KrishnaPensalwar",
  linkedin: "https://linkedin.com/in/krishnapensalwar",
  twitter: "https://twitter.com/krishnapensalwar",
  resumeUrl:
    "https://drive.google.com/file/d/1VNZeSGy_ImTq0a6RIYLoXrr7JbYMAA7q/view?usp=drive_link",
  phone: "8080657748",
  phoneCountryCode: "+91",
};

export function getPhoneDisplay() {
  return `${siteConfig.phoneCountryCode} ${siteConfig.phone}`;
}

export function getPhoneHref() {
  return `tel:${siteConfig.phoneCountryCode}${siteConfig.phone}`;
}

const PLACEHOLDER_URL_PARTS = [
  "your-username",
  "your-live-demo-link.com",
  "#",
];

export function isValidProjectUrl(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "#") return false;

  return !PLACEHOLDER_URL_PARTS.some((part) => trimmed.includes(part));
}

export function getProjectUrl(project: {
  link?: string;
  github?: string;
}): string {
  if (isValidProjectUrl(project.link)) return project.link!;
  if (isValidProjectUrl(project.github)) return project.github!;
  return siteConfig.github;
}

/* ---------------- NAV LINKS ---------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "Contact", href: "#contact" },
];

/* ---------------- GREETING (FIXED: dynamic) ---------------- */

export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return { greeting: "Good Morning", emoji: "🌅" };
  }

  if (hour >= 12 && hour < 17) {
    return { greeting: "Good Afternoon", emoji: "☀️" };
  }

  else{
    return { greeting: "Good Evening", emoji: "🌙" };
  }

}

/* ---------------- ABOUT CONTENT (FIXED: dynamic call) ---------------- */

export type AboutContent = {
  greeting: string;
  emoji: string;
  paragraphs: string[];
};


export function getAboutContent(): AboutContent {
  const { greeting, emoji } = getGreeting();

  return {
    greeting,
    emoji,
    paragraphs: [
      "I'm **Krishna Pensalwar**, an **Android Developer** passionate about building scalable, high-performance, and user-centric mobile applications. I specialize in **Kotlin**, **Jetpack Compose**, **MVVM/MVI architecture**, and creating modern Android experiences with clean, maintainable code.",
      "I've built applications across travel planning, digital payments, smart city solutions, and AI-powered developer tools. My experience includes REST API integration using **Ktor**, state management, offline-first architecture, performance optimization, and developing production-ready Android applications.",
      "Beyond Android development, I enjoy solving challenging problems through **Data Structures & Algorithms**, exploring system design concepts, and continuously learning emerging technologies to build efficient and scalable software.",
      "My long-term goal is to contribute to impactful mobile products, solve complex engineering challenges, and build Android applications that deliver exceptional user experiences while maintaining high standards of quality, performance, and scalability.",
    ],
  };
}

/* ---------------- WHAT I DO ---------------- */

export const whatIDo = [
  {
    icon: "Smartphone",
    title: "Android Development",
    description:
      "Building modern, scalable Android applications using Kotlin and Jetpack Compose with a focus on clean architecture, maintainability, and exceptional user experiences.",
  },
  {
    icon: "Layers",
    title: "Modern Android Architecture",
    description:
      "Designing robust applications with MVVM/MVI, Clean Architecture, modularization, state management, dependency injection, and lifecycle-aware components.",
  },
  {
    icon: "Server",
    title: "API Integration & Data",
    description:
      "Integrating REST APIs using Ktor, handling asynchronous data with Kotlin Coroutines and Flow, implementing offline-first strategies, and ensuring reliable data synchronization.",
  },
  {
    icon: "Cpu",
    title: "Performance & Optimization",
    description:
      "Optimizing app performance through efficient state management, memory optimization, responsive UI design, and smooth animations for production-ready Android applications.",
  },
  {
    icon: "Brain",
    title: "Problem Solving & DSA",
    description:
      "Strong foundation in Data Structures & Algorithms, object-oriented programming, and system design, enabling efficient solutions to complex engineering challenges.",
  },
  {
    icon: "Sparkles",
    title: "AI & Continuous Learning",
    description:
      "Exploring AI-powered development tools, modern Android technologies, and best practices to build innovative mobile applications and continuously improve engineering skills.",
  },
];

/* ---------------- SKILLS ---------------- */

export type Skill = {
  name: string;
  proficiency: number;
  icon: SkillIcon;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "android",
    label: "Android",
    skills: [
      { name: "Kotlin", proficiency: 95, icon: skillIcons.kotlin },
      { name: "Android", proficiency: 92, icon: skillIcons.android },
      {
        name: "Jetpack Compose",
        proficiency: 92,
        icon: skillIcons.jetpackCompose,
      },
      { name: "Android SDK", proficiency: 90, icon: skillIcons.androidSdk },
      {
        name: "Jetpack Libraries",
        proficiency: 88,
        icon: skillIcons.jetpackLibraries,
      },
      {
        name: "Material Design 3",
        proficiency: 90,
        icon: skillIcons.materialDesign3,
      },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    skills: [
      {
        name: "Clean Architecture",
        proficiency: 90,
        icon: skillIcons.cleanArchitecture,
      },
      { name: "MVVM", proficiency: 92, icon: skillIcons.mvvm },
      { name: "MVI", proficiency: 88, icon: skillIcons.mvi },
      {
        name: "Repository Pattern",
        proficiency: 90,
        icon: skillIcons.repositoryPattern,
      },
      {
        name: "Dependency Injection (Koin)",
        proficiency: 85,
        icon: skillIcons.koin,
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Kotlin", proficiency: 95, icon: skillIcons.kotlin },
      { name: "Java", proficiency: 85, icon: skillIcons.java },
      { name: "SQL", proficiency: 80, icon: skillIcons.sql },
    ],
  },
  {
    id: "networking",
    label: "Networking & Data",
    skills: [
      { name: "Ktor Client", proficiency: 90, icon: skillIcons.ktor },
      { name: "REST APIs", proficiency: 92, icon: skillIcons.restApis },
      {
        name: "Kotlin Coroutines",
        proficiency: 90,
        icon: skillIcons.coroutines,
      },
      {
        name: "Flow & StateFlow",
        proficiency: 88,
        icon: skillIcons.flowStateFlow,
      },
      { name: "Room Database", proficiency: 85, icon: skillIcons.room },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      {
        name: "Android Studio",
        proficiency: 95,
        icon: skillIcons.androidStudio,
      },
      { name: "Git", proficiency: 90, icon: skillIcons.git },
      { name: "GitHub", proficiency: 90, icon: skillIcons.github },
      { name: "Firebase", proficiency: 82, icon: skillIcons.firebase },
      { name: "Postman", proficiency: 85, icon: skillIcons.postman },
      { name: "Figma", proficiency: 75, icon: skillIcons.figma },
    ],
  },
];

/* ---------------- EXPERIENCE ---------------- */

export const experiences = [
  {
    title: "Android Developer",
    company: "Sociante Pvt Ltd",
    type: "Internship",
    period: "Oct 2024 – May 2025",
    highlights: [
      "Developed native Android applications using Kotlin and Jetpack Compose, focusing on responsive and intuitive user interfaces.",
      "Integrated RESTful APIs and implemented asynchronous data handling using Kotlin Coroutines.",
      "Followed MVVM architecture and Android best practices to build scalable and maintainable applications.",
      "Collaborated with designers and backend developers to deliver production-ready features while debugging and optimizing application performance.",
    ],
  },
  {
    title: "Product Engineer Trainee",
    company: "Loyalty Juggernaut",
    type: "Trainee",
    period: "Jul 2025 – Oct 2025",
    highlights: [
      "Developed Android features using Kotlin and Jetpack Compose for enterprise-grade mobile applications.",
      "Implemented clean architecture principles with modular code, improving maintainability and scalability.",
      "Integrated backend services using Ktor and REST APIs while managing application state with modern Android architecture.",
      "Participated in code reviews, debugging sessions, and Agile development practices to ensure high-quality software delivery.",
    ],
  },
  {
    title: "Product Engineer",
    company: "Loyalty Juggernaut",
    type: "Full time",
    period: "Oct 2025 – Present",
    highlights: [
      "Designing and developing scalable Android applications using Kotlin, Jetpack Compose, and modern Android development practices.",
      "Building reusable UI components, optimizing app performance, and enhancing user experience across multiple features.",
      "Architecting applications using Clean Architecture, MVVM/MVI, Coroutines, and Flow for maintainable and testable codebases.",
      "Collaborating with cross-functional teams to deliver high-quality mobile solutions, integrate APIs, and drive continuous product improvements.",
    ],
  },
];

/* ---------------- PROJECTS ---------------- */

export const projects = [
  {
    title: "Voyage Virtuoso",
    category: "AI Travel Planner",
    description:
      "An AI-powered travel planning application that generates personalized itineraries using Gemini AI. Built with Jetpack Compose using MVI architecture and Ktor for networking.",
    image: voyageVirtuoso.src,
    tags: ["Kotlin", "Jetpack Compose", "MVI", "Ktor", "Gemini AI"],
    github: "https://github.com/KrishnaPensalwar",
    link: "https://github.com/KrishnaPensalwar",
  },
  {
    title: "Clean City Smart City",
    category: "Smart City App",
    description:
      "A citizen engagement Android application for reporting civic issues, tracking complaints, and improving communication with municipal systems.",
    image: cleanCity.src,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Maps", "MVVM"],
    github: "https://github.com/KrishnaPensalwar/CleanCityApp",
    link: "https://github.com/KrishnaPensalwar",
  },
  {
    title: "AI Code Review Plugin",
    category: "Developer Tool",
    description:
      "An IntelliJ/Android Studio plugin that provides AI-powered code reviews using Gemini, helping improve code quality directly inside the IDE.",
    image: aiPlugin.src,
    tags: ["Kotlin", "IntelliJ SDK", "Gemini AI", "Ktor"],
    github: "https://github.com/KrishnaPensalwar",
    link: "https://github.com/KrishnaPensalwar",
  },
];