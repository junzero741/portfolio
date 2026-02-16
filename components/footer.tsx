import { Github, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/junzero741",
    icon: Github,
    color: "hover:text-gray-900",
  },
  {
    name: "Blog",
    href: "https://til-dev.tistory.com/",
    icon: BookOpen,
    color: "hover:text-purple-600",
  },
  {
    name: "Email",
    href: "mailto:junzero741@gmail.com",
    icon: Mail,
    color: "hover:text-orange-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-600 transition-colors ${link.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <Icon className="h-6 w-6" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
