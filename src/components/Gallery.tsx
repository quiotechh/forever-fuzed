"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portraitImages = [
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Wedding ceremony",
    category: "Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Bridal portrait",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding decor",
    category: "Decor",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
    alt: "Reception",
    category: "Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Floral design",
    category: "Florals",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    alt: "Couple portrait",
    category: "Portraits",
  },
];

const squareImages = [
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    alt: "Wedding details",
    category: "Details",
  },
  {
    src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80",
    alt: "Celebration",
    category: "Celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
    alt: "Entertainment",
    category: "Entertainment",
  },
  {
    src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    alt: "Hampers",
    category: "Gifting",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    alt: "Venue",
    category: "Venue",
  },
  {
    src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=600&q=80",
    alt: "Styling",
    category: "Styling",
  },
];

const allImages = [...portraitImages, ...squareImages];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((p) =>
      p === null ? null : p === 0 ? allImages.length - 1 : p - 1,
    );
  const next = () =>
    setLightbox((p) =>
      p === null ? null : p === allImages.length - 1 ? 0 : p + 1,
    );

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                Our Work
              </span>
            </div>
            <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[52px] leading-[1.1]">
              Moments We{"'"}ve
              <br />
              <span className="italic text-[#9CA195]">Made Eternal</span>
            </h2>
          </div>
          <p className="font-lato text-[#9a8f8a] text-sm max-w-xs leading-relaxed hidden md:block">
            Click any image to explore.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — Portrait (3:4), scrolls LEFT */}
      <MarqueeRow
        images={portraitImages}
        direction="left"
        aspectClass="aspect-[3/4]"
        heightClass="h-80"
        baseIndex={0}
        onOpen={(i) => setLightbox(i)}
      />

      <div className="h-3" />

      {/* Row 2 — Square (1:1), scrolls RIGHT */}
      <MarqueeRow
        images={squareImages}
        direction="right"
        aspectClass="aspect-square"
        heightClass="h-56"
        baseIndex={portraitImages.length}
        onOpen={(i) => setLightbox(i + portraitImages.length)}
      />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
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
              {lightbox + 1} / {allImages.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
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
              className="relative w-full max-w-3xl aspect-4/3 mx-12 md:mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[lightbox].src}
                alt={allImages[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute -bottom-10 left-0 flex items-center gap-3">
                <div className="h-px w-6 bg-[#C9A96E]" />
                <span className="font-lato text-[9px] tracking-[0.25em] uppercase text-white/40">
                  {allImages[lightbox].category}
                </span>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Marquee Row ──
function MarqueeRow({
  images,
  direction,
  aspectClass,
  heightClass,
  onOpen,
}: {
  images: typeof portraitImages;
  direction: "left" | "right";
  aspectClass: string;
  heightClass: string;
  baseIndex: number;
  onOpen: (i: number) => void;
}) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];
  const animateX = direction === "left" ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <div className="relative overflow-hidden group/row">
      <motion.div
        className="flex gap-3"
        animate={{ x: animateX }}
        transition={{
          x: {
            duration: direction === "left" ? 30 : 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{ width: "max-content" }}
        whileHover="paused"
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

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/35 transition-all duration-400 flex items-end p-4">
              <span className="font-lato text-[9px] tracking-[0.25em] uppercase text-white opacity-0 hover:opacity-100 transition-opacity duration-300 border-b border-white/50 pb-0.5">
                {img.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#FAF8F5] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#FAF8F5] to-transparent pointer-events-none z-10" />
    </div>
  );
}
