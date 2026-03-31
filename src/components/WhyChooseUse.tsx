"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "We've Lived Your Story",
    description:
      "Our founder personally navigated the chaos of planning a grand destination wedding from Canada. We don't just understand your challenges — we've felt them. That empathy is built into every decision we make.",
    accent: "#F2A7B0",
  },
  {
    number: "02",
    title: "Trust Across Borders",
    description:
      "We personally connect with every client in Canada and the USA before a single detail is planned. You'll always have a real person — not a coordinator you've never met — in your corner, across every time zone.",
    accent: "#9CA195",
  },
  {
    number: "03",
    title: "Luxury Without Compromise",
    description:
      "From Rajasthan palaces to Goa beachfronts, we curate only the finest venues, vendors, and experiences. Every element is hand-selected to reflect your story — never templated, never generic.",
    accent: "#C9A96E",
  },
  {
    number: "04",
    title: "End-to-End. Always.",
    description:
      "Venue to videography. Invitation to farewell. We manage every detail so your family can be guests at your own wedding — fully present, completely stress-free.",
    accent: "#F2A7B0",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-40 px-6">
      {/* ── Fixed background wrapper — Next.js Image inside fixed div ── */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/DEEP7475.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-linear-to-br from-[#F2A7B0]/8 via-transparent to-[#9CA195]/8" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-20"
        >
          <div className="h-px w-10 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
            Why Forever Fuzed
          </span>
        </motion.div>

        {/* Reasons */}
        <div className="flex flex-col gap-28 md:gap-36">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Large faded number */}
              <p
                className="font-cormorant text-[96px] md:text-[140px] font-light leading-none mb-2 select-none"
                style={{ color: `${reason.accent}75` }}
              >
                {reason.number}
              </p>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3.5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px mb-7"
                style={{ backgroundColor: reason.accent }}
              />

              {/* Title */}
              <h3 className="font-cormorant text-white font-light text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="font-lato text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                {reason.description}
              </p>

              {/* Counter tag */}
              <div className="flex items-center gap-3 mt-8">
                <div
                  className="h-px w-5"
                  style={{ backgroundColor: reason.accent }}
                />
                <span
                  className="font-lato text-[9px] tracking-[0.3em] uppercase"
                  style={{ color: reason.accent }}
                >
                  {i + 1} of {reasons.length}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
