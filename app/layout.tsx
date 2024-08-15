import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eivi portfolio',
  description: 'eivi park portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dart'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
