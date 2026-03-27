"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppForm from "@/components/WhatsAppForm";

const featuredProperties = [
  {
    title: "Spacious 5 Bedroom Fully Detached Duplex",
    description: "Located at Ajah and up for grab.",
    price: "NGN 450 Million",
    location: "Ajah",
    features: [
      "Brand new",
      "Gym",
      "5.5 Bath",
      "All rooms en-suite",
      "Walk-in shower",
      "Water heater",
      "Walk-in closet",
      "Balcony",
      "POP ceiling",
      "Fitted kitchen",
      "24/7 power supply and water supply",
      "Stamped concrete floor",
      "Ample parking space",
      "Modern day design",
      "Good road network",
      "Spacious compound",
      "Secured estate",
      "Good drainage system",
    ],
    contactPhones: ["07034432038", "09050083475"],
    image: "/images/property-1.jpg",
  },
  {
    title: "Banana Island Penthouse",
    description: "Ultra-luxury duplex penthouse in a secure premium district.",
    price: "NGN 1.4B",
    image: "/images/property-2.jpg",
  },
  {
    title: "Eko Atlantic Signature Villa",
    description: "Contemporary oceanfront villa designed for elite living.",
    price: "NGN 1.9B",
    image: "/images/property-3.jpg",
  },
];

const instagramImages = [
  "/images/ig-1.jpg",
  "/images/ig-2.jpg",
  "/images/ig-3.jpg",
  "/images/ig-4.jpg",
  "/images/ig-5.jpg",
  "/images/ig-6.jpg",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <motion.section {...fadeUp} className="section-wrap">
        <div className="mx-auto w-full max-w-4xl text-center break-words">
          <p className="eyebrow">ABOUT CHEXTON GLOBAL</p>
          <h2 className="section-title mt-4">A trusted luxury partner</h2>
          <p className="mx-auto mt-6 max-w-3xl break-words text-lg leading-relaxed text-deep-teal/85">
            Chexton Global is a trusted real estate brand delivering luxury
            homes, smart investments, and seamless property acquisition for
            clients in Nigeria and the diaspora.
          </p>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="properties" className="section-wrap bg-white">
        <div className="section-inner">
          <p className="eyebrow text-center">FEATURED PROPERTIES</p>
          <h2 className="section-title mt-4 text-center">Signature opportunities</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="section-wrap">
        <div className="section-inner">
          <p className="eyebrow text-center">WHY CHOOSE US</p>
          <h2 className="section-title mt-4 text-center">
            Built for discerning investors
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Trust", "A reputation built on reliable outcomes."],
              ["Excellence", "Premium standards in every client touchpoint."],
              ["Transparency", "Clear communication from start to finish."],
              ["Client-First", "Your goals drive every recommendation."],
            ].map(([title, description]) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="feature-tile"
              >
                <h3 className="break-words font-serif text-2xl">{title}</h3>
                <p className="mt-3 break-words text-deep-teal/75">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="onboarding" className="section-wrap bg-white">
        <div className="section-inner grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow">CLIENT ONBOARDING</p>
            <h2 className="section-title mt-4">Start your acquisition journey</h2>
            <p className="mt-6 max-w-md break-words text-lg leading-relaxed text-deep-teal/80">
              Complete this quick form and we will continue the conversation on
              WhatsApp immediately.
            </p>
          </div>
          <WhatsAppForm />
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="section-wrap">
        <div className="section-inner">
          <p className="eyebrow text-center">INSTAGRAM</p>
          <h2 className="section-title mt-4 text-center">Lifestyle highlights</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {instagramImages.map((image, index) => (
              <a
                href="https://www.instagram.com/chitherealtor/"
                key={`${image}-${index}`}
                target="_blank"
                rel="noreferrer"
                className="instagram-card relative block aspect-[4/3] min-h-0 w-full max-w-full md:aspect-auto md:h-56"
              >
                <Image
                  src={image}
                  alt="Chexton Global Instagram preview"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/chitherealtor/"
              target="_blank"
              rel="noreferrer"
              className="button-outline"
            >
              Follow Us
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="section-wrap bg-deep-teal text-white">
        <div className="mx-auto w-full max-w-5xl text-center break-words">
          <p className="eyebrow text-gold">NEXT STEP</p>
          <h2 className="section-title mt-4 text-white">
            Ready to own your dream property?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button-luxury glow-cta">
              Get Started
            </Link>
            <a
              href="https://wa.me/2349050083475"
              target="_blank"
              rel="noreferrer"
              className="button-outline border-white/60 text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
