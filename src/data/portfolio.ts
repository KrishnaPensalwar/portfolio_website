import voyageVirtuoso from "@/assets/voyage_virtuoso.png";
import cleanCity from "@/assets/clean_city.png";
import aiPlugin from "@/assets/ai_plugin.png";
import { skillIcons, type SkillIcon } from "@/data/skillIcons";

export const siteConfig = {
  name: "Krishna Pensalwar",
  location: "Hyderabad, India",
  roleTitle: "Product Engineer • Android",
  degree: "B.E IT • CGPA 9.12",
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
  heroSkills: ["Kotlin", "Compose", "MVVM", "Ktor", "Clean Arch", "MVI", "Coroutines"],
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

/* ---------------- ABOUT CONTENT ---------------- */

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
      "I'm **Krishna \n Pensalwar**, an **Android Developer** passionate about building scalable, high-performance, and user-centric mobile applications. I specialize in **Kotlin**, **Jetpack Compose**, **MVVM/MVI architecture**, and creating modern Android experiences with clean, maintainable code.",
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

/* ---------------- EXPERIENCE (Decreasing Order: Present on top, Internship on bottom) ---------------- */

export interface ExperienceItem {
  title: string;
  company: string;
  type?: string;
  period: string;
  isPresent?: boolean;
  isInternship?: boolean;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Product Engineer",
    company: "Loyalty Juggernaut",
    type: "Full time",
    period: "Oct 2025 – Present",
    isPresent: true,
    highlights: [
      "Designing and developing scalable Android applications using Kotlin, Jetpack Compose, and modern Android development practices.",
      "Building reusable UI components, optimizing app performance, and enhancing user experience across multiple features.",
      "Architecting applications using Clean Architecture, MVVM/MVI, Coroutines, and Flow for maintainable and testable codebases.",
      "Collaborating with cross-functional teams to deliver high-quality mobile solutions, integrate APIs, and drive continuous product improvements.",
    ],
  },
  {
    title: "Product Engineer Trainee",
    company: "Loyalty Juggernaut",
    type: "Trainee",
    period: "Jul 2025 – Oct 2025",
    isPresent: false,
    highlights: [
      "Developed Android features using Kotlin and Jetpack Compose for enterprise-grade mobile applications.",
      "Implemented clean architecture principles with modular code, improving maintainability and scalability.",
      "Integrated backend services using Ktor and REST APIs while managing application state with modern Android architecture.",
      "Participated in code reviews, debugging sessions, and Agile development practices to ensure high-quality software delivery.",
    ],
  },
  {
    title: "Android Developer",
    company: "Sociante Pvt Ltd",
    type: "Internship",
    period: "Oct 2024 – May 2025",
    isPresent: false,
    isInternship: true,
    highlights: [
      "Developed native Android applications using Kotlin and Jetpack Compose, focusing on responsive and intuitive user interfaces.",
      "Integrated RESTful APIs and implemented asynchronous data handling using Kotlin Coroutines.",
      "Followed MVVM architecture and Android best practices to build scalable and maintainable applications.",
      "Collaborated with designers and backend developers to deliver production-ready features while debugging and optimizing application performance.",
    ],
  },
];

/* ---------------- PROJECTS DETAILED ---------------- */

export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  link: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: { title: string; description: string }[];
  impact: string;
  techStackDetailed: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "voyage-virtuoso",
    title: "Voyage Virtuoso",
    category: "AI Travel Planner",
    tagline: "Intelligent, AI-powered itinerary generation and trip management for Android.",
    description:
      "An AI-powered travel planning application that generates personalized itineraries using Gemini AI. Built with Jetpack Compose using MVI architecture and Ktor for networking.",
    image: voyageVirtuoso.src,
    tags: ["Kotlin", "Jetpack Compose", "MVI", "Ktor", "Gemini AI"],
    github: "https://github.com/KrishnaPensalwar/VoyageVirtuoso",
    link: "https://github.com/KrishnaPensalwar/VoyageVirtuoso",
    problem:
      "Travelers often spend hours research destination activities, budgeting, and organizing daily schedules across multiple browser tabs and notes apps. Existing travel apps lack personalized real-time AI adjustments based on user preferences, time constraints, and destination dynamics.",
    solution:
      "Voyage Virtuoso leverages Google's Gemini AI combined with a modern MVI Android architecture to transform plain-text travel prompts into structured, multi-day itineraries. Users get tailored day-by-day schedules with activity recommendations, maps integration, budget breakdowns, and instant AI re-planning.",
    architecture: [
      "MVI (Model-View-Intent) architecture for unidirectional data flow and predictable UI states.",
      "Ktor Client for lightweight asynchronous HTTP networking with Kotlin Serialization.",
      "Kotlin Coroutines & StateFlow for non-blocking asynchronous operations and reactive UI updates.",
      "Clean Architecture layers (Domain, Data, UI) enabling testability and separation of concerns."
    ],
    keyFeatures: [
      {
        title: "Personalized AI Itineraries",
        description: "Generates custom day-by-day trip schedules based on budget, travel style, companions, and trip duration."
      },
      {
        title: "Dynamic Smart Re-planning",
        description: "Allows users to modify plans on the fly — ask the AI assistant to substitute activities or adjust schedules dynamically."
      },
      {
        title: "Reactive Compose UI",
        description: "Built with Material Design 3 and smooth Jetpack Compose animations for fluid navigation and dark mode support."
      },
      {
        title: "Offline Sync & Local Caching",
        description: "Stores generated itineraries locally so travelers can access schedules even without active cellular data."
      }
    ],
    impact:
      "Reduced itinerary planning time by 75% while providing a seamless declarative Android user experience using cutting-edge AI integration.",
    techStackDetailed: [
      "Kotlin",
      "Jetpack Compose",
      "Google Gemini AI API",
      "Ktor Client",
      "Kotlin Coroutines",
      "Flow / StateFlow",
      "MVI Architecture",
      "Material Design 3"
    ]
  },
  {
    slug: "clean-city",
    title: "Clean City Smart City",
    category: "Smart City Civic App",
    tagline: "Empowering citizens to report civic issues and track municipal resolutions in real time.",
    description:
      "A citizen engagement Android application for reporting civic issues, tracking complaints, and improving communication with municipal systems.",
    image: cleanCity.src,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Maps", "MVVM"],
    github: "https://github.com/KrishnaPensalwar/CleanCity",
    link: "https://github.com/KrishnaPensalwar/CleanCity",
    problem:
      "Citizens in urban areas face friction when trying to report local infrastructure damage, sanitation issues, or garbage accumulation. Municipal bodies struggle with duplicate complaints and inaccurate geolocation mapping.",
    solution:
      "Clean City provides a streamlined mobile platform where citizens capture photos, auto-attach accurate GPS coordinates, categorize complaints, and monitor live progress status from municipality workers.",
    architecture: [
      "MVVM (Model-View-ViewModel) architecture paired with Repository pattern.",
      "Firebase Firestore & Storage for real-time document sync and image uploads.",
      "Google Maps SDK & Location Services API for precise geofencing and geotagging.",
      "Jetpack Navigation & Compose State Management for seamless tabbed navigation."
    ],
    keyFeatures: [
      {
        title: "Geo-tagged Photo Complaints",
        description: "Capture and upload issue photos with instant EXIF and GPS location tagging for exact municipal dispatch."
      },
      {
        title: "Real-time Resolution Tracking",
        description: "Live status updates (Submitted → Assigned → In Progress → Resolved) with push notifications."
      },
      {
        title: "Interactive City Issue Map",
        description: "View community reported issues on an interactive Google Map to prevent duplicate complaint filings."
      },
      {
        title: "Municipal Admin Workflow Sync",
        description: "Direct integration with municipal department dispatch feeds for prioritized issue resolution."
      }
    ],
    impact:
      "Streamlined civic issue reporting workflow, enhanced municipal accountability, and improved issue resolution tracking for citizens.",
    techStackDetailed: [
      "Kotlin",
      "Jetpack Compose",
      "Google Maps SDK",
      "Firebase Firestore",
      "Firebase Storage & Auth",
      "MVVM Architecture",
      "Android Fused Location Provider"
    ]
  },
  {
  slug: "devkit-tool",

  title: "DevKit Tool",

  category: "Android Developer Productivity Tool",

  tagline:
    "DevKit is an Android developer toolkit designed to simplify debugging, monitoring, and troubleshooting during app development by providing powerful tools for inspecting network activity, crashes, performance, storage, device information, and application behavior.",

  description:
    "DevKit is an Android developer toolkit that brings essential debugging and monitoring capabilities directly into Android applications. It helps developers inspect network requests, analyze crashes, monitor performance, explore local storage, view device information, and troubleshoot application behavior during development and testing.",

  image: aiPlugin.src,

  tags: [
    "Kotlin",
    "Jetpack Compose",
    "Android SDK",
    "Ktor",
    "Room",
    "DataStore",
    "Coroutines"
  ],

  github: "https://github.com/KrishnaPensalwar/DevToolSDK",

  link: "https://github.com/KrishnaPensalwar/DevToolSDK",

  problem:
    "Android developers often rely on multiple external tools, logs, Android Studio inspectors, and debugging utilities to investigate application issues. Switching between different tools makes it harder to quickly understand network behavior, crashes, performance problems, storage state, and device information while developing an application.",

  solution:
    "DevKit provides an integrated developer toolkit that can be embedded into Android applications during development and testing. It gives developers a centralized interface for monitoring network activity, inspecting crashes, analyzing performance, exploring application storage, viewing device information, and troubleshooting application behavior without relying on multiple separate tools.",

  architecture: [

    "Modular Android SDK architecture designed to integrate DevKit into existing Android applications with minimal configuration.",

    "Jetpack Compose based developer dashboard providing interactive interfaces for debugging and monitoring application behavior.",

    "Ktor HTTP Client based network monitoring and request/response inspection.",

    "Room and DataStore integration for inspecting and managing application-local persisted data.",

    "Kotlin Coroutines for asynchronous monitoring, data collection, and background operations while keeping the application UI responsive.",

    "Centralized DevTool initialization and configuration layer for SDK setup, logging, and feature management."

  ],

  keyFeatures: [

    {
      title: "Network Inspector",

      description:
        "Monitor HTTP network activity and inspect requests, responses, headers, payloads, status codes, and other network details during application development."
    },

    {
      title: "Crash Monitoring",

      description:
        "Capture and inspect application crash information to help developers understand failures and identify potential issues during development and testing."
    },

    {
      title: "Performance Monitoring",

      description:
        "Inspect application performance information and identify areas that may contribute to slow or inefficient application behavior."
    },

    {
      title: "Storage Inspector",

      description:
        "Explore application-local storage and inspect persisted data from sources such as Room databases and DataStore."
    },

    {
      title: "Device Information",

      description:
        "View useful device and application environment information including device characteristics, Android version, and other runtime details."
    },

    {
      title: "Response Editor & Mocking",

      description:
        "Modify or mock network responses during development to test different API scenarios, error states, and application behaviors without changing the backend."
    },

    {
      title: "Developer Dashboard",

      description:
        "Provides a centralized Jetpack Compose dashboard that brings debugging, monitoring, and inspection tools together in one developer-friendly interface."
    },

    {
      title: "Analytics & Network Insights",

      description:
        "Analyze captured network activity and provide useful insights into application API behavior and network usage."
    }

  ],

  impact:
    "Improved Android development and debugging efficiency by bringing network inspection, crash analysis, performance monitoring, storage inspection, device information, and API mocking into a single integrated developer toolkit.",

  techStackDetailed: [

    "Kotlin",

    "Android SDK",

    "Jetpack Compose",

    "Kotlin Coroutines",

    "Ktor HTTP Client",

    "Room",

    "DataStore",

    "AndroidX",

    "Gradle",

    "Maven Publish"

  ]
}
];
