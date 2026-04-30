import "./globals.css";
// 루트 레이아웃에 Google Font 적용
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Next.js 타임어택",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


// TypeScript 버전에서는 아래와 같이 작성합니다.
// React.ReactNode 타입을 사용하여 children의 타입을 명시적으로 지정합니다.

// import "./globals.css";
// import type { Metadata } from "next";
// // 루트 레이아웃에 Google Font 적용
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Todo App",
//   description: "Next.js 타임어택",
// };

// export default function RootLayout({
//   children,
//   } : Readonly<{ children: React.ReactNode;
//   }>)
//    {
//   return (
//     <html lang="ko">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
