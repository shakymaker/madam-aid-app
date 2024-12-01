'use client';

import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Splash from '@/components/common/Splash';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        {showSplash && <Splash />}
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}