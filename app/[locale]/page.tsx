import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from '@/lib/i18n/navigation';
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function Home({ params }: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 text-sm font-medium text-purple-700 ring-1 ring-purple-500/10">
            <Sparkles className="h-4 w-4" />
            <span>{t('home.welcome')}</span>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6 animate-fade-in-up">
            정준영
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t('home.description')}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/projects"
              className="group rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              {t('home.viewProjects')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
            >
              {t('home.getInTouch')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: t('home.cards.experience.title'),
              description: t('home.cards.experience.description'),
              href: "/experience",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: t('home.cards.projects.title'),
              description: t('home.cards.projects.description'),
              href: "/projects",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: t('home.cards.skills.title'),
              description: t('home.cards.skills.description'),
              href: "/skills",
              gradient: "from-orange-500 to-yellow-500",
            },
            {
              title: t('home.cards.blog.title'),
              description: t('home.cards.blog.description'),
              href: "/blog",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
              <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
