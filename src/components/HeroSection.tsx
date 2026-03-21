"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden">
      {/* ── Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setLoaded(true)}
        poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className={cn(
            "font-cormorant text-white font-light leading-[1.08] transition-all duration-1000 delay-300",
            "text-5xl sm:text-6xl md:text-7xl lg:text-[88px]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          Where Every Moment
          <br />
          <span className="italic text-[#F2A7B0]">Becomes</span> a Memory
        </h1>

        <div
          className={cn(
            "mt-10 transition-all duration-1000 delay-500",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <Link href="/contact">
            <button className="relative overflow-hidden group px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.3em] uppercase font-lato transition-all duration-300">
              <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                Book a Consultation
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700",
          loaded ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="w-px h-12 bg-linear-to-b from-[#C9A96E]/80 to-transparent animate-pulse" />
      </div>

      {/* ── Corner flourishes ── */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#C9A96E]/25 pointer-events-none" />
    </section>
  );
}
