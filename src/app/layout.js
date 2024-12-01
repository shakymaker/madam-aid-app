'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Splash from '@/components/common/Splash';
import Onboarding from '@/components/common/Onboarding';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [currentView, setCurrentView] = useState('splash');

  useEffect(() => {
    setTimeout(() => {
      setCurrentView('onboarding');
    }, 2000);
  }, []);

  const renderContent = () => {
    switch(currentView) {
      case 'splash':
        return <Splash />;
      case 'onboarding':
        return <Onboarding />;
      default:
        return <main className="min-h-screen bg-gray-50">{children}</main>;
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        {renderContent()}
      </body>
    </html>
  );
}