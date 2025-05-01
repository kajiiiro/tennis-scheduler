import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "tennis scheduler",
  description: "テニスのスケジュール管理アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${noto.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
