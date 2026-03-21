"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function BrandStatement() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Decorative line + diamond */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-16 bg-[#C9A96E]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="h-px w-16 bg-[#C9A96E]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[56px] leading-[1.12]"
        >
          We don{"'"}t just plan events.
          <br />
          <span className="italic text-[#9CA195]">We craft legacies.</span>
        </motion.h2>

        {/* Vertical divider line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ originY: 0 }}
          className="mt-10 w-px h-10 bg-linear-to-b from-[#C9A96E] to-transparent"
        />

        {/* Body */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-6 font-lato text-[#6b5f5a] text-base sm:text-lg leading-relaxed max-w-2xl tracking-wide"
        >
          Every love story is unique. Every celebration deserves to be
          extraordinary. At Forever Fuzed, we bring together artistry,
          intention, and flawless execution — so you can be fully present in
          every moment that matters.
        </motion.p>

        {/* Bottom decorative strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="flex items-center gap-3 mt-10"
        >
          <div className="h-px w-10 bg-[#F2A7B0]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#F2A7B0]" />
          <div className="h-px w-10 bg-[#9CA195]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#9CA195]" />
          <div className="h-px w-10 bg-[#C9A96E]" />
        </motion.div>
      </div>
    </section>
  );
}
