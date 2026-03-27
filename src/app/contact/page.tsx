"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppForm from "@/components/WhatsAppForm";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[50vh] w-full max-w-[100vw] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Chexton Global"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062428]/80 to-[#062428]/45" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] w-full min-w-0 max-w-7xl items-center px-4 sm:px-6 md:px-10">
          <h1 className="break-words font-serif text-4xl text-white md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <motion.section {...fadeUp} className="section-wrap">
        <div className="section-inner grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="min-w-0 break-words">
            <p className="eyebrow">CONTACT DETAILS</p>
            <h2 className="section-title mt-4">Let&apos;s get you started</h2>
            <div className="mt-6 space-y-3 break-words text-lg text-deep-teal/85">
              <p>Phone: 09050083475</p>
              <p>Email: ehuerikenbaba@gmail.com</p>
              <a
                href="https://www.instagram.com/chitherealtor/"
                target="_blank"
                rel="noreferrer"
                className="inline-block underline decoration-gold underline-offset-4"
              >
                Instagram: @chitherealtor
              </a>
            </div>
          </div>
          <WhatsAppForm />
        </div>
      </motion.section>
    </>
  );
}
