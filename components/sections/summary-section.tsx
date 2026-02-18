'use client';

import { Link } from '@/lib/i18n/navigation';
import { useTranslations } from 'next-intl';
import { skillCategories } from '@/data/skills';
import Image from 'next/image';

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

interface SummarySectionProps {}

export default function SummarySection({}: SummarySectionProps) {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div className="animate-fade-in-up" style={{ animationDelay: `${0 * 0.1}s` }}>
          <SummaryCard>
            <h3 className="text-xl font-bold text-white mb-2">{t('home.hello')}</h3>
            {t('home.description')}
          </SummaryCard>
        </div>
        {/*  네비게이션 카드 */}
        <div
          className="animate-fade-in-up flex flex-col gap-6"
          style={{ animationDelay: `${1 * 0.1}s` }}
        >
          <SummaryCard>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap text-white items-center gap-2 text-gray-400 text-base font-medium">
                <span>{t('company.jejodo.name')}</span>
                <span className="mx-1">&gt;</span>
                <span>{t('company.berapt.name')}</span>
                <span className="mx-1">&gt;</span>
                <span>???</span>
              </div>
            </div>
          </SummaryCard>
          <SummaryCard>
            <div className="flex flex-col items-start justify-center h-full ">
              <span className="text-lg font-bold  rounded-full">+4 Years Frontend Engineer</span>
            </div>
          </SummaryCard>
          <SummaryCard>
            <div className="flex flex-col gap-3">
              <Link
                target="_blank"
                href="https://til-dev.tistory.com"
                className="flex items-center gap-2"
              >
                <span>{t('blog.title')}</span>
                <span className="ml-auto">&gt;</span>
              </Link>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  #Blog
                </span>
                <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  #10+ posts
                </span>
              </div>
            </div>
          </SummaryCard>
        </div>

        {/* 프로필 사진 카드 */}
        <div className="animate-fade-in-up" style={{ animationDelay: `${2 * 0.1}s` }}>
          <SummaryCard>
            <div className="flex items-center justify-center h-full">
              <div className="relative w-[240px] aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile.PNG"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </SummaryCard>
        </div>

        <SummaryCard>
          <div className="flex flex-col gap-3 h-full">
            {/* 기술 스택 카테고리 */}
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(3 + index) * 0.1}s` }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <div className="flex flex-wrap gap-1 bg-white w-fit rounded-2xl p-2">
                      {category.items.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center p-1 gap-2 rounded-full text-sm font-medium text-white bg-gradient-to-r`}
                        >
                          {skill.icon && (
                            <div className="relative w-5 h-5 ">
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {category.items.map((item, index) => (
                      <span key={item.name} className="text-sm text-gray-400">
                        {item.name} {index < category.items.length - 1 && '· '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SummaryCard>
      </div>
    </section>
  );
}
