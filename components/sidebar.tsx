"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, usePathname, useRouter } from "@/lib/i18n/navigation";
import { useLocale, useTranslations } from 'next-intl';

const navigation = [
  { href: "/", key: "navigation.home" },
];

export default function Sidebar() {
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
    <>
      {/* Mobile menu button - Fixed at top left */}
      <div className="lg:hidden fixed top-4 left-4 z-50 flex gap-2">
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
            <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-200">
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

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:flex-col lg:h-screen lg:w-64 lg:bg-white/80 lg:backdrop-blur-md lg:border-r lg:border-gray-100 lg:z-40">
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b border-gray-100">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Language selector for desktop */}
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
              <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-200">
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
      </aside>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100",
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
    </>
  );
}
