import { Briefcase } from "lucide-react";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import type { SkillCategory } from "@/data/skills";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const levelColor: Record<string, string> = {
  Advanced: "text-green-600",
  Intermediate: "text-blue-600",
  Beginner: "text-orange-600",
};

export default function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">기술 스택</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title} gradient={category.gradient}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
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
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
