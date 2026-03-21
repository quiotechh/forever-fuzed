"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Surbhi understood our vision before we even articulated it fully. Every detail — from the mandap florals to the guest welcome kits — was flawlessly executed. Planning from Toronto felt completely stress-free.",
    name: "Priya & Arjun Mehta",
    event: "Destination Wedding · Udaipur, Rajasthan",
    initials: "PM",
    accent: "#F2A7B0",
  },
  {
    quote:
      "As an NRI couple planning our wedding in Jaipur from Vancouver, we were terrified of the logistics. Forever Fuzed handled everything end-to-end. Our guests are still talking about it two years later.",
    name: "Simran & Karan Bedi",
    event: "Royal Wedding · Jaipur, Rajasthan",
    initials: "SB",
    accent: "#C9A96E",
  },
  {
    quote:
      "What sets Forever Fuzed apart is the personal attention. Surbhi flew to meet us in Canada before a single detail was planned. That level of trust and commitment is rare — and priceless.",
    name: "Anika & Rohan Sharma",
    event: "Destination Wedding · Goa",
    initials: "AS",
    accent: "#F2A7B0",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section className="bg-[#3D4F3C] py-24 md:py-36 px-6 overflow-hidden relative">
      {/* Decorative large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-cormorant text-[200px] md:text-[300px] font-light text-white/3 leading-none">
          Love
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                Client Stories
              </span>
            </div>
            <h2 className="font-cormorant text-white font-light text-4xl sm:text-5xl md:text-[52px] leading-[1.1]">
              Words From
              <br />
              <span className="italic text-[#F2A7B0]">Our Couples</span>
            </h2>
          </motion.div>

          {/* Dot navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative flex items-center justify-center w-8 h-8 transition-all duration-300"
              >
                <span
                  className="absolute inset-0 rounded-full border transition-all duration-300"
                  style={{
                    borderColor:
                      i === active ? t.accent : "rgba(255,255,255,0.2)",
                    backgroundColor:
                      i === active ? `${t.accent}20` : "transparent",
                  }}
                />
                <span
                  className="font-lato text-[9px] tracking-wider relative z-10"
                  style={{
                    color: i === active ? t.accent : "rgba(255,255,255,0.4)",
                  }}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border border-white/10"
          >
            {/* Left panel */}
            <div
              className="relative flex flex-col justify-between p-10 md:p-12 overflow-hidden"
              style={{ backgroundColor: `${current.accent}12` }}
            >
              {/* Big quote mark */}
              <span
                className="font-cormorant text-[140px] leading-none select-none absolute -top-4 -left-2 opacity-10"
                style={{ color: current.accent }}
              >
                {'"'}
              </span>

              {/* Initials */}
              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border"
                style={{
                  borderColor: current.accent,
                  backgroundColor: `${current.accent}15`,
                }}
              >
                <span
                  className="font-cormorant text-xl font-light"
                  style={{ color: current.accent }}
                >
                  {current.initials}
                </span>
              </div>

              {/* Name + event */}
              <div className="relative z-10 mt-auto pt-12">
                <p className="font-cormorant text-white text-xl font-light leading-snug">
                  {current.name}
                </p>
                <p
                  className="font-lato text-[10px] tracking-[0.15em] uppercase mt-1.5"
                  style={{ color: `${current.accent}aa` }}
                >
                  {current.event}
                </p>
                {/* Stars */}
                <div className="flex items-center gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: current.accent }}
                      className="text-sm"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col justify-center p-10 md:p-14 bg-white/5 backdrop-blur-sm">
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px mb-8"
                style={{ backgroundColor: current.accent }}
              />

              <blockquote className="font-cormorant text-white/90 font-light text-2xl md:text-3xl lg:text-[30px] leading-[1.55] italic">
                {'"'}
                {current.quote}
                {'"'}
              </blockquote>

              {/* Arrow nav */}
              <div className="flex items-center gap-4 mt-12">
                <button
                  onClick={() =>
                    setActive((p) =>
                      p === 0 ? testimonials.length - 1 : p - 1,
                    )
                  }
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setActive((p) =>
                      p === testimonials.length - 1 ? 0 : p + 1,
                    )
                  }
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                >
                  →
                </button>
                <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-white/30 ml-2">
                  {active + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mt-14"
        >
          <div className="h-px flex-1 bg-white/10" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/40" />
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
