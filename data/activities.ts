export type ActivityType = 'activity' | 'award' | 'certificate';

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  organization?: string;
  date?: string;
  description?: string[];
  link?: string;
  gradient: 'blue' | 'purple' | 'orange' | 'green';
}

export const activities: ActivityItem[] = [];

export const awards: ActivityItem[] = [];

export const certificates: ActivityItem[] = [
  {
    id: 'cert-sqld',
    type: 'certificate',
    title: 'SQLD',
    organization: '한국데이터산업진흥원',
    date: '',
    description: [],
    gradient: 'blue',
  },
  {
    id: 'cert-toeic',
    type: 'certificate',
    title: 'TOEIC 860',
    organization: 'ETS',
    date: '',
    description: [],
    gradient: 'green',
  },
];
