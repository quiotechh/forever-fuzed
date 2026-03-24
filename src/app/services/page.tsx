"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "./[slug]/data";

const services = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  ...data,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[75vh] min-h-130 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
            alt="Our Services"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[#3D4F3C]/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/40 to-transparent" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t border-[#C9A96E]/30 pointer-events-none z-20" />
        <div className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t border-[#C9A96E]/30 pointer-events-none z-20" />

        <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
              What We Offer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cormorant text-white font-light leading-[1.06] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] max-w-3xl"
          >
            Our{" "}
            <span className="italic text-[#F2A7B0]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 font-cormorant italic text-white/70 text-2xl md:text-3xl font-light"
          >
            Every detail, thoughtfully crafted.
          </motion.p>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-sm">✦</span>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>
          <p className="font-cormorant text-[#3a2e2a] font-light text-2xl md:text-3xl leading-snug">
            We offer a curated suite of luxury services — each designed to transform your celebration into an{" "}
            <span className="italic text-[#9CA195]">unforgettable experience</span>.
          </p>
        </motion.div>
      </section>

      {/* ── Services list — alternating layout ── */}
      <section className="bg-white">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={service.slug} className="border-b border-[#ede6df] last:border-b-0">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className={`relative h-80 md:h-[480px] overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Image
                    src={service.overviewImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />

                  {/* Service number watermark */}
                  <span
                    className="absolute bottom-4 right-5 font-cormorant text-7xl font-light leading-none select-none pointer-events-none"
                    style={{ color: `${service.accent}55` }}
                  >
                    {service.number}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-14 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8" style={{ backgroundColor: service.accent }} />
                    <span
                      className="font-lato text-[9px] tracking-[0.35em] uppercase"
                      style={{ color: service.accent }}
                    >
                      {service.number} / 05
                    </span>
                  </div>

                  <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl md:text-4xl leading-snug mb-4">
                    {service.title}
                  </h2>

                  <p className="font-cormorant italic text-[#6b5f5a] text-xl leading-snug mb-5">
                    {service.tagline}
                  </p>

                  <p className="font-lato text-[#6b5f5a] text-sm leading-[1.9] mb-6">
                    {service.intro} {service.paragraphs[0]}
                  </p>

                  {/* Highlights — first 3 */}
                  <ul className="mb-8 space-y-2">
                    {service.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="mt-2 w-3 h-px shrink-0"
                          style={{ backgroundColor: service.accent }}
                        />
                        <span className="font-lato text-[#6b5f5a] text-xs leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`}>
                    <button
                      className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.3em] uppercase px-8 py-3.5 border transition-all duration-300 w-fit"
                      style={{ borderColor: service.accent, color: service.accent }}
                    >
                      <span
                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                        style={{ backgroundColor: service.accent }}
                      />
                      <span className="relative group-hover:text-white transition-colors duration-300">
                        Explore Service →
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA strip ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
            alt=""
            fill
            className="object-cover object-center"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute top-8 left-8 w-14 h-14 border-l border-t border-[#C9A96E]/30 pointer-events-none" />
        <div className="absolute top-8 right-8 w-14 h-14 border-r border-t border-[#C9A96E]/30 pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-14 h-14 border-l border-b border-[#C9A96E]/30 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-14 h-14 border-r border-b border-[#C9A96E]/30 pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>

          <h2 className="font-cormorant text-white font-light text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-6">
            Ready to Begin Your
            <br />
            <span className="italic text-[#F2A7B0]">Forever Story?</span>
          </h2>

          <p className="font-lato text-white/60 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Let&apos;s create something extraordinary together. Every celebration deserves to be unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 bg-[#C9A96E] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/30">
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Book a Consultation</span>
              </button>
            </Link>
            <Link href="/gallery">
              <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-white/50 text-white transition-all duration-300 hover:border-white">
                <span className="absolute inset-0 bg-white/8 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">View Our Work</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
