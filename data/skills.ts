export interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  description?: string;
}

export interface SkillCategory {
  title: string;
  gradient: "blue" | "purple" | "orange" | "green";
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    gradient: "purple",
    items: [
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Collaboration",
    gradient: "blue",
    items: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Vercel", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Productivity",
    gradient: "green",
    items: [
      { name: "Gemini", level: "Intermediate" },
      { name: "GitHub Copilot", level: "Intermediate" },
      { name: "Claude", level: "Intermediate" },
    ],
  },
];
