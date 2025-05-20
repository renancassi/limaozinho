import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eu preciso dizer que te amo",
  description: "Amo você, meu limãozin <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#660000]">
        {children}
      </body>
    </html>
  );
}
