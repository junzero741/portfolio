"use client";

import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import { ProjectItem } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ProjectsGridProps {
  items: ProjectItem[];
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<string>(t("projects.filter.all"));

  const filters = useMemo(() => {
    const techSet = new Set<string>();
    items.forEach((item) => item.tech.forEach((tech) => techSet.add(tech)));
    return [t("projects.filter.all"), ...Array.from(techSet)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === t("projects.filter.all")) return items;
    return items.filter((item) => item.tech.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
      
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeFilter === filter
                ? "bg-black text-white shadow-md"
                : "bg-white text-black hover:text-gray-600 hover:shadow-sm"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {filteredItems.map((project) => (
          <Card key={project.id}>
            <div className="flex flex-col justify-between h-full">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{t(project.company)}</span>
                  <span>•</span>
                  <span>{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {t(project.title)}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-400 mt-1">
                    {t(project.subtitle)}
                  </p>
                )}
              </div>

              {/* Summary */}
              <p className="text-gray-300 leading-relaxed">
                {t(project.summary)}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Roles */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">
                  {t("projects.role")}
                </h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  {project.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{t(role)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">
                  {t("projects.achievements")}
                </h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{t(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>

           
            </div>
               {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-300 hover:text-white"
                    >
                      {t(link.label)}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              )}
              </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
