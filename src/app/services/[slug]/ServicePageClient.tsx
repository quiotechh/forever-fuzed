"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData, type ServiceData } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// ── Main client component ──────────────────────────────────────────────────────
export default function ServicePageClient({ slug }: { slug: string }) {
  const service = servicesData[slug];

  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((p) =>
      p === null ? null : p === 0 ? service.galleryImages.length - 1 : p - 1,
    );
  const next = () =>
    setLightbox((p) =>
      p === null
        ? null
        : p === service.galleryImages.length - 1
          ? 0
          : p + 1,
    );

  const row1 = service.galleryImages.slice(0, 4);
  const row2 = service.galleryImages.slice(4, 8);

  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="relative h-screen min-h-150 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: `linear-gradient(135deg, ${service.accent}55 0%, transparent 60%)`,
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/40 to-transparent" />
        </div>

        {/* Corner flourishes */}
        <div
          className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t pointer-events-none z-20"
          style={{ borderColor: `${service.accent}55` }}
        />
        <div
          className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t pointer-events-none z-20"
          style={{ borderColor: `${service.accent}55` }}
        />

        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-24 z-20 hidden md:flex flex-col items-center gap-3">
          <div className="h-14 w-px bg-white/25" />
          <span className="font-lato text-white/40 text-[9px] tracking-[0.35em] uppercase [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>

        {/* Hero copy */}
        <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="h-px w-12" style={{ backgroundColor: service.accent }} />
            <span
              className="font-lato text-[10px] tracking-[0.35em] uppercase"
              style={{ color: service.accent }}
            >
              Our Services — {service.number}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cormorant text-white font-light leading-[1.06] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] max-w-3xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 font-cormorant italic text-white/70 text-2xl md:text-3xl font-light"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* ── 2. Overview ── */}
      <section className="bg-[#FAF8F5] py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10" style={{ backgroundColor: service.accent }} />
              <span
                className="font-lato text-[10px] tracking-[0.35em] uppercase"
                style={{ color: service.accent }}
              >
                Overview
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant text-[#3a2e2a] font-light text-3xl md:text-4xl leading-snug mb-8"
            >
              {service.intro}
            </motion.p>

            {service.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="font-lato text-[#6b5f5a] text-sm leading-[1.9] mb-4 last:mb-0"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link href="/contact">
                <button
                  className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.3em] uppercase px-10 py-4 border transition-all duration-300"
                  style={{ borderColor: service.accent, color: service.accent }}
                >
                  <span
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                    style={{ backgroundColor: service.accent }}
                  />
                  <span className="relative group-hover:text-white transition-colors duration-300">
                    Book a Consultation
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-120 md:h-140 overflow-hidden">
              <Image
                src={service.overviewImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2"
                style={{ borderColor: service.accent }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 -z-10 opacity-20"
              style={{ backgroundColor: service.accent }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 3. Highlights ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: service.accent }} />
              <span
                className="font-lato text-[10px] tracking-[0.35em] uppercase"
                style={{ color: service.accent }}
              >
                What&apos;s Included
              </span>
              <div className="h-px w-10" style={{ backgroundColor: service.accent }} />
            </div>
            <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl md:text-5xl leading-tight">
              Crafted with{" "}
              <span className="italic" style={{ color: service.accent }}>
                intention
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8ddd5]">
            {service.highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white p-8 group hover:bg-[#faf8f5] transition-colors duration-300"
              >
                <div
                  className="w-6 h-px mb-5 transition-all duration-300 group-hover:w-10"
                  style={{ backgroundColor: service.accent }}
                />
                <p className="font-cormorant text-[#3a2e2a] font-light text-xl leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Gallery ── */}
      <section className="bg-[#FAF8F5] py-24 md:py-32 overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ backgroundColor: service.accent }} />
                <span
                  className="font-lato text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: service.accent }}
                >
                  Our Work
                </span>
              </div>
              <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[52px] leading-[1.1]">
                Moments We&apos;ve
                <br />
                <span className="italic" style={{ color: service.accent }}>
                  Made Eternal
                </span>
              </h2>
            </div>
            <p className="font-lato text-[#9a8f8a] text-sm max-w-xs leading-relaxed hidden md:block">
              Click any image to explore.
            </p>
          </motion.div>
        </div>

        <GalleryMarqueeRow
          images={row1}
          direction="left"
          heightClass="h-80"
          aspectClass="aspect-[3/4]"
          onOpen={(i) => setLightbox(i)}
        />

        <div className="h-3" />

        <GalleryMarqueeRow
          images={row2}
          direction="right"
          heightClass="h-56"
          aspectClass="aspect-square"
          onOpen={(i) => setLightbox(i + 4)}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-14 px-6"
        >
          <Link href="/gallery">
            <button className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.3em] uppercase px-10 py-4 border border-[#3a2e2a] text-[#3a2e2a] transition-all duration-300">
              <span className="absolute inset-0 bg-[#3a2e2a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                View Full Gallery
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center px-4"
              onClick={() => setLightbox(null)}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute top-6 left-6 font-lato text-[10px] tracking-[0.25em] uppercase text-white/40 z-10">
                {lightbox + 1} / {service.galleryImages.length}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 p-2"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl aspect-[4/3] mx-12 md:mx-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={service.galleryImages[lightbox].src}
                  alt={service.galleryImages[lightbox].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
                <div className="absolute -bottom-10 left-0 flex items-center gap-3">
                  <div className="h-px w-6" style={{ backgroundColor: service.accent }} />
                  <span className="font-lato text-[9px] tracking-[0.25em] uppercase text-white/40">
                    {service.galleryImages[lightbox].category}
                  </span>
                </div>
              </motion.div>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── 5. CTA ── */}
      <ServiceCTA service={service} />
    </main>
  );
}

// ── Gallery Marquee Row ────────────────────────────────────────────────────────
function GalleryMarqueeRow({
  images,
  direction,
  heightClass,
  aspectClass,
  onOpen,
}: {
  images: { src: string; alt: string; category: string }[];
  direction: "left" | "right";
  heightClass: string;
  aspectClass: string;
  onOpen: (i: number) => void;
}) {
  const doubled = [...images, ...images, ...images];
  const animateX = direction === "left" ? ["-33.33%", "0%"] : ["0%", "-33.33%"];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{ x: animateX }}
        transition={{
          x: {
            duration: direction === "left" ? 28 : 22,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((img, i) => (
          <motion.div
            key={i}
            onClick={() => onOpen(i % images.length)}
            className={`relative shrink-0 ${heightClass} ${aspectClass} overflow-hidden cursor-pointer`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="400px"
              className="object-cover transition-transform duration-700 hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/35 transition-all duration-400 flex items-end p-4">
              <span className="font-lato text-[9px] tracking-[0.25em] uppercase text-white opacity-0 hover:opacity-100 transition-opacity duration-300 border-b border-white/50 pb-0.5">
                {img.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#FAF8F5] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#FAF8F5] to-transparent pointer-events-none z-10" />
    </div>
  );
}

// ── Service CTA ────────────────────────────────────────────────────────────────
function ServiceCTA({ service }: { service: ServiceData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);
  const headingX = useTransform(springX, [-0.5, 0.5], ["-12px", "12px"]);
  const headingY = useTransform(springY, [-0.5, 0.5], ["-8px", "8px"]);
  const subX = useTransform(springX, [-0.5, 0.5], ["-6px", "6px"]);
  const subY = useTransform(springY, [-0.5, 0.5], ["-4px", "4px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative h-[85vh] min-h-145 overflow-hidden flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={service.ctaBgImage}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${service.accent}40 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Particles */}
      {particlesReady && (
        <Particles
          className="absolute inset-0 z-10 pointer-events-none"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              number: { value: 35 },
              color: { value: [service.accent, "#ffffff", "#C9A96E", "#F2A7B0"] },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.2, max: 0.7 },
                animation: { enable: true, speed: 0.8, sync: false },
              },
              size: { value: { min: 1, max: 3.5 } },
              move: {
                enable: true,
                direction: "top",
                speed: { min: 0.4, max: 1.8 },
                straight: false,
                outModes: { default: "out" },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{
          background: [
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
            "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D tilt content */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-12" style={{ backgroundColor: service.accent }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: service.accent }} />
          <div className="h-px w-12" style={{ backgroundColor: service.accent }} />
        </motion.div>

        <motion.h2
          style={{ x: headingX, y: headingY, translateZ: "40px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08]"
        >
          {service.ctaHeading}
          <br />
          <span className="italic" style={{ color: service.accent }}>
            {service.ctaItalic}
          </span>
        </motion.h2>

        <motion.p
          style={{ x: subX, y: subY, translateZ: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-lato text-white/65 text-sm sm:text-base leading-relaxed mt-7 max-w-lg tracking-wide"
        >
          {service.ctaSubtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ translateZ: "30px" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <Link href="/contact">
            <button
              className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 text-white transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: service.accent }}
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <span className="relative">Begin Your Journey</span>
            </button>
          </Link>
          <Link href={`/services/${service.nextSlug}`}>
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-white/50 text-white transition-all duration-300 hover:border-white">
              <span className="absolute inset-0 bg-white/8 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Next Service →</span>
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 mt-14"
        >
          <div className="h-px w-8 bg-[#F2A7B0]/50" />
          <div className="w-1 h-1 rotate-45 bg-[#F2A7B0]/50" />
          <div className="h-px w-8 bg-[#9CA195]/50" />
          <div className="w-1 h-1 rotate-45 bg-[#9CA195]/50" />
          <div className="h-px w-8 bg-[#C9A96E]/50" />
        </motion.div>
      </motion.div>

      {/* Corner flourishes */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#C9A96E]/25 pointer-events-none z-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#C9A96E]/25 pointer-events-none z-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#C9A96E]/25 pointer-events-none z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#C9A96E]/25 pointer-events-none z-20" />
    </section>
  );
}
