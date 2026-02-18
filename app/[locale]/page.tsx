import ExperienceSection from '@/components/sections/experience-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SummarySection from '@/components/sections/summary-section';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL(`/${locale}`, siteUrl);

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: url,
      languages: {
        ko: new URL('/ko', siteUrl),
        en: new URL('/en', siteUrl),
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url,
      siteName: 'Portfolio',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Hero Section */}
      <HeroSection title={t('home.welcome')} />

      {/* Summary Section */}
      <SummarySection />

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Projects Section */}
      <ProjectsSection items={projects} />
    </div>
  );
}
