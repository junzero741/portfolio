import { Metadata } from "next";
import { experiences } from "@/data/experience";
import ExperienceTimeline from "@/components/experience-timeline";
import { Briefcase, GraduationCap } from "lucide-react";
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: "경력/학력 - Portfolio",
  description: "경력 및 학력 정보",
};

type Props = {
  params: Promise<{locale: string}>;
};

export default async function ExperiencePage(
  {params}: Props
) {
  const {locale} = await params;
  setRequestLocale(locale);

  const workExperiences = experiences.filter((item) => item.type === "work");
  const educationExperiences = experiences.filter((item) => item.type === "education");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            경력 <span className="text-blue-600">&</span> 학력
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전문적인 경험과 학습 여정을 소개합니다
          </p>
        </div>

        {/* Work Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">경력</h2>
          </div>
          <ExperienceTimeline items={workExperiences} />
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">학력</h2>
          </div>
          <ExperienceTimeline items={educationExperiences} />
        </section>
      </div>
    </div>
  );
}
