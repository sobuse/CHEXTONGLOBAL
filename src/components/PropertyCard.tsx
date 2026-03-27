"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type PropertyCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  location?: string;
  features?: string[];
  contactPhones?: string[];
};

export default function PropertyCard({
  title,
  description,
  price,
  image,
  location,
  features,
  contactPhones,
}: PropertyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExtraDetails =
    Boolean(location) ||
    Boolean(features && features.length > 0) ||
    Boolean(contactPhones && contactPhones.length > 0);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group min-w-0 max-w-full overflow-hidden rounded-3xl border border-[#d8d9d2] bg-[#fdfcf8] shadow-[0_24px_70px_rgba(7,36,40,0.08)]"
    >
      <div className="relative h-56 w-full max-w-full overflow-hidden sm:h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 p-5 break-words sm:p-7">
        <h3 className="break-words font-serif text-xl sm:text-2xl">{title}</h3>
        <p className="mt-3 break-words text-deep-teal/75">{description}</p>
        <p className="mt-4 break-words text-lg font-semibold text-deep-teal">
          {price}
        </p>

        {hasExtraDetails ? (
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="mt-5 text-sm font-semibold tracking-wide text-gold transition hover:opacity-75"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        ) : null}

        <AnimatePresence initial={false}>
          {isExpanded && hasExtraDetails ? (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {location ? (
                <p className="mt-4 text-sm font-medium text-deep-teal/85">
                  Location: {location}
                </p>
              ) : null}
              {features && features.length > 0 ? (
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-deep-teal/75">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : null}
              {contactPhones && contactPhones.length > 0 ? (
                <p className="mt-4 text-sm text-deep-teal/85">
                  For enquiries: {contactPhones.join(" / ")}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <a
          href={`https://wa.me/2349050083475?text=${encodeURIComponent(
            `Hello CHEXTON GLOBAL, I am interested in ${title}. Please assist me.`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="button-outline mt-6"
        >
          Enquire
        </a>
      </div>
    </motion.article>
  );
}
