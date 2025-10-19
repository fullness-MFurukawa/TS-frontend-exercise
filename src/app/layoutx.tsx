import "./globals.css";
import type { Metadata } from "next";
import Header from "@/presentation/components/layout/Header";
import Footer from "@/presentation/components/layout/Footer";

export const metadata: Metadata = {
  title: "Next.js フロントエンド演習",
  description: "C# Webアプリケーション編に似た構成の Next.js 版演習プロジェクト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-6 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
