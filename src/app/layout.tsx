import type { Metadata } from "next";
import "./globals.css";
import { NavLinks } from "@/app/components/nav-links";

export const metadata: Metadata = {
  title: "Radha Krishna Temple | Bhakti Diwas",
  description:
    "Join us for an evening filled with gratitude, cultural celebrations, and heartfelt devotion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="min-h-screen flex flex-col">
        <NavLinks />
        <main className="flex-grow container-fluid">{children}</main>
      </body>
    </html>
  );
}
