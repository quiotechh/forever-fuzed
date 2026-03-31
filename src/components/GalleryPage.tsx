"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Placeholder image sets ──
// Replace src values with your actual image paths e.g. "/gallery/img1.jpg"
const featuredImages = [
  {
    src: "/DEEP9489.JPG",
    alt: "Grand wedding ceremony",
    label: "The Ceremony",
    aspect: "aspect-[4/5]", // tall left
  },
  {
    src: "/DEEP7480.JPG",
    alt: "Bridal portrait",
    label: "Bridal Portraits",
    aspect: "aspect-[3/4]", // tall right top
  },
  {
    src: "/DEEP7482.jpg",
    alt: "Reception decor",
    label: "Reception Decor",
    aspect: "aspect-video", // wide right bottom
  },
];

const gridImages = [
  { src: "/DEEP9495.JPG", alt: "Wedding details" },
  { src: "/DEEP9500.JPG", alt: "Floral arrangement" },
  { src: "/DEEP8532.jpg", alt: "Couple portrait" },
  { src: "/DEEP8513.JPG", alt: "Wedding table" },
  { src: "/DEEP7563.jpg", alt: "Celebration moments" },
  { src: "/DEEP7466.jpg", alt: "Entertainment" },
  { src: "/DEEP7069.jpg", alt: "Wedding hampers" },
  { src: "/DEEP7085.jpg", alt: "Venue exterior" },
  { src: "/009A2373.jpg", alt: "Bridal styling" },
  { src: "/DEEP7060.jpg", alt: "Ring ceremony" },
  { src: "/DEEP7475.jpg", alt: "Mehendi" },
  { src: "/DEEP7476.jpg", alt: "Sangeet night" },
];

// Extra row — wide horizontal images
const wideImages = [
  { src: "/009A2086.jpg", alt: "Grand venue" },
  { src: "/_UB_2694.jpg", alt: "Mandap decor" },
  { src: "/DEEP7050.jpg", alt: "Reception hall" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-120 overflow-hidden flex items-end pb-16">
        <div className="absolute inset-0">
          <Image
            src="/DEEP9452.jpg"
            alt="Gallery hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                Our Portfolio
              </span>
            </div>
            <h1 className="font-cormorant text-white font-light text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Moments We{"'"}ve
              <br />
              <span className="italic text-[#F2A7B0]">Made Eternal</span>
            </h1>
            <p className="font-lato text-white/60 text-sm mt-5 max-w-md leading-relaxed tracking-wide">
              A visual journey through our most unforgettable celebrations —
              curated with love, executed with precision.
            </p>
          </motion.div>
        </div>

        {/* Corner flourishes */}
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#C9A96E]/25 pointer-events-none z-10" />
      </section>

      {/* ── Featured Mixed Layout ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-10 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
            Featured
          </span>
        </motion.div>

        {/* Featured: big left + stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-3">
          {/* Large left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-3/4 lg:aspect-auto lg:row-span-2 overflow-hidden group"
          >
            <Image
              src={featuredImages[0].src}
              alt={featuredImages[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
            {/* Label */}
            <div className="absolute bottom-5 left-5">
              <span className="font-cormorant italic text-white/80 text-lg">
                {featuredImages[0].label}
              </span>
            </div>
          </motion.div>

          {/* Right top */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-4/3 overflow-hidden group"
          >
            <Image
              src={featuredImages[1].src}
              alt={featuredImages[1].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-4 left-4">
              <span className="font-cormorant italic text-white/80 text-base">
                {featuredImages[1].label}
              </span>
            </div>
          </motion.div>

          {/* Right bottom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-4/3 overflow-hidden group"
          >
            <Image
              src={featuredImages[2].src}
              alt={featuredImages[2].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-4 left-4">
              <span className="font-cormorant italic text-white/80 text-base">
                {featuredImages[2].label}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#e8ddd5]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/50" />
          <div className="h-px flex-1 bg-[#e8ddd5]" />
        </div>
      </div>

      {/* ── Main Grid ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-10 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
            The Collection
          </span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {gridImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative overflow-hidden group ${
                i === 0 || i === 5 ? "col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Wide panoramic row ── */}
      <section className="py-4 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          {wideImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative w-full aspect-21/9 overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom quote ── */}
      <section className="py-24 px-6 flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>
          <p className="font-cormorant italic text-[#3a2e2a] text-3xl sm:text-4xl md:text-5xl font-light max-w-2xl leading-[1.2]">
            {'"'}Every image tells a story.
            <br />
            <span className="text-[#9CA195]">Every story is forever.{'"'}</span>
          </p>
          <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mt-6">
            — Forever Fuzed
          </p>
        </motion.div>
      </section>

    </main>
  );
}