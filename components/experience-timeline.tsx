'use client';

import { ExperienceItem } from '@/data/experience';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group p-4 rounded-lg hover:bg-gray-900/50 transition-colors animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-xl font-bold text-white">{t(item.organization)}</h3>
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Visit website"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-gray-300 mb-1">{item.role}</p>
              <p className="text-sm text-gray-500">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
