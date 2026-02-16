"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, usePathname, useRouter } from "@/lib/i18n/navigation";
import { useLocale, useTranslations } from 'next-intl';

const navigation = [
  { href: "/", key: "navigation.home" },
  { href: "/experience", key: "navigation.experience" },
  { href: "/projects", key: "navigation.projects" },
  { href: "/activities", key: "navigation.activities" },
  { href: "/skills", key: "navigation.skills" },
  { href: "/blog", key: "navigation.blog" },
  { href: "/contact", key: "navigation.contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const handleLocaleChange = (newLocale: 'en' | 'ko') => {
    if (locale !== newLocale) {
      router.push(pathname, { locale: newLocale });
    }
    setLocaleMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Mobile menu button and Language selector */}
        <div className="flex lg:hidden gap-2">
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
            >
              <Globe className="h-6 w-6" />
            </button>
            {localeMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-200">
                <button
                  onClick={() => handleLocaleChange('en')}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm font-medium rounded-t-md",
                    locale === 'en'
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-900 hover:bg-gray-50"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => handleLocaleChange('ko')}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm font-medium rounded-b-md",
                    locale === 'ko'
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-900 hover:bg-gray-50"
                  )}
                >
                  한국어
                </button>
              </div>
            )}
          </div>

          {/* Menu button */}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{locale === 'en' ? 'Open menu' : '메뉴 열기'}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase">{locale}</span>
            </button>
            {localeMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-200">
                <button
                  onClick={() => handleLocaleChange('en')}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm font-medium rounded-t-md",
                    locale === 'en'
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-900 hover:bg-gray-50"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => handleLocaleChange('ko')}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm font-medium rounded-b-md",
                    locale === 'ko'
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-900 hover:bg-gray-50"
                  )}
                >
                  한국어
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-2 px-6 pb-6 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
