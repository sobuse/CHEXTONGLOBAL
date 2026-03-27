import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CHEXTON GLOBAL",
  description:
    "Contact Chexton Global for luxury real estate enquiries and start via WhatsApp.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
