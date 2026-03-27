"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Chexton Global"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062428]/80 to-[#062428]/45" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-7xl items-center px-6 md:px-10">
          <div>
            <h1 className="font-serif text-4xl text-white md:text-6xl">
              About Chexton Global
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Delivering premium real estate experiences with trust and
              excellence.
            </p>
          </div>
        </div>
      </section>

      <motion.section {...fadeUp} className="section-wrap">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">COMPANY STORY</p>
          <p className="mt-6 text-lg leading-relaxed text-deep-teal/85">
            Chexton Global is a forward-thinking real estate company dedicated
            to helping clients secure high-value properties across Nigeria and
            internationally. With a focus on trust, transparency, and premium
            service, we help individuals and investors make confident real
            estate decisions.
          </p>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="section-wrap bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(7,36,40,0.15)]">
            <Image
              src="/images/ceo.jpg"
              alt="CEO of Chexton Global"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">LEADERSHIP</p>
            <h2 className="section-title mt-4">CEO Name</h2>
            <p className="mt-2 text-deep-teal/70">CEO, Chexton Global</p>
            <p className="mt-6 text-lg leading-relaxed text-deep-teal/85">
              At Chexton Global, our mission is simple — to connect people with
              properties that elevate their lifestyle and secure their future.
              We prioritize integrity, client satisfaction, and long-term value
              in every transaction.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="section-wrap">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-center">OUR VALUES</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Trust", "Excellence", "Transparency", "Client-First Approach"].map(
              (value) => (
                <motion.div
                  key={value}
                  whileHover={{ y: -4 }}
                  className="feature-tile text-center"
                >
                  <h3 className="font-serif text-2xl">{value}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
}
