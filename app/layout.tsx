import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sidney | Portfolio',
  description: 'Full Stack & Blockchain Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen selection:bg-primary/30 relative overflow-x-hidden`}>
        <div className="gradient-glow" />
        {children}
      </body>
    </html>
  );
}
