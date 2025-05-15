import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialFloatingButton from '../components/layout/SocialFloatingButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "बात Shala - Communication Training",
  description: "Transform your communication skills with बात Shala",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main> 
          <Footer />
        </div>
        <SocialFloatingButton />
      </body>
    </html>
  );
}
