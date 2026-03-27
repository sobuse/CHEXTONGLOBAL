"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { opacity: 0, y: -12 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const },
  },
};

const linkStagger = 0.06;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-deep-teal/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Chexton Global logo"
            width={44}
            height={44}
            className="size-9 shrink-0 rounded-full border border-white/30 sm:size-11"
            priority
          />
          <span className="min-w-0 truncate font-serif text-base text-white sm:text-lg md:overflow-visible md:whitespace-normal">
            CHEXTON GLOBAL
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex md:gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2349050083475"
            target="_blank"
            rel="noreferrer"
            className="button-luxury"
          >
            Get Started
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/2349050083475"
            target="_blank"
            rel="noreferrer"
            className="button-luxury px-4! py-2! text-xs"
          >
            Start
          </a>
          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  open
                    ? { rotate: 45, y: 6, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 origin-center rounded-full bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-5 rounded-full bg-white"
              />
              <motion.span
                animate={
                  open
                    ? { rotate: -45, y: -6, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 origin-center rounded-full bg-white"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-100 md:hidden"
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-[#062428]/75 backdrop-blur-md"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="absolute inset-x-0 top-0 flex max-h-dvh flex-col bg-deep-teal/97 px-6 pb-10 pt-24 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * linkStagger,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-2xl border border-white/10 px-5 py-4 font-serif text-xl tracking-wide text-white transition hover:border-gold/40 hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.32,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10"
              >
                <a
                  href="https://wa.me/2349050083475"
                  target="_blank"
                  rel="noreferrer"
                  className="button-luxury w-full justify-center glow-cta"
                  onClick={() => setOpen(false)}
                >
                  Get Started on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
