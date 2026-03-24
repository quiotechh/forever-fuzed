"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function FounderTeaser() {
  return (
    <section className="bg-white py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* ── Image side ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative sage background block */}
          <div className="absolute -top-6 -left-6 w-3/4 h-full bg-[#9CA195]/10 -z-10" />

          {/* Photo */}
          <div className="relative aspect-3/4 rounded-4xl w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/founder.jpg"
              alt="Surbhi Singh — Founder of Forever Fuzed"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover object-top"
            />
            {/* Subtle gold overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#C9A96E]/20 to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 -right-4 lg:-right-10 bg-white border border-[#e8ddd5] px-7 py-5 shadow-sm"
          >
            <p className="font-cormorant text-[#C9A96E] text-4xl font-light">
              50+
            </p>
            <p className="font-lato text-[#6b5f5a] text-[10px] tracking-[0.2em] uppercase mt-1">
              Weddings Curated
            </p>
          </motion.div>
        </motion.div>

        {/* ── Text side ── */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
              The Founder
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl leading-[1.1]"
          >
            Surbhi Singh
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-lato text-[#C9A96E] text-[11px] tracking-[0.2em] uppercase mt-2"
          >
            Luxury Event Curator · Canada & India
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ originX: 0 }}
            className="mt-7 mb-7 h-px w-16 bg-[#9CA195]"
          />

          {/* Bio snippet */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-lato text-[#6b5f5a] text-base leading-relaxed"
          >
            From planning weddings in India to refining her craft across Canada,
            Surbhi brings a decade of global experience to every celebration.
            Her own destination wedding — a multi-crore event coordinated from
            overseas — revealed a gap no one was filling for NRIs. That gap
            became her mission.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-lato text-[#6b5f5a] text-base leading-relaxed mt-4"
          >
            Forever Fuzed exists to give NRIs and globally based couples the
            luxury, trust, and seamless execution they deserve — for the
            celebration of a lifetime.
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 pl-5 border-l-2 border-[#F2A7B0]"
          >
            <p className="font-cormorant italic text-[#9CA195] text-xl leading-snug">
              {'"'}That experience didn{"'"}t just inspire me — it defined my
              purpose.{'"'}
            </p>
            <cite className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#b8a99a] not-italic mt-2 block">
              — Surbhi Singh
            </cite>
          </motion.blockquote>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10"
          >
            <Link href="/about">
              <button className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.25em] uppercase px-8 py-3.5 border border-[#3a2e2a] text-[#3a2e2a] transition-all duration-300">
                <span className="absolute inset-0 bg-[#3a2e2a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Read Her Story
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
