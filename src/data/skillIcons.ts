/** Technology logos for the Skills section (SVG assets in /public/icons/skills). */

export type SkillIcon = {
  src: string;
  alt: string;
};

const icon = (file: string, alt: string): SkillIcon => ({
  src: `/icons/skills/${file}`,
  alt,
});

export const skillIcons = {
  kotlin: icon("kotlin.svg", "Kotlin programming language logo"),
  android: icon("android.svg", "Android logo"),
  jetpackCompose: icon("jetpackcompose.svg", "Jetpack Compose logo"),
  androidSdk: icon("android-sdk.svg", "Android SDK logo"),
  jetpackLibraries: icon("jetpack-libraries.svg", "Android Jetpack logo"),
  materialDesign3: icon("materialdesign.svg", "Material Design logo"),
  cleanArchitecture: icon(
    "clean-architecture.svg",
    "Clean Architecture diagram icon"
  ),
  mvvm: icon("mvvm.svg", "MVVM architecture pattern icon"),
  mvi: icon("mvi.svg", "MVI architecture pattern icon"),
  repositoryPattern: icon(
    "repository-pattern.svg",
    "Repository pattern icon"
  ),
  koin: icon("koin.svg", "Koin dependency injection logo"),
  java: icon("java.svg", "Java programming language logo"),
  sql: icon("sqlite.svg", "SQL database logo"),
  ktor: icon("ktor.svg", "Ktor logo"),
  restApis: icon("rest-apis.svg", "REST API logo"),
  coroutines: icon("coroutines.svg", "Kotlin Coroutines logo"),
  flowStateFlow: icon("flow-stateflow.svg", "Kotlin Flow and StateFlow icon"),
  room: icon("room.svg", "Room database logo"),
  androidStudio: icon("androidstudio.svg", "Android Studio logo"),
  git: icon("git.svg", "Git logo"),
  github: icon("github.svg", "GitHub logo"),
  firebase: icon("firebase.svg", "Firebase logo"),
  postman: icon("postman.svg", "Postman logo"),
  figma: icon("figma.svg", "Figma logo"),
  fallback: icon("fallback.svg", "Technology icon"),
} as const satisfies Record<string, SkillIcon>;

export const SKILL_ICON_FALLBACK = skillIcons.fallback;
