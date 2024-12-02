'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Splash from '@/components/common/Splash';
import Onboarding from '@/components/common/Onboarding';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {showSplash ? <Splash /> : <Onboarding />}
      </body>
    </html>
  );
}