import { Metadata } from "next";
import { Mail, Github, BookOpen } from "lucide-react";
import Card from "@/components/ui/card";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: "연락처 - Portfolio",
  description: "연락처 및 소셜 미디어",
};

type Props = {
  params: Promise<{locale: string}>;
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "junzero741@gmail.com",
    href: "mailto:junzero741@gmail.com",
    gradient: "orange",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/junzero741",
    href: "https://github.com/junzero741",
    gradient: "blue",
  },
  {
    icon: BookOpen,
    label: "Blog",
    value: "til-dev.tistory.com",
    href: "https://til-dev.tistory.com/",
    gradient: "purple",
  },
];

export default async function ContactPage({ params }: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">연락처</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            함께 일하고 싶거나 궁금한 점이 있으시면 언제든지 연락주세요
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <Card
                key={contact.label}
                gradient={contact.gradient as "blue" | "purple" | "orange" | "green"}
              >
                <Link
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 group"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg ${
                      contact.gradient === "orange"
                        ? "from-orange-500 to-pink-500"
                        : contact.gradient === "blue"
                        ? "from-blue-500 to-cyan-500"
                        : "from-purple-500 to-pink-500"
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {contact.label}
                    </p>
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all">
                    →
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Additional Message */}
        <div className="mt-12 text-center">
          <Card gradient="green">
            <div className="space-y-3 py-4">
              <h2 className="text-xl font-bold text-gray-900">
                협업 및 프로젝트 문의
              </h2>
              <p className="text-gray-600">
                흥미로운 프로젝트나 협업 제안이 있으시다면
                <br />
                이메일로 연락 주시면 빠르게 답변드리겠습니다.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
