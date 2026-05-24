import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rameeza Rahim — Computer Engineer | AI/ML & Full-Stack Developer",
  description:
    "Portfolio of Rameeza Rahim — Computer Engineering student at ITU Lahore building production web apps and computer vision systems.",
  openGraph: {
    title: "Rameeza Rahim — Portfolio",
    description:
      "Computer Engineer specializing in AI/ML and full-stack development. Graduating ITU Lahore 2026.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rameeza Rahim — Portfolio",
    description:
      "Computer Engineer specializing in AI/ML and full-stack development. Graduating ITU Lahore 2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
