import ProjectsGrid from '@/components/projects-grid';
import type { ProjectItem } from '@/data/projects';
import { useTranslations } from 'next-intl';

interface ProjectsSectionProps {
  items: ProjectItem[];
}

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  const t = useTranslations();

  return (
    <div id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-white">{t('projects.title')}</h2>
        </div>
        <ProjectsGrid items={items} />
      </section>
    </div>
  );
}
