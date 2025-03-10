'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 100);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {load && (
          <Providers>
            <NuqsAdapter>{children}</NuqsAdapter>
          </Providers>
        )}
      </body>
    </html>
  );
}
