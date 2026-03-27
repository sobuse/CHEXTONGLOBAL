import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CHEXTON GLOBAL",
  description:
    "Learn about Chexton Global's mission, leadership, and premium real estate values.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
