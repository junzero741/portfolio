import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { activities, awards, certificates } from "@/data/activities";
import HeroSection from "@/components/sections/hero-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ActivitiesSection from "@/components/sections/activities-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = new URL(`/${locale}`, siteUrl);

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: url,
      languages: {
        ko: new URL("/ko", siteUrl),
        en: new URL("/en", siteUrl),
      },
    },
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      url,
      siteName: "Portfolio",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.title"),
      description: t("meta.description"),
    },
  };
}

export default async function Home({ params }: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  // Filter experiences by type
  const workExperiences = experiences.filter((item) => item.type === "work");
  const educationExperiences = experiences.filter((item) => item.type === "education");

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection 
        title={t('home.welcome')} 
        description={t('home.description')} 
      />

      {/* Experience Section */}
      <ExperienceSection 
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />

      {/* Projects Section */}
      <ProjectsSection items={projects} />

      {/* Skills Section */}
      <SkillsSection skillCategories={skillCategories} />

      {/* Activities Section */}
      <ActivitiesSection 
        activities={activities}
        awards={awards}
        certificates={certificates}
      />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
