import "./globals.css";
import { Noto_Sans_KR, Inter } from "next/font/google";
import Header from "./common/components/Header";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto", weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Todo App",
  description: "할 일을 관리하는 Todo 앱입니다.",
};

export default function RootLayout({ children }) {
  return (
    // inter은 영어일 때, notoSansKR은 한글일 때 사용한다.
    <html lang='ko' className={`${inter.variable} ${notoSansKR.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), var(--font-noto), sans-serif' }}>
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
