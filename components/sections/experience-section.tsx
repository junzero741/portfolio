import ExperienceTimeline from '@/components/experience-timeline';
import type { ExperienceItem } from '@/data/experience';
import { useTranslations } from 'next-intl';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const t = useTranslations();

  return (
    <div id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-white">{t('navigation.experience')}</h2>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>
    </div>
  );
}
