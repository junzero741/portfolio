import { Users, Award, BadgeCheck } from "lucide-react";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import type { ActivityItem } from "@/data/activities";

interface ActivitiesSectionProps {
  activities: ActivityItem[];
  awards: ActivityItem[];
  certificates: ActivityItem[];
}

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <Card gradient="purple">
      <div className="text-center py-6">
        <p className="text-gray-600">{label} 정보가 아직 없습니다.</p>
        <p className="text-sm text-gray-500 mt-2">추가 예정입니다.</p>
      </div>
    </Card>
  );
}

export default function ActivitiesSection({
  activities,
  awards,
  certificates,
}: ActivitiesSectionProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-16">
        <SectionHeader
          icon={<Users className="h-6 w-6 text-white" />}
          title="외부 활동"
          description="컨퍼런스, 발표, 커뮤니티 활동 등"
        />
        {activities.length === 0 ? (
          <EmptyState label="외부 활동" />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {activities.map((item) => (
              <Card key={item.id} gradient={item.gradient}>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <p className="text-sm text-gray-600 mt-1">
                        {item.organization}
                      </p>
                    )}
                  </div>
                  {item.date && (
                    <Badge variant="outline">{item.date}</Badge>
                  )}
                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-purple-600 hover:text-purple-700"
                    >
                      링크 보기 →
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="mb-16">
        <SectionHeader
          icon={<Award className="h-6 w-6 text-white" />}
          title="수상"
          description="수상 내역 및 주요 성과"
        />
        {awards.length === 0 ? (
          <EmptyState label="수상" />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {awards.map((item) => (
              <Card key={item.id} gradient={item.gradient}>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <p className="text-sm text-gray-600 mt-1">
                        {item.organization}
                      </p>
                    )}
                  </div>
                  {item.date && (
                    <Badge variant="outline">{item.date}</Badge>
                  )}
                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="mb-20">
        <SectionHeader
          icon={<BadgeCheck className="h-6 w-6 text-white" />}
          title="자격증"
          description="보유 자격증 및 어학 성적"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {certificates.map((item) => (
            <Card key={item.id} gradient={item.gradient}>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  {item.organization && (
                    <p className="text-sm text-gray-600 mt-1">
                      {item.organization}
                    </p>
                  )}
                </div>
                {item.date && item.date.length > 0 && (
                  <Badge variant="outline">{item.date}</Badge>
                )}
                {item.description && item.description.length > 0 && (
                  <ul className="space-y-1 text-sm text-gray-600">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
