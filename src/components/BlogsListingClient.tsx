"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/Cta";
import { blogs } from "@/app/blogs/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BlogsListingClient() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-screen min-h-150 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80"
          alt="The Journal — Forever Fuzed"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className={cn(
              "font-cormorant text-white font-light leading-[1.08] transition-all duration-1000 delay-300",
              "text-5xl sm:text-6xl md:text-7xl lg:text-[88px]",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            Stories of
            <br />
            <span className="italic text-[#F2A7B0]">Love &amp; Design</span>
          </h1>

          <div
            className={cn(
              "mt-10 transition-all duration-1000 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Link href="#articles">
              <button className="relative overflow-hidden group px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.3em] uppercase font-lato transition-all duration-300">
                <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Read the Journal
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700",
            loaded ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="w-px h-12 bg-linear-to-b from-[#C9A96E]/80 to-transparent animate-pulse" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#C9A96E]/25 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#C9A96E]/25 pointer-events-none" />
      </section>

      {/* ── Intro strip ──────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e8e2da] py-12 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-cormorant italic text-[#3a2e2a] text-xl sm:text-2xl font-light leading-[1.6]">
            Perspectives on love, design, and the art of crafting unforgettable celebrations.
          </p>
        </motion.div>
      </section>

      {/* ── Blog grid ────────────────────────────────────────── */}
      <section id="articles" className="bg-[#FAF8F5] py-20 sm:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-14"
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
              All Articles
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — same as home page ───────────────────────────── */}
      <CTABanner />
    </main>
  );
}
