import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "프로젝트 - Portfolio",
  description: "주요 프로젝트 및 성과",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            프로젝트
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제 서비스에 기여한 프로젝트와 주요 성과를 소개합니다
          </p>
        </div>

        <ProjectsGrid items={projects} />
      </div>
    </div>
  );
}
