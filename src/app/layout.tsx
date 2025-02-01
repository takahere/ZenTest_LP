import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Japanese Career Development Platform",
  description: "Empowering careers with expert guidance and proven success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                  {/* Logo placeholder */}
                  <span className="text-[#FF6B00] font-bold text-xl">Logo</span>
                </div>
                <div className="hidden sm:flex sm:space-x-8">
                  <a href="/-4-" className="text-[#333333] hover:text-[#FF6B00] px-3 py-2 text-sm font-medium">
                    実現できる4つの理由
                  </a>
                  <a href="/numbers" className="text-[#333333] hover:text-[#FF6B00] px-3 py-2 text-sm font-medium">
                    転職実績・アドバイザー
                  </a>
                  <a href="/message" className="text-[#333333] hover:text-[#FF6B00] px-3 py-2 text-sm font-medium">
                    代表メッセージ
                  </a>
                  <a href="/-" className="text-[#333333] hover:text-[#FF6B00] px-3 py-2 text-sm font-medium">
                    会社紹介
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow bg-[#F5F5F5]">
            {children}
          </main>
          <footer className="bg-[#000000] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Japanese Career Development Platform. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
