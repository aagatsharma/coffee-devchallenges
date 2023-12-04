import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee App",
  description: "Challenge from the devChallenges.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}
