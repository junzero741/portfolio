import { Mail, Github, BookOpen } from "lucide-react";
import Card from "@/components/ui/card";
import Link from "next/link";

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

export default function ContactSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-500 shadow-lg">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">연락처</h2>
        </div>

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

        <div className="mt-12 text-center">
          <Card gradient="green">
            <div className="space-y-3 py-4">
              <h3 className="text-xl font-bold text-gray-900">
                협업 및 프로젝트 문의
              </h3>
              <p className="text-gray-600">
                흥미로운 프로젝트나 협업 제안이 있으시다면
                <br />
                이메일로 연락 주시면 빠르게 답변드리겠습니다.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
