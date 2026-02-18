import { ProjectItem } from '@/data/projects';
import Dialog, { DialogProps } from './ui/dialog';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/lib/i18n/navigation';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectModalProps extends Omit<DialogProps, 'children'> {
  selectedProject: ProjectItem | null;
}

export default function ProjectDialog({
  isOpen,
  onClose,
  selectedProject,
  ...rest
}: ProjectModalProps) {
  const t = useTranslations();

  return (
    <Dialog isOpen={isOpen} onClose={onClose} {...rest}>
      {selectedProject && (
        <div className="p-8 space-y-6">
          <div>
            <Link
              key={selectedProject.link.href}
              href={selectedProject.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-300 hover:text-white"
            >
              <h2 className="text-3xl font-bold text-white">{t(selectedProject.title)}</h2>
              <ExternalLink className="h-4 w-4" />
            </Link>
            {selectedProject.subtitle && (
              <p className="text-gray-400 mt-2">{t(selectedProject.subtitle)}</p>
            )}
          </div>

          {/* Screenshots */}
          {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
            <div className="space-y-4">
              <div className="flex gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col gap-2 w-[85%] sm:w-[75%] md:w-full flex-shrink-0 md:flex-shrink rounded-lg overflow-hidden text-white snap-center"
                  >
                    <Image
                      src={screenshot.src}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      width={1200}
                      height={800}
                      className={cn('w-full h-auto object-contain h-[400px] md:h-auto')}
                    />
                    <p className="pre-wrap">{t(screenshot.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Dialog>
  );
}
