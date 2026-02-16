import { Briefcase, GraduationCap } from "lucide-react";
import ExperienceTimeline from "@/components/experience-timeline";
import type { ExperienceItem } from "@/data/experience";

interface ExperienceSectionProps {
  workExperiences: ExperienceItem[];
  educationExperiences: ExperienceItem[];
}

export default function ExperienceSection({
  workExperiences,
  educationExperiences,
}: ExperienceSectionProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">경력</h2>
        </div>
        <ExperienceTimeline items={workExperiences} />
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">학력</h2>
        </div>
        <ExperienceTimeline items={educationExperiences} />
      </section>
    </div>
  );
}
