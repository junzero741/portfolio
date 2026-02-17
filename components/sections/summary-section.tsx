"use client";

import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";


interface SummaryCardProps {
  children?: React.ReactNode;
}

function SummaryCard({ children }: SummaryCardProps) {
  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all hover:shadow-2xl hover:shadow-white/10 border border-gray-700 hover:border-gray-600 h-full">
        {children}
      </div>
    </div>
  );
}

interface SummarySectionProps {
  
}

export default function SummarySection({

}: SummarySectionProps) {
  const t = useTranslations();
  

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div className="animate-fade-in-up" style={{ animationDelay: `${0 * 0.1}s` }}>
		<SummaryCard>
              <h3 className="text-xl font-bold text-white mb-2">{t("home.hello")}</h3>
              {t("home.description")}
		</SummaryCard>
		</div>
        {/* 경로 네비게이션 카드 */}
        <div className="animate-fade-in-up" style={{ animationDelay: `${1 * 0.1}s` }}>
          <SummaryCard>
            <nav className="flex flex-wrap text-white items-center gap-2 text-gray-400 text-base font-medium">
              <span>획기획</span>
              <span className="mx-1">&gt;</span>
              <span>비랩트</span>
              <span className="mx-1">&gt;</span>
			  <span>???</span>
            </nav>
          </SummaryCard>
        </div>

        {/* 블로그 카드 */}
        <div className="animate-fade-in-up" style={{ animationDelay: `${2 * 0.1}s` }}>
          <SummaryCard>
            <div className="flex flex-col gap-3">
              <Link target="_blank" href="https://til-dev.tistory.com" className="flex items-center gap-2">
                <span>준영의 지식 블로그</span>
                <span className="ml-auto">&gt;</span>
              </Link>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-medium">#Blog</span>
                <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-medium">#10+ posts</span>
              </div>
            </div>
          </SummaryCard>
        </div>

        {/* 경력 카드 */}
        <div className="animate-fade-in-up" style={{ animationDelay: `${3 * 0.1}s` }}>
          <SummaryCard>
            <div className="flex flex-col items-start justify-center h-full ">
              <span className="text-lg font-bold  rounded-full px-4 py-1 ">+4 Years Frontend Engineer</span>
            </div>
          </SummaryCard>
        </div>
      </div>
    </section>
  );
}
