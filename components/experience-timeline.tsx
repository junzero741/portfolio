"use client";

import { ExperienceItem } from "@/data/experience";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import Badge from "./ui/badge";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="space-y-12">
        {items.map((item, index) => {
          const isWork = item.type === "work";
          const Icon = isWork ? Briefcase : GraduationCap;
          const gradientColor = isWork ? "blue" : "purple";

          return (
            <div key={item.id} className="relative pl-20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Icon */}
              <div
                className={`absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg ${
                  isWork
                    ? "from-blue-500 to-cyan-500"
                    : "from-purple-500 to-pink-500"
                }`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>

              {/* Content Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all">
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity ${
                    isWork
                      ? "from-blue-500 to-cyan-500"
                      : "from-purple-500 to-pink-500"
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
                        isWork
                          ? "from-blue-600 to-cyan-600"
                          : "from-purple-600 to-pink-600"
                      }`}
                    >
                      {item.organization}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-purple-600 mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
