export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  website?: string;
  startDate: string;
  endDate: string | "Present";
}

export const experiences: ExperienceItem[] = [
  {
    id: "work-1",
    type: "work",
    role: "Frontend Engineer",
    organization: "비랩트 (Berapt)",
    website: "https://www.berapt.com",
    startDate: "2022-09",
    endDate: "2025-12",
  },
  {
    id: "work-2",
    type: "work",
    role: "Frontend Engineer",
    organization: "획기획 / 제조도",
    website: "https://jejodo.life",
    startDate: "2021-09",
    endDate: "2022-09",
  },
];
