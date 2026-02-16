"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Filter } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  items: ProjectItem[];
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("전체");

  const filters = useMemo(() => {
    const techSet = new Set<string>();
    items.forEach((item) => item.tech.forEach((tech) => techSet.add(tech)));
    return ["전체", ...Array.from(techSet)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "전체") return items;
    return items.filter((item) => item.tech.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Filter className="h-4 w-4" />
          필터
        </div>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeFilter === filter
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:text-purple-600 hover:shadow-sm"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {filteredItems.map((project) => (
          <Card key={project.id} gradient={project.gradient}>
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{project.company}</span>
                  <span>•</span>
                  <span>{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Summary */}
              <p className="text-gray-700 leading-relaxed">
                {project.summary}
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
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  담당 역할
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {project.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  성과
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
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
                      className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700"
                    >
                      {link.label}
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
