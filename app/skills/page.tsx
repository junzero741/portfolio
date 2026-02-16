import { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "기술 스택 - Portfolio",
  description: "보유 기술 스택 및 숙련도",
};

const levelColor: Record<string, string> = {
  Advanced: "text-green-600",
  Intermediate: "text-blue-600",
  Beginner: "text-orange-600",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-pink-50/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">기술 스택</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            프론트엔드 중심의 기술 스택과 협업 도구를 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title} gradient={category.gradient}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2"
                    >
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <Badge variant="outline" className={levelColor[skill.level]}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  프론트엔드 기술을 메인으로 하며, 사이드 프로젝트를 통해
                  백엔드 영역까지 확장하고 있습니다.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
