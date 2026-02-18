import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/lib/i18n/routing';
import '../globals.css';
import Sidebar from '@/components/sidebar';
import { GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio - 정준영',
  description: '개발자 정준영의 포트폴리오 웹사이트',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way, but you can
  // also only provide the messages needed for
  // each page (see Route Groups guide)
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Sidebar />
          <main className="min-h-screen pt-20 lg:pt-0 lg:ml-64">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
