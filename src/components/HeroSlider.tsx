"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/images/hero-1.jpg", alt: "Luxury residence exterior" },
  { src: "/images/hero-2.jpg", alt: "Premium modern living room" },
  { src: "/images/hero-3.jpg", alt: "High-end coastal property" },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] w-full max-w-[100vw] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeIndex].src}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062428]/75 via-[#062428]/45 to-[#062428]/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full min-w-0 max-w-7xl flex-col items-start justify-center px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-5 text-sm tracking-[0.3em] text-gold/95"
        >
          PREMIUM REAL ESTATE BRAND
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl break-words font-serif text-4xl leading-tight text-white md:text-6xl"
        >
          Luxury Living, Perfectly Delivered
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 max-w-2xl break-words text-base leading-relaxed text-white/90 md:text-xl"
        >
          Premium real estate solutions tailored for you — in Nigeria and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="#properties" className="button-luxury">
            View Properties
          </Link>
          <Link href="/contact" className="button-outline border-white/60 text-white">
            Get Started
          </Link>
        </motion.div>

        <div className="mt-10 flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-12 bg-gold" : "w-6 bg-white/55"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
