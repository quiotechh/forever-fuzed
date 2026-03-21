"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Glitter particle config
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 5,
  color: ["#C9A96E", "#F2A7B0", "#9CA195", "#ffffff"][
    Math.floor(Math.random() * 4)
  ],
  opacity: Math.random() * 0.6 + 0.2,
}));

export default function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for 3D tilt
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // 3D transforms
  const rotateX = useTransform(springY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

  // Parallax layers
  const headingX = useTransform(springX, [-0.5, 0.5], ["-12px", "12px"]);
  const headingY = useTransform(springY, [-0.5, 0.5], ["-8px", "8px"]);
  const subX = useTransform(springX, [-0.5, 0.5], ["-6px", "6px"]);
  const subY = useTransform(springY, [-0.5, 0.5], ["-4px", "4px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovering(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-[85vh] min-h-145 overflow-hidden flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#3D4F3C]/40" />
      </div>

      {/* Glitter particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
            animate={{
              y: [0, -60, -120],
              opacity: [0, p.opacity, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Shimmer sweep overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{
          background: [
            "linear-gradient(105deg, transparent 40%, rgba(201,169,110,0.04) 50%, transparent 60%)",
            "linear-gradient(105deg, transparent 0%, rgba(201,169,110,0.06) 50%, transparent 100%)",
            "linear-gradient(105deg, transparent 40%, rgba(201,169,110,0.04) 50%, transparent 60%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D tilt wrapper */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-[#C9A96E]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="h-px w-12 bg-[#C9A96E]" />
        </motion.div>

        {/* Heading — deepest parallax layer */}
        <motion.h2
          style={{ x: headingX, y: headingY, translateZ: "40px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08]"
        >
          Your Story Deserves
          <br />
          <span className="italic text-[#F2A7B0]">A Perfect Beginning</span>
        </motion.h2>

        {/* Subtext — mid parallax layer */}
        <motion.p
          style={{ x: subX, y: subY, translateZ: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-lato text-white/65 text-sm sm:text-base leading-relaxed mt-7 max-w-lg tracking-wide"
        >
          Let{"'"}s craft something extraordinary together. Reach out and let us
          bring your vision to life.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ translateZ: "30px" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          {/* Primary with shimmer */}
          <Link href="/contact">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 bg-[#C9A96E] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/40">
              {/* Base hover fill */}
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <span className="relative">Begin Your Journey</span>
            </button>
          </Link>

          {/* Secondary */}
          <Link href="/gallery">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-white/50 text-white transition-all duration-300 hover:border-[#F2A7B0]">
              <span className="absolute inset-0 bg-white/8 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              <span className="relative">View Our Work</span>
            </button>
          </Link>
        </motion.div>

        {/* Bottom ornament */}
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
