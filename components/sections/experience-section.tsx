import { Briefcase, GraduationCap } from "lucide-react";
import ExperienceTimeline from "@/components/experience-timeline";
import type { ExperienceItem } from "@/data/experience";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <div id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 shadow-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">경력</h2>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>
    </div>
  );
}
