import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dbConnect from '@/helpers/lib/dbConnect';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CSV Hub',
  description: 'Convert CSV data into table and export table data in CSV',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
