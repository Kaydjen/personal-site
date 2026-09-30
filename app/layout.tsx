import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const myFont = Source_Code_Pro({
  variable: "--source_code_pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "₍^..^₎⟆",
  description:
    "A small corner of the web shaped by the things I build, listen to, read, and care about ₍^..^₎⟆ ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
