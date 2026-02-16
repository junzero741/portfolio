import { Briefcase } from "lucide-react";
import ProjectsGrid from "@/components/projects-grid";
import type { ProjectItem } from "@/data/projects";

interface ProjectsSectionProps {
  items: ProjectItem[];
}

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">프로젝트</h2>
        </div>
        <ProjectsGrid items={items} />
      </section>
    </div>
  );
}
