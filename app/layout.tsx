import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Advocacia Premium | Dr. João Almeida",

  description:
    "Landing page premium para escritório de advocacia desenvolvida com Next.js, foco em performance, responsividade e experiência moderna.",

  keywords: [
    "advocacia premium",
    "landing page advogado",
    "site para advogado",
    "next.js",
    "portfólio web design",
    "quiz rocha",
  ],

  authors: [
    {
      name: "Quiz Rocha",
    },
  ],

  creator: "Quiz Rocha",

  openGraph: {
    title:
      "Advocacia Premium | Dr. João Almeida",

    description:
      "Landing page premium para escritório de advocacia com design moderno e responsivo.",

    url:
      "https://advocacia.quizrocha.com.br",

    siteName:
      "Advocacia Premium",

    locale:
      "pt_BR",

    type:
      "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">

        {children}

      </body>
    </html>
  );
}