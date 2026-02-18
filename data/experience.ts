export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  role: string;
  organization: string;
  website?: string;
  startDate: string;
  endDate: string | 'Present';
  logo: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'work-1',
    type: 'work',
    role: 'Frontend Engineer',
    organization: 'company.berapt.name',
    website: 'https://www.berapt.com',
    startDate: '2022-09',
    endDate: '2025-12',
    logo: '/logos/beraptLogo.png',
  },
  {
    id: 'work-2',
    type: 'work',
    role: 'Frontend Engineer',
    organization: 'company.jejodo.name',
    website: 'https://brand04.solutions',
    startDate: '2021-09',
    endDate: '2022-09',
    logo: '/logos/hoikLogo.png',
  },
];
