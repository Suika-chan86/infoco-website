import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infoco.club'),
  title: { default: 'InfoCo — Code the Culture', template: '%s — InfoCo' },
  description: 'InfoCo 计算机社团：用代码，编译想法。一起学习、创造、发布与分享。',
  applicationName: 'InfoCo',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'InfoCo',
    title: 'InfoCo — Code the Culture',
    description: '用代码，编译想法。InfoCo 计算机社团，一起学习、创造、发布与分享。',
    url: 'https://infoco.club',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'InfoCo — Code the Culture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoCo — Code the Culture',
    description: '用代码，编译想法。InfoCo 计算机社团，一起学习、创造、发布与分享。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
