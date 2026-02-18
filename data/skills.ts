export interface SkillItem {
  name: string;
  icon: string;
  description?: string;
}

export interface SkillCategory {
  title: string;

  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'TS', icon: '/icons/typescript.svg' },
      { name: 'JS', icon: '/icons/javascript.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next', icon: '/icons/nextdotjs.svg' },
    ],
  },
  {
    title: 'Backend / Infra',
    items: [
      { name: 'Supabase', icon: '/icons/supabase.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
    ],
  },
  {
    title: 'CI/CD',
    items: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'ArgoCD', icon: '/icons/argo.svg' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { name: 'Gemini', icon: '/icons/gemini.svg' },
      { name: 'Claude', icon: '/icons/claude.svg' },
    ],
  },
];
