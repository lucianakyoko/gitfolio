import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "../providers/ReactQueryProvider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gitfolio",
  description: "Crie seu portfolio visual com projetos do GitHub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
