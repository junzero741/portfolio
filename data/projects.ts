export type ProjectCategory = "work" | "side";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  company: string;
  period: string;
  category: ProjectCategory;
  summary: string;
  tech: string[];
  roles: string[];
  achievements: string[];
  links?: ProjectLink[];
}

export const projects: ProjectItem[] = [
  {
    id: "shoulder-pick",
    title: "projects.shoulderPick.title",
    subtitle: "projects.shoulderPick.subTitle",
    company: "projects.shoulderPick.company",
    period: "2024.03 ~ 2025.12",
    category: "work",
    summary: "projects.shoulderPick.summary",
    tech: ["TypeScript", "Next.js", "React", "Recoil", "React-Query"],
    roles: [
      "projects.shoulderPick.roles.role1",
      "projects.shoulderPick.roles.role2",
      "projects.shoulderPick.roles.role3",
      "projects.shoulderPick.roles.role4",
      "projects.shoulderPick.roles.role5",
    ],
    achievements: [
      "projects.shoulderPick.achievements.achievement1",
      "projects.shoulderPick.achievements.achievement2",
      "projects.shoulderPick.achievements.achievement3",
    ],
    links: [
      { label: "projects.serviceLink", href: "https://pick.shoulder.fan/" },
    ],
    
  },
  {
    id: "shoulder",
    title: "projects.shoulder.title",
    subtitle: "projects.shoulder.subTitle",
    company: "projects.shoulder.company",
    period: "2022.09 ~ 2025.12",
    category: "work",
    summary: "projects.shoulder.summary",
    tech: ["TypeScript", "Next.js", "React", "MobX", "Storybook", "Billboard.js"],
    roles: [
      "projects.shoulder.roles.role1",
      "projects.shoulder.roles.role2",
      "projects.shoulder.roles.role3",
      "projects.shoulder.roles.role4",
      "projects.shoulder.roles.role5",
      "projects.shoulder.roles.role6",
    ],
    achievements: [
      "projects.shoulder.achievements.achievement1",
      "projects.shoulder.achievements.achievement2",
      "projects.shoulder.achievements.achievement3",
    ],
    links: [
      { label: "projects.serviceLink", href: "https://shoulder.fan/" },
    ],
    
  },
  {
    id: "jejodo",
    title: "projects.jejodo.title",
    subtitle: "projects.jejodo.subTitle",
    company: "projects.jejodo.company",
    period: "2021.09 ~ 2022.09",
    category: "work",
    summary: "projects.jejodo.summary", 
    tech: ["JavaScript", "React", "Redux", "Lottie.js", "Web3.js", "TypeScript"],
    roles: [
      "projects.jejodo.roles.role1",
      "projects.jejodo.roles.role2",
      "projects.jejodo.roles.role3",
      "projects.jejodo.roles.role4",
    ],
    achievements: ["projects.jejodo.achievements.achievement1"],
    links: [{ label: "projects.serviceLink", href: "https://www.jejodo.life" }],

  },
];
