'use client';

import { Link, usePathname, useRouter } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import { BookOpen, Github, Mail } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/junzero741',
    icon: Github,
    color: 'hover:text-gray-400',
  },
  {
    name: 'Blog',
    href: 'https://til-dev.tistory.com/',
    icon: BookOpen,
    color: 'hover:text-gray-400',
  },
  {
    name: 'Email',
    href: 'mailto:junzero741@gmail.com',
    icon: Mail,
    color: 'hover:text-gray-400',
  },
];

const navigation = [
  { href: '/#experience', key: 'navigation.experience', id: 'experience' },
  { href: '/#projects', key: 'navigation.projects', id: 'projects' },
];

export default function Sidebar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.id);
      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: 'en' | 'ko') => {
    if (locale !== newLocale) {
      router.push(pathname, { locale: newLocale });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:flex-col lg:h-screen lg:w-64 lg:bg-black/80 lg:backdrop-blur-md lg:border-r lg:border-gray-900 lg:z-40">
        {/* Logo */}
        <div className="flex items-center justify-center p-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">Jung Junyoung</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors block w-full text-center px-4 py-2 rounded-md',
                activeSection === item.id
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Language selector for desktop */}
        <div className="relative w-full flex justify-center py-4">
          <button
            onClick={() => handleLocaleChange('en')}
            className={cn(
              'block w-full text-center px-4 py-2 text-sm font-medium',
              locale === 'en' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800',
            )}
          >
            ENGLISH
          </button>
          <button
            onClick={() => handleLocaleChange('ko')}
            className={cn(
              'block w-full text-center px-4 py-2 text-sm font-medium',
              locale === 'ko' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800',
            )}
          >
            한국어
          </button>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 px-6 py-8">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-500 transition-colors ${link.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} 정준영. All rights reserved.
          </p>
        </div>
      </aside>

      {/* Mobile Language Selector - Top Right */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex gap-2 bg-black/80 backdrop-blur-md border border-gray-900 rounded-md overflow-hidden">
        <button
          onClick={() => handleLocaleChange('en')}
          className={cn(
            'px-3 py-2 text-xs font-medium transition-colors',
            locale === 'en' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800',
          )}
        >
          EN
        </button>
        <button
          onClick={() => handleLocaleChange('ko')}
          className={cn(
            'px-3 py-2 text-xs font-medium transition-colors',
            locale === 'ko' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800',
          )}
        >
          KO
        </button>
      </div>

      {/* Mobile Social Links - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden flex gap-4 bg-black/80 backdrop-blur-md border border-gray-900 rounded-full px-4 py-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-500 transition-colors ${link.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.name}</span>
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </>
  );
}
