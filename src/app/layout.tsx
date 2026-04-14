import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const geistSans = GeistSans;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Zainab Ashraf | Full-Stack AI Developer',
  description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan specializing in Next.js, FastAPI, and AI-powered systems.',
  openGraph: {
    title: 'Zainab Ashraf | Full-Stack AI Developer',
    description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zainab Ashraf | Full-Stack AI Developer',
    description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
